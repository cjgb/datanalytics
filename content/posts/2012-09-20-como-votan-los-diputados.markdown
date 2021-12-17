---
author: Carlos J. Gil Bellosta
date: 2012-09-20 07:24:25+00:00
draft: false
title: ¿Cómo votan los diputados?

url: /2012/09/20/como-votan-los-diputados/
categories:
- estadística
- números
tags:
- datos abiertos
- estadística
- números
---

Tras leer el otro día [Visualizando la matriz de acuerdo legislativo](http://computandocienciapolitica.blogspot.com.es/2011/12/visualuzacion-matriz-de-acuerdo.html), pensé que esta bitácora no podía quedarse atrás. Casi desisto. Pero cerrando ya casi el navegador vi que en la [página de las votaciones del Congreso de los Diputados](http://www.congreso.es/portal/page/portal/Congreso/Congreso/Actualidad/Votaciones) había dos enlaces aprovechables: en uno ponía XML y en el otro, "histórico".

He aquí pues el código concomitante que fue apareciendo en mi sesión de RStudio:



    library(<a href="http://inside-r.org/packages/cran/XML">XML)
    library(reshape)
    library(<a href="http://inside-r.org/packages/cran/corrgram">corrgram)
    library(<a href="http://inside-r.org/packages/cran/psych">psych)

    # descarga y manipulación de datos

    dia.votacion <- function( n.votacion ){
        <a href="http://inside-r.org/r-doc/base/dir.create">dir.create( "tmp")
        url <- paste( "http://www.congreso.es/votaciones/OpenData?sesion=",
             n.votacion, "&completa=1&legislatura=10", sep = "" )
        <a href="http://inside-r.org/r-doc/utils/download.file">download.file( url, destfile = "./tmp/votos.zip")
        try( <a href="http://inside-r.org/r-doc/utils/unzip">unzip( "./tmp/votos.zip", exdir = "./tmp"), TRUE )

        ficheros <- dir( "./tmp", pattern = ".*xml", full.names = T )

        if ( length(ficheros ) == 0)
            return(NULL)

        res <- sapply( ficheros, function( fichero ){
            datos <- xmlTreeParse(fichero)
            datos <- xmlToList(datos)$Votaciones

            if( <a href="http://inside-r.org/r-doc/base/is.null">is.null(datos) )
                return(NULL)

            datos <- <a href="http://inside-r.org/r-doc/base/as.data.frame">as.data.frame( t(datos) )
            datos <- <a href="http://inside-r.org/r-doc/base/as.data.frame">as.data.frame( lapply( datos, unlist ) )
          },
          simplify = F
        )

        unlink( "./tmp", recursive = T)      # borra el directorio temporal

        res
    }

    res <- list()
    for ( i in  1:54 ) res <- c( res, dia.votacion(i) )
    # la 32, 33 está trucha
    for ( i in 34:54 ) res <- c( res, dia.votacion(i) )



Con él se pueden bajar unas docenas de ficheros XML correspondientes a ciertos plenos de la [X Legislatura](http://es.wikipedia.org/wiki/X_Legislatura_de_Espa%C3%B1a), procesarlos mínimamente y guardarlos en la lista `res`. No estoy seguro de la profundidad histórica de los datos (aparentemente, sólo están disponibles los del 2012, aunque la X Legislatura arrancó, creo, antes). Además, falla la descarga de los ficheros correspondientes a las sesiones 32 y 33. Ese es el motivo por el que he tenido que recurrir a `for`, como los gañanes, en lugar de utiliza `sapply`, como era mi natural inclinación.

Haciendo



    tmp <- res[ ! unlist(lapply(res, <a href="http://inside-r.org/r-doc/base/is.null">is.null) ) ]
    names(tmp) <- paste( "votacion", 1:length(tmp), sep = "_")
    tmp <- lapply( names(tmp), function(x) data.frame( votacion = x, tmp[[x]]))
    votos <- do.call( rbind, tmp )
    rownames(votos) <- NULL
    votos <- votos[,-2]          # elimino el "asiento"



genero un objeto, `votos`, cuyas seis primeras filas tienen este aspecto:



    <code>    votacion                            Diputado Voto
    1 votacion_1          Muñoz González, Pedro José   Sí
    2 votacion_1         González Vázquez, Sebastián   Sí
    3 votacion_1                Ramis Socias, Miquel   Sí
    4 votacion_1 Ares Martínez-Fortún, María de la O   Sí
    5 votacion_1            Grau Reinés, Juan Carlos   Sí
    6 votacion_1             Fajarnés Ribas, Enrique   Sí</code>



En total, hay 350 diputados que han votado 438 asuntos.

Si uno hace



    ausentes <- subset( votos, Voto == "No vota")
    sort(table(ausentes$Diputado))



puede saber cuáles son los que han dejado de votar en más ocasiones por los motivos que sean. Dejaré que sean otros los que publiquen la salida de estas sentencias. Porque a mí me interesan más las correlaciones. Para lo cual, creo así



    votos$ind <- 0
    votos$ind[votos$Voto == "Sí"] <- 1
    votos$ind[votos$Voto == "No"] <- -1

    tmp <- subset(votos, select = -Voto)
    tmp <- cast( votos, Diputado ~ votacion )

    where.na <- apply( tmp, 1, function(x) any(is.na(x)))
    tmp <- tmp[!where.na,]

    matriz.votos <- as.matrix( tmp[,-1] )



la matriz `matriz.votos` que tiene diputados en sus filas y votaciones en sus columnas. Esto permite representar mediante



    cor.votos <- <a href="http://inside-r.org/r-doc/stats/cor">cor(t(matriz.votos))
    cor.plot( mat.sort(cor.votos))



la matriz de correlaciones entre los sentidos de los votos de los distintos diputados,

[![](/wp-uploads/2012/09/correlacion_diputados.png)
](/wp-uploads/2012/09/correlacion_diputados.png)

en la que se aprecian claramente dos bloques diferenciados. Me llama la atención, en cualquier caso, la falta de tonos encarnados, muestra de pertinaz desacuerdo, en la figura. De hecho, la correlación más negativa, -0.45; la pareja de diputados tan desencontrados es la formada por [Celia Alberto Pérez](http://www.politicas-pi.com/el-congreso/celia-alberto-perez/) (PP) y [Joan Baldoví](http://es.wikipedia.org/wiki/Joan_Baldov%C3%AD), de un partido raro cuyo perfil leeré en la Wikipedia cuando encuentre un ratillo.

También puede hacerse un gráfico de calor,



    <a href="http://inside-r.org/r-doc/stats/heatmap">heatmap(matriz.votos, xlab = "Asuntos", ylab = "Diputados", scale = "none")



que genera

[![](/wp-uploads/2012/09/diputados_asuntos1.png)
](/wp-uploads/2012/09/diputados_asuntos1.png)

y que reordena diputados por un lado y asuntos por el otro para mostrar de qué manera _inciden_ los unos sobre los otros. Se aprecian bastante claramente los dos grandes grupos políticos y, para mi sorpresa, un par de bloques de asuntos relativamente amplios en los que votaron de acuerdo.

Los datos, estoy seguro, dan para muchas más cosas. Y tengo confianza en que alguien recogerá el guante y nos iluminará con incisivas preguntas y brillantes respuestas. Si en el camino piensa que puedo echarle una mano, que me escriba. Estaré encantado de ayudarle.

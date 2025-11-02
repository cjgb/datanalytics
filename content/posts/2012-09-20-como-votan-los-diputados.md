---
author: Carlos J. Gil Bellosta
categories:
- estadística
- números
date: 2012-09-20 07:24:25+00:00
draft: false
lastmod: '2025-04-06T18:53:24.500211'
related:
- 2018-11-08-siguen-votando-igual-los-diputados.md
- 2016-05-09-encuestas-electorales-medios-y-sesgos-ii.md
- 2013-02-11-voy-a-partir-una-lanza-a-favor-de-rosell-a-cuenta-de-la-epa.md
- 2016-07-04-gestion-de-la-mendacidad-encuestoelectoral-los-numeros.md
- 2016-09-21-votos-en-la-onu-con-r.md
tags:
- datos abiertos
- estadística
- números
- política
title: ¿Cómo votan los diputados?
url: /2012/09/20/como-votan-los-diputados/
---

Tras leer el otro día [Visualizando la matriz de acuerdo legislativo](http://computandocienciapolitica.blogspot.com.es/2011/12/visualuzacion-matriz-de-acuerdo.html), pensé que esta bitácora no podía quedarse atrás. Casi desisto. Pero cerrando ya casi el navegador vi que en la [página de las votaciones del Congreso de los Diputados](http://www.congreso.es/portal/page/portal/Congreso/Congreso/Actualidad/Votaciones) había dos enlaces aprovechables: en uno ponía XML y en el otro, "histórico".

He aquí pues el código concomitante que fue apareciendo en mi sesión de RStudio:

{{< highlight R >}}
library(XML)
library(reshape)
library(corrgram)
library(psych)

# descarga y manipulación de datos

dia.votacion <- function( n.votacion ){
    dir.create("tmp")
    url <- paste( "http://www.congreso.es/votaciones/OpenData?sesion=",
            n.votacion, "&completa=1&legislatura=10", sep = "" )
    download.file(url, destfile = "./tmp/votos.zip")
    try(unzip("./tmp/votos.zip", exdir = "./tmp"), TRUE)

    ficheros <- dir("./tmp", pattern = ".*xml", full.names = T )

    if ( length(ficheros ) == 0)
        return(NULL)

    res <- sapply(ficheros, function(fichero){
        datos <- xmlTreeParse(fichero)
        datos <- xmlToList(datos)$Votaciones

        if( is.null(datos) )
            return(NULL)

        datos <- as.data.frame(t(datos))
        datos <- as.data.frame(lapply( datos, unlist))
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
{{< / highlight >}}

Con él se pueden bajar unas docenas de ficheros XML correspondientes a ciertos plenos de la [X Legislatura](http://es.wikipedia.org/wiki/X_Legislatura_de_Espa%C3%B1a), procesarlos mínimamente y guardarlos en la lista `res`. No estoy seguro de la profundidad histórica de los datos (aparentemente, sólo están disponibles los del 2012, aunque la X Legislatura arrancó, creo, antes). Además, falla la descarga de los ficheros correspondientes a las sesiones 32 y 33. Ese es el motivo por el que he tenido que recurrir a `for`, como los gañanes, en lugar de utiliza `sapply`, como era mi natural inclinación.

Haciendo

{{< highlight R >}}
tmp <- res[ ! unlist(lapply(res, is.null) ) ]
names(tmp) <- paste( "votacion", 1:length(tmp), sep = "_")
tmp <- lapply( names(tmp), function(x) data.frame( votacion = x, tmp[[x]]))
votos <- do.call( rbind, tmp )
rownames(votos) <- NULL
votos <- votos[,-2]          # elimino el "asiento"
{{< / highlight >}}

genero un objeto, `votos`, cuyas seis primeras filas tienen este aspecto:

{{< highlight R >}}
votacion                            Diputado Voto
1 votacion_1          Muñoz González, Pedro José   Sí
2 votacion_1         González Vázquez, Sebastián   Sí
3 votacion_1                Ramis Socias, Miquel   Sí
4 votacion_1 Ares Martínez-Fortún, María de la O   Sí
5 votacion_1            Grau Reinés, Juan Carlos   Sí
6 votacion_1             Fajarnés Ribas, Enrique   Sí
{{< / highlight >}}

En total, hay 350 diputados que han votado 438 asuntos.

Si uno hace

{{< highlight R >}}
ausentes <- subset(votos, Voto == "No vota")
sort(table(ausentes$Diputado))
{{< / highlight >}}

puede saber cuáles son los que han dejado de votar en más ocasiones por los motivos que sean. Dejaré que sean otros los que publiquen la salida de estas sentencias. Porque a mí me interesan más las correlaciones. Para lo cual, creo así

{{< highlight R >}}
votos$ind <- 0
votos$ind[votos$Voto == "Sí"] <- 1
votos$ind[votos$Voto == "No"] <- -1

tmp <- subset(votos, select = -Voto)
tmp <- cast( votos, Diputado ~ votacion )

where.na <- apply( tmp, 1, function(x) any(is.na(x)))
tmp <- tmp[!where.na,]

matriz.votos <- as.matrix(tmp[,-1])
{{< / highlight >}}

la matriz `matriz.votos` que tiene diputados en sus filas y votaciones en sus columnas. Esto permite representar mediante

{{< highlight R >}}
cor.votos <- cor(t(matriz.votos))
cor.plot( mat.sort(cor.votos))
{{< / highlight >}}

la matriz de correlaciones entre los sentidos de los votos de los distintos diputados,

[![](/img/2012/09/correlacion_diputados.png#center)
](/img/2012/09/correlacion_diputados.png#center)

en la que se aprecian claramente dos bloques diferenciados. Me llama la atención, en cualquier caso, la falta de tonos encarnados, muestra de pertinaz desacuerdo, en la figura. De hecho, la correlación más negativa, -0.45; la pareja de diputados tan desencontrados es la formada por [Celia Alberto Pérez](http://www.politicas-pi.com/el-congreso/celia-alberto-perez/) (PP) y [Joan Baldoví](http://es.wikipedia.org/wiki/Joan_Baldov%C3%AD), de un partido raro cuyo perfil leeré en la Wikipedia cuando encuentre un ratillo.

También puede hacerse un gráfico de calor,

{{< highlight R >}}
heatmap(matriz.votos, xlab = "Asuntos", ylab = "Diputados", scale = "none")
{{< / highlight >}}

que genera

[![](/img/2012/09/diputados_asuntos1.png#center)
](/img/2012/09/diputados_asuntos1.png#center)

y que reordena diputados por un lado y asuntos por el otro para mostrar de qué manera _inciden_ los unos sobre los otros. Se aprecian bastante claramente los dos grandes grupos políticos y, para mi sorpresa, un par de bloques de asuntos relativamente amplios en los que votaron de acuerdo.

Los datos, estoy seguro, dan para muchas más cosas. Y tengo confianza en que alguien recogerá el guante y nos iluminará con incisivas preguntas y brillantes respuestas. Si en el camino piensa que puedo echarle una mano, que me escriba. Estaré encantado de ayudarle.
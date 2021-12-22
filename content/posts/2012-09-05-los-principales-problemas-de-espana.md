---
author: Carlos J. Gil Bellosta
date: 2012-09-05 06:38:07+00:00
draft: false
title: Los principales problemas de España

url: /2012/09/05/los-principales-problemas-de-espana/
categories:
- estadística
- números
tags:
- datos abiertos
- estadística
- estadística pública
- gráficos
- números
---

Llevo unos días mostrando bastante poca diligencia en lo que a mi bitácora concierne. El calor con el que agosto ha maltratado los montes también ha contribuido a disipar mis ideas. También a enflaquecer la ya de por sí no muy robusta voluntad.

Y como todavía no ando recuperdo del todo, voy a aprovechar el [estupendo trabajo previo de Gregorio Serrano](http://www.grserrano.es/wp/2012/09/ejemplo-de-web-scraping-indicadores-de-confianza-politica/) (y véase también [este otro](http://www.grserrano.es/wp/2012/09/la-desconfianza-en-los-politicos/) relacionado con el anterior) para facilitar a mis lectores una tarea en la que como ciudadanos probos es probable que estén interesados y que, tal vez sin mi concurso, resultaría excesivamente enojosa.

Si alguna vez se han preguntado por los problemas que más aquejan a los españoles de este último cuarto de siglo, están hoy de enhorabuena porque voy a ponerles la respuesta casi en bandeja.

Los datos proceden del [barómetro del CIS](http://www.cis.es/cis/opencms/ES/11_barometros/indicadores.html), que aunque cada mes trata temas distintos, incluye un conjunto común de preguntas. Una de ellas, de respuesta libre, solicita al encuestado enumerar los tres principales problemas que considera que afligen a la nación. Los resultados pueden verse [aquí](http://www.cis.es/cis/export/sites/default/-Archivos/Indicadores/documentos_html/TresProblemas.html).

Utilizando el código de Gregorio Serrano con algunos retoques, es decir, haciendo



    library(XML)
    library(zoo)
    library(ggplot2)
    library(reshape)

    cis.url <- "http://www.cis.es/cis/export/sites/default/-Archivos/Indicadores/documentos_html/TresProblemas.html"

    ## cargar todas las tablas de la página

    cis.tabs <- readHTMLTable(htmlParse(cis.url))

    ## la que nos interesa es cis.tabs[[2]]
    cis.tab <- cis.tabs[[2]]
    nr <- nrow(cis.tab)
    nc <- ncol(cis.tab)

    fechas <- sapply(cis.tab[1, 2:nc], as.character)
    fechas <- gsub("ene", "jan", fechas)
    fechas <- gsub("abr", "apr", fechas)
    fechas <- gsub("ago", "aug", fechas)
    fechas <- gsub("ene", "jan", fechas)
    fechas <- gsub("dic", "dec", fechas)

    fechas <- as.Date(paste("15", fechas, sep = ""), format = "%d%b%y")
    filas <- as.character(cis.tab[2:nr, 1])

    datos <- cis.tab[2:nr, 2:nc]
    datos <- t(sapply(datos, function(x) as.numeric(as.character(x))))

    colnames(datos) <- cis.tab$V1[-1]
    rownames(datos) <- as.character(fechas)

    datos <- datos[,1:(ncol(datos) - 5)]
    dz <- zoo(datos, as.yearmon(fechas), frequency = 12)

    # rellenamos las fechas que faltan
    tmp <- zoo( NULL, order.by = seq(start(dz), end(dz), by = 1/12))
    x <- merge( tmp, dz)
    index(x) <- as.Date(index(x))

    x.df <- data.frame(dates=index(x), coredata(x))
    x.df <- melt(x.df, id="dates", variable="valor")
    ggplot(x.df, aes(x=dates, y=value)) + geom_line() + opts(legend.position = "none") + facet_wrap(~ valor)





se genera el gráfico

[![](/wp-uploads/2012/09/problemas_cis.png)
](/wp-uploads/2012/09/problemas_cis.png)

en el que se entenderían más cosas si algunas etiquetas fuesen menos prolijas.

Y no me voy a entretener ni en comentar ni en aclarar. Dejo más bien el asunto en manos de los interesados con la esperanza de que alguno abunde en el asunto e ilustre a los demás.

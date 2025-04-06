---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2014-04-30 06:51:55+00:00
draft: false
lastmod: '2025-04-06T18:44:34.957942'
related:
- 2012-09-05-los-principales-problemas-de-espana.md
- 2014-10-30-y-si-no-se-mantuvieran.md
- 2017-04-10-pues-si-puede-fabricarse-uno-para-espana.md
- 2011-11-03-2872.md
- 2015-02-09-ejercicios-de-mi-clase-de-r.md
tags:
- embalses
- r
- scraping
title: 'Embalses en España: otro ejercicio inconcluso de "web scraping"'
url: /2014/04/30/embalses-en-espana-otro-ejercicio-inconcluso-de-web-scraping/
---

Vi el otro día que alguien había conseguido datos de la entrada en funcionamiento de las presas de EE.UU. y me picó la curiosidad: ¿se podrán conseguir también para España?

La respuesta es [afirmativa](http://www.seprem.es/presases.php?p=1).

El código para bajarse (y adecentar un poco) la base de datos es:

{{< highlight R >}}
library(XML)

## bajada de datos
tmp <- lapply(1:47,
                function(x)
                readLines(paste("http://www.seprem.es/presases.php?p=",
                                x, sep = "")))
tmp2 <- lapply(tmp, readHTMLTable)

## limpieza de datos
res <- lapply(tmp2, function(x) x[[1]])
res <- do.call(rbind, res)
res <- res[,-c(1,7)]
res <- res[!is.na(res$V2),]
res <- res[-(1:5),]

res <- data.frame(lapply(res, as.character),
    stringsAsFactors=F)
names(res) <- make.names(as.character(res[1,]))

## filtros de filas
res <- res[res$Nombre != "Nombre",]
res <- res[res$Nombre != "",]
res <- res[!grepl("Presas", res$Nombre), ]
res <- res[!grepl("DIQUE DEL", res$Nombre), ]

colnames(res) <- c("nombre", "vertiente",
    "altura", "hm3", "finalizada")
res <- res[!is.na(res$vertiente),]

## texto a numérico
res$altura <- as.numeric(gsub(",", ".", res$altura))
res$hm3 <- as.numeric(gsub(",", ".", res$hm3))
res$finalizada <- as.numeric(res$finalizada)

## más filtros (se aplican a obras que no son embalses)
res <- res[!is.na(res$hm3), ]

## los embalses en construcción no tienen fecha de
## finalización
res$finalizada[is.na(res$finalizada)] <- 2015
{{< / highlight >}}


En cuanto a qué hacer con ellos, me limitaré a mostrar la salida de


{{< highlight R >}}
indices <- res$finalizada > 1900 & res$finalizada < 2014
dat <- tapply(res$hm3[indices], res$finalizada[indices], sum)
plot(as.numeric(names(dat)), dat, type = "l",
        xlab = "año", ylab = "hm3",
        main = "Hectómetros cúbicos por año")
{{< / highlight >}}


que es

[![embalses_espanna](/wp-uploads/2014/04/embalses_espanna.png#center)
](/wp-uploads/2014/04/embalses_espanna.png#center)

y que muestra el número de embalses (ponderados por su capacidad) finalizados por año.

Dejo para otros menos ocupados que yo el indagar cuáles son las más antiguas (¡es sorprendente!) o, para los todavía mucho, mucho, muchísimo más afortunados que yo en lo relativo al ocio el que si Franco hizo o dejó de hacer esto o aquello.
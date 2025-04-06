---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2019-10-03 09:13:02+00:00
draft: false
lastmod: '2025-04-06T19:02:21.445682'
related:
- 2014-11-21-mi-querido-colega-de-iberia.md
- 2013-05-02-data-table-i-cruces.md
- 2012-03-14-c2a1mano-que-mapa.md
- 2017-04-10-pues-si-puede-fabricarse-uno-para-espana.md
- 2013-12-10-te-queda-lejos-el-aeropuerto.md
tags:
- datos
- r
- rvest
- wikipedia
title: flygskam punto ceeseuve
url: /2019/10/03/flygskam-punto-ceeseuve/
---

Para todos aquellos a los que volar les da vergüenza. Para todos aquellos que han sido víctimas de Vueling o Ryanair. Para todos aquellos que saben que cualquier cosa del mundo se puede encontrar mejor y más barata en Lavapiés. Para todos aquellos que han ido a JFK para enterarse de que su vuelo salía de Newark. Para todos aquellos a los que les han cancelado un billete de vuelta porque se durmieron y perdieron la la ida. Para todos aquellos que consideran la manifestación culmen de la estupidez humana el lastimoso espectáculo de doscientos gilipollas saliendo de un avión.

Para todos aquellos, [flygskam](/uploads/flygskam.csv).

Que es un fichero que he construido haciendo

{{< highlight R >}}
library(rvest)
library(plyr)

url <- "https://en.wikipedia.org/wiki/Fuel_economy_in_aircraft"

nodos <- read_html(url)
tablas <- html_table(nodos)[1:5]

tablas <- lapply(1:length(tablas), function(x)
    transform(tablas[[x]], Sector = x))
tablas <- lapply(tablas, function(x) {
    colnames(x) <- tolower(colnames(x))
    colnames(x) <- gsub(".efficiency.", ".", colnames(x))
    x
})

res <- rbind.fill(tablas)
res$fuel.burn <- NULL

res$maker <- gsub(" .*", "", res$model)
res$fuel.per.seat <- as.numeric(gsub(".L.*", "",
    res$fuel.per.seat))

write.csv(res, "flygskam.csv", row.names = FALSE)
{{< / highlight >}}

y que podéis usar para practicar con `ggplot2`, `lme4`, `mgcv` y otros maravillosos paquetes de R.
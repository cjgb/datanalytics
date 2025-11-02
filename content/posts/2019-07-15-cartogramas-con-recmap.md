---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2019-07-15 09:13:02+00:00
draft: false
lastmod: '2025-04-06T18:50:40.224893'
related:
- 2016-05-10-cartogramas-rectangulares-con-r.md
- 2017-03-28-rejillas-poblacionales-con-r-un-borrador.md
- 2017-05-12-me-too-me-too.md
- 2017-04-10-pues-si-puede-fabricarse-uno-para-espana.md
- 2015-05-27-grafos-por-vecindad-en-mapas.md
tags:
- cartogramas
- mapas
- paquetes
- población
- r
- recmap
title: Cartogramas con recmap
url: /2019/07/15/cartogramas-con-recmap/
---

He construido

![](/img/2019/07/Rplot.png#center)

que, obviamente no es la gran maravilla, basándome en [_Rectangular Statistical Cartograms in R:  The recmap Package_](https://www.jstatsoft.org/article/view/v086c01) y usando

{{< highlight R >}}
library(rgdal)
library(pxR)
library(recmap)

provs <- readOGR(dsn = "provincias/",
    layer = "Provincias")

pobl <- as.data.frame(read.px("2852.px",
    encoding = "latin1"), use.codes = T)
pobl2 <- as.data.frame(read.px("2852.px",
    encoding = "latin1"))

pobl$nombre <- pobl2$Provincias

pobl <- pobl[, c("Provincias", "nombre", "value")]
colnames(pobl) <- c("COD_PROV", "nombre", "poblacion")
pobl <- pobl[pobl$COD_PROV != "null",]

pobl <- pobl[!pobl$COD_PROV %in%
    c("51", "52", "38", "07", "35"),]


dat <- merge(provs, pobl,
    by = "COD_PROV", all.x = FALSE)
dat@data$NOM_PROV <- NULL
dat$z <- dat$poblacion

tmp <- as.recmap(dat)

tmp$name <- dat@data$nombre
tmp$ccaa <- dat@data$COD_CCAA

res <- recmapGA(tmp, popSize = 300,
    maxiter = 30, run = 10)

cartogram <- res$Cartogram

ccaa <- tmp[, c("name", "ccaa")]
ccaa$ccaa <- as.numeric(factor(ccaa$ccaa))
cartogram <- merge(cartogram, ccaa)

plot.recmap(cartogram, col.text = "black",
    main = "cartograma -- población\n  españa peninsular",
    col = cartogram$ccaa)
{{< / highlight >}}

Como los datos los he bajado de por ahí y no recuerdo dónde, dejo como referencia el objeto arriba llamado `tmp` [aquí](/uploads/datos_cartograma.rds).
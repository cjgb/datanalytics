---
author: Carlos J. Gil Bellosta
categories:
- estadística
- números
date: 2019-09-13 09:13:21+00:00
draft: false
lastmod: '2025-04-06T19:05:03.726880'
related:
- 2011-11-03-2872.md
- 2023-04-24-estadistica-creativa.md
- 2012-11-28-coma-cero-dos-por-ciento-anda-ya.md
- 2016-06-17-evolucion-historica-de-la-deuda-del-ayuntamiento-de-madrid.md
- 2017-03-29-evolucion-de-la-edad-media-de-la-poblacion-por-provincias.md
tags:
- andalucía
- estadística pública
- kahneman
- r
- rioja
- varianza
title: Del "Andalucía 'first'" al "La Rioja por doquier"
url: /2019/09/13/del-andalucia-first-al-la-rioja-por-doquier/
---

En este blog ya nos hemos graduado del "Andalucía _first_" (sí, esa reiterada manía a recordarnos que en Andalucía siempre hay más de todo lo que correlacione más o menos directamente con el número de habitantes).

Aquí nos llama la atención otro efecto que afecta a los segundos momentos: el "La Rioja por doquier". Verbigracia:

>Principado de Asturias (68,8%), La Rioja (35,5%) y Comunidad de Madrid (10,2%) registran los mayores aumentos anuales en el número de sociedades mercantiles creadas
> INE, un día cualquiera, en cualquier nota de prensa

Obvio. De hecho,

![](/img/2019/09/sociedades_mercantiles.png#center)

Que es un conocimiento que cabe esperar en un lector atento de [Kahneman y cía](https://en.wikipedia.org/wiki/Insensitivity_to_sample_size).

Y, por referencia, el código:

{{< highlight R >}}
library(pxR)
library(reshape2)
library(plyr)

dat <- as.data.frame(read.px("http://www.datanalytics.com/uploads/sociedades_mercantiles_201909.px"))

dat$Forma.jurídica <- NULL
dat$Número.de.sociedades.y.capital..en.miles.de.euros. <- NULL

dat$year <- as.numeric(gsub("M.*", "", dat$Periodo))
dat$mes  <- as.numeric(gsub(".*M", "", dat$Periodo))

dat$Periodo <- NULL

colnames(dat)[1] <- "ccaa"

tmp <- dat
tmp$year <- tmp$year + 1
colnames(tmp)[2] <- "valor_referencia"

res <- merge(dat, tmp)
res <- na.omit(res)
res <- ddply(res, .(ccaa), summarize,
                sd = sd(value / valor_referencia - 1))
res <- na.omit(res)
res <- res[order(res$sd),]
dotchart(100 * res$sd, labels = res$ccaa,
            main = "sd incremento (%)\nsociedades mercantiles")
{{< / highlight >}}
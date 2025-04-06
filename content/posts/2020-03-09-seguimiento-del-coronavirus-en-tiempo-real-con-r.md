---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2020-03-09 14:26:00+00:00
draft: false
lastmod: '2025-04-06T19:07:29.246421'
related:
- 2020-03-10-seguimiento-de-los-nuevos-casos-diarios-de-coronavirus-en-tiempo-real-con-r.md
- 2020-03-19-casos-de-coronavirus-en-madrid-provincia-un-modelo-muy-crudo-basado-en-la-mortalidad.md
- 2017-04-10-pues-si-puede-fabricarse-uno-para-espana.md
- 2011-02-17-enredando-con-el-paquete-googlevis-de-r.md
- 2020-03-20-casos-de-coronavirus-en-madrid-provincia-un-modelo-un-poco-menos-crudo-basado-en-la-mortalidad-ii.md
tags:
- coronavirus
- r
title: Seguimiento del coronavirus en "tiempo real" con R
url: /2020/03/09/seguimiento-del-coronavirus-en-tiempo-real-con-r/
---

Mi código (guarrongo) para seguir la evolución del coronavirus por país en cuasi-tiempo real:

{{< highlight R >}}
library(reshape2)
library(ggplot2)

url <- "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Confirmed.csv"
cvirus <- read.table(url, sep = ",", header = T)

cvirus$Lat <- cvirus$Long <- NULL
cvirus$Province.State <- NULL

cvirus <- melt(cvirus, id.vars = "Country.Region")

colnames(cvirus) <- c("país", "fecha", "casos")

cvirus <- cvirus[cvirus$país %in% c("Italy", "Spain"),]
cvirus$fecha <- as.Date(as.character(cvirus$fecha), format = "X%m.%d.%y")

ggplot(cvirus, aes(x = fecha, y = casos, col = país)) + geom_line()

tmp <- cvirus
tmp$fecha[tmp$país == "Spain"] <- tmp$fecha[tmp$país == "Spain"] - 9
ggplot(tmp, aes(x = fecha, y = casos, col = país)) + geom_line()

tmp <- tmp[tmp$fecha > as.Date("2020-02-14"),]

ggplot(tmp, aes(x = fecha, y = log10(casos), col = país)) + geom_line()
{{< / highlight >}}

Los datos están extraídos de [aquí](https://github.com/CSSEGISandData/COVID-19), por si alguien quiere reemplazar casos por defunciones o recuperados.
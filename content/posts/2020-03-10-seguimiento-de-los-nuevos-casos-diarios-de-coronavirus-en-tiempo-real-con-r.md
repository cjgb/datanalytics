---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2020-03-10 18:23:28+00:00
draft: false
lastmod: '2025-04-06T19:06:00.806152'
related:
- 2020-03-09-seguimiento-del-coronavirus-en-tiempo-real-con-r.md
- 2020-03-19-casos-de-coronavirus-en-madrid-provincia-un-modelo-muy-crudo-basado-en-la-mortalidad.md
- 2017-04-10-pues-si-puede-fabricarse-uno-para-espana.md
- 2020-03-09-una-r-referencia-con-referencias-para-epidemiologos-circunstanciales.md
- 2011-02-17-enredando-con-el-paquete-googlevis-de-r.md
tags:
- coronavirus
- r
title: Seguimiento de los nuevos casos diarios de coronavirus en «tiempo real» con
  R
url: /2020/03/10/seguimiento-de-los-nuevos-casos-diarios-de-coronavirus-en-tiempo-real-con-r/
---

El código usado en

{{< x user="gilbellosta" id="1237443017663041537" >}}

es

{{< highlight R >}}
library(reshape2)
library(ggplot2)
library(plyr)

url <- "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Confirmed.csv"
cvirus <- read.table(url, sep = ",", header = T)

cvirus$Lat <- cvirus$Long <- NULL
cvirus$Province.State <- NULL

cvirus <- melt(cvirus, id.vars = "Country.Region")

colnames(cvirus) <- c("país", "fecha", "casos")
cvirus$fecha <- as.Date(as.character(cvirus$fecha),
    format = "X%m.%d.%y")

tmp <- cvirus[cvirus$país %in% c("Italy", "Spain",
    "France", "Germany", "South Korea", "UK"),]

foo <- function(x){
    x <- x[order(x$fecha),]
    data.frame(fecha = x$fecha[-1],
        casos = diff(x$casos))
}

res <- ddply(tmp, .(país), foo)

res$país <- reorder(res$país, res$casos, function(x) -max(x))

res <- res[res$fecha > as.Date("2020-02-15"),]

ggplot(res, aes(x = fecha, y = casos)) +
    geom_point(size = 0.5) + geom_line(alpha = 0.3) +
    facet_wrap(~país, scales = "free_y") +
    ggtitle("Coronavirus: new daily cases") +
    theme_bw()

ggsave("/tmp/new_daily_cases.png", width = 12,
    height = 8, units = "cm")
{{< / highlight >}}
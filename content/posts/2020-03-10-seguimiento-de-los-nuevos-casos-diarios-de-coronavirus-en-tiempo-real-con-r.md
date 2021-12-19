---
author: Carlos J. Gil Bellosta
date: 2020-03-10 18:23:28+00:00
draft: false
title: Seguimiento de los nuevos casos diarios de coronavirus en «tiempo real» con
  R

url: /2020/03/10/seguimiento-de-los-nuevos-casos-diarios-de-coronavirus-en-tiempo-real-con-r/
categories:
- r
tags:
- coronavirus
- r
---

El código usado en

{{< twitter user="gilbellosta" id="1237443017663041537" >}}

es

{{< highlight R "linenos=true" >}}
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



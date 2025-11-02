---
author: Carlos J. Gil Bellosta
categories:
- finanzas
- gráficos
- r
date: 2013-02-27 07:07:38+00:00
draft: false
lastmod: '2025-04-06T19:00:27.507464'
related:
- 2013-02-28-addenda-que-ha-pasado-en-el-ibex-durante-el-ultimo-mes.md
- 2013-01-09-el-ibex-35-estilo-gapminder.md
- 2016-04-08-clusters-de-trayectorias-con-la-distancia-de-frechet.md
- 2011-12-27-el-lucero-del-alba.md
- 2014-02-18-el-yuyuplot-en-perspectiva.md
tags:
- bolsa
- finanzas
- gráficos
- mercados financieros
- r
title: ¿Qué ha pasado en el Ibex durante el último mes?
url: /2013/02/27/que-ha-pasado-en-el-ibex-durante-el-ultimo-mes/
---

Pues esencialmente esto:

[![](/img/2013/02/ibex201302.png#center)
](/img/2013/02/ibex201302.png#center)

Es decir, un grupo numeroso de valores ha bajado de precio mientras que otros dos grupos han tenido una evolución _en U_ y ha recuperado, con creces incluso, el valor que tenían hace un mes.

Y, como siempre, el código:

{{< highlight R >}}
library(tseries)
library(zoo)
library(XML)
library(reshape)
library(ggplot2)

foo  <- function(simbolo, final = Sys.time(), profundidad = 30 * 24 * 3600 ){
  precios <- get.hist.quote(
    instrument= simbolo, start = final - profundidad,
    end = final, quote=c("AdjClose"),
    provider="yahoo", origin="1970-01-01",
    compression="d", retclass="zoo")
  colnames(precios) <- simbolo
  return(precios)
}

# lista de símbolos del ibex

tmp <- readHTMLTable("http://finance.yahoo.com/q/cp?s=%5EIBEX+Components")[[5]]
tmp <- as.character(tmp$V1[-(1:6)])
tmp <- gsub("-P", "", tmp)
simbolos <- tmp[tmp != "ABG.MC"]

ibex <- do.call(merge, sapply(simbolos, foo, simplify = F))

ibex.scaled <- scale(ibex)

ibex.df <- data.frame(ibex.scaled, fecha = index(ibex.scaled))
ibex.df <- melt(ibex.df, id.vars = "fecha")
ibex.df <- ibex.df[ order(ibex.df$fecha, ibex.df$variable), ]
ibex.df$cluster <- kmeans(data.frame(t(ibex.scaled)), 4)$cluster

ggplot(ibex.df, aes(x=fecha, y=value, group=variable)) +
        geom_line() + facet_wrap(~cluster)
{{< / highlight >}}
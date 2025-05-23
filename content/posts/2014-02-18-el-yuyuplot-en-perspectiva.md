---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2014-02-18 08:41:17+00:00
draft: false
lastmod: '2025-04-06T18:45:33.698082'
related:
- 2012-10-18-algunos-graficos-de-informacion-bursatil.md
- 2013-01-09-el-ibex-35-estilo-gapminder.md
- 2013-02-27-que-ha-pasado-en-el-ibex-durante-el-ultimo-mes.md
- 2010-10-29-c2a1que-mala-suerte-tengo-con-las-anomalias.md
- 2011-12-27-el-lucero-del-alba.md
tags:
- bolsa
- finanzas
- mercados financieros
- r
title: El yuyuplot en perspectiva
url: /2014/02/18/el-yuyuplot-en-perspectiva/
---

El _yuyuplot_ al que me refiero es

[![scary_plot_dj](/wp-uploads/2014/02/scary_plot_dj.jpg)
](/wp-uploads/2014/02/scary_plot_dj.jpg)

un gráfico ha circulado por internet y que [ha causado cierto pánico](http://www.marketwatch.com/story/scary-1929-market-chart-gains-traction-2014-02-11), se ve (y de ahí el nombre). En algunos sitios —véase [este](http://www.gurusblog.com/archives/dow-jones-sp500-grafico-comparativa-1929/04/02/2014/) como ejemplo de los menos acertados— se ha intentado de explicar al público sus deméritos.

El mundo de las finanzas debiera ser la envidia de otros ámbitos por el volumen, variedad y velocidad de los datos disponibles en él. Además, desde tiempo atrás, mucho antes de que el siglo nos trajese el _big data_, la transparencia, el _opendetodo_ y otras concomitancias. A la vez, sin embargo, es inagotable fuente de ejemplos de uso pueril de esos datos. El que nos ocupa es uno de ellos.

El _yuyuplot_ no es otra cosa que una reprensentación prolija y redundante del coeficiente de correlación entre dos segmentos de la misma serie. Esta correlación, de prolongarse en el tiempo —y habida cuenta de lo que sucedió en 1929— implicaría que estamos en la antesala de una debacle bursátil.

Y yo me pregunto lo siguiente:

* ¿Cuántos segmentos —no necesariamente tan eminentes que el de 1929— de la serie temporal del Dow Jones han tenido una correlación elevada con el actual?
* ¿Qué sucedió, p.e., seis meses después con la bolsa?


He querido responderme a mí mismo descargando de [aquí](http://research.stlouisfed.org/fred2/series/DJIA/downloaddata?cid=32255) las cotizaciones de Dow Jones desde la época de Cánovas y Sagasta y después he ejecutado

{{< highlight R >}}
dat <- readLines("DJIA.txt")
dat <- dat[-(1:18)]
dat <- gsub("  *", "\t", dat)
dat <- read.table(textConnection(dat), header = T, sep = "\t")

dat$VALUE <- as.numeric(as.character(dat$VALUE))
dat <- subset(dat, !is.na(dat$VALUE))

dat$DATE <- as.Date(as.character(dat$DATE))

base  <- dat$VALUE[dat$DATE >  as.Date("2012-06-30")]
resto <- dat$VALUE[dat$DATE <= as.Date("2012-06-30")]

correlaciones <- sapply(1:(length(resto) - length(base)),
                        function(x) cor(base, resto[x + (1:length(base))])
)

incr.6m <- dat$VALUE[length(base) + 180 + 1:length(correlaciones)]
tmp     <- dat$VALUE[length(base) +       1:length(correlaciones)]
incr.6m <- 100 * (incr.6m - tmp) / tmp

filtro <- correlaciones > 0.8

incrementos <- incr.6m[filtro]
pesos       <- correlaciones[filtro]

library(ggplot2)

tmp <- data.frame(incrementos = incrementos, pesos = pesos / sum(pesos))

ggplot(tmp, aes(x = incrementos, weights = pesos)) +
  geom_density(fill = "blue", alpha = 0.5) +
  xlab("return (%) ")
{{< / highlight >}}

para obtener

[![seis_meses_despues](/wp-uploads/2014/02/seis_meses_despues.png#center)
](/wp-uploads/2014/02/seis_meses_despues.png#center)

Como puede apreciarse y si la historia es tan maestra como cuentan, es más probable que en seis meses la se encuentre por encima que por debajo de las actuales cotizaciones.
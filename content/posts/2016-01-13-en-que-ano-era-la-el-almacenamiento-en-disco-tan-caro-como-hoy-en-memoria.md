---
author: Carlos J. Gil Bellosta
date: 2016-01-13 08:13:07+00:00
draft: false
title: ¿En qué año era la el almacenamiento en disco tan caro como hoy en memoria?

url: /2016/01/13/en-que-ano-era-la-el-almacenamiento-en-disco-tan-caro-como-hoy-en-memoria/
categories:
- r
tags:
- hardware
- memoria
- r
---

La respuesta a sea pregunta, y siempre de acuerdo con los [datos de John C. McCallum](http://www.jcmit.com/), la da

[![discos_vs_memoria](/wp-uploads/2016/01/discos_vs_memoria.png#center)
](/wp-uploads/2016/01/discos_vs_memoria.png#center)

que hace corresponder a cada año del eje horizontal el correspondiente (en el vertical) aquel en el que el almacenamiento en disco venía a costar lo mismo (euros por MB) que el memoria en el primero.

Hoy vamos casi por 2000.

Me llama la atención que el crecimiento se esté ralentizando.

El código, por si alguien le encuentra alguna tara, es

{{< highlight R "linenos=true" >}}
library(XML)
library(ggplot2)

discos <- htmlParse("http://www.jcmit.com/diskprice.htm")
discos <- readHTMLTable(discos)
discos <- discos[[1]]

discos <- discos[-(1:2),1:2]
colnames(discos) <- c("year", "usd.mb")

discos <- transform(discos,
    year = as.numeric(as.character(year)),
    usd.mb = as.numeric(as.character(usd.mb)))

for (i in 2:nrow(discos))
  discos$usd.mb[i] <- min(discos$usd.mb[1:i])


memoria <- htmlParse("http://www.jcmit.com/memoryprice.htm")
memoria <- readHTMLTable(memoria)
memoria <- memoria[[1]]

memoria <- memoria[-(1:2),1:2]
colnames(memoria) <- c("year", "usd.mb")

memoria <- transform(memoria,
    usd.mb = gsub(",", "", as.character(usd.mb)))
memoria <- transform(memoria,
    year = as.numeric(as.character(year)),
    usd.mb = as.numeric(as.character(usd.mb)))
memoria <- memoria[order(memoria$year),]

for (i in 2:nrow(memoria))
  memoria$usd.mb[i] <- min(memoria$usd.mb[1:i])


years <- floor(min(memoria$year)):floor(max(memoria$year))
precios.memoria <- approx(memoria$year,
    memoria$usd.mb, years)$y
annos.disco     <- approx(discos$usd.mb,
    discos$year, precios.memoria)$y

res <- data.frame(years.ram = years, years.hdd = annos.disco)
res <- res[!is.na(res$years.hdd),]

ggplot(res, aes(x = years.ram, y = years.hdd)) +
  geom_line() + geom_smooth(alpha = 0) + xlab("year") + ylab("hdd year")
{{< / highlight >}}
---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2017-06-28 08:13:28+00:00
draft: false
lastmod: '2025-04-06T19:11:55.336011'
related:
- 2010-04-21-para-que-copien-peguen-y-disfruten-addenda.md
- 2013-12-26-muestreos-aleatorios-sobre-la-peninsula-iberica-por-ejemplo.md
- 2012-05-23-patrones-hexagonales-con-r.md
- 2018-03-01-kriging-con-stan.md
- 2024-02-08-elipses.md
tags:
- geometría
- r
title: ¿Les dará un patatús a mis excolegas?
url: /2017/06/28/les-dara-un-patatus-a-mis-excolegas/
---

En Gaussianos publicaron [este problema](http://gaussianos.com/segmento-desconocido-en-un-triangulo):

>En un triángulo acutángulo ABC tenemos que AH, AD y AM son, respectivamente, la altura, la bisectriz y la mediana que parten desde A, estando H, D y M en el lado BC. Si las longitudes de AB, AC y MD son, respectivamente, 11, 8 y 1, calcula la longitud del segmento DH.

El gráfico, construido por uno de los respondedores, Ignacio Larrosa Cañestro, es este:![](/wp-uploads/2017/06/triangulo.jpg)


Mi solución (puro uso del [teorema del seno](https://es.wikipedia.org/wiki/Teorema_de_los_senos)):

{{< highlight R >}}
library(nleqslv)

ab <- 11
ac <- 8

foo <- function(abc, print.answer = FALSE){
  acb <- asin(sin(abc) * ab / ac)
  bac <- pi - acb - abc
  bc  <- ab * sin(bac) / sin(acb)  # lado opuesto
  bad <- bac / 2
  adb <- pi - bad - abc

  base.bisectriz <- ab * sin(bad) / sin(adb)
  base.mediana <- bc / 2
  base.altura  <- ab * cos(abc)

  if (print.answer)
    return(abs(base.altura - base.bisectriz))

  delta <- abs(base.mediana - base.bisectriz)
}

z <- nleqslv(0.5, function(abc) foo(abc) - 1)
foo(z$x, print.answer = T)
{{< / highlight >}}

A ver qué dicen.
---
author: Carlos J. Gil Bellosta
date: 2017-06-28 08:13:28+00:00
draft: false
title: ¿Les dará un patatús a mis excolegas?

url: /2017/06/28/les-dara-un-patatus-a-mis-excolegas/
categories:
- r
tags:
- geometría
- r
---

En Gaussianos publicaron [este problema](http://gaussianos.com/segmento-desconocido-en-un-triangulo):

>En un triángulo acutángulo ABC tenemos que AH, AD y AM son, respectivamente, la altura, la bisectriz y la mediana que parten desde A, estando H, D y M en el lado BC. Si las longitudes de AB, AC y MD son, respectivamente, 11, 8 y 1, calcula la longitud del segmento DH.

El gráfico, construido por uno de los respondedores, Ignacio Larrosa Cañestro, es este:![](/wp-uploads/2017/06/triangulo.jpg)


Mi solución (puro uso del [teorema del seno](https://es.wikipedia.org/wiki/Teorema_de_los_senos)):

{{< highlight R "linenos=true" >}}
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


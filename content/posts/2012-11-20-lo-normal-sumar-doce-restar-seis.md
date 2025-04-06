---
author: Carlos J. Gil Bellosta
categories:
- probabilidad
- r
date: 2012-11-20 07:40:45+00:00
draft: false
lastmod: '2025-04-06T19:05:34.656145'
related:
- 2013-11-22-un-pequeno-problema-de-probabilidad.md
- 2021-02-23-tres-teoremas-que-son-casi-ciertos.md
- 2013-08-05-medianas-ponderadas.md
- 2012-01-17-muestreando-la-distribucion-uniforme-sobre-la-esfera-unidad-en-n-dimensiones.md
- 2020-01-22-siete-llaves-al-sepulcro-del-metodo-delta.md
tags:
- probabilidad
- r
- trucos
title: 'Lo normal: sumar doce, restar seis'
url: /2012/11/20/lo-normal-sumar-doce-restar-seis/
---

Un [truco para generar variables aleatorias normales](http://www.johndcook.com/blog/2009/02/12/sums-of-uniform-random-values/): sumar doce uniformes y restar seis.

En efecto,

{{< highlight R >}}
x <- replicate(1000, sum(runif(12)) - 6)
qqnorm(x)
qqline(x, col=2)
{{< / highlight >}}

produce

[![](/wp-uploads/2012/11/qqnorm.png#center)
](/wp-uploads/2012/11/qqnorm.png#center)

Ayuda a entender el motivo que la varianza de la distribución uniforme es 1/12 y que su media es 1/2.
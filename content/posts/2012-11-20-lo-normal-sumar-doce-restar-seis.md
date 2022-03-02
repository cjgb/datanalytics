---
author: Carlos J. Gil Bellosta
date: 2012-11-20 07:40:45+00:00
draft: false
title: 'Lo normal: sumar doce, restar seis'

url: /2012/11/20/lo-normal-sumar-doce-restar-seis/
categories:
- probabilidad
- r
tags:
- probabilidad
- r
- trucos
---

Un [truco para generar variables aleatorias normales](http://www.johndcook.com/blog/2009/02/12/sums-of-uniform-random-values/): sumar doce uniformes y restar seis.

En efecto,

{{< highlight R >}}
x <- replicate(1000, sum( runif(12) - 6 ))
qqnorm(x)
qqline(x, col=2)
{{< / highlight >}}

produce

[![](/wp-uploads/2012/11/qqnorm.png#center)
](/wp-uploads/2012/11/qqnorm.png#center)

Ayuda a entender el motivo que la varianza de la distribución uniforme es 1/12 y que su media es 1/2.

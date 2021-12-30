---
author: Carlos J. Gil Bellosta
date: 2020-02-07 09:13:00+00:00
draft: false
title: La densidad de una Cauchy bivariada es cuasiconvexa

url: /2020/02/07/la-densidad-de-una-cauchy-bivariada-es-cuasiconvexa/
categories:
- probabilidad
tags:
- cauchy
- cuasiconvexidad
- probabilidad
---

Primero, las curvas de nivel:

{{< highlight R "linenos=true" >}}
x <- seq(-50, 50, length.out = 1000)

tmp <- expand.grid(x = x, y = x)
tmp$z <- log(dcauchy(tmp$x) * dcauchy(tmp$y))

ggplot(tmp, aes(x = x, y = y, z = z)) + stat_contour()
{{< / highlight >}}

![](/wp-uploads/2020/02/curvas_nivel_cauchy.png#center)

Lo de la cuasiconvexidad está contado [aquí](https://en.wikipedia.org/wiki/Quasiconvex_function).

Las consecuencias estadísticas y probabilísticas, para otro rato.
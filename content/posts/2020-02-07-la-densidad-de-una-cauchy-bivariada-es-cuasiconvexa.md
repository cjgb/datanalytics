---
author: Carlos J. Gil Bellosta
categories:
- probabilidad
date: 2020-02-07 09:13:00+00:00
draft: false
lastmod: '2025-04-06T18:44:37.030097'
related:
- 2020-02-20-curvas-de-equiprobabilidad-de-la-t-bivariada.md
- 2016-03-30-funciones-de-densidad-log-concavas.md
- 2016-06-15-distribuciones-sin-media-que-pueden-suponer-en-la-practica.md
- 2016-07-06-glms-con-prioris-casi-a-voluntad.md
- 2017-03-06-cuantiles-si-pero-de-que-tipo.md
tags:
- cauchy
- cuasiconvexidad
- probabilidad
title: La densidad de una Cauchy bivariada es cuasiconvexa
url: /2020/02/07/la-densidad-de-una-cauchy-bivariada-es-cuasiconvexa/
---

Primero, las curvas de nivel:

{{< highlight R >}}
x <- seq(-50, 50, length.out = 1000)

tmp <- expand.grid(x = x, y = x)
tmp$z <- log(dcauchy(tmp$x) * dcauchy(tmp$y))

ggplot(tmp, aes(x = x, y = y, z = z)) + stat_contour()
{{< / highlight >}}

![](/wp-uploads/2020/02/curvas_nivel_cauchy.png#center)

Lo de la cuasiconvexidad está contado [aquí](https://en.wikipedia.org/wiki/Quasiconvex_function).

Las consecuencias estadísticas y probabilísticas, para otro rato.
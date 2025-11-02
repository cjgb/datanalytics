---
author: Carlos J. Gil Bellosta
categories:
- probabilidad
date: 2020-02-20 09:13:00+00:00
draft: false
lastmod: '2025-04-06T19:07:29.953664'
related:
- 2020-02-07-la-densidad-de-una-cauchy-bivariada-es-cuasiconvexa.md
- 2021-02-25-sobre-sumas-de-cuadrados-de-normales-con-varianzas-desiguales.md
- 2016-07-06-glms-con-prioris-casi-a-voluntad.md
- 2014-06-10-a-vueltas-con-el-t-test.md
- 2016-06-15-distribuciones-sin-media-que-pueden-suponer-en-la-practica.md
tags:
- cauchy
- cuasiconvexidad
- probabilidad
title: Curvas de equiprobabilidad de la t bivariada
url: /2020/02/20/curvas-de-equiprobabilidad-de-la-t-bivariada/
---

El otro día me entretuve pintando [curvas de equiprobabilidad de la distribución de Cauchy](https://datanalytics.com/2020/02/07/la-densidad-de-una-cauchy-bivariada-es-cuasiconvexa/) (nota: debería haberlas llamado cuasicuasiconvexas en lugar de cuasiconvexas en su día). Pero la t es una_ cuerda tendida entre _la Cauchy y la normal y es instructivo echarles un vistazo a las curvas de equiprobabilidad según crecen los grados de libertad. Sobre todo, porque arrojan más información sobre la manera y el sentido en el que la t converge a la normal. Son:

![](/img/2020/02/t_bivariate.png#center)

Y el código,

{{< highlight R >}}
library(plyr)
library(ggplot2)

df <- 1 + 2 * 0:15

x <- seq(-10, 10, length.out = 1000)

res <- ldply(df, function(i){
    tmp <- expand.grid(x = x, y = x)
    tmp$z <- log(dt(tmp$x, df = i) * dt(tmp$y, df = i))
    tmp$df <- i
    tmp
})

ggplot(res, aes(x = x, y = y, z = z)) +
    stat_contour() +
    facet_wrap(~df)
{{< / highlight >}}
---
author: Carlos J. Gil Bellosta
categories:
- probabilidad
date: 2018-01-16 08:13:02+00:00
draft: false
lastmod: '2025-04-06T18:50:58.911973'
related:
- 2017-02-09-la-inesperada-correlacion-de-los-ratios.md
- 2014-12-08-la-correlacion-ni-siquiera-implica-correlacion.md
- 2018-11-16-colinealidad-y-posterioris.md
- 2022-03-22-diagramas-causales-hipersimples-3-mediadores.md
- 2019-08-29-la-multivarianza-total-de-la-distancia-no-implica-causalidad.md
tags:
- correlación
- probabilidad
title: Las correlaciones positivas, ¿son transitivas?
url: /2018/01/16/las-correlaciones-positivas-son-transitivas/
---

No. Por ejemplo,

{{< highlight R >}}
set.seed(155)
n <- 1000

x <- rnorm(n)
y <- x + rnorm(n)
z <- y - 1.5 * x

m <- cbind(x, y, z)

print(cor(m), digits = 2)
#      x    y     z
#x  1.00 0.72 -0.41
#y  0.72 1.00  0.34
#z -0.41 0.34  1.00
{{< / highlight >}}

La correlación de `x` con `y` es positiva; también la de `y` con `z`. Pero `x` y `z` guardan correlación negativa.

Nota: sacado de [aquí](https://www.causeweb.org/wiki/chance/index.php/Chance_News_104).
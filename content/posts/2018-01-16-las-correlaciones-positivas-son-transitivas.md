---
author: Carlos J. Gil Bellosta
date: 2018-01-16 08:13:02+00:00
draft: false
title: Las correlaciones positivas, ¿son transitivas?

url: /2018/01/16/las-correlaciones-positivas-son-transitivas/
categories:
- probabilidad
tags:
- correlación
- probabilidad
---

No. Por ejemplo,

{{< highlight R "linenos=true" >}}
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


---
author: Carlos J. Gil Bellosta
categories:
- estadística
- r
date: 2019-03-04 08:13:43+00:00
draft: false
lastmod: '2025-04-06T19:06:11.959967'
related:
- 2022-03-03-error-sesgo-modelos-lineales.md
- 2018-11-16-colinealidad-y-posterioris.md
- 2022-03-10-diagramas-causales-hipersimples-1-errores.md
- 2019-07-17-sobre-la-peculiarisima-implementacion-del-modelo-lineal-en-pseudo-scikit-learn.md
- 2015-01-27-grandes-datos-maquinas-pequenas-y-regresiones-logisticas-con-variables-categoricas.md
tags:
- coeficientes
- lm
- offset
- r
title: offset, porque el coeficiente es 1 necesariamente
url: /2019/03/04/offset-porque-el-coeficiente-es-1-necesariamente/
---

Estos días me han preguntado sobre un modelo lineal tal que $latex y \sim x_1 + \dots$ donde el coeficiente de $latex x_1$ no se entiende si no es igual a 1. Es como si los datos se creasen de la forma

{{< highlight R >}}
n <- 100
x1 <- rnorm(n)
x2 <- rnorm(n)
y <- x1 + rnorm(n, .1) + .02 * x2
{{< / highlight >}}

y se conociese el coeficiente de $latex x_1$ y no el de $latex x_2$. Entonces no tiene sentido plantear el modelo

{{< highlight R >}}
lm(y ~ x1 + x2)
{{< / highlight >}}

sino más bien

{{< highlight R >}}
modelo <- lm(y ~ offset(x1) + x2)
{{< / highlight >}}

que hace lo que uno espera. Lo cual se puede comprobar, por ejemplo, comparando

{{< highlight R >}}
head(predict(modelo))
head(x1 + coefficients(modelo)[1] +
    x2 * coefficients(modelo)[2])
{{< / highlight >}}
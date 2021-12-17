---
author: Carlos J. Gil Bellosta
date: 2019-03-04 08:13:43+00:00
draft: false
title: offset, porque el coeficiente es 1 necesariamente

url: /2019/03/04/offset-porque-el-coeficiente-es-1-necesariamente/
categories:
- estadística
- r
tags:
- coeficientes
- lm
- offset
- r
---




Estos días me han preguntado sobre un modelo lineal tal que $latex y \sim x_1 + \dots$ donde el coeficiente de $latex x_1$ no se entiende si no es igual a 1. Es como si los datos se creasen de la forma







    <code>n <- 100

    x1 <- rnorm(n)
    x2 <- rnorm(n)

    y <- x1 + rnorm(n, .1) + .02 * x2</code>







y se conociese el coeficiente de $latex x_1$ y no el de $latex x_2$. Entonces no tiene sentido plantear el modelo







    <code>lm(y ~ x1 + x2)</code>







sino más bien







    <code>modelo <- lm(y ~ offset(x1) + x2)</code>







que hace lo que uno espera. Lo cual se puede comprobar, por ejemplo, comparando







    <code>head(predict(modelo))
    head(x1 + coefficients(modelo)[1] + x2 * coefficients(modelo)[2])</code>




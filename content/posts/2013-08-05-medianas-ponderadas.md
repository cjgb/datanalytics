---
author: Carlos J. Gil Bellosta
date: 2013-08-05 07:57:34+00:00
draft: false
title: Medianas ponderadas en R

url: /2013/08/05/medianas-ponderadas/
categories:
- estadística
- r
tags:
- cuantil
- estadística
- mediana
- r
- regresión
---

La mediana de `1:3` es 2. Pero puede ser que queramos dar a `1:3` los pesos 2, 1, 2. En ese caso, el cálculo de la mediana sigue siendo sencillo (y sigue siendo 2). Pero la situación puede complicarse más.

Mientras los pesos sean enteros, todavía pueden usarse trucos:



    x <- 1:3
    pesos <- c(2,1,2)
    median(rep(x, times = pesos ))



¿Pero qué hacemos cuando hay pesos fraccionarios? Bueno, en realidad, podemos _ordenar_:



    n <- 1000

    x <- runif(n)
    pesos <- runif(n)
    o <- order(x)
    x.o <- x[o]
    pesos.o <- pesos[o]
    x.o[min( which(cumsum(pesos.o) > .5 * sum(pesos.o)) )]



Pero me parece más limpio usar el [paquete `quantreg`](http://www.datanalytics.com/blog/2010/05/18/regresion-por-cuantiles-en-r-y-sas/):



    library(<a href="http://inside-r.org/packages/cran/quantreg">quantreg)
    rq(x ~ 1, tau = 0.5, weights=pesos)$coef



Y una coda matemática: es sabido de muchos que la mediana de $latex x_1,\dots, x_n$ es el valor que minimiza la función $latex f(u) = \sum |x_i|$. La media ponderada miminizaría la función alternativa $latex f(u) = \sum p_i |x_i|$ y la función `rq` de `quantreg` minimiza [una función algo más complicada que esa](http://en.wikipedia.org/wiki/Quantile_regression#Quantiles) que se reduce esencialmente a ella cuando `tau = 0.5`.

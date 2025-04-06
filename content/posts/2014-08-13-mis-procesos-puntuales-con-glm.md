---
author: Carlos J. Gil Bellosta
categories:
- estadística
- r
date: 2014-08-13 07:13:55+00:00
draft: false
lastmod: '2025-04-06T18:45:12.295381'
related:
- 2014-08-11-procesos-puntuales-una-primera-aproximacion.md
- 2014-02-06-experimentos-con-el-paquete-gbm.md
- 2020-07-22-aun-mas-sobre-la-presunta-sobredispersion-en-modelos-de-poisson.md
- 2020-07-17-mas-sobre-la-presunta-sobredispersion-en-el-modelo-de-poisson.md
- 2016-07-06-glms-con-prioris-casi-a-voluntad.md
tags:
- poisson
- procesos puntuales
- r
- glm
title: (Mis) procesos puntuales con glm
url: /2014/08/13/mis-procesos-puntuales-con-glm/
---

Lo que escribí hace un par de días sobre [procesos puntuales](http://www.datanalytics.com/2014/08/11/procesos-puntuales-una-primera-aproximacion/), ahora me doy cuenta, podía haberse resuelto con nuestro viejo amigo `glm`.

Ejecuto el código del otro día y obtengo (para un caso nuevo)

{{< highlight R >}}
          mu       alfa verosimilitud delta
    1  0.4493158 0.50000000      340.6141     1
    2  0.2675349 0.40457418      307.3939     2
    3  0.1894562 0.28917407      293.4696     3
    4  0.1495654 0.22237707      287.0784     4
    5  0.1243791 0.18079703      281.3900     5
    6  0.1142837 0.14913172      284.9227     6
    7  0.1217504 0.12150745      288.5448     7
    8  0.1214365 0.10424818      289.3282     8
    9  0.1204605 0.09148817      290.9081     9
    10 0.1315896 0.07857330      295.3935    10</code>
{{< / highlight >}}

que significa que el parámetro _óptimo_ es `delta = 5`, `mu = 0.124` y `alfa = 0.18`.

Ahora hago

{{< highlight R >}}
    cuantos.previos <- function(i, muestra, delta){
      indices <- Filter(function(x) x < i & x > i - delta, 1:n)
      cuantos <- sum(muestra[indices])
    }

    fit.glm <- function(delta){
      prev <- sapply(1:length(muestra),
                     cuantos.previos, muestra, delta)
      dat  <- data.frame(muestra = muestra, prev = prev)

      res.glm <- glm(muestra ~ prev, data = dat,
                     family = poisson(link = "identity"))
      c(delta, res.glm$coefficients, summary(res.glm)$aic)
    }

    res.glm <- sapply(1:10, fit.glm)
    res.glm <- as.data.frame(t(res.glm))
    colnames(res.glm) <- c("delta", "mu", "alfa", "aic")
{{< / highlight >}}

y obtengo

{{< highlight R >}}
    delta        mu       alfa      aic
    1      1 0.4493151         NA 683.2282
    2      2 0.2675337 0.40457432 618.7877
    3      3 0.1894536 0.28917516 590.9391
    4      4 0.1495631 0.22237700 578.1569
    5      5 0.1243779 0.18079585 566.7799
    6      6 0.1142817 0.14913071 573.8454
    7      7 0.1217500 0.12150532 581.0896
    8      8 0.1214371 0.10424691 582.6564
    9      9 0.1204672 0.09148587 585.8163
    10    10 0.1315951 0.07856897 594.7869
{{< / highlight >}}

que viene a ser lo mismo que antes. Solo que mucho más rápido.
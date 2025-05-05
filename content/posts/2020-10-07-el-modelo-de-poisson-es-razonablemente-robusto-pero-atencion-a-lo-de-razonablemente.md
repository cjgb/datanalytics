---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2020-10-07 09:13:00+00:00
draft: false
lastmod: '2025-04-06T18:50:31.629416'
related:
- 2020-07-22-aun-mas-sobre-la-presunta-sobredispersion-en-modelos-de-poisson.md
- 2020-07-17-mas-sobre-la-presunta-sobredispersion-en-el-modelo-de-poisson.md
- 2021-02-05-separacion-perfecta-en-el-modelo-de-poisson.md
- 2023-01-24-funciones-enlace.md
- 2019-01-08-modelos-de-conteos-con-sobredispersion-con-stan.md
tags:
- estadística robusta
- glm
- poisson
title: El modelo de Poisson es razonablemente robusto (pero atención a lo de "razonablemente")
url: /2020/10/07/el-modelo-de-poisson-es-razonablemente-robusto-pero-atencion-a-lo-de-razonablemente/
---

Una de las consencuencias del coronavirus es que vamos a tener que [replantearnos lo que significa ajustar series temporales](https://datanalytics.com/2020/10/05/una-potencial-consecuencia-positiva-de-lo-del-coronavirus/). Es decir, comenzar a ajustar series temporales y no repetir la consabida teoría que subyace a los modelos ARIMA simplemente porque es _guay_.

También tendremos que replantearnos qué hacer con los _outliers_ que la pandemia va dejando tras de sí. Y tratar de hacerlo [más elegantemente que cierta gente](https://github.com/EuroMOMOnetwork/MOMO/blob/83eceff401b6d666c026eef93c1526e56a20d9c9/R/excess.R#L51), por supuesto. En particular, habrá que ver cuál y cómo es el efecto de los _outliers_ en determinados modelos. En particular, en esos en los que yo más trabajo últimamente, que son los de Poisson.

Donde casi todo son buenas noticias, la verdad. Gracias a la función de enlace, el modelo de Poisson está prácticamente blindado frente a cierto tipo de _outliers_. Particularmente, (aunque no exclusivamente) cuando:

* Los _outliers_ lo son por exceso y o por un defecto no particularmente grande.
* Los _valores medios_ son razonablemente altos.

En tal caso, el modelo de Poisson

`glm(y ~ x1 + x2 + ..., family = poisson())`

no es muy distinto del modelo lineal estándar

`lm(log(y) ~ x1 + x2 + ...)`

como ponen en evidencia tanto los consabidos teoremas de aproximación a la  normal de la Poisson (haced `qqnorm(rpois(1000, 100))`) como por el siguiente ejemplo numérico:

{{< highlight R >}}
n <- 100
a <- 7
b <- 1
x <- runif(n, -1, 1)
y <- sapply(x, function(p)
  rpois(1, exp(a +  b * p)))
coef(glm(y ~ x, family = poisson()))
coef(lm(log(y) ~ x))
{{< / highlight >}}

Como consecuencia, para procesos con conteos relativamente altos (o, al menos, para ellos), el logaritmo protege de los excesos.
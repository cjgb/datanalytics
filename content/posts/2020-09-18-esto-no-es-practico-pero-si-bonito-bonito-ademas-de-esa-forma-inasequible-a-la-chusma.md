---
author: Carlos J. Gil Bellosta
categories:
- probabilidad
- r
date: 2020-09-18 09:13:00+00:00
draft: false
lastmod: '2025-04-06T18:51:37.773702'
related:
- 2016-03-28-un-teorema-de-muestreo-que-no-se-si-existe.md
- 2012-01-12-cosa-prodigiosa-sin-palabras-i.md
- 2019-01-08-modelos-de-conteos-con-sobredispersion-con-stan.md
- 2013-11-22-un-pequeno-problema-de-probabilidad.md
- 2020-09-24-un-decepcionante-metodo-de-inferencia-robusta-para-glms-de-poisson.md
tags:
- distribuciones
- gumbel
- r
title: Esto no es práctico, pero sí bonito; bonito, además, de esa forma inasequible
  a la chusma
url: /2020/09/18/esto-no-es-practico-pero-si-bonito-bonito-ademas-de-esa-forma-inasequible-a-la-chusma/
---

Va de muestrear los números $1, \dots, n$ que tienen asignadas probabilidades $p_1, \dots, p_n$. Una manera muy impráctica (en R, basta usar `sample`) y nada intuitiva de hacerlo es recurriendo a la distribución de Gumbel:

{{< highlight R >}}
library(evd)

pes <- runif(5)
pes <- pes / sum(pes)
gammas <- log(pes) + 2
x <- rgumbel(length(pes))
muestra <- which.max(gammas + x)
{{< / highlight >}}

O, en masa, aplicando

{{< highlight R >}}
get_samples <- function(n){
    replicate(n, {
        x <- rgumbel(length(pes))
        which.max(gammas + x)
    })
}
{{< / highlight >}}

El seudocódigo está extraído de [la Wikipedia](https://en.wikipedia.org/wiki/Categorical_distribution#Sampling_via_the_Gumbel_distribution) y el motivo por el que la cosa funciona en lugar de no funcionar, que es la parte bonita del asunto, está explicado [aquí](https://statisfaction.wordpress.com/2020/06/23/categorical-distribution-structure-of-the-second-kind-and-gumbel-max-trick/).
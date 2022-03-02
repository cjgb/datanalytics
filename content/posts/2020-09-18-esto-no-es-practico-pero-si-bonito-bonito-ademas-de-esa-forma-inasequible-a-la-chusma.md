---
author: Carlos J. Gil Bellosta
date: 2020-09-18 09:13:00+00:00
draft: false
title: Esto no es práctico, pero sí bonito; bonito, además, de esa forma inasequible
  a la chusma

url: /2020/09/18/esto-no-es-practico-pero-si-bonito-bonito-ademas-de-esa-forma-inasequible-a-la-chusma/
categories:
- probabilidad
- r
tags:
- distribuciones
- gumbel
- r
---

Va de muestrear los números $latex 1, \dots, n$ que tienen asignadas probabilidades $latex p_1, \dots, p_n$. Una manera muy impráctica (en R, basta usar `sample`) y nada intuitiva de hacerlo es recurriendo a la distribución de Gumbel:

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




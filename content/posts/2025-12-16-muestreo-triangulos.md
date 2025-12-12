---
-categories:
- probabilidad
author: Carlos J. Gil Bellosta
date: 2025-12-16
description: ¿Cómo obtener distribuciones uniformes dentro de triángulos? (Y qué tiene
  que ver con la distribución de Dirichlet)
lastmod: '2025-12-12T12:50:20.387528'
related:
- 2025-12-09-muestreo-triangulos.md
- 2025-11-25-muestreo-rechazo.md
- 2012-01-17-muestreando-la-distribucion-uniforme-sobre-la-esfera-unidad-en-n-dimensiones.md
- 2017-04-12-experimentos-con-extremely-small-data-la-media-muestral-de-pocas-betas.md
- 2015-04-27-intervalos-de-credibilidad-para-la-distribucion-beta.md
tags:
- simulación
- triángulos
- dirichlet
- beta
title: Más sobre cómo obtener distribuciones uniformes dentro de triángulos
url: /2025/12/19/muestreo-triangulos/
---

Pero hay otra forma de muestrear la distribución de Dirichlet (frase que no entenderán quienes no traigan [esto](/2025/12/09/muestreo-triangulos/) leído):

- Supóngase que tiene parámetros $(a_1, a_2, \dots,  a_n)$.
- Entonces se comienza muestreando una Beta de parámetros $(a_1, a_2 + \dots + a_n)$ para obtener $x_1$.
- Y $x_j$ se obtiene a partir de una $B(a_j, a_{j + 1} + \dots + a_n)$ en el rango $[0, 1 - (x_0 + \dots + x_{j-1})]$.

Entonces, cuando hace una semana hacía

{{< highlight r >}}
set.seed(1234)
n <- 1000
samples <- matrix(rexp(n * 3, 1), n, 3)
samples <- samples / rowSums(samples)
{{< / highlight >}}

para obtener las coordenadas baricéntricas, ¿qué distribución cabe esperar de cada columna de `samples`? Una $B(1, 2)$, que también es conocida como la _distribución triangular_. Con lo que todo adquiere un familiar y coherente sentido.
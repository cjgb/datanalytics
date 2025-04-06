---
author: Carlos J. Gil Bellosta
categories:
- probabilidad
date: 2018-10-10 08:13:03+00:00
draft: false
lastmod: '2025-04-06T18:44:24.762970'
related:
- 2018-10-11-un-resultado-probabilistico-contraintuitivo-y-ii.md
- 2012-01-19-cosa-prodigiosa-ahora-con-palabras-ii.md
- 2015-08-10-estar-en-racha-y-promediar-promedios.md
- 2022-10-04-bayesianismo-frecuentismo-teoria-decision-01.md
- 2014-01-09-como-apostar-si-tienes-que.md
tags:
- paradojas
- probabilidad
title: Un resultado probabilístico contraintuitivo (parte I)
url: /2018/10/10/un-resultado-probabilistico-contraintuitivo-parte-i/
---

A elige dos números con una distribución de probabilidad _cualquiera_,

{{< highlight R >}}
generador <- function() rlnorm(2, 3, 4)
{{< / highlight >}}

y los guarda ocultos. A B le deja ver uno al azar (sin pérdida de generalidad, el primero). Y B tiene que decidir si el que ve es el más alto de los dos (en cuyo caso, gana un premio, etc.). Veamos a B actuar de manera naive:

{{< highlight R >}}
estrategia.naive <- function(observed) {
  sample(1:2, 1)
}
{{< / highlight >}}

Dejemos a A y B jugar repetidamente a este juego:

{{< highlight R >}}
juego <- function(estrategia){
  x <- generador()
  choice <- estrategia(x[1])
  x[choice] == max(x)
}

res <- replicate(1e6, juego(estrategia.naive))
mean(res)
{{< / highlight >}}

Pues sí, como cabe esperar, B tiene una probabilidad de .5 de acertar en el largo plazo.

Sin embargo, B tiene una estrategia superior a la de elegir al azar:

{{< highlight R >}}
otro_generador <- function() rexp(1, 1)
estrategia.guay <- function(observed){
  y <- otro_generador()
  ifelse(y > observed, 2, 1)
}

res <- replicate(1e6, juego(estrategia.guay))
mean(res)
{{< / highlight >}}

Que me da una probabilidad de éxito aproximada del .65. La estrategia es la siguiente:

1. B elige una distribución de probabilidad cualquiera (mañana matizaré qué levísimas restricciones operan sobre esta otra distribución)
2. B toma un valor al azar $latex y$ de acuerdo con dicha distribución.
3. Si el valor observado $latex o > y$, se queda con $latex o$; si no, se decanta por el otro que no ha visto.


Y funciona, tú.

Todo junto (por si quieres probar con otras distribuciones):

{{< highlight R >}}
generador <- function() rlnorm(2, 3, 4)

estrategia.naive <- function(observed){
  sample(1:2, 1)
}

juego <- function(estrategia){
  x <- generador()
  choice <- estrategia(x[1])
  x[choice] == max(x)
}

res <- replicate(1e6, juego(estrategia.naive))
mean(res)

otro_generador <- function() rexp(1, 1)
estrategia.guay <- function(observed){
  y <- otro_generador()
  ifelse(y > observed, 2, 1)
}

res <- replicate(1e6, juego(estrategia.guay))
mean(res)
{{< / highlight >}}

[Mañana](http://www.datanalytics.com/2018/10/11/un-resultado-probabilistico-contraintuitivo-y-ii/), más sobre este problema.
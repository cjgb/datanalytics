---
author: Carlos J. Gil Bellosta
categories:
- números
- probabilidad
date: 2018-05-28 08:13:32+00:00
draft: false
lastmod: '2025-04-06T19:11:39.276011'
related:
- 2017-01-18-va-de-si-hay-una-o-dos-lambdas.md
- 2012-04-30-contar-c2bffacil.md
- 2020-05-13-en-defensa-de-simon-variaciones-diarias-de-la-mortalidad.md
- 2012-03-07-esperanzador-no-varianzador.md
- 2020-07-17-mas-sobre-la-presunta-sobredispersion-en-el-modelo-de-poisson.md
tags:
- accidentes
- defunciones
- poisson
- probabilidad
- varianza
- infradispersión
title: Los extraños números de los muertos en carretera por accidente
url: /2018/05/28/los-extranos-numeros-de-los-muertos-en-carretera-por-accidente/
---

Escribo esta entrada con cierta prevención porque soy consciente de que dan pábulo a determinadas teorías conspiranoicas de las que soy declarado enemigo. Pero es que los números de muertos en carretera por accidente en España en los últimos años,

![](/wp-uploads/2018/05/muertos_carretera.png#center)

(extraídos de [aquí](http://www.dgt.es/Galerias/prensa/2018/01/Presentacion-balance-siniestralidad-2017-completo..pdf)) dan que pensar: la varianza de las observaciones correspondientes a los años 2013, 2014 y 2015 es muy baja, demasiado baja. Al menos, si se da como bueno un modelo de Poisson para modelar esos conteos.

De hecho, ejecutando



{{< highlight R >}}
dat <- c(1134, 1132, 1131)
lambda <- mean(dat)
sd(dat)
sds <- replicate(10000, sd(rpois(3, mean(dat))))
hist(sds, breaks = 100)
mean(sds < sd(dat))
{{< / highlight >}}

se ve cómo apenas en 1 de cada 1000 tiradas aleatorias de tres variables aleatorias independientes de Poisson con parámetro ~1132 se obtienen varianzas tan bajas. Y ejecutando

{{< highlight R >}}
foo <- function(){
  muestra <- rpois(57, lambda)

  tmp <- rbind(muestra[-(1:2)], muestra[-c(1, length(muestra))], muestra[-c(length(muestra), length(muestra) -1)])
  min(apply(tmp, 2, sd))
}

sds <- replicate(10000, foo())
mean(sds < sd(dat))
{{< / highlight >}}

se comprueba que en tiradas de 57 variables aleatorias de Poisson, la varianza mínima de tríos de observaciones consecutivas es menor que la de la serie observada en apenas un 7% de los casos.

Los números son raros, la verdad. En pro del argumento conspiranoico está el razonamiento habitual que justifica en muchas ocasiones la infradispersión de las observaciones: la existencia de cuotas o cupos, sea estos cuales sean, que tienden a fijar los conteos alrededor de una cifra objetivo determinada. En contra, la [falacia del fiscal](https://datanalytics.com/2017/11/30/de-nuevo-la-falacia-del-fiscal-aplicada-a-fiscales-que-fenecen/).

Pero es curioso y no está de más dejarlo escrito en algún lado.
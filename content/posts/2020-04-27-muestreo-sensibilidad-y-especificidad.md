---
author: Carlos J. Gil Bellosta
date: 2020-04-27 08:13:00+00:00
draft: false
title: Muestreo, sensibilidad y especificidad

url: /2020/04/27/muestreo-sensibilidad-y-especificidad/
categories:
- estadística
- r
tags:
- coronavirus
- especificidad
- muestreo
- sensibilidad
---

El bloque de código

{{< highlight R >}}
n_pop <- 47e6
prev <- .02
n_muestra <- 60e3

real_sensitivity <- .8
real_specificity <- .995

estimated_sensitivity <- .81
estimated_specificity <- .99
{{< / highlight >}}

anuncia que vamos a hablar de:

* un país con una población no muy distinta de la de España
* que sufre una pandemia con una prevalencia del 2%
* en el que se realiza una selección de unos 60k sujetos
* para aplicárseles unas pruebas con una sensibilidad y especificidad que pueden o no ser las que anuncia su prospecto,

supongo que para que dentro de unos años, cuando ya a nadie le importe, se publiquen unos datos que han guardado celosamente unos señores que mucho antes nos habrán regalado unos artículos _científicos_ sobre el tema --- necesariamente mediocres y que nos tendremos que _creer_--- cuya publicación está garantizada por el mero hecho de que solo ellos tienen los CSVs mientras que la gente verdaderamente capaz, no.

Allende las pullas, simulemos por ver qué ocurre:

{{< highlight R >}}
pop <- rep(0, n_pop)
pop[1:round(n_pop * prev)] <- 1

muestra <- sample(1:n_pop, n_muestra)
muestra <- pop[muestra]

true_pos <- sum(muestra)
true_neg <- n_muestra - true_pos


test_pos <- rbinom(1, true_pos, real_sensitivity) +
    rbinom(1, true_neg, 1 - real_specificity)
test_neg <- n_muestra - test_pos

test_prop <- test_pos / n_muestra
noise_fix <- (test_prop + estimated_specificity - 1 ) /
    (estimated_sensitivity + estimated_specificity - 1)

c(test_prop, noise_fix)
{{< / highlight >}}

Notas:

* Las estimaciones de sensibilidad y especificidad están extraídas de [aquí](https://www.medrxiv.org/content/10.1101/2020.04.14.20062463v1.full.pdf). El lector interesado encontrará ahí intervalos de confianza para guiar la distancia que cabe esperarse entre las sensibilidades y especificidades reales y las anunciadas.
* Lá fórmula del ajuste, la que define `noise_fix`, puede encontrarse al final de la segunda página de [esto](https://www.medrxiv.org/content/medrxiv/suppl/2020/04/17/2020.04.14.20062463.DC1/2020.04.14.20062463-1.pdf).

Más:

* Me niego a publicar los resultados de _esa_ simulación por si son irrelevantes.
* No sé si lo que cuento es importante o no (para alguien). De serlo, seguro, alguien con más tiempo que yo se tomará la molestia de construir una aplicación en `shiny` decente, etc.
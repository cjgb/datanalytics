---
author: Carlos J. Gil Bellosta
categories:
- probabilidad
date: 2018-02-05 08:13:39+00:00
draft: false
lastmod: '2025-04-06T18:58:04.412799'
related:
- 2022-09-15-perder-ganando.md
- 2015-01-07-juegos-justos-con-monedas-truchas.md
- 2015-08-27-tres-monedas-y-un-argumento-falaz.md
- 2022-03-29-experimento-fisico-causalidad-i.md
- 2021-04-08-sobre-las-probabilidades-de-eventos-que-ocurren-una-unica-vez.md
tags:
- artículos
- monedas
- probabilidad
title: 'Lanzamientos de moneda: no es azar sino física'
url: /2018/02/05/lanzamientos-de-moneda-no-es-azar-sino-fisica/
---

Lo dicen Diaconis y sus coautores en [_Dynamical Bias in the Coin Toss_](https://www.stat.berkeley.edu/users/aldous/157/Papers/diaconis_coinbias.pdf).

Que es un artículo en el que modelan la física de lanzamientos de moneda e incluso y llegan a construir una máquina con el aspecto

![](/img/2018/02/coin_toss.jpg)

que siempre obtiene caras (o cruces).

El quid de la historia es que existen condiciones iniciales de lanzamiento (velocidad inicial, velocidad angular) _isoresultado_ (donde resultado es cara o cruz). Como en

![](/img/2018/02/coin_toss_initial_conditions.png#center)

Es decir, si se tira una moneda primero y se obtiene cruz, tirándola otra vez ligeramente más despacio aunque con una rotación ligeramente más rápida (donde ambas velocidades guardan una determinada relación funcional), se vuelve a obtener cruz necesariamente.

La aleatoriedad de los lanzamientos de moneda es simplemente consecuencia de la proximidad de las curvas (o franjas, resultado de la binarización): minúsculas alteraciones de las condiciones iniciales alteran el resultado.

Obvio, pero entretenido.
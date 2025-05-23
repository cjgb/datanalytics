---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2016-09-06 08:13:39+00:00
draft: false
lastmod: '2025-04-06T18:47:22.356160'
related:
- 2021-10-07-como-aleatorizan-las-columnas-los-rrff-un-experimento-mental-y-una-coda-historica.md
- 2010-06-16-algoritmos-geneticos-para-la-caracterizacion-de-maximos-en-random-forests.md
- 2014-03-07-victoria-o-diferencia-de-puntos-ahora-con-random-forests.md
- 2022-06-07-generalized-random-forests.md
- 2013-11-06-importancia-de-variables-en-arboles.md
tags:
- paquetes
- r
- random forests
- selección de variables
title: Selección de variables con bosques aleatorios
url: /2016/09/06/seleccion-de-variables-con-bosques-aleatorios/
---

Desde el principio de mis tiempos he seleccionado variables relevantes como subproducto de los árboles primero y de los bosques aleatorios después. Cierto que he hecho casi inconfesables incursiones en los  métodos _stepwise_, pero han sido marginales y anecdóticas.

La idea es casi siempre la misma, se haga a mano o con ayuda de paquetes _ad hoc_: las variables importantes tienden a aparecer en el modelo (o submodelos), las otras no. Todo se reduce a contar y ponderar. Hay que discurrir un poco más cuando se sospecha (o consta) que existen variables altamente correlacionadas.

De todas esas cuestiones se ocupa el [paquete VSURF de R](https://cran.r-project.org/web/packages/VSURF/index.html), a cuyos usuarios, para que nadie les pueda acusar de ser unos meros pendejillos con wifi (_script kiddies_), les recomiendo que lean [el artículo concomitante](https://journal.r-project.org/archive/2015-2/genuer-poggi-tuleaumalot.pdf).
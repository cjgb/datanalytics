---
author: Carlos J. Gil Bellosta
categories:
- probabilidad
date: 2017-12-13 08:13:41+00:00
draft: false
lastmod: '2025-04-06T18:50:44.881175'
related:
- 2017-12-19-sobre-el-problema-de-las-martingalas-cuantos-sabiais-la-respuesta.md
- 2012-01-31-cosa-prodigiosa-iii-epilogo.md
- 2020-01-22-siete-llaves-al-sepulcro-del-metodo-delta.md
- 2014-04-29-todo-el-mundo-habla-de-cadenas-de-markov.md
- 2011-01-10-c2bfuna-caida-demasiado-drastica-de-la-varianza.md
tags:
- martingala
- probabilidad
title: Martingalas, tiempos de parada y tuits cuasivirales
url: /2017/12/13/martingalas-tiempos-de-parada-y-tuits-cuasivirales/
---

El otro día publiqué en Twitter un problema que copié de algún sitio (sinceramente, no recuerdo cuál),

{{< x user="gilbellosta" id="939898283832553472" >}}

que resultó megaviral en mi humilde _tuitescala_.

A ver si mañana tengo tiempo de ocuparme de lo triste que resulta que mi entorno de Twitter sea tan cafre como para haber desacertado tanto.

Solo escribo hoy para dejar constancia que la secuencia de variables aleatorias $X_n$ con distribución de Bernoulli B(0.5) forma una martingala, que la regla de parar con el primer $X_i = 1$ es un _tiempo de parada_ (_stopping time_) $\tau$, que por [el teorema correspondiente](https://en.wikipedia.org/wiki/Optional_stopping_theorem), $X_\tau$ también es un martingala y $E(X_\tau) = E(X_1) = 0.5$.

Pero, supongo, este tipo de cosas no son cultura general canónica.
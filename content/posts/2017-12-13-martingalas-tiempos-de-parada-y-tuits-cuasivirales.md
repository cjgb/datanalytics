---
author: Carlos J. Gil Bellosta
date: 2017-12-13 08:13:41+00:00
draft: false
title: Martingalas, tiempos de parada y tuits cuasivirales

url: /2017/12/13/martingalas-tiempos-de-parada-y-tuits-cuasivirales/
categories:
- probabilidad
tags:
- martingala
- probabilidad
---

El otro día publiqué en Twitter un problema que copié de algún sitio (sinceramente, no recuerdo cuál),



<blockquote>En un país hipotético, las familias tienen críos hasta que nace el primer varón. En un año, en promedio, nacen:
>
> -- Carlos Gil Bellosta (@gilbellosta) [10 de diciembre de 2017](https://twitter.com/gilbellosta/status/939898283832553472?ref_src=twsrc%5Etfw)</blockquote>




que resultó megaviral en mi humilde _tuitescala_.

A ver si mañana tengo tiempo de ocuparme de lo triste que resulta que mi entorno de Twitter sea tan cafre como para haber desacertado tanto.

Solo escribo hoy para dejar constancia que la secuencia de variables aleatorias $latex X_n$ con distribución de Bernoulli B(0.5) forma una martingala, que la regla de parar con el primer $latex X_i = 1$ es un _tiempo de parada_ (_stopping time_) $latex \tau$, que por [el teorema correspondiente](https://en.wikipedia.org/wiki/Optional_stopping_theorem), $latex X_\tau$ también es un martingala y $latex E(X_\tau) = E(X_1) = 0.5$.

Pero, supongo, este tipo de cosas no son cultura general canónica.

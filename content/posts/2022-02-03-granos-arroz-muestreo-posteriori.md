---
author: Carlos J. Gil Bellosta
date: 2022-02-03
title: ¿Qué nos enseña la historia de los granos de trigo sobre el muestreo de las posterioris?
url: /2022/02/03/ajedrez-granos-trigo-mcmc-posteriori/
categories:
- estadística
tags:
- estadística bayesiana
- mcmc
- posteriori
---

No hace falta que cuente aquella historia del tablero de ajedrez, los granos de trigo, etc. ¿verdad? (Desavisados: leed [esto](https://es.wikipedia.org/wiki/Problema_del_trigo_y_del_tablero_de_ajedrez).) La entrada de hoy se ocupa de un problema _dual_: el número de granos de trigo será _fijo_, pero hay que repartirlo en un número _explosivamente_ creciente de casillas.

Imagina ahora que quieres ajustar un modelo bayesiano usando MCMC. Imagina que tienes 1, 2, 3,... variables. Imagina el espacio de dimensión $n$ definido por dichas variables. El número de cuadrantes es $2^n$.

Ahora, ¿cuántas muestras de la posteriori caen, de media, en cada cuadrante? ¿Podemos decir que MCMC la _muestra_?
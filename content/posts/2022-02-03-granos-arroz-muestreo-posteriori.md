---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2022-02-03
lastmod: '2025-04-06T19:01:52.805757'
related:
- 2019-04-15-las-altas-dimensiones-son-campo-minado-para-la-intuicion.md
- 2016-02-29-los-tres-contraargumentos-habituales.md
- 2023-11-14-cuantas-iteraciones-mcmc.md
- 2018-01-12-abc.md
- 2011-01-10-c2bfuna-caida-demasiado-drastica-de-la-varianza.md
tags:
- estadística bayesiana
- mcmc
- posteriori
title: ¿Qué nos enseña la historia de los granos de trigo sobre el muestreo de las
  posterioris?
url: /2022/02/03/ajedrez-granos-trigo-mcmc-posteriori/
---

No hace falta que cuente aquella historia del tablero de ajedrez, los granos de trigo, etc. ¿verdad? (Desavisados: leed [esto](https://es.wikipedia.org/wiki/Problema_del_trigo_y_del_tablero_de_ajedrez).) La entrada de hoy se ocupa de un problema _dual_: el número de granos de trigo será _fijo_, pero hay que repartirlo en un número _explosivamente_ creciente de casillas.

Imagina ahora que quieres ajustar un modelo bayesiano usando MCMC. Imagina que tienes 1, 2, 3,... variables. Imagina el espacio de dimensión $n$ definido por dichas variables. El número de cuadrantes es $2^n$.

Ahora, ¿cuántas muestras de la posteriori caen, de media, en cada cuadrante? ¿Podemos decir que MCMC la _muestra_?
---
author: Carlos J. Gil Bellosta
categories:
- probabilidad
date: 2021-02-23 09:13:00+00:00
draft: false
lastmod: '2025-04-06T18:54:33.895646'
related:
- 2021-02-25-sobre-sumas-de-cuadrados-de-normales-con-varianzas-desiguales.md
- 2021-03-02-un-argumento-para-usar-la-normal-la-maximizacion-de-la-entropia.md
- 2023-11-21-sumas-lognormales.md
- 2017-04-12-experimentos-con-extremely-small-data-la-media-muestral-de-pocas-betas.md
- 2014-06-10-a-vueltas-con-el-t-test.md
tags:
- distribuciones
- lognormal
- probabilidad
- welch
title: Tres "teoremas" que son casi ciertos
url: /2021/02/23/tres-teoremas-que-son-casi-ciertos/
---

**I.**

> Si $X_1, \dots, X_{12}$ son uniformes en [0,1] e independientes, entonces $latex X_1 + \dots + X_{12} - 6$ es una variable aleatoria normal.

Puede entenderse como un corolario práctico del teorema central del límite habida cuenta de que la varianza de $latex X_i$ es 1/12 y su media es 1/2.

**Es útil porque**, se ve, en algunos dispositivos embebidos no se dispone de una librería matemática extensa y, se ve, a veces hace falta muestrear la normal. Más, [aquí](https://www.datanalytics.com/2012/11/20/lo-normal-sumar-doce-restar-seis/).

**II.**

El segundo _teorema_ lo habéis usado sin saberlo y dice algo así como que:

>Si bien la distribución $latex \chi^2_k$ es la de la suma de k variables aleatorias normales estándar al cuadrado, la suma de k variables aleatorias normales $latex X_i \sim N(0, \sigma_i)$ también es $latex \chi^2$, aunque los grados de libertad no sean exactamente k.

Es un teorema con demostración _a ojo_ (véase [esto](https://statisticaloddsandends.wordpress.com/2020/07/03/welchs-t-test-and-the-welch-satterthwaite-equation/)): tomas normales con varianzas desiguales, las elevas al cuadrado, las sumas y pintas los histogramas. Como tienen forma de $latex \chi^2$, te preguntas: ¿y cuál será el parámetro de la mejor $latex \chi^2$? Satterthwaite lo hizo por nosotros en los 40 usando el método de los momentos (de nuevo, véase el enlace anterior o [este](https://link.springer.com/article/10.1007/BF02288586) otro).

**Es útil porque**... porque... en R, si haces el `t.test`, por defecto y salvo que especifiques `var.equal = TRUE`, R usa una aproximación basada en dicho resultado.

**III.**

> La suma de lognormales (independientes y con parámetros similares) es lognormal.

Uno no lo esperaría: si la suma de normales es normal y la lognormal es la exponencial de una normal, el resultado parece dar la razón a los que escriben $latex \exp(a+b) = \exp(a) + \exp(b)$ para espanto de sus profesores y delicia de los autores de antologías del disparate. Pero es cierto (véase [esto](https://stats.stackexchange.com/questions/238529/the-sum-of-independent-lognormal-random-variables-appears-lognormal) y las referencias que aportan).

**Es útil porque** hay variables aleatorias que son potencialmente lognormales (p.e., precio de cada una de las ventas en un comercio electrónico) pero, desafortunadamente, en ocasiones solo se dispone del total (horario, diario)y el número de ventas. Por el resultado anterior, esta nueva variable aleatoria _sigue siendo_ lognormal.
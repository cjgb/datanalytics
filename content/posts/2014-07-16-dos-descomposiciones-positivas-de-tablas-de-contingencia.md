---
author: Carlos J. Gil Bellosta
categories:
- programación
- estadística
date: 2014-07-16 07:13:13+00:00
draft: false
lastmod: '2025-04-06T18:57:36.751684'
related:
- 2014-06-19-factorizaciones-positivas-de-matrices-igualmente-positivas.md
- 2014-04-01-componentes-principales-para-quienes-cursaron-algebra-de-primero-con-aprovechamiento.md
- 2011-08-12-una-feliz-conjuncion-estadistico-algebraica.md
- 2018-10-03-de-que-matriz-son-los-embeddings-una-factorizacion.md
- 2019-09-19-factorizacion-matricial-con-nulos.md
tags:
- estadística
- factorización
- nmf
title: Dos descomposiciones positivas de tablas de contingencia
url: /2014/07/16/dos-descomposiciones-positivas-de-tablas-de-contingencia/
---

Voy a seguir poco a poco con este tema mío tan recurrente de las factorizaciones (aproximadas) [positivas de matrices (también positivas)](https://datanalytics.com/2014/06/19/factorizaciones-positivas-de-matrices-igualmente-positivas/). No escribo más porque, como [casi todo lo que llamamos trabajo es, simplemente ruido](http://www.blackswanreport.com/blog/2014/05/a-lot-of-what-we-call-work-is-noise/), las cosas que llevan a otras nunca pasan por el asunto en cuestión.

Pero hay dos descomposiciones positivas de matrices positivas bien conocidas de todos. La primera es esta: $latex X=IX$, donde $latex X$ es una matriz de dimensión nxm e $latex I$ es la cosa más parecida a la matriz identidad de dicha dimensión. No aporta gran cosa. En particular, no compresión y no comprensión de la estructura de la matriz.

La segunda es $latex X \approx u v^T / n$ donde $latex n$ es la suma de los elementos de $latex X$ y $latex u$ y $latex v$ son los vectores que contienen la suma de las filas y las columnas de $latex X$. Es una de las descomposiciones más simples que pueden pensarse. Sobre la diferencia entre $latex X$ (cuando esta es una tabla de contingencia) y su aproximación puede realizarse un test estadístico y bien conocido que cuando arroja un p-valor superior a 0.05 induce exclamar: ¡las filas son independientes entre sí! En este segundo caso, la compresión es máxima y la cantidad de información que trasmite es pequeña cuando, como suele suceder, las filas no son en absoluto independientes.

De lo que hay entre ambas descomposiciones —trivial la una, insustancial la otra— hablaré próximamente.
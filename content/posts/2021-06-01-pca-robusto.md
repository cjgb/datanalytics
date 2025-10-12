---
author: Carlos J. Gil Bellosta
categories:
- ciencia de datos
- estadística
- r
date: 2021-06-01 09:13:00+00:00
draft: false
lastmod: '2025-04-06T19:12:15.325476'
related:
- 2014-04-01-componentes-principales-para-quienes-cursaron-algebra-de-primero-con-aprovechamiento.md
- 2014-04-22-reponderacion-de-componentes-un-ejemplo.md
- 2014-07-24-datos-antes-y-despues-del-pca.md
- 2014-04-09-la-escala-natural-de-la-varianza.md
- 2014-06-19-factorizaciones-positivas-de-matrices-igualmente-positivas.md
tags:
- estadística robusta
- paquetes
- pca
- r
- rpca
title: PCA robusto
url: /2021/06/01/pca-robusto/
---

Esta semana _he descubierto_ el PCA robusto. En la frase anterior he conjugado el verbo en cursiva porque lo he pretendido usar con un significado que matiza el habitual: no es que haya tropezado con él fortuitamente, sino que el PCA robusto forma parte de esa inmensa masa de conocimiento estadístico que ignoro pero que, llegado el caso, con un par de clicks, una lectura en diagonal y la descarga del _software_ adecuado, puedo incorporarlo y usarlo a voluntad.

El problema en cuestión pedía PCA a gritos. Pero, por otro lado, PCA, como toda herramienta que incorpore cuadrados, produce resultados horribles cuando hay _outilers_. Tenía que existir una versión robusta de PCA (rPCA en lo que sigue) y, cómo no, la hay. La versión de [rPCA que estoy usando](https://cran.r-project.org/web/packages/rpca/index.html) está basado en una descomposición del tipo

$$ M \approx L + S$$

donde $M$ es la matriz de datos original, $L$ es una matriz de rango menor que el de $M$ (la descomposición de _dimensión baja_, el equivalente a la reconstrucción de $M$ a partir de sus $n$ primeras componentes principales y $S$ es una matriz de residuos que, por gentileza del algoritmo, tiene el mayor número posible de ceros (es decir, idealmente es rala (_sparse_)).

Es decir, aquellos valores anómalos que enloquecerían el PCA tradicional son relegados a $S$.

Una característica del algoritmo empleado es que decide automáticamente (es decir, problemáticamente) la dimensión de facto de $L$, es decir, el número de componentes principales que usar (o su rango, en definitiva). Al menos, si no se fuerza algo por defecto, cosa que aún no he tratado de hacer.

Y termino no contando una cosa: para qué pretendo usar esto. Lo siento, aún no se puede contar. Tal vez otro día.
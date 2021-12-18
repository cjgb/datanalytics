---
author: Carlos J. Gil Bellosta
date: 2021-06-01 09:13:00+00:00
draft: false
title: PCA robusto

url: /2021/06/01/pca-robusto/
categories:
- ciencia de datos
- estadística
- r
tags:
- estadística robusta
- paquetes
- pca
- r
- rpca
---

Esta semana _he descubierto_ el PCA robusto. En la frase anterior he conjugado el verbo en cursiva porque lo he pretendido usar con un significado que matiza el habitual: no es que haya tropezado con él fortuitamente, sino que el PCA robusto forma parte de esa inmensa masa de conocimiento estadístico que ignoro pero que, llegado el caso, con un par de clicks, una lectura en diagonal y la descarga del _software_ adecuado, puedo incorporarlo y usarlo a voluntad.

El problema en cuestión pedía PCA a gritos. Pero, por otro lado, PCA, como toda herramienta que incorpore cuadrados, produce resultados horribles cuando hay _outilers_. Tenía que existir una versión robusta de PCA (rPCA en lo que sigue) y, cómo no, la hay. La versión de [rPCA que estoy usando](https://cran.r-project.org/web/packages/rpca/index.html) está basado en una descomposición del tipo

$$ M \approx L + S$$

donde $latex M$ es la matriz de datos original, $latex L$ es una matriz de rango menor que el de $latex M$ (la descomposición de _dimensión baja_, el equivalente a la reconstrucción de $latex M$ a partir de sus $latex n$ primeras componentes principales y $latex S$ es una matriz de residuos que, por gentileza del algoritmo, tiene el mayor número posible de ceros (es decir, idealmente es rala (_sparse_)).

Es decir, aquellos valores anómalos que enloquecerían el PCA tradicional son relegados a $latex S$.

Una característica del algoritmo empleado es que decide automáticamente (es decir, problemáticamente) la dimensión de facto de $latex L$, es decir, el número de componentes principales que usar (o su rango, en definitiva). Al menos, si no se fuerza algo por defecto, cosa que aún no he tratado de hacer.

Y termino no contando una cosa: para qué pretendo usar esto. Lo siento, aún no se puede contar. Tal vez otro día.
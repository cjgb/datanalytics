---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2020-06-24 09:13:00+00:00
draft: false
lastmod: '2025-04-06T18:58:08.232152'
related:
- 2017-10-16-modelos-no-lineales-directos-e-inversos.md
- 2016-06-22-gbm-ii-minizacion-de-funciones-perdidas-cuadraticas-residuos-y-gradientes.md
- 2019-04-16-sobre-el-error-de-generalizacion-porque-a-veces-se-nos-olvida.md
- 2022-03-03-error-sesgo-modelos-lineales.md
- 2019-07-17-sobre-la-peculiarisima-implementacion-del-modelo-lineal-en-pseudo-scikit-learn.md
tags:
- estadística
- regresión
- regresión logística
title: La regresión logística como el modelo más simple posible (que...)
url: /2020/06/24/la-regresion-logistica-como-el-modelo-mas-simple-posible-que/
---

Problema de regresión. Queremos $y = f(\mathbf{x})$. Lo más simple que podemos hacer: fiarlo todo a [Taylor](https://es.wikipedia.org/wiki/Teorema_de_Taylor) y escribir $ y = a_0 + \sum_i a_i x_i$.

Problema de clasificación. Lo más simple que podemos hacer, de nuevo: linealizar. Pero la expresión lineal tiene rango en $latex (-\infty, \infty)$. Solución, buscar la función $latex f$ más sencilla que se nos pueda ocurrir de $latex (-\infty, \infty)$ en $latex [0, 1]$. Entonces, $latex y = f(a_0 + \sum_i a_i x_i)$.
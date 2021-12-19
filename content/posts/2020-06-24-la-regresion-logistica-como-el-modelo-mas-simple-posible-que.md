---
author: Carlos J. Gil Bellosta
date: 2020-06-24 09:13:00+00:00
draft: false
title: La regresión logística como el modelo más simple posible (que...)

url: /2020/06/24/la-regresion-logistica-como-el-modelo-mas-simple-posible-que/
categories:
- estadística
tags:
- estadística
- regresión
- regresión logística
---

Problema de regresión. Queremos $y = f(\mathbf{x})$. Lo más simple que podemos hacer: fiarlo todo a [Taylor](https://es.wikipedia.org/wiki/Teorema_de_Taylor) y escribir $ y = a_0 + \sum_i a_i x_i$.

Problema de clasificación. Lo más simple que podemos hacer, de nuevo: linealizar. Pero la expresión lineal tiene rango en $latex (-\infty, \infty)$. Solución, buscar la función $latex f$ más sencilla que se nos pueda ocurrir de $latex (-\infty, \infty)$ en $latex [0, 1]$. Entonces, $latex y = f(a_0 + \sum_i a_i x_i)$.
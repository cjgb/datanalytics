---
author: Carlos J. Gil Bellosta
categories:
- ciencia de datos
- estadística
date: 2020-11-03 09:13:00+00:00
draft: false
lastmod: '2025-04-06T18:59:44.019131'
related:
- 2020-11-20-distancias-iv-la-solucion-rapida-y-sucia.md
- 2020-11-02-distancias-i-el-planteamiento-del-problema.md
- 2020-11-23-distancias-v-el-colofon-ironico-especulativo.md
- 2022-07-14-proximidad-distribuciones.md
- 2015-09-08-voronois-con-distintas-distancias.md
tags:
- consultoría
- distancia
title: 'Distancias (II): las distancias no son distancias'
url: /2020/11/03/distancias-ii-las-distancias-no-son-distancias/
---

Una distancia, [Wikipedia dixit](https://es.wikipedia.org/wiki/Distancia#Distancia_en_espacio_m%C3%A9trico), sobre un conjunto $latex X$ es una función $latex d$ definida sobre $latex X \times X$ que toma valores en los reales $latex \ge 0$ y que cumple:

  1. $d(a,b) = 0 \iff a = b$
  2. $d(a,b) = d(b,a)$
  3. $d(a,c) \le d(a, b) + d(b, c)$

En la práctica, sin embargo, he encontrado violaciones tanto de (1) como de (2). ¿A alguien se le ocurren ejemplos?

Sin embargo, (3) se mantiene. Sin (3) todo se volvería una locura. De hecho, obtener resultados razonable usando _distancias_ significa particularmente que esas distancias cumplen (3).


_[Si alguien no está convencido de que (3) es garantía de cordura, que trate de construir _clústers_ (de puntos en dos dimensiones, sin ir más lejos) usando una _métrica_ $L_p$ con $0 < p < 1$.]_
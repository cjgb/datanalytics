---
author: Carlos J. Gil Bellosta
date: 2016-03-30 09:13:25+00:00
draft: false
title: Funciones de densidad log-cóncavas

url: /2016/03/30/funciones-de-densidad-log-concavas/
categories:
- probabilidad
tags:
- probabilidad
---

Las [funciones de densidad log-cóncavas](https://en.wikipedia.org/wiki/Logarithmically_concave_function) son aquellas cuyo logaritmo es una función cóncava. Por ejemplo, la normal: el  logaritmo de su función de densidad es, constantes aparte, $latex -x^2/2$.

El producto de dos funciones de densidad log-cóncavas es log-cóncava: $latex \log(fg) = \log f + \log g$ (y la suma de cóncavas es cóncava: calcula la segunda derivada). También lo son la suma de dos variables aleatorias cuyas funciones de densidad lo son (la demostración es consecuencia de [esta desigualdad](https://en.wikipedia.org/wiki/Pr%C3%A9kopa%E2%80%93Leindler_inequality)).

De hecho, el producto de dos funciones de densidad normales (no necesariamente unidimensionales) sigue siendo normal: la función de densidad resultante es la exponencial de una suma de formas cuadráticas, que es a su vez otra forma cuadrática. En concreto, el producto de las $latex \exp((x-\mu_i) V^{-1}_i (x-\mu_i))$ es  $latex \exp((x-\mu) V^{-1} (x-\mu))$ donde $latex V = \left( \sum_i V_i^{-1} \right)^{-1}$ y $latex \mu = V \left(\sum_i V_i^{-1} \mu_i \right)$.

---
author: Carlos J. Gil Bellosta
date: 2019-01-16 08:13:36+00:00
draft: false
title: Una de las mil maneras malas de elegir al mejor predictor

url: /2019/01/16/una-de-las-mil-maneras-malas-de-elegir-al-mejor-predictor/
categories:
- estadística
tags:
- predicción
- scorings
---

El contexto, [ayer](https://www.datanalytics.com/2019/01/15/quien-sera-el-mejor-predictor-como-se-podra-medir/).

La cosa es que se nos podría ocurrir premiar a los predictores cuando asignan probabilidad alta a los sucesos que ocurrieron y baja a los que no. Por ejemplo, si el evento $latex i$ ocurre, premiar al predictor con $latex p_i$ y si no ocurre, con $latex 1 - p_i$. Escrito de otra manera, con $latex p_i(X_i)$ (que quiere decir la probabilidad correspondiente al evento observado).

Como hay varios eventos, cada predictor se llevaría un premio igual a $latex s = \sum_i p_i(X_i)$ y sería mejor aquél predictor con el mayor valor de $latex s$. Estupendo.

Pero aquí comienzan los problemas. Los distintos predictores tratarán de maximizar el valor esperado de su _score_ $latex \sum_i p_i(X_i)$, es decir, $latex \sum_i E(p_i(X_i))$ y si la probabilidad real de $latex X_i$ es $latex q_i$, entonces (omitiendo el subíndice) $latex E(p(X)) = q p + (1-q) (1 - p) = 1 - p - q + 2pq = 1 - q + (2q - 1)p$.

Un predictor avispado verá que si $latex q > 0.5$ le vendrá bien exagerar y alegar $latex p = 1$; y, a la inversa, alegar $latex p=0$ cuando $latex q < 0.5$.

Si  estos predictores fuesen hombres del tiempo, con el anterior criterio de éxito, como la probabilidad de lluvia es relativamente baja (en estos lares), siempre darían sol (con 100% de seguridad).

Y eso es malo.

Si estos predictores fuesen modelos de clasificación que comparamos (usando cosas como `caret`), nuestro tinglado favorecería modelos que exagerasen las probabilidades (o, si se quiere, descalibrados).

Y eso también es malo.
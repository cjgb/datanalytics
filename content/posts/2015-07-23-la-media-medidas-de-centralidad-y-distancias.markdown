---
author: Carlos J. Gil Bellosta
date: 2015-07-23 08:13:31+00:00
draft: false
title: La media, medidas de centralidad y distancias

url: /2015/07/23/la-media-medidas-de-centralidad-y-distancias/
categories:
- estadística
tags:
- estadística
- media
- mediana
---

El problema de hoy viene sugerido por la manera de encontrar un valor central --una _medida de centralidad_-- en una serie de números $latex x_1,\dots, x_n$. A uno se le viene a la mente la media de dichos puntos, por supuesto. Pero la media no es sino el valor $latex \theta$ que minimiza


$latex \sum_i (x_i - \theta)^2.$


En lugar de minimizar la distancia al cuadrado entre ese punto central y los de la serie, podríamos usar otras funciones. Es sabido que si tratamos de minimizar


$latex \sum_i |x_i - \theta|$


el valor resultante es la mediana, otra medida de centralidad común. Y pueden usarse otras.

El problema que planteo hoy (y del que no sé si tengo clara la solución) es el siguiente: ¿se pueden caracterizar las distancias que resultan en la media como medida de centralidad? Por ejemplo, además de $latex f(x)=x^2$, también están $latex f(x)=c x^2$, donde $latex c>0$. Pero, ¿habrá más?

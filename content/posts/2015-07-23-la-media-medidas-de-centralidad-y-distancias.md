---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2015-07-23 08:13:31+00:00
draft: false
lastmod: '2025-04-06T18:51:53.813185'
related:
- 2010-05-25-sobre-la-media-y-la-mediana.md
- 2022-07-14-proximidad-distribuciones.md
- 2013-08-05-medianas-ponderadas.md
- 2017-04-12-experimentos-con-extremely-small-data-la-media-muestral-de-pocas-betas.md
- 2014-06-10-a-vueltas-con-el-t-test.md
tags:
- estadística
- media
- mediana
title: La media, medidas de centralidad y distancias
url: /2015/07/23/la-media-medidas-de-centralidad-y-distancias/
---

El problema de hoy viene sugerido por la manera de encontrar un valor central ---una _medida de centralidad_--- en una serie de números $x_1,\dots, x_n$. A uno se le viene a la mente la media de dichos puntos, por supuesto. Pero la media no es sino el valor $\theta$ que minimiza

$$ \sum_i (x_i - \theta)^2.$$

En lugar de minimizar la distancia al cuadrado entre ese punto central y los de la serie, podríamos usar otras funciones. Es sabido que si tratamos de minimizar

$$ \sum_i |x_i - \theta|$$

el valor resultante es la mediana, otra medida de centralidad común. Y pueden usarse otras.

El problema que planteo hoy (y del que no sé si tengo clara la solución) es el siguiente: ¿se pueden caracterizar las distancias que resultan en la media como medida de centralidad? Por ejemplo, además de $f(x)=x^2$, también están $f(x)=c x^2$, donde $c>0$. Pero, ¿habrá más?
---
author: Carlos J. Gil Bellosta
date: 2019-03-13 08:13:31+00:00
draft: false
title: Mezclas y regularización

url: /2019/03/13/mezclas-y-regularizacion/
categories:
- ciencia de datos
- estadística
tags:
- estadística
- lasso
- mezclas
- regularización
- regresión ridge
---

Cuando mezclas agua y tierra obtienes barro, una sustancia que comparte propiedades de sus ingredientes. Eso lo tenía muy claro de pequeño. Lo que en esa época me sorprendió mucho es que el agua fuese una _mezcla_ de oxígeno e hidrógeno: ¡era muy distinta de sus componentes!

Porque no era una mezcla, obviamente. Era una _combinación_. En una combinación emergen propiedades inesperadas. Las mezclas, sin embargo, son más previsibles.

Pensaba en esto mientras escribía sobre la regularización de modelos (_ridge_, _lasso_ y todas esas cosas). La regularización puede interpretarse como una mezcla de dos modelos: el original y el nulo (con todos los coeficientes iguales a cero). El modelo original tiene poco sesgo y mucha varianza; el nulo, prácticamente nada de varianza y muchísimo sesgo. El regularizado queda a medio camino. El original tiene varios, tal vez muchos, grados de libertad mientras que el nulo, ninguno (¿o uno?); puede considerarse que el  número de grados de libertad del regularizado queda a medio camino.

Así que _ridge_, _lasso_, _elastic net_ y otros (puedo incluir aquí a la vetusta regresión _stepwise_, entendida de nuevo y cometiendo un craso abuso del lenguaje como un promedio entre el modelo saturado y el nulo) son simplemente técnicas para promediar modelos. Mejores o peores,  con sus ventajas y sus inconvenientes, pero modos al fin y al cabo de promediar dos extremos.

Para terminar, un pequeño **ejercicio mental**: ¿qué si _regularizas hacia_ un modelo distinto del nulo? Me refiero a lo siguiente (y, por fijar ideas, utilizaré la regresión _ridge_): tenemos un modelo lineal con coeficientes $\beta_j$; entonces la regresión ridge es el resultado de minimizar la consabida expresión

$$ \sum_i (y_i - \beta_0 + \sum_j \beta_j x_{ij})^2 + \lambda \sum_j \beta_j^2.$$


El término de regularización, $latex \lambda \sum_j \beta_j^2$ también puede escribirse de la forma

$$ \lambda \sum_j (\beta_j - b_j)^2$$

donde los valores $latex b_j = 0$ corresponden a los coeficientes del modelo nulo. ¿Pero qué si se usa como modelo _nulo_ otro en el que no ocurra necesariamente $latex b_j = 0$? ¿Qué si nuestra _priori_ es un modelo no nulo? La interpretación de la regularización como mezcla de modelos seguiría en pie, pero todas las consideraciones acerca de grados de libertad, del _bias/variance trade-off_, etc. se caerían.

**Nota final:** todo lo discutido aquí es un corolario tonto de la reformulación bayesiana de la cuestión. Pero esa es otra historia.

**Addenda:** Véase [esto](http://www.datanalytics.com/2019/04/10/un-resultado-contraintuitivo/) donde se retoma la discusión y se llega a una conclusión muy contraintuitiva.




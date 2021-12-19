---
author: Carlos J. Gil Bellosta
date: 2020-11-20 09:13:00+00:00
draft: false
title: 'Distancias (IV): la solución rápida y sucia'

url: /2020/11/20/distancias-iv-la-solucion-rapida-y-sucia/
categories:
- ciencia de datos
- consultoría
- estadística
tags:
- ciencia de datos
- consultoría
- distancia
- estadística
---

[Prometí](https://www.datanalytics.com/2020/11/06/distancias-iii-la-gran-pregunta/) (d)escribir una solución rápida y sucia para la construcción de distancias cuando fallan las _prêt à porter_ (euclídeas, Gower, etc.).

Está basada en la muy socorrida y casi siempre falsa hipótesis de independencia entre las distintas variables $latex x_1, \dots, x_n$ y tiene la forma

$$ d(x_a, x_b) = \sum_i \alpha_i d_i(x_{ia}, x_{ib})$$

donde los valores $latex \alpha_i$ son unos pesos que me invento (¡eh!, Euclides también se inventó que $latex \alpha_i = 1$ y nadie le frunció el ceño tanto como a mí tú ahora) tratando de que ponderen la importancia relativa que tiene la variable $latex i$ en el fenómeno que me interesa.

Luego, las $latex d_i$ son cosas totalmente _ad hoc_ según lo que represente la variable $latex i$: puede que tome logaritmos y que añada algún valor máximo antes de restar los valores; puede que sea una distancia 0-1; puede que dependa de si los códigos postales, de serlo, correspondan o no a la misma provincia; puede que la distancia sea cero si coinciden, 1 si son de la misma provincia y 2 si no lo son; puede que me base en el número de meses de diferencia, etc. Lo importante es la dimensión artesanal del proceso, del cariño que se le profese y del tiempo disponible.
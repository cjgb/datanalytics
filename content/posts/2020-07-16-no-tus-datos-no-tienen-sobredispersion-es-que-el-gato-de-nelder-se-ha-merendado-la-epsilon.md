---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2020-07-16 12:05:57+00:00
draft: false
lastmod: '2025-04-06T19:12:47.351661'
related:
- 2020-07-22-aun-mas-sobre-la-presunta-sobredispersion-en-modelos-de-poisson.md
- 2020-09-22-una-diferencia-teorica-importante-entre-los-lm-y-el-resto-de-los-glm.md
- 2020-07-17-mas-sobre-la-presunta-sobredispersion-en-el-modelo-de-poisson.md
- 2019-01-08-modelos-de-conteos-con-sobredispersion-con-stan.md
- 2021-02-05-separacion-perfecta-en-el-modelo-de-poisson.md
tags:
- estadística
- glm
- poisson
- sobredispersión
title: 'No, tus datos no "tienen sobredispersión": es que el gato de Nelder se ha
  merendado la epsilon'
url: /2020/07/16/no-tus-datos-no-tienen-sobredispersion-es-que-el-gato-de-nelder-se-ha-merendado-la-epsilon/
---

El modelo de Poisson viene a decir que si `y` es una variable con valores 0, 1,... y `x1`,..., `xn` son variables explicativas tiene cierto sentido en algunos casos plantear un modelo de la forma

$$ y | x_i \sim \text{Pois}(\exp(a_0 + \sum_i a_i x_i) ),$$

Es decir , para cada combinación de las `xi`, el modelo proporciona el parámetro de una distribución de Poisson de la que `y` es una realización. Hay una incertidumbre (o un error irreductible) que reside en que de `y` solo conocemos la distribución.

Pero el modelo anterior tiene un problema, un megaproblema. Un problema enorme, _nachovidaliano_,  en el que apenas se repara y del que en contadas ocasiones nos advierten: que también puede haber un error en la expresión lineal. Más bien: **siempre hay un error en la expresión lineal**. Las `xi` solo recogen _todo_ lo que hay que saber sobre `y` _en laboratorio_.

¿Qué ocurre si hay un error de especificación? ¿Qué pasa si omitimos alguna variable relevante para determinar y? Para averiguarlo, es útil comenzar planteando un modelo mucho más satisfactorio:

$$ y_j | x_{ij}  \sim \text{Pois}(\exp(a_0 + \sum_i a_i x_{ij} + \epsilon_j))$$

$$ \epsilon_j \sim N(0, \sigma)$$

con las habituales propiedades de independencia.

El primer modelo [infraestima la variabilidad de las `y`](https://statisticalmodeling.wordpress.com/2011/06/16/the-variance-of-a-mixture/) porque elimina una fuente de variabilidad: la del error de especificación. Aparentemente, tus `y` tienen mayor varianza de la que cabe esperar... de acuerdo con (y solo porque usas un) modelo setentero.

Mañana, algunos números al respecto.
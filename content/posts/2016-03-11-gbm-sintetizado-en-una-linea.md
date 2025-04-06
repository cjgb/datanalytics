---
author: Carlos J. Gil Bellosta
categories:
- ciencia de datos
- estadística
date: 2016-03-11 09:13:53+00:00
draft: false
lastmod: '2025-04-06T18:47:55.826038'
related:
- 2014-02-06-experimentos-con-el-paquete-gbm.md
- 2020-09-22-una-diferencia-teorica-importante-entre-los-lm-y-el-resto-de-los-glm.md
- 2016-06-22-gbm-ii-minizacion-de-funciones-perdidas-cuadraticas-residuos-y-gradientes.md
- 2016-06-24-gbm-ii-mas-alla-de-las-perdidas-cuadraticas.md
- 2022-03-03-error-sesgo-modelos-lineales.md
tags:
- estadística
- gbm
title: GBM sintetizado en una línea
url: /2016/03/11/gbm-sintetizado-en-una-linea/
---

Es

$$ \sum_i \Phi(y_i, f_1(x_i)) > \sum_i \Phi(y_i, f_1(x_i) - \lambda \nabla \Phi(y_i, f_1(x_i)) \sim$$
$$ \sim \sum_i \Phi(y_i, f_1(x_i) - \lambda f_2(x_i))$$

Por supuesto, el lector se preguntará muchas cosas, entre las que destaco:

* ¿Qué representa cada uno de los elementos que aparecen en la línea anterior?
* ¿Qué parte de ella es solo _casi siempre_ cierta?
* ¿Qué tiene todo eso que ver con [GBM](https://github.com/harrysouthworth/gbm/blob/master/inst/doc/gbm.pdf)?
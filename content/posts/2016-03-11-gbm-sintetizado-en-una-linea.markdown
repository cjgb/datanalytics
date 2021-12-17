---
author: Carlos J. Gil Bellosta
date: 2016-03-11 09:13:53+00:00
draft: false
title: GBM sintetizado en una línea

url: /2016/03/11/gbm-sintetizado-en-una-linea/
categories:
- ciencia de datos
- estadística
tags:
- estadística
- gbm
---

Es


$latex \sum_i \Phi(y_i, f_1(x_i)) > \sum_i \Phi(y_i, f_1(x_i) - \lambda \nabla \Phi(y_i, f_1(x_i)) \sim \sum_i \Phi(y_i, f_1(x_i) - \lambda f_2(x_i))$


Por supuesto, el lector se preguntará muchas cosas, entre las que destaco:



	  * ¿Qué representa cada uno de los elementos que aparecen en la línea anterior?
	  * ¿Qué parte de ella es solo _casi siempre_ cierta?
	  * ¿Qué tiene todo eso que ver con [GBM](https://github.com/harrysouthworth/gbm/blob/master/inst/doc/gbm.pdf)?


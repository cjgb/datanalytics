---
author: Carlos J. Gil Bellosta
date: 2014-12-31 07:13:02+00:00
draft: false
title: El problema de la estimación inversa

url: /2014/12/31/el-problema-de-la-estimacion-inversa/
categories:
- estadística
tags:
- estadística
- regresión
---

Supongamos que tenemos unos niños de los que sabemos las edades $latex x_i$ y las alturas $latex y_i$. Supongamos además que podemos estimar las segundas en función de las primeras con un modelo lineal clásico


$latex y_i \sim N(a_0 + a_1 x_1, \sigma).$


Este modelo nos permite, dada una edad, estimar la altura y los correspondientes intervalos de confianza. Pero, dada una altura, ¿qué nos dice de la edad? Este es el problema conocido como de la _estimación inversa_.

En este caso concreto es relativamente sencillo. Pero, ¿qué si $latex y_i$ depende de más de una variable predictora? ¿O si la regresión no es lineal? ¿O si...?

Estos problemas y algunas maneras de afrontarlos se discuten en [_investr: An R Package for Inverse Estimation_](http://journal.r-project.org/archive/2014-1/greenwell-kabban.pdf). Artículo que, cuyo nombre bien indica, viene acompañado de un paquete de R, [`investr`](http://cran.rstudio.com/web/packages/investr/). Que me hubiese resultado muy útil en más de una ocasión.

**Nota:** Desde hace unas semanas vengo prefieriendo representar el modelo lineal como arriba en lugar de la manera más tradicional, $latex y_i = a_0 + a_1 x_1 + \epsilon_i$. Cuando tenga más claro el motivo, os lo cuento.

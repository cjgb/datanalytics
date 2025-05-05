---
author: Carlos J. Gil Bellosta
categories:
- probabilidad
date: 2014-10-21 07:13:53+00:00
draft: false
lastmod: '2025-04-06T19:10:38.605740'
related:
- 2014-10-10-bootstrap-bayesiano.md
- 2014-06-10-a-vueltas-con-el-t-test.md
- 2021-02-18-donde-son-mas-frecuentes-las-muestras-de-una-distribucion-en-dimensiones-altas.md
- 2021-03-02-un-argumento-para-usar-la-normal-la-maximizacion-de-la-entropia.md
- 2014-11-10-remuestreos-y-tests-de-hipotesis.md
tags:
- bootstrap
- probabilidad
- remuestreo
title: Más allá del teorema central del límite
url: /2014/10/21/mas-alla-del-teorema-central-del-limite/
---

Uno espera la media de un número suficiente de variables aleatorias razonablemente [iid](http://en.wikipedia.org/wiki/Independent_and_identically_distributed_random_variables) tenga una distribución normal. Uno casi espera siempre obtener ese aburrido histograma cada vez que remuestrea medias. La gente dice que el teorema central del límite rige necesariamente cuando su tamaño muestral es del orden de magnitud del bruto anual de un gerifalte. Etc.

Pero a veces uno tropieza con distribuciones _bootstrap_ tales como

[![whentheoutlierisbigenough](/wp-uploads/2014/10/whentheoutlierisbigenough.png#center)
](/wp-uploads/2014/10/whentheoutlierisbigenough.png#center)

que le hacen recordar que existe un universo más allá de las hipótesis de esos teoremas tan manidos; que la teoría, al final, solo llega hasta donde llega y que, en definitiva, hay que estar siempre alerta y desconfiar del rituales y automatismos.

El histograma anterior debiera haber sido _normal_. Es, reitero, la distribución de una media de números positivos obtenida mediante _bootstrap_ clásico, como se indica [aquí](https://datanalytics.com/2014/10/10/bootstrap-bayesiano/) con datos reales sobre los que no puedo dar más pistas. Supongo que los más perspicaces de mis lectores adivinán qué ha pasado.
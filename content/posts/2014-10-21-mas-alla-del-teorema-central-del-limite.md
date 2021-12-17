---
author: Carlos J. Gil Bellosta
date: 2014-10-21 07:13:53+00:00
draft: false
title: Más allá del teorema central del límite

url: /2014/10/21/mas-alla-del-teorema-central-del-limite/
categories:
- probabilidad
tags:
- bootstrap
- probabilidad
- remuestreo
---

Uno espera la media de un número suficiente de variables aleatorias razonablemente [iid](http://en.wikipedia.org/wiki/Independent_and_identically_distributed_random_variables) tenga una distribución normal. Uno casi espera siempre obtener ese aburrido histograma cada vez que remuestrea medias. La gente dice que el teorema central del límite rige necesariamente cuando su tamaño muestral es del orden de magnitud del bruto anual de un gerifalte. Etc.

Pero a veces uno tropieza con distribuciones _bootstrap_ tales como

[![whentheoutlierisbigenough](/wp-uploads/2014/10/whentheoutlierisbigenough.png)
](/wp-uploads/2014/10/whentheoutlierisbigenough.png)

que le hacen recordar que existe un universo más allá de las hipótesis de esos teoremas tan manidos; que la teoría, al final, solo llega hasta donde llega y que, en definitiva, hay que estar siempre alerta y desconfiar del rituales y automatismos.

El histograma anterior debiera haber sido _normal_. Es, reitero, la distribución de una media de números positivos obtenida mediante _bootstrap_ clásico, como se indica [aquí](http://www.datanalytics.com/2014/10/10/bootstrap-bayesiano/) con datos reales sobre los que no puedo dar más pistas. Supongo que los más perspicaces de mis lectores adivinán qué ha pasado.



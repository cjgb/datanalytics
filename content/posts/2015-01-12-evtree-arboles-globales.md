---
author: Carlos J. Gil Bellosta
date: 2015-01-12 07:13:44+00:00
draft: false
title: 'evtree: árboles globales'

url: /2015/01/12/evtree-arboles-globales/
categories:
- programación
- estadística
- r
tags:
- árboles de decisión
- ctree
- evtree
- optimización
- r
- rpart
---

Tengo por delante otro proyecto que tiene mucho de análisis exploratorio de datos. Sospecho que más de un árbol construiré. Los árboles son como la Wikipedia: prácticamente nunca el último pero casi siempre el primer recurso.

Esta vez, además, por entretenerme un poco, probaré el paquete `[evtree](http://cran.r-project.org/web/packages/evtree/index.html)`. Aunque no porque espere sorprendentes mejoras con respecto a los tradicionales, `ctree` y `rpart`.

¿Qué tiene aquél que los diferencie de los otros dos? Que la optimización es global. Tanto `ctree` como `rpart` utilizan algoritmos recursivos: al definir un nuevo corte del espacio, el algoritmo solo tiene en cuenta la región definida por los cortes anteriores. La optimización es local. `evtree` utiliza un algoritmo global de la familia de los _[evolucionarios](http://en.wikipedia.org/wiki/Evolutionary_algorithm)_ (¡qué tufillo a lentorro!). Los detalles están [aquí](http://www.jstatsoft.org/v61/i01).

A ver qué os puedo contar aquí cuando comience a usarlo. Pero si a alguien le vence la curiosidad, bueno, libre es para pasar un ratillo con él.

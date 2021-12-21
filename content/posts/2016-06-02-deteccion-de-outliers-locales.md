---
author: Carlos J. Gil Bellosta
date: 2016-06-02 08:13:19+00:00
draft: false
title: Detección de "outliers" locales

url: /2016/06/02/deteccion-de-outliers-locales/
categories:
- estadística
- r
tags:
- outliers
- r
- rlof
- paquetes
---

Aunque _outlier local_ parezca oxímoron, es [un concepto que tiene sentido](http://www.dbs.ifi.lmu.de/Publikationen/Papers/LOF.pdf).

Un _outlier_ es un punto dentro de un conjunto de datos tan alejado del resto que diríase generado por un mecanismo distinto que el resto. Por ejemplo, puedes tener las alturas de la gente y alguna observación que parece producto de otra cosa como, por ejemplo, errores mecanográficos en la transcripción. Un _outlier_ está lejos del resto. Pero, ¿cuánto?

Con ciertas distribuciones tiene sentido pensar que los _outliers_ son puntos a una distancia superior a nosecuántas desviaciones típicas de la media. Más en general, fuera de un determinado círculo. Una medida similar: serían _outliers_ aquellos puntos que a una determinada distancia solo tienen un determinado porcentaje (pequeño) del resto. Todas estas son medidas globales.

En [_LOF: Identifying Density-Based Local Outliers_](http://www.dbs.ifi.lmu.de/Publikationen/Papers/LOF.pdf) se describe, en [`Rlof`](https://cran.r-project.org/web/packages/Rlof/index.html) se implementa y en [Adobe Analytics Clickstream Data Feed: Calculations and Outlier Analysis](http://randyzwitch.com/adobe-analytics-clickstream-data-feed-calculations/) se muestra un ejemplo de uso de una técnica alternativa que tiene en cuenta el aspecto _local_ de los _outliers_. Puede que en una región del espacio sea preciso considerar una determinada distancia y en otras, otra; es decir, que tiene sentido utilizar _radios adaptativos_.

¿Cómo? Primero, seleccionando un valor `k` (¡ya empezamos con los parámetros!). Luego se encuentran los k-vecinos de cada punto. Será un _outlier_ un punto que está más lejos de sus k vecinos que lo están en promedio sus k vecinos de sus correspondientes k vecinos.

Eso, debidamente formalizado, es el LOF, o _local outlier factor_.

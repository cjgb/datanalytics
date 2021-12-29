---
author: Carlos J. Gil Bellosta
date: 2020-10-22 09:13:00+00:00
draft: false
title: ¿Modelos para ordenar datos?

url: /2020/10/22/modelos-para-ordenar-datos/
categories:
- artículos
- programación
- estadística
tags:
- artículos
- programación
- muestreo
---

Ayer leí [este resumen](https://blog.acolyer.org/2020/10/19/the-case-for-a-learned-sorting-algorithm/) de [este artículo](https://dl.acm.org/doi/10.1145/3318464.3389752) que propone y discute un algoritmo novedoso y _basado en ciencia de datos_ para ordenar datos y hacerle la competencia a _quicksort_ y demás. Reza y promete:

>The results show that our approach yields an average 3.38x performance improvement over C++ STL sort, which is an optimized Quicksort hybrid, 1.49x improvement over sequential Radix Sort, and 5.54x improvement over a C++ implementation of Timsort, which is the default sorting function for Java and Python.

La idea fundamental del algoritmo consiste en crear un modelo que estime (aproximadamente, claro está) dónde quedaría cada observación una vez ordenados los datos además de, obviamente, una discusión sobre cómo solucionar los errores de predicción.

Mis comentarios al respecto:

* No he visto el modelo en concreto, solo lo que aparece en el resumen. Y parece una cosa muy complicada, con muchas capas. Pero sospecho que lo que hay en el fondo es una aproximación a los cuantiles de una distribución basada en una muestra de los datos.
* Lo cual me lleva a pensar una idea basada en el muestreo: si quiero ordenar una lista muy grande, puedo seleccionar una muestra (p.e., de 9999 elementos) y crear 1000 _buckets_. Puedo luego asignar los elementos originales a cada bucket y ordenarlos luego de cualquier manera. Posiblemente iterando recursivamente en ellos.
* Lo que me hace pensar en tres cosas:
  * Igual he mejorado el artículo original (improbable).
  * He reinventado _quicksort_ (que es eso, pero con una muestra con N = 1).
  * He reinventado _radixsort_ (que hace una muestra que haría llorar a los expertos en muestreo).

Para terminar: apostaría a que casi ninguno de nosotros va a volver a oír hablar jamás de este método de ordenación.
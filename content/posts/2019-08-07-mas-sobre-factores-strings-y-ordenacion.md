---
author: Carlos J. Gil Bellosta
date: 2019-08-07 09:13:34+00:00
draft: false
title: Más sobre factores, strings y ordenación

url: /2019/08/07/mas-sobre-factores-strings-y-ordenacion/
categories:
- r
tags:
- r
- radix
- sort
- order
- trucos
---

Esta entrada debería ser un comentario más en [esta otra](https://www.datanalytics.com/2019/08/05/dplyr-parece-que-prefiere-los-factores/#comments), pero voy a abusar del privilegio de ser dueño de la plataforma para promocionarla.

Voy a decir cosas que son aproximadamente ciertas. Los detalles de la verdad de todo están en la ayuda y el código de `sort` y sus métodos.

En R hay dos métodos de ordenación: `shell` y `radix`. El primero es genérico y el segundo es mejor cuando en el vector hay muchos elementos repetidos (p.e., ordenar el censo por provincias).

R utiliza ciertas reglas para determinar cuándo usar uno u otro. Por ejemplo, para factores usa `radix`. También para ordenar vectores largos de enteros pequeños. Etc. Si no, usa `shell`. En particular, usa `shell` por defecto para ordenar _strings_.

Por tanto, si codificas las provincia como `string` en un conjunto de datos tan grande como el censo y tratas de ordenar, te estás disparando en el pie. Así debe entenderse el consejo de Iñaki Úcar (en el hilo antes mencionado) de que

>[s]iempre es mejor tener factores que cadenas.

A nadie le gustan los factores. Mucha gente los desaconseja y clama por cambiar el criterio de R de leer columnas de texto como factores por defecto. Úcar, que tiene el vicio de equivocarse poco, recomienda lo contrario en este contexto concreto, entiendo.

Tampoco se equivoca cuando dice que

>[e]l hecho de que R almacene las cadenas de forma única y tenga punteros a ellas es un tema de eficiencia de memoria, pero supone poca o nula diferencia a la hora de ordenar.

Es cierto (aquí y hoy) pero podría no serlo en el futuro. Alguien podría reimplementar `sort` para _strings_ diciendo: siempre que el vector de valores únicos del vector sea mucho más corto que el del vector, úsese `radix`. En principio, no veo por qué no podría hacerse.

Finalmente, sí, es evidente que es mucho más sencillo comparar enteros que comparar cadenas de texto. Sobre todo en el mundo extra-ASCII. Pero iguales algoritmos de ordenación deberían realizar el mismo número de comparaciones (en el ejemplo que propuse en la entrada arriba mencionada) y el coste adicional de la ordenación debería ser lineal con la complejidad de la función de comparación... y eso es solo la mitad de la historia que parece que explica el misterio.

En resumen, la diferencia fundamental entre el tiempo de ordenación de enteros, factores y strings tiene dos causas fundamentales:

* La complejidad de la función de comparación entre parejas de elementos (enteros o strings) para determinar cuál es mayor.
* Las reglas que hacen que se use `radix` o `shell` como algoritmo de ordenación.

Y aventuraría, además, que la segunda pesa más que la primera. Cosa que es fácil de probar y refutar y que dejo como ejercicio a alguno de mis lectores que, a diferencia de servidor, esté de vacaciones.
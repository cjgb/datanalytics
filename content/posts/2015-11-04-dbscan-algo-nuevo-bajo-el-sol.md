---
author: Carlos J. Gil Bellosta
date: 2015-11-04 08:13:28+00:00
draft: false
title: DBSCAN, ¿algo nuevo bajo el sol?

url: /2015/11/04/dbscan-algo-nuevo-bajo-el-sol/
categories:
- ciencia de datos
tags:
- clústering
- dbscan
- ciencia de datos
---

Ha sido en latitudes otras que las habituales que he aprendido y leído (mas no probado) sobre [DBSCAN](https://en.wikipedia.org/wiki/DBSCAN). Se conoce que es un nuevo (aunque ya tiene sus añitos: algo así como 20) método de _clústering_.

Por un lado, se agradecen las novedades.

Por el otro, tengo cierta aversión a las cosas que proceden de los congresos de _Knowledge Discovery and Data Mining_, que es donde fue publicado el algoritmo.

En esencia, funciona así: se fijan dos parámetros, `e` y `n`. Un punto es _central_ si a distancia `e` o menor tiene, al menos, otros `n` puntos. Los _clústers_ los conforman:

* Puntos centrales que están a una distancia menor de `e` de algún otro (los amigos de amigos son amigos).
* Puntos que están a menos de `e` de los anteriores (aunque no sean centrales).


No se fija el número de _clústers_ de antemano. Los únicos parámetros son los anteriores. Los puntos que no caen en ningún _clúster_ son ruido (y se ignoran); esto es novedad.

Como consecuencia de lo anterior, los _clústers_ creados por DBSCAN pueden ser largos, i.e., cadenas de puntos. Esto plantea un problema: que puntos de un mismo clúster situados en extremos de una de esas cadenas largas acaben pareciéndose como los proverbiales huevos y castañas.

Además, no tengo claro cómo de sustancialmente difiere el resultado de este algoritmo (y el algoritmo en sí) del tradicional _clústering_ jerárquico usando la distancia del mínimo entre los subclústers candidatos a unirse.

Bueno o no, mis alumnos del máster de la UTAD de la siguiente edición serán los principales sufridores de mi curiosidad y de ver si [`dbscan`](https://cran.r-project.org/web/packages/dbscan/index.html) mejora, empeora, difiere o se asemeja a otras cosas que por ahí existen.

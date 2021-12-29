---
author: Carlos J. Gil Bellosta
date: 2015-09-23 08:13:47+00:00
draft: false
title: ¿Cómo contar el número de elementos distintos de una lista?

url: /2015/09/23/como-contar-el-numero-de-elementos-distintos-de-una-lista/
categories:
- programación
- probabilidad
tags:
- hash
- hyperloglog
---

El problema es sencillo: se cuentan y ya.

Pero hay quienes tienen cantidades ingentes de elementos que contar. Tantos que por razones de memoria, etc., es inviable hacer _lo obvio_, es decir, guardar una lista de claves (elementos distintos) y valores (el número de ocurrencias) sumando uno a los últimos cada vez que ocurra una de las primeras.

Por ese motivo, existen algoritmos que aproximan el número de elementos distintos de una lista. Existe, de hecho, toda una industria dedicada a crear tal tipo de algoritmos.

Veamos una versión simplificada de uno de ellos. A cada elemento se le calcula un _hash_. Un _hash_ es una función no continua. Por ejemplo, como esta:

{{< highlight bash "linenos=true" >}}
carlos@chino:~$ echo "hola" | md5sum
916f4c31aaa35d6b867dae9a7f54270d
{{< / highlight >}}

Convierte la cadena `"hola"` en un número (en hexadecimal), el que aparece arriba. Si se escribe en binario, se puede contar el número de ceros con el que principia.

Si hubiese muchos elementos distintos y se calculase el número de ceros con el que comienza el _hash_ de cada uno de ellos aumentaría la probabilidad de que hubiese más y más. Si el número máximo de ceros es pequeño, el número de elementos distintos será, probablemente, pequeño. Si es grande, es probable que el número de ceros máximo al principio de la cadena sea mayor.

Con eso y un poquito más, se tiene [`HyperLogLog`](http://antirez.com/news/75). [Aquí](http://content.research.neustar.biz/blog/hll.html) se lo puede ver en funcionamiento.

(Nota: el _poquito_ más es un truco para tener varios máximos en lugar de solo uno y poder afinar la predicción).

(Otra nota: en el [artículo](http://algo.inria.fr/flajolet/Publications/FlFuGaMe07.pdf) en el que se publicó el algoritmo no dice _likelihood_ en ninguna parte. ¡Raro!)









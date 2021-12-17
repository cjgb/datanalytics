---
author: Carlos J. Gil Bellosta
date: 2015-02-25 08:13:35+00:00
draft: false
title: Todos contra todos

url: /2015/02/25/todos-contra-todos/
categories:
- r
tags:
- outer
- r
---

¿Cómo se suman los cuadrados de un vector de números en un paradigma _tradicional_ de programación? Se crea un bucle que lo recorre y que guarda las sumas parciales en un acumulador. Sumamente económico en términos de memoria: apenas consume unos pocos bytes en la pila. La versión funcional de la cosa se parece más a `sum(x^2)`, que implica generar un vector de cuadrados y dilapidar memoria.

Así las cosas, en C uno tiende a recorrer y construir resultados parciales. R invita a crear estructuras de datos preprocesados y aplicar sobre ellas funciones resumen. _Map_ y _reduce_, si se quiere.

Hay operaciones que se avienen perfectamente a este paradigma; otras (por ejemplo, la [convolución](http://es.wikipedia.org/wiki/Convoluci%C3%B3n)) no tanto. Crítico es, en cualquier caso, contar con instrumentos que faciliten la construcción de esas estructuras intermedias de datos.

Conocidos son las funciones `*pply` y otras similares que proporcionan paquetes adicionales. Sin embargo, una de las menos conocidas del programador circunstancial de R es [`outer`](https://stat.ethz.ch/R-manual/R-devel/library/base/html/outer.html).

Esta función tiene características de _map_ y de _reduce_ a un tiempo. _Es_ un _map_, pero aplica una función de dos argumentos (por ejemplo, el producto) a todas las parejas de entradas de dos vectores (y más en general, dos _arrays_ multidimensionales) produciendo una matriz (un array con dimensión igual a la suma de las de los de entrada).

Un ejemplo de uso (basado en una pregunta en [R-help-es](https://stat.ethz.ch/mailman/listinfo/r-help-es)) es obtener la suma de las parejas (distintas) de números del vector `x <- c(24,12,45,68,45)`. Una (y mi) solución es:



    x <- c(24,12,45,68,45)
    tmp <- outer(x, x, "*")
    sum(tmp[<a href="http://inside-r.org/r-doc/base/lower.tri">lower.tri(tmp)])



Otras igual más interesantes están en la ayuda de la función. Y las más, más interesantes de todas van a estar en tu línea de comandos pronto. Seguro.

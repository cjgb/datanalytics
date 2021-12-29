---
author: Carlos J. Gil Bellosta
date: 2013-07-10 07:33:03+00:00
draft: false
title: Mi definición de "big data"

url: /2013/07/10/mi-definicion-de-big-data/
categories:
- ciencia de datos
- programación
tags:
- programación
- grandes datos
- ciencia de datos
- software
---

No sin descaro, me atrevo a aportar una definición alternativa a eso que llaman _big data_ y que yo traduzco en ocasiones como _grandes datos_.

No obstante, para comprenderla, considero necesaria una pequeña digresión de dos párrafos —con la que muchos, espero, no aprenderán nada que no traigan ya sabido— sobre los lenguajes de programación [declarativos](http://es.wikipedia.org/wiki/Programaci%C3%B3n_declarativa) e [imperativos](http://es.wikipedia.org/wiki/Programaci%C3%B3n_imperativa).

En los primeros, programar consiste esencialmente en escribir con cierta notación aquello que quieres: la suma de los elementos de un vector, el promedio de los valores de una columna de una tabla, la suma de los saldos de los clientes de Soria, etc. El intérprete se encarga de servirte los resultados en la proverbial bandeja.

Sin embargo, los lenguajes imperativos te obligan a crear punteros, reservar espacio para las variables intermedias, recorrer vectores con bucles, tener en cuenta el tamaño en bytes de los enteros, liberar bloques de memoria, etc. Todos hemos programado alguna vez en C, ¿verdad?

Y he aquí mi definición de grandes datos:

>Los grandes datos son aquellos que convierten _de facto_ los lenguajes declarativos en lenguajes imperativos.

Y para que se entienda un par de ejemplos.

El primero, con R. Todos hemos usado `dataframes` y operado con ellos. Una línea basta para obtener los coeficientes de un modelo lineal, etc. Pero cuando los conjuntos de datos crecen en tamaño, uno comienza a tropezar con errores del tipo _cannot allocate 250MB_. O hay que plantearse el uso de paquetes _ad hoc_, tales como [`data.table`](http://www.datanalytics.com/blog/2013/05/02/data-table-i-cruces/) u otros que lo obligan a uno a ocuparse de dónde y cómo se almacenan los datos, hilar fino para encontrar la manera adecuada de filtrarlos o cruzarlos con otros, etc.

El segundo, con SQL, el lenguaje declarativo por excelencia. Pero con el que, apenas comienzan a crecer las bases de datos en volumen, tiene uno que sumergirse en el análisis de los planes de ejecución, considerar el particionamiento de tablas, la creación de índices, etc. Al final, los aspectos declarativos del lenguaje dejan de parecer _features_ y comienzan a atufar a _bug_.

No es de extrañar, por tanto, que se confundan en ocasiones (o que se manejen como sinónimos) grandes datos y herramientas de corte imperativo como Hadoop.

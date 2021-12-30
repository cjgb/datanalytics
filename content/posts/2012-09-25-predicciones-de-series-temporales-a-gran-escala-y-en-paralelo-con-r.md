---
author: Carlos J. Gil Bellosta
date: 2012-09-25 07:50:49+00:00
draft: false
title: Predicciones de series temporales a gran escala y en paralelo con R

url: /2012/09/25/predicciones-de-series-temporales-a-gran-escala-y-en-paralelo-con-r/
categories:
- programación
- r
tags:
- programación
- google
- mapreduce
- r
- series temporales
---

En el artículo [Large-Scale Parallel Statistical Forecasting Computations in R](http://research.google.com/pubs/pub37483.html) encontrarán los interesados información sobre cómo está usando Google R para realizar predicciones de series temporales a gran escala usando cálculos en paralelo.

El artículo tiene dos partes diferenciadas. Por un lado está la que describe los métodos que usan para realizar predicciones sobre series temporales. Parecen sentir cierto desdén por la teoría clásica, comprensible dado el gran número de series temporales que tratan de predecir y el mimo —entiéndase como uso de materia gris— que exige aquella. Prefieren un proceso en el que el coste sea esencialmente computacional: construir predicciones usando gran número de modelos distintos y promediándolos después para obtener resultados que, aunque lejos del _óptimo_ para cada caso particular, resultan adecuados para su fin.

Lo más interesante, no obstante, es el mecanismo que utilizan para paralelizar cálculos en la nube. (Habría que indicar aquí que el proceso de predicción apuntado arriba está diseñado para ser [vergonzosamente paralelizable](http://en.wikipedia.org/wiki/Embarrassingly_parallel)). Está basado en, como no podía ser de otra manera, el [paradigma MapReduce](http://en.wikipedia.org/wiki/MapReduce). Está adaptado a dos requisitos específicos:

* Las características de R, su sistema de paquetes, sus dependencias, etc.
* Las características de los centros de computación de Google donde, por ejemplo, los ordenadores no están conectados a un mismo sistema de ficheros, los típicos [servidores NFS](http://es.wikipedia.org/wiki/Network_File_System).

El esquema de funcionamiento está descrito en el siguiente gráfico:


[![](/wp-uploads/2012/09/google_parallel_environment.png#center)
](/wp-uploads/2012/09/google_parallel_environment.png#center)


Desde una sesión no necesariamente interactiva, se lanza un proceso. La infraestructura creada por Google (la función `google.apply` dentro del paquete `googleparallelism`) entonces:

1. Parte el proceso en trozos.
2. Sube R (sí, aparentemente, sube R entero), los paquetes necesarios y el entorno de ejecución a [Dremel](http://research.google.com/pubs/pub36632.html), un sistema de almacenamiento masivo de Google del que hablaré algún día, junto con su versión libre, [Drill](http://wiki.apache.org/incubator/DrillProposal).
3. Los ordenadores de la red que reciben tareas, leen el entorno guardado en el paso anterior, lanzan R y sus dependencias y realizan sus cálculos.
4. Finalmente, los resultados parciales son agregados por la máquina que lanza el proceso.


Para los detalles, ya sabéis: el [artículo original](http://research.google.com/pubs/pub37483.html) y un rato de asueto.

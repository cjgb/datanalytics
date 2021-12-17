---
author: Carlos J. Gil Bellosta
date: 2014-07-09 07:13:41+00:00
draft: false
title: Estrategias escalables (con R)

url: /2014/07/09/estrategias-escalables-con-r/
categories:
- computación
- r
tags:
- bigmemory
- paralelización
- parallel
- r
- spark
---

Hay quienes preguntan cómo cargar con R un csv de 8GB en un portátil de 4GB de RAM. La verdad, he leído respuestas la mar de extravagantes a este tipo de cuestiones: p.e., recomendar SQLite.

Yo recomendaría [_Scalable Strategies for Computing with Massive Data_](http://www.jstatsoft.org/v55/i14). Entre otras cosas, porque para eso lo escribieron sus autores: para que se lea. Y porque está cargado de razón y buenos consejos.

Una cosa con la que tropezará enseguida quien lo hojee es:



<blockquote>[...] R is not well-suited for working with data structures larger than about 10-20% of a computer's RAM. Data exceeding 50% of available RAM are essentially unusable because the overhead of all but the simplest of calculations quickly consumes all available RAM. [...] we consider a data set large if it exceeds 20% of the RAM on a given machine and massive if it exceeds 50%.</blockquote>



En realidad, los límites no son tan serios: ahora mismo, R está ocupando 17 de los 24GB de RAM de mi servidor y va como un tiro. Pero es un aviso para navegantes: a partir de cierto umbral, hay que olvidarse de `read.table` y demás. Alternativas, haylas. La más simple es conseguir (¿alquilándola?) una máquina más grande. Seguramente es la opción más barata si se tienen todos los factores en cuenta.

El artículo discute una estrategia basada en la combinación de [`bigmemory`](http://cran.r-project.org/web/packages/bigmemory/index.html) (y los paquetes relacionados) y [`foreach`](http://cran.r-project.org/web/packages/foreach/index.html). Yo confieso no haber utilizado ninguno. Para paralelizar, con [`parallel`](https://stat.ethz.ch/R-manual/R-devel/library/parallel/doc/parallel.pdf) me ha bastado (aunque igual cambio de parecer cuando me decidad, de una vez por todas, a montar un _clúster_). Y con `[data.table](http://cran.r-project.org/web/packages/data.table/index.html)` y un poco de cuidado, resuelvo casi todos mis problemas de espacio. Pero a algún maestrillo le puede gustar adoptar ese librillo.

Dicho lo cual, reitero que uno de mis proyectos más a corto para dejar solucionados de una vez por todas este tipo de problemas es comenzar a trabajar con [Spark](http://spark.apache.org/).

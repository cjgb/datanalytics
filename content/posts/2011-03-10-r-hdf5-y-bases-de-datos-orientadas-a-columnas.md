---
author: Carlos J. Gil Bellosta
date: 2011-03-10 09:25:23+00:00
draft: false
title: R, HDF5 y bases de datos orientadas a columnas

url: /2011/03/10/r-hdf5-y-bases-de-datos-orientadas-a-columnas/
categories:
- r
tags:
- r
- paquetes
- hdf5
---

Tras escribir el otro día sobre [RevoscaleR](http://www.datanalytics.com/2011/03/04/1680/), he tropezado con [un paquete de R, HDF5](http://cran.r-project.org/web/packages/hdf5/index.html) que le permite hacer cosas parecidas usando tecnologías libres. Puede encontrarse más información sobre HDF5 [en la Wikipedia](http://en.wikipedia.org/wiki/Hierarchical_Data_Format) y en la [página del proyecto](http://www.hdfgroup.org/HDF5/whatishdf5.html).

[![](/wp-uploads/2011/03/hdf_logo.jpg)
](/wp-uploads/2011/03/hdf_logo.jpg)

De todos modos, y como dejé escrito como respuesta a un comentario en la entrada que indico más arriba, una solución _definitiva_ al problema del análisis de conjuntos de datos grandes con R podría venir de la mano de una integración adecuada con un gestor de bases de datos [orientado a columnas](http://en.wikipedia.org/wiki/Column-oriented_DBMS). En efecto, el cuello de botella más notable que existe al usar R junto con, p.e., Postgres (y como Postgres el 99% de los restantes DBMS) es que sus tablas _son_ conjuntos de filas mientras que para R son listas de colunmas. Por tanto, quiérase o no, en algún sitio hay que realizar una trasposición computacionalmente pesada.

Sin embargo, si se pudieran _mapear_ las columnas de un DBMS (orientado a columnas, claro) en vectores de R —y varios en un `dataframe` de R, de manera que desde R la tabla pareciese un objeto _normal_ pero que en realidad estuviese físicamente en disco— quedaría solucionada una parte importante del problema.

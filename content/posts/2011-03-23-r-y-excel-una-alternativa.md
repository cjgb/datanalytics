---
author: Carlos J. Gil Bellosta
date: 2011-03-23 09:56:13+00:00
draft: false
title: 'R y Excel: una alternativa'

url: /2011/03/23/r-y-excel-una-alternativa/
categories:
- r
tags:
- excel
- r
- paquetes
- xlconnect
---

Los amantes de Excel están de enhorabuena. Ahora tienen una alternativa a [RExcel](http://en.wikipedia.org/wiki/RExcel), una extensión de Excel que le permite interactuar con R: [XLConnect](http://miraisolutions.wordpress.com/2011/02/28/xlconnect/), un [paquete multiplataforma de R](http://cran.r-project.org/web/packages/XLConnect/index.html) que permite:

* Trabajar con ficheros de Excel 97 (*.xls) y OOXML (*.xlsx)
* Crear y eliminar hojas dentro de documentos
* Leer y escribir rangos de valores (_ranges_)
* Leer y escribir hojas de cálculo
* Añadir gráficos
* Asociar estilos a celdas
* Definir el tamaño de las filas y columnas
* Etc.

Está basado en [Apache POI](http://poi.apache.org/), una colección de librerías de Java que permiten manipular ficheros en los formatos más o menos propietarios de Microsoft. Así no es siquiera necesario tener Excel instalado. ¡Ni siquiera trabajar en Windows!

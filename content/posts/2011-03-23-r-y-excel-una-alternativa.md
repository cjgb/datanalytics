---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2011-03-23 09:56:13+00:00
lastmod: '2025-04-06T18:50:28.241020'
related:
- 2011-12-01-creacion-de-un-r-portable.md
- 2011-07-28-el-paquete-pxr-en-cran.md
- 2013-04-01-rpython-ya-esta-en-cran.md
- 2017-11-24-dbf-c2b7-xlsx-c2b7-pdf.md
- 2014-03-21-cuatro-enlaces-sobre-r-excel-c-csv-y-paralelizacion.md
tags:
- excel
- r
- paquetes
- xlconnect
title: 'R y Excel: una alternativa'
url: /2011/03/23/r-y-excel-una-alternativa/
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
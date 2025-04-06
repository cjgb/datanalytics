---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2011-04-07 07:55:34+00:00
draft: false
lastmod: '2025-04-06T19:04:11.515006'
related:
- 2010-01-26-r-y-conjuntos-de-datos-grandes.md
- 2011-03-04-1680.md
- 2011-05-23-la-version-0-7-del-paquete-colbycol-en-cran.md
- 2011-03-10-r-hdf5-y-bases-de-datos-orientadas-a-columnas.md
- 2014-07-09-estrategias-escalables-con-r.md
tags:
- r
- paquetes
title: Nueva versión de paquete colbycol
url: /2011/04/07/nueva-version-de-paquete-colbycol/
---

Hace unos días subí a CRAN la última versión de mi [paquete `colbycol`](http://cran.r-project.org/web/packages/colbycol/index.html). Incluí algunas mejoras sugeridas por uno de sus usuarios así como otras que estaban esperando a que liberase mi agenda. Además, añadí un [pequeño tutorial](http://colbycol.r-forge.r-project.org/) en la página del paquete.

El paquete `colbycol` está pensado para resolver —aunque sólo sea parcialmente— uno de los problemas más acuciantes de quienes usamos R para el análisis de datos muy grandes: leer ficheros de datos de gran tamaño.

Es típico que R necesite tres veces más RAM que el tamaño del fichero de texto que se quiere leer durante la importación. Esto se debe a que la información en el disco está ordenada por filas mientras que R almacena los datos en la memoria en columnas. En algún punto tiene que realizarse la transposición. Y transponer datos es una operación que exige mucho espacio en memoria. (Puede que alguno de mis lectores caiga en la cuenta de que bastaría con el doble de espacio, no el triple: el que ocupe el fichero de origen y el que ocupe el objeto traspuesto; pero ésa es otra historia).

El paquete `colbycol` permite realizar la trasposición en disco: usa Java para leer el fichero de entrada línea a línea y guarda cada registro en un fichero de texto distinto. Luego R lee los ficheros de texto (que corresponden a las columnas) individualmente. El objeto que se crea finalmente guarda metadatos sobre los ficheros temporales que se crean. Y es posible construir `data.frames` habituales a partir de ellos.

En la página del paquete ofrezco un paseo completo por las distintas que va desde la creación de un fichero grande a su lectura en R.

Invito a mis lectores a echarle un vistazo y espero que a alguno de ellos le resuelva alguna vez alguno de esos problemas tan odiosos que plantea la lectura de ficheros de texto descomunales.
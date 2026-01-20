---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2011-01-20 09:56:47+00:00
draft: false
lastmod: '2025-04-06T18:45:49.918116'
related:
- 2015-10-02-purrr-otro-dialecto-para-la-programacion-funcional-en-r.md
- 2015-09-04-guias-de-estilo-para-programar-en-r.md
- 2014-03-12-veinte-paquetes-de-r-para-cientificos-de-datos.md
- 2012-09-18-rdatamining-un-paquete-para-mineria-de-datos-con-r.md
- 2022-09-20-tools-etl-memory.md
tags:
- paquetes
- r
- nlp
- stringr
title: 'Nuevo paquete para procesar texto en R: stringr'
url: /2011/01/20/nuevo-paquete-para-procesar-texto-en-r-stringr/
---

Hadley Wickham, el autor de `plyr`, `reshape` y `ggplot2`, ha vuelto a la carga en su exitoso empeño por hacernos cambiar de forma de programar en R.

Con su nuevo paquete, [stringr](http://cran.r-project.org/web/packages/stringr/index.html), aspira a facilitarnos aún más la vida. En un [reciente artículo](http://journal.r-project.org/archive/2010-2/RJournal_2010-2_Wickham.pdf), enumera sus ventajas:

* Procesa factores y caracteres de la misma manera (de verdad, muy práctico)
* Da a las funciones nombres y argumentos consistentes
* Simplifica las operaciones de procesamiento de cadenas eliminando opciones que apenas se usan
* Produce salidas que pueden ser utilizadas fácilmente como entradas a otras funciones
* Incorpora funciones para procesar texto presentes en otros lenguajes pero no en R

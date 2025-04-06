---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2014-04-11 21:00:59+00:00
draft: false
lastmod: '2025-04-06T18:49:30.359839'
related:
- 2013-04-01-rpython-ya-esta-en-cran.md
- 2013-06-24-pqr-un-r-mas-rapido.md
- 2011-12-01-creacion-de-un-r-portable.md
- 2013-11-20-rpython-ya-en-windows.md
- 2014-06-27-disponible-una-nueva-version-de-microdatoses.md
tags:
- r
- paquetes
title: No hay motivo para no actualizar tu R a la última versión
url: /2014/04/11/no-hay-motivo-para-no-actualizar-tu-r-a-la-ultima-version/
---

Ayer se publicó [la versión 3.1.0 de R](https://stat.ethz.ch/pipermail/r-announce/2014/000572.html). No es gran noticia: aparecen nuevas versiones cada no muchos meses.

No hay motivo para no actualizar. Pero sí para hacerlo: las nuevas versiones corrigen errores en las anteriores y, además, encontrarás poco soporte en los foros para ese R 2.1.5 viejuno que aún mantienes por pereza.

Para quienes usen R en plataformas donde el _software_ no se actualiza _automágicamente_, existe el paquete `installr` que permite actualizar la versión de R con menos esfuerzo que antaño haciendo

{{< highlight R >}}
install.packages("installr")
library(installr)
updateR()
{{< / highlight >}}
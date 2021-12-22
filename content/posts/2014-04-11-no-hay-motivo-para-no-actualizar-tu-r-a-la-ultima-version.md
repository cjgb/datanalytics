---
author: Carlos J. Gil Bellosta
date: 2014-04-11 21:00:59+00:00
draft: false
title: No hay motivo para no actualizar tu R a la última versión

url: /2014/04/11/no-hay-motivo-para-no-actualizar-tu-r-a-la-ultima-version/
categories:
- r
tags:
- r
- paquetes
---

Ayer se publicó [la versión 3.1.0 de R](https://stat.ethz.ch/pipermail/r-announce/2014/000572.html). No es gran noticia: aparecen nuevas versiones cada no muchos meses.

No hay motivo para no actualizar. Pero sí para hacerlo: las nuevas versiones corrigen errores en las anteriores y, además, encontrarás poco soporte en los foros para ese R 2.1.5 viejuno que aún mantienes por pereza.

Para quienes usen R en plataformas donde el _software_ no se actualiza _automágicamente_, existe el paquete `installr` que permite actualizar la versión de R con menos esfuerzo que antaño haciendo

{{< highlight R "linenos=true" >}}
install.packages("installr")
library(installr)
updateR()
{{< / highlight >}}

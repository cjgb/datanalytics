---
author: Carlos J. Gil Bellosta
date: 2016-04-15 09:13:20+00:00
draft: false
title: Ahora caRtociudad encuentra información administrativa relativa a un punto

url: /2016/04/15/ahora-cartociudad-encuentra-informacion-administrativa-relativa-a-un-punto/
categories:
- r
tags:
- cartociudad
- paquetes
- r
- geolocalización
---

Y lo hace así:

{{< highlight R "linenos=true" >}}
library(caRtociudad)
get_cartociudad_location_info(40.473219,-3.7227241, year = 2015)
# $seccion
# [1] "2807908148"
#
# $distrito
# [1] "2807908"
#
# $provincia
# [1] "Madrid"
#
# $municipio
# [1] "Madrid"
{{< / highlight >}}

Esto da respuesta a [una pregunta de Rubén](https://www.datanalytics.com/2016/03/31/cartociudad/).

La función es en su mayor parte (salvo algunos retoques más estéticos que otra cosa míos) de Luz Frías, que hizo omiso caso de la inexistente docuentación del INE sobre su servicio de mapas y capturó directamente la petición que el [portal de Cartociudad](http://www.cartociudad.es/visor/) hace al servicio.

(DFRETFAPI, _do fucking reverse engineer the fucking API_ parace ser lo que se lleva en el INE en lugar de RTFM).

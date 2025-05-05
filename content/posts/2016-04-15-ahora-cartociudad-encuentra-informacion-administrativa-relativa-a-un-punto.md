---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2016-04-15 09:13:20+00:00
draft: false
lastmod: '2025-04-06T18:52:27.472888'
related:
- 2016-05-11-manana-2016-05-12-cartociudad-en-la-reunion-de-usuarios-de-r-de-madrid.md
- 2019-07-15-cartogramas-con-recmap.md
- 2017-03-02-todas-las-terrazas-de-madrid.md
- 2020-02-10-sobre-la-normalizacion-de-las-direcciones-postales.md
- 2012-03-14-c2a1mano-que-mapa.md
tags:
- cartociudad
- paquetes
- r
- geolocalización
title: Ahora caRtociudad encuentra información administrativa relativa a un punto
url: /2016/04/15/ahora-cartociudad-encuentra-informacion-administrativa-relativa-a-un-punto/
---

Y lo hace así:

{{< highlight R >}}
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

Esto da respuesta a [una pregunta de Rubén](https://datanalytics.com/2016/03/31/cartociudad/).

La función es en su mayor parte (salvo algunos retoques más estéticos que otra cosa míos) de Luz Frías, que hizo omiso caso de la inexistente docuentación del INE sobre su servicio de mapas y capturó directamente la petición que el [portal de Cartociudad](http://www.cartociudad.es/visor/) hace al servicio.

(DFRETFAPI, _do fucking reverse engineer the fucking API_ parace ser lo que se lleva en el INE en lugar de RTFM).
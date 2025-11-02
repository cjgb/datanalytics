---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2016-03-02 09:13:04+00:00
draft: false
lastmod: '2025-04-06T19:11:59.808055'
related:
- 2012-04-16-rutas-por-zaragoza-con-r.md
- 2016-04-29-como-ir-de-regumiel-de-la-sierra-a-montejo-de-la-vega-de-la-serrezuela.md
- 2017-09-29-bus-al-norte-bus-al-sur.md
- 2016-03-01-ficheros-kml-con-r-y-ggmap.md
- 2012-03-14-c2a1mano-que-mapa.md
tags:
- bug
- ggmap
- r
title: 'Pequeño bug en ggmap: no pinta el último tramo de una ruta'
url: /2016/03/02/pequeno-bug-en-ggmap-no-pinta-el-ultimo-tramo-de-una-ruta/
---

Supongo que no debería escribirlo aquí sino comunicárselo a quien mantiene [`ggmap`](https://cran.r-project.org/web/packages/ggmap/index.html). Pero ya tuve una experiencia mejorable con él y dos no serán. Así que lo cuento por acá.

La mayor parte del mérito en el descubrimiento, en cualquier caso, es de una alumna de la clase de R que he dado hoy (en el momento en el que escribo, no en el que lees) en el Banco de Santander. No tengo su nombre ni tengo claro que quisiese que lo mencionase.

Y el _bug_ se manifiesta así:


{{< highlight R >}}
library(ggmap)

mapa <- get_map("calle Embajadores 10, Madrid", zoom = 18)

ruta1 <- route("calle embajadores 4, Madrid,",
    "calle oso 15, Madrid",
    mode = "walking")

ruta2 <- route("calle oso 15, Madrid",
    "calle embajadores 4, madrid",
    mode = "walking")


ggmap(mapa) + geom_path(data = ruta1,
    aes(x = startLon,
    y = startLat,
    xend = endLon,
    yend = endLat))

ggmap(mapa) + geom_path(data = ruta2,
    aes(x = startLon,
    y = startLat,
    xend = endLon,
    yend = endLat))
{{< / highlight >}}

que es un código que pinta

![ruta1](/img/2016/03/ruta1.png#center)

y

![ruta2](/img/2016/03/ruta2.png#center)

respectivamente, cuando lo que debería representar en ambos casos es una ruta en forma de ele compuesta de dos segmentos, que son los que contienen tanto `ruta1` como `ruta2`.
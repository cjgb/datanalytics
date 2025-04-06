---
author: Carlos J. Gil Bellosta
categories:
- gráficos
- r
date: 2016-03-01 09:13:25+00:00
draft: false
lastmod: '2025-04-06T18:53:22.499431'
related:
- 2013-03-05-ggmap-mapas-con-r.md
- 2016-04-08-clusters-de-trayectorias-con-la-distancia-de-frechet.md
- 2016-03-02-pequeno-bug-en-ggmap-no-pinta-el-ultimo-tramo-de-una-ruta.md
- 2012-04-16-rutas-por-zaragoza-con-r.md
- 2015-05-27-grafos-por-vecindad-en-mapas.md
tags:
- ggmap
- gráficos
- kml
- mapas
- maptools
- r
title: Ficheros KML con R y ggmap
url: /2016/03/01/ficheros-kml-con-r-y-ggmap/
---

Fácil:

{{< highlight R >}}
library(maptools)
library(ggmap)

# un fichero bajado el Ayto. de Madrid
# (catálogo de datos abiertos)
rutas <- getKMLcoordinates("dat/130111_vias_ciclistas.kml")

# procesando el fichero kml
rutas <- lapply(1:length(rutas),
    function(x) data.frame(rutas[[x]], id = x))
rutas <- do.call(rbind, rutas)

# mapa de Madrid
mapa <- get_map("Madrid",
    source = "stamen", maptype = "toner",
    zoom = 12)

# pintando los tramos sobre el mapa
ggmap(mapa) + geom_path(aes(x = X1, y = X2,
    group = id), data = rutas,
    colour = "red")
{{< / highlight >}}

produce

![rutas_ciclistas_madrid](/wp-uploads/2016/02/rutas_ciclistas_madrid.png#center)

Nota: KML es [esto](https://en.wikipedia.org/wiki/Keyhole_Markup_Language).
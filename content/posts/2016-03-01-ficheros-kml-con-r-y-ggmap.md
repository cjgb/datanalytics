---
author: Carlos J. Gil Bellosta
date: 2016-03-01 09:13:25+00:00
draft: false
title: Ficheros KML con R y ggmap

url: /2016/03/01/ficheros-kml-con-r-y-ggmap/
categories:
- gráficos
- r
tags:
- ggmap
- gráficos
- kml
- mapas
- maptools
- r
---

Fácil:

{{< highlight R "linenos=true" >}}
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

![rutas_ciclistas_madrid](/wp-uploads/2016/02/rutas_ciclistas_madrid.png)

Nota: KML es [esto](https://en.wikipedia.org/wiki/Keyhole_Markup_Language).
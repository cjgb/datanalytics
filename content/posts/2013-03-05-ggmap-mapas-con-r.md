---
author: Carlos J. Gil Bellosta
categories:
- gráficos
- r
date: 2013-03-05 11:09:53+00:00
noindex: true
lastmod: '2025-12-15'
related:
- 2016-03-01-ficheros-kml-con-r-y-ggmap.md
- 2012-04-16-rutas-por-zaragoza-con-r.md
- 2012-03-14-c2a1mano-que-mapa.md
- 2011-04-19-graficos-v-mapas.md
- 2015-05-27-grafos-por-vecindad-en-mapas.md
tags:
- ggmap
- gráficos
- mapas
- r
title: 'ggmap: mapas con R'
url: /2013/03/05/ggmap-mapas-con-r/
---

Me mandó [Alberto González Paje](http://www.ekonlab.com/) código para representar información en mapas usando R que hoy he dejado en su mínima expresión para que los lectores de esta bitácora puedan extender para crear sus propios mapas.

Es el siguiente:

{{< highlight R >}}
library(ggmap)

# ubico mi alma mater
unizar <- geocode('Universidad de Zaragoza, Zaragoza, España')

# obtengo un mapa
map.unizar <- get_map(
    location = as.numeric(unizar),
    color = "color",
    maptype = "roadmap",
    scale = 2,
    zoom = 16)

# lo represento
ggmap(map.unizar)

# le añado puntos
ggmap(map.unizar) + geom_point(
    aes(x = lon, y = lat),
    data = unizar, colour = 'red',
    size = 4)
{{< / highlight >}}

Creo que es fácil de extender.

Algunas notas:

* Para geolocalizar se hacen llamadas a un API de Google que tiene un límite de 2500, creo, por día.
* Es posible seleccionar la fuente de la que se bajan los mapas. Por defecto, son los de Google, pero se pueden utilizar los de OpenStreetMap y otros.
* En [ekonlab.com, la página de Alberto González Paje](http://www.ekonlab.com/), encontraréis muchos más ejemplos más elaborados del uso de estas técnicas.
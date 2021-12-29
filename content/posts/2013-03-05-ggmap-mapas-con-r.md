---
author: Carlos J. Gil Bellosta
date: 2013-03-05 11:09:53+00:00
draft: false
title: 'ggmap: mapas con R'

url: /2013/03/05/ggmap-mapas-con-r/
categories:
- gráficos
- r
tags:
- ggmap
- gráficos
- mapas
- r
---

Me mandó [Alberto González Paje](http://www.ekonlab.com/) código para representar información en mapas usando R que hoy he dejado en su mínima expresión para que los lectores de esta bitácora puedan extender para crear sus propios mapas.

Es el siguiente:

{{< highlight R "linenos=true" >}}
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


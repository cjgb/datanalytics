---
author: Carlos J. Gil Bellosta
date: 2013-04-08 07:27:21+00:00
draft: false
title: Mapa de los terremotos en la península ibérica

url: /2013/04/08/mapa-de-los-terremotos-en-la-peninsula-iberica/
categories:
- gráficos
- r
tags:
- gráficos
- r
- terremotos
---

Me sorprendió hace un tiempo averiguar que en la península ibérica hubiese [tantos terremotos](http://www.datanalytics.com/2010/06/08/20-10-2010-dia-mundial-de-la-estadistica-y-terremotos/) (aunque mis amigos chilenos los llamarían de otra manera).

En esta entrada voy a mostrar el siguiente mapa de actividad sísmica durante los últimos años,

[![](/wp-uploads/2013/04/terremotos_espana.jpg.jpeg)
](/wp-uploads/2013/04/terremotos_espana.jpg.jpeg)

que he construido con el siguiente código en R:

{{< highlight R "linenos=true" >}}
library(ggmap)

url <- "http://comcat.cr.usgs.gov/earthquakes/feed/search.php?maxEventLatitude=45&minEventLatitude=35&minEventLongitude=-10&maxEventLongitude=5&minEventTime=953683200000&maxEventTime=1364688000000&minEventMagnitude=-1.0&maxEventMagnitude=10&minEventDepth=0.0&maxEventDepth=800.0&format=csv"
terremotos <- read.csv(url)

# obtengo un mapa
pen.iber <- get_map( location = c(-9.5, 36, 3.5, 44),
                      color = "color",
                      maptype = "roadmap")

# le añado puntos
ggmap(pen.iber) +
  geom_point(aes(x = Longitude, y = Latitude,
                  size = Magnitude),
                  data = terremotos, colour = 'red',
                  alpha = 0.2)
{{< / highlight >}}
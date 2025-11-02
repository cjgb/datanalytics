---
author: Carlos J. Gil Bellosta
categories:
- gráficos
- r
date: 2013-04-08 07:27:21+00:00
draft: false
lastmod: '2025-04-06T18:48:40.144481'
related:
- 2013-12-10-te-queda-lejos-el-aeropuerto.md
- 2019-07-15-cartogramas-con-recmap.md
- 2017-04-10-pues-si-puede-fabricarse-uno-para-espana.md
- 2017-05-12-me-too-me-too.md
- 2024-03-12-dorling-cartograms.md
tags:
- gráficos
- r
- terremotos
title: Mapa de los terremotos en la península ibérica
url: /2013/04/08/mapa-de-los-terremotos-en-la-peninsula-iberica/
---

Me sorprendió hace un tiempo averiguar que en la península ibérica hubiese [tantos terremotos](https://datanalytics.com/2010/06/08/20-10-2010-dia-mundial-de-la-estadistica-y-terremotos/) (aunque mis amigos chilenos los llamarían de otra manera).

En esta entrada voy a mostrar el siguiente mapa de actividad sísmica durante los últimos años,

[![](/img/2013/04/terremotos_espana.jpg.jpeg)
](/img/2013/04/terremotos_espana.jpg.jpeg)

que he construido con el siguiente código en R:

{{< highlight R >}}
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
---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2012-03-14 08:35:49+00:00
draft: false
lastmod: '2025-04-06T19:05:19.164590'
related:
- 2012-04-16-rutas-por-zaragoza-con-r.md
- 2012-04-25-espana-c2bfradial-i.md
- 2017-09-29-bus-al-norte-bus-al-sur.md
- 2014-10-01-donde-he-estado-segun-google.md
- 2016-06-20-6602-767-km-alrededor-de-espana-para-visitar-todas-sus-capitales-de-provincia.md
tags:
- datos abiertos
- mapas
- r
- tráfico
title: ¡Maño qué mapa!
url: /2012/03/14/mano-que-mapa/
---

Esta mañana casi me da esa tontería de sentirme orgulloso de ser de donde soy, Zaragoza. Al fin y al cabo, podría haber sido de cualquier otro lugar. Pero es que Zaragoza tiene uno de los [portales de datos públicos municipales](http://www.zaragoza.es/ciudad/risp/presentacion.htm) más avanzados. En eso es una ciudad pionera.

(Se lo hemos de agradecer a nuestro alcalde, Belloch, que, dicen las malas lenguas, además de socialista y barbudo, es linuxero).

Entre los datos disponibles, los hay de [tráfico en tiempo real](http://www.zaragoza.es/ciudad/risp/detalle_Risp?id=291). En particular, existe una serie de [tramos de calle](http://www.zaragoza.es/trafico/estado/tramoswgs84.json) y un fichero que se actualiza cada pocos segundos que indica el [estado del tráfico](http://www.zaragoza.es/trafico/estado/estado.json) en ellos.

Y he pensado que tal vez podría hacer una virguería con R.

Así que he escrito lo siguiente:

{{< highlight R >}}
library(rjson)

# tmp <- readLines("http://www.zaragoza.es/trafico/estado/tramos23030.json")
tmp <- readLines("http://www.zaragoza.es/trafico/estado/tramoswgs84.json")
tmp <- fromJSON(tmp)[[1]]

status <- fromJSON(readLines("http://www.zaragoza.es/trafico/estado/estado.json"))

status.time <- status$timestamp
status <- strsplit(status$estados, "")[[1]]

# length(kkk)

tmp <- lapply(tmp, function(x) {
  id     <- x$id
  name   <- x$name
  status <- status[id]
  lat    <- sapply(x$points, function(y) y$lat)
  lon    <- sapply(x$points, function(y) y$lon)

  data.frame(id = id, name = name, status = status, lat = lat, lon = lon)

})

tmp <- do.call(rbind, tmp)

# tmp <- merge(tmp, status)

plot(range(tmp$lon), - range(-tmp$lat),
  xaxt = "n", yaxt = "n", type = "n",
  main = paste(
      "Estado del tráfico en Zaragoza",
      strptime(gsub("-|Z", " ", status.time),
        format = "%Y%m%d %H%M%S"), sep = "\n"),
  xlab = "", ylab = "")

foo <- function(x, y, status){
  colores <- c("black", "red", "yellow",  "green", "lightgray")
  color   <- colores[ match(status, c("b", "r", "y", "g"), nomatch = 5) ]
  lines(x,y, col = color, lwd = ifelse(status == "-", 1, 2))
}

by(tmp, tmp$id, function(x) foo(x$lon, x$lat, status = x$status))
{{< / highlight >}}

Que da como resultado (a la hora en la que lo he ejecutado, cuando los zaragozanos están ya casi todos en su casa)

[![](/img/2012/03/trafico_zgz.png#center)
](/img/2012/03/trafico_zgz.png#center)

Pero me ha sabido a poco y he querido hacerlo todavía más a lo maño. Así que he añadido


{{< highlight R >}}
library(OpenStreetMap)

map <- openmap(c(max(tmp$lat), min(tmp$lon)), c(min(tmp$lat), max(tmp$lon)), type = "osm")
plot(map,raster=TRUE)

tmp.mercator <- data.frame(projectMercator(tmp$lat, tmp$lon))
tmp.mercator$status <- tmp$status

foo <- function(x, y, status){
  colores <- c("black", "red", "yellow",  "green", "lightgray")
  color   <- colores[ match(status, c("b", "r", "y", "g"), nomatch = 5) ]
  lines(x,y, col = color, lwd = ifelse(status == "-", 1, 2))
}

by(tmp.mercator, tmp$id, function(x) foo(x$x, x$y, status = x$status))
{{< / highlight >}}

Y he obtenido
[![](/img/2012/03/trafico_zgz_osm.png#center)
](/img/2012/03/trafico_zgz_osm.png#center)

Hay algunas cosas que me gustaría poder añadir, minucias, pero que estoy demasiado ocupado para investigar y que me gustaría dejar de tarea a mis lectores:

* ¿Cómo poner un título al segundo gráfico?
* ¿Cómo difuminar la imagen de fondo para que resalten más los tramos de tráfico sobre el excesivo detalle del mapa subyacente?
---
author: Carlos J. Gil Bellosta
categories:
- gráficos
- r
date: 2013-12-10 07:39:16+00:00
draft: false
lastmod: '2025-04-06T18:47:40.944009'
related:
- 2013-12-26-muestreos-aleatorios-sobre-la-peninsula-iberica-por-ejemplo.md
- 2016-06-20-6602-767-km-alrededor-de-espana-para-visitar-todas-sus-capitales-de-provincia.md
- 2024-03-12-dorling-cartograms.md
- 2012-04-25-espana-c2bfradial-i.md
- 2013-04-08-mapa-de-los-terremotos-en-la-peninsula-iberica.md
tags:
- aeropuertos
- geosphere
- mapas
- r
- sp
title: ¿Te queda lejos el aeropuerto?
url: /2013/12/10/te-queda-lejos-el-aeropuerto/
---

He construido el mapa

[![](/wp-uploads/2013/12/distancias_aropuertos.png#center)
](/wp-uploads/2013/12/distancias_aropuertos.png#center)

porque, a pesar de sus innegables deméritos gráficos, como la profusión de topos rojigualdas, pudiera resultar de interés. No tanto por lo que representa, la distancia de los puntos de la península Ibérica a una lista obsoleta de aeropuertos (en la que no consta, p.e., el de Logroño), sino por el procedimiento que tal vez alguien pueda en su día reaprovechar para un mejor fin.

Para ello, primero, he descargado las coordenadas de los aeropuertos de [aquí](http://www.partow.net/miscellaneous/airportdatabase/#Download) (nota: un tipo [procesó y tradujo al español](http://dev4bloggers.blogspot.com.es/2010/06/base-datos-aeropuertos-mundo.html) el fichero anterior pero olvidó cambiar el signo de las latitudes al oeste del meridiano 0; ¡cuidado con lo que te bajas de internet!) y las he cargado en R:

{{< highlight R >}}
aeropuertos <- read.table("GlobalAirportDatabase.txt", sep = ":", header = F, quote = "")
aeropuertos <- subset(aeropuertos, V5 == "SPAIN" & V2 != "N/A")

aeropuertos$V7 <- aeropuertos$V7 + aeropuertos$V8 / 60
aeropuertos$V6 <- aeropuertos$V6 + aeropuertos$V7 / 60

aeropuertos$V11 <- aeropuertos$V11 + aeropuertos$V12 / 60
aeropuertos$V10 <- aeropuertos$V10 + aeropuertos$V11 / 60
aeropuertos$V10 <- aeropuertos$V10 * ifelse(aeropuertos$V13 == "E", 1, -1)

aeropuertos <- subset(aeropuertos, select = c("V3", "V6", "V10"))

colnames(aeropuertos) <- c("nombre", "lat", "lon")
{{< / highlight >}}

Luego he descargado y procesado el mapa que me proporciona el contorno de la España peninsular:

{{< highlight R >}}
library(maptools)
tmp <- readShapePoly("ESP_adm0.shp")
peninsula <- tmp@polygons[[1]]@Polygons[[187]]
aeropuestos.peninsula <- point.in.polygon(aeropuertos$lon,
  aeropuertos$lat,
  peninsula@coords[,1],
  peninsula@coords[,2])
aeropuertos <- aeropuertos[aeropuestos.peninsula == 1, ]
{{< / highlight >}}

El _shapefile_ están descargado de [GADM](http://www.gadm.org/). La función `point.in.polygon` permite descartar aquellos aeropuertos extrapeninsulares: indentifica si un punto está dentro o fuera de un polígono.

Luego he creado una malla de puntos a partir de los extremos de la península y he utilizado el paquete `geosphere` para calcular la distancia entre puntos expresados en términos de su latitud/longitud.

{{< highlight R >}}
library(<a href="http://inside-r.org/packages/cran/geosphere">geosphere)

extremos <- apply(peninsula@coords, 2, range)
grid.lat <- seq(from = extremos[1,2], to = extremos[2,2], length.out = 1000)
grid.lon <- seq(from = extremos[1,1], to = extremos[2,1], length.out = 1000)

distancia <- function(lon, lat){
  lonlat <- cbind(lon, lat)
  aeropuertos.lon.lat <- cbind(aeropuertos$lon, aeropuertos$lat)
  distancias <- distm(lonlat, aeropuertos.lon.lat)
  apply(distancias, 1, min)
}

res <- outer(grid.lon, grid.lat, distancia)
{{< / highlight >}}

Finalmente,

{{< highlight R >}}
library(raster)

resk <- SpatialPoints(expand.grid(grid.lon, grid.lat))
resk <- SpatialPixelsDataFrame(resk, data.frame(dist = as.vector(res)))

sp.peninsula <- Polygon(peninsula@coords)
sp.peninsula <- Polygons(list(sp.peninsula), ID = "peninsula")
sp.peninsula <- SpatialPolygons(list(sp.peninsula))

seleccionados <- !is.na(over(resk, sp.peninsula))

final <- resk[seleccionados,]

image(final)
{{< / highlight >}}

Es decir, he usado primero la función `over` (de `sp`) para identificar (como antes, más arriba, usando `point.in.polygon`) aquellos puntos de la malla que caen dentro del perímetro deseado. Para ello he tenido que hacer dos transformaciones previas:

* Convertir el polígono del perímetro de la España peninsular en un objeto de la clase `SpatialPolygons` (es decir, un polígono con información de tipo cartográfico)
* Convertir mi malla en un objeto de la clase `SpatialPixelsDataFrame` (es decir, de puntos también con base cartográfica)

Con el último filtro me he quedado con los puntos deseados y con la llamada a `image` (sin más argumentos) he liquidado la entrada del día.
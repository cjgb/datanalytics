---
author: Carlos J. Gil Bellosta
date: 2016-06-20 08:13:30+00:00
draft: false
title: 6602.767 km alrededor de España para visitar todas sus capitales de provincia

url: /2016/06/20/6602-767-km-alrededor-de-espana-para-visitar-todas-sus-capitales-de-provincia/
categories:
- r
tags:
- mapas
- provincias
- r
- tsp
---

O tal dice lo que expongo a continuación.

Paquetes necesarios:

{{< highlight R >}}
library(rvest)
library(caRtociudad)
library(reshape2)
library(ggmap)
library(plyr)
library(TSP)
{{< / highlight >}}


Extracción de las provincias y sus capitales (de la Wikipedia):


{{< highlight R >}}
capitales <- read_html("https://es.wikipedia.org/wiki/Anexo:Capitales_de_provincia_de_Espa%C3%B1a_por_poblaci%C3%B3n")
capitales <- html_nodes(capitales, "table")
capitales <- html_table(capitales[[1]])$Ciudad

capitales <- capitales[!capitales %in%
  c("Las Palmas de Gran Canaria",
    "Melilla", "Ceuta", "Mérida",
    "Santa Cruz de Tenerife",
    "Santiago de Compostela",
    "Palma de Mallorca")]
{{< / highlight >}}


Y sus coordenadas:


{{< highlight R >}}
coordenadas <- ldply(capitales, function(x) {
    tmp <- cartociudad_geocode(x)[1,]
    res <- data.frame(ciudad = x, provincia = tmp$province, lat = tmp$latitude, lon = tmp$longitude)
    if(is.na(res$lat)){
      tmp <- geocode(paste(x, "España"))
      res$lat <- tmp$lat
      res$lon <- tmp$lon
    }
    res
  })

# Pobre Logroño: ¡Cartociudad lo ubica en Asturias!
coords.logrono <- geocode("Logroño")
coordenadas$lat[coordenadas$ciudad == "Logroño"] <- coords.logrono$lat
coordenadas$lon[coordenadas$ciudad == "Logroño"] <- coords.logrono$lon
{{< / highlight >}}


Construcción de la matriz simétrica de distancias (¡tarda un buen rato!):


{{< highlight R >}}
distancias <- expand.grid(desde = capitales, hasta = capitales)
distancias$desde <- as.character(distancias$desde)
distancias$hasta <- as.character(distancias$hasta)
distancias <- distancias[distancias$desde < distancias$hasta,]

distancias$distancia <- rep(0, nrow(distancias))

for(i in 1:nrow(distancias)){
  desde <- distancias$desde[i]
  hasta <- distancias$hasta[i]
  print(paste(desde, hasta, sep = " <---> "))

  coords <- coordenadas[coordenadas$ciudad %in% c(desde, hasta),]
  distancias$distancia[i] <- get_cartociudad_route(
    c(coords$lat[1], coords$lon[1]),
    c(coords$lat[2], coords$lon[2]))$distance / 1000
  print(distancias$distancia[i])
}

distancias <- rbind(distancias,
  data.frame(desde = distancias$hasta,
  hasta = distancias$desde,
  distancia = distancias$distancia))


distancias.capitales <- dcast(distancias, desde ~ hasta)
distancias.capitales <- as.matrix(distancias.capitales[,-1])
rownames(distancias.capitales) <- colnames(distancias.capitales)
diag(distancias.capitales) <- 0
{{< / highlight >}}


La [magia](https://cran.r-project.org/web/packages/TSP/vignettes/TSP.pdf):


{{< highlight R >}}
distancias.capitales <- TSP(
  distancias.capitales,
  labels = colnames(distancias.capitales))
res <- solve_TSP(distancias.capitales)
{{< / highlight >}}


Y el remate,


{{< highlight R >}}
trazar.ruta <- function(ruta){
  ruta.coordenadas <- data.frame(desde = ruta[-length(ruta)], hasta = ruta[-1])
  desde.coordenadas <- coordenadas[match(ruta.coordenadas$desde, coordenadas$ciudad),]
  desde.coordenadas <- desde.coordenadas[, c("ciudad", "lat", "lon")]
  colnames(desde.coordenadas) <- c("desde", "lat.desde", "lon.desde")

  hasta.coordenadas <- coordenadas[match(ruta.coordenadas$hasta, coordenadas$ciudad),]
  hasta.coordenadas <- hasta.coordenadas[, c("ciudad", "lat", "lon")]
  colnames(hasta.coordenadas) <- c("hasta", "lat.hasta", "lon.hasta")

  ruta.coordenadas <- cbind(desde.coordenadas, hasta.coordenadas)

  mapa <- get_map("Madrid", 6)

  ggmap(mapa) + geom_leg(data = ruta.coordenadas, aes(x = lon.desde, xend = lon.hasta, y = lat.desde, yend = lat.hasta))
}

ruta <- names(res)
ruta <- c(ruta, ruta[1])
trazar.ruta(ruta)
{{< / highlight >}}


que genera

![rutas_provincias](/wp-uploads/2016/06/rutas_provincias.png#center)


---
author: Carlos J. Gil Bellosta
date: 2014-10-01 07:13:47+00:00
draft: false
title: ¿Dónde he estado (según Google)?

url: /2014/10/01/donde-he-estado-segun-google/
categories:
- gráficos
- r
tags:
- google
- gráficos
- mapas
- r
---

Leí [esto](http://educate-r.org//2014/09/26/googlelocations/) el otro día. Lo voy a replicar con mis datos.

**Contexto**

Google guarda datos de tus ubicaciones: tu tableta, tu ordenador, tu teléfono Android son espías a su servicio. Los datos los guarda en [aquí](https://www.google.com/settings/datatools) (creo que necesitarás que en tu navegador haya una sesión abierta con tus credenciales del universo Google). Pulsando en _administrar archivos_ y luego en _crear archivos_ puedes seleccionar el tipo de información sobre ti que posee Google y que quieres descargarte. Para este ejemplo, será el _Historial de Ubicaciones_.

El código que he utilizado el el siguiente:



        library(RJSONIO)
        library(<a href="http://inside-r.org/packages/cran/plyr">plyr)
        library(ggmap)

        raw  <- fromJSON("Historialdeubicaciones.json")
        res  <- ldply(raw$locations, function(x) c(x$latitudeE7, x$longitudeE7, as.numeric(x$timestampMs)))

        # arreglo el df
        colnames(res) <- c("lat", "lon", "timestamp")

        res$lat <- res$lat / 1e7
        res$lon <- res$lon / 1e7

        # crea el mapa base y representa las ubicaciones
        mostrar.ubicaciones <- function(direccion, zoom, puntos){
          centro <- geocode(direccion)
          map <- get_map( location = as.numeric(centro),
                          color = "color",
                          maptype = "roadmap",
                          scale = 2,
                          zoom = zoom)
          ggmap(map)

          # le añado puntos
          ggmap(map) + geom_point(aes(x = lon, y = lat),
                                         data = puntos, colour = 'red',
                                         size = 4)
        }

        # mis ubicaciones
        mostrar.ubicaciones("Paris, Francia", 4, res)
        mostrar.ubicaciones('Puerta del Sol, Madrid, Spain', 11, res)
        mostrar.ubicaciones('Technopark, Zurich, Suiza', 14, res)
        mostrar.ubicaciones("Soria, Spain", 7, res)
        mostrar.ubicaciones("Zaragoza, Spain", 14, res)



**Resultados**

En los últimos tiempos (no me he entretenido a mirar cuántos ni cuáles) he estado en varios lugares de Europa. No uso los datos del móvil y suelo tener la wifi y el GPS desconectados. Por eso, los puntos del siguiente mapa son todos los que están, pero no están todos los que son:

[![ggmaps_google_paris](/wp-uploads/2014/10/ggmaps_google_paris.png)
](/wp-uploads/2014/10/ggmaps_google_paris.png)

Falta información de algunos viajes en los que, al parecer, estuve desconectado.

Dentro de Madrid me traza por los alrededores de mi casa, en el aeropuerto y entre la una y el otro. Así de triste es mi vida. Hay un punto raro en el que no recuerdo haber estado en los últimos tiempos. Faltan algunos puntos por los alrededores de la ciudad universitaria por donde anduve este verano y el DataBeers de la semana pasada. ¡Apenas he estado en ningún otro sitio en los últimos meses!

[![ggmaps_google_madrid](/wp-uploads/2014/10/ggmaps_google_madrid.png)
](/wp-uploads/2014/10/ggmaps_google_madrid.png)

En Zúrich tengo punticos en casa, en el trabajo y uno en la estación de tren. Supongo que camino del aeropuerto. He estado en algún sitio más con la bici, pero, al parecer, desconectado.

[![ggmaps_google_zurich](/wp-uploads/2014/10/ggmaps_google_zurich.png)
](/wp-uploads/2014/10/ggmaps_google_zurich.png)

Etc.

Lamento en todo caso que mis traslaciones de los últimos tiempos no hayan sido particularmente emocionantes.

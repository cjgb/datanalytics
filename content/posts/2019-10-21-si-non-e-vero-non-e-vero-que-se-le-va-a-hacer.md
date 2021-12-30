---
author: Carlos J. Gil Bellosta
date: 2019-10-21 09:13:18+00:00
draft: false
title: Se non è vero, non è vero (¡qué se le va a hacer!)

url: /2019/10/21/si-non-e-vero-non-e-vero-que-se-le-va-a-hacer/
categories:
- números
- r
tags:
- electricidad
- energía
- eólica
- r
- stationaRy
- tenerife
---

Me llegó por fuentes habitualmente fiables el vídeo

{{< youtube 2Fh_XmK3yis >}}

que se resume en que el apagón del día 29 de septiembre en Tenerife, es decir, [esta cosa tan horrorosa](https://demanda.ree.es/visiona/canarias/tenerife/total/2019-09-29)

![](/wp-uploads/2019/10/apagon_tenerife.png#center)

fue producto de la variabilidad de la producción de la energía eólica. En particular, de una bajada drástica de la aportación de la eólica al _mix_ consecuencia de un descenso en la intensidad del viento. Lo cual, de ser cierto, debería convertirse en referencia básica para ilustrar los perniciosos efectos de la variabilidad, etc.

Sin embargo, el vídeo omite

![](/wp-uploads/2019/10/apagon_tenerife_intensidad_viento.png#center)

que es una gráfica de la intensidad (horaria) del viento en las estaciones meteorológicas de la isla de Tenerife durante ese día que muestra que no está para nada claro que sufriese una caída drástica en el momento en que ocurrió el apagón (línea vertical roja).

Lo cual, por un lado, me echa abajo una entrada que podría haber sido mucho más interesante que la que me ha tocado escribir. Pero que ha servido como excusa para ilustrar el uso del paquete [`stationaRy`](https://cran.r-project.org/package=stationaRy) (que permite descargar datos meteorológicos horarios de 30k estaciones mundiales, incluidos los que AEMET atesora para sí, para sí y solo para sí):

{{< highlight R "linenos=true" >}}
library(stationaRy)
library(ggplot2)

stations <- get_station_metadata()
stations <- stations[!is.na(stations$country),]
stations <- stations[stations$country == "SP",]
stations <- stations[grep("TENERIFE", stations$name),]

datos <- lapply(stations$id, function(id)
    get_met_data(station_id = id, years = 2019))
datos <- do.call(rbind, datos)
datos <- datos[as.Date(datos$time) == as.Date("2019-09-29"),]

tmp <- stations[, c("name", "id")]
datos <- merge(tmp, datos)

hora_apagon <- as.POSIXct(strptime("2019-09-29 13:00:00",
                                    format = "%Y-%m-%d %H:%M:%S"))

ggplot(datos, aes(x = time, y = ws)) + geom_line() +
    geom_vline(xintercept = hora_apagon, col = "red") +
    facet_wrap(~name)
{{< / highlight >}}
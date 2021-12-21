---
author: Carlos J. Gil Bellosta
date: 2017-09-29 08:13:35+00:00
draft: false
title: Bus al norte, bus al sur

url: /2017/09/29/bus-al-norte-bus-al-sur/
categories:
- números
tags:
- datos públicos
- emt
- madrid
- movilidad
---

El día 2017-09-20 hubo gente que tomó el autobús en Madrid. Se montó en una determinada parada y la siguiente estaba situada o bien al norte o bien al sur de la anterior.

He contado, por horas, cuánta gente viajó en ese primer tramo, hacia el norte y quién lo hizo hacia el sur y he obtenido

![](/wp-uploads/2017/09/norte_sur.png)

que es ---al contrario de los resultados presuntamente basados en datos pero, en el fondo ideológicamente sesgados con los que nos quieren tan frecuentemente vender motos--- totalmente compatible con lo que todos los que nos movemos por Madrid sabemos.

Creo que no puedo publicar datos. Pero otros lo han hecho por [mí](https://github.com/medialab-prado/mobilomics/blob/master/data/EMT/demanda_fixed.csv.gz). El código, por si a alguien le vale para algo (o si quiere extender lo que he hecho, que lo he dejado a huevo) es

{{< highlight R "linenos=true" >}}
library(plyr)
library(dplyr)
library(lubridate)
library(ggplot2)

raw <- read.csv2("demanda_fixed.csv")

emt <- raw[raw$FECHA == "20170920",]
emt$FECHA <- NULL
emt$latitude <- as.numeric(as.character(emt$latitude))
emt$longitude <- as.numeric(as.character(emt$longitude))
emt$instante <- ymd_hms(emt$instante)

foo <- function(x){
  x[order(x$instante),]

  tmp <- rle(as.character(x$nombre))

  if(length(tmp$lengths) == 1)
    return(data.frame())

  mascara  <- rep(1:length(tmp$lengths), times = tmp$lengths)
  viajeros <- tapply(x$viajeros, mascara, sum)
  latitud  <- tapply(x$latitude, mascara, mean)
  hora     <- tapply(hour(x$instante), mascara, min)

  res <- data.frame(
    direccion = tail(latitud, -1) - head(latitud, -1),
    hora = head(hora, -1),
    viajeros = head(viajeros, -1)
    )
  res$linea <- unique(x$linea)
  res
}

tmp <- group_by(emt, linea, cochelogico) %>% do(foo(.))

tmp$norte_sur <- ifelse(tmp$direccion > 0, "norte", "sur")
tmp <- ddply(tmp, .(hora, norte_sur),
              summarize, viajeros = sum(viajeros))
tmp <- tmp[tmp$hora > 6 & tmp$hora < 22,]

ggplot(tmp, aes(x = norte_sur, y = viajeros)) +
  geom_col() +
  facet_wrap(~ hora)
{{< / highlight >}}

---
author: Carlos J. Gil Bellosta
date: 2014-10-14 07:13:55+00:00
draft: false
title: Amanece, me cuentan, que no es poco

url: /2014/10/14/amanece-me-cuenta-que-no-es-poco/
categories:
- números
- r
tags:
- ggplot2
- horarios
- r
---

El amanecer es una cosa que ocurre a diario, me cuentan, pero que yo apenas he visto. Casi hablo de lo que no sé. Por otra parte, la discusión de los horarios, de si deberíamos tener la hora de Londres y no la de Berlín, me parece puro nominalismo. Unos llaman a la hora a la que se levantan _sechs_, otros _seven_, otros _huit_ y yo diez y veinte. Y no pasa nada.

No obstante, el asunto de los husos horarios es del recurrente interés de muchos. En [¿Por qué la «hora de Berlín» triunfa en Europa Occidental?](http://politikon.es/2014/10/09/por-que-la-hora-de-berlin-triunfa-en-europa-occidental/) se ofrece una perspectiva interesante de la que quiero ofrecer una versión alternativa.

En ese artículo se muestra la diferencia en horas en el amanecer en dos días eminentes del año para muchos punticos del mapa. Yo voy a mostrar la diferencia en horas del amanecer para todos los días del año para un subconjunto eminente de ellos así:

[![amanecer_horas](/wp-uploads/2014/10/amanecer_horas.png)
](/wp-uploads/2014/10/amanecer_horas.png)

El código con el que lo he construido (muy instructivo para quien quiera realizar extensiones de lo anterior) es



    library(<a href="http://inside-r.org/packages/cran/StreamMetabolism">StreamMetabolism)
    library(lubridate)
    library(ggplot2)
    library(<a href="http://inside-r.org/packages/cran/plyr">plyr)

    get.sunrise <- function(lat, lon){
      tmp <- sunrise.set(lat, lon, "2013/01/01", timezone="UTC", num.days = 365)
      tmp <- tmp[,1]
      tmp <- hour(tmp) + minute(tmp) / 60 + second(tmp) / 3600
    }

    madrid  <- get.sunrise(40.383333, -3.716667)

    diff.with <- function(ciudad, lat, lon){
      tmp <- get.sunrise(lat, lon)
      data.frame(dia = 1:length(tmp), diferencia = tmp - madrid, ciudad = ciudad)
    }

    diferencias <- list()

    diferencias$zurich   <- diff.with("zurich", 47.366667, 8.533333)
    diferencias$londres  <- diff.with("londres", 51.5085300, -0.12574)
    diferencias$berlin   <- diff.with("berlin", 52.5243700, 13.410530)
    diferencias$bruselas <- diff.with("bruselas", 50.85045, 4.34878)
    diferencias$zaragoza <- diff.with("zaragoza", 41.65606, -0.87734)
    diferencias$paris    <- diff.with("paris", 48.85341, 2.3488000)
    diferencias$roma     <- diff.with("roma", 41.89193, 12.51133)
    diferencias$lisboa   <- diff.with("lisboa", 38.728630, -9.139948)
    diferencias$tenerife <- diff.with("tenerife", 28.46824, -16.25462)

    diferencias <- do.call(rbind, diferencias)
    diferencias$ciudad <- reorder(diferencias$ciudad, diferencias$diferencia)
    medias      <- ddply(diferencias, .(ciudad), summarise, media = mean(diferencia))

    ggplot(diferencias, aes(x = dia, y = diferencia)) + geom_line() + facet_wrap(~ciudad) +
      geom_hline(aes(yintercept = media), medias, col = "red") + ylab("diferencia en horas")



Y bueno, como todo el mundo tiene comentarios respecto a lo de los horarios y no no soy la excepción, van ahí los míos:



	  * El problema no es que la gente se levante una hora antes o depués.
	  * El problema no es que el sol esté en un lugar u otro a la hora al a que se levanta la gente.
	  * El problema es que a todos nos obligan a levantarnos a la misma hora.
	  * Y todos cogemos el metro, la Nacional II, el cercanías, la avenida de San José, etc. a la vez.
	  * Y no harían falta tantos carriles, tantas frecuencias, tanto capital invertido en infraestructuras si pudiésemos llegar a donde tenemos que ir cuando nos pluguiera.
	  * Y para acabar, que cuando se habla de entornos de trabajo _diversos_ la gente siempre piensa en diversidad de sexos, razas, religiones, etc. pero nunca de actitudes con respecto al que llamo yo vicio de madrugar.


¡Carajo!

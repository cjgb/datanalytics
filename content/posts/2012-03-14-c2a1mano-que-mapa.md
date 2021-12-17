---
author: Carlos J. Gil Bellosta
date: 2012-03-14 08:35:49+00:00
draft: false
title: ¡Maño qué mapa!

url: /2012/03/14/%c2%a1mano-que-mapa/
categories:
- r
tags:
- datos abiertos
- mapas
- r
- tráfico
---

Esta mañana casi me da esa tontería de sentirme orgulloso de ser de donde soy, Zaragoza. Al fin y al cabo, podría haber sido de cualquier otro lugar. Pero es que Zaragoza tiene uno de los [portales de datos públicos municipales](http://www.zaragoza.es/ciudad/risp/presentacion.htm) más avanzados. En eso es una ciudad pionera.

(Se lo hemos de agradecer a nuestro alcalde, Belloch, que, dicen las malas lenguas, además de socialista y barbudo, es linuxero).

Entre los datos disponibles, los hay de [tráfico en tiempo real](http://www.zaragoza.es/ciudad/risp/detalle_Risp?id=291). En particular, existe una serie de [tramos de calle](http://www.zaragoza.es/trafico/estado/tramoswgs84.json) y un fichero que se actualiza cada pocos segundos que indica el [estado del tráfico](http://www.zaragoza.es/trafico/estado/estado.json) en ellos.

Y he pensado que tal vez podría hacer una virguería con R.

Así que he escrito lo siguiente:








    library( <a href="http://inside-r.org/packages/cran/rjson">rjson )

    # tmp <- readLines( "http://www.zaragoza.es/trafico/estado/tramos23030.json" )
    tmp <- readLines( "http://www.zaragoza.es/trafico/estado/tramoswgs84.json" )
    tmp <- fromJSON( tmp )[[1]]

    status <- fromJSON( readLines( "http://www.zaragoza.es/trafico/estado/estado.json" ) )

    status.time <- status$timestamp
    status <- strsplit( status$estados, "" )[[1]]

    # length( kkk )

    tmp <- lapply( tmp, function( x ) {
    	id     <- x$id
    	name   <- x$name
    	status <- status[id]
    	lat    <- sapply( x$points, function( y ) y$lat )
    	lon    <- sapply( x$points, function( y ) y$lon )

    	data.frame( id = id, name = name, status = status, lat = lat, lon = lon )

    })

    tmp <- do.call( rbind, tmp )

    # tmp <- merge( tmp, status )

    plot( range( tmp$lon ), - range( -tmp$lat ),
    	xaxt = "n", yaxt = "n", type = "n",
    	main = paste(
    			"Estado del tráfico en Zaragoza",
    			strptime( gsub( "-|Z", " ", status.time),
    				format = "%Y%m%d %H%M%S" ), sep = "\n" ),
    	xlab = "", ylab = "" )

    foo <- function( x, y, status ){
    	colores <- c( "black", "red", "yellow",  "green", "lightgray" )
    	color   <- colores[ match( status, c( "b", "r", "y", "g" ), nomatch = 5 ) ]
    	lines( x,y, col = color, lwd = ifelse( status == "-", 1, 2 ) )
    }

    by( tmp, tmp$id, function( x ) foo( x$lon, x$lat, status = x$status ) )









Que da como resultado (a la hora en la que lo he ejecutado, cuando los zaragozanos están ya casi todos en su casa)

[![](/wp-uploads/2012/03/trafico_zgz.png)
](/wp-uploads/2012/03/trafico_zgz.png)

Pero me ha sabido a poco y he querido hacerlo todavía más a lo maño. Así que he añadido








    library( OpenStreetMap )

    map <- openmap( c( max(tmp$lat), min(tmp$lon) ), c( min( tmp$lat ), max(tmp$lon) ), type = "osm")
    plot(map,raster=TRUE)

    tmp.mercator <- data.frame( projectMercator( tmp$lat, tmp$lon ) )
    tmp.mercator$status <- tmp$status

    foo <- function( x, y, status ){
      colores <- c( "black", "red", "yellow",  "green", "lightgray" )
    	color   <- colores[ match( status, c( "b", "r", "y", "g" ), nomatch = 5 ) ]
    	lines( x,y, col = color, lwd = ifelse( status == "-", 1, 2 ) )
    }

    by( tmp.mercator, tmp$id, function( x ) foo( x$x, x$y, status = x$status ) )









Y he obtenido
[![](/wp-uploads/2012/03/trafico_zgz_osm.png)
](/wp-uploads/2012/03/trafico_zgz_osm.png)

Hay algunas cosas que me gustaría poder añadir, minucias, pero que estoy demasiado ocupado para investigar y que me gustaría dejar de tarea a mis lectores:



	  * ¿Cómo poner un título al segundo gráfico?
	  * ¿Cómo difuminar la imagen de fondo para que resalten más los tramos de tráfico sobre el excesivo detalle del mapa subyacente?


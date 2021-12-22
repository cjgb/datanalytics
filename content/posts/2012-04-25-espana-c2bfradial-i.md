---
author: Carlos J. Gil Bellosta
date: 2012-04-25 07:05:16+00:00
draft: false
title: España, ¿radial? (I)

url: /2012/04/25/espana-%c2%bfradial-i/
categories:
- números
- r
tags:
- números
- r
- redes sociales
---

Me propuse hace un tiempo combinar lo que aprendí creando [rutas callejeras por Zaragoza](http://www.datanalytics.com/blog/2012/04/16/rutas-por-zaragoza-con-r/) con una entrada que escribí sobre la [estructura radial de las vías de transporte de España](http://www.datanalytics.com/blog/2012/03/28/contrafactualidad-radial/). El problema que me planteo es si tiene sentido que la red de carreteras Española tenga estructura radial habida cuenta de la geometría peninsular bajo ciertas hipótesis, siempre discutibles y mejorables, de partida.

Así que, en primer lugar, cargué los paquetes de R necesarios, un fichero que creé que contenía las capitales de provincia, su latitud, su longitud y la población de las respectivas provincias y fabriqué una red de carreteras muy ineficiente que unía todos los nodos entre sí:



    library(maptools)
    library(pxR)
    library(igraph)
    library( <a href="http://inside-r.org/packages/cran/geosphere">geosphere)

    ## datos: provincias y población

    nodos <- read.table( "http://www.datanalytics.com/uploads/prov_pop_lat_lon.txt",
                 sep = ",", dec = ",", header = T, encoding = "latin1")

    ## aristas

    distancia <- function(p1, p2, nodos){
      alfa  <- c(nodos$lon[nodos$prov==p1], nodos$lat[nodos$prov==p1] )
      omega <- c(nodos$lon[nodos$prov==p2], nodos$lat[nodos$prov==p2] )
      distCosine( alfa, omega ) / 1000	# kms.
    }

    aristas <- expand.grid(nodos$prov, nodos$prov)
    colnames(aristas) <- c("desde", "hasta")
    aristas <- aristas[ as.character(aristas$desde) < as.character(aristas$hasta), ]

    aristas$weight <- apply(aristas,1, function(x) distancia(x[1], x[2], nodos))


    ## grafo

    grafo <- graph.data.frame(aristas, directed = F)

    plot.grafo <- function(g, nodos, col = "black", text = F){
      tmp <- get.edges(g, V(g))
      vertices <- data.frame( (V(g)[get.edges(g, E(g))[,1]])$name,
                              (V(g)[get.edges(g, E(g))[,2]])$name, col = col )

      plot(nodos$lon, nodos$lat, xlab ="", ylab = "", xaxt = "n", yaxt="n")
      if( text )
        text(nodos$lon, nodos$lat,nodos$prov)

      apply(vertices, 1, function(x){
        x1 <- nodos$lon[nodos$prov == x[1]]
        y1 <- nodos$lat[nodos$prov == x[1]]
        x2 <- nodos$lon[nodos$prov == x[2]]
        y2 <- nodos$lat[nodos$prov == x[2]]
        lines( c(x1,x2), c(y1,y2), col = x[3])
      })
    }

    plot.grafo(grafo, nodos)	# pequeño caos



El resultado es este pequeño caos:

[![](/wp-uploads/2012/04/mapa_grafo_completo.png)
](/wp-uploads/2012/04/mapa_grafo_completo.png)

Por simplificar, eliminé todas las _autovías_ que unían capitales de provincia cuando pudiera encontrar una ruta alternativa cuya longitud no excediese a la original por un factor de 1.2 haciendo



    exceso.edge <- function(g, e){
      a <- shortest.paths(g)
      b <- shortest.paths(delete.edges(g, e))
      max( incr <- b / a, na.rm = T )
    }

    tmp <- sapply(E(grafo), function(e) exceso.edge(grafo,e))
    g2  <- delete.edges(grafo, E(grafo)[tmp < 1.2])

    plot.grafo(g2, nodos)



para obtener

[![](/wp-uploads/2012/04/mapa_simplificado.png)
](/wp-uploads/2012/04/mapa_simplificado.png)

Finalmente, simulé trayectos entre provincias con este criterio: una persona viaja de A a B con una probabilidad directamente proporcional al producto de las poblaciones de dichas provincias e inversamente proporcional a la distancia (en línea recta) entre ellas. La regla del producto de la población de las provincias es compatible con una muestra aleatoria de parejas de personas sobre la población total modificada en segunda instancia por la distancia entre ellas. Así que haciendo



    peso.tramos <- function(a, b, g, nodos){
      data.frame(
        tramo = as.numeric(E(g2, path = get.shortest.paths(g2, from=a, to = b)[[1]])),
        pop = nodos$pop[nodos$prov == a] / 1e6 * nodos$pop[nodos$prov == b] / 1e6,
        distancia = distancia(a,b,nodos)
      )
    }

    res  <- do.call(rbind, apply(aristas, 1, function(x) peso.tramos(x[1], x[2], g2, nodos)))
    peso <- tapply(res$pop / (res$distancia)^(1), res$tramo, sum)

    ## un primer gráfico

    col <- peso
    col[col < median(col)] <- 0
    col <- rgb(0,0,0, 255 * col/max(col), maxColorValue=255)
    plot.grafo(g2, nodos, col = col)





obtuve

[![](/wp-uploads/2012/04/mapa_radial_00.png)
](/wp-uploads/2012/04/mapa_radial_00.png)

En este mapa sólo se han representado la mitad de los tramos de mayor importancia (de acuerdo con el criterio arriba especificado) y en el resto se ha modulado la intensidad en función también de ese criterio.

¿Es una estructura radial? Podemos recurrir de nuevo a la teoría de grafos para medir la _centralidad _de los nodos:



    g3 <- delete.edges(g2,edges=E(g2)[peso < median(peso)])
    col3 <- col[peso >= median(peso)]
    plot.grafo(g3, nodos, col = col3)

    E(g3)$weight <- peso[peso >= median(peso)]

    centralidad <- data.frame(nodo = V(g3)$name, centralidad = alpha.centrality(g3) )
    centralidad <- centralidad[order(-centralidad$centralidad),]
    centralidad





El resultado da preeminencia a Madrid y otras capitales de su entorno:

[![](/wp-uploads/2012/04/centralidad_provincias.png)
](/wp-uploads/2012/04/centralidad_provincias.png)

La cuestión es: ¿está Madrid en el centro a causa de su población? ¿Es esta población de Madrid grande entre otras cosas, gracias a la estructura radial de las comunicaciones? En una nueva entrega sobre este asunto volveré a analizar el problema con hipótesis de partida distintas.

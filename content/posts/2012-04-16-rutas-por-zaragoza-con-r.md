---
author: Carlos J. Gil Bellosta
date: 2012-04-16 07:17:15+00:00
draft: false
title: Rutas por Zaragoza con R

url: /2012/04/16/rutas-por-zaragoza-con-r/
categories:
- r
tags:
- mapas
- r
- redes sociales
---

[Óscar Perpiñán](http://procomun.wordpress.com/) me puso el otro día al tanto del [paquete `osmar` de R](http://osmar.r-forge.r-project.org/), que



<blockquote>proporciona la infraestructura para acceder a datos de [OpenStreetMap](http://www.openstreetmap.org/) a través de diferentes fuentes, trabajar con ellos con R de una manera unificada y aprovechando la infraestructura que proporcionan otros paquetes como, por ejemplo, `sp` e `igraph`.</blockquote>



Hoy voy a ilustrar el uso de este paquete adaptando un ejemplo de sus autores para encontrar la ruta _óptima_ entre dos puntos de Zaragoza, la [mercería Bell](http://www.comerciozaragoza.es/comercio/Bell) y el [colegio La Salle Montemolín](http://www.lasalle.es/lasallemontemolin/), ambos lugares muy vinculados a mi _prehistoria_. Comenzaré cargando los paquetes necesarios y los datos de OpenStreetMap correspondientes a Zaragoza:



    library( igraph )
    library( osmar )

    api <- osmsource_api(url = "http://api.openstreetmap.org/api/0.6/")
    <a href="http://inside-r.org/r-doc/graphics/box">box    <- corner_bbox( -0.90, 41.60, -0.85, 41.69 )
    zgz <- get_osm(<a href="http://inside-r.org/r-doc/graphics/box">box, source = api)



En segundo lugar, voy a usar las funciones auxiliares del paquete para extraer las calles del objeto `zgz` y representarlas geométricamente:



    hways_zgz <- subset(zgz, way_ids = <a href="http://inside-r.org/r-doc/utils/find">find(zgz, way(tags(k == "highway"))))
    hways <- <a href="http://inside-r.org/r-doc/utils/find">find(hways_zgz, way(tags(k == "name")))
    hways <- find_down(zgz, way(hways))
    hways_zgz <- subset(zgz, ids = hways)

    plot_ways(hways_zgz, col = "gray" )
    <a href="http://inside-r.org/r-doc/graphics/title">title("Calles de Zaragoza")



El resultado es

[![](/wp-uploads/2012/04/calles_zaragoza.png)
](/wp-uploads/2012/04/calles_zaragoza.png)

A continuación, selecciono los puntos incial y final de mi ruta:



    id <- <a href="http://inside-r.org/r-doc/utils/find">find(zgz, node(tags(v == "Moda infantil Bell")))[1]
    hway_start_node <- find_nearest_node(zgz, id, way(tags(k == "highway")))
    hway_start <- subset(zgz, node(hway_start_node))

    id <- <a href="http://inside-r.org/r-doc/utils/find">find(zgz, node(tags(v == "La Salle Montemolín")))[1]
    hway_end_node <- find_nearest_node(zgz, id, way(tags(k == "highway")))
    hway_end <- subset(zgz, node(hway_end_node))



Puedo representarlos mediante



    plot_nodes(hway_start, add = TRUE, col = "red", pch = 19, cex = 1)
    plot_nodes(hway_end, add = TRUE, col = "blue", pch = 19, cex = 1)



para obtener

[![](/wp-uploads/2012/04/calles_zaragoza_puntos.png)
](/wp-uploads/2012/04/calles_zaragoza_puntos.png)

Finalmente, utilizo la infraestructura proporcionada por el paquete `igraph` (para el análisis de redes sociales) para calcular la ruta más corta entre ambos puntos haciendo



    gr_zgz <- as_igraph(hways_zgz)
    route <- get.shortest.paths(gr_zgz,
                                from = as.character(hway_start_node),
                                to = as.character(hway_end_node))[[1]]

    route_nodes <- as.numeric(V(gr_zgz)[route]$name)
    route_ids <- find_up(hways_zgz, node(route_nodes))
    route_zgz <- subset(hways_zgz, ids = route_ids)
    route_zgz



y puedo finalmente representarla en el mapa mediante



    plot_ways(route_zgz, add = TRUE, col = "black", lwd = 2)



para obtener el resultado final

[![](/wp-uploads/2012/04/calles_zaragoza_ruta.png)
](/wp-uploads/2012/04/calles_zaragoza_ruta.png)

Es incluso posible (véase [esto](http://osmar.r-forge.r-project.org/)) obtener una lista de las calles y _nodos_ que hay que seguir para ir de uno de los puntos al otro.

Interesante, ¿eh?

**Notas:**



	  * No he conseguido calcular rutas en zonas más amplias: descargar los mapas de carreteras/calles de toda España, por ejemplo, no es tan sencillo como descargar los de zonas más pequeñas (una ciudad, por ejemplo). El API por defecto de OpenStreetMap, el que he usado, sólo permite descargar zonas que ocupen menos de la cuarta parte de un _grado cuadrado_. Existen procedimientos para extracciones más amplias, pero no las he probado.
	  * Para otras ubicaciones distintas de las que he probado (y que existen como tales en el objeto `zgz` como, por ejemplo, el campus de la Universidad de Zaragoza) el código que he mostrado falla de manera que no he podido todavía explicar.

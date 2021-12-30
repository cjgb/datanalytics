---
author: Carlos J. Gil Bellosta
date: 2012-04-26 06:44:51+00:00
draft: false
title: España, ¿radial? (II)

url: /2012/04/26/espana-radial-ii/
categories:
- números
- r
tags:
- r
- redes sociales
- grafos
- españa
---

Una de las principales objeciones que se le pueden hacer a mi entrada de ayer es que puede estar confundiendo la causa con efecto: puede que parte de la radialidad de la red que obtuve tenga que ver con el tamaño desproporcionado de Madrid que, a su vez, podría haber sido causado por la radialidad de la red tradicional de las comunicaciones españolas.

Así que enviemos una partida de pescado en malas condiciones a Mercamadrid, convidemos a toda la provincia, veámosla fenecer víctima de contumaces diarreas y rehagamos la simulación suponiendo que

{{< highlight R "linenos=true" >}}
nodos.alt <- nodos
nodos.alt$pop[nodos.alt$prov == "Madrid"] <- 0
{{< / highlight >}}

¿Qué forma tendría ahora la red? Ejecutando

{{< highlight R "linenos=true" >}}
res  <- do.call(rbind, apply(aristas, 1, function(x) peso.tramos(x[1], x[2], g2, nodos.alt)))
peso <- tapply(res$pop / (res$distancia)^(1), res$tramo, sum)

col <- peso
col[col < median(col)] <- 0
col <- rgb(0,0,0, 255 * col/max(col), maxColorValue=255)
plot.grafo(g2, nodos, col = col)

g3 <- delete.edges(g2,edges=E(g2)[peso < median(peso)])
col3 <- col[peso >= median(peso)]
plot.grafo(g3, nodos, col = col3)

E(g3)$weight <- peso[peso >= median(peso)]

centralidad <- data.frame(nodo = V(g3)$name, centralidad = alpha.centrality(g3) )
centralidad <- centralidad[order(-centralidad$centralidad),]
centralidad
{{< / highlight >}}

se obtiene

[![](/wp-uploads/2012/04/red_madrrid_0.png#center)
](/wp-uploads/2012/04/red_madrrid_0.png#center)

Esta vez la península se parte en dos reeditando una suerte de _Hispania Tarraconensis_ en la que las capitales más centrales son Tarragona, Valencia, Barcelona, Castellón, Jaén y Lérida.

Si en lugar de esta versión tan extrema su ponemos que Madrid tiene una poblacion _promedio_, es decir,

{{< highlight R "linenos=true" >}}
nodos.alt <- nodos
nodos.alt$pop[nodos.alt$prov == "Madrid"] <- median( nodos$pop )
{{< / highlight >}}

se obtiene una configuración prácticamente similar:

[![](/wp-uploads/2012/04/red_madrrid_media.png#center)
](/wp-uploads/2012/04/red_madrrid_media.png#center)

Y, finalmente, si toda la población está distribuida uniformemente en las provincias, es decir,

{{< highlight R "linenos=true" >}}
nodos.alt <- nodos
nodos.alt$pop <- mean( nodos$pop )
{{< / highlight >}}

las cosas cambian de manera bastante sorprendente:

[![](/wp-uploads/2012/04/red_provincias_iguales.png#center)
](/wp-uploads/2012/04/red_provincias_iguales.png#center)

La vieja Castilla serviría de nexo de comunicaciones, siendo las provincias con  mayor centralidad Palencia, Burgos, Segovia, Guadalajara, Toledo, Soria y Madrid. Tal vez porque la densidad de capitales de provincia (al suponer la población igual en todas las provincias) favorece esa zona en que se agrupan de manera un poco más compacta.

¿Será que consigo que alguien se anime a introducir correcciones por superficie (suponiendo una distribución uniforme de la población por kilómetro cuadrado), PIB, acceso a puertos de mar o salidas a Portugal o Francia?

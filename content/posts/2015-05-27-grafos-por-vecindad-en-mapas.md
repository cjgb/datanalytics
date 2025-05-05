---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2015-05-27 08:13:53+00:00
draft: false
lastmod: '2025-04-06T19:00:10.860648'
related:
- 2019-07-15-cartogramas-con-recmap.md
- 2017-04-10-pues-si-puede-fabricarse-uno-para-espana.md
- 2012-04-25-espana-c2bfradial-i.md
- 2015-06-08-una-de-las-cosas-que-me-irritan-de-r.md
- 2012-04-16-rutas-por-zaragoza-con-r.md
tags:
- grafos
- igraph
- mapas
- r
- spdep
title: Grafos por vecindad en mapas
url: /2015/05/27/grafos-por-vecindad-en-mapas/
---

Dando vueltas (infructuosas) al asunto de los [cartogramas](https://datanalytics.com/2015/05/22/cartogramas-vs-huertogramas/) he dado con un subproducto con el que, por hoy, me conformo: crear un grafo a partir de relaciones de vecindad entre polígonos. La magia, obra de `[spdep::poly2nb](http://www.inside-r.org/packages/cran/spdep/docs/poly2nb)`; el código,


{{< highlight R >}}
library(maptools)
library(spdep)
library(igraph)

# fichero descargado del INE
aragon <- readShapePoly("ccaa00c02.shp")
plot(aragon)
{{< / highlight >}}


[![aragon_ine](/wp-uploads/2015/05/aragon_ine.png#center)
](/wp-uploads/2015/05/aragon_ine.png#center)


{{< highlight R >}}
aragon.nb <- poly2nb(aragon)

# vértices
vertices <- aragon@data
vertices$id <- 1:nrow(aragon@data)
vertices <- vertices[, c("id", setdiff(colnames(vertices), "id"))]

# coordenadas aproximadas de los vértices
my.layout.orig <- do.call(rbind,
    lapply(vertices$id,
            function(i)
              aragon@polygons[[i]]@Polygons[[1]]@labpt))

# aristas

aristas <- do.call(rbind,
    lapply(1:length(aragon.nb),
          function(x)
            data.frame(from = x,
                        to = aragon.nb[[x]])))
aristas <- aristas[aristas$from < aristas$to,]
aristas <- aristas[aristas$from %in% vertices$id,]
aristas <- aristas[aristas$to   %in% vertices$id,]

# grafo
g <- graph.data.frame(aristas, directed = FALSE, vertices)

plot(g,
      layout = my.layout.orig,
      vertex.label = NA,
      vertex.size = 0.1)
{{< / highlight >}}


[![grafo_vecinos_aragon](/wp-uploads/2015/05/grafo_vecinos_aragon.png#center)
](/wp-uploads/2015/05/grafo_vecinos_aragon.png#center)
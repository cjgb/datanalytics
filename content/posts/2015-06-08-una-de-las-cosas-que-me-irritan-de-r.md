---
author: Carlos J. Gil Bellosta
date: 2015-06-08 08:13:34+00:00
draft: false
title: Una de las cosas que me irritan de R

url: /2015/06/08/una-de-las-cosas-que-me-irritan-de-r/
categories:
- r
tags:
- r
---

R (y su comunidad) es en ocasiones irritante. Os cuento por qué.

El otro día quise [pintar un grafo sobre un mapa](http://www.datanalytics.com/2015/05/18/grafos-sobre-mapas/). No quería usar ninguno de los [_layouts_ al uso](http://www.inside-r.org/packages/cran/igraph/docs/layout) porque cada nodo estaba georeferenciado. Me interesaba, además, pintar el grafo sobre una capa (de Google Maps u OSM) para contextualizarlo (¿conterrenizarlo?) mejor.

No es demasiado complicado escribir una función que haga lo anterior. Pero es razonable pensar que alguien pudiera haberlo hecho antes. [Et voilá](http://www.inside-r.org/packages/cran/popgraph/docs/geom_edgeset). Después de mucho buscar, di con las funciones `geom_edgeset` y `geom_nodeset` del paquete [`popgraph`](http://cran.r-project.org/web/packages/popgraph/index.html) que resolvían el problema.

Pero, ¿qué es `popgraph`? Es un paquete para construir y manipular _population graphs_, inglesajo que en el contexto estrecho del autor puede que tenga un significado preciso, pero que en el ancho mundo puede significar cualquier cosa. Lo que hace el paquete es, simplemente, pintar grafos sobre mapas. Fin. Sean o no poblaciones de nada. Su uso es bastante más general del que se deduce de la descripción del autor.

Si este, en lugar de ser un académico aislado del resto de la humanidad por los caprichos de los urbanistas que diseñan campus universitarios, hubiese sido una empresa interesada en divulgarlo, habríamos tenido un resultado muy distinto: nos lo venderían como una solución para casi cualquier problema analítico que, además, envía correo y gestiona la lista de la compra. Y mi entrada, en tal caso, habría denunciado que el paquete _solo y exclusivamente_ pinta grafos sobre mapas.

¿Tanto cuesta decir que `popgraph` pinta grafos sobre mapas y que, efectivamente, como corolario, puede también pintar sobre mapas grafos que representan poblaciones de las que son del interés fundamental de su autor?
















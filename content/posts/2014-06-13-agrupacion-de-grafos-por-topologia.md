---
author: Carlos J. Gil Bellosta
date: 2014-06-13 07:26:00+00:00
draft: false
title: Agrupación de grafos por topología

url: /2014/06/13/agrupacion-de-grafos-por-topologia/
categories:
- computación
- estadística
tags:
- igraph
- r
- redes sociales
---

Anuncio algo que no he conseguido hacer: agrupar grafos por topología. Pero no me he quedado lejos. Y espero que si alguien tiene alguna idea al respecto, nos lo haga saber al resto en la coda.

Contexto (disfrazado). Hay usuarios que tienen correos electrónicos. La relación esperada es de uno a uno. Pero la realidad es, como siempre, mucho más compleja: hay usuarios que tienen varios correos y correos compartidos por varios usuarios.

No puedo compartir los datos aquí, pero sí un poco de código:

{{< highlight R "linenos=true" >}}
library(igraph)

# creo el grafo
raw <- read.table("usuario_correo.txt", header = T)
tmp <- as.matrix(raw)
g <- graph.edgelist(tmp)

# lo descompongo en componentes conexas
subgraphs <- decompose.graph(g)

# cuento el número de componentes según el número de
# usuarios + correos que contengan
table( sapply(subgraphs, vcount) )

# me quedo con la lista de los más complejos
# (más de siete usuarios + correos)
complex.subgraphs <- graph.union(Filter(function(x) vcount(x) > 7, subgraphs))

# distingo correos y usuarios con colores
# los correos son los nodos que "reciben" algun usuario
V(complex.subgraphs)$color <- pmin(1, degree(complex.subgraphs, mode="in"))

# dibujo los patrones resultantes
plot(complex.subgraphs, vertex.label=NA,
        vertex.size = 4, edge.arrow.size=0.2)
{{< / highlight >}}

El resultado es algo así como

[![topologia_correos](/wp-uploads/2014/06/topologia_correos.png)
](/wp-uploads/2014/06/topologia_correos.png)

donde se aprecian usuarios con muchas cuentas de correo, cuentas de correo compartidas por muchos usuarios y otras configuraciones de potencial interés para la Guardia Civil.

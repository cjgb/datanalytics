---
author: Carlos J. Gil Bellosta
date: 2016-01-20 08:13:51+00:00
draft: false
title: Por si os interesa el tema de la energía, las centrales, las emisiones, etc.

url: /2016/01/20/por-si-os-interesa-el-tema-de-la-energia-las-centrales-las-emisiones-etc/
categories:
- r
tags:
- energía
- ggplot2
- r
- sparql
---

Esta entrada será del interés de a quien le atraigan dos temas bastante independientes entre sí:

* La energía, las centrales eléctricas, sus emisiones, etc.
* [SPARQL](https://en.wikipedia.org/wiki/SPARQL)

Allá va el código

{{< highlight R >}}
library(SPARQL)
library(ggplot2)

queryString = "PREFIX a: <http://enipedia.tudelft.nl/wiki/>
PREFIX prop: <http://enipedia.tudelft.nl/wiki/Property:>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
select ?plant ?name ?elec_capacity_MW ?lat ?lon ?operator
where {
?plant prop:Country a:Spain .
#get the name
#?plant rdfs:label ?name .
?plant prop:Generation_capacity_electrical_MW ?elec_capacity_MW .
#?plant prop:Operator ?operator .
?plant prop:Latitude ?lat .
?plant prop:Longitude ?lon .
}"


d <- SPARQL(url="http://enipedia.tudelft.nl/sparql",
            query=queryString, format='csv',
            extra='&format=text%2Fcsv')

ggplot(d$results, aes(x = lon, y = lat, size = elec_capacity_MW)) +
  geom_point()
{{< / highlight >}}

y lo que genera, que es

[![enipedia_centrales](/wp-uploads/2016/01/enipedia_centrales.png#center)
](/wp-uploads/2016/01/enipedia_centrales.png#center)

todo lo cual es manifiestamente mejorable.

Notas:

* Se puede jugar con la consulta, comentando y descomentando condiciones. Veréis que hay información que falta para muchas centrales. Por ejemplo, aunque la [Enipedia](http://enipedia.tudelft.nl/) lista más de 2000 centrales en España, apenas 170 tienen los atributos necesarios para salir en la foto anterior.
* Se pueden consultar más atributos (o propiedades) de las centrales. La lista completa de ellos puede consultarse [aquí](http://enipedia.tudelft.nl/wiki/Using_SPARQL_with_Enipedia) De nuevo, insisto, cuidado: no todas las centrales los tienen todos informados.
* Sería mejor hacer el gráfico con `ggmap`, pero hoy no tengo tiempo.
* Es una lástima que no se pueda garantizar la cuasiexhaustividad de este tipo de fuentes de datos. Se podrían hacer cosas increíbles con una mínima confianza en ellos.
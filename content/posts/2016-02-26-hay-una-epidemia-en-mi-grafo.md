---
author: Carlos J. Gil Bellosta
categories:
- estadística
- r
date: 2016-02-26 07:13:40+00:00
draft: false
lastmod: '2025-04-06T18:55:33.546824'
related:
- 2012-05-10-modelos-exponenciales-para-grafos-aleatorios-ii-modelo-probabilistico.md
- 2012-05-09-modelos-exponenciales-para-grafos-aleatorios-i-motivacion.md
- 2015-05-27-grafos-por-vecindad-en-mapas.md
- 2017-11-27-mas-sobre-correlaciones-espurias-y-mas-sobre-correlacion-y-causalidad.md
- 2020-03-20-casos-de-coronavirus-en-madrid-provincia-un-modelo-un-poco-menos-crudo-basado-en-la-mortalidad-ii.md
tags:
- estadística
- grafos
- igraph
title: ¿Hay una epidemia en mi grafo?
url: /2016/02/26/hay-una-epidemia-en-mi-grafo/
---

Tengo un grafo, `g` cuyas aristas pueden ser cualquier cosa susceptible de _contaminarse_. Me pregunto si la contaminación puede contagiarse a través del grafo. Es decir, si A y B están unidos por una arista y A está contaminado, la probabilidad de que B también lo esté es superior a la normal.

Se me ocurre probar esa hipótesis así:

{{< highlight R >}}
library(igraph)

# mi grafo
g <- erdos.renyi.game(10000,
  p.or.m = 0.001, type="gnp")

min.mean.dist <- function(n){
  # contaminación al azar
  contaminados <- sample(V(g), n)

  # distancias entre aristas contaminadas
  res <- shortest.paths(g,
    v = contaminados, to = contaminados)
  diag(res) <- Inf

  # distancia al contaminado más próximo
  min.dist <- apply(res, 1, min, na.rm = T)

  # y su media
  mean(min.dist)
}

# histograma bajo la hipótesis nula
res <- replicate(100, min.mean.dist(100))
{{< / highlight >}}

El resto son detalles que el lector atento sabrá completar por su cuenta.
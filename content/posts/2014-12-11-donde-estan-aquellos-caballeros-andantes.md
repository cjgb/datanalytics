---
author: Carlos J. Gil Bellosta
date: 2014-12-11 07:13:00+00:00
draft: false
title: ¿Dónde están aquellos caballeros andantes?

url: /2014/12/11/donde-estan-aquellos-caballeros-andantes/
categories:
- nlp
tags:
- nlp
- quijote
---

Pues precedidos del mi favorito de todos ellos, Felixmarte de Hircania, el del desnudo brazo, en

[![felixmarte](/wp-uploads/2014/12/felixmarte.png#center)
](/wp-uploads/2014/12/felixmarte.png#center)

dentro del texto del Quijote. El código para obtener el gráfico anterior es

{{< highlight R >}}
library(qdap)

quijote.raw <- readLines("http://www.gutenberg.org/cache/epub/2000/pg2000.txt",
    encoding = "utf8")

# es posible que necesites esto en Windows:
quijote <- iconv(quijote.raw, from = "utf8", to = "latin1")

quijote <- quijote[-(1:36)]
quijote <- quijote[-(37453:length(quijote))]

dispersion_plot(quijote, c("felixmarte", "amadís",
    "leandís", "bencimarte", "palmerín",
    "olivante", "tirante", "belianís",
    "gironcilio", "lisuarte", "esplandián",
    "roldán", "rodamonte", "florimorte", "platir",                            "tablante"))
{{< / highlight >}}

Tenéis permiso mío para buscar otros términos en otros textos y ver qué pinta tiene la distribución.

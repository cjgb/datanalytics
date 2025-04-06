---
author: Carlos J. Gil Bellosta
categories:
- nlp
date: 2014-12-11 07:13:00+00:00
draft: false
lastmod: '2025-04-06T19:05:41.468738'
related:
- 2018-01-29-donde-estan-las-letras.md
- 2012-09-20-como-votan-los-diputados.md
- 2014-03-27-mapas-cosas-casi-increibles-que-pueden-hacerse-con-r.md
- 2018-11-08-siguen-votando-igual-los-diputados.md
- 2016-05-27-coordenadas-polares-por-doquier.md
tags:
- nlp
- quijote
title: ¿Dónde están aquellos caballeros andantes?
url: /2014/12/11/donde-estan-aquellos-caballeros-andantes/
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
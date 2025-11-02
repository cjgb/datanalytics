---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2017-11-06 08:13:20+00:00
draft: false
lastmod: '2025-04-06T18:57:35.323033'
related:
- 2020-04-03-10k-regresiones-truchas-para-que-cada-cual-elija-la-que-mas-le-cuadre.md
- 2021-10-14-una-nueva-aficion-para-los-proximos-10-15-anos.md
- 2024-05-28-copias-ventas-libro.md
- 2018-12-10-libros-y-el-indice-de-compresibilidad.md
- 2012-06-25-para-los-expertos-en-series-estadisticas-ii.md
tags:
- estadística
- literatura
- supervivencia
- feller
title: La heterogénea distribución temporal de las 100 mejores novelas según Le Monde
url: /2017/11/06/la-heterogenea-distribucion-temporal-de-las-100-mejores-novelas-segun-le-monde/
---

Me sorprende haber leído tantos de [los mejores 100 libros del siglo XX](https://en.m.wikipedia.org/wiki/Le_Monde%27s_100_Books_of_the_Century) según Le Monde. Sobre todo porque no leo ficción  casi en lo que va de siglo y porque, carajo, los libros estupendos que he leído de tapa, como el Análisis Real de Folland o la Introducción a la Teoría de la Probabilidad de Feller parece que no cualifican para esa listeja de textos sin una mala integral preparada por gentecilla de letras.

Me ha interesado no obstante la distribución de su fecha de publicación. Si suponemos uniforme el talento y creciente la población y su nivel educativo, cabría pensar que habría más y más cada década. Deben de operar, sin embargo, causas distintas porque

![](/img/2017/11/distribucion_fecha_publicacion.png#center)

El código, por si a alguno le aprovecha,

{{< highlight R >}}
library(rvest)

res <- read_html("https://en.m.wikipedia.org/wiki/Le_Monde%27s_100_Books_of_the_Century")
res <- html_nodes(res, "table")
res <- html_table(res)

annos <- res[[1]]$Year
annos <- gsub("–.*", "", annos)
annos <- as.numeric(annos)

decadas <- 10 * floor(annos / 10)
decadas[decadas < 1900] <- 1900

barplot(table(decadas), horiz = F, las = 2)
{{< / highlight >}}
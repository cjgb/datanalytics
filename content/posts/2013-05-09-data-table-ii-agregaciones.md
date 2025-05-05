---
author: Carlos J. Gil Bellosta
categories:
- programación
- r
date: 2013-05-09 07:52:45+00:00
draft: false
lastmod: '2025-04-06T18:58:42.322497'
related:
- 2013-05-02-data-table-i-cruces.md
- 2010-09-06-tarea-lectores-resultados.md
- 2014-08-13-mis-procesos-puntuales-con-glm.md
- 2017-09-06-python-y-r-una-perspectiva-markoviana.md
- 2010-05-09-datatables-tablas-con-busqueda-binaria-en-r.md
tags:
- programación
- data.table
- ciencia de datos
- r
title: 'data.table (II): agregaciones'
url: /2013/05/09/data-table-ii-agregaciones/
---

Sigo con mi [lacónica serie sobre `data.table`](https://datanalytics.com/2013/05/02/data-table-i-cruces/).

La protagonista:

{{< highlight R >}}
frases[sample(1:nrow(frases), 3),]
#pos.es pos.en length.es length.en en        es frase          tfe      qjilm          num
#1:     15     43        72        72  i        de  2632 4.881416e-02 0.01369863 6.686871e-04
#2:     33     48        46        48  X    países  5321 2.726146e-06 0.02040816 5.563563e-08
#3:      2     35        53        66 in preguntar  4582 2.424379e-08 0.01492537 3.618476e-10
dim(frases)
#[1] 6340091      10
{{< / highlight >}}

El tiempo:

{{< highlight R >}}
system.time({
    setkey(frases, "frase", "es")
    denominadores <- frases[, sum(num), by = key(frases)]
    setnames(denominadores, c("frase", "es", "den") )
    frases <- merge(frases, denominadores)
    frases$delta <- frases$num / frases$den
})
#user  system elapsed
#5.628   0.208   5.841
{{< / highlight >}}

En particular,

{{< highlight R >}}
system.time( denominadores <- frases[, sum(num), by = key(frases)] )
#user  system elapsed
#0.228   0.000   0.228
{{< / highlight >}}

Increíble, ¿no?
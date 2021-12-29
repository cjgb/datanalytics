---
author: Carlos J. Gil Bellosta
date: 2013-05-09 07:52:45+00:00
draft: false
title: 'data.table (II): agregaciones'

url: /2013/05/09/data-table-ii-agregaciones/
categories:
- programación
- r
tags:
- programación
- data.table
- ciencia de datos
- r
---

Sigo con mi [lacónica serie sobre `data.table`](http://www.datanalytics.com/2013/05/02/data-table-i-cruces/).

La protagonista:

{{< highlight R "linenos=true" >}}
frases[sample(1:nrow(frases), 3),]
#pos.es pos.en length.es length.en en        es frase          tfe      qjilm          num
#1:     15     43        72        72  i        de  2632 4.881416e-02 0.01369863 6.686871e-04
#2:     33     48        46        48  X    países  5321 2.726146e-06 0.02040816 5.563563e-08
#3:      2     35        53        66 in preguntar  4582 2.424379e-08 0.01492537 3.618476e-10
dim(frases)
#[1] 6340091      10
{{< / highlight >}}

El tiempo:

{{< highlight R "linenos=true" >}}
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

{{< highlight R "linenos=true" >}}
system.time( denominadores <- frases[, sum(num), by = key(frases)] )
#user  system elapsed
#0.228   0.000   0.228
{{< / highlight >}}

Increíble, ¿no?

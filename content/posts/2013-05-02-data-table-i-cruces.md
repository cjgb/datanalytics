---
author: Carlos J. Gil Bellosta
categories:
- programación
- r
date: 2013-05-02 07:16:30+00:00
draft: false
lastmod: '2025-04-06T18:56:39.147811'
related:
- 2013-05-09-data-table-ii-agregaciones.md
- 2010-05-09-datatables-tablas-con-busqueda-binaria-en-r.md
- 2010-09-06-tarea-lectores-resultados.md
- 2014-09-19-primer-elemento-de-un-grupo-dentro-de-un-dataframe-de-r.md
- 2014-03-25-totales-agregados-por-bloques-en-tablas.md
tags:
- programación
- ciencia de datos
- r
title: 'data.table (I): cruces'
url: /2013/05/02/data-table-i-cruces/
---

Los protagonistas (tres tablas _grandecitas_):

{{< highlight R >}}
dim(qjilm)
# [1] 3218575 5
dim(tf)
# [1] 6340091 7
dim(tfe)
#[1] 1493772 3

head(qjilm, 2)
#pos.es length.en length.es pos.en qjilm
#1 1 2 1 1 0.8890203
#2 1 2 1 2 0.1109797

head(tf, 2)
#frase es pos.es length.es en pos.en length.en
#1 996 ! 42 42 ! 43 44
#2 1231 ! 37 37 ! 37 38

head(tfe, 2)
#en es tfe
#1 ! ! 4.364360e-01
#2 ! !" 4.945229e-24
{{< / highlight >}}

El objetivo (cruzarlas por los campos comunes):

{{< highlight R >}}
res <- merge(merge(tf, tfe), qjilm)
{{< / highlight >}}

El tiempo (usando `merge`):


{{< highlight R >}}
res <- merge(merge(tf, tfe), qjilm)
#user system elapsed
#442.991 2.496 446.832

dim(res)
#[1] 6340091 9
{{< / highlight >}}

Y con [`data.table`](http://cran.r-project.org/web/packages/data.table/index.html):

{{< highlight R >}}
library(data.table)

system.time({
    res.dt <- merge(data.table( tf,  key = c("en", "es")),
                    data.table( tfe, key = c("en", "es")) )

    res.dt <- merge(
        setkeyv(res.dt,
            cols = c("pos.es", "pos.en", "length.es", "length.en")),
        data.table(qjilm,
            key  = c("pos.es", "pos.en", "length.es", "length.en"))
    )
})
#user system elapsed
#32.070 0.012 32.118

dim(res.dt)
#[1] 6340091 9
{{< / highlight >}}

Y, finalmente, suponiendo que los `data.tables` ya tienen asociado un _índice_ de antemano:


{{< highlight R >}}
tf.dt  <- data.table( tf,  key = c("en", "es"))
tfe.dt <- data.table( tfe, key = c("en", "es"))

system.time( res <- merge(tf.dt, tfe.dt) )
#user system elapsed
#3.464 0.000 3.466

dim(res)
#[1] 6340091 8
{{< / highlight >}}

Resumen:

* Había hecho unas [pruebas con _data.table_](https://datanalytics.com/2010/09/06/536/) previamente que no resultaron del todo satisfactorias.
* Anoche, `data.table` me sacó de un apuro muy serio.
* Ahora soy _fan_.
* Gracias a `data.table`, el límite de tamaño de los conjuntos de datos con los que soy capaz de trabajar razonablemente con R ha crecido en todo un orden de magnitud: ya no me asusta que me hablen de _millones_.
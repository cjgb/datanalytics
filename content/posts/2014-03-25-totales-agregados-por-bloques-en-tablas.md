---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2014-03-25 07:45:50+00:00
draft: false
lastmod: '2025-04-06T19:10:12.517071'
related:
- 2016-07-12-dos-nuevos-tutoriales-sobre-data-table-y-dplyr.md
- 2019-08-05-dplyr-parece-que-prefiere-los-factores.md
- 2013-05-02-data-table-i-cruces.md
- 2022-09-20-tools-etl-memory.md
- 2014-09-24-plyr-dplyr-data-table-que-opinas.md
tags:
- data.table
- dplyr
- plyr
- r
- sql
title: Totales agregados por bloques en tablas
url: /2014/03/25/totales-agregados-por-bloques-en-tablas/
---

En ocasiones uno quiere añadir un total calculado en ciertos bloques a una tabla. Por ejemplo, en la tabla

{{< highlight R >}}
set.seed(1234)
ventas.orig <- data.frame(
    cliente = rep(1:10, each = 5),
    producto = rep(letters[1:5], times = 10),
    importe = rlnorm(50))
{{< / highlight >}}

tenemos clientes, productos e importes. Y nos preguntamos por el porcentaje en términos de importe que cada producto supone para cada cliente.

Una manera natural pero torpe de realizar este cálculo consiste en usar un objeto intermedio y `merge`:

{{< highlight R >}}
library(plyr)
tmp <- ddply(ventas.orig, .(cliente),
    summarize, total = sum(importe))
ventas <- merge(ventas.orig, tmp)
ventas$pct.producto <- 100 * ventas$importe /
    ventas$total
{{< / highlight >}}

No os asustéis, se puede hacer aún peor (p.e., usando `sqldf`). Pero existen dos maneras, cuando menos, de hacerlo mejor. La primera es usando `data.table`.

{{< highlight R >}}
library(data.table)

ventas <- data.table(ventas.orig)
ventas[, total.cliente := sum(importe), by = cliente]
ventas$pct.producto <- 100 * ventas$importe /
    ventas$total.cliente
{{< / highlight >}}

El operador `:=` es el que hace la magia en la segunda línea. Una ventaja de data.table es que [vuela literalmente con conjuntos de datos _semigrandes_](https://datanalytics.com/2013/05/09/data-table-ii-agregaciones/).

También es posible hacerlo todavía más sucintamente con `plyr`:

{{< highlight R >}}
library(plyr)
ventas <- ddply(ventas.orig, .(cliente),
    transform,
    pct.producto = 100 * importe / sum(importe))
{{< / highlight >}}

Una única línea. El problema de `plyr`, sin embargo, es que es ineficiente con conjuntos de datos grandecitos.

Tengo pendiente hacerme con [`dplyr`](http://cran.r-project.org/web/packages/dplyr/index.html). Dicen que combina lo mejor de ambos mundos (`plyr` y `data.table`). Espero que pronto podamos saberlo todos.
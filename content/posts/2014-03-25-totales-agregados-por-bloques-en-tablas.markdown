---
author: Carlos J. Gil Bellosta
date: 2014-03-25 07:45:50+00:00
draft: false
title: Totales agregados por bloques en tablas

url: /2014/03/25/totales-agregados-por-bloques-en-tablas/
categories:
- r
tags:
- data.t
- dplyr
- plyr
- r
- sql
---

En ocasiones uno quiere añadir un total calculado en ciertos bloques a una tabla. Por ejemplo, en la tabla



    <a href="http://inside-r.org/r-doc/base/set.seed">set.seed(1234)
    ventas.orig <- data.frame(cliente = rep(1:10, each = 5),
                           producto = rep(letters[1:5], times = 10),
                           importe = <a href="http://inside-r.org/r-doc/stats/rlnorm">rlnorm(50))



tenemos clientes, productos e importes. Y nos preguntamos por el porcentaje en términos de importe que cada producto supone para cada cliente.

Una manera natural pero torpe de realizar este cálculo consiste en usar un objeto intermedio y `merge`:



    library(<a href="http://inside-r.org/packages/cran/plyr">plyr)
    tmp <- ddply(ventas.orig, .(cliente), summarize, total = sum(importe))
    ventas <- merge(ventas.orig, tmp)
    ventas$pct.producto <- 100 * ventas$importe / ventas$total



No os asustéis, se puede hacer aún peor (p.e., usando `sqldf`). Pero existen dos maneras, cuando menos, de hacerlo mejor. La primera es usando `data.table`.



    library(<a href="http://inside-r.org/packages/cran/data.table">data.table)

    ventas <- <a href="http://inside-r.org/packages/cran/data.table">data.table(ventas.orig)
    ventas[, total.cliente := sum(importe), by = cliente]
    ventas$pct.producto <- 100 * ventas$importe / ventas$total.cliente



El operador `:=` es el que hace la magia en la segunda línea. Una ventaja de data.table es que [vuela literalmente con conjuntos de datos _semigrandes_](http://www.datanalytics.com/2013/05/09/data-table-ii-agregaciones/).

También es posible hacerlo todavía más sucintamente con `plyr`:



    library(<a href="http://inside-r.org/packages/cran/plyr">plyr)
    ventas <- ddply(ventas.orig, .(cliente), transform, pct.producto = 100 * importe / sum(importe))



Una única línea. El problema de `plyr`, sin embargo, es que es ineficiente con conjuntos de datos grandecitos.

Tengo pendiente hacerme con [`dplyr`](http://cran.r-project.org/web/packages/dplyr/index.html). Dicen que combina lo mejor de ambos mundos (`plyr` y `data.table`). Espero que pronto podamos saberlo todos.

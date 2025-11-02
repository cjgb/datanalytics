---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2016-04-08 09:13:23+00:00
draft: false
lastmod: '2025-04-06T18:46:04.683191'
related:
- 2013-02-27-que-ha-pasado-en-el-ibex-durante-el-ultimo-mes.md
- 2013-01-09-el-ibex-35-estilo-gapminder.md
- 2013-02-28-addenda-que-ha-pasado-en-el-ibex-durante-el-ultimo-mes.md
- 2016-05-20-descarga-de-datos-del-ibex-35-y-otros-minuto-a-minuto-en-tiempo-casi-real.md
- 2011-09-09-treemaps-en-r.md
tags:
- clústering
- finanzas
- ibex35
- kmlshape
- r
title: Clústers de trayectorias con la distancia de Fréchet
url: /2016/04/08/clusters-de-trayectorias-con-la-distancia-de-frechet/
---

Los viejos del lugar recordarán [esto](https://datanalytics.com/2013/02/27/que-ha-pasado-en-el-ibex-durante-el-ultimo-mes/), donde agrupo trayectorias usando k-medias _a pelo_.

El paquete [`kmlShape`](https://cran.r-project.org/web/packages/kmlShape/index.html) usa la [distancia de Fréchet](https://en.wikipedia.org/wiki/Fr%C3%A9chet_distance) para hacer algo parecido: buscar trayectorias geométricamente similares.

El código es


{{< highlight R >}}
    library(kmlShape)
    library(tseries)
    library(zoo)
    library(XML)
    library(reshape)
    library(ggplot2)

    foo  <- function(
      simbolo, final = Sys.time(),
      profundidad = 30 * 24 * 3600) {
      precios <- get.hist.quote(
        instrument= simbolo,
        start = final - profundidad,
        end = final, quote=c("AdjClose"),
        provider="yahoo", origin="1970-01-01",
        compression="d", retclass="zoo")
      colnames(precios) <- simbolo
      return(precios)
    }

    # lista de símbolos del ibex

    tmp <- readHTMLTable("http://finance.yahoo.com/q/cp?s=%5EIBEX+Components")[[5]]
    tmp <- as.character(tmp$V1[-(1:6)])

    ibex <- do.call(merge,
      sapply(simbolos, foo, simplify = F))

    ibex.scaled <- data.frame(t(scale(ibex)))
    tmp <- cldsWide(ibex.scaled)

    res <- kmlShape(tmp, 4, toPlot = "none")

    tmp <- data.frame(
      id = rownames(ibex.scaled),
      cluster = res@clusters, ibex.scaled)

    tmp <- melt(tmp, id.vars = c("id", "cluster"))
    tmp$fecha <- as.Date(tmp$variable, "X%Y.%m.%d")

    ggplot(tmp, aes(x=fecha, y=value, group=id)) +
      geom_line() + facet_wrap(~cluster)
{{< / highlight >}}

y el resultado,

![ibex_kmlshape.R](/img/2016/04/ibex_kmlshape.R.png#center)
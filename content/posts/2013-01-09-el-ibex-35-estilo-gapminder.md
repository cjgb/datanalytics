---
author: Carlos J. Gil Bellosta
date: 2013-01-09 07:07:31+00:00
draft: false
title: El Ibex 35 al estilo GapMinder

url: /2013/01/09/el-ibex-35-estilo-gapminder/
categories:
- finanzas
- gráficos
- r
tags:
- finanzas
- gráficos
- mercados financieros
- r
---

Quiero representar hoy la evolución del Ibex 35 a lo largo del año pasado al estilo GapMinder. En concreto, usando un [MotionChart](https://developers.google.com/chart/interactive/docs/gallery/motionchart) de Google.

Primero, bajo los símbolos de los activos del Ibex de Yahoo! Finance:



    library(XML)
    simbolos <- readHTMLTable(htmlParse("http://finance.yahoo.com/q/cp?s=%5EIBEX+Components"))
    simbolos <- as.character(simbolos[[9]]$Symbol)
    simbolos <- gsub("-P", "", simbolos)



Luego, creo una pequeña función y se la aplico a cada símbolo:



    library(tseries)

    foo  <- function( simbolo, final = Sys.time(), profundidad = 365 * 24 * 3600 ){

      tmp <- get.hist.quote(instrument= simbolo, start = final - profundidad,
                                end= final, quote="AdjClose",
                                provider="yahoo", origin="1970-01-01",
                                compression="d", retclass="zoo")

      precios <- as.data.frame(tmp)
      precios$fecha <- index(tmp)
      rownames(precios) <- NULL
      precios$simbolo <- simbolo

      precios$AdjClose <- 100 * precios$AdjClose / precios$AdjClose[1]
      precios$x <- as.numeric(precios$fecha)
      precios$x <- 1 + precios$x - precios$x[1]
      colnames(precios) <- c("precio", "fecha", "simbolo", "dias")

      precios
    }

    res <- sapply(simbolos, foo, simplify = F)
    res <- do.call(rbind, res)



Finalmente, creo el gráfico:



    library(googleVis)

    M <- gvisMotionChart(res, idvar="simbolo", timevar="fecha",
                         xvar = "dias", yvar = "precio",
                         options = list(width = 1200,
                                        showAdvancedPanel=T,
                                        showChartButtons =F,
                                        showSelectListComponent=F,
                                        showXMetricPicker = F,
                                        showYMetricPicker = F))
    plot(M)



El resultado tiene un aspecto similar a la siguiente captura estática:

[![](/wp-uploads/2013/01/ibex35_motionchart.png)
](/wp-uploads/2013/01/ibex35_motionchart.png)

No puedo insertar aquí el gráfico dinámico pero cualquiera que ejecute el código anterior en su máquina lo debería obtener en su propio navegador.

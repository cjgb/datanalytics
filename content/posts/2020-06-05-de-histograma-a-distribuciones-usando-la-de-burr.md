---
author: Carlos J. Gil Bellosta
date: 2020-06-05 09:13:00+00:00
draft: false
title: De histogramas a distribuciones (usando la de Burr)

url: /2020/06/05/de-histograma-a-distribuciones-usando-la-de-burr/
categories:
- estadística
- r
tags:
- burr
- histograma
- distribuciones
- ine
- r
- renta
---

Tengo una entrada perpetuamente pendiente que se pospone, entre otras cosas, porque aún no he encontrado una manera satisfactoria para muestrear histogramas. Una de las vías sería dar con (y ajustar) una distribución subyacente que generase unos histogramas similares.

Hoy voy a contar un ejemplo de cómo puede fallar tal estrategia.

Por un lado he bajado datos de la [distribución de renta en España](https://www.ine.es/jaxiT3/Datos.htm?t=24992#!tabs-tabla) del INE:

![](/wp-uploads/2020/06/distribucion_renta_2018.png#center)

Por otro, me he dejado convencer temporalmente de que la [distribución de Burr ](https://en.wikipedia.org/wiki/Burr_distribution)podría ser conveniente para modelar la distribución de ingresos de los hogares (Wikipedia dixit!).

Así que he corrido

{{< highlight R >}}
library(actuar)
library(pxR)

# descargado de https://www.ine.es/jaxiT3/Datos.htm?t=24992#!tabs-tabla
# el procesamiento de datos se puede omitir si cargas directamente la estructura comentada más abajo
datos <- as.data.frame(read.px("/tmp/24992.px"))

colnames(datos) <- c("periodo", "borrar", "tramo_hasta", "pct")
datos <- datos[, c("tramo_hasta", "pct")]

datos <- datos[datos$tramo != "Total",]

datos$tramo_hasta <- c(500, 1000, 1500, 2000, 2500, 3000, 4500, Inf)
datos$tramo_desde <- c(0, head(datos$tramo_hasta, -1)

datos$acum <- cumsum(datos$pct)
datos$prob <- datos$pct / 100

# structure(list(tramo_hasta = c(500, 1000, 1500, 2000, 2500, 3000,
# 4500, Inf), pct = c(2.46, 11.22, 16.77, 15.99, 15.39, 13.78,
# 19.18, 5.22), tramo_desde = c(0, 500, 1000, 1500, 2000, 2500,
# 3000, 4500), prob = c(0.0246, 0.1122, 0.1677, 0.1599, 0.1539,
# 0.1378, 0.1918, 0.0522)), row.names = 2:9, class = "data.frame")

foo <- function(x){
    p_end <- pburr(datos$tramo_hasta, x[1], x[2], x[3], x[4])
    p_ini <- pburr(datos$tramo_desde, x[1], x[2], x[3], x[4])
    probs <<- p_end - p_ini
    error <- sum((probs - datos$prob)^2 / sum(datos$prob))
    print(error)
    error
}

res <- optim(c(1,1, 1, 1), foo)

curve(dburr(x, res$par[1], res$par[2], res$par[3], res$par[4]),
        from = 0, to = 5000)
{{< / highlight >}}

y me he convencido de que no.

**Addenda:** Varios meses después ensayé otro procedimiento para tratar de resolver el mismo problema. Véase [esto](http://www.datanalytics.com/2020/09/10/distribuciones-de-renta-solo-de-renta-a-partir-de-histogramas/).


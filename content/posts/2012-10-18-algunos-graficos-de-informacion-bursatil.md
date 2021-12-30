---
author: Carlos J. Gil Bellosta
date: 2012-10-18 07:07:41+00:00
draft: false
title: Algunos gráficos de información bursátil

url: /2012/10/18/algunos-graficos-de-informacion-bursatil/
categories:
- finanzas
- r
tags:
- finanzas
- gráficos
- r
- coursera
- mooc
---

Hoy voy a presentar algunos gráficos de información bursátil adaptados a partir de código de Eric Zivot, el instructor del curso [_Introduction to Computational Finance and Financial Econometrics_](http://class.coursera.org/compfinance-2012-001) que estoy siguiendo (un poco como puta por rastrojo: siempre me las arreglo para resolver los ejercicios en el último minuto y antes de haber revisado la teoría) en Coursera.

Por si pueden servir de algo a otros, los reproduzco y comento aquí. Primero, hay que importar las librerías necesarias:

{{< highlight R "linenos=true" >}}
library(PerformanceAnalytics)
library(zoo)
library(tseries)
{{< / highlight >}}

Luego, descargar datos de cotizaciones (de Telefónica, cuyo símbolo es TEF.MC) de Yahoo.

{{< highlight R "linenos=true" >}}
precios.TEF <- get.hist.quote(
    instrument="TEF.MC", start="1998-01-01",
    end="2012-10-15", quote="AdjClose",
    provider="yahoo", origin="1970-01-01",
    compression="m", retclass="zoo")
rent.TEF <- diff(log(precios.TEF))
{{< / highlight >}}

Nótese que estoy solicitando datos desde 1998 hasta el 15 de octubre de 2012. Además, sólo una observación por mes (a través de la opción `compression`). Finalmente, de las varias columnas de información que ofrece Yahoo (precio de apertura, cierre, máximo, mínimo, etc.) me quedo con el `AdjClose`, es decir, el cierre ajustado. Es el precio que incluye (o tiene en cuenta) fenómenos de relevancia económica pero no reflejados en los precios de cierre tales como los dividendos, los _splits_, etc.

Haciendo

{{< highlight R "linenos=true" >}}
chart.TimeSeries(rent.TEF, legend.loc = "bottom", main = "Rentabilidad mensual de TEF")
{{< / highlight >}}

se obtiene entonces

[![](/wp-uploads/2012/10/rentabilidad_TEF-300x245.png#center)
](/wp-uploads/2012/10/rentabilidad_TEF.png#center)

Alternativamente, también puede hacerse

{{< highlight R "linenos=true" >}}
chart.Bar(rent.TEF, legend.loc = "bottom", main = "Rentabilidad mensual de TEF")
{{< / highlight >}}

para obtener

[![](/wp-uploads/2012/10/rentabilidad_TEF_barras-300x245.png#center)
](/wp-uploads/2012/10/rentabilidad_TEF_barras.png#center)

La función `chart.CumReturns` con los parámetros que aparecen en

{{< highlight R "linenos=true" >}}
chart.CumReturns(
    diff(precios.TEF)/lag(precios.TEF, k = -1),
    legend.loc="topleft", wealth.index = TRUE,
    main="Valor actual de una inversión de 1€")
{{< / highlight >}}

representa el valor a lo largo del tiempo de un euro invertido al principio de la serie temporal, es decir, este ruinoso negocio:

[![](/wp-uploads/2012/10/rentabilidad_1_euro_TEF-300x245.png#center)
](/wp-uploads/2012/10/rentabilidad_1_euro_TEF.png#center)

Finalmente, haciendo

{{< highlight R "linenos=true" >}}
ret.mat <- coredata(rent.TEF)

# here are the 4 panel plots
par(mfrow = c(2, 2))

hist(ret.mat[,1],
    main = "Rentabilidad Mensual de TEF",
    xlab = "VBLTX", probability = TRUE, col = "slateblue1")
boxplot(ret.mat[,1],outchar=T,
    main="Boxplot", col="slateblue1")
plot(density(ret.mat[,1]),
    type = "l", main = "Densidad suavizada",
    xlab = "rentabilidad mensual",
    ylab = "estimación de la densidad",
    col = "slateblue1")
qqnorm(ret.mat[,1], col = "slateblue1")
qqline(ret.mat[,1])

par(mfrow = c(1, 1))
{{< / highlight >}}

se construye el gráfico

[![](/wp-uploads/2012/10/analisis_normalidad-300x300.png#center)
](/wp-uploads/2012/10/analisis_normalidad.png#center)

que permite investigar, por ejemplo, si es o no sensato suponer que las rentabilidades mensuales siguen una ley normal.


---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2016-04-20 09:13:32+00:00
draft: false
lastmod: '2025-04-06T19:09:05.265249'
related:
- 2012-07-05-afecto-el-fraude-de-barclays-al-libor.md
- 2016-01-12-que-significa-vinculados-de-forma-muy-significativa.md
- 2014-02-18-el-yuyuplot-en-perspectiva.md
- 2011-08-09-2452.md
- 2010-10-29-c2a1que-mala-suerte-tengo-con-las-anomalias.md
tags:
- botín
- causalidad
- causalimpact
- r
- santander
title: El impacto causal del óbito del Sr. Botín en la cotización bursátil del benemérito
  Banco de Santander
url: /2016/04/20/el-impacto-causal-del-obito-del-sr-botin-en-la-cotizacion-bursatil-del-benemerito-banco-de-santander/
---

El [Sr. Botín](https://es.wikipedia.org/wiki/Emilio_Bot%C3%ADn), presidente que fue del Banco de Santander, falleció el 2014-09-10. Cabe preguntarse por el [impacto causal _à la Google_](https://datanalytics.com/2014/09/23/el-impacto-causal-de-google/) de no continuidad de su gestión a cargo de dicha institución.

Comienzo pues.

Primero los datos:


{{< highlight R >}}
library(tseries)
library(CausalImpact)

santander <- get.hist.quote(instrument="san.mc",
    start= Sys.Date() - 365*3,
    end= Sys.Date(), quote="AdjClose",
    provider="yahoo", origin="1970-01-01",
    compression="d", retclass="zoo")

bbva <- get.hist.quote(instrument="bbva.mc",
    start= Sys.Date() - 365*3,
    end= Sys.Date(), quote="AdjClose",
    provider="yahoo", origin="1970-01-01",
    compression="d", retclass="zoo")

ibex <- get.hist.quote(instrument="^IBEX",
    start= Sys.Date() - 365*3,
    end= Sys.Date(), quote="AdjClose",
    provider="yahoo", origin="1970-01-01",
    compression="d", retclass="zoo")

obito.botin <- as.Date("2014-09-10")

cotizaciones <- cbind(santander, bbva, ibex)
cotizaciones <- cotizaciones[!is.na(cotizaciones$AdjClose.ibex)]
{{< / highlight >}}


Con lo anterior, he bajado las cotizaciones diarias de las acciones del Banco de Santander, las del BBVA y la del IBEX 35 durante los últimos tres años. Eso deja la fecha de la muerte del Sr. Botín, aproximadamente, en la mitad.

Los datos que descargo de Yahoo! son el [cierre ajustado](https://help.yahoo.com/kb/SLN2311.html), que tiene en cuenta el efecto de los dividendos, los _splits_, etc. en las distintas cotizaciones.

Ahora voy a ver qué me cuenta [`CausalImpact`](https://google.github.io/CausalImpact/CausalImpact.html), i.e.,


{{< highlight R >}}
impact <- CausalImpact(cotizaciones,
    c(min(index(cotizaciones)), obito.botin - 1),
    c(obito.botin, max(index(cotizaciones))))
{{< / highlight >}}

sobre el efecto causal motivo de esta entrada. Lo que hace la función, lo miráis por ahí. Pero mirad los resultados:

{{< highlight R >}}
plot(impact, metrics = c("original", "pointwise"))
{{< / highlight >}}

genera

![causal_impact_santander](/img/2016/04/causal_impact_santander.png#center)

que indica (y `summary(impact)` cuantifica) cómo, de acuerdo con los tejemanejes del paquete en cuestión, parece haber un efecto lesivo para los intereses de los accionistas muy significativo.

Y ahora, las concomitancias:

* Esta entrada debe mucho a una alumna mía que prefiere cuyo nombre prefiere que no figure porque trabaja en una empresa del susodicho grupo.
* La causalidad es problemática y pudiera ser, incluso, en dirección contraria (que la muerte se debiese a...)
* Abundando en lo anterior, dada la complejidad del mundo en que vivimos, es plausible que la causa fuese otra.
* Me habría sentido más cómodo [estudiando `diff(cotizaciones)` en lugar de `cotizaciones`](https://datanalytics.com/2016/04/11/y-viene-del-espanol-tu/), pero en tal caso el p-valor se crece más allá del 0.05.
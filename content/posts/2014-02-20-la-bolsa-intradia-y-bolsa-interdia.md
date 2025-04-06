---
author: Carlos J. Gil Bellosta
categories:
- finanzas
- r
date: 2014-02-20 08:29:43+00:00
draft: false
lastmod: '2025-04-06T19:04:25.199786'
related:
- 2011-12-27-el-lucero-del-alba.md
- 2013-02-27-que-ha-pasado-en-el-ibex-durante-el-ultimo-mes.md
- 2013-01-09-el-ibex-35-estilo-gapminder.md
- 2010-10-29-c2a1que-mala-suerte-tengo-con-las-anomalias.md
- 2013-02-28-addenda-que-ha-pasado-en-el-ibex-durante-el-ultimo-mes.md
tags:
- finanzas
- ibex35
- intradiario
- r
title: La bolsa intradía y bolsa interdía
url: /2014/02/20/la-bolsa-intradia-y-bolsa-interdia/
---

El IBEX 35 abre todas las mañanas a un precio y cierra a otro. El precio de apertura de un día no es necesariamente igual al del cierre del siguiente. Por lo tanto, la variación del índice en una jornada completa de 24 horas es igual a la suma de las variaciones dentro y fuera del horario de cotización.

Dicho lo cual:

* Juan _compra el IBEX_ todos los días a primera hora y lo vende en el último minuto.
* Del otro lado, Pedro lo compra en el último minuto y se lo vende (¡a Juan!) justo al abrir la bolsa al día siguiente.

Juan y Pedro llevan operando así desde el 1 de enero de 2000. ¿Cuál de los dos se ha llevado el gato al agua? Veámoslo:

{{< highlight R >}}
library(tseries)
library(zoo)

ibex <- get.hist.quote(instrument = "^ibex",
    start = '2000-01-01', end = '2014-02-19')

diurno   <- ibex$Close - ibex$Open
nocturno <- ibex$Open - lag(ibex$Close, -1)

acumulado.diurno   <- cumsum(diurno)
acumulado.nocturno <- cumsum(nocturno)

res <- cbind(dia = acumulado.diurno,
    noche = acumulado.nocturno)
plot(res,
    main = "IBEX 35: diferencias de precio intradía / entre sesión")
{{< / highlight >}}

El código anterior produce

[![ibex_intraday](/wp-uploads/2014/02/ibex_intraday.png#center)
](/wp-uploads/2014/02/ibex_intraday.png#center)

que muestra cómo Juan, que compra durante el día, lleva perdidos 8500 euros mientras que Pedro ha ganado casi 7000.

Curioso fenómeno, ¿no?
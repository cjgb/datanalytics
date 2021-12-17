---
author: Carlos J. Gil Bellosta
date: 2014-02-20 08:29:43+00:00
draft: false
title: La bolsa intradía y bolsa interdía

url: /2014/02/20/la-bolsa-intradia-y-bolsa-interdia/
categories:
- finanzas
- r
tags:
- finanzas
- ibex
- intradiario
- r
---

El IBEX 35 abre todas las mañanas a un precio y cierra a otro. El precio de apertura de un día no es necesariamente igual al del cierre del siguiente. Por lo tanto, la variación del índice en una jornada completa de 24 horas es igual a la suma de las variaciones dentro y fuera del horario de cotización.

Dicho lo cual:



	  * Juan _compra el IBEX_ todos los días a primera hora y lo vende en el último minuto.
	  * Del otro lado, Pedro lo compra en el último minuto y se lo vende (¡a Juan!) justo al abrir la bolsa al día siguiente.

Juan y Pedro llevan operando así desde el 1 de enero de 2000. ¿Cuál de los dos se ha llevado el gato al agua? Veámoslo:



    library(<a href="http://inside-r.org/packages/cran/tseries">tseries)
    library(<a href="http://inside-r.org/packages/cran/zoo">zoo)

    ibex <- get.hist.quote(instrument = "^ibex",
                           <a href="http://inside-r.org/r-doc/stats/start">start = '2000-01-01', end = '2014-02-19')

    diurno   <- ibex$Close - ibex$Open
    nocturno <- ibex$Open - <a href="http://inside-r.org/r-doc/stats/lag">lag(ibex$Close, -1)

    acumulado.diurno   <- cumsum(diurno)
    acumulado.nocturno <- cumsum(nocturno)

    res <- cbind(dia = acumulado.diurno,
                 noche = acumulado.nocturno)
    plot(res,
         main = "IBEX 35: diferencias de precio intradía / entre sesión")



El código anterior produce

[![ibex_intraday](/wp-uploads/2014/02/ibex_intraday.png)
](/wp-uploads/2014/02/ibex_intraday.png)

que muestra cómo Juan, que compra durante el día, lleva perdidos 8500 euros mientras que Pedro ha ganado casi 7000.

Curioso fenómeno, ¿no?

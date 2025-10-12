---
author: Carlos J. Gil Bellosta
categories:
- estadística
- finanzas
date: 2010-10-29 00:16:28+00:00
lastmod: '2025-04-06T18:49:43.361311'
related:
- 2014-02-18-el-yuyuplot-en-perspectiva.md
- 2012-07-05-afecto-el-fraude-de-barclays-al-libor.md
- 2012-10-18-algunos-graficos-de-informacion-bursatil.md
- 2013-02-27-que-ha-pasado-en-el-ibex-durante-el-ultimo-mes.md
- 2016-11-16-detras-de-la-deteccion-de-anomalias-en-series-temporales.md
tags:
- finanzas
- r
- outliers
- paquetes
title: ¡Qué mala suerte tengo con las anomalías!
url: /2010/10/29/que-mala-suerte-tengo-con-las-anomalias/
---

El siempre muy benéfico Banco de Santander me ha proporcionado ---onerosamente: veráse el porqué--- un conjunto de datos con el que ilustrar a los lectores de este blog en el uso del paquete `outliers` de R. Los datos son los siguientes:

{{< highlight R >}}
dia <- 17:26
precio <- 10 + c( 22, 21, 39, 18, 24, 26, 26,26,29, 28 ) / 100
{{< / highlight >}}

Los días son los discurridos desde que di una orden de adquisición de un fondo de inversión a través de dicha entidad financiera hasta que tuve constancia de que se había completado: el dinero se había adeudado de la cuenta corriente y las participaciones, aparecían listadas en la cuenta de valores. El precio contiene los valores liquidativos diarios del fondo durante tales días. He aquí su representación gráfica:

[![](/wp-uploads/2010/10/precios_diarios_activo.png#center)
](/wp-uploads/2010/10/precios_diarios_activo.png#center)

El banco ---insistio en el calificativo de benéfico--- podía haber adquirido las participaciones en cualquiera de los días que median entre el primero y el último. Curiosamente, éstas fueron adquiridas si no en el día, al menos sí al precio de cotización que los más sagaces de mis lectores estarán intuyendo.

Voy a tratar de ver hasta qué punto es atípico ese valor.

Utilizando el paquete `outliers` de R, podemos aplicar varias pruebas sobre este conjunto de datos para ver hasta qué punto es son plausibles los valores más aparentemente anómalos de la lista. Habría que tener en cuenta que los valores tienen una estructura temporal que tal debiese ser reconocida en el análisis. También que el hecho de ser _anómalo_ depende mucho de la distribución subyacente de los datos (esta frase es sumamente ambigua y espero poder volver sobre ella pronto en este blog) y los métodos que se van a considerar a continuación suponen cierto grado de normalidad (por ejemplo, el de [Grubbs](http://en.wikipedia.org/wiki/Grubbs'_test_for_outliers)).

Pero ignoraremos ambas consideraciones: de acuerdo con ciertas teorías simplificadoras (que yo simplifico aún más), el precio de un activo sigue una distribución en el tiempo algo así como


$$ P(t) = \exp( \mu t + \sigma B(t) $$


donde $\mu$ está relacionado con la tendencia creciente del mercado y $B(t)$ es un movimiento browniano. En periodos de tiempo cortos, las variaciones de precios son (muy) aproximadamente normales. Así que volviendo a R,

{{< highlight R >}}
dixon.test( precio )

#    Dixon test for outliers
#
#data:  precio
#Q = 0.5556, p-value = 0.03761
#alternative hypothesis: highest value 10.39 is an outlier

grubbs.test( precio )

#    Grubbs test for one outlier
#
#data:  precio
#G = 2.3042, U = 0.3445, p-value = 0.02268
#alternative hypothesis: highest value 10.39 is an outlier
 {{< / highlight >}}

¡Ambas pruebas (por lo pequeño de los p-valores) parecen indicar que algo extraño sucedió en la cotización del día 19!
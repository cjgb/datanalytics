---
author: Carlos J. Gil Bellosta
categories:
- números
date: 2010-09-29 01:56:54+00:00
draft: false
lastmod: '2025-04-06T19:03:04.907459'
related:
- 2012-03-29-otra-de-huelgas.md
- 2017-12-04-la-magnitud-de-la-sequia.md
- 2018-10-22-mas-sobre-las-proyecciones-de-poblacion-del-ine.md
- 2014-07-17-facetas-para-entender-tal-vez-la-evolucion-del-paro.md
- 2012-09-05-los-principales-problemas-de-espana.md
tags:
- números
title: Huelga el título hoy
url: /2010/09/29/huelga-el-titulo-hoy/
---

{{< highlight R >}}
dat <- read.table("http://www.datanalytics.com/uploads/jornadas_huelga.csv", header = T)
huelgas <- as.numeric( dat )
huelgas <- ts( huelgas, start = 1990, frequency = 12 )
plot( huelgas / 1000, xlab = "mes", ylab="", main = "Jornadas de huelga por mes en España (en miles)" )
{{< / highlight >}}


[![](/wp-uploads/2010/09/jornadas_huelga_espana.png#center)
](/wp-uploads/2010/09/jornadas_huelga_espana.png#center)



La fuente, el [INE](http://www.ine.es/jaxi/tabla.do?path=/t38/bme2/t22/a063/l0/&file=0202009.px&type=pcaxis&L=0).
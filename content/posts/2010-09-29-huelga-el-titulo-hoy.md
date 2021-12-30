---
author: Carlos J. Gil Bellosta
date: 2010-09-29 01:56:54+00:00
draft: false
title: Huelga el título hoy

url: /2010/09/29/huelga-el-titulo-hoy/
categories:
- números
tags:
- números
---


{{< highlight R "linenos=true" >}}
dat <- read.table("http://www.datanalytics.com/uploads/jornadas_huelga.csv", header = T)
huelgas <- as.numeric( dat )
huelgas <- ts( huelgas, start = 1990, frequency = 12 )
plot( huelgas / 1000, xlab = "mes", ylab="", main = "Jornadas de huelga por mes en España (en miles)" )
{{< / highlight >}}


[![](/wp-uploads/2010/09/jornadas_huelga_espana.png#center)
](/wp-uploads/2010/09/jornadas_huelga_espana.png#center)



La fuente, el [INE](http://www.ine.es/jaxi/tabla.do?path=/t38/bme2/t22/a063/l0/&file=0202009.px&type=pcaxis&L=0).

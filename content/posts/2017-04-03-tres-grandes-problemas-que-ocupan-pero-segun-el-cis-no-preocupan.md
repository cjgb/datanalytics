---
author: Carlos J. Gil Bellosta
categories:
- estadística
- r
date: 2017-04-03 08:13:33+00:00
draft: false
lastmod: '2025-04-06T18:47:59.267624'
related:
- 2012-09-05-los-principales-problemas-de-espana.md
- 2010-11-25-transforma-los-graficos-de-espana.md
- 2018-10-17-los-tres-retos-de-la-inferencia-estadistica.md
- 2016-10-05-barometros-del-cis-con-r.md
- 2016-12-12-un-muy-cuestinoable-analisis-de-lo-de-pisa.md
tags:
- cis
- encuestas
- estadística
- r
title: Tres grandes problemas que ocupan pero, según el CIS, no preocupan
url: /2017/04/03/tres-grandes-problemas-que-ocupan-pero-segun-el-cis-no-preocupan/
---

[Plañe el periodista](http://www.bez.es/168888980/Los-tres-graves-problemas-que-menos-preocupan-a-los-espanoles.html) porque dizque hay tres graves problemas que, a pesar de lo que ocupan (en los medios), a la hora del CIS, no preocupan.

_Aggiorno_ una [vieja entrada](https://datanalytics.com/2012/09/05/los-principales-problemas-de-espana/) para ver, por ejemplo, cómo ha variado en los últimos años la preocupación de los encuestados por el CIS acerca de uno de los tres graves problemas:

![](/wp-uploads/2017/04/cis_violencia_mujer.png#center)

De hecho, el porcentaje que se muestra indica la proporción de los encuestados que mencionaron el asunto como uno de los tres principales problemas de España. La pregunta, de respuesta abierta, aparece así formulada en los cuestionarios:

>¿Cuál es, a su juicio, el principal problema que existe actualmente en España? ¿Y el segundo? ¿Y el tercero?

El análisis de los otros dos graves problemas a los que se refiere el periodista, los propongo como ejercicio. Como pista, el código:

{{< highlight R >}}
library(rvest)
library(zoo)
library(xts)

cis.url <- "http://www.cis.es/cis/export/sites/default/-Archivos/Indicadores/documentos_html/TresProblemas.html"
tmp <- read_html(cis.url)
tmp <- html_nodes(tmp, "table")
cis.tab <- html_table(tmp[[2]], fill = TRUE)

nr <- nrow(cis.tab)
nc <- ncol(cis.tab)

fechas <- colnames(cis.tab)[-1]
fechas <- as.Date(paste("15", fechas, sep = ""), format = "%d%b%y")

mi.tema <- cis.tab[grep("violencia contra", cis.tab[,1]), -1]
mi.tema <- as.numeric(mi.tema)
mi.tema <- zoo(mi.tema, order.by = fechas)
mi.tema <- mi.tema[!is.na(mi.tema)]

plot(as.xts(mi.tema),
        main = "Preocupación por la violencia contra la mujer (CIS)",
        ylab = "% de los encuestados")
{{< / highlight >}}
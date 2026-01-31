---
author: Carlos J. Gil Bellosta
categories:
- finanzas
- r
date: 2016-05-20 08:13:54+00:00
noindex: true
lastmod: '2025-04-06T18:57:40.266835'
related:
- 2013-01-09-el-ibex-35-estilo-gapminder.md
- 2014-04-24-aventuras-de-web-scraping-como-bajarse-todo-el-boe.md
- 2013-02-27-que-ha-pasado-en-el-ibex-durante-el-ultimo-mes.md
- 2013-02-28-addenda-que-ha-pasado-en-el-ibex-durante-el-ultimo-mes.md
- 2016-04-08-clusters-de-trayectorias-con-la-distancia-de-frechet.md
tags:
- bolsa
- finanzas
- httr
- json
- plyr
- r
- ibex35
- webscraping
title: Descarga de datos del Ibex 35 (¿y otros?) minuto a minuto en tiempo (casi)
  real
url: /2016/05/20/descarga-de-datos-del-ibex-35-y-otros-minuto-a-minuto-en-tiempo-casi-real/
---

El código es

{{< highlight R >}}
library(httr)
library(plyr)
 
base.url <- "http://www.infobolsa.es/1/wtdb/ChartIntraday"
 
res <- POST(base.url,
            body = list(mv = "M SAN",
                        date = "20160518",
                        compressionMult = 1,
                        isSession = 1))
 
dat <- content(res, as = "parsed",
                type = "application/json")
 
dat <- dat$answer$LST$TV$T09
dat <- ldply(dat, unlist)
{{< / highlight >}}

Los _mutatis mutandis_, si alguien tiene la gentileza, en los comentarios.
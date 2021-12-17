---
author: Carlos J. Gil Bellosta
date: 2016-05-20 08:13:54+00:00
draft: false
title: Descarga de datos del Ibex 35 (¿y otros?) minuto a minuto en tiempo (casi)
  real

url: /2016/05/20/descarga-de-datos-del-ibex-35-y-otros-minuto-a-minuto-en-tiempo-casi-real/
categories:
- finanzas
- r
tags:
- bolsa
- finanzas
- httr
- json
- plyr
- r
---

El código es








    library(httr)
    library(<a href="http://inside-r.org/packages/cran/plyr">plyr)
     
    base.url <- "http://www.infobolsa.es/1/wtdb/ChartIntraday"
     
    res <- POST(base.url,
                body = list(mv = "M SAN",
                            date = "20160518",
                            compressionMult = 1,
                            isSession = 1))
     
    dat <- content(res, <a href="http://inside-r.org/r-doc/methods/as">as = "parsed",
                   type = "application/json")
     
    dat <- dat$answer$LST$TV$T09
    dat <- ldply(dat, unlist)








Los _mutatis mutandis_, si alguien tiene la gentileza, en los comentarios.

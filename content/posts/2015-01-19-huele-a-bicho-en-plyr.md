---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2015-01-19 07:13:36+00:00
noindex: true
lastmod: '2025-04-06T19:00:33.117271'
related:
- 2019-08-05-dplyr-parece-que-prefiere-los-factores.md
- 2014-03-25-totales-agregados-por-bloques-en-tablas.md
- 2010-04-21-para-que-copien-peguen-y-disfruten.md
- 2016-07-12-dos-nuevos-tutoriales-sobre-data-table-y-dplyr.md
- 2017-12-11-cuidado-con-los.md
tags:
- r
- bugs
- dplyr
title: Huele a bicho (en plyr)
url: /2015/01/19/huele-a-bicho-en-plyr/
---

{{< highlight R >}}
library(plyr)

dat <- data.frame( a = sample(c("x", "y"),    100, replace = T),
                    b = sample(c(TRUE, FALSE), 100, replace = T))

ddply(dat, .(a), summarize, b = sum(b), no.b = sum(!b))
ddply(dat, .(a), summarize, no.b = sum(!b), b = sum(b))
{{< / highlight >}}

Huele a bicho, ¿verdad?
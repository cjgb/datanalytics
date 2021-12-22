---
author: Carlos J. Gil Bellosta
date: 2015-01-19 07:13:36+00:00
draft: false
title: Huele a bicho (en plyr)

url: /2015/01/19/huele-a-bicho-en-plyr/
categories:
- r
tags:
- r
- bugs
- dplyr
---

{{< highlight R "linenos=true" >}}
library(plyr)

dat <- data.frame( a = sample(c("x", "y"),    100, replace = T),
                    b = sample(c(TRUE, FALSE), 100, replace = T))

ddply(dat, .(a), summarize, b = sum(b), no.b = sum(!b))
ddply(dat, .(a), summarize, no.b = sum(!b), b = sum(b))
{{< / highlight >}}

Huele a bicho, ¿verdad?

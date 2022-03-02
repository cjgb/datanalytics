---
author: Carlos J. Gil Bellosta
date: 2017-06-07 08:13:26+00:00
draft: false
title: 'Funcionalidades infravaloradas de R: los corchetes'

url: /2017/06/07/funcionalidades-infravaloradas-de-r-los-corchetes/
categories:
- r
tags:
- r
- trucos
---

![](/wp-uploads/2017/06/corchete.jpg)


[Ad]Mirad esta pequeña maravilla de código:

{{< highlight R >}}
n <- 100
dat <- data.frame(
  y = rnorm(100),
  x = sample(letters[1:3], n, replace = T)
  )

medias <- tapply(dat$y, dat$x, mean)
dat$x.trans <- medias[dat$x]

head(dat)
{{< / highlight >}}

El corchete está manifiestamente infravalorado.

---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2017-06-07 08:13:26+00:00
draft: false
lastmod: '2025-04-06T19:06:45.707624'
related:
- 2010-04-21-para-que-copien-peguen-y-disfruten.md
- 2012-01-12-cosa-prodigiosa-sin-palabras-i.md
- 2014-10-16-aprende-r-con-swirl.md
- 2010-10-26-a-vueltas-con-los-fractales.md
- 2017-04-05-etsa-es-una-edntara-a-pubrea-de-roreetcs-cnctoaumes.md
tags:
- r
- trucos
title: 'Funcionalidades infravaloradas de R: los corchetes'
url: /2017/06/07/funcionalidades-infravaloradas-de-r-los-corchetes/
---

![](/img/2017/06/corchete.jpg)


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
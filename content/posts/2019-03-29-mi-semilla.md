---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2019-03-29 09:13:11+00:00
draft: false
lastmod: '2025-04-06T19:05:46.906795'
related:
- 2010-04-21-para-que-copien-peguen-y-disfruten.md
- 2012-01-12-cosa-prodigiosa-sin-palabras-i.md
- 2013-11-22-un-pequeno-problema-de-probabilidad.md
- 2020-06-15-cuidado-con-la-aleatoriedad-pochola.md
- 2010-04-14-la-opinion-sobre-r-de-una-pobre-senora.md
tags:
- r
- semilla
- random
title: Mi semilla
url: /2019/03/29/mi-semilla/
---

{{< highlight R >}}
suppressWarnings(set.seed(exp(pi * complex(imaginary = 1))))
runif(1)
#[1] 0.4866672
set.seed(-1)
runif(1)
#[1] 0.4866672
{{< / highlight >}}

**Coda:** ¿De qué si no creéis que iba esto?
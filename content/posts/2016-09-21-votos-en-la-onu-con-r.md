---
author: Carlos J. Gil Bellosta
categories:
- números
- r
date: 2016-09-21 08:13:25+00:00
draft: false
lastmod: '2025-04-06T19:10:08.755804'
related:
- 2018-11-08-siguen-votando-igual-los-diputados.md
- 2012-09-20-como-votan-los-diputados.md
- 2018-10-29-enlaces-parasociologicos.md
- 2016-05-09-encuestas-electorales-medios-y-sesgos-ii.md
- 2016-07-04-gestion-de-la-mendacidad-encuestoelectoral-los-numeros.md
tags:
- onu
- r
- unvotes
- política
title: Votos en la ONU con R
url: /2016/09/21/votos-en-la-onu-con-r/
---

Inspirado por [esto](http://enelmargen.org/datascience/un-voting-patterns/) he generado

![votos_onu](/img/2016/09/votos_onu.png#center)

usando

{{< highlight R >}}
library(unvotes)
library(reshape2)
library(gplots)

dat <- un_votes
levels(dat$vote) <- c("0", "-1", "1")
dat$vote <- as.numeric(as.character(dat$vote))
dat <- dcast(dat, rcid ~ country, value.var = "vote")
dat$rcid <- NULL
dat <- as.matrix(dat)
res <- cov(dat, use = "pairwise.complete.obs")

heatmap(res)
{{< / highlight >}}

Se me olvidaba: el gráfico se refiere a los votos de los distintos países en la ONU.

Tal vez alguien quiera poner la lupa en algún país concreto. O explorar esos grupos de países que se ven tan bien avenidos. O, usando otros conjuntos de datos alternativos contenidos en el [paquete `unvotes`](https://github.com/dgrtwo/unvotes), hacer un estudio por años o por temas concretos. O...

Y para terminar, tal como solicita el autor del paquete, cito:

> Erik Voeten "Data and Analyses of Voting in the UN General Assembly" Routledge Handbook of International Organization, edited by Bob Reinalda (published May 27, 2013)

Faltaría más.
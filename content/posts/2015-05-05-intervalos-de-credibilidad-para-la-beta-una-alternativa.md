---
author: Carlos J. Gil Bellosta
categories:
- estadística
- r
date: 2015-05-05 08:13:44+00:00
draft: false
lastmod: '2025-04-06T18:57:17.335930'
related:
- 2015-04-27-intervalos-de-credibilidad-para-la-distribucion-beta.md
- 2014-08-13-mis-procesos-puntuales-con-glm.md
- 2018-10-23-abc-2.md
- 2016-02-04-y-termino-con-lo-de-los-intervalos.md
- 2017-04-12-experimentos-con-extremely-small-data-la-media-muestral-de-pocas-betas.md
tags:
- beta
- estadística bayesiana
- r
title: 'Intervalos de credibilidad para la beta: una alternativa'
url: /2015/05/05/intervalos-de-credibilidad-para-la-beta-una-alternativa/
---

A partir de los comentarios de Olivier Núñez a mi [entrada anterior casi homónima](http://www.datanalytics.com/2015/04/27/intervalos-de-credibilidad-para-la-distribucion-beta/), se nos ha ocurrido a ambos de forma independiente y simultánea una manera alternativa de calcular el intervalo: minimizando su longitud.

{{< highlight R >}}
a <- 3
b <- 5
alfa <- 0.05

# versión de la entrada anterior:
f <- function(x){
  (dbeta(x[2], a, b) - dbeta(x[1], a, b))^2 +
    (pbeta(x[2], a, b) - pbeta(x[1], a, b) -1 +  alfa)^2
}

res <- optim(c(a/(a+b), a/(a+b)), f)
res$par
#[1] 0.08052535 0.68463436

# nueva versión
f.alt <- function(x){
  qbeta(x+0.95, a, b) - qbeta(x, a, b)
}

res.alt <- optim(0.025, f.alt)
qbeta(c(res.alt$par, res.alt$par + 0.95), a, b)
#[1] 0.08054388 0.68464900
{{< / highlight >}}
---
author: Carlos J. Gil Bellosta
date: 2015-05-05 08:13:44+00:00
draft: false
title: 'Intervalos de credibilidad para la beta: una alternativa'

url: /2015/05/05/intervalos-de-credibilidad-para-la-beta-una-alternativa/
categories:
- estadística
- r
tags:
- beta
- estadística bayesiana
- r
---

A partir de los comentarios de Olivier Núñez a mi [entrada anterior casi homónima](http://www.datanalytics.com/2015/04/27/intervalos-de-credibilidad-para-la-distribucion-beta/), se nos ha ocurrido a ambos de forma independiente y simultánea una manera alternativa de calcular el intervalo: minimizando su longitud.



    a <- 3
    b <- 5
    alfa <- 0.05

    # versión de la entrada anterior:
    f <- function(x){
      (dbeta(x[2], a, b) - dbeta(x[1], a, b))^2 +
        (<a href="http://inside-r.org/r-doc/stats/pbeta">pbeta(x[2], a, b) - <a href="http://inside-r.org/r-doc/stats/pbeta">pbeta(x[1], a, b) -1 +  alfa)^2
    }

    res <- <a href="http://inside-r.org/r-doc/stats/optim">optim(c(a/(a+b), a/(a+b)), f)
    res$par
    #[1] 0.08052535 0.68463436

    # nueva versión
    f.alt <- function(x){
      <a href="http://inside-r.org/r-doc/stats/qbeta">qbeta(x+0.95, a, b) - <a href="http://inside-r.org/r-doc/stats/qbeta">qbeta(x, a, b)
    }

    res.alt <- <a href="http://inside-r.org/r-doc/stats/optim">optim(0.025, f.alt)
    <a href="http://inside-r.org/r-doc/stats/qbeta">qbeta(c(res.alt$par, res.alt$par + 0.95), a, b)
    #[1] 0.08054388 0.68464900




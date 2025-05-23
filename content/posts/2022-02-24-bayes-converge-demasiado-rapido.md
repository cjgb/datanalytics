---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2022-02-24
lastmod: '2025-04-06T18:44:21.247713'
related:
- 2011-01-10-c2bfuna-caida-demasiado-drastica-de-la-varianza.md
- 2016-02-04-y-termino-con-lo-de-los-intervalos.md
- 2022-01-20-peor-pagina-taleb.md
- 2023-09-07-problema-modelos-bayesianos-identicabilidad.md
- 2024-03-05-sobreajuste-modelos-bayesianos.md
tags:
- estadística bayesiana
- convergencia
title: ¿Converge Bayes demasiado rápido?
url: /2022/02/24/bayes-converge-demasiado-rapido/
---

Siempre he tenido la sensación de que las posterioris convergen demasiado rápidamente. Fue, de hecho, la primera objeción que hizo el cliente hace ya muchos, muchos, años a los resultados de mi primer proyecto puramente bayesiano y desde entonces guardo la espinita clavada.

Por eso me siento reivindicado por [_What's wrong with Bayes_](https://statmodeling.stat.columbia.edu/2019/12/03/whats-wrong-with-bayes/), una entrada de Andrew Gelman en su blog y en la que discute una _inferencia ridícula_. Es la siguiente:

Supongamos que $\theta$ es un valor desconocido y que observamos

$$y \sim N(\theta, 1).$$

Supongamos, además, que usamos una priori plana para $\theta$ (de la que no sabemos nada).

Obtenemos un valor de $y$ y resulta ser 1. Está únicamente a una $\sigma$ de 0 ($\sigma = 1$, recuérdese). Nuestra posteriori es una $N(1, 1)$ y como `pnorm(0, 1, 1)` es aproximadamente 0.16, Gelman dice:

> Step back a bit, and it’s saying that you’ll offer 5-to-1 odds that theta>0 after seeing an observation that is statistically indistinguishable from noise. That can’t make sense. Go around offering 5:1 bets based on pure noise and you’ll go bankrupt real fast.

El resto de la entrada y algunos de los comentarios no tienen desperdicio. En particular, el mío ---que puede considerarse una extensión a la presente entrada--- y la subsiguiente respuesta de Gelman).
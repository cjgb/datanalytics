---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2020-03-30 10:32:56+00:00
draft: false
lastmod: '2025-04-06T18:45:55.250768'
related:
- 2022-03-03-error-sesgo-modelos-lineales.md
- 2020-07-16-no-tus-datos-no-tienen-sobredispersion-es-que-el-gato-de-nelder-se-ha-merendado-la-epsilon.md
- 2023-09-07-problema-modelos-bayesianos-identicabilidad.md
- 2017-06-29-hoy-como-excepcion-gritare-y-justificare-malditos-logaritmos.md
- 2024-05-02-falacia-ecologica.md
tags:
- epidemiología
- odes
- sir
- stan
title: El modelo SIR con inferencia
url: /2020/03/30/el-modelo-sir-con-inferencia/
---

El [modelo SIR](https://freakonometrics.hypotheses.org/60482) es deductivo: dados una serie de parámetros, plantea una ecuación diferencial cuya solución es perfectamente limpia y determinista, tal como gusta a matemáticos y físicos:

![](/img/2020/03/SIR1-1024x556.png#center)

Pero, ¿quién y cómo le pone al gato el cascabel de determinar los parámetros más adecuados para el modelo? Los parámetros son inciertos, ruidosos y producto de los datos que el modelo mismo quiere representar. Lo suyo sería enlazar la ecuación diferencial

![](/img/2020/03/sir_ode.png#center)

con los datos observados

![](/img/2020/03/sir_ode_stan.png#center)

y modelar todo conjuntamente. Como [aquí](https://arxiv.org/pdf/1903.00423.pdf).
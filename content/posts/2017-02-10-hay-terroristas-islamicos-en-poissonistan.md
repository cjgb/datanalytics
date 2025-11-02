---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2017-02-10 08:13:35+00:00
draft: false
lastmod: '2025-04-06T18:57:49.259258'
related:
- 2022-01-11-caracterizacion-binomial-negativa-poisson-gamma.md
- 2017-02-01-infradispersion-de-conteos-buenos-ejemplos.md
- 2018-05-28-los-extranos-numeros-de-los-muertos-en-carretera-por-accidente.md
- 2020-07-17-mas-sobre-la-presunta-sobredispersion-en-el-modelo-de-poisson.md
- 2019-01-08-modelos-de-conteos-con-sobredispersion-con-stan.md
tags:
- outliers
- poisson
- terrorismo
title: ¿Hay terroristas islámicos en Poissonistán?
url: /2017/02/10/hay-terroristas-islamicos-en-poissonistan/
---

La distribución binomial (de parámetro `n`, `p`) es una suma de `n` variables aleatorias de Bernoulli independientes de parámetro `p`.

Independientes, reitero.

La distribución de Poisson es aproximadamente, una distribución binomial con un `n` muy grande y un `p` muy pequeño.

Los eventos subyacentes siguen siendo independientes, reitero.

Viene esto al caso de una tabla que ha circulado por Twitter,

![](/img/2017/02/toddlers_guns.jpg)

en la que se comparan estimaciones de los parámetros $\lambda$ de una serie de distribuciones de Poisson... como si todas lo fuesen.

Las variables aleatorias de Poisson toman valores, típicamente, entre $\lambda - 2 \sqrt{\lambda}$ y $\lambda + 2 \sqrt{\lambda}$. La distribución de Poisson no tiene _outliers_.

Pero algunas de las distribuciones ahí indicadas sí.

Las demás consideraciones que pudieran hacerse me exceden.
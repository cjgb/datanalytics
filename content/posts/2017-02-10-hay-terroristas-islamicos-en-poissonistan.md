---
author: Carlos J. Gil Bellosta
date: 2017-02-10 08:13:35+00:00
draft: false
title: ¿Hay terroristas islámicos en Poissonistán?

url: /2017/02/10/hay-terroristas-islamicos-en-poissonistan/
categories:
- estadística
tags:
- outliers
- poisson
- terrorismo
---

La distribución binomial (de parámetro `n`, `p`) es una suma de `n` variables aleatorias de Bernoulli independientes de parámetro `p`.

Independientes, reitero.

La distribución de Poisson es aproximadamente, una distribución binomial con un `n` muy grande y un `p` muy pequeño.

Los eventos subyacentes siguen siendo independientes, reitero.

Viene esto al caso de una tabla que ha circulado por Twitter,

![](/wp-uploads/2017/02/toddlers_guns.jpg)

en la que se comparan estimaciones de los parámetros $latex \lambda$ de una serie de distribuciones de Poisson... como si todas lo fuesen.

Las variables aleatorias de Poisson toman valores, típicamente, entre $latex \lambda - 2 \sqrt{\lambda}$ y $latex \lambda + 2 \sqrt{\lambda}$. La distribución de Poisson no tiene _outliers_.

Pero algunas de las distribuciones ahí indicadas sí.

Las demás consideraciones que pudieran hacerse me exceden.

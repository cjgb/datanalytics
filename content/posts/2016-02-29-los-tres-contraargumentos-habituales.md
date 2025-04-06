---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2016-02-29 09:13:50+00:00
draft: false
lastmod: '2025-04-06T18:57:29.523409'
related:
- 2014-10-13-los-tests-de-hipotesis-son-los-macarrones-con-cosas-de-la-nevera.md
- 2023-09-07-problema-modelos-bayesianos-identicabilidad.md
- 2024-09-12-cortos-stats.md
- 2018-01-12-abc.md
- 2024-03-05-sobreajuste-modelos-bayesianos.md
tags:
- estadística
- estadística bayesiana
- priori
title: Los tres contraargumentos habituales
url: /2016/02/29/los-tres-contraargumentos-habituales/
---

Hago pública por su interés (parte de) una respuesta de Ramón Díaz Uriarte a un correo mío en el que yo sugería

>que una vez que sabes especificar un modelo probabilístico para unos datos, p.e.,
>  - para la regresión lineal, `y ~ N(a0 + a1 x1 +..., sigma))`,
>  - para el test de Student, `y0 ~ N(mu, sigma); y1 ~ N(mu + delta, sigma)`,
>  - etc.
>no hace falta saber qué es lm, ni el test de Student, ni nada. Cero teoría; sobre todo, de teoría tipo recetario. Se especifica el modelo (con una determinada sintaxis), se deja correr la cosa y a interpretar.

Su respuesta:

> Hummm... eso es lo atractivo, sí. Pero te sabes los contra-argumentos habituales:
>  - ¿De dónde vienen las priors?
>  - Cambiamos el enredar en la caja de herramientas de los tests por enredar en la caja de herramientas de la infinidad de tricky things en Bayesian computation? MCMC vs INLA vs ...?
>  - En la línea anterior, y aunque encuentre muy persuasivos los argumentos para los hierarchical models, los mixed models complicados, etc, ¿realmente es razonable hacer MCMC ---o lo que sea--- para una   comparación de medias o una regresión lineal? Vaya, que seguro que si quiero comerme una manzana la puedo hacer en la olla, pero en general le doy una lavada y me la como sin más.
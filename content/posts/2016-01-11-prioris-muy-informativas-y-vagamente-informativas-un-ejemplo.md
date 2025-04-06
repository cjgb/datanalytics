---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2016-01-11 08:13:31+00:00
draft: false
lastmod: '2025-04-06T19:10:03.560465'
related:
- 2016-01-04-las-prioris-no-informativas-estan-manifiestamente-sobrevaloradas.md
- 2018-05-24-prioris-informativas-un-ejemplo.md
- 2015-04-27-intervalos-de-credibilidad-para-la-distribucion-beta.md
- 2013-05-16-el-error-en-las-encuestas-cuentas-en-una-servilleta.md
- 2015-09-07-prioris-subjetivas.md
tags:
- estadística bayesiana
- priori
title: 'Prioris muy informativas y vagamente informativas: un ejemplo'
url: /2016/01/11/prioris-muy-informativas-y-vagamente-informativas-un-ejemplo/
---

Mi búsqueda de ejemplos de aplicaciones con prioris informativas me ha conducido a [Physiological pharmacokinetic analysis using population modeling and informative prior distributions](http://www.stat.columbia.edu/~gelman/research/published/bois2.pdf), un artículo en el que se plantea un modelo jerárquico con dos tipos de distribuciones a priori:

**Distribuciones muy informativas.** Por ejemplo, el parámetro que representa la proporción del peso del hígado en un adulto, alrededor del 3.3% en promedio, que se modela con una distribución centrada en ese valor y una desviación estándar baja.

**Distribuciones vagamente informativas.** Por ejemplo, el parámetro que representa la velocidad de metabolismo de un determinado compuesto, de la que se conoce el valor promedio pero que puede variar grandemente de unos sujetos a otros. En este caso, la distribución a priori está de nuevo centrada en el valor conocido y se le concede una desviación estándar más amplia, coherente con la observada en experimentos anteriores.
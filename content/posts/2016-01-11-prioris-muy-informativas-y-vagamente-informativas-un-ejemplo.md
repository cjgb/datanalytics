---
author: Carlos J. Gil Bellosta
date: 2016-01-11 08:13:31+00:00
draft: false
title: 'Prioris muy informativas y vagamente informativas: un ejemplo'

url: /2016/01/11/prioris-muy-informativas-y-vagamente-informativas-un-ejemplo/
categories:
- estadística
tags:
- estadística bayesiana
- priori
---

Mi búsqueda de ejemplos de aplicaciones con prioris informativas me ha conducido a [Physiological pharmacokinetic analysis using population modeling and informative prior distributions](http://www.stat.columbia.edu/~gelman/research/published/bois2.pdf), un artículo en el que se plantea un modelo jerárquico con dos tipos de distribuciones a priori:

**Distribuciones muy informativas.** Por ejemplo, el parámetro que representa la proporción del peso del hígado en un adulto, alrededor del 3.3% en promedio, que se modela con una distribución centrada en ese valor y una desviación estándar baja.

**Distribuciones vagamente informativas.** Por ejemplo, el parámetro que representa la velocidad de metabolismo de un determinado compuesto, de la que se conoce el valor promedio pero que puede variar grandemente de unos sujetos a otros. En este caso, la distribución a priori está de nuevo centrada en el valor conocido y se le concede una desviación estándar más amplia, coherente con la observada en experimentos anteriores.

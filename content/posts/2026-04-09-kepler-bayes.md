---
author: Carlos J. Gil Bellosta
categories:
- estadística bayesiana
date: 2026-04-09
description: Reproduciendo la estimación de la excentricidad de la órbita terrestre de Kepler con herramientas modernas (y estadística bayesiana).
lastmod: '2026-04-03T19:21:51.075997'
related:
- 2023-01-18-modelo-poisson-numpyro.md
- 2023-02-07-numpyro-predictions.md
- 2024-02-08-elipses.md
- 2026-02-25-bayesian-decision-theory.md
- 2016-02-04-y-termino-con-lo-de-los-intervalos.md
tags:
- estadística bayesiana
- numpyro
- kepler
- astronomía
- elipses
- numpyro
title: Kepler ∩ Bayes
url: /2026/04/09/kepler-bayes/
---

En los relatos acerca de las tribulaciones de los científicos se suele hacer referencia a estimaciones puntuales: X determinó que el Y era Z. Luego, además, se suele aclarar que ahora se sabe que el valor de Y no es Z sino tal vez el doble o un 10% menos. Pero ahí queda la cosa.

Es extraño porque hoy en día, si todo el mundo piensa que Y es 0 y alguien propone un valor Z, no se le hace el menor caso si no proporciona un intervalo de confianza alrededor de Z que, entre otras cosas, excluya el 0. No está para nada claro que los astrónomos de la época tuviesen que hacer caso a pie juntillas a los Galileos, Keplers, etc. de la época. Con los estándares de hoy, no habrían podido publicar ninguno de sus resultados.

Hace algo más de 400 años, Kepler estimó la excentricidad de la órbita terrestre en 0.017, que es un valor próximo a cero. La diferencia entre una órbita con excentricidad de alrededor de 0.017 y una circular es más o menos la que muestra la siguiente figura:

![excentricidad órbita terrestre](/img/2026/excentricidad_orbita_terrestre.png#center)

Así que he rehecho el análisis de Kepler usando estadística bayesiana y publicado todo [aquí](https://github.com/cjgb/datanalytics_code/blob/main/2026-kepler-numpyro/estimate_earth_orbit.ipynb).

En realidad, no he usado los mismos datos que Kepler porque no he dado con ellos. Es sabido que Kepler usó para el fin que me propongo seis observaciones obtenidas de Tycho Brahe por medios poco ortodoxos. Yo he usado once obtenidas de la NASA y [preprocesadas por Luca Canali](https://github.com/LucaCanali/Miscellaneous/tree/master/Data_Analyses/Kepler).

Pero tanto la idea como el método son los mismos. Y el error de las observaciones que uso es no mucho mayor que el de las de Brahe (estimadas en alrededor de 0.0003 radianes).

Lo interesante de este análisis es constatar cómo la incertidumbre en las observaciones se traslada a la de la estimación de la excentricidad, de la que la distribución a posteriori que obtengo es:

![estimaciones excentricidad órbita terrestre](/img/2026/excentricidad_orbita_terrestre_estimations.png#center)

No quiero alargarme más en el asunto porque los detalles ya están escritos en el cuaderno de Python que he enlazado antes.
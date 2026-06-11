---
author: Carlos J. Gil Bellosta
categories:
- cortos
date: 2026-06-16
description: Que incluyen una defensa de las discusiones metodológicas «aburridas»
  y otras rarezas relacionadas con la estadística.
lastmod: '2026-06-11T23:52:25.002105'
related:
- 2025-12-11-cortos.md
- 2025-07-01-cortos-estadistica.md
- 2026-06-09-cortos-stats.md
- 2025-10-16-estadistica.md
- 2026-04-07-cortos.md
tags:
- estadística
- feynman
- metodología
- estadística pública
title: 'Notas (25): el algoritmo de Feynman para encontrar «el mejor restaurante»
  y algunos asuntos más'
url: /2026/06/16/cortos-estadistica/
---

Matthew Yglesias defiende [la siempre subestimada importancia de las disputas metodológicas aburridas](https://www.slowboring.com/p/the-neglected-importance-of-boring) en el debate político. Debates aparentemente fácticos en política dependen de [decisiones metodológicas complejas](/2026/06/04/jon-gonzalez/) sobre las que la gente pasa de puntillas. Por ejemplo, al analizar si los salarios reales en EEUU cayeron entre 1979 y 2014, la conclusión varía drásticamente según los supuestos y deflatores técnicos elegidos.

En una entrada de 2017 titulada [_If It’s Worth Doing, It’s Worth Doing With Made-Up Statistics_](https://www.lesswrong.com/posts/9Tw5RqnEzqEtaoEkq/if-it-s-worth-doing-it-s-worth-doing-with-made-up-statistics), Scott Alexander aboga por el uso de estimaciones numéricas aproximadas y «cifras inventadas» en marcos de decisión formales (como el utilitarismo o la inferencia bayesiana). Sostiene que, aunque estas cuantificaciones sean imprecisas, siguen aportando información útil y superan con creces a la intuición humana pura, que, como es bien sabido, suele sufrir sesgos graves.

Andrew Gelman tiene una extraña entrada en su blog sobre [la relación entre las interacciones en un modelo de regresión y las correlaciones entre las variables predictoras](https://statmodeling.stat.columbia.edu/2026/06/06/what-is-the-relation-between-interactions-in-a-regression-model-and-correlations-among-the-predictors/). ¿Qué habrá visto para escribir esto en lugar de abstenerse de ello?

John D. Cook escribe sobre los [algoritmos _en línea_](https://www.johndcook.com/blog/2026/05/29/online-one-pass-algorithms/) para procesar datos en una sola pasada. Explica además que los algoritmos ingenuos para el cálculo de la media y la varianza son numéricamente inestables y cómo existen procedimientos (como el algoritmo de Welford de 1962) para evitar esos problemas.

Se ve que [Feynman propuso un algoritmo para determinar el mejor restaurante](https://www.theguardian.com/science/2026/jun/01/scientists-uncover-feynmans-formula-for-finding-best-holiday-restaurant) (en un contexto similar al del [problema de la secretaria](https://en.wikipedia.org/wiki/Secretary_problem)). Muy resumidamente, consiste en probar un restaurante nuevo cada día ---exploración--- hasta que se alcanza un umbral de calidad ---explotación---, que decrece a medida que se acaban las vacaciones.
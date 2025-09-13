---
-tags:
- estadística bayesiana
- postbayesianismo
- nlp
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2025-07-16
description: TBA
lastmod: '2025-09-14T01:18:28.975069'
related:
- 2024-03-05-sobreajuste-modelos-bayesianos.md
- 2023-09-07-problema-modelos-bayesianos-identicabilidad.md
- 2022-10-13-bayesianismo-frecuentismo-teoria-decision-04.md
- 2018-01-12-abc.md
- 2024-12-05-beta-binomial-deriva.md
title: Post-bayesianismo, una  microintroducción
url: /2025/07/16/post-bayesianismo/
---

Hace muchos años leí un artículo sobre el _naive Bayes_ en procesamiento del lenguaje natural cuya referencia he perdido absolutamente. No obstante, recuerdo muy bien su esquema general, que es lo relevante como introducción para lo que sigue.

Venía a decir que, efectivamente, método del _naive Bayes_ era muy útil en NLP. Este clasificador se construye a partir de primeros principios y se puede usar directamente, _tal cual viene en la caja_, para obtener resultados _decentes_. Sin embargo, la experiencia indicaba que el método, en la práctica, funcionaba mejor si se lo sometía a una serie de cambios _ad hoc_. Con estas modificaciones, el clasificador resultante guardaba cierta similitud con respecto al original: cambiaba la priori por otra cosa que se le parecía pero que no era igual; cambiaba la verosimilitud por otra cosa que era, de nuevo, parecida pero no exactamente la misma, etc.

Es decir, que aquello que se construía desde primeros principios podía verse superado por una versión _ad hoc_. Algo parecido se plantea en el artículo [_Bayes and big data: the consensus Monte Carlo algorithm_](https://research.google/pubs/bayes-and-big-data-the-consensus-monte-carlo-algorithm/). Ahí el objetivo consiste en modificar la forma teórica de la posteriori en otra que se adapte a las necesidades concretas del problema en cuestión, es decir, poder ajustar el modelo _en paralelo_. En particular, en lugar de usar la priori $p(\theta)$, propone usar $p^{1/C}(\theta)$, donde $C$ es el número de simulaciones independientes, _para preservar la cantidad de información disponible en el sistema_.

El [_post-bayesianismo_](https://postbayes.github.io/seminar/) (y véase también [esto](https://datascienceconfidential.github.io/statistics/r/2025/06/17/post-bayesian.html)) es un conjunto de técnicas que parte de los modelos bayesianos teóricos (típicamente, generativos) que uno puede construir desde primeros principios pero va más allá de ellos introduciendo modificaciones ---como, p.e., aplicar un determinado exponente a la verosimilitud para _aplastarla_--- que ayuden a obtener mejores resultados prácticos en determinadas situaciones concretas. Aunque ello implique abandonar el rigor deductivo e introducir variantes tácticas salidas de la chistera de los trucos particulares de cada uno. Así las cosas, podría haberse llamado _bayesianismo hiper-subjetivo_, ¿no?
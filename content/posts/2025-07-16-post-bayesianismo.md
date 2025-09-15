---
-tags:
- estadística bayesiana
- postbayesianismo
- nlp
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2025-07-16
description: "Del naive Bayes al post-bayesianismo: cuando los principios teóricos ceden el paso a trucos ad hoc para obtener mejores resultados prácticos."
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

Hace muchos años leí [_Tackling the Poor Assumptions of Naive Bayes Text Classifiers_](https://people.csail.mit.edu/jrennie/papers/icml03-nb.pdf). Es un artículo que viene a decir que, efectivamente, método del _naive Bayes_ es muy útil en NLP, un clasificador que se construye a partir de primeros principios y se puede usar directamente, _tal cual viene en la caja_, para obtener resultados _decentes_. Sin embargo, la experiencia indica que el método, en la práctica, funcionaba mejor si se lo somete a una serie de cambios _ad hoc_. Con estas modificaciones, el clasificador resultante guarda cierta similitud con respecto al original: cambia la priori por otra cosa que se le parece pero que no es igual; cambia la verosimilitud por otra cosa que es, de nuevo, parecida pero no exactamente la misma, etc. Pero funciona algo mejor en la práctica. Es decir, que aquello que se construye desde primeros principios puede verse superado por una versión _tuneada_.

Algo parecido se plantea en el artículo [_Bayes and big data: the consensus Monte Carlo algorithm_](https://research.google/pubs/bayes-and-big-data-the-consensus-monte-carlo-algorithm/). Ahí se modifica forma teórica de la posteriori para adaptarla a las necesidades concretas del problema en cuestión: poder _particionar_ el proceso de muestreo. No se trata solo de lanzar varias cadenas en paralelo que operan sobre los mismos datos sino de usar un subconjunto de los datos en cada cadena. Lo curioso es que, en lugar de usar la priori $p(\theta)$, propone usar $p^{1/C}(\theta)$, donde $C$ es el número de simulaciones independientes, _para preservar la cantidad de información disponible en el sistema_. Sin embargo, la teoría parece inducir a pensar que la priori de los parámetros es independiente de qué datos estén siendo considerados en cada submuestra o partición de los datos originales completos.

Estos precedentes me han servido de sistema de referencia para encuadrar mejor el llamado _post-bayesianismo_. El [post-bayesianismo](https://postbayes.github.io/seminar/) (y véase también [esto](https://datascienceconfidential.github.io/statistics/r/2025/06/17/post-bayesian.html)) es un conjunto de técnicas que parte de los modelos bayesianos teóricos (típicamente, generativos) que uno puede construir desde primeros principios pero va más allá de ellos introduciendo modificaciones ---como, p.e., aplicar un determinado exponente a la verosimilitud para _aplastarla_--- que ayuden a obtener mejores resultados prácticos en determinadas situaciones concretas. Aunque ello implique abandonar el rigor deductivo e introducir variantes tácticas salidas de la chistera de los trucos particulares de cada uno. Así las cosas, podría haberse llamado _bayesianismo hiper-subjetivo_, ¿no?

## Nota

He editado esta entrada para añadir la referencia al artículo mencionado en el primer párrafo. En la primera versión no recordaba la referencia exacta. [Alfonso E. Romero](https://x.com/alfonsoeromero) tuvo la gentileza de enviarme la referencia exacta.
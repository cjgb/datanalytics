---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2019-05-14 09:13:05+00:00
lastmod: '2025-04-06T19:10:49.933105'
related:
- 2020-01-09-regresiones-con-discontinuidad-y-grados-de-libertad.md
- 2019-05-29-y-si-quitamos-el-puntico-de-arriba-a-la-izquierda.md
- 2020-10-28-que-metodos-estadisticos-utilizar-si-el-pan-de-tus-hijos-depende-de-que-las-p-sean-pequenajas.md
- 2020-10-01-regression-models-that-claim-to-reach-causal-conclusions-as-favoured-by-economists.md
- 2024-09-12-cortos-stats.md
tags:
- causalidad
- causalimpact
- estadística
- polinomios
- regresión
- gelman
- mala ciencia
title: Análisis de la discontinuidad + polinomios de grado alto = ...
url: /2019/05/14/analisis-de-la-discontinuidad-polinomios-de-grado-alto/
---

Una técnica que, al parecer, es muy del gusto de los economistas es lo del análisis de la discontinuidad. Es como todo lo que tiene que ver con [`causalImpact`](https://google.github.io/CausalImpact/CausalImpact.html) pero usando técnicas setenteras (regresiones independientes a ambos lados del punto de corte).

Si a eso le sumas que las regresiones pueden ser polinómicas con polinomios de alto grado... pasan dos cosas:

* Tienes una probabilidad alta de obtener un resultado _significativo_, i.e., publicable.
* Pero que se deba solo al ruido producido por el método (corte discreto, inestabilidad polinómica, etc.).

Es decir, la habitual chocolatada que algunos llaman _ciencia_ (cierto, algunos dirán que _mala_ ciencia, pero que, ¡ah!, nos cobran al mismo precio que la _buena_).

¿Más detalles? Puede consultarse [_Evidence on the deleterious impact of sustained use of polynomial regression on causal inference_](http://www.stat.columbia.edu/~gelman/research/unpublished/rd_china_2.pdf).
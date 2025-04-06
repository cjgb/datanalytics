---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2019-05-21 09:13:54+00:00
draft: false
lastmod: '2025-04-06T19:05:20.619911'
related:
- 2017-01-10-repensando-la-codificacion-por-impacto.md
- 2019-02-18-9857.md
- 2021-10-07-como-aleatorizan-las-columnas-los-rrff-un-experimento-mental-y-una-coda-historica.md
- 2019-09-12-que-mas-puede-colgar-de-un-arbol.md
- 2018-12-18-data-tree-porque-no-todos-los-datos-son-tabulares.md
tags:
- cran
- ctree
- distribuciones
- paquetes
- party
- r
- trtf
title: ¿Qué puede colgar de un árbol?
url: /2019/05/21/que-puede-colgar-de-un-arbol/
---

Predicciones puntuales:

![](/wp-uploads/2019/05/ctree_que_cuelga.png#center)

O (sub)modelos:

![](/wp-uploads/2014/09/residuos_mob_party.png#center)

Y parece que ahora también distribuciones:

![](/wp-uploads/2019/05/trtf_que_cuelga.png#center)

**Notas:**

* Obviamente, la clasificación anterior no es mutuamente excluyente.
* La tercera gráfica está extraída de [_Transformation Forests_](https://arxiv.org/abs/1701.02110), un artículo donde se describe el paquete [`trtf`](https://cran.r-project.org/package=trtf) de R.
* Los autores dicen que _[r]egression models for supervised learning problems with a continuous target are commonly understood as models for the conditional mean of the target given predictors_. ¿Vosotros lo hacéis así? Yo no, pero ¡hay tanta gente rara en el mundo!
* Y añaden que _[a] more general understanding of regression models as models for conditional distributions allows much broader inference from such models_. Que era lo que creía que todos hacíamos. Menos, tal vez, algún rarito.
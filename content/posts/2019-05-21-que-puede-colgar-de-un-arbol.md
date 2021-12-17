---
author: Carlos J. Gil Bellosta
date: 2019-05-21 09:13:54+00:00
draft: false
title: ¿Qué puede colgar de un árbol?

url: /2019/05/21/que-puede-colgar-de-un-arbol/
categories:
- r
tags:
- cran
- ctree
- distribuciones
- paquetes
- party
- r
- trtf
---




Predicciones puntuales:







![](/wp-uploads/2019/05/ctree_que_cuelga.png)








O (sub)modelos:







![](/wp-uploads/2014/09/residuos_mob_party.png)








Y parece que ahora también distribuciones:







![](/wp-uploads/2019/05/trtf_que_cuelga.png)








**Notas:**





  * Obviamente, la clasificación anterior no es mutuamente excluyente.  * La tercera gráfica está extraída de _[Transformation Forests](https://arxiv.org/abs/1701.02110)_, un artículo donde se describe el paquete [`trtf`](https://cran.r-project.org/package=trtf) de R.  * Los autores dicen que _[r]egression models for supervised learning problems with a continuous target are commonly understood as models for the conditional mean of the target given predictors_. ¿Vosotros lo hacéis así? Yo no, pero ¡hay tanta gente rara en el mundo!  * Y añaden que _[a] more general understanding of regression models as models for conditional distributions allows much broader inference from such models_. Que era lo que creía que todos hacíamos. Menos, tal vez, algún rarito.


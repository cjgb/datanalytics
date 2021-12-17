---
author: Carlos J. Gil Bellosta
date: 2020-04-07 09:13:00+00:00
draft: false
title: 'Spike and slab: otro método para seleccionar variables'

url: /2020/04/07/spike-and-slab-otro-metodo-para-seleccionar-variables/
categories:
- estadística
- r
tags:
- estadística bayesiana
- r
- variables categóricas
- varian
---




Me sorprende ver todavía a gente utilizar técnicas _stepwise_ para la selección de variables en modelos. Sobre todo, existiendo herramientas como _elastic net_ o _lasso_.







Otra de las técnicas disponibles es la del _spike and slab_ (de la que oí hablar, recuerdo, por primera vez en el artículo de Varian _[Big Data: New Tricks for Econometrics](http://people.ischool.berkeley.edu/~hal/Papers/2013/ml.pdf)_). Es una técnica de inspiración bayesiana en cuya versión más cruda se imponen sobre las variables del modelo de regresión prioris que son una mezcla de dos distribuciones:





  * Una degenerada plana (_slab_)  * Una degenerada concentrada en 0 (_spike_)





En concreto, algo parecido a







![](/wp-uploads/2020/04/Spike-and-slab-prior.png)








cuando a, b y $latex \delta$ tienden a lo que deben. El parámetro $latex \gamma$ (o más concretamente, su distribución a posteriori) determina la probabilidad de que el coeficiente sea 0. Aunque hoy en día se prefiera usar una mezcla de dos normales centradas en cero,







![](/wp-uploads/2020/04/spike_slab.png)








La teoría de la cosa puede aprenderse en artículos como [este](http://www-stat.wharton.upenn.edu/~edgeorge/Research_papers/GeorgeMcCulloch97.pdf) (más antiguo, más accesible) o [este](https://arxiv.org/pdf/math/0505633.pdf) (más moderno, menos fácil de seguir) y la práctica, por doquier en R (p.e., [aquí](https://cran.r-project.org/web/packages/spikeslab/index.html)).




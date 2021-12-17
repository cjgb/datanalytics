---
author: Carlos J. Gil Bellosta
date: 2020-01-28 09:13:00+00:00
draft: false
title: GoF para modelos bayesianos

url: /2020/01/28/gof-para-modelos-bayesianos/
categories:
- artículos
- estadística
tags:
- artículos
- estadística
- estadística bayesiana
- modelos
---




Existe una muy perezosa escuela de pensamiento que sostiene que dado que las probabilidades son subjetivas, cualquier modelo y, en particular, los bayesianos, como expresión de la subjetividad de sus autores, no necesita ser contrastado con la realidad. Porque, de hecho, la realidad no existe y es una construcción que cada cual hace a su manera, deberían añadir.







Existe, por supuesto, una escuela _realista_ tan mayoritaria que ni siquiera es consciente de que lo es. Basta leer la primera página de _[Statistical Modeling: The Two Cultures](https://www.datanalytics.com/2016/11/07/las-dos-culturas-con-comentarios-de-2016/)_ para hacerse una idea muy clara de a lo que me refiero.







El postulado primero de esta escuela mayoritaria bien podría ser _GoF first_. Se comienza por definir una medida de error (piénsese, RMSE) y casi cualquier otra consideración queda subordinada a achicarla.







Sin embargo, la primera escuela presta más atención al proceso generativo de los datos y el _GoF_ es problemático.







Tal es el contexto en el que entender, p.e., _[Practical Bayesian model evaluation using leave-one-out cross-validation and WAIC](https://arxiv.org/abs/1507.04544)_.




---
author: Carlos J. Gil Bellosta
categories:
- estadística
- python
date: 2019-12-02 09:13:00+00:00
draft: false
lastmod: '2025-04-06T18:52:23.460985'
related:
- 2019-07-17-sobre-la-peculiarisima-implementacion-del-modelo-lineal-en-pseudo-scikit-learn.md
- 2017-09-11-pues-los-svms-al-final-no-son-tan-exoticos.md
- 2019-08-21-glms-con-coeficientes-0-p-e.md
- 2014-02-06-experimentos-con-el-paquete-gbm.md
- 2019-02-25-modelos-log-lineales-y-glms-con-regularizacion.md
tags:
- coeficientes
- glm
- python
- ridge
- scikit-learn
title: Sobre los coeficientes de los GLM en Scikit-learn
url: /2019/12/02/sobre-los-coeficientes-de-los-glm-en-scikit-learn/
---

Pensé que ya había escrito sobre el asunto porque tropecé con él en un proyecto hace un tiempo. Pero mi memoria se había confundido con otra entrada, [_Sobre la peculiarisima implementacion del modelo lineal en (pseudo-)Scikit-learn_](/2019/07/17/sobre-la-peculiarisima-implementacion-del-modelo-lineal-en-pseudo-scikit-learn/), donde se discute, precisamente, un problema similar si se lo mira de cierta manera o diametralmente opuesto si se ve con otra perspectiva.

Allí el problema era que scikit-learn gestionaba muy _sui generis_ el insidioso problema de la colinealidad. Precisamente, porque utiliza un optimizador _ad hoc_ y no estándar para ajustar el modelo lineal.

El problema con la logística es el contrario: hipercorrige subrepticiamente la teoría clásica de modo que uno espera GLM pero obtiene la regularización _ridge_. Que no está mal, pero que exige, por ejemplo, cierta estandarización previa de las variables: todas deberían tener un rango de variabilidad similar porque _ridge_ penaliza las nominalmente más grandes.

Más detalles, [donde Gelman](https://statmodeling.stat.columbia.edu/2019/11/28/the-default-prior-for-logistic-regression-coefficients-in-scikit-learn/).
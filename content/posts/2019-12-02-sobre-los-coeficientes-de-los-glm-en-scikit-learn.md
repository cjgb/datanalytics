---
author: Carlos J. Gil Bellosta
date: 2019-12-02 09:13:00+00:00
draft: false
title: Sobre los coeficientes de los GLM en Scikit-learn

url: /2019/12/02/sobre-los-coeficientes-de-los-glm-en-scikit-learn/
categories:
- estadística
- python
tags:
- coeficientes
- glm
- python
- ridge
- scikit-learn
---




Pensé que ya había escrito sobre el asunto porque tropecé con él en un proyecto hace un tiempo. Pero mi menoria se había confundido con otra entrada, _[Sobre la peculiarisima implementacion del modelo lineal en (pseudo-)Scikit-learn](https://www.datanalytics.com/2019/07/17/sobre-la-peculiarisima-implementacion-del-modelo-lineal-en-pseudo-scikit-learn/)_, donde se discute, precisamente, un problema similar si se lo mira de cierta manera o diametralmente opuesto si se ve con otra perspectiva.







Allí el problema era que Scikit-learn gestionaba muy _sui generis_ el insidioso problema de la colinealidad. Precisamente, porque utiliza un optimizador _ad hoc_ y no estándar para ajustar el modelo lineal.







El problema con la logística es el contrario: hipercorrige subrepticiamente la teoría clásica de modo que uno espera GLM pero obtiene la regularización _ridge_. Que no está mal, pero que exige, por ejemplo, cierta estandarización previa de las variables: todas deberían tener un rango de variabilidad similar porque _ridge_ penaliza las nominalmente más grandes.







Más detalles, [donde Gelman](https://statmodeling.stat.columbia.edu/2019/11/28/the-default-prior-for-logistic-regression-coefficients-in-scikit-learn/).




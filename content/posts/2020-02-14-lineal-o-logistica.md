---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2020-02-14 09:13:00+00:00
draft: false
lastmod: '2025-04-06T18:58:27.106124'
related:
- 2017-06-29-hoy-como-excepcion-gritare-y-justificare-malditos-logaritmos.md
- 2018-05-15-gam-vs-rrff-y-en-general-modelos-generativos-vs-cajas-negras.md
- 2014-03-04-victoria-o-diferencia-de-puntos-lm-o-glm.md
- 2024-09-12-cortos-stats.md
- 2019-12-02-sobre-los-coeficientes-de-los-glm-en-scikit-learn.md
tags:
- clasificación
- glm
- regresión
- regresión lineal
- regresión logística
title: ¿Lineal o logística?
url: /2020/02/14/lineal-o-logistica/
---

Hay cosas tan _obvias_ que ni se plantea la alternativa. Pero luego va R. Gomila y escribe _[Logistic or Linear? Estimating Causal Effects of Treatments on Binary Outcomes Using Regression Analysis](https://www.researchgate.net/publication/334410430_Logistic_or_Linear_Estimating_Causal_Effects_of_Binary_Outcomes_Using_Regression_Analysis)_ que se resume en lo siguiente: cuando te interese la explicación y no la predicción, aunque tu `y` sea binaria, usa regresión lineal y pasa de la logística.

**Nota:** La sección 4.2 de _An Introduction to Statistical Learning_ se titula precisamente _Why Not Linear Regression?_
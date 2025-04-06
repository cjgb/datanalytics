---
author: Carlos J. Gil Bellosta
categories:
- estadística
- r
date: 2019-08-21 09:13:51+00:00
draft: false
lastmod: '2025-04-06T19:05:56.895993'
related:
- 2019-12-02-sobre-los-coeficientes-de-los-glm-en-scikit-learn.md
- 2014-02-06-experimentos-con-el-paquete-gbm.md
- 2016-07-06-glms-con-prioris-casi-a-voluntad.md
- 2017-09-11-pues-los-svms-al-final-no-son-tan-exoticos.md
- 2014-06-05-minimos-cuadrados-con-restricciones.md
tags:
- coeficientes
- glm
- glmnet
- r
title: (g)lms con coeficientes > 0 (p.e.)
url: /2019/08/21/glms-con-coeficientes-0-p-e/
---

* Alguien quería un glm forzando determinados coeficientes >0.
* Una solución 100% bayesiana no era una opción.

Hay varias opciones por ahí. Pero me ha sorprendido que la opción esté disponible en `glmnet::glmnet`:

![](/wp-uploads/2019/08/lower_limits.png#center)

_Filosóficamente_, es un tanto sorprendente: de alguna manera, `glmnet` es glm con _prioris_ alrededor del cero. Los límites superiores e inferiores permiten introducir información a priori adicional no necesariamente compatible con la anterior.

Desde el punto de vista de la implementación, tiene sentido que estas opciones estén disponibles. `glmnet` usa _[coordinate descent](https://en.wikipedia.org/wiki/Coordinate_descent)_ como algoritmo de minimización e introducir restricciones en ese tipo de algoritmos es una trivialidad.
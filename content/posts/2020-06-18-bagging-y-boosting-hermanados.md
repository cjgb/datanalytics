---
author: Carlos J. Gil Bellosta
date: 2020-06-18 09:13:00+00:00
draft: false
title: Bagging y boosting, hermanados

url: /2020/06/18/bagging-y-boosting-hermanados/
categories:
- artículos
- ciencia de datos
tags:
- artículos
- bagging
- boosting
- ciencia de datos
- rulefit
---

Ambas son heurísticas para construir modelos _buenos_ a partir de la combinación de modelos _malos_. Con la diferencia ---¿recordáis los condensadores de la física de bachillerato?--- de que en un caso se colocan en paralelo y en el otro,  en serie.

Entran [Friedman y Popescu](https://arxiv.org/abs/0811.1679) (algoritmo 1):

![](/wp-uploads/2020/06/friedman_popescu_algo_1.png)

Y, tachán:

* Bagging, si $latex \nu = 0$
* Boosting _otherwise_.
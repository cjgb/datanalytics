---
author: Carlos J. Gil Bellosta
categories:
- artículos
- ciencia de datos
date: 2020-06-18 09:13:00+00:00
draft: false
lastmod: '2025-04-06T19:04:57.604579'
related:
- 2020-05-11-agregar-antes-de-modelar.md
- 2024-01-23-arboles-olvidadizos.md
- 2018-04-11-modelos-con-inflacion-de-ceros-y-separacion-perfecta.md
- 2016-11-07-las-dos-culturas-con-comentarios-de-2016.md
- 2014-08-01-coclustering-con-blockcluster.md
tags:
- artículos
- bagging
- boosting
- ciencia de datos
- rulefit
title: Bagging y boosting, hermanados
url: /2020/06/18/bagging-y-boosting-hermanados/
---

Ambas son heurísticas para construir modelos _buenos_ a partir de la combinación de modelos _malos_. Con la diferencia ---¿recordáis los condensadores de la física de bachillerato?--- de que en un caso se colocan en paralelo y en el otro,  en serie.

Entran [Friedman y Popescu](https://arxiv.org/abs/0811.1679) (algoritmo 1):

![](/wp-uploads/2020/06/friedman_popescu_algo_1.png#center)

Y, tachán:

* Bagging, si $\nu = 0$
* Boosting _otherwise_.
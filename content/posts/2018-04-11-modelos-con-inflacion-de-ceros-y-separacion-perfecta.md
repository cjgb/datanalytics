---
author: Carlos J. Gil Bellosta
categories:
- estadística
- r
date: 2018-04-11 08:13:13+00:00
draft: false
lastmod: '2025-04-06T18:56:48.827631'
related:
- 2021-02-05-separacion-perfecta-en-el-modelo-de-poisson.md
- 2010-10-25-una-solucion-al-problema-de-la-separacion-perfecta-con-regresiones-logisticas.md
- 2019-01-08-modelos-de-conteos-con-sobredispersion-con-stan.md
- 2023-09-07-problema-modelos-bayesianos-identicabilidad.md
- 2020-06-29-sobremuestreando-x-y-no-y.md
tags:
- ceros
- inflación
- regresión logística
- separación
title: Modelos con inflación de ceros y separación perfecta
url: /2018/04/11/modelos-con-inflacion-de-ceros-y-separacion-perfecta/
---

Al estudiar problemas de conteos, la llamada inflación de ceros ocurre frecuentemente: los datos contienen más ceros de los que  ocurrirían según las distribuciones habituales (Poisson, binomial negativa). Un modelo con inflación de ceros es una mezcla (mixtura) de un modelo de conteos y una distribución de Dirac (en cero).

Las técnicas habituales para resolverlos involucran (explícita o implícitamente) una estructura jerárquica de modelos: primero, uno (similar a una logística), separa las observaciones que corresponderían a la Dirac del resto. Un segundo modelo de conteos trata de ajustar el segundo.

Y en el primer modelo puede darse (una variante de) el fenómeno de la [separación perfecta](https://datanalytics.com/2010/10/25/una-solucion-al-problema-de-la-separacion-perfecta-con-regresiones-logisticas/): que el primer modelo, en una región del espacio de las variables independientes, asigne todas las observaciones a la Dirac.

Existen muchas soluciones para el problema de la separación perfecta, pero todas las que conozco remiten al planteamiento bayesiano: penalizar los coeficientes (véase el enlace anterior); tecnología que, a su vez, tiene inspiración bayesiana: la penalización no es otra cosa que una priori relativamente informativa sobre el valor de los coeficientes. Estas penalizaciones de coeficientes en el caso más conocido de la logística están implementadas por doquier. No así para los modelos más específicos y menos habituales de los modelos con la inflación de ceros.

Un motivo más para seguir la vía [_full bayesian_](https://github.com/stan-dev/example-models/blob/master/BPA/Ch.12/12.3.2_Zero-Inflated.R).
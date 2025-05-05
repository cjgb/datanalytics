---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2016-06-24 08:13:26+00:00
draft: false
lastmod: '2025-04-06T18:44:47.629567'
related:
- 2014-02-06-experimentos-con-el-paquete-gbm.md
- 2016-06-22-gbm-ii-minizacion-de-funciones-perdidas-cuadraticas-residuos-y-gradientes.md
- 2017-09-11-pues-los-svms-al-final-no-son-tan-exoticos.md
- 2016-06-21-gbm-i-una-mentira-sugerente.md
- 2016-03-11-gbm-sintetizado-en-una-linea.md
tags:
- estadística
- gbm
- rmse
- supervivencia
- regresión lineal
- glm
title: 'GBM (III): Más allá de las pérdidas cuadráticas'
url: /2016/06/24/gbm-iii-mas-alla-de-las-perdidas-cuadraticas/
---

Liberados del estrecho ámbito de nuestra [original mentira sugerente](https://datanalytics.com/2016/06/21/gbm-i-una-mentira-sugerente/) gracias a la [relación que descubrimos entre residuos y gradientes cuando las pérdidas son cuadráticas](https://datanalytics.com/2016/06/22/gbm-ii-minizacion-de-funciones-perdidas-cuadraticas-residuos-y-gradientes/) podemos adentrarnos en ámbitos más extensos.

Lo que discutimos del gradiente tiene una interpretación fácilmente inteligible en el caso de pérdidas cuadráticas. Pero ni la pérdida de interpretabilidad nos impide extender el razonamiento de la entrada anterior a funciones de pérdida distintas de la cuadrática siempre que podamos calcular un gradiente.

En el artículo [_Gradient Boosting Machines_, de G. Ridgeway](http://www.saedsayad.com/docs/gbm2.pdf) se enumeran siete tipos de funciones de pérdida (con sus correspondientes gradientes) a los cuales aplicarles el cuento de esta serie de entradas:

* La que llama gaussiana y que todos conocemos como cuadrática.
* La que llama AdaBoost y que merece una entrada por sí misma: procede de los tiempos en que se conocía un algoritmo que funcionaba relativamente bien y nadie tenía muy claro el motivo hasta que se conoció que venía a ser lo que cuento por acá.
* La de Bernoulli, para problemas de clasificación binaria.
* La de Laplace, que es la gaussiana pero con valores absolutos en lugar de cuadrados.
* La de Poisson, para conteos.
* La del modelo de riesgos proporcionales de Cox, para datos de supervivencia.
* Y una última para la [regresión por cuantiles](https://datanalytics.com/2010/05/18/regresion-por-cuantiles-en-r-y-sas/).

Y es esto (si omitimos, por el momento, todo lo relativo al _stochastic gradient boosting algorithm_, que queda para otra ocasión) lo que encierran los GBMs y la razón, en última instancia, de su éxito.
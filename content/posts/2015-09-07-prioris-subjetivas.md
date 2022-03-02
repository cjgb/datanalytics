---
author: Carlos J. Gil Bellosta
date: 2015-09-07 08:13:27+00:00
draft: false
title: Prioris, ¿subjetivas?

url: /2015/09/07/prioris-subjetivas/
categories:
- estadística
tags:
- estadística bayesiana
- priori
- subjetividad
---

Dentro de unos días voy a hablar de [estadística bayesiana](http://www.datanalytics.com/2015/07/15/un-modelo-jerarquico-para-lo-de-casillas/) en [Machine Learning Spain](http://www.meetup.com/MachineLearningSpain/). Plantearé una distribución _a priori_ muy poco informativa:

{{< highlight R >}}
alfa ~ gamma(10, 1);
beta ~ gamma(10, 1);
{{< / highlight >}}

Me estoy preparando sicológicamente para que alguien me dé guerrita con lo de la subjetividad de las distribuciones _a priori_. Si tal es el caso, replicaré lo que sigue.

Hace unos días quise replicar el análisis. Pero la URL de la que bajo los datos dejó de contener los de la liga del año anterior y cargó los correspondientes al inicio (¿dos jornadas? ¿tres?) de la actual. ¡Apenas había datos!

Sin embargo, tiene todo el sentido del mundo utilizar la _posteriori_ de la liga anterior como _priori_ en esta. Igual no tenemos suficientes datos, pero ya sabemos —gracias al análisis realizado con los datos de la liga anterior— dentro de qué parámetros se mueve un portero de la primera división. Una ventaja adicional de la aproximación bayesiana al problema.

Para terminar: si acudes a la charla y me vienes lo de la subjetividad, me vas a caer fatal.

---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2015-09-07 08:13:27+00:00
draft: false
lastmod: '2025-04-06T18:53:00.434689'
related:
- 2016-01-04-las-prioris-no-informativas-estan-manifiestamente-sobrevaloradas.md
- 2018-10-23-abc-2.md
- 2023-09-07-problema-modelos-bayesianos-identicabilidad.md
- 2018-06-07-posterioris-informativas-o-mas-bien-cuando-te-informan-de-cual-es-la-posteriori.md
- 2020-07-06-un-articulo-muy-raro-raro-raro.md
tags:
- estadística bayesiana
- priori
- subjetividad
title: Prioris, ¿subjetivas?
url: /2015/09/07/prioris-subjetivas/
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
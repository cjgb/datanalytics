---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2022-06-30
description: Análisis de la suma de variables de Bernoulli heterogéneas más notas
  sobre su importancia real e histórica
lastmod: '2025-04-06T18:50:27.575663'
related:
- 2011-01-10-c2bfuna-caida-demasiado-drastica-de-la-varianza.md
- 2023-07-20-coeficientes-no-identificables.md
- 2016-09-28-como-se-escribia-verosimilitud-en-frances-en-1774.md
- 2023-07-25-tutorial-numpyro-1-modelos-probabilisticos.md
- 2012-01-12-localidad-globalidad-y-maldicion-de-la-dimensionalidad.md
tags:
- estadística
- bernoulli
- historia de la estadística
title: Sumas de variables de Bernuilli heterogénas
url: /2022/06/30/sumas-bernoullis-heterogeneas/
---

## I.

El otro día planteé en Twitter la siguiente encuesta:

![](/wp-uploads/2022/06/encuesta_twitter_bernoulli.png#center)

Como bien puede apreciarse, 16 personas tuvieron a bien contestar y nada menos que siete, casi la mitad, dieron con la respuesta acertada. Me gustaría saber qué cuentas de Twitter pueden presumir de una audiencia tan cualificada.

¿Por qué es esa respuesta correcta? Sean $p_i$ las probabilidades de éxito de $n$ bernoullis y $p$ el valor medio de las $p_i$. Entonces, la varianza de $Y$ es $np(1-p) = np - np^2$ y la de $X$ es

$$\sum_i p_i(1-p_i) = \sum p_i - \sum p_i^2 = np - \sum p_i^2.$$

Así que para comparar ambas varianzas solo tenemos que saber si $np^2$ es mayor que o igual a $\sum p_i^2$. Pero la desigualdad de Jensen nos dice que

$$p^2 \le \frac{1}{n} \sum p_i^2,$$

etc. (Vale, bueno, $\sigma^2(X) \le \sigma^2(Y)$, no necesariamente de forma estricta, pero Jensen también nos dice en qué casos se da la igualdad y son los más triviales del mundo.)

## II.

Así que si tenemos variables aleatorias de Bernoulli con probabilidades distintas y las sumamos (o promediamos) obtenemos una _cosa_ con menos variabilidad que si todas tuviesen la misma $p$. Es un resultado un poco contraintuitivo porque uno esperaría ---tal vez en un nivel lingüístico--- que agregando componentes desiguales habría de obtenerse un resultado más variable que si todos fuesen iguales. Aunque los trucos del _street fighting statistics_ nos dicen que si tomamos dos bernoullis con $p = 0$ y $p = 1$, su suma, siempre 1, va a tener menor variabilidad que la suma de dos bernoullis con $p = .5$. O que si tenemos varias bernouillis con $p_i$ tales que su media es $.5$, su varianza nunca puede exceder $n/4$ (dado que la función $p(1-p)$ tiene su máximo en $p=.5$).

## III.

Este problema tiene, entiendo, su importancia en el muestreo. Queremos saber a través de muestras cuánta gente, p.e., tiene perro. Te pueden decir que el 21.87% de la gente lo tiene. Pero eso no significa que la probabilidad de que alguien tenga perro es esa. Cada persona podría tener una propensión distinta a tener perro y ese 21.87% sería la media de esas $p_i$ desiguales.

Afortunadamente, el resultado anterior nos dice que el error cometido por esa estimación es menor no solo del que típicamente se construye usando $p=.5$ (el ḿaximo posible), sino que podría ser menor incluso que el obtenido usando $p=0.2187$.

## IV.

Este problema tiene 160 años de historia, como poco. Fue tratado por [Cournot](https://en.wikipedia.org/wiki/Antoine_Augustin_Cournot), más conocido por sus aportaciones a la economía que a la estadística, hacia 1840. Lo hizo dentro de un siglo en el que uno de los principales hilos del debate alrededor de la estadística era en qué medida podían matematizarse ---es decir, tratarse con las técnicas estadísticas propias de las ciencias duras--- los fenómenos sociales. Porque en una ciencia dura, las propensiones de los sujetos serían las mismas (por homogeneidad), mientras que en las ciencias sociales cabría esperar heterogeneidad entre los distintos individuos.
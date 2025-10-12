---
author: Carlos J. Gil Bellosta
categories:
- estadística
- probabilidad
date: 2012-08-09 06:54:23+00:00
draft: false
lastmod: '2025-04-06T18:59:29.320315'
related:
- 2014-02-12-de-ratios-apuestas-y-riesgos.md
- 2015-09-01-odds-probabilidades.md
- 2015-07-06-una-interpretacion-rapida-y-sucia-de-los-coeficientes-de-la-regresion-logistica.md
- 2010-11-12-abundando-en-lo-de-nuestra-ineptitud-para-estimar-la-probabilidad-condicionada.md
- 2024-12-19-promediar-predicciones.md
tags:
- estadística
- odds ratio
- odds
- probabilidad
- riesgo
title: Odds ratio vs probabilidad
url: /2012/08/09/odds-ratio-vs-probabilidad/
---

Hoy he sabido vía Twitter lo siguiente:

[![](/wp-uploads/2012/08/odds_ratio.png#center)
](/wp-uploads/2012/08/odds_ratio.png#center)

Como me ha intrigado el asunto de lo de la probabilidad, he acudido al [artículo original](http://www.nejm.org/doi/full/10.1056/NEJM199208133270705) donde he aprendido que (y, excúsenme: por primera vez no traduzco este tipo de citas):

>After we controlled for these characteristics through conditional logistic regression, the presence of one or more guns in the home was found to be associated with an increased risk of suicide (adjusted odds ratio, 4.8; 95 percent confidence interval, 2.7 to 8.5).

Es decir, lo que es 4.8 veces mayor no es la probabilidad en sí sino el _odds ratio_, concepto que no sé cómo carajos traducir al español. Y el _odds ratio_ no es la probabilidad sino [lo que dice la Wikipedia al respecto](http://en.wikipedia.org/wiki/Odds_ratio), que es, en resumen,

$$ { p_1/(1-p_1) \over p_2/(1-p_2)},$$

donde $p_1$ y $p_2$ serían en este caso la probabilidad de suicidio de las personas que tienen armas de fuego y la de la de los que no las tienen, respectivamente.

La relación entre probabilidades y _odds ratios_ viene dada por el siguiente gráfico,

[![](/wp-uploads/2012/08/odds_ratio_map.png#center)
](/wp-uploads/2012/08/odds_ratio_map.png#center)

también extraído de la Wikipedia, en el que se ve cómo las curvas _equiodsráticas_ comprenden parejas de probabilidades de muy diversa índole (**nota:** el gráfico muestra el logaritmo del _odds ratio_ y el logaritmo de 4,8 es alrededor de 1,5).

Ah, eso sí, para eventos de pequeña probabilidad (como el discutido aquí), donde ambos $1-p_i \approx 1$ es cierto que se cumpliría que la razón de las probabilidades sería _aproximadamente _de 4,8. Pero me temo que en esta ocasión la flauta ha sonado de casualidad.

(**Otra nota:** El autor del _tuit_ original ha sido muy cordial conmigo cuando le he comunicado el error. Y no quiero que mi última frase se interprete como ataque personal sino como constatación del hecho de que vamos a tener que estar atentos a qué es lo que nos quieren decir cuando pronuncian la palabra _probabilidad _de la misma manera que ya nos estamos acostumbrando a interpretar con sumo escepticismo la palabra _billón_. ¡Y es que ni siquiera contamos con una traducción en condiciones!)
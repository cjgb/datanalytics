---
author: Carlos J. Gil Bellosta
date: 2021-12-09 09:13:00+00:00
draft: false
title: Más sobre la estimación de probabilidades de eventos que no se repiten

url: /2021/12/09/mas-sobre-la-estimacion-de-probabilidades-de-eventos-que-no-se-repiten/
categories:
- estadística
- libros
tags:
- calibración
- predicción
- superforecasting
- tetlock
---

Hace un tiempo hablé sobre la estimación de [probabilidades de eventos que ocurren una única vez](https://www.datanalytics.com/2021/04/08/sobre-las-probabilidades-de-eventos-que-ocurren-una-unica-vez/): elecciones, etc. Argumentaba cómo pueden ser descompuestos en dos partes muy distintas cualitativamente: una asociada a eventos que sí que se han repetido; otra, específica y única. El tamaño relativo de ambas componentes afecta a eficacia del mecanismo de estimación.

Esta vez quiero ilustrarlo con un ejemplo extraído, traducido y adaptado de [aquí](https://slatestarcodex.com/2016/02/04/book-review-superforecasting/) que ilustra el procedimiento.

El autor se plantea la estimación de la probabilidad de que se desencadene una guerra entre ambas Coreas con más de 1000 fallecidos en los próximos 10 años. Y dice al respecto:

  * Los _malos_ predictores argumentarían _intuitivamente_ alrededor de cuestiones sobre lo _locos_ que están los norcoreanos o lo inhabitual de las guerras en los últimos años.
  * Los superforecasters ([a la Tetlock](https://www.goodreads.com/book/show/23995360-superforecasting)) dirían:
    * La última guerra entre ambos países ocurrió hace más de 50 años.
    * Por lo tanto (aplicando el [principio de indiferencia](https://en.wikipedia.org/wiki/Principle_of_indifference) o su derivada, el [principio de sucesión](https://en.wikipedia.org/wiki/Rule_of_succession)), la probabilidad de una guerra tal no puede estar muy por encima del 20%.
    * La probabilidad de que ocurra este evento en esta década tiene que ser algo más baja (Corea del Norte tiene menos aliados hoy en día, etc.) y la dejan en un 15%.

Obviamente, que el argumento en particular y el método en general _funcionen_ es una cuestión empírica. Es imposible evaluar si la probabilidad de ese evento en particular es o no del 15%, pero sí que es posible evaluar la calibración de series de predicciones realizadas con métodos similares al anterior y, bueno, las evidencias parecen estar a su favor: véase, por ejemplo, el libro citado más arriba o, para los impacientes, estos [resultados de calibración](https://slatestarcodex.com/2015/01/01/2014-predictions-calibration-results/).
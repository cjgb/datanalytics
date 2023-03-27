---
author: Carlos J. Gil Bellosta
date: 2023-03-28
title: 'Todos los SE son iguales, pero algunos son más iguales que otros'

url: /2023/03/28/todos-los-se-iguales/
categories:
- programación
tags:
- home server
- python
- kivy
- domótica
---

SE significa arriba_squared errors_, pero lo que aplica a cualquier otro tipo de error, incluso los que son más apropiados que los cuadráticos. El problema de los SE es que se tienden a considerar _iguales_ y por eso se los promedia en engendros como el RMSE y similares. Pero incluso entre los SE hay jerarquías, como evidencia la siguiente historia.

Con lo del covid se pusieron en marcha muchas iniciativas. Una de ellas fue la del
[COVID-19 Forecast Hub](https://covid19forecasthub.org/). En ese _hub_ se consolidaron los resultados de muchos modelos relacionados con el covid (relacionados con casos, hospitalizaciones y defunciones) desarrollados por la _créme de la créme_: MIT, Columbia, Harvard, Google, etc. Todos, sobre el papel, tenían RMSE's envidiables. Pero ninguno valía para gran cosa. Al final, se ha impuesto la cordura y la
[página que recogía los resultados de los modelos](https://viz.covid19forecasthub.org/)
ha _chapado_ con el siguiente cartelito:

> Most forecasts have failed to reliably predict rapid changes in the trends of reported cases and hospitalizations. Due to this limitation, they should not be relied upon for decisions about the possibility or timing of rapid changes in trends. Ensemble case forecasts were discontinued as of February 20, 2023 and death forecasts were discontinued as of March 6, 2023.

Efectivamente, los modelos acertaban cuando no pasaba nada y el futuro era similar al pasado. Pero fallaban en los momentos más críticos (e importantes): aquellos en los que hay un rápido cambio de tendencia.

## Coda 1

Esto no te lo contarán por ahí. Por ahí solo se habla de los grandes éxitos del ML.

## Coda 2

Lo peor, peor, peor con diferencia de la profesión es tener que lidiar de vez en cuando con estadísticos _aplicaditos_ (no, no aplicados sino _aplicaditos_). Los estadísticos aplicaditos aprovecharon sus clases de la facultad, repitieron exitosamente parrafitos de los apuntes en sus exámenes, asimilaron ciertas liturgias numéricas y su dialecto ---y su discurso--- es indistinguible de una traducción mejicana del Berger y Casella. Faltos de sentido común, solo tienen la razón ---en una acepción que no es la primera--- que les da el 99% de la bibliografía estadística de los últimos 120 años. Son los que quitan variables de un modelo porque un p-valor es mayor que 0.05 o dan por bueno un modelo porque tiene una R² de nosecuánto ---¿a cuánto cotiza la R² aceptable estos días?: no sigo ese mercado---.

La realidad acaba llegando y poniendo de manifiesto que estaban promediando cosas heterogéneas, de muy desigual valor e importancia.
---
author: Carlos J. Gil Bellosta
categories:
- programación
date: 2023-03-28
lastmod: '2025-04-06T18:55:10.681335'
related:
- 2020-03-19-casos-de-coronavirus-en-madrid-provincia-un-modelo-muy-crudo-basado-en-la-mortalidad.md
- 2015-08-28-todos-los-errores-son-iguales-pero-algunos-son-mas-iguales-que-otros.md
- 2022-03-08-estadistica-ciencias-blandas.md
- 2020-03-20-casos-de-coronavirus-en-madrid-provincia-un-modelo-un-poco-menos-crudo-basado-en-la-mortalidad-ii.md
- 2023-10-19-errores-chatgpt.md
tags:
- home server
- python
- kivy
- domótica
title: Todos los SE son iguales, pero algunos son más iguales que otros
url: /2023/03/28/todos-los-se-iguales/
---

SE significa arriba, en el título, _squared errors_, pero lo que se cuenta debajo aplica a cualquier tipo de error, incluso los que son más apropiados que los cuadráticos. El problema de los SE es que se tienden a considerar _iguales_ y por eso se los promedia en engendros como el RMSE y similares. Pero incluso entre los SE hay jerarquías, como evidencia la siguiente historia.

Con lo del covid se pusieron en marcha muchas iniciativas. Una de ellas fue la del
[COVID-19 Forecast Hub](https://covid19forecasthub.org/). En ese _hub_ se consolidaron los resultados de muchos modelos relacionados con el covid y que, típicamente trataban de estimar el número futuro de casos, hospitalizaciones y defunciones. Fueron desarrollados por la _crème de la crème_: MIT, Columbia, Harvard, Google, etc. Todos, sobre el papel, tenían RMSEs envidiables. Pero ninguno valía para gran cosa. Al final, se ha impuesto la cordura y la
[página que recogía los resultados de los modelos](https://viz.covid19forecasthub.org/)
ha _chapado_ y ha colgado en la persiana el siguiente cartelito (con mi traducción):

> La mayor parte de las modelos han fracasado a la hora de predecir los cambios rápidos en las tendencias del número de casos y hospitalizaciones. Por este motivo, no se debería confiar en ellos para la toma de decisiones acerca de la posibilidad de cambios rápidos de tendencia y determinación del momento en que estos pudieran ocurrir. Los modelos combinados de casos dejaron de actualizarse el 20 de febrero de 2023 y los de defunciones, el 6 de marzo de 2023.

Efectivamente, los modelos acertaban cuando no pasaba nada y el futuro era similar al pasado. Pero fallaban en los momentos más críticos (e importantes): aquellos en los que hay un cambio rápido de tendencia.

## Coda 1

Esto no te lo contarán por ahí. Por ahí solo se habla de los grandes éxitos del ML.

## Coda 2

Lo peor, peor, peor con diferencia de la profesión es tener que lidiar de vez en cuando con estadísticos _aplicaditos_ (no, no aplicados sino _aplicaditos_). Los estadísticos aplicaditos aprovecharon sus clases de la facultad, repitieron exitosamente parrafitos de los apuntes en sus exámenes, asimilaron ciertas liturgias numéricas y su dialecto ---y su discurso--- es indistinguible de una traducción mejicana del Berger y Casella. Faltos de sentido común, solo tienen la razón ---en una acepción que no es la primera--- que les otorga el 99% de la bibliografía estadística de los últimos 120 años. Son los que quitan variables de un modelo porque un p-valor es mayor que 0.05 o dan por bueno otro porque tiene una R² de nosecuánto ---¿a cuánto cotiza la R² aceptable estos días? No sigo ese mercado---.

La realidad acaba llegando y poniendo de manifiesto que estaban promediando cosas heterogéneas, de muy desigual valor e importancia.
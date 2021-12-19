---
author: Carlos J. Gil Bellosta
date: 2020-10-21 09:13:00+00:00
draft: false
title: z-scores, p-scores y el problema de las áreas pequeñas

url: /2020/10/21/z-scores-p-scores-y-el-problema-de-las-areas-pequenas/
categories:
- estadística
- números
tags:
- momo
- momocalor
- mortalidad
- z-score
---

Uno de los problemas que encuentra uno al monitorizar series temporales en diversas escalas es la de encontrar una métrica de _desviaciones de la normalidad_ (al menos en tanto que los sectores en los que trabajo no se pueblen de postmodernistas que comiencen a cuestionar qué es eso de la normalidad y a argumentar que si es un constructo tan injusto como inasequible) que cumpla una serie de requisitos:

* El primero y fundamental, que detecte efectivamente desviaciones de la normalidad.
* Que sea interpretable.
* Que permita la comparación entre distintas series.

Estoy tentado a volver sobre el asunto de la mortalidad y de MOMO para ilustrarlo. Porque en proyectos de esa naturaleza hay que construir una métrica que nos diga si es igual de relevante (o de indicador de problemas subyacentes serios) un incremento de 20 defunciones en Madrid o de 2 en Teruel.

Una de las soluciones está basada en los _z-scores_, i.e., desviaciones observadas dividida por la desviación estándar de las observaciones. Así se publican, por ejemplo, en [EuroMOMO](https://euromomo.eu/graphs-and-maps/#z-scores-by-country). Los _z-scores_ corrigen de alguna manera el problema de las áreas pequeñas (piénsese en Teruel) pero no son directamente interpretables ni permiten una comparación clara entre zonas diversas.

Puede darse incluso el caso de que un sistema de alertas como MOMO pudiera generar algunas en, p.e., Andalucía, sin que se generasen en ninguna de sus provincias (¿por qué?).

En el artículo _[A pandemic primer on excess mortality statistics and their comparability across countries](https://ourworldindata.org/covid-excess-mortality)_ se propone una alternativa: el uso de _p-scores_, que no son otra cosa que el incremento porcentual de la mortalidad (observada sobre la esperada). Esta métrica funciona relativamente bien para zonas con poblaciones comparables (en orden de magnitud), pero conduce a incurrir de nuevo en [el error sobre el que Kahneman y Tversky nos advirtieron ya hace mucho tiempo](https://es.wikipedia.org/wiki/Insensibilidad_al_tama%C3%B1o_de_la_muestra).

Así que creo que mañana voy a tratar de describir el sistema que subyace a MOMOCalor, que es raro, semioriginal, semimío, y que creo que no incurre en el problema antes mencionado. Aunque, por otro lado, me temo, no sé si es o no fácil de interpretar.
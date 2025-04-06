---
author: Carlos J. Gil Bellosta
categories:
- ciencia de datos
- estadística
date: 2019-01-14 08:13:30+00:00
draft: false
lastmod: '2025-04-06T19:01:12.628946'
related:
- 2020-03-05-clasificacion-vs-prediccion-2.md
- 2019-03-18-las-decisiones-son-lo-primario-la-estadistica-es-subsidiaria.md
- 2022-02-17-examenes-probabilisticos.md
- 2023-03-02-conformal-prediction.md
- 2019-01-23-reglas-de-scoring-impropias-un-ejemplo.md
tags:
- clasificación
- harrell
- predicción
title: Clasificación vs predicción
url: /2019/01/14/clasificacion-vs-prediccion/
---

Traduzco de [aquí](http://www.fharrell.com/post/classification/):

>Es crucial distinguir predicción y clasificación. En el contexto de la toma de decisiones, la clasificación es una decisión prematura: la clasificación combina predicción y decisión y usurpa al decisor la consideración del coste del error. La regla de clasificación tiene que reformularse si cambian las recompensas o la base muestral. Sin embargo, las predicciones están separadas de las decisiones y pueden ser aprovechadas por cualquier decisor.
>
> La clasificación es más útil con variables objetivo no estocásticas o determinísticas que ocurren frecuentemente y cuando no ocurre que dos sujetos con los mismos atributos pueden tener comportamientos distintos. En estos casos, la clave es modelar las tendencias (es decir, las probabilidades).
>
> La clasificación debería usarse cuando las variables objetivo son claramente distintas y los predictores disponibles bastan para proporcionar a cada sujeto una probabilidad próxima al 100% de pertenencia a las clases.

El resto es tanto o más aprovechable.
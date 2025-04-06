---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2017-11-20 08:13:43+00:00
draft: false
lastmod: '2025-04-06T19:11:01.461681'
related:
- 2018-11-28-charla-predicciones-y-decisiones-mas-alla-de-los-errores-cuadraticos.md
- 2018-11-14-modelos-y-sesgos-discriminatorios-unas-preguntas.md
- 2022-03-03-error-sesgo-modelos-lineales.md
- 2024-10-17-interpretacion-modelos.md
- 2019-12-04-p-valores-y-decisiones.md
tags:
- error
- estadística
- kaggle
- pérdida
title: La función de pérdida es una API entre los "stakeholders" de un análisis estadístico
url: /2017/11/20/la-funcion-de-perdida-es-una-api-entre-los-stakeholders-de-un-analisis-estadistico/
---

El objeto único de la estadística es informar decisiones.

V.g, si conceder un préstamo, proceder a la quimio, construir una línea de AVE entre Calatayud y Soria o permitir aparcar mañana en el centro de Madrid a los de Móstoles.

Pero quienes toman decisiones y quienes analizan datos suelen ser personas distintas. Típicamente, ni se conocen. Lo cual es tanto pésimo como tema para otra entrada distinta de esta.

Lo fundamental es que estas personas se comunican a través de, metafóricamente, APIs. Unas de las más usadas son los p-valores. Que son tan pésismos como tema para otra entrada distinta de esta.

Otras son las funciones de pérdida. La elección de la función de pérdida no es en absoluto neutral. La determinación de una función de pérdida adecuada al tipo de decisión ulterior es clave en el proceso de la llamada ingeniería estadística, es decir, la matematización de un problema previo a todo tipo de inferencia estadística o sancocho _cientificodatil_.

Si analistas y decisores no se conocen y el problema no está bien definido (o los actores son de segunda) los primeros bien pueden decantarse por medidas como el RMSE. El RMSE da el mismo peso a cualquier tipo de evento, lo cual se justifica cuando no hay criterio con el que jerarquizarlos. Pero en muchos casos, es conveniente penalizar selectivamente.

Pensemos en la contaminación. Si el nivel de NO2 excede cierto umbral, 200 nosequés, pasan cosas: los vecinos de Móstoles no pueden aparcar en el centro de Madrid. Si el modelo dice 20 cuando el valor real es 40, el RMSE aprecia una diferencia de 20; si el modelo dice 190 cuando el valor real es 210, lo mismo. Al RMSE le da igual. Pero a un conductor de Móstoles, no.

Podría hablar más pero os robaría un tiempo que prefiero que dediquéis a meditar lo anterior. Solo quiero justificar esta entrada. Tiene que ver con una pregunta que alguien me ha hecho sobre un aspecto que le interesaba de mi infame charla [Antikaggle](https://www.datanalytics.com/2017/02/13/diapositivas-de-antikaggle-contra-la-homeopatia-de-datos/). Mencioné en ella por encima estas cuestiones, pero se me solicitaba una ampliación. Esencialmente, venía a decir que una de mis críticas a Kaggle --una, además, de las menos oídas y que bien podría resultar original (de servidor)-- tiene que ver con el hecho de que la función de pérdida viene dada y que no es el analista, en discusión con el decisor (o apelando a su buen criterio) diseñe la más adecuada al ulterior problema de decisión.
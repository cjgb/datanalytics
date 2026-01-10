---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2022-02-08
lastmod: '2025-04-06T19:02:23.720651'
related:
- 2023-05-25-evaluaciones-clinicas-actuariales.md
- 2024-10-17-interpretacion-modelos.md
- 2012-01-12-localidad-globalidad-y-maldicion-de-la-dimensionalidad.md
- 2014-06-16-tan-actual-25-anos-despues.md
- 2022-03-18-diagramas-causales-hipersimples-2-control.md
tags:
- libros
- predicción
- subjetividad
- meehl
title: El efecto "pierna rota"
url: /2022/02/08/efecto-pierna-rota/
---

Esa entrada tiene que ver con dos cosas. Una, [la que escribí hace un tiempo](https://datanalytics.com/2021/10/01/esos-felices-momentos-le-verrier/) sobre el análisis de modelos a la vista de información que nosotros tenemos y ellos, por lo que sea, no. La segunda, que es además la que da nombre a esta, un fenómeno que menciona Paul Meehl en su libro [_Clinical Versus Statistical Prediction_](https://www.goodreads.com/book/show/3183060-clinical-versus-statistical-prediction).

El libro describe y las compara predicciones _clínicas_ (subjetivas, basadas en la experiencia y usando como datos dossieres más o menos extensos) y las _estadísticas_, basadas en puntuaciones (o _scores_) construidos a partir de en unas cuantas variables. El tema central del libro (¡de los años 50!) es cómo esos modelos estadísticos que apenas usan unos cuantas variables funcionan generalmente tan bien o mejor que las predicciones clínicas. Lo hace, además, a través de un metaanálisis de la literatura existente en la época (y actualizado algunas décadas después por el autor sobre una base evidentemente mucho más amplia de estudios).

Dos pequeñas digresiones:
* Nótese que en ningún sitio he mencionado que las unas las realicen humanos y las otras, máquinas. De hecho, en la época en la que se escribió el libro, todas eran realizadas por personas; solo que en unos casos de manera cualitativa y, en los otros, mediante procedimientos automáticos.
* El libro es, por lo dicho, muy superior a la literatura contemporánea típica sobre el tema, que suele limitarse a destacar lo nocivo de los _algoritmos_ argumentando alrededor de algunos presuntos casos anecdóticos y, sobre todo, sin plantear y comparar con una alternativa viable.

En cierta parte del libro, el autor ejerce de abogado del diablo y discute el llamado _fenómeno de la pierna rota_, que es el tema de la entrada de hoy. Es, como se verá, uno de esos casos en los que la supervisión por parte de un _clínico_ podría mejorar la predicción de un modelo estadístico.

El autor discute un hipotético modelo para predecir si Don X va o no a ir al cine un día dado. El modelo estadístico tiene en cuenta el día de la semana, el tiempo, etc., y realiza su predicción en función de esas variables una vez entrenado con datos históricos. El clínico, no obstante, podría averiguar que Don X sufrió un accidente a consecuencia del cual, se rompió la pierna; entonces puede predecir con casi total certeza que Don X no irá al cine. La variable pierna rota, obviamente, no está en el modelo. De haber estado, habría generado una predicción de P = 0. Pero una característica de los modelos estadísticos, por su idealización, es que ignoran gran parte de la información disponible. Precisamente, saber qué es aquello que ignora el modelo ayuda a tanto a entenderlo como a mejorar sus predicciones.

En efecto de la pierna rota se refiere exclusivamente a variables muy atípicas de un impacto grande en la predicción. Sería imposible que un modelo recogiese todos los posibles eventos del tipo pierna rota que pudieran suceder. Aunque ---y en omitirlo creo que patina Meehl--- siempre sería posible incorporar en los modelos alguna variable de aluvión que recogiese cualquier evento del tipo pierna rota disponible en la información sobre los sujetos sobre los que se realiza la predicción.

Pero tampoco va a recoger otro tipo de información que pudiera tener un impacto moderado ---ya no hablamos de variables extremas de la categoría pierna rota--- en los resultados del modelo. Eso viene a ser lo que se discutía en las entradas que dan pie a esta y es la lección que podemos sacar de toda esta historia.
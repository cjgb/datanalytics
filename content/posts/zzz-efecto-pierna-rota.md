---
author: Carlos J. Gil Bellosta
date: 2100-12-13
title: 'El efecto "pierna rota"'

url: /asdf/
categories:
- estadística
- números
tags:
- euromomo
- momo
- mortalidad
---

Esa entrada tiene que ver con dos cosas. Una, la que escribí hace un tiempo sobre en análisis de modelos a la vista de información que nosotros tenemos y ellos, por lo que sea, no. La segunda, que es además la que da nombre a esta, un fenómeno que menciona Paul Meehl en su libro [_Clinical Versus Statistical Prediction_](https://www.goodreads.com/book/show/3183060-clinical-versus-statistical-prediction).

Este es un libro sobre el que habré de volver pronto, pero adelanto la discusión sobre el fenómeno de la pierna rota que introduce en él el autor. El libro describe y compara predicciones clínicas (subjetivas, basadas en la experiencia y usando como datos dosieres más o menos extensos) y las estadísticas, basadas en puntuaciones (scores) basadas en unas cuantas variables. El libro (¡de los años 50!) trata precisamente sobre cómo esos modelos estadísticos que apenas usan unos cuantas variables, funcionan generalmente tan bien o mejor que las predicciones clínicas

En cierto punto del libro, el autor discute un hipotético modelo para predecir si X va o no a ir al cine un día dado. El modelo estadístico tiene en cuenta el día de la semana, el tiempo, etc. y realiza su predicción en función de esas variables una vez entrenado con datos históricos. El clínico, no obstante, podría averiguar que X sufrió un accidente a consecuencia del cual, se rompió la pierna; entonces puede predecir con casi total certeza que X no irá al cine. La variable pierna rota, obviamente, no está en el modelo. De haber estado, habría generado una predicción de P = 0. Pero una característica de los modelos estadísticos, por su idealización, es que ignoran gran parte de la información disponible. Pero saber precisamente qué es aquello que ignora el modelo ayuda a tanto a entenderlo como a mejorar sus predicciones.

En efecto de la pierna rota se refiere exclusivamente a variables muy atípicas de un impacto grande en la predicción. Sería imposible que un modelo recogiese todos los posibles eventos del tipo pierna rota que pudieran suceder. Aunque —y en omitirlo creo que patina Meehl— siempre sería posible incorporar en los modelos alguna variable de aluvión que recogiese cualquier evento del tipo pierna rota disponible en la información sobre los sujetos sobre los que se realiza la predicción.

Pero tampoco va a recoger otro tipo de información que pudiera tener un impacto moderado —ya no hablamos de variables extremas de la categoría pierna rota— en los resultados del modelo. Eso viene a ser lo que se discutía en las entradas que dan pie a esta y es la lección que podemos sacar de toda esta historia.
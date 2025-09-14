---
author: Carlos J. Gil Bellosta
categories:
- ciencia de datos
- estadística
date: 2012-01-12 23:14:47+00:00
draft: false
lastmod: '2025-04-06T18:51:56.470212'
related:
- 2023-09-07-problema-modelos-bayesianos-identicabilidad.md
- 2022-03-03-error-sesgo-modelos-lineales.md
- 2011-01-10-c2bfuna-caida-demasiado-drastica-de-la-varianza.md
- 2020-06-29-sobremuestreando-x-y-no-y.md
- 2023-07-20-coeficientes-no-identificables.md
tags:
- esl
- ciencia de datos
- sesgo
- varianza
title: Localidad, globalidad y maldición de la dimensionalidad
url: /2012/01/13/localidad-globalidad-y-maldicion-de-la-dimensionalidad/
---

Escribo hoy al hilo de una pregunta de la lista de correo de quienes estamos leyendo _[The elements of statistical learning](https://datanalytics.com/2011/12/23/nos-leemos-the-elements-of-statistical-learning-de-tapa-a-tapa/)_.

Hace referencia a la discusión del capítulo 2 del libro anterior en el que trata:

* El compromiso (_trade off_) entre el sesgo y la varianza de los modelos predictivos.
* Cómo los modelos _locales_ (como los k-vecinos) tienden a tener poco sesgo y mucha varianza.
* Cómo los modelos globales (como los de regresión) tienden a tener poca varianza y mucho sesgo.
* Cómo la _maldición de la dimensionalidad_ afecta muy seriamente a los modelos locales y mucho menos a los globales.

Y voy a tratar de ilustrar esos conceptos con un ejemplo extraído de mi experiencia de consultor.

Trabajé un otoño-invierno en un banco que quería predecir la propensión de sus clientes a adquirir nosequé producto. Nuestros lumbreras de turno pergeñaron un procedimiento —nosotros, en eso, éramos unos _mandaos_— que consistía en lo siguiente:

1. Seleccionar unas cuantas variables _altamente predictivas_.
2. Partirlas en 2, 3 o 4 tramos.
3. Asignar a los clientes —unos dos millones— a la casilla (determinada por los tramos de las variables) que les correspondía.
4. Deducir las propensiones de los clientes de cada casilla, esencialmente, a partir de los de una muestra de unos cuantos miles de clientes seleccionados —aproximadamente— mediante un muestreo estratificado por celda a los que se hacía una especie, digamos, de encuesta.

Si hay pocas variables, hay pocas celdas y a cada una le corresponden muchos casos de muestra. Pero si se quieren utilizar muchas variables, el número de casos por celda comienza a descender. Y en ocasiones, como nos sucedía, había celdas vacías: no existía ninguna clienta de edad avanzada con residencia en municipios de menos de 5000 habitantes, etc.

El problema es el mismo que el plantea el libro bajo el epígrafe de maldición de la dimensionalidad, aunque bajo una óptica algo distinta.

Nuestro modelo de predicción era bastante local. Imaginemos —aunque no era exactamente así—, que predecimos la propensión de los clientes de una celda como la media de la de los seleccionados en dicha celda. Nos podemos preguntar:

* ¿Qué pasa si en una determinada celda sólo hay un (por ejemplo) cliente seleccionado?
* ¿Hasta qué punto es fiable extrapolar a una casilla entera las propensiones de, únicamente, doña Juana y doña Miguela?

Las predicciones de cada casilla —una especie de modelo local—, por el hecho de responder a muy pocos sujetos —efecto de la maldición de la dimensionalidad— son muy inestables.

Si el año siguiente se hubiese repetido el estudio —¿lo habrán repetido realmente?— en cada casilla eligirían, probablemente, representantes distintos y, muy probablemente también, variarían mucho los resultados.

Si por un lado el proceso se repitiese año tras año, durante muchos, muchos años obteniéndose la serie de propensiones estimadas $latex p_i$ y, por el otro, Dios bajase de los cielos y revelase el valor verdadero, $latex p$ de la propensión en una casilla determinada, entonces podríamos calcular

$$ \frac{1}{n} \sum \left(p_i -p \right)^2 = \frac{1}{n} \sum \left(p_i - \frac{1}{n} \sum p_i \right)^2 + \left(\frac{1}{n} \sum p_i - p \right)^2 $$

El segundo término representa el sesgo de la predicción en la casilla, la diferencia entre la predicción media (sobre muestras distintas) y el valor verdadero del parámetro. Y podemos conceder que, si el número de años es suficientemente alto, podría considerarse próximo a cero. Y el primero correspondería a la variabilidad de las predicciones entre los distintos años que, de acuerdo con la discusión anterior, sería elevado. Precisamente porque, debido a la maldición de la dimensionalidad, las predicciones están basadas en muy pocos sujetos.

Pero imaginemos que en lugar de utilizar el esquema anterior nos hubiésemos decantado por un modelo de regresión logística basado en unos cuantos cientos o miles de sujetos. Y que cada año, como en la situación anterior, se repitiese el análisis. Seguramente, los coeficientes del modelo no variarían sustancialmente de año en año pero que el error de predicción en algunos subconjuntos de sujetos singulares —piénsese en las celdas de la discusión anterior— estuviese desviado, igualmente desviado, todos los años. Por lo que cabría esperar muy poca variación interanual pero mucho sesgo.

¿Qué es preferible? ¿Cómo pueden mitigarse estos problemas? Pues, primero, siendo conscientes de que existen. Y segundo, leyendo el libro, sea con nuestros 22 voluntarios o por cuenta propia.
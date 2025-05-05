---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2016-06-21 08:13:28+00:00
draft: false
lastmod: '2025-04-06T19:08:30.082618'
related:
- 2022-03-03-error-sesgo-modelos-lineales.md
- 2016-06-22-gbm-ii-minizacion-de-funciones-perdidas-cuadraticas-residuos-y-gradientes.md
- 2014-02-06-experimentos-con-el-paquete-gbm.md
- 2014-09-12-bajo-el-capo-del-particionamiento-recursivo-basado-en-modelos.md
- 2012-01-12-localidad-globalidad-y-maldicion-de-la-dimensionalidad.md
tags:
- estadística
- gbm
title: 'GBM (I): Una mentira sugerente'
url: /2016/06/21/gbm-i-una-mentira-sugerente/
---

Hace un tiempo resumí los GBMs (_Gradient Boosting Machines_) [en una línea](https://datanalytics.com/2016/03/11/gbm-sintetizado-en-una-linea/). Hoy comienzo una serie de varias entradas para que nadie tenga excusa de no saber de qué va la cosa. Arranco con _una mentira sugerente_. Porque lo que voy a contar no es del todo cierto, pero motiva lo que vendrá después.

Consideremos un conjunto de datos medio famoso: el de los [precios de los alquileres en Múchich](http://www.statistik.lmu.de/service/datenarchiv/miete/miete_e.html). Comencemos con un modelo sencillo, una regresión lineal que relacione el precio del alquiler con los metros cuadrados, i.e.,

$$ \text{price} \sim a_0 + a_1 \text{size} + \epsilon.$$

Nótese cómo este modelo simple es el que muchos de quienes se dedican al negocio inmobiliario tienen en mente: el [precio del alquiler por metro cuadrado](http://www.statista.com/statistics/431672/commercial-property-prime-rents-europe/) se usa a menudo como indicador primero de un mercado. Referirse a ese precio medio es, en esencia, dar por bueno ese modelo.

Pero echemos un vistazo a los residuos. El siguiente gráfico,

![munich_residuos_regresion](/wp-uploads/2016/06/munich_residuos_regresion.png#center)

extraído de [aquí](http://www.interactivegraphics.org/Slides_files/CaseStudyE.pdf), muestra tanto el histograma de los residuos como su distribución con respecto a otra variable, el año de construcción del edificio. Como puede apreciarse, esta variable contiene mucha información sobre los precios: el metro cuadrado de los edificios más antiguos tiende a ser inferior al de los nuevos. El modelo simple no captura toda la información del conjunto de datos y podemos hilar más fino usando esta nueva variable.

De querer mejorar nuestro modelo de predicción de precios, se nos abren dos rutas alternativas. La tradicional y más frecuentada es la de introducir la variable antigüedad —preferiblemente centrada o el término independiente será el precio promedio de un apartamento en el Munich del año en que el rey Herodes mataba niños en Palestina— en el modelo, i.e., plantear

$$ \text{price} \sim a_0 + a_1 \text{size} + a_2 \text{anti} + \epsilon.$$

Alternativamente, se puede construir un modelo simple que trate de estimar el valor de los residuos en función del año de construcción, es decir,

$$ p - \hat{p}_i = r \sim a_0 + a_1 \text{anti} + \epsilon.$$

De este modo, nuestra predicción sobre el precio $latex p$ de un apartamento será $latex \hat{p_1} + \hat{p_2}$, es decir, la suma de dos modelos, uno construido sobre los valores de la variable original y otro sobre los residuos.

Nota: aunque está escrito en todas partes, recuerdo que el modelo resultante no es el mismo que el obtenido con una regresión múltiple, nuestra primera alternativa. Una regresión múltiple puede estimarse añadiendo predictores uno a uno, pero no como indico aquí.

Y, retomando el hilo del artículo y proyectándolo más allá, podría pensarse en sumar modelos construidos todos ellos iterativamente sobre los residuos del anterior.

Aun insistiendo que esto no es lo mismo que una regresión múltiple, la idea de sumar modelos simples construidos sobre los residuos anteriores, como veremos, es más profunda y llega más allá de lo que parece a primera vista: no es GBM pero, de alguna manera, lo sugiere.
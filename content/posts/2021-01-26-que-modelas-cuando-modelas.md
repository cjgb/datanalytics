---
author: Carlos J. Gil Bellosta
date: 2021-01-26 17:59:00+00:00
draft: false
title: ¿Qué modelas cuando modelas?

url: /2021/01/26/que-modelas-cuando-modelas/
categories:
- ciencia de datos
- estadística
tags:
- breiman
- ciencia de datos
- estadística
- modelos
---

Ahora que estoy trabajando en el capítulo dedicado a la modelización (clásica, frecuentista) de mi [libro](https://datanalytics.com/libro_estadistica/), me veo obligado no ya a resolver sino encontrar una vía razonable entre las tres ---¿hay más?--- posibles respuestas a esa pregunta.

La primera es **yo modelo un proceso (o fenómeno), los datos llegan luego**. Yo pienso que una variable de interés $latex Y$ depende de $latex X_i$ a través de una relación del tipo

$$ Y | X_i \sim N(f(X_i, \sigma)$$

y a partir de ahí sigue la cosa: obtener datos, de acuerdo con mis especificaciones, etc. En particular, si los datos son mutuamente independientes, la función de verosimilitud tendrá una forma más simple que si no. Pero esa es, para esta aproximación al problema, otra historia.

Lo importante de esta aproximación es que pone en el centro el fenómeno, a la naturaleza, y es agnóstica frente a los mecanismos de estimación, la manera en que se recogen los datos, etc.

La segunda es **yo modelo el proceso de obtención de datos**. Digámoslo así: el fenómeno es necesario, el proceso de obtención de datos es contingente. Pero mi modelo atiende ambos aspectos simultáneamente. Ahora, por ejemplo, queremos estudiar cierto fenómeno, pero cada sujeto experimental se mide varias veces; entonces tendría que modificar la formulación anterior y modelar explícitamente la correlación existente entre las medidas realizadas sobre el  mismo sujeto (sí, los llamados modelos de medidas repetidas). Es decir, tenemos que introducir en el modelo modificaciones para cancelar los aspectos contingentes del proceso de medida y quedarnos con una buena estimación de los necesarios. De todos modos, la forma en sí del modelo en esta segunda aproximación es distinta de la de más arriba y las herramientas de ajuste, también.

Merece la pena discutir si las dos respuestas anteriores son la misma cosa o no. Al fin y al cabo, en la primera, el error irreductible pretende absorber, entre otros, los errores de medida, los errores cometidos en el proceso de medición. En la segunda aproximación se distinguen unos de otros y algunos se modelan explícitamente. Pero al hacerlo, ya no se está modelando estrictamente el fenómeno. Un ejemplo: unos físicos están interesados en medir la relación entre presión y temperatura en un sistema; para ello diseñan un experimento en el que someten al sistema a distintas presiones y miden las correspondientes temperaturas. Esperan obtener un resultado de la forma

$$ t = k p \pm \epsilon$$

que es la que esperan escribir en el tomo sexto de su definitiva Introducción a la Termodinámica. Por eso están situados en el contexto de la primera respuesta al problema.

Sin embargo, si realizan medidas repetidas (frente a algún tipo de factor, como por ejemplo, el operario que realiza las mediciones), el modelo que tienen que ajustar sería algo así como

`t ~ p + (1 | operario)`

donde el factor experimental del operario está aún presente y es necesario realizar una transformación adicional para transformar (simplificar) esa última fórmula en la publicable para la posteridad.

La tercera es **yo modelo unos datos que _m'an enviao_**. No tengo ni idea de cómo se han recogido, no tengo ninguna hipótesis respecto a su forma, nada, cero, _zilch_. Así empieza, por ejemplo, el famoso artículo de Breiman, _[The Two Cultures](https://projecteuclid.org/download/pdf_1/euclid.ss/1009213726)_:

![](/wp-uploads/2021/01/two_cultures.png#center)

Pero utilizas una especie de llave inglesa que agarra cualquier tipo de tuerca, planteas una función de error más o menos razonable, y p'alante.

Tengo la desasosegadora sensación de que es la tercera vía la que se impone, la que se espera, la que se busca y la que se paga. En el fondo, es más simple. En el libro, sin embargo, todavía hay una tensión no resuelta entre la primera y la segunda aproximación que aún no tengo claro cómo zanjar.
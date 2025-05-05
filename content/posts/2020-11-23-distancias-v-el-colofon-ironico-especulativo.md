---
author: Carlos J. Gil Bellosta
categories:
- ciencia de datos
- consultoría
- estadística
date: 2020-11-23 09:13:00+00:00
draft: false
lastmod: '2025-04-06T18:50:13.660421'
related:
- 2020-11-02-distancias-i-el-planteamiento-del-problema.md
- 2020-11-06-distancias-iii-la-gran-pregunta.md
- 2020-11-20-distancias-iv-la-solucion-rapida-y-sucia.md
- 2012-01-12-localidad-globalidad-y-maldicion-de-la-dimensionalidad.md
- 2024-10-17-interpretacion-modelos.md
tags:
- ciencia de datos
- consultoría
- distancia
- estadística
title: 'Distancias (V): el colofón irónico-especulativo'
url: /2020/11/23/distancias-v-el-colofon-ironico-especulativo/
---

Remato la serie sobre distancias con una entrega especulativa. Según se la mire, o bien nunca se ha hecho esa cosa o bien nunca ha dejado de hacerse.

El problema es que ninguna de las propuestas desgranadas por ahí, incluidas las de mis serie, responde eficazmente [la gran pregunta](https://datanalytics.com/2020/11/06/distancias-iii-la-gran-pregunta/):

>_¿Son más próximos un individuo y una individua de 33 años o una individua de 33 y otra de 45?_

La respuesta es contextual, por supuesto, y en muchos de esos contextos habría que tener en cuenta las interacciones entre variables, que es a lo que apunta la pregunta anterior.

¿Cómo, pues?

En el fondo, una distancia implica una [petición de principio](https://es.wikipedia.org/wiki/Petici%C3%B3n_de_principio): de alguna manera, una propuesta concreta de distancia implica una jerarquía entre variables, una determinada forma de interrelación entre variables (que es, habitualmente, ninguna) y, por supuesto, un objetivo concreto: se dice que A y B son _parecidos_ porque se parecen de acuerdo con cierto criterio. El que este sea más o menos implícito y vago (o vaguísimo cuando lo seudopostulan gentes que saben poco) no significa que no exista.

Entonces,  la propuesta irónico-especulativa de hoy conlleva explicitar el criterio y definir A y B próximos cuando lo sean en términos de aquello precisamente que se aspira a modelar. Serán, pues, próximos, cuando operen de manera similar (p.e., compren los mismos tipos de productos).

Llevando la especulación hasta el extremo de una vaga propuesta de implementación, la forma de distancia basada en este principio funcionaría algo así como:

* Tengo unos datos `X` a los que están asociadas unas medidas de interés `Y`.
* Creo un modelo `f` para aproximar `Y ~ f(X)`.
* Defino `A` y `B` como próximas (en el espacio de las `X`) cuando `f(A)` y `f(B)` lo sean (en el espacio de las `Y`).

Esto, claramente, constituye un círculo vicioso cuando se piensa que uno construye distancias para tal vez crear modelos; pero esas distancias, por su parte, implicarían a su vez construir unos modelos previos. Y sí, es un/el círculo vicioso subyacente a mucho de lo que se hace en el llamado aprendizaje no supervisado.

Pero dependiendo de la estructura de `f`, quedarían si no resueltas, al menos propiamente encaradas todas las subpreguntas que emanan de la gran.
---
author: Carlos J. Gil Bellosta
date: 2022-04-12
title: "Gráficos mejorables en REE"
description: "REE debería replantearse cuál es la manera más efectiva de representar la 'estructura de generación' eléctrica"
url: /2022/04/12/graficos-mejorables-ree/
categories:
- gráficos
tags:
- graficaca
- ree
- electricidad
---

Creo que REE debería replantearse cómo representar la _estructura de generación_ eléctrica en su portal. Me refiero, por supuesto, [esto](https://demanda.ree.es/visiona/peninsula/demanda/acumulada/).

Por ejemplo, hoy, en el momento en el que escribo, el portal muestra

{{< figure src = "/wp-uploads/2022/04/graficaca_ree.png#center">}}

Uno podría preguntarse: ¿cuánto está produciendo la eólica (franja verde) a la hora marcada por la línea vertical negra? La respuesta depende de dónde se mire: según el gráfico, unos 8 GW; pero según la leyenda, casi 13 GW.

¿Cuál es el motivo? Los intercambios internacionales: exportaciones de 5 GW. La contribución de la energía eólica es la suma de la franja verde más la franja _beige_ (¿_beige_?). La verdad, es tan enrevesado que no sé ni bien cómo contarlo: ¿que un trozo sustancial de la franja verde está _solapada bajo_ la _beige_? ¿Que la franja verde no comienza en cero sino realmente desde el extremo inferior de la franja _beige_? ¿Pero solo a unas horas, porque a otras comienza a contar desde la azul?

Creo que el principal problema es que la gráfica no representa lo que promete. La promesa es que se trata de una representación de la _estructura de generación_, tal como reza el título. Sin embargo, combina generación por un lado y usos de la energía por otro: intercambios internacionales, enlace balear, bombeos, etc.

Desde luego, no responde a la pregunta _¿cuánto se está generando ahora en la España penínsular?_. Tampoco permite comparar la contribución relativa de las distintas tecnologías a la generación (porque, entre otras cosas, como se ha indicado arriba, un buen porcentaje de la producción eólica está escondido durante un buen número de horas en la fecha en que se extrajo el gráfico).

Tal vez, la buena gente de REE se limita a cumplir un expediente: tiene unos datos y busca una manera más o menos satisfactoria estéticamente de plasmarlos. Pero deja de lado los primeros principios de la visualización de datos:

1. Qué pregunta (o preguntas: pueden ser varias y de distinto tipo) tiene que tratar de responder la visualización.
2. Qué técnicas son las idóneas responderlas.

Honestamente, ignoro a qué pregunta da respuesta satisfactoria el gráfico que nos regala REE. Manifiestamente, ninguna de las que considero más naturales.

Si yo fuese REE, convocaría un concurso de ideas para renovar la manera en la que presentar esa información tan importante. Seas quien seas, aunque seas Google, hay más talento fuera que dentro.



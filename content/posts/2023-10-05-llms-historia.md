---
author: Carlos J. Gil Bellosta
categories:
- ciencia de datos
date: 2023-10-05
lastmod: '2025-04-06T19:00:04.903635'
related:
- 2016-08-29-la-consejeria-de-empleo-de-la-funcion-general-de-la-comunidad-autonoma-de-ordenacion-provincia-de-la-audiencia-profesional.md
- 2024-10-17-interpretacion-modelos.md
- 2024-03-21-cortos.md
- 2023-10-19-errores-chatgpt.md
- 2016-09-30-sobre-ciencia-de-datos-en-unir-teoria-y-gente.md
tags:
- ciencia de datos
- llms
- nlp
title: 'LLMs en perspectiva '
url: /2023/10/03/llms-dialectica
---

### I.

Llevamos muchos años ---muchos más de los que la mayoría de la gente piensa--- detrás de mecanismos del tipo

$$f(h) = x$$

donde $h$ es una _historia_ y $x$ es una continuación suya _coherente_ con $h$. El texto

> IN NO IST LAT WHEY CRATICT FROURE BIRS GROCID PONDENOME OF DEMONSTURES OF THE REPTAGIN IS REGOACTIONA OF CRE

se construyó en 1948 usando un procedimiento básico: $h$ son dos caracteres y $x$ es otro caracter que se elige al azar de acuerdo cierta probabilidad condicional $P(x | h)$ que se estima a partir de frecuencias observadas en un determinado corpus.

¿Y si, en lugar de caracteres, se usan palabras completas? Pues se pueden construir cadenas como

> THE HEAD AND IN FRONTAL ATTACK ON AN ENGLISH WRITER THAT THE CHARACTER OF THIS POINT IS THEREFORE ANOTHER METHOD FOR THE LETTERS THAT THE TIME OF WHO EVER TOLD THE PROBLEM FOR AN UNEXPECTED.

Los lectores más sofisticados de estas páginas estarán intuyendo que dichos modelos han tenido que ser extraídos necesariamente del artículo
[_A Mathematical Theory of Communication_](https://people.math.harvard.edu/~ctm/home/text/others/shannon/entropy/entropy.pdf)
que publicó de Claude Shannon nada menos que en 1948 y cuya lectura se recomienda muy encarecidamente: es mucho más provechosa que, p.e., seguir la abochornante actualidad del siglo que corre.

### II.

Una pequeña digresión: Inspirado por esos resultados, alentado por una buena gente y aprovechando la ocasión del centenario de la publicación de las Novelas Ejemplares, en 2014 creé
[_El escritor eXemplar_](/2014/03/13/el-escritor-exemplar/),
una cuenta de Twitter en la que a partir de lo que hoy llamaríamos un _prompt_ básico se generaban unas cuantas líneas en la forma y estilo de Cervantes.

El algoritmo es esencialmente el de Shannon con algunas pequeñas modificaciones para pulir las inevitables aristas que aparecen cuando se busca adaptar una teoría tal cual a un ejemplo concreto.


### III.

En el artículo de Shannon se comparan los dos modelos de la sección anterior y que, recuérdese, utilizan $h$ de tamaño dos, con otros que las tienen de tamaños uno y cero. La diferencia en los resultados es notable:

![](/wp-uploads/2023/shannon_llms.png#center)

Es inevitable pensar que aumentando el tamaño del histórico $h$ se podrían conseguir mejores resultados. Sin embargo, la vía del cómputo explícito de $P(x | h)$ se agota enseguida: el tamaño de las tablas crece exponencialmente ---exponencialmente de verdad, no como cuando los ingenieros o incluso peor dicen _exponencialmente_--- con la profundidad de $h$. Por poner unos números:

* ChatGPT-4 admite hasta $32768$ _tokens_ de histórico.
* Tiene un vocabulario de $50257$ _tokens_.
* Así que la probabilidad condicional, representada en forma de tabla, debería tener $50257$ columnas y $32768^{50257}$ filas, es decir, contener $4.66... \times 10^{226937}$ parámetros.

¿La solución? La de siempre: modelar. Recuérdese ---cosa que la estadística está contada de tal manera que parece pensada para que nos olvidemos de ello--- que un modelo no es otra cosa que una aproximación a $P(Y | X)$.


### IV.

Utilizando modelos ---en este caso, redes neuronales recurrentes--- preparé en el verano de 2016
[este pequeño ejemplo](/2016/08/29/la-consejeria-de-empleo-de-la-funcion-general-de-la-comunidad-autonoma-de-ordenacion-provincia-de-la-audiencia-profesional/). Caracter a caracter y con el texto de todo un año del BOE, llegué a generar textos como

> En el sector de la empresa, desemplado en el artículo 38 de la Ley 25/1988, de 28 de julio, por el que se encuentra el concepto de competencias para la medida de la publicación de trabajo y la persona de empleados en el desector de la cuenta de las actuaciones de esta resolución, en el plazo de constitucionalidad de la empresa en el artículo 1.1 del Real Decreto 122/2011, de 26 de julio, por el que se refiere el comercializador de la energía se ha presente el tercero o entrega el plan de desde la competencia de la Ley 17/1998, de 27 de noviembre, de Medidas para el procedimiento se encuentra para el concepto de planes de carácter precisa en el caso de un plazo de la retención de la comisión de las reglas necesidades de un procedimiento de desarrollar una concesión de la Comisión de la Comunidad Autónoma de Castilla y Secretaría de Empleo y del Estado.

No sé qué tamaño tenía la red; solo sé que la entrené en un portátil de aquella época, sin GPU y en no mucho tiempo.

Los distintos GPTs y el resto de los LLMs no dejan de ser variaciones de un mismo tema: parametrizaciones económicas de probabilidades condicionales discretas _descomunales_. Que, por eso mismo, producen secuencias de caracteres, tokens o palabras que entendemos adecuadamente correlacionadas con su histórico (incluyendo el _prompt_). No hay nada de particular ---y mucho menos, mágico--- en los _transformers_: dentro de unos años los conoceremos como una de las primeras tecnologías que tuvimos para _comprimir_ eficazmente la probabilidad condicional subyacente. De hecho, ya se oye hablar de una alternativa a ellos: [RetNet](https://arxiv.org/abs/2307.08621). Llegarán más y ninguno dejará de ser, en el fondo, una manera ingeniosa de aproximar empaquetar en unos cuantos GB una tabla de probabilidades enorme.


### IV.

Es comprensible que GPT-2 y lo que vino después, particularmente tras la publicación de ChatGPT, fuese para muchos algo nuevo, casi inexplicable, que rebosa los lindes de la disciplina en la que se fraguó y exija una conceptualización de otra índole; filosófica, si se me permite. Que no me interesa mayormente, pero que sigo de reojo por si me salpica.

Dicho lo cual, el aspecto extratécnico de los LLMs que más me llama la atención es el de cómo ilustra aquello de que
[_More is different_](https://www.science.org/doi/abs/10.1126/science.177.4047.393)
y cómo, siguiendo a rajatabla las viejas leyes del Diamat, el _mero_ incremento del tamaño de los modelos está acompañado de la emergencia de propiedades cualitativas, de habilidades, sorprendentes e insospechadas.
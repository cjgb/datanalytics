---
author: Carlos J. Gil Bellosta
categories:
- cortos
date: 2025-03-04
lastmod: '2025-04-06T19:06:41.625351'
related:
- 2024-03-21-cortos.md
- 2016-09-30-sobre-ciencia-de-datos-en-unir-teoria-y-gente.md
- 2023-10-05-llms-historia.md
- 2025-03-18-cortos-tecnologia.md
- 2025-02-11-cortos-llms.md
tags:
- tecnología
- ocr
- modelización
title: GPT en 500 líneas de SQL y algunos asuntos más
url: /2025/03/04/cortos-stats/
---

Creo que vamos a oír hablar bastante en los próximos meses sobre el uso de _algoritmos_ en la administración. Civio abrió fuego hace casi un año con [el caso de BOSCO](/2024/05/16/sentencia-bono-social-luz-i) y vuelve a la carga con
[_Las prisiones españolas usan un algoritmo sin actualizar desde 1993 para decidir sobre permisos de salida_](https://civio.es/justicia/2025/02/26/las-prisiones-espanolas-usan-un-algoritmo-sin-actualizar-desde-1993-para-decidir-sobre-permisos-de-salida/),
un artículo que permite muchas lecturas y algunas de ellas, desafortunadas.

La noticia anterior da pie, sin duda, a

![](/img/2025/computer-accountable.png#center)

con lo que se puede estar más o menos de acuerdo pero que está ---es innegable--- muy bien traído.

Hace no tanto, en 2023, se publicó [este artículo](https://source.opennews.org/articles/our-search-best-ocr-tool-2023/) sobre el estado del arte de aquel entonces en la tecnología OCR. Las cosas han cambiado mucho desde entonces de la mano de los LLMs y han surgido herramientas como [olmOCR](https://simonwillison.net/2025/Feb/26/olmocr/) que tienen pinta de poder hacerlo mucho, mucho mejor. (Addenda 2025-03-07: [Mistral OCR](https://mistral.ai/fr/news/mistral-ocr)).

Los interesados en el estado de las tecnologías de almacenamiento de electricidad deberían echar un vistazo a la sección correspondiente de [esto](https://www.construction-physics.com/p/reading-list-022225) y sus enlaces, que incluyen una presentación de 500 diapositivas sobre el asunto.

Andrew Gelman recoge y discute la gráfica

![](/img/2025/low-r2.png#center)

extraída de un artículo de dos nóbeles en economía [aquí](https://statmodeling.stat.columbia.edu/2025/02/28/the-r-squared-on-this-is-kinda-low-no/). Y
[aquí](https://statmodeling.stat.columbia.edu/2025/02/22/why-dont-machine-learning-and-large-language-model-evaluations-report-uncertainty/)
se pregunta por qué los métodos _modernos_ de aprendizaje automático y los LLMs son reticentes a discutir la incertidumbre.

[_Explain Extended_](https://explainextended.com/) es un blog en el que se escribe una entrada al año (y que se publica el 31 de diciembre). Los temas de los últimos años son:
- La implementación de un modelo de generación de imágenes por difusión en 700 líneas de _SQL puro_.
- GPT en 500 líneas de SQL.
- Resolución del cubo de Rubik en SQL.

¡Ver y no creer!
---
author: Carlos J. Gil Bellosta
categories:
- cortos
date: 2024-11-26
lastmod: '2025-04-06T18:51:00.450288'
related:
- 2024-03-21-cortos.md
- 2025-02-25-cortos-stats.md
- 2023-10-05-llms-historia.md
- 2025-03-25-cortos-llms.md
- 2024-05-07-cortos.md
tags:
- llms
- ajedrez
- poesía
- ciencia
- prompts
- rag
title: 'LLMs: ajedrez, poesía, "ciencia normal", "prompts" y "RAG"'
url: /2024/11/26/cortos-llms/
---

### Poesía

Hace poco se publicó un artículo en el que se estudiaban los resultados de un estudio ciego en el que a una serie de sujetos se les presentaban poemas escritos sea por humanos o por LLMs y se les preguntaba su opinión al respecto. No he leído el artículo, pero aquí están las opiniones no enteramente coincidentes al respecto de
[Tyler Cowen](https://marginalrevolution.com/marginalrevolution/2024/11/ai-generated-poetry-is-indistinguishable-from-human-written-poetry-and-is-rated-more-favorably.html?utm_source=pocket_saves)
y de
[Jessica Hullman](https://statmodeling.stat.columbia.edu/2024/11/22/what-genre-of-writing-is-ai-generated-poetry/).

### Ajedrez

Uno de los resultados más sorprendentes del prehistórico GPT-2 es que
[había aprendido a jugar al ajedrez](https://slatestarcodex.com/2020/01/06/a-very-unlikely-chess-game/)
sin que nadie le hubiese enseñado explícitamente. Cuatro años después, Dynomight ha retomado el asunto y ha escrito [esto](https://dynomight.net/chess/) y [esto](https://dynomight.net/more-chess/).

### Ciencia normal

En
[este vídeo](https://backreaction.blogspot.com/2024/10/this-new-ai-scientist-can-fully.html)
se discute el asunto de si los LLMs podrán algún día _automatizar el proceso de investigación científica_ enteramente.

Se entiende mejor recurriendo a las categorías de revolución científica y de ciencia normal. Tras una revolución científica comienza un periodo de _ciencia normal_ en el que la producción científica sigue un patrón más o menos estandarizado. Por ejemplo, en ciertas disciplinas, dada una hipótesis, calcular el poder estadístico de una prueba hipotética, seleccionar una población, asignarla a grupos de tratamiento y control, aplicar una prueba estadística de libro sobre los resultados obtenidos e interpretarla según unas plantillas preestablecidas. Es un proceso en su mayor parte estandarizado que, ciertamente, podría delegarse en algún momento a una IA. Así visto, efectivamente, una parte sustancial de lo que actualmente se publica podría llegar a delegarse en ese tipo de herramientas.

### Prompts

Es probable que esto del _prompt engineering_ sea flor de un día y que en un futuro próximo todo lo que hayamos aprendido al respecto se convierta en papel mojado. No obstante, aún sigue siendo importante y aquí hay una serie de recursos útiles sobre técnicas que aún funcionan para mejorar los _prompts_ (todos ellos relativos a Claude, que es ha convertido en mi LLM _por defecto_):

1. [Un tutorial interacivo de Anthropicl](https://github.com/anthropics/courses/tree/master/prompt_engineering_interactive_tutorial)
1. [Consejos específicos para "prompts" con modelos de contexto muy grande](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/long-context-tips)
1. [Los "prompts" de sistema de distintos modelos de Anthropic](https://docs.anthropic.com/en/release-notes/system-prompts)

### RAG

Para los que han pasado los últimos meses escondidos en una cueva, el RAG consiste en una técnica para enfocar los resultados de un LLM en un determinado corpus de interés. Al hacer una petición a un sistema RAG, antes de que el LLM genere una respuesta, un buscado selecciona dentro del corpus de interés textos relacionados con la cuestión y los inyecta en el _prompt_. De esta manera el LLM puede construir una respuesta fundada en información pertinente y cierta existente en el corpus ---y sobre la que tal vez no ha sido entrenado---, se mitiga el problema de las alucinaciones, etc.

Aquí, una serie de artículos pertinentes al respecto:

1. [Shortwave](https://www.shortwave.com/blog/deep-dive-into-worlds-smartest-email-ai/), un ejemplo de uso del RAG cuando el corpus son tus propios correos electrónicos.
1. Una revisión de [técnicas avanzadas de RAG](https://pub.towardsai.net/advanced-rag-techniques-an-illustrated-overview-04d193d8fec6)
1. Lo que nos llega sobre el RAG está sesgado a favor de las experiencias exitosas. Tengo la sospecha de que muchos proyectos no llegan a ofrecer los resultados esperados. Mi propia experiencia me induce a pensar que es que llegar a crear un sistema realmente eficiente es más complicado de lo que nos anuncian por ahí. Por eso creo que se agradece leer cosas como [esta](https://towardsdatascience.com/why-your-rag-is-not-reliable-in-a-production-environment-9e6a73b3eddb).
1. Abundando en el punto anterior, [aquí](https://blog.elicit.com/search-vs-vector-db/) se trata un tema fundamental y que a a menudo se soslaya: que una pieza esencial en un RAG es un motor de búsqueda que funcione bien.
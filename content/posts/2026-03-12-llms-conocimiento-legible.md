---
author: Carlos J. Gil Bellosta
categories:
- llms
date: 2026-03-12
description: ¿Puede la IA sustituir tu trabajo? Analizamos la diferencia entre conocimiento
  legible e ilegible y por qué el valor profesional migra hacia lo no estructurado.
lastmod: '2026-03-09T16:00:33.153312'
related:
- 2026-02-04-llms-derecho.md
- 2024-07-16-monosemanticidad.md
- 2023-10-05-llms-historia.md
- 2026-03-09-cortos.md
- 2024-10-01-cortos-llms.md
tags:
- llms
- ia
- legibilidad
title: Los LLMs y la devaluación del conocimiento legible
url: /2026/03/12/llm-conocimiento-legible/
---

A la hora de evaluar el potencial impacto de los LLMs en el mercado laboral, tanto en general como en el más concreto de la ciencia de datos y la estadística, es conveniente distinguir entre tipos de conocimiento. En esta entrada voy a considerar una dimensión muy particular en la que la inteligencia de los LLMs y la humana operan de manera muy distinta: la de la legibilidad de la información y el conocimiento.

Es _legible_ una información o unidad de conocimiento cuando es universal, pública, fácilmente accesible y tiene _contornos regulares_. Son perfectamente legibles el teorema de Pitágoras, cómo leer ficheros JSON en Python o el primer artículo de la constitución española.

Son _ilegibles_ los estatutos de mi comunidad de vecinos, las intenciones últimas de ese mensaje de Slack tan críptico o si le intereso a esa chica que me gusta. Hacen ilegible a una información aspectos tales como:

- Que no se sepa dónde está.
- Que los agentes tengan interés en ocultarla, tergiversarla o plantar señales engañosas respecto a ella (por ejemplo, en una negociación).
- Que sea particular de un grupo pequeño y cerrado de personas.
- Que sea contrafáctica (como la curva de la demanda de un producto).
- Que sea conocimiento tácito, ese al que el hermano de Polanyi se refería cuando decía que _sabemos más de lo que podemos expresar_.

Los LLMs están entrenados con información altamente legible y la utilizan eficazmente. Usando términos prestados de Kahneman, para los LLMs, el equivalente al sistema 1 de los humanos, sería ese que razona y argumenta sobre información legible. Es lo que hacen de manera más natural y eficiente.

Sin embargo, cuando un LLM se enfrenta a un problema que requiere información no legible, tiene que activar su sistema 2 (de haberlo): usar información contextual de sus _prompts_, recurrir a técnicas como el RAG, etc. Utilizan un modo de pensamiento distinto que exige, además, la colaboración de herramientas externas que coloquen en su contexto información de la que no disponen de serie. Además, esto solo puede ocurrir cuando esta información está disponible y puede ser explicitada de alguna manera: existe un buscador que explora una base de conocimiento local, etc. Pero como se ha dicho más arriba, existe información muy ilegible e inasequible a la automatización.

Luis Garicano, en su [carta de año nuevo _a un joven_ del 2 de enero de 2026](https://www.siliconcontinent.com/p/a-new-years-letter-to-a-young-person), le recomienda buscar _messy jobs_, esos que involucran conocimiento ilegible, y añade:

> El jefe de ingeniería de una planta de fabricación [...] debe decidir a quién contratar, qué máquinas comprar, cómo distribuirlas en la planta, negociar con los trabajadores y los directivos las soluciones propuestas y movilizar los recursos para implementarlas. Esa tarea es extraordinariamente difícil de automatizar. La IA convierte el conocimiento codificado en una _commodity_: libros de texto, demostraciones, sintaxis. Pero no interactúa de manera significativa con el conocimiento local, que es donde se crea una parte mucho mayor del valor en los trabajos complejos y desestructurados."

Los matemáticos (y estadísticos, científicos de datos y científicos e ingenieros en general) hemos tenido trabajo históricamente ocupándonos de tareas que tensaban hasta el extremo el sistema 2 de los legos (o, que directamente, quedaban más allá de su potencia). Pero lo que es sistema 2 para los humanos, es sistema 1 para las máquinas (no siempre, en puridad, pero existe una correlación muy alta) y es, precisamente, el que se va a ver devaluado hasta el extremo.

Parece que tendremos que buscarnos un trabajo que le hubiese parecido bien a Jane Jacobs, porque el resto será todo para Claude.

## Coda

Le he pedido a un LLM que evalúe los puntos flojos de la discusión anterior y ha señalado, esencialmente, dos:

1. Que no he usado _legibilidad_ en exactamente los mismos términos que usaba James C. Scott en [_Seeing Like a State_](https://en.wikipedia.org/wiki/Seeing_Like_a_State).
2. Que no hay diferencia fundamental entre los que llamo sistema 1 y sistema 2 de razonamiento de los LLMs.

No voy a entrar en la primera porque creo haber explicado lo suficientemente bien para los buenos entendedores lo que quiero llamar aquí _legible_. De todos modos, el concepto de _legibilidad_ que uso está más próximo [al de Hayek](https://en.wikipedia.org/wiki/The_Use_of_Knowledge_in_Society) que al de Scott.

Pero sí que quiero abundar en el segundo. En mi cerebro (humano) la información _legible_ y _no legible_ se procesa de manera similar: unas neuronas saben del teorema de Pitágoras; otras la distancia entre mi cuarto y la cocina y otras reconocen la cara de la portera del edificio. Aunque esto pudiera no ser cierto y pudiese motivar la crítica de un neurólogo, es cierto que sentimos estar activando mecanismos distintos de pensamiento para razonar sobre lo abstracto y lo concreto.

Sin embargo, en un LLM, el conocimiento de lo legible está contenido en un sitio, los pesos que se ajustan durante su periodo de entrenamiento, en tanto que lo ilegible (o contextual):

- Tiene que proporcionarse en el contexto o _prompt_ extendido, por lo que tiene una forma distinta: _tokens_ vs pesos.
- Tiene que ser proporcionado por herramientas externas al LLM, que lo integran en el _prompt_.
- La capacidad de razonar sobre los fenómenos contextuales está condicionada por el proceso de aportación de información contextual.

Además, un LLM es capaz de albergar en sus pesos cantidades ingentes de información; sin embargo, su capacidad para almacenar información local está condicionada por el tamaño de su contexto, muchos órdenes de magnitud inferior. Algo que no ocurre con los humanos (hasta el extremo de que, podría decirse, el 99% del conocimiento del 99% de la población es meramente contextual).
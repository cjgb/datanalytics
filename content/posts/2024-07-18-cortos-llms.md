---
author: Carlos J. Gil Bellosta
date: 2024-07-18
title: 'Argumentos para discutir sobre la inteligencia de los LLMs y cuatro asuntos más'
url: /2024/07/18/cortos-llms
categories:
- cortos
tags:
- llms
- tokenización
- visualización
- multimodalidad
---

### I. Visualización

Recopilo aquí cuatro enlaces vagamente hermanados por su relación con la visualización (y los LLMs):
- Exploración interaectiva de la arquitecturas de ciertos LLMs, [aquí](https://bbycroft.net/llm).
- [Aquí](https://www.youtube.com/watch?v=eMlx5fFNoYc), en vídeo.
- Y dos para _tokens_, [este](https://huggingface.co/spaces/Xenova/the-tokenizer-playground) y [este](https://chunkviz.up.railway.app/).

### II. Inteligencia

Dos discusiones,
[esta](https://statmodeling.stat.columbia.edu/2024/04/13/intelligence-is-whatever-machines-cannot-yet-do/) y
[esta](https://statmodeling.stat.columbia.edu/2023/11/18/i-disagree-with-geoff-hinton-regarding-glorified-autocomplete/),
sobre la inteligencia de los LLMs. De la primera rescato eso de que estamos moviendo constantemente la portería de eso que llamamos inteligencia. De la segunda, la vinculación de lo que hacen actualmente los LLMs con el pensar deprisa y despacio de Kahneman.

Y [otro enlace más](https://www.lesswrong.com/posts/k38sJNLk7YbJA72ST/llm-generality-is-a-timeline-crux)
especulando con la posibilidad de que los LLMs no alcancen jamás el _pensamiento lento_. ¿Tocará volver a correr la portería de su sitio?


### III. Aplicaciones

Una serie de aplicaciones de los LLMs:
- Identificar cláusulas relevantes en contratos, [aquí](https://medium.com/@adamhacklander/creating-an-ai-model-to-locate-key-clauses-within-contracts-6b3d7b91cc82). Parte de su interés proviene del hecho de que  no utilizan LLMs sino,  más bien, NLP clásico vía SpaCy.
- Crear _tarjetas_ tipo Anki para repasar, [aquí](https://www.alexejgossmann.com/LLMs-for-spaced-repetition/). Tengo montado algo parecido en mi servidor doméstico.
- Algo parecido a los NotebookLM de Google, pero ahora de Anthropic, [aquí](https://simonwillison.net/2024/Jun/25/claude-projects/).
- Crear mensajes de _commit_ en git, [aquí](https://harper.blog/2024/03/11/use-an-llm-to-automagically-generate-meaningful-git-commit-messages/)


### IV. Multimodalidad

El quid de la multimodalidad es construir _embeddings_ alineados a partir de dos fuentes de datos _modalmente_ diferentes (texto e imágenes). De ello se habla
[aquí](https://huyenchip.com/2023/10/10/multimodal.html) y
[aquí](https://openai.com/index/clip/).

Pero también habría que tener en cuenta
[esto](https://vlmsareblind.github.io/),
que nos advierte de cómo esos LLMs multimodales son _ciegos_ a ciertas características de las imágenes que los humanos procesamos sin mayores complicaciones (como contar figuras geométricas, razonar sobre intersecciones de líneas, etc.).


### V. Herramientas

- Jina y, particularísimamente, su [_reader_](https://jina.ai/reader/).
- Este [resumidor de vídeos](https://notegpt.io/youtube-video-summarizer).
- Y uno también puede [_chatear_ con Friedman](https://friedman.ai/) (el economista).


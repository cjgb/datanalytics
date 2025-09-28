---
author: Carlos J. Gil Bellosta
categories:
- cortos
date: 2025-03-25
description: Colección de enlaces sobre LLMs, IA generativa, embeddings y asuntos
  relacionados, con particular énfasis en las aplicaciones para el desarrollo de código.
lastmod: '2025-04-06T18:51:23.815659'
related:
- 2024-07-18-cortos-llms.md
- 2024-04-19-cortos.md
- 2025-02-04-cortos-llms.md
- 2024-06-06-cortos-llms.md
- 2024-02-06-llm-obsidian.md
tags:
- llms
- mcp
- embeddings
- agentes
title: Una nueva selección de novedades relevantes del mundo de los LLMs
url: /2025/03/25/cortos-llms/
---

Todo el mundo lleva días hablando del [MCP](https://www.anthropic.com/news/model-context-protocol). Creo que ni merece la pena decir qué cosa es.

MCP es un mecanismo para _empoderar_ agentes. Para los primeros que creé, utilicé [CrewAI](https://docs.crewai.com/examples/example) pero he _migrado_ a LangChain porque:
- A CrewAI le encantan las _dependencias tochas_: para cualquier trivialidad crea entornos de varios GB.
- CrewAI está diseñado para un tipo de agentes muy concreto ---agentes a los que se delega enteramente el control del flujo del proceso--- que no son exactamente los que más me interesan ahora --que suelen incluir un elemento de control por mi parte---.

Aunque todo el mundo habla de LangChain y CrewAI, hay algunas innovaciones interesantes, entre las cuales:
- [PydanticAI](https://ai.pydantic.dev/) y
- [smolagents](https://github.com/huggingface/smolagents/blob/main/src/smolagents/agents.py) que tiene algunas características particulares muy interesantes, como que en lugar de depender (tanto) de _herramientas_, está construido alrededor de la filosofía de diseño de que el LLM es capaz de generar código en Python y ejecutarlo por su cuenta. No hace falta, pues, proporcionarle una herramienta "calculadora" habida cuenta de que el LLM subyacente es capaz de escribir las operaciones necesarias en Python y ejecutarlas (miedín!) directamente.

Se dice que el _prompting_ es flor de un día y que dentro de no mucho no hará falta estar al tanto de sus (actuales) sutilezas. Por el momento, en todo caso, parece que basta con crear _prompts_ [_suficientemente buenos_](https://www.oneusefulthing.org/p/getting-started-with-ai-good-enough) (aunque, supongo, _suficientemente bueno_ significa cosas distintas entre los expertos que entre los legos; además, [hay opiniones para todo](https://medium.com/artificial-corner/youre-using-chatgpt-wrong-here-s-how-to-be-ahead-of-99-of-chatgpt-users-886a50dabc54)).

Una cosa que no tengo clara aún es si los _embeddings_ (y otros aspectos de los LLMs) funcionan _igualmente bien_ en inglés que en las otras lenguas. En ocasiones me ha dado la sensación de que en español no conseguía resultados tan espectaculares como los de otra gente en la lengua del imperio de verdad. Aparentemente, los buenos amigos de [Jina han construido unos _embeddings_ multiidioma](https://jina.ai/news/bridging-language-gaps-in-multilingual-embeddings-via-contrastive-learning/) que son capaces de _agrupar_ por significado independientemente del idioma en el que este venga escrito.

Salvo que alguien tenga a bien sugerirme algo mejor, creo que voy a comenzar a usar [Msty](https://msty.app/) y a alimentarlo con mis notas de Obsidian, con el código fuente de mi blog, el del blog secreto, y los gigas de libros que guardo en Calibre.

Algunas aplicaciones y usos de los LLMs que he recogido en estas últimas semanas:
1. Una guía práctica de [cómo usar los LLMs para desarrollar código](https://simonwillison.net/2025/Mar/11/using-llms-for-code/).
1. Otra de [cómo implementar DeepSearch/DeepResearch](https://jina.ai/news/a-practical-guide-to-implementing-deepsearch-deepresearch)
1. _[Xata Agent](https://github.com/xataio/agent) es un agente de código abierto que monitoriza tu base de datos, encuentra la causa de los problemas y sugiere soluciones y mejoras._
1. He estado usando también una serie de modelos de audio ([que están mejorando a marchas forzadas](https://openai.com/index/introducing-our-next-generation-audio-models/)) para un proyecto del que no puedo decir nada.
1. John D. Cook usa [Grok 3 para generar imágenes que le ayuden a recordar números](https://www.johndcook.com/blog/2025/02/20/mnemonic-images-grok-3/) (de acuerdo con el [código fonético de memorización](https://es.wikipedia.org/wiki/C%C3%B3digo_fon%C3%A9tico_(memorizaci%C3%B3n))).
1. [o3-mini es muy bueno para escribir documentación](https://simonwillison.net/2025/Feb/5/o3-mini-documentation/) de proyectos de _software_.
1. Y quiero dejar anotado en algún sitio que es muy entretenido jugar con [InstantID](https://huggingface.co/spaces/InstantX/InstantID) y fotos de uno, aunque supongo que ya existirán alternativas infinitamente mejores en el mercado (un mercado que me es ajeno porque no estoy metido en la generación de imagen y vídeo).

Por si alguien no lo ha visto aún, [3Blue1Brown](https://www.youtube.com/@3blue1brown) tiene un [vídeo sobre la atención en los _transformers_](https://www.youtube.com/watch?v=eMlx5fFNoYc). Muy recomendable. Como casi todo lo del canal.

La función GELU es $x\Phi(x)$ ---$\Phi$ es la función de distribución de la normal estándar--- aunque [en la práctica se usan aproximaciones](https://www.johndcook.com/blog/2025/03/06/gelu/).

[Aquí](https://www.johndcook.com/blog/2025/02/20/bitter-lesson/) se lee:

> En cierto sentido, [el éxito de la IA generativa] es el triunfo de la estadística sobre la lógica.

[Este](https://arxiv.org/abs/2502.17424) es el artículo del que todo el mundo hablaba hace unas semanas: ese en el que a unos LLMs los reentrenaron con código que contenía problemas de seguridad y, como consecuencia (¿como consecuencia? ¿como la única consecuencia?), comenzaron a _desalinearse moralmente_. ¿Un [argumento en pro del intelectualismo moral](https://piensoluegohesobrevivido.es/2025/llms-intelectualismo-moral/)?

En [este _notebook_](https://colab.research.google.com/drive/1CF5Lr1bxoAFC_IPX5I0azu4X8UDz_zp-?usp=sharing#scrollTo=Tt9jdigttNFD) se lee:

> Al añadir gradualmente este vector a nuestro _embedding_ original, generamos frases que mantienen el asunto, la estructura y la longitud, pero que van adquiriendo un tono cada vez más negativo.

¿Sabíais que [Jonathan Swift describe algo muy parecido a los LLMs de hoy en día en los Viajes de Gulliver](https://thechipletter.substack.com/p/the-engine)?

Una [noticia de 2021](https://portal.mineco.gob.es/ca-es/comunicacion/Pagines/211111_np_maria.aspx): que "[e]l primer sistema masivo de Inteligencia Artificial de la lengua española, MarIA, empieza a resumir y generar textos". Dios mío.

Finalmente, el artículo [_Inteligencia artificial, propiedad intelectual y minería de datos_](https://almacendederecho.org/inteligencia-artificial-propiedad-intelectual-y-mineria-de-datos) en [Almacén de Derecho](https://almacendederecho.org/) que, contra todo pronóstico, mantiene posturas razonables.
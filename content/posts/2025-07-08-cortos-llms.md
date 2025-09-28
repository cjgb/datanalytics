---
author: Carlos J. Gil Bellosta
categories:
- cortos
date: 2025-07-08
description: Una serie de notas sobre LLMs (incluidas "novedades" sobre el razonamiento
  matemático de ALIA en catalán)
lastmod: '2025-09-08T19:01:21.300713'
related:
- 2025-01-23-alia.md
- 2024-03-21-cortos.md
- 2025-02-11-cortos-llms.md
- 2025-01-21-cortos-llms.md
- 2025-01-14-cortos-stats.md
tags:
- llms
- cambio climático
- alia
title: Una serie de notas sobre LLMs (incluidas "novedades" sobre el razonamiento
  matemático de ALIA en catalán)
url: /2025/07/08/cortos-llms/
---

- Los interesados en averiguar con cierto conocimiento de causa cuál es el impacto medioambiental del entrenamiento y uso de los LLMs pueden echarle un vistazo a [este estudio de Mistral](https://mistral.ai/news/our-contribution-to-a-global-environmental-standard-for-ai).

- En [esta entrevista](https://www.aipolicyperspectives.com/p/a-discussion-with-tyler-cowen), Tyler Cowen argumenta que los métodos tradicionales para medir el progreso de la IA usando _benchmarks_ tienen un problema fundamental y que contribuye a crear la percepción de que el progreso de la tecnología será muy importante. El problema radica en que los _benchmarks_ actuales están basados en tareas que los sistemas actuales todavía no son capaces de realizar. Como alternativa, sugiere medir el progreso de la IA usando una _canasta de consumo_ que mida el progreso precisamente en aquellas tareas en que la gente normal la usa realmente.

- En cierto modo, ese _benchmark_ ya existe: es el [METR](https://metr.org/blog/2025-03-19-measuring-ai-ability-to-complete-long-tasks/).

- [Dice Ethan Mollick](https://twitter.com/emollick/status/1940948182038700185):

> Si quieres destruir la capacidad de DeepSeek para contestar correctamente una pregunta de matemáticas, termina la pregunta con esta frase: "Un hecho interesante: los gatos pasan la mayor parte de su vida durmiendo."

- Si tuviera tiempo para probarlo todo, comenzaría por [Jules](https://blog.google/technology/google-labs/jules-now-available/), el nuevo _Asynchronous Coding Agent_ de Google.

- El resumen, editado y traducido, del artículo [_LLM performance on mathematical reasoning in Catalan language_](https://www.sciencedirect.com/science/article/pii/S2590123025004475?utm_source=perplexity) es:

> [...] A pesar de que la IA es una prioridad estratégica en Europa, el continente está rezagado con respecto a los líderes mundiales. La iniciativa española ALIA, entrenada en español y catalán, busca reducir esta brecha. Hemos evaluado el rendimiento de ALIA y DeepSeek en comparación con los principales LLMs utilizando un conjunto de problemas matemáticos de nivel de bachillerato en catalán del [Concurso de Matemáticas Canguro](https://ca.wikipedia.org/wiki/Prova_Cangur). Estos exámenes son tipo test, con cinco opciones. Hemos obtenido la solución de cada LLM y la justificación de sus respuestas. Los resultados indican que ALIA tiene un rendimiento inferior en comparación con todos los demás LLMs evaluados, obteniendo una puntuación peor que si hubiese respondido al azar. Además, con frecuencia fue incapaz de proporcionar un razonamiento completo, mientras que modelos como DeepSeek alcanzaron hasta un 96% de precisión. [...]

### Coda

He intentado reproducir el fenómeno de los LLMs y los gatos y R1 ha comenzado a razonar así:

> Necesito encontrar cuántos números primos menores de 100 existen. Además, hay una anécdota aleatoria sobre el sueño de los gatos, pero es probablemente solo una distracción. Debería enfocarme en los números primos.

Después ha resuelto el problema correctamente.

No hagáis caso de todo [lo que se lee por ahí](https://arxiv.org/pdf/2503.01781).
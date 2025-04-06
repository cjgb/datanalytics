---
author: Carlos J. Gil Bellosta
categories:
- cortos
date: 2024-07-25
lastmod: '2025-04-06T19:06:56.593188'
related:
- 2024-03-21-cortos.md
- 2024-12-31-cortos-llms.md
- 2025-03-25-cortos-llms.md
- 2024-04-19-cortos.md
- 2024-09-03-cortos-llms.md
tags:
- llms
- groq
- mamba
- gpt-2
- prompts
title: Mamba vs "transformers" y cuatro asuntos más
url: /2024/07/25/cortos-llms
---

### I. Lo que hemos aprendido

Una serie de tres entradas
([táctica](https://www.oreilly.com/radar/what-we-learned-from-a-year-of-building-with-llms-part-i/),
[estrategia](https://www.oreilly.com/radar/what-we-learned-from-a-year-of-building-with-llms-part-iii-strategy/) y
[operaciones](https://www.oreilly.com/radar/what-we-learned-from-a-year-of-building-with-llms-part-ii/))
sobre todo lo que _hemos_ aprendido en el tiempo que llevamos desarrollando aplicaciones con LLMs.


### II. Prompts

El [modelo CO-STAR](https://towardsdatascience.com/how-i-won-singapores-gpt-4-prompt-engineering-competition-34c195a93d41) (contexto, objetivo, estilo, tono, audiencia y respuesta) me ha resultado muy útil para ciertas aplicaciones. Aunque, un día que no es el de hoy, será posible [automatizar la búsqueda de _prompts_ efectivos](https://www.johndcook.com/blog/2024/06/10/the-search-for-the-perfect-prompt/).


### III. GPT-2

Cuando apareció, GPT-2 [parecía realmente magia](https://marginalrevolution.com/marginalrevolution/2019/02/unicorns-found.html). Pero hoy [se puede entrenar en hora y media por veinte dólares](https://github.com/karpathy/llm.c/discussions/481).


### IV. Mamba

La casi totalidad de los LLMs están basados en _transformers_. [Codestral Mamba](https://mistral.ai/news/codestral-mamba/) usa una arquitectura distinta,
[Mamba](https://arxiv.org/abs/2312.00752), de la que seguro que seguiremos oyendo hablar en el futuro.


### V. Groq

Aún no soy cliente ---al menos, directo--- pero sí [_fan_ de Groq](https://wow.groq.com/introducing-llama-3-groq-tool-use-models/).
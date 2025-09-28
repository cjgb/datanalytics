---
author: Carlos J. Gil Bellosta
categories:
- cortos
date: 2024-11-19
lastmod: '2025-04-06T19:02:24.462271'
related:
- 2025-03-25-cortos-llms.md
- 2024-07-18-cortos-llms.md
- 2024-04-19-cortos.md
- 2024-02-06-llm-obsidian.md
- 2025-02-25-cortos-stats.md
tags:
- llms
- claude
- ocr
- nlp
title: 'LLMs: algunas herramientas (potencialmente) útiles'
url: /2024/11/19/cortos-llms/
---

### Artefactos de Claude

Una de las aplicaciones derivadas de los LLMs que más satisfacciones me están dando son los
[_artefactos_ de Claude](https://support.anthropic.com/en/articles/9487310-what-are-artifacts-and-how-do-i-use-them)
(véase, por ejemplo, [esto](https://datanalytics.com/2024/10/24/claude-artifacts-bee-bot/)).

Es complicado en todo caso ejecutar aplicaciones _web_ generadas por Claude (vía artefactos) por defecto sin haber configurado previamente un entorno en `node` con las dependencias adecuadas. Los artefactos están pensados para, por defecto, ser alojados por Claude directamente. Si uno quiere bajar el código y correrlos en su propia máquina, tiene que hacerlo en un entorno en el que existan las dependencias correspondientes.

Yo fracasé en el intento (entre otros motivos, porque no sé nada de eso). Me consuela en todo caso saber que no soy el único en tropezar con ese problema. Pero Claudio Silva (otro aptónimo) ha creado [`claude-artifact-runner`](https://github.com/claudio-silva/claude-artifact-runner) para facilitar la tarea.

### Controlflow (y agentes)

He visto a gente usar [`controlflow`](https://controlflow.ai/quickstart) para construir _agentes_ (que usan LLMs) que resuelven problemas y me da la impresión de que nos vamos a hacer amigos (`controlflow` o alguna herramienta similar y yo).

### Pequeños modelos entrenados para un fin concreto

[Dicen](https://simonwillison.net/2024/Nov/12/qwen25-coder/) que `Qwen2.5-Coder-32B` es un LLM orientado a la programación potente como el que más pero que puede correr en un portátil.

### En la misma línea, NuExtract

Y [NuExtract 1.5](https://numind.ai/blog/nuextract-1-5---multilingual-infinite-context-still-small-and-better-than-gpt-4o) parece ser un LLM entrenado específicamente para extraer información (p.e., a JSON) a partir de documentos mucho más eficiente en esa tarea que otros modelos mucho más grandes, capaces (en general) y caros.

### Generación de gráficos en... ¡SVG!

Se ve que [Recraft puede generar SVG](https://www.artificialstudio.ai/tools/recraft-v3-svg).

### Docling debería llamarse panread

Existe `pandoc` que permite reescribir documentos en distintos formatos. Una aplicación dual ---diseñada originalmente, se ve, para alimentar LLMs con texto--- parece ser [`docling`](https://simonwillison.net/2024/Nov/3/docling/). Parece que es capaz de procesar documentos complejos, realizar, incluso, OCR, etc., para extraer texto aceptable de ellos.
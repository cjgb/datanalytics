---
author: Carlos J. Gil Bellosta
categories:
- cortos
date: 2024-10-01
lastmod: '2025-04-06T18:53:46.764302'
related:
- 2024-03-21-cortos.md
- 2025-02-04-cortos-llms.md
- 2025-01-21-cortos-llms.md
- 2024-07-18-cortos-llms.md
- 2025-02-11-cortos-llms.md
tags:
- llms
- regulación
- hardware
title: Cinco breves notas sobre LLMs
url: /2024/10/01/cortos-llms/
---

### I.

En _[The “it” in AI models is the dataset](https://nonint.com/2023/06/10/the-it-in-ai-models-is-the-dataset/)_ se sostiene algo que ya traíamos sabido: que los modelos (incluidos los LLMs) son resúmenes de los datos con los que se entrenan:

> Así, cuando hablas de “Lambda”, “ChatGPT”, “Bard” o “Claude” no te refieres a los pesos del modelo sino al conjunto de entrenamiento.

### II.

Hablar de _hardware_ en el contexto de los LLMs parecería casi exclusivamente hablar de NVIDIA, pero no solo. El modelo es el siguiente:

1. Existen las CPUs, que son procesadores de propósito general y sobre las que no merece la pena explayarse.
2. Existe cierto tipo de operaciones que se repiten muy frecuentemente. Las CPUs podría realizarlas, pero es posible diseñar dispositivos de _hardware_ específicos más simples pero mucho más eficientes, las GPUs. Las GPUs fueron concebidas para otra cosa ---la G de GPU se refiere a _gráficos_--- pero dio la casualidad de que el tipo de operaciones que se realiza al entrenar y predecir usando modelos de IA son un subconjunto de las que las GPUs realizan con una pasmosa eficacia.
3. Sin embargo, ese subconjunto de operaciones necesarias para realizar la inferencia ---predicción--- de LLMs pueden realizarse con dispositivos de cómputo todavía más simples que las GPUs.

De ahí [Cerebras](https://cerebras.ai/blog/introducing-cerebras-inference-ai-at-instant-speed) o [Groq](https://groq.com/).


### III.

En cuanto a herramientas:

- [Instructor](https://github.com/jxnl/instructor) facilita la obtención de información estructurada a partir de documentos.
- Se habla bastante bien de [Aider](https://aider.chat/) como herramienta de programación. Como era previsible, para conseguir resultados _óptimos_ hace falta utilizarlo contra alguno de los mejores ---y más caros--- LLMs disponibles.


### IV.

Como bien cabía esperar, la UE tiene una [oficina de cosas IA](https://digital-strategy.ec.europa.eu/en/policies/ai-office) de la que cabe esperar bien poco.


### V.

El guión de esta
[entrevista con Nuria Oliver](https://elpais.com/proyecto-tendencias/2024-07-17/video-nuria-oliver-ingeniera-debemos-combatir-la-cultura-tremendamente-misogina-y-sexista-del-sector-tecnologico.html)
sobre la IA bien podría haberlo escrito un LLM: no caben más lugares comunes y recocidos de ideas extravagantes ---y, frecuentemente, mutuamente contradictorias--- en 17 minutos. Si esto es lo que opinan las listas, ¿qué será del q99 para abajo?
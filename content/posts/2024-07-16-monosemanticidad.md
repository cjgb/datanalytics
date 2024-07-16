---
author: Carlos J. Gil Bellosta
date: 2024-07-16
title: 'Monosemanticidad: una introducción para despistados'
url: /2024/07/16/monosemanticidad
categories:
- llms
tags:
- llms
- monosemanticidad
- ia
---

### I.

Hay gente que estudia el funcionamiento del cerebro. Una de las cosas que buscan es tratar de relacionar funciones cognitivas con regiones concretas. Para eso usan MRI, electrodos, etc. Yo qué sé. Un problema al que se enfrentan los investigadores es que estos procedimientos son o muy intrusivos, o tienen mucho ruido o ambos a la vez.

Hay gente que busca entender de manera similar los LLMs y responder a preguntas del tipo: ¿es posible identificar coeficientes (o grupos de coeficientes) relacionados con conceptos concretos? Además, examinar los coeficientes de un LLM es mucho más sencillo que estudiar sinapsis de lejos. De todos modos, no está claro, a priori, que tenga que ocurrir de esa manera, es decir, que tengan que existir _regiones_ (no necesariamente físicamente colindantes) de los coeficientes que estén vinculadas unívocamente a un concepto determinado.


### II.

Pero parece que hay resultados que apuntan en esa dirección. Están publicados por ahí asociados a la etiqueta _nonosemanticidad_.

El concepto se popularizó tanto como para llegar a mis oídos tras la publicación de [_Scaling Monosemanticity: Extracting Interpretable Features from Claude 3 Sonnet_](
https://transformer-circuits.pub/2024/scaling-monosemanticity/#safety-relevant-sycophancy/), aunque construye sobre trabajo previo como [_Towards Monosemanticity: Decomposing Language Models With Dictionary Learning_](https://transformer-circuits.pub/2023/monosemantic-features/index.html) (explicado breve y accesiblemente [aquí](https://www.astralcodexten.com/p/god-help-us-lets-try-to-understand)) o [_Sparse Autoencoders Find Highly Interpretable Directions in Language Models_](https://www.lesswrong.com/posts/Qryk6FqjtZk9FHHJR/sparse-autoencoders-find-highly-interpretable-directions-in).

Esos artículos también explican por qué hace unas semanas [todo el mundo hablaba del _Golden Bridge_](https://thezvi.wordpress.com/2024/05/27/i-am-the-golden-gate-bridge/). Parece, además, que esos patrones no emergen solo en los LLMs de Anthropic, sino también en [GPT-4](https://openai.com/index/extracting-concepts-from-gpt-4/).


### III.

Y no solo hemos podido indentificar esos patrones sino que es posible operar sobre ellos:
- Quien haya examinado los enlaces anteriores habrá encontrado noticias de cómo una de las primeras _aplicaciones_ de la monosemanticidad fue construir un LLM derivado de Claude que no paraba de hablar del _Golden Gate_, viniese a o no a cuento.
- En [_Representation Engineering Mistral-7B an Acid Trip_](https://vgel.me/posts/representation-engineering/) se describe cómo ---simplificándolo todo muchísimo--- identificar y sumar un vector a los coeficientes de un LLM para forzarlo a operar de una manera determinada.
- Y qué duda cabe que muchas otras que existe o existirán. Al fin y al cabo, uno de los objetivos de la educación consiste en fomentar las tendencias neuróticas de cada generación; ahora disponemos de una herramienta para, también, inyectar directamente neuroticismo en estas seudointeligencias artificiales.
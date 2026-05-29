---
author: Carlos J. Gil Bellosta
categories:
- cortos
date: 2026-06-02
description: Del impacto de la IA en la ciberseguridad a la saturación de la inteligencia
  en los usos prácticos de los LLMs.
lastmod: '2026-05-29T13:43:15.741295'
related:
- 2026-03-30-cortos.md
- 2025-04-15-cortos-llm.md
- 2025-10-23-llms.md
- 2025-09-09-cortos-llms.md
- 2024-03-21-cortos.md
tags:
- llms
- cerebras
- ciberseguridad
- cambio climático
title: 'Notas (23): noticias recientes sobre el mundo de los LLMs'
url: /2026/04/21/cortos-llms/
---

Simon Willison argumenta que [la ciberseguridad se está convirtiendo en un sistema de «prueba de trabajo»](https://simonwillison.net/2026/Apr/14/cybersecurity-proof-of-work/#atom-everything) donde la robustez de un sistema dependerá de gastar más recursos en encontrar vulnerabilidades que los atacantes. Además, como consecuencia de lo anterior, que esto redundaría en una ventaja competitiva de las librerías de código abierto, ya que el esfuerzo invertido en asegurarlas mediante IA se compartiría entre todos sus usuarios. Lo que no me parece un razonamiento particularmente bien basado en primeros principios (económicos), si es que estos sirven para algo hoy en día.

[Luis Garicano responde a las predicciones catastrofistas sobre la automatización del trabajo](https://www.siliconcontinent.com/p/why-desk-jobs-survive-and-amodei), distinguiendo entre tareas y trabajos. Los últimos son «haces de tareas» que no siempre son fáciles de desenmarañar. Así las cosas, tienen más riesgo de desaparecer aquellos trabajos que consisten en tareas simples e independientes, mientras que aquellos que requieran una combinación de habilidades de coordinación, confianza y responsabilidad se verán positivamente afectados por la IA.

[Hannah Ritchie analiza el consumo eléctrico de la IA basándose en los datos más recientes de la Agencia Internacional de la Energía para 2025](https://hannahritchie.substack.com/p/ai-electricity-2025). En particular:

- La IA representa actualmente cerca del 0.5% del consumo eléctrico mundial.
- El impacto está muy concentrado geográficamente, alcanzando el 5% en EEUU y más del 20% en Irlanda.
- Incluye «proyecciones» para 2030 que, como todas, tienen el valor que tienen.

[Sam Rose explica detalladamente cómo funciona el _prompt caching_](https://ngrok.com/blog/prompt-caching). Este conocimiento es útil para optimizar el consumo y el coste de las llamadas a los LLM a través de la adecuada estructuración de las consultas.

[Una IA gestionó de forma autónoma una cafetería en Estocolmo](https://simonwillison.net/2026/May/5/our-ai-started-a-cafe-in-stockholm/). Del mismo autor, sobre cómo [Mythos ha ayudado a auditar el código de Firefox](https://simonwillison.net/2026/May/7/firefox-claude-mythos/) (y cómo los fallos de seguridad corregidos han pasado de 20-30 al mes a 423 en abril de 2026). Y otro más sobre cómo [el uso de Markdown por parte de los LLMs puede ser una moda pasajera y cómo puede verse reemplazado por HTML pronto](https://simonwillison.net/2026/May/8/unreasonable-effectiveness-of-html/).

De [un artículo de Semianalysis sobre Cerebras](https://newsletter.semianalysis.com/p/cerebras-faster-tokens-please), recojo:

> Muchos (incluido Andrej Karpathy) creían que la inteligencia o la capacidad bruta importaban mucho más que la velocidad, pero nuestras preferencias reveladas han acabado mostrando que a veces ocurre todo lo contrario. Más allá de cierto umbral de inteligencia, los desarrolladores prefieren _tokens_ más rápidos que _tokens_ más inteligentes. Y en un mundo donde la IA interviene en casi todos los aspectos del flujo de trabajo, la velocidad puede ser el cuello de botella.

[Scott Alexander analiza críticamente el recurrente argumento escéptico de que el desarrollo de la IA se frenará pronto porque «toda curva exponencial acaba convirtiéndose en una sigmoide»](https://www.astralcodexten.com/p/the-sigmoids-wont-save-you). Lo aplica a la IA pero entiendo que es un razonamiento fácilmente aplicable a ámbitos en los que se maneja el término «exponencial» con mejor o peor criterio.
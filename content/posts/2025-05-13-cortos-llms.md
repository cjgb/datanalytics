---
author: Carlos J. Gil Bellosta
categories:
- cortos
date: 2025-05-13
description: Una serie de enlaces y noticias sobre el mundo de los LLMs y su intersección
  con la estadística, el análisis de datos y, en particular, las series temporales.
lastmod: '2025-06-20T00:23:38.956615'
related:
- 2025-04-15-cortos-llm.md
- 2025-03-25-cortos-llms.md
- 2024-04-18-cortos.md
- 2024-06-06-cortos-llms.md
- 2024-07-18-cortos-llms.md
tags:
- prompts
- mcp
- llms
- ia
- series temporales
title: LLMs para la predicción de series temporales y algunos asuntos más
url: /2025/05/13/cortos-llms/
---

El _prompt injecting_ es una técnica para robar información a un agente. Si un agente tiene, por ejemplo, acceso al correo electrónico, se le puede enviar un mensaje dándole instrucciones que alteren su comportamiento. Es un problema bien conocido de los agentes y ahora en [_Defeating Prompt Injections by Design_](https://arxiv.org/abs/2503.18813) se describe una solución basada en dos agentes, uno de los cuales tiene como función supervisar las acciones del otro.

Como no puede ser de otra manera, [el MCP plantea grandes problemas de seguridad](https://simonwillison.net/2025/Apr/9/mcp-prompt-injection/).

Los interesados en estas cuestiones encontrarán [aquí](https://www.damiencharlotin.com/hallucinations/) una base de datos de actos jurídicos ---uso la expresión en términos amplios y poco técnicos--- en los que se detectó la presencia de alucinaciones producidas por LLMs. Contiene 155 hasta la fecha, una de ellas relacionada con España.

En [_Vision Language Models (Better, Faster, Stronger)_](https://huggingface.co/blog/vlms-2025)
se discute lo ocurrido en el mundo de los modelos de visión y multimodales en el último año, de abril de 2024 a mayo de 2025.

Simon Willison escribe sobre cómo desarrollar _software_ que interactúa con LLMs en [Building software on top of Large Language Models](https://simonwillison.net/2025/May/15/building-on-llms/). Tengo que añadir que soy un usuario satisfecho de
[`llm`](https://github.com/simonw/llm),
un sistema desarrollado por él para utilizar LLMs en línea de comandos. Ahora, además,
[permite usar _herramientas_](https://simonwillison.net/2025/May/27/llm-tools/#atom-everything).
[Una de las más promisorias](https://github.com/daturkel/llm-tools-exa) es la que permite interactuar con
[Exa](https://exa.ai/)
un buscador con una API nativa y con un segmento gratuito generoso.

Una de las cosas que sorprendieron a los primeros usuarios de GPT-2, el antecesor de ChatGPT, fueron las _propiedades emergentes_: sin haber sido entrenado específicamente para eso, había aprendido francés, a jugar al ajedrez, etc. Ahora resulta que [los LLMs se pueden sufrir _desalineacion emergente_](https://thezvi.wordpress.com/2025/02/28/on-emergent-misalignment/): si los reentrenas sobre _software_ no seguro, comienzan a adquirir comportamientos _desviados_ e indeseados en otros ámbitos. ¿Querrá eso decir que los malos programadores no son gente de fiar?

Vivimos lo que algunos denominan una
[_explosión cámbrica_ de _hardware_ adaptado a las aplicaciones de IA](https://thechipletter.substack.com/p/ai-accelerators-the-cambrian-explosion).
No es solo NVIDIA o AMD: Google, Amazon, Microsoft, Meta, Alibaba, Baidu y una miríada de _startups_ están desarrollando sus propios dispositivos de _hardware_ específicamente diseñados para correr el tipo de de operaciones propias de la IA (esencialmente, multiplicar matrices) en la escala a la que se necesitan hoy en día.

Finalmente, resulta que [Moirai es un LLM desarrollado por Salesforce para la predicción de series temporales](https://www.salesforce.com/blog/moirai/). Al parecer, ha sido entrenado sobre un repositorio de series temporales. A saber qué tal funcionará en la práctica. Leyendo en diagonal, observo que no se trata únicamente de un predictor ---al uso de sus primos los LLMs--- sino que modela las series usando modelos semiparamétricos, proporciona predicciones probabilísticas, admite covariables, etc. ¿Reemplazará a `prophet` y compañía? Seguro que para un LLM es más sencillo modelar y reproducir el procedimiento de trabajo de un humano experto en series temporales que aprender _ex nihilo_ _todas_ las series temporales y reproducir en este ámbito lo que los LLMs tradicionales hacen en el del lenguaje. Tiene mucha mejor pinta que alternativas como
[TimeGPT](https://medium.com/@andrepedrinho/from-arima-to-timegpt-a-new-era-in-time-series-prediction-part-i-f65602fead04)
a pesar de lo afortunado de su nombre.
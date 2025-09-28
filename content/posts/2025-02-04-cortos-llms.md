---
author: Carlos J. Gil Bellosta
categories:
- cortos
date: 2025-02-04
lastmod: '2025-04-06T18:56:53.376891'
related:
- 2025-01-21-cortos-llms.md
- 2024-03-21-cortos.md
- 2024-10-01-cortos-llms.md
- 2025-03-25-cortos-llms.md
- 2025-02-25-cortos-stats.md
tags:
- llms
- deepseek
- nvidia
- agentes
title: Unas cuantas noticias sobre LLMs
url: /2025/02/04/cortos-llms/
---

DeepSeek V3 llevaba publicado desde diciembre; R1, desde hacía más de una semana; pero solo fue el lunes 27 de enero cuando NVIDIA sufrió un descalabro y DeepSeek apareció repentinamente ---hasta entonces no había rebasado los habituales foros friquis--- en boca de todos (véase
[esto](https://www.economist.com/briefing/2025/01/23/chinas-ai-industry-has-almost-caught-up-with-americas) o
[esto](https://www.youtube.com/watch?v=iNIp6AzUV8U), dos de las mejores piezas al respecto que he recopilado). Aparentemente, lo que hizo caer la bolsa fue el artículo
[_The Short Case for Nvidia Stock_](https://youtubetranscriptoptimizer.com/blog/05_the_short_case_for_nvda), aparecido el sábado 25 de enero, en el que se hace un repaso detallado de las fortalezas pero, sobre todo, los peligros que acechan a NVIDIA. Algunas de las cuestiones que trata son:
- Cómo el coste de la IA generativa está basculando desde el entrenamiento (antes) a la _inferencia_ (ahora). El motivo es doble: por un lado, DeepSeek está mostrando cómo entrenar muy frugalmente modelos punteros; por el otro, los modelos que razonan invierten mucho más tiempo en alcanzar sus conclusiones.
- En el mundo del _hardware_, y particularmente para la inferencia, están apareciendo competidores muy serios: Groq (no Grok), Cerebras, las TPUs de Google, los _chips_ que están fabricando o planeando Microsoft, Apple o Amazon y ---si consiguen mejorar los _drivers_--- las mismas GPUs de AMD.
- En el mundo del _software_, además de las innovaciones que aportan los modelos de DeepSeek, existen lenguajes de _nivel intermedio_ como JAX que permitirían _puentear_ CUDA, es decir, que los diseñadores de LLMs no tuvieran que conocer y utilizar necesariamente CUDA porque un lenguaje de nivel intermedio les permitiese abstraerlo y utilizar, por lo tanto, cualquier otra plataforma, no necesariamente la de NVIDIA.

Trae el NYT un artículo sobre [_novias virtuales_](https://www.nytimes.com/2025/01/15/technology/ai-chatgpt-boyfriend-companion.html). En
[OpenRouter](https://openrouter.ai/),
un _broker_ de LLMs ---pagas una única suscripción, tienes una única _API key_, puedes utilizar _cualquier_ modelo y, además, el _broker_ te enruta hacia el más barato---, varios de los LLMs más populares de la semana/mes por uso (en _tokens_) son de los que educadamente se llaman _NSFW_ (acrónimo anglo) o sicalípticos (cultismo neogriego). Me hace recordar a cuando llegaron los VHS de películas porno o las primeras páginas de fotos de lo mismo en internet: eran prueba incontrovertible de que la tecnología estaba para quedarse.

En un mundo que cambia, se subvierte el valor relativo de los distintos rasgos y capacidades de las personas.
[Aquí](https://quarter--mile.com/Traits-That-May-Cease-to-Be-Valuable) se especula sobre cuáles ganarán y perderán valor en los próximos años por efecto de las innovaciones que se vienen y, en particular, los LLMs.

Estos días estoy programando mis primeros [agentes](https://huyenchip.com/2025/01/07/agents.html). Estoy utilizando CrewAI fundamentalmente, aunque comencé, influenciado por
[_AI Agents are getting surprisingly easy to implement_](https://blog.manugarri.com/agentic-workflows-are-getting-surprisingly-easy-to-implement/) de Manuel Garrido, por `smolagents`. `smolagents` tiene una particularidad: por construcción permite que sus agentes generen y ejecuten código en Python (!!!!). No dependen de que se les proporcione ojos y manos (vía _tools_ como en otros sistemas) sino que pueden construir los suyos propios (con ciertas limitaciones): si los LLMs saben programar, ¿por qué no dejarlos construir y ejecutar sus propios _scripts_? Es probable que `smolagents` gane terreno en aplicaciones de tipo personal y que otros sistemas más formales y controlados tengan más éxito donde la relativa inflexibilidad sea considerada _feature_ y no _bug_.

Jesús Alfaro escribe [_Los profesores de Humanidades y la inteligencia artificial_](https://derechomercantilespana.blogspot.com/2024/11/los-profesores-de-humanidades-y-la.html) para explicar lo que ocurre cuando le pide a Copilot que mejore un artículo de un profesor de humanidades.
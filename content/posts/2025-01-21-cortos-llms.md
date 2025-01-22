---
author: Carlos J. Gil Bellosta
date: 2025-01-21
title: 'Unas cuantas noticias sobre LLMs'
url: /2025/01/21/cortos-llms
categories:
- cortos
tags:
- llms
- deepseek
- chatgpt
---

GPT-4 se entrenó usando un clúster de 25k GPUs, Musk planea construir un centro de datos con 100k GPUs y Meta, uno de 350k. Sin embargo, parece que tecnologías emergentes como
[DiLoCo](https://arxiv.org/abs/2311.08105) (de _distributed low communication_), permitirá entrenar esos modelos sin necesidad de grandes centros de cálculo. Una visión alternativa en la que se especula con la construcción de enormes centros de datos (con potencias eléctricas de hasta de 5GW) puede verse
[aquí](https://www.lesswrong.com/posts/NXTkEiaLA4JdS5vSZ/what-o3-becomes-by-2028).

Por otro lado, el LLM de moda, DeepSeek-V3 (véase
[esto](https://github.com/deepseek-ai/DeepSeek-V3/blob/main/DeepSeek_V3.pdf),
[esto](https://www.chinatalk.media/p/deepseeks-edge)
o [esto](https://thezvi.wordpress.com/2024/12/31/deekseek-v3-the-six-million-dollar-model/)),
se entrenó en un clúster de unas 2k GPUs durante unos dos meses, aproximadamente un orden de magnitud de cálculo menos que modelos ya superados, como Llama-3.1-405B. Además, el [precio de la inferencia](https://api-docs.deepseek.com/quick_start/pricing/) es imbatible.

Supongo que esas son buenas noticias para el LLM público español,
[ALIA](https://alia.gob.es/), que se entrena en un frijolín de 4k GPUs. ALIA nos va a dar muchas satisfacciones, casi seguro.

Pero no hay que fijarse en lo malo sino en lo bueno.

En [_OpenAI's latest model will change the economics of software_](https://www.economist.com/business/2025/01/20/openais-latest-model-will-change-the-economics-of-software) se discuten los modelos que razonan (como o3 de OpenAI) desde la perspectiva sus costes operativos. Con los primeros GPTs aprendimos que las habilidades que iban adquiriendo estos modelos eran función creciente del tamaño del conjunto de entrenamiento; ahora, da la impresión de que la sutiliza del razonamiento de estos nuevos modelos es función creciente del tiempo que se les deje pensar (y de la energía que consumen). Eso, de alguna manera, podría estar condicionando la estructura del mercado y el sistema de precios para estos nuevos modelos.

Aunque da la impresión de que esos costes podrían decaer rápidamente. Una serie de modelos chinos como
[Qwen/QVQ-72B](https://deepinfra.com/Qwen/QVQ-72B-Preview),
su versión multimodal,
[Qwen2-VL-72B](https://qwenlm.github.io/blog/qvq-72b-preview/)
y, sobre todo, el increíble
[DeepSeek-R1](https://api-docs.deepseek.com/news/news250120)
ponen en cuestión que los modelos que razonan tengan que ser necesariamente _tan_ caros.

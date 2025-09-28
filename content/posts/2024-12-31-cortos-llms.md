---
author: Carlos J. Gil Bellosta
categories:
- cortos
date: 2024-12-31
lastmod: '2025-04-06T18:47:23.683977'
related:
- 2024-07-25-cortos-llms.md
- 2024-09-03-cortos-llms.md
- 2024-03-21-cortos.md
- 2025-03-25-cortos-llms.md
- 2024-06-06-cortos-llms.md
tags:
- llms
- bert
title: 'LLMs: ModernBERT y algunos asuntos más'
url: /2024/12/31/cortos-llms/
---

### Aplicaciones

[Daisy](https://news.virginmediao2.co.uk/o2-unveils-daisy-the-ai-granny-wasting-scammers-time/), una "abuelita IA" para marear a los estafadores. Se trata de una herramienta creada por O2 en el RU que _atiende_ llamadas telefónicas de timadores y entabla conversaciones con ellos con el objetivo último de hacerles perder tiempo. Van a ser entretenidos los falsos positivos cuando, sin duda, los haya.

### Prompts

Por un lado, internet está plagada de tutoriales y trucos para generar mejores _prompts_. Por otro, se advierte una brecha cada vez más ancha entre quienes saben utilizar los LLMs con cierta soltura y los que no. Uno de los problemas que plantean los LLMs es que cada cual, por el momento, está prácticamente solo a la hora de diseñar su propio arsenal de herramientas construidas sobre los LLMs que resulten útiles para su trabajo concreto. Por eso y a pesar de la objeción que planteo arriba, me atrevo a mostrar, como ejemplo de buen uso de estas tecnologías lo que se cuenta en [_5 Mega ChatGPT Prompts that I Use Everyday to Save 4+ Hours_](https://ai.plainenglish.io/5-mega-chatgpt-prompts-that-i-use-everyday-to-save-4-hours-21efeb1918c5).

### Herramientas

`jacquesthibs` hizo ---en octubre, que es un siglo en el mundo de la IA--- una lista de sus
[_suscripciones_](https://www.lesswrong.com/posts/CYYBW8QCMK722GDpz/how-much-i-m-paying-for-ai-productivity-software-and-the)
y de cómo las usa en su trabajo (que parece estar relacionado con la programación).

### LLMs en local

Es un asunto sobre el que hay mucho escrito y en el que abundan los _friquis_ ociosos. Para una introducción sobre el asunto, véase [_Everything I've learned so far about running local LLMs_](https://nullprogram.com/blog/2024/11/10/).

Pero las cosas están cambiando y hoy en día es posible correr modelos mejores que GPT-4 (que parecía imbatible hace apenas un año) en un portátil (véase [esto](https://simonwillison.net/2024/Dec/9/llama-33-70b/)).

### ModernBERT

Siete años después, BERT tiene un reemplazo, [ModernBERT](https://www.answer.ai/posts/2024-12-19-modernbert.html). Una de las ventajas de ModernBERT es que puede correr en local y que se presta mejor que muchos otros LLMs generativos para determinadas tareas (como la clasificación de textos). Para verlo en acción, puede consultarse, por ejemplo, [esto](https://www.markhw.com/blog/topicmodeling2).
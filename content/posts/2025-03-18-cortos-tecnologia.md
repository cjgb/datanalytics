---
author: Carlos J. Gil Bellosta
categories:
- cortos
date: 2025-03-18
description: Una serie de notas sobre tecnología, LLMs, vibe coding, H3, geodesia,
  Z3, solvers, postgres y otros asuntos contados con afán divulgativo.
lastmod: '2025-04-06T18:46:49.519484'
related:
- 2024-05-09-cortos-tecnologia.md
- 2025-03-04-cortos-stats.md
- 2024-02-06-llm-obsidian.md
- 2010-11-17-siete-consejos-para-expertos-en-analisis-de-datos.md
- 2025-03-25-cortos-llms.md
tags:
- geodesia
- z3
- r2
- h3
- parquet
- monolith
- postgres
- stackoverflow
- prompts
- web-scraping
- energía solar
- vibe coding
title: De H3, Z3 y R2 al "vibe coding" pasando por algunos asuntos más
url: /2025/03/18/cortos-tecnologia
---

Uber ha desarrollado [H3](https://h3geo.org/),
una retícula global de hexágonos para georeferenciar puntos y objetos. Cada hexágono tiene asociado un único ID y el sistema está concebido para poder correr de manera eficiente los algoritmos habituales: vecinos próximos, ruta más corta, etc.

[OpenTimes](https://sno.ws/opentimes/) es un sistema para mostrar el tiempo de viaje (en distintos medios) entre ubicaciones de EEUU. Tiene precalculados los miles de millones de valores de la correspondiente matriz y lo particular de la cosa es que almacena y sirve los datos desde [R2](https://www.cloudflare.com/developer-platform/products/r2/),
un sistema de Cloudfare similar al archiconocido S3 de Amazon pero orientado a la distribución eficiente de información para aplicaciones web.

Cada día soy más fan del [Z3 SAT/SMT Solver](https://www.johndcook.com/blog/2025/03/17/lessons-learned-with-the-z3-sat-smt-solver/). Estoy deseando encontrar un problema en el que poder aplicarlo (y ser pagado, obviamente, por ello).

La estrategia más efectiva para [tratar de convencer a la gente que abandone el csv](https://towardsdatascience.com/its-time-to-say-goodbye-to-pd-read-csv-and-pd-to-csv-27fbc74e84c5/)
es obviar que el texto es el formato (prácticamente) universal.

El otro día probé [`monolith`](https://github.com/Y2Z/monolith) para empaquetar en un único fichero la web y sus dependencias de [Circiter](https://circiter.es). Al fin y al cabo, el portal entero consiste esencialmente en dos _landings_. El resultado fueron sendos ficheros de 16 MB que `nginx` sirve comprimido en 5 MB y que resulta en una calificación de 100/100 en varios portales que miden la velocidad de carga. Pero me pareció una solución demasiado _punk_ para un problema no particularmente grave.

[Aquí](https://news.ycombinator.com/item?id=43364668#43365833)
se da cuenta de una base de datos de Postgres con más de 0.1 billones (españoles) de filas, de 16 TB de tamaño, que inserta 150k filas por segundo, corre 40k transacciones por segundo y lee 4 millones de filas por segundo. Pas mal!

[`files-to-prompt`](https://github.com/simonw/files-to-prompt)
concatena una serie de ficheros y los convierte en un _prompt_ para pasárselos a un LLM.

Era moda acudir a StackOverflow a ver cómo progresaba la popularidad de los diversos lenguajes de programación. Ahora las cosas tienen esta pinta:

![](/wp-uploads/2025/stackoverflow_programming_languages.webp#center)

La fuente es [esta](https://win-vector.com/2025/03/02/best-before-dates-by-bass/) y la fecha relevante en el gráfico coincide con...

Un [tutorial _moderno_ de _web scraping_](https://simonwillison.net/2025/Mar/8/cutting-edge-web-scraping/). La tecnología siempre cambia y uno encuentra a veces métodos de lo más extraño para servir la información. Fracasé varias veces en el intento de descargar la actualización de la [lista de los ETFs de ING](/2024/06/18/etfs-ing/) hasta que me di cuenta que en la nueva versión, la información venía en un objeto de Javascript puro dentro de un fichero `.js`.

Construction Physics (un _blog_ muy recomendable) trae una [entrada sobre la energía solar](https://www.construction-physics.com/p/understanding-solar-energy)
en la que argumenta alrededor de una serie de cálculos y simulaciones. Al parecer, el autor ha colgado el [código en GitHub](https://github.com/briancpotter/solarsim) y ha advertido que lo escribió
[a golpe de _vibe_](https://x.com/karpathy/status/1886192184808149383).

Más sobre el _vibe coding_ (sistematizado, profesionalizado), [aquí](https://harper.blog/2025/02/16/my-llm-codegen-workflow-atm/).
---
author: Carlos J. Gil Bellosta
categories:
- llms
date: 2026-04-02
description: Los LLMs son más buenos, bonitos y baratos cuando interactúas con ellos
  en inglés.
lastmod: '2026-03-27T19:05:50.445661'
related:
- 2024-10-01-cortos-llms.md
- 2025-04-15-cortos-llm.md
- 2024-12-31-cortos-llms.md
- 2025-07-08-cortos-llms.md
- 2024-03-21-cortos.md
tags:
- llms
title: Cuando hables con los LLMs, usa «la lengua del imperio»
url: /2026/04/02/llms-lenguaje/
---

Al trabajar con LLMs, la elección del idioma tiene efectos en términos de precisión, precio y fiabilidad. La evidencia empírica está alineada con lo que se esperaría razonando desde primeros principios: en inglés funcionan mejor.

En términos de precisión, existe una degradación sistemática fuera del inglés que se acentúa en lenguas minoritarias y exóticas. Esto es así por el sobremuestreo de los contenidos en inglés en el entrenamiento, que, además, es mucho más sustancial en disciplinas científicas y técnicas. Por lo tanto, se especula que los modelos «internalizan» mejor los patrones semánticos y las estructuras argumentativas en ese idioma. La conclusión operativa es que si la tarea requiere exactitud (análisis, programación, medicina, etc.), usar el inglés reduce el riesgo de error.

Además, se especula que en la arquitectura interna e implícita de los LLMs hay una doble traducción (al y del inglés) que puede producir pérdidas de información. Existe evidencia anecdótica de que algunos modelos pueden encontrar la respuesta correcta si se interactúa con ellos en inglés pero equivocarse si se usa otro idioma.

En términos de coste, los _tokens_ no son neutrales al idioma. La eficiencia de la tokenización depende fuertemente del idioma. Usar el inglés permite una tokenización más sucinta y, por lo tanto, más económica. Así que usar inglés no solo mejora la calidad, sino que también reduce el coste directo de uso de los LLMs.

Cualquiera puede pedir a su LLM favorito que le aporte enlaces a la literatura que discuten los asuntos arriba planteados. Así que dejaré eso como tarea para el lector interesado. Pero quiero hacer una excepción con el artículo de febrero de 2026 [_IberBench: LLM evaluation on Iberian languages_](https://www.sciencedirect.com/science/article/abs/pii/S088523082500124X), cuyo resumen traduzco:

> A pesar de su notable éxito, los LLMs siguen siendo difíciles de evaluar de manera exhaustiva, especialmente en idiomas distintos al inglés, en los que escasean los datos de alta calidad. Los _benchmarks_ y los _rankings_ actuales se centran predominantemente en el inglés, y solo unos pocos abordan otras lenguas. Estos marcos de evaluación presentan deficiencias en varias áreas clave: pasan por alto la diversidad de las variedades lingüísticas, priorizan las capacidades fundamentales del Procesamiento del Lenguaje Natural (NLP) sobre tareas de relevancia industrial y son de naturaleza estática.
>
> Por eso hemos construido IberBench, un _benchmark_ exhaustivo y extensible diseñado para evaluar el rendimiento de los LLMs tanto en tareas de NLP fundamentales como de relevancia industrial, en los idiomas hablados en la península Ibérica e Iberoamérica, incluyendo español, portugués, catalán, vascuence, gallego e inglés, además de variedades del español como el mexicano, uruguayo, peruano, costarricense y cubano. IberBench integra 101 conjuntos de datos procedentes de campañas de evaluación y benchmarks recientes, cubriendo 22 categorías de tareas como el análisis de sentimientos y emociones, la detección de toxicidad y la generación de resúmenes.
>
> Este _benchmark_ aborda limitaciones clave en las prácticas de evaluación actuales, como la falta de diversidad lingüística y las configuraciones de evaluación estáticas, al permitir actualizaciones continuas y el envío de modelos y conjuntos de datos por parte de la comunidad, moderados por un comité de expertos. Evaluamos 23 LLMs que van desde los 100 millones hasta los 14.000 millones de parámetros y aportamos perspectivas empíricas sobre sus fortalezas y limitaciones. Nuestros hallazgos indican que:
>
> - Los LLMs rinden peor en tareas de relevancia industrial que en las fundamentales.
> - El rendimiento es, de media, menor para el gallego y el euskera.
> - Algunas tareas muestran resultados cercanos al azar.
> - En otras tareas, los LLMs rinden por encima del azar pero por debajo de los sistemas diseñados específicamente para tareas compartidas (shared tasks).
>
> IberBench ofrece implementaciones de código abierto para todo el proceso de evaluación, incluyendo la normalización y el alojamiento de conjuntos de datos, la evaluación incremental de LLMs y una tabla de clasificación accesible al público.

**Nota final:** Como el artículo menciona una tabla de clasificación accesible al público, la he buscado, [la he encontrado](https://huggingface.co/spaces/iberbench/leaderboard), pero no he podido ver resultado alguno porque, se ve, debido a la falta de tráfico (e interés por la cosa), el proveedor que la aloja, HuggingFace, la había _desactivado_. He pulsado el botón de _reactivar_ y si de aquí a unos días deja de girar el circulito de carga, lo comento.
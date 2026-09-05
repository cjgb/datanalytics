---
author: Carlos J. Gil Bellosta
categories:
- llms
date: 2026-09-17
description: Dos modelos distintos examinan la cuestión de si la brecha entre los
  modelos chinos y los estadounidenses crece o decrece y llegan a conclusiones diametralmente
  opuestas.
lastmod: '2026-09-05T21:18:15.910626'
related:
- 2026-05-21-llms-chinos.md
- 2025-01-21-cortos-llms.md
- 2026-03-30-cortos.md
- 2025-02-04-cortos-llms.md
- 2023-10-05-llms-historia.md
tags:
- llms
- ia
- estadística
- sofística
title: La brecha entre los modelos chinos y los estadounidenses, ¿crece o decrece?
url: /2026/09/17/llms-chinos-dos-modelos/
---

Hay gente ocupada en y preocupada por la cuestión de la brecha entre los LLMs chinos y los estadounidenses.

También hay gente ocupada en y preocupada por la cuestión de cómo la selección de los métodos de análisis estadístico condiciona las narrativas que se construyen alrededor de ellos (o, más habitualmente, al revés).

En mayo de 2026 escribí [«Los LLMs chinos, ¿ocho meses por detrás del estado del arte?»](/2026/05/21/llms-chinos/) que se ocupaba de ambas cuestiones a la vez. El argumento central de la crítica estadística era que la sensación de convergencia o divergencia entre los LLMs de ambos países puede adaptarse a una narrativa preespecificada escogiendo adecuadamente la transformación no lineal implícita en el modelo. Es ocioso reiterar ahora los detalles: el lector interesado los tiene a un clic de distancia.

Más recientemente, Semianalysis ha retomado la cuestión en [«Are Open Models Catching Up?»](https://newsletter.semianalysis.com/p/are-open-models-catching-up) utilizando una aproximación analítica distinta. Su argumento está construido alrededor de las tres grandes «eras» que han conocido los LLMs desde la publicación del primer ChatGPT:

1. La que llaman «del primer escalado», iniciada en 2022 con GPT-3.5.
2. La del razonamiento, iniciada con la publicación del modelo o1 de OpenAI en septiembre de 2024.
3. La «agéntica», desde la publicación de Opus 4.5 en noviembre de 2025.

La pregunta que se plantea entonces es: ¿cuánto tiempo tardaron los modelos abiertos (o, dicho de otra manera, chinos) en cerrar la brecha en cada era? En concreto, ¿cuánto tardó el primer modelo abierto en alcanzar al primer modelo cerrado de cada era?

Un motivo importante para replantear la pregunta en estos términos es que los _benchmarks_ adecuados para medir el rendimiento de los modelos son específicos de su era. Los _benchmarks_ han ido adecuándose a las habilidades que los distintos modelos han desarrollado a lo largo del tiempo y de las nuevas aplicaciones que los usuarios han hecho de ellos. Según Semianalysis, comparar modelos de eras diferentes sobre un mismo _benchmark_ sería prácticamente un [«error de categoría»](https://es.wikipedia.org/wiki/Error_categorial).

Y la respuesta es:

1. Para la primera era, unos 16 meses. Llama-3.1-405B, liberado en julio de 2024, es el primer modelo abierto en alcanzar el nivel de GPT-3.5 Turbo (de marzo de 2023). El último gran modelo de la era, GPT-4o, fue alcanzado por DeepSeek V3 en diciembre de 2024, siete meses después de su lanzamiento.
2. Para la segunda, unos 8 meses: DeepSeek R1-0528 alcanzó el nivel de o1 en mayo de 2025.
3. Para la tercera, entre 5 y 6 meses, según se considere el modelo Kimi K2.6 o GLM-5.2.

En resumidas cuentas, disponemos de dos modelos creados por gente razonable que examina los mismos datos y llega a conclusiones diametralmente opuestas. Se trata de algo que, a estas alturas de la vida, más que descolocarnos, desconcertarnos o conmocionarnos, nos divierte, entretiene y solaza.
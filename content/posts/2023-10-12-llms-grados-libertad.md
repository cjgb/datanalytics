---
author: Carlos J. Gil Bellosta
categories:
- ciencia de datos
date: 2023-10-12
lastmod: '2025-04-06T18:58:01.404827'
related:
- 2023-10-05-llms-historia.md
- 2023-10-19-errores-chatgpt.md
- 2016-09-30-sobre-ciencia-de-datos-en-unir-teoria-y-gente.md
- 2017-01-16-weapons-of-math-destruction.md
- 2024-03-21-cortos.md
tags:
- ciencia de datos
- llms
- nlp
title: 'LLMs: grados de libertad en la generación de texto'
url: /2023/10/12/llms-grados-libertad/
---

Me he entretenido _dibujando_

![](/wp-uploads/2023/llms_degs_freedom.png#center)

que representa gráficamente los _grados de libertad_ de un LLM según va generando texto. Brevemente, he arrancado con

> Never in the history of

y he dejado que mi LLM fuese construyendo

> Never in the history of “The Bachelor” has a contestant been so hated by the viewing public.
>
> The “Bachelor” franchise has had its share of villains, but the one who has

mientras registraba el vector de probabilidades en cada iteración, es decir, el vector que permite que el LLM elija, por ejemplo, _villains_ en lugar de _maples_, _vikings_ or _frenchmen_.

El LLM en cuestión usa +50k tokens distintos y a todos ellos, en cada iteración, les asigna una probabilidad. Para medir los _grados de libertad_ he contado el mínimo subconjunto cuya probabilidad agregada excede cierto umbral. Esos son los números que aparecen en el gráfico. (Y sí, ya sé que hay muchas otras opciones).

Es evidente cómo el _of_ después de _share_, el ciere de las comillas, el _public_ tras _viewing_ y alguna otra son casi _obligatorias_. O que tras el _The_ con el que se abre la segunda frase, casi cualquier cosa puede ocurrir y el LLM puede _tirar_ casi por donde le dé la gana. Etc.

Obivamente, dado que la intersección de lo cierto, lo interesante y lo no obvio es prácticamente nula, hoy me he limitado a regalar a mis lectores dos cosas:

* Una historieta que cumple dos de las tres condiciones anteriores: lo que aquí se ha _aprendido_ no debería sorprender a nadie.
* El [código](https://github.com/cjgb/datanalytics_code/blob/main/llm_degs_freedom.ipynb) completo de lo que he hecho, por si a alguien le sirve de provecho.
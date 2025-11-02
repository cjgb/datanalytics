---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2024-07-04
lastmod: '2025-04-06T18:44:58.936774'
related:
- 2020-05-27-por-que-el-optimizador-de-una-red-neuronal-no-se-va-al-carajo-como-suelen-l-bfgs-b-y-similares.md
- 2024-02-01-optimizacion-generalizacion.md
- 2019-07-01-optimizacion-dos-escuelas-y-una-pregunta.md
- 2024-01-23-arboles-olvidadizos.md
- 2010-06-16-algoritmos-geneticos-para-la-caracterizacion-de-maximos-en-random-forests.md
tags:
- llms
- optimización
title: ¿Por qué es "tan fácil" la optimización en altas dimensiones?
url: /2024/07/04/optimizacion-altas-dimensiones/
---

Esta es la [función de Rosenbrock](https://en.wikipedia.org/wiki/Rosenbrock_function), también conocida como función plátano o ---en algunos contextos--- como _el coco_:

![](/img/2024/banana-function.png#center)

Es una de esas funciones contra la que tienen que demostrar su valía los algoritmos de optimización que los matemáticos discurren por ahí. La función ilustra uno de los problemas habituales de la optimización: las variables _se confabulan_ para que las ideas simples no funcionen: los gradientes no apuntan hacia el mínimo, este se encuentra en un valle estrecho, etc. Y que conste que las he visto peores en la práctica.

Pero en altas dimensiones es mucho más difícil que las distintas variables orquesten una confabulación de ese estilo. Por eso, en el mundo del aprendizaje profundo, funcionan métodos de optimización que se pueden considerar simplicísimos en comparación con lo que ofrece la teoría de la optimización matemática tradicional.

Además de que hay que [desmitificar el mínimo del error como _valor óptimo_](/2024/02/01/model-generalization/), por supuesto.

Un poquito más en el [texto que ha motivado esta entrada](https://www.johndcook.com/blog/2024/04/22/on-greedy-algorithms-and-rodeo-clowns/).
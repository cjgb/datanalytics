---
author: Carlos J. Gil Bellosta
categories:
- cortos
date: 2026-12-28
description: Selección de artículos sobre programación, geometría, «pipelines» en
  R y algunos asuntos más.
lastmod: '2026-04-24T13:53:51.461187'
related:
- 2024-03-11-cortos-01.md
- 2025-11-20-estadistica.md
- 2024-06-26-cortos-r.md
- 2025-12-11-cortos.md
- 2026-02-16-cortos.md
tags:
- programación
- r
- rust
- geometría
title: 'Notas (18): «pipelines» en R de todos los colores y algunas otras cosas más'
url: /2026/04/28/cortos-programacion/
---

[_Intersecting spheres and GPS_](https://www.johndcook.com/blog/2026/04/14/intersecting-spheres-and-gps/) explica los principios matemáticos del GPS y, en particular, el del cálculo de la intersección de esferas. Que, además y contrariamente a la primera intuición, puede reformularse como la solución de un sistema de ecuaciones lineales.

[Todos los días aprendes un poquito más de `bash`.](https://www.johndcook.com/blog/2026/02/28/file-extensions-bash/).

Y también sobre [cómo hacer para que los distintos módulos de una aplicación en `shiny` compartan datos](https://rtask.thinkr.fr/sharing-data-across-shiny-modules-an-update/).

Guillermo Luijk sigue regalándonos artículos en la intersección de la fotografía, la geometría y R:

- [_Calculando la distancia focal con que se hizo una fotografía (I)_](https://www.overfitting.net/2026/02/calculando-la-distancia-focal-con-que.html) presenta un algoritmo para calcular la distancia focal de una fotografía analizando únicamente la deformación de perspectiva de objetos rectangulares presentes en la imagen.
- Luego, en la [segunda parte](https://www.overfitting.net/2026/03/calculando-la-distancia-focal-con-que.html) se introduce MCMC para evaluar la fiabilidad del cálculo teniendo en cuenta la precisión de las líneas de fuga.
- [_Corrección de perspectiva preservando la relación de aspecto_](https://www.overfitting.net/2026/03/correccion-de-perspectiva-preservando.html) explica cómo realizar una corrección de perspectiva que restaure las proporciones reales de un objeto, como la fachada de un edificio, programáticamente.
- En [_¿A qué distancia de la Tierra se hizo la foto 'Hello, World'?_](https://www.overfitting.net/2026/04/a-que-distancia-de-la-tierra-se-hizo-la.html) calcula que la famosa foto de la misión Artemis II fue tomada a unos 9889 km de distancia usando los parámetros ópticos de la cámara Nikon D5 utilizada por los astronautas.
- Finalmente, en [_Propagación de ondas acústicas por elementos finitos con R_](https://www.overfitting.net/2026/03/propagacion-de-ondas-acusticas-por.html) implementa un simulador de propagación de ondas acústicas utilizando el método de diferencias finitas usando R.

[_Leptodon_](https://www.openanalytics.eu/blog/2026/03/09/leptodon-1.0.0/), cuadros de mando en... ¿Rust?

_Pipelines_ en R por doquier:

- Uno que se llama [_T_](https://brodrigues.co/posts/2026-04-03-tproject.html) y que permite encadenar componentes de código escritos en distintos lenguajes de programación (R, Python, Julia, etc.) .
- Otro que se llama [`maestro`](https://whipson.github.io/data-in-flight/posts/maestro-1-1-0/maestro-1-1-0-release.html).
- Finalmente, [aquí](https://rtichoke.netlify.app/posts/ml-frameworks-in-r.html) se comparan otros más: `tydimodels`, `h2o`, `qeML`, `caret` y `mrl3`.
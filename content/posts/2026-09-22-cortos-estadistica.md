---
author: Carlos J. Gil Bellosta
categories:
- cortos
date: 2026-09-22
description: Además de paradojas meteorológicas, análisis de la supervivencia, un
  diccionario estadística-ML y el análisis a cara de perro de los microdatos de una
  encuesta.
lastmod: '2026-09-18T14:48:28.991331'
related:
- 2026-07-28-cortos-estadistica.md
- 2025-11-20-estadistica.md
- 2026-04-07-cortos.md
- 2026-06-09-cortos-stats.md
- 2025-12-11-cortos.md
tags:
- estadística
- microdatos
- estadística bayesiana
- ia
- inflación
title: 'Notas (35): troleadas de los «nihilistas estadísticos» del FT Alphaville y
  algunos asuntos más'
url: /2026/09/22/cortos-estadistica/
---

[TabICL es un «modelo fundacional» para datos tabulares](https://rtichoke.netlify.app/posts/tabular-foundation-models-tabicl.html) capaz de predecir sin reentrenar mediante aprendizaje en contexto sobre filas de la tabla. Si hay IAs capaces de generar texto o imágenes, ¿por qué no columnas adicionales en una tabla, datos faltantes, etc.?

[Un diccionario estadística-ML](https://statmodeling.stat.columbia.edu/2026/04/17/in-ml-everyones-humpty-dumpty/) para traducir de una a otra términos como «inferencia», «verosimilitud», «causal», «priori», «bayesiano» o «sesgo».

La paradoja [«todos los sitios se están calentando más deprisa que el resto del mundo»](https://www.youtube.com/watch?v=j9cDpdTlQrc), explicada: lo que menos se calienta es el mar, donde no vive nadie.

[Cómo construir un gráfico con doble eje Y en ggplot()](https://www.r-bloggers.com/2026/08/dual-scaled-y-axis-with-ggplot/) y, también, cómo justificar el uso de esta [técnica generalmente no recomendada](https://www.datawrapper.de/blog/dualaxis), en casos de uso concretos.

Cremieux sostiene que [la menor esperanza de vida de EEUU pese a su riqueza no se explica por un mal sistema sanitario, sino por obesidad, hábitos y causas externas](https://www.cremieux.xyz/p/america-rich-and-short-lived) (accidentes, homicidios, sobredosis). Aparentemente, en lo estrictamente tratable por el sistema sanitario, EEUU tiene un buen desempeño.

[Walnutpie es un motor de muestreo basado en MCMC para funciones de densidad continuamente diferenciables desarrollado en Python y que acepta modelos descritos en Stan, PyMC, NumPyro, JAX y Python clásico](https://statmodeling.stat.columbia.edu/2026/08/04/walnutpie-version-0-0-1-released/).

[Desventajas de los HDP (intervalos de máxima probabilidad a posteriori)](https://statmodeling.stat.columbia.edu/2026/09/11/why-i-dont-like-highest-posterior-density-hpd-intervals/) frente a los intervalos centrales. El principal, que omiten información sobre la probabilidad de cada una de las colas.

John Cook analiza [la varianza posterior en el modelo conjugado Poisson-gamma](https://www.johndcook.com/blog/2026/07/12/posterior-variance/) que no se comporta como se espera. La teoría asintótica sugiere que la varianza decae monótonamente, pero lejos del infinito pueden identificarse patrones distintos.

Se pregunta también [cómo modelar el tiempo hasta que ocurra algo anunciado como «coming soon»](https://www.johndcook.com/blog/2026/08/22/coming-soon/) a partir de una pizzería que lleva más de un año sin abrir. Al lector se le sugiere pensar en el asunto desde la perspectiva del análisis de la supervivencia (que disuelve completamente las preguntas que se plantea el autor del artículo enlazado).

FT Alphaville ---conocido por su [«nihilismo estadístico»](https://ftav.substack.com/p/indian-sum-err)--- disecciona el que describe como [un gráfico del gobierno «engañoso por un factor de más de 23 millones por ciento»](https://archive.is/newest/https://www.ft.com/content/684e18ff-aecf-4d0e-af66-cb17fd80c231).

El mismo medio también [disecciona los microdatos de la encuesta usada para medir la tasa de inflación](https://www.ft.com/content/f1cb96b2-00db-4baf-bec5-14b8e2765053) (en particular, el epígrafe «pequeños mamíferos en jaula»).

Un entrañable artículo que se pregunta por [la relevancia práctica del concepto de suficiencia estadística](https://carloschavezp29.substack.com/p/sufficient-for-what) de forma no irónica.

Era 2014 y Norm Matloff denunciaba que [la estadística está perdiendo terreno frente a la ciencia de datos](https://matloff.wordpress.com/2014/08/26/statistics-losing-ground-to-cs-losing-image-among-students/). ¡Qué tiempos aquellos!
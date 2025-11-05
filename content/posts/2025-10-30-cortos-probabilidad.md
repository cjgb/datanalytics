---
author: Carlos J. Gil Bellosta
categories:
- cortos
date: 2025-10-30
description: 'Artículos sobre probabilidad y estadística: del problema de Monty Hall
  a la distribución de la correlación, la racionalidad del voto y las trampas del
  azar real.'
lastmod: '2025-11-05T19:20:36.837962'
related:
- 2010-06-10-sobre-la-probabilidad-condicionada-y-el-problema-de-monty-hall.md
- 2025-06-17-cortos-probabilidad.md
- 2021-04-08-sobre-las-probabilidades-de-eventos-que-ocurren-una-unica-vez.md
- 2015-02-19-decisiones-a-ojo-de-buen-cubero.md
- 2020-12-09-maxima-verosimilitud-vs-decisiones.md
tags:
- probabilidad
- monty hall
- monedas
- correlación
- asimetría
title: Unas cuantas notas sobre probabilidad
url: /2025/10/30/cortos-probabilidad/
---

- [_Monty Hall and generative modeling: Drawing the tree is the most important step_](https://statmodeling.stat.columbia.edu/2025/09/20/monty-hall-and-generative-modeling-drawing-the-tree-is-the-most-important-step/): Un artículo que invita a pensar los problemas de probabilidad en términos generativos, en cómo se obtienen los resultados, ilustrándolo con el ejemplo clásico del problema de Monty Hall: en lugar de buscar directamente una respuesta, es conveniente dibujar el árbol de probabilidad para aclarar las suposiciones sobre cómo se generan los datos (o decisiones).
- [_Why probability probably doesn’t exist (but it is useful to act like it does)_](https://statmodeling.stat.columbia.edu/2025/09/18/why-probability-probably-doesnt-exist-but-it-is-useful-to-act-like-it-does/): Abunda sobre la vieja y manida cuestión sobre si la _probabilidad_ existe objetivamente. Pero esquiva el meollo de la cuestión y se queda en que, como concepto, es extremadamente útil como herramienta para comprender y estudiar el mundo. Incluso si dudamos de la existencia _real_ de la probabilidad, argumenta que es conveniente _actuar como si existiera_.
- [_Yes, your single vote really can make a difference! (in Canada)_](https://statmodeling.stat.columbia.edu/2025/10/01/yes-your-single-vote-really-can-make-a-difference-in-canada/): Se refiere a un caso real ocurrido en Canadá en el que un distrito electoral fue decidido por un solo voto. Es la anécdota que algunos querrán esgrimir contra la _categoría_ de la irracionalidad del voto individual.
- En [_Distribution of correlation_](https://www.johndcook.com/blog/2025/10/20/distribution-of-correlation/) y en [_Is the skewness of the distribution of the empirical correlation coefficient asymptotically proportional to the correlation?_](https://statmodeling.stat.columbia.edu/2025/10/22/skew/) se analiza un mismo problema, el de la distribución del coeficiente de correlación. Si se toman muestras con una correlación real predefinida y fija $\rho$, se obtiene una distribución asimétrica (necesariamente), cuya asimetría crece con la correlación $\rho$. Cuando las distribuciones son normales, [existe solución _analítica_](https://mathworld.wolfram.com/CorrelationCoefficientBivariateNormalDistribution.html), pero incluso en ese caso parece más razonable simular.
- Matt Levine cuenta una historia muy instructiva sobre [lanzamientos de monedas en el mundo real](https://www.bloomberg.com/opinion/articles/2023-10-12/ftx-had-many-bad-spreadsheets):
    1. Entrevistaban a alguien para un trabajo en un _hedge fund_ y le hicieron estudiar las matemáticas (esperanza, desviación estándar) de 1000 lanzamientos de monedas.
    2. Una vez hechos los cálculos, le preguntaron si aceptaría participar en un juego en el que ganaría $0.5 + \epsilon$ de tirar una moneda y que saliese cara.
    3. El tipo dijo que sí.
    4. El entrevistador le contestó: "no, respuesta incorrecta; si te lo ofrecemos, no deberías aceptarlo: tenemos un tipo ahí abajo que saca un 55% de caras".
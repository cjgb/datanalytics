---
author: Carlos J. Gil Bellosta
categories:
- cortos
date: 2024-10-15
lastmod: '2025-04-06T19:00:04.135272'
related:
- 2021-04-08-sobre-las-probabilidades-de-eventos-que-ocurren-una-unica-vez.md
- 2024-07-10-cortos-stats.md
- 2014-10-28-tres-sigmas-o-nanay.md
- 2024-09-05-fraude-electoral-rusia.md
- 2023-09-28-potencia-tests.md
tags:
- prueba de hipótesis
- etfs
- left
- fraude
- probabilidades pequeñas
title: Cómo exprimir la prueba de Kolmogorov-Smirnov y unos cuantos asuntos más
url: /2024/10/15/cortos-estadistica/
---

Suponía que era de conocimiento universal. Pero si John D. Cook siente la necesidad de recordarnos que las [probabilidades pequeñas se suman pero las grandes no](https://www.johndcook.com/blog/2024/05/10/small-probabilities-add/), será por algo.

Lo raro es que no ocurra nunca nada altamente improbable, [edición número 6210](https://www.themoneyillusion.com/rare-events-are-really-common/).

[En los extremos, la varianza importa más que la media](https://www.johndcook.com/blog/2024/08/26/variance-in-the-extemes/). (Se refiere a dos poblaciones con medias y varianzas distintas. Si una observación es _extrema_, es casi seguro que viene de la población con mayor varianza que la de mayor media, para casi todas las definiciones razonables y compatibles de razonables de _mayor_ y _extremo_).

Un ETF promete 3x la rentabilidad de cierta acción. La acción sube un 100%. El ETF hace lo que promete ---es decir, cada día tiene rendimientos del triple que su subyacente--- pero baja en el mismo periodo un 82% (véase [la noticia](https://www.bloomberg.com/opinion/articles/2024-09-03/triple-etfs-triple-your-fun)). Es una _paradoja_ que ya se trató aquí [previamente](/2024/02/29/letf/).

El afán por aplicar métodos casi cabalísticos para identificar fraude electoral parece estar llegando demasiado lejos.
[Aquí](https://statmodeling.stat.columbia.edu/2024/07/16/the-recent-iranian-election-should-we-be-suspicious-that-the-vote-totals-are-all-divisible-by-3/) se habla del caso en el que alguien sugiere fraude porque... las cinco grandes cifras publicadas acerca de unas elecciones en Irán son divisibles por tres.

La prueba de Kolmogorov-Smirnov (de dos muestras) permite, como la de Student, comparar dos muestras. Está basado en el estadístico $D$, que es el máximo de dos subestadísticos $D_+$ y $D_-$.
[Aquí](https://datacolada.org/120) se discute cómo se pueden utilizar $D_+$ y $D_-$ y su interpretación para exprimir la cantidad de información que proporciona la prueba.

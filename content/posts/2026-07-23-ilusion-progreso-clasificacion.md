---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2026-07-23
description: Una mirada crítica a los avances metodológicos en el antiguo problema
  de la clasificación binaria.
lastmod: '2026-07-17T17:45:53.600814'
related:
- 2018-01-04-la-ilusion-de-progreso-en-problemas-de-clasificacion.md
- 2025-11-11-logistica-troceada.md
- 2020-02-14-lineal-o-logistica.md
- 2020-06-24-la-regresion-logistica-como-el-modelo-mas-simple-posible-que.md
- 2021-04-27-un-articulo-muy-poco-bde-del-bde.md
tags:
- modelos
- clasificación
- regresión logística
- árboles frugales
title: ¿Ilusión de progreso en las técnicas de clasificación?
url: /2026/07/23/ilusion-progreso-clasificacion/
---

No es que esté particularmente de acuerdo con lo que sigue. De hecho, siempre he abogado por la actualización metodológica y puedo enseñar las cicatrices que me dejó algún enfrentamiento por estos motivos en mis años bravos. En estas páginas he escrito mucho, además, sobre qué tipo de señales y relaciones pueden detectar los métodos modernos que los tradicionales ignoran. Pero no está de más exponerse de vez en cuando a los argumentos contrarios, que más de una vez encierran un grano de verdad.

En esta ocasión, extraigo de un artículo que es retrospectivo además de viejo, [_50 Years of Data Science_](https://www.tandfonline.com/doi/full/10.1080/10618600.2017.1384734), un argumento _empírico_ contra los métodos de clasificación binarios _glamurosos_ (_boosting_, RRFF, etc.), que es una colección de referencias a terceros artículos:

- [Hand (2006)](https://projecteuclid.org/journals/statistical-science/volume-21/issue-1/Classifier-Technology-and-the-Illusion-of-Progress/10.1214/088342306000000060.full) _demostró_ que los avances en métodos de clasificación han sido exagerados y que en muchos casos, mejoran muy poco los resultados de métodos clásicos, como el análisis discriminante lineal.
- Artículos como [este](https://www.pnas.org/doi/full/10.1073/pnas.0807471105) o [este](https://academic.oup.com/bioinformatics/article/30/21/3062/2422201) consideran modelos de tipo «más-o-menos», donde el coeficiente de las distintas variables solo puede ser ±1, y muestran cómo pueden resultar competitivos frente a otras técnicas más sofisticadas en algunas aplicaciones.

El autor sostiene, además, que estos métodos salen bien parados en la literatura por la selección _estratégica_ de los conjuntos de datos con los que se elige ilustrar su uso; pero que su ventaja se reduce cuando se eligen conjuntos de datos _al azar_.

La retroestadística solo me interesa en mi vertiente de coleccionista de trastos inútiles. No defendería jamás una pérdida de eficiencia por la satisfacción de usar un método clásico o hipersencillo, sobre todo cuando el beneficio computacional es mínimo. Pero si no estuviese dispuesto a transar cierto grado de eficiencia por otras ventajas, no hablaría aquí nunca de estadística bayesiana ni me habría tomado la molestia de mencionar los [árboles frugales](/2016/07/13/rapido-y-frugal-una-digresion-en-la-direccion-inhabitual/) hace diez años.
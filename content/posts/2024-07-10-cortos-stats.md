---
author: Carlos J. Gil Bellosta
categories:
- cortos
date: 2024-07-10
lastmod: '2025-04-06T18:51:25.140448'
related:
- 2012-01-12-localidad-globalidad-y-maldicion-de-la-dimensionalidad.md
- 2014-03-28-predictores-con-varianza-casi-nula-inflacion-loterias-y-linea-de-comandos.md
- 2024-07-03-cortos-stats.md
- 2016-01-22-analisis-estadistico-de-respuestas-ocultas-en-encuestas.md
- 2022-03-03-error-sesgo-modelos-lineales.md
tags:
- filosofía de la ciencia
- monedas
- sorpresa
- imputación múltiple
title: Otro índice de sorpresa y algún que otro asunto más
url: /2024/07/10/cortos-stats/
---

### I.

[Lo que hemos aprendido de lanzar al aire monedas 350757 veces](https://arxiv.org/abs/2310.04153). Del resumen:
- Hay cierta tendencia (~51%) a que la moneda caiga en el mismo sentido en que estaba al ser lanzada (i.e., que salga cara si al lanzar la moneda, la cara estaba hacia arriba).
- Hay mucha variación interpersonal.
- El sesgo decrece conforme la misma persona lanza las monedas más y más veces.


### II.

Si alguien os pregunta de algún caso en el que se explica una cosa oscura de manera todavía más oscura, mostradles [_Desorden y predicción en series trimestrales_](https://nadaesgratis.es/manu-hidalgo/desorden-y-prediccion-en-series-trimestrales).


### III.

En el mismo blog, hay [una entrada](https://nadaesgratis.es/admin/afecta-la-politica-monetaria-al-tipo-de-interes-natural) ---da igual el tema---, que acaba, nada menos, así:

> Hará falta más trabajo empírico para confirmarla definitivamente o refutarla.

¿De dónde sacan a gente capaz de escribir eso?


### IV.

John D. Cook habla del índice de sorpresa
[aquí](https://www.johndcook.com/blog/2024/03/08/surprise-index/).

El índice de sorpresa del evento $i$ podría ser $-\log p_i$ o, simplemente,
$1 / p_i,$
pero el lector podrá convencerse de que, en cierto sentido, es más apropiado usar

$$\frac{\sum_j p_j^2}{p_i}.$$

### V.

En
[_If you fit a model with multiply imputed data, you can still plot the line_](https://solomonkurz.netlify.app/blog/2021-10-21-if-you-fit-a-model-with-multiply-imputed-data-you-can-still-plot-the-line/)
(y también [aquí](https://statmodeling.stat.columbia.edu/2024/05/03/combining-multiply-imputed-datasets-never-easy/))
se discute un problema que, espero, en unos años no tendremos:
- Tienes datos con algunos _missings_.
- Realizas imputación múltiple, con lo que obtienes varios conjuntos de datos _completos_.
- Ajustas modelos sobre cada uno de ellos.
- Combinas los distintos modelos en uno global, _definitivo_.

En el futuro, con suerte, todo (imputación + modelo) se ajustará simultáneamente.
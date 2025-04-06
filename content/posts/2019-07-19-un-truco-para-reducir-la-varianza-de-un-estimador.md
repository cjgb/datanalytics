---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2019-07-19 09:13:02+00:00
draft: false
lastmod: '2025-04-06T19:10:58.631491'
related:
- 2019-04-16-sobre-el-error-de-generalizacion-porque-a-veces-se-nos-olvida.md
- 2022-12-22-correlacion-y-y-hat.md
- 2022-11-24-ley-estadistico-inconsciente.md
- 2022-03-03-error-sesgo-modelos-lineales.md
- 2022-03-10-diagramas-causales-hipersimples-1-errores.md
tags:
- estadística
- estimación
- media
- varianza
title: Un truco para reducir la varianza de un estimador
url: /2019/07/19/un-truco-para-reducir-la-varianza-de-un-estimador/
---

Tienes dos variables aleatorias positivamente correlacionadas, $latex X$ y $latex Y$ y una muestra de $latex n$ parejas de ellas $latex (x_i, y_i)$.

La esperanza de $latex X$, $latex E(X)$, es conocida y la de $latex Y$ no. Obviamente, la puedes estimar haciendo

$$ E(Y) \sim \frac{1}{n} \sum_i y_i.$$

Sin embargo, la varianza del estimador

$$ E(Y) \sim E(X) \frac{\sum y_i}{\sum x_i}$$

es menor.

Tengo una explicación de la intuición de por qué eso es cierto en lugar de no serlo. Pero como no sé si es suficientemente buena, dejo que alguien proponga la suya en los comentarios.

**Nota:** Lo menos interesante es la demostración (puaj) o referencias (puaj, puaj). Vale más la justificación intuitiva. De todos modos, el interesado en enlaces y, de regalo, un caso de uso inspirado en dicha fórmula, siempre puede acudir a [_Combining Analytic Direct Illumination and Stochastic Shadows_](https://hal.archives-ouvertes.fr/hal-01761558/document)_.
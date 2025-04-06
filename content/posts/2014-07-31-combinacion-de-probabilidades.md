---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2014-07-31 07:13:26+00:00
draft: false
lastmod: '2025-04-06T19:06:54.257260'
related:
- 2010-11-12-abundando-en-lo-de-nuestra-ineptitud-para-estimar-la-probabilidad-condicionada.md
- 2022-09-06-problema-estadistica-frecuencias-naturales.md
- 2023-09-07-problema-modelos-bayesianos-identicabilidad.md
- 2020-07-06-un-articulo-muy-raro-raro-raro.md
- 2016-09-28-como-se-escribia-verosimilitud-en-frances-en-1774.md
tags:
- estadística
- estadística bayesiana
title: Combinación de probabilidades
url: /2014/07/31/combinacion-de-probabilidades/
---

Hace unos días alguien me pasó una fórmula que tiene una pinta no muy distinta de

$$ p = \frac{p_1 p_2 \cdots p_N}{p_1 p_2 \cdots p_N + (1 - p_1)(1 - p_2) \cdots (1 - p_N)}$$

alegando que era una aplicación de _métodos bayesianos_ (para estimar la probabilidad de algo combinando distintos _indicios_). Pero no está en mi libro (¿y en el tuyo?). El hilo (y varios correos) me condujeron a [esto](http://en.wikipedia.org/wiki/Bayesian_spam_filtering#Combining_individual_probabilities) y de ahí, a través de referencias de referencias, a [_Combining Probabilities_](http://www.mathpages.com/home/kmath267.htm). Donde todo está muy bien explicado.

La fórmula anterior es correcta, según ella, si se dan varias circunstancias. La primera, es la independencia entre los eventos cuya probabilidad es $latex p_i$ que, bueno, casi es obligatorio dar por buena. Porque la alternativa es el quilombo.

Pero la segunda es más seria y antibayesiana. Según el enlace anterior, la condición es _que haya simetría entre el sí y el no_, entre la ocurrencia o la no ocurrencia del evento. Es decir, que las probabilidades a _priori_ del evento y del no evento sean iguales a 1/2 y se cancelen mutuamente.

¡Feliz coincidencia!
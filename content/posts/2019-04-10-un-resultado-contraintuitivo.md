---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2019-04-10 09:13:23+00:00
draft: false
lastmod: '2025-04-06T19:01:21.378613'
related:
- 2019-03-13-mezclas-y-regularizacion.md
- 2023-09-07-problema-modelos-bayesianos-identicabilidad.md
- 2015-07-06-una-interpretacion-rapida-y-sucia-de-los-coeficientes-de-la-regresion-logistica.md
- 2016-02-29-los-tres-contraargumentos-habituales.md
- 2019-12-02-sobre-los-coeficientes-de-los-glm-en-scikit-learn.md
tags:
- estadística
- estadística bayesiana
- priori
- regresión ridge
title: Un resultado contraintuitivo
url: /2019/04/10/un-resultado-contraintuitivo/
---

[Esta entrada recoge la pregunta y la duda que motivó una conversación con [Javier Nogales](https://twitter.com/fjnogales) en Twitter hace unos días.]

Citaba (él) un resultado de [Theobald de 1974](https://www.jstor.org/stable/2984775) (¿tanto lleva _ridge_ entre nosotros? ¡habría jurado que menos!) que viene a decir que siempre existe un peso $latex \lambda$ para el que _ridge_ es mejor que OLS.

Ves el álgebra y piensas: verdad será.

Pero te fías de tu propia intuición y piensas: ¡vaya un resultado contraintuitivo si no contradictorio! Porque:

* _Ridge_ equivale a una regresión lineal cierto tipo de priori informativa en 0.
* OLS es la regresión lineal con una priori no informativa.
* Si los coeficientes _reales_ son distintos de cero, una priori informativa en 0 es una priori mentirosa (¿sesgada?).

En resumen, el teorema viene a decir un modelo puede _mejorar_ si se le añade cierta dosis de información mendaz. O que es mejor cierta dosis de información, aunque sea sesgada, que no información. ¿Paradójico?

Reflexiones:

* Una priori en cero aumenta el sesgo del modelo (salvo que los coeficientes sean todos cero).
* Pero a la vez penaliza que los coeficientes se alejen demasiado, por lo que se reduciría su varianza potencial.

De todos modos modos, tal y como lo he planteado, el resultado es bien contraintuitivo.
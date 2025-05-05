---
author: Carlos J. Gil Bellosta
categories:
- consultoría
- estadística
- r
date: 2019-09-16 09:13:17+00:00
draft: false
lastmod: '2025-04-06T18:48:38.811966'
related:
- 2020-03-18-lme4-simulate.md
- 2020-03-18-k-vecinos-lmer.md
- 2020-04-13-regresion-tradicional-vs-multinivel.md
- 2022-03-03-error-sesgo-modelos-lineales.md
- 2020-05-11-agregar-antes-de-modelar.md
tags:
- consultoría
- estadística
- lme4
- r
- simulación
title: Un modelo que alimenta una simulación
url: /2019/09/16/un-modelo-que-alimenta-una-simulacion/
---

Tenemos en Circiter un proyecto sobre el que no puedo dar muchos detalles, pero que vamos a plantear (en versión muy resumida) como un modelo que alimenta una simulación.

El modelo no va a ser un modelo sino un modelo por sujeto ([rebaños](https://datanalytics.com/2014/08/15/mascotas-y-rebanos/), los llamamos aquí). Los modelos serán, casi seguro, modelos mixtos (`lmer`/`glmer`).

Pero claro, si usas un modelo, por muy mixto que sea, con intención de simular, `predict` se queda muy corto (¡siempre da la el mismo resultado!).

![](/wp-uploads/2019/09/dilbert.jpg)

De ahí, `simulate`.

Más detalles, [aquí](https://gist.github.com/tmalsburg/df66e6c2ab494fad83ee).
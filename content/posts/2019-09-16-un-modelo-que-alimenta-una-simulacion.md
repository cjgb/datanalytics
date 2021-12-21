---
author: Carlos J. Gil Bellosta
date: 2019-09-16 09:13:17+00:00
draft: false
title: Un modelo que alimenta una simulación

url: /2019/09/16/un-modelo-que-alimenta-una-simulacion/
categories:
- consultoría
- estadística
- r
tags:
- consultoría
- estadística
- lme4
- r
- simulación
---

Tenemos en Circiter un proyecto sobre el que no puedo dar muchos detalles, pero que vamos a plantear (en versión muy resumida) como un modelo que alimenta una simulación.

El modelo no va a ser un modelo sino un modelo por sujeto ([rebaños](https://www.datanalytics.com/2014/08/15/mascotas-y-rebanos/), los llamamos aquí). Los modelos serán, casi seguro, modelos mixtos (`lmer`/`glmer`).

Pero claro, si usas un modelo, por muy mixto que sea, con intención de simular, `predict` se queda muy corto (¡siempre da la el mismo resultado!).

![](/wp-uploads/2019/09/dilbert.jpg)

De ahí, `simulate`.

Más detalles, [aquí](https://gist.github.com/tmalsburg/df66e6c2ab494fad83ee).
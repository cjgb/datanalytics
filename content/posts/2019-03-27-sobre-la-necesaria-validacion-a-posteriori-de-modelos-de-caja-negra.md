---
author: Carlos J. Gil Bellosta
categories:
- ciencia de datos
- estadística
date: 2019-03-27 09:13:01+00:00
draft: false
lastmod: '2025-04-06T19:04:43.610055'
related:
- 2023-03-02-conformal-prediction.md
- 2024-02-01-optimizacion-generalizacion.md
- 2020-06-12-explicacion-de-modelos.md
- 2024-03-05-sobreajuste-modelos-bayesianos.md
- 2024-10-17-interpretacion-modelos.md
tags:
- aprendizaje automático
- ciencia de datos
- dalex
- estadística
- modelos
title: Sobre la (necesaria) validación a posteriori de modelos de caja negra
url: /2019/03/27/sobre-la-necesaria-validacion-a-posteriori-de-modelos-de-caja-negra/
---

Esta entrada viene a cuento de una conversación que tuve el otro día con un economista _clásico_ que me preguntaba mi opinión sobre los métodos del ML aplicados en su disciplina (y no solo en ella). Le causaba cierto desasosiego, muy razonable, el hecho de que le pusieran delante cajas negras que _presuntamente_, y eso era artículo de fe, predecían ciertos fenómenos macroeconómicos. ¿Qué ---decía--- si los modelos están recogiendo las correlaciones erróneas? (Y sí, el mundo del ML está plagado de casos de ese tipo; por ejemplo, léase la motivación de [_Intelligible Models for HealthCare: Predicting Pneumonia Risk and Hospital 30-day Readmission_](http://people.dbmi.columbia.edu/noemie/papers/15kdd.pdf)).

Típicamente, tradicionalmente, uno define un modelo (digamos que generativo) con una serie de variables de las que uno espera un comportamiento predefinido, etc. Y uno valida el modelo en términos de la bondad de ajuste, la capacidad predictiva... pero no solo eso. El hecho de que las variables (su tamaño, su signo) operen de la manera esperada sirve como comprobación adicional para poder darlo por bueno.

¿Y con modelos de caja negra?

Hasta no hace tanto, era una rareza realizar sobre ellos validaciones adicionales. Se daban por buenos si _funcionaban_. Supongo que eso le dijeron a mi economista: que lo que le enseñaban, funcionaba. Pero hoy en día es cada vez más frecuente (y contamos con herramientas cada vez mejores) para realizar este [análisis _a posteriori_](https://data-speaks.luca-d3.com/2018/11/interpretacion-de-modelos-predictivos.html). Precisamente, para verificar que las variables _mueven_ el modelo en la dirección que esperada, etc. Es decir, lo de siempre, solo que tal vez de otra manera.

No va a servir para todos los casos (para los más, los modelos generativos funcionan y lo hacen bien), pero sí para algunos. Igual mañana (me están apremiando para ir a otra parte lejos del teclado) me animo y describo un caso paradigmático de aplicación.
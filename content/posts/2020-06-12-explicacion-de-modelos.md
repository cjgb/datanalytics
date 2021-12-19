---
author: Carlos J. Gil Bellosta
date: 2020-06-12 09:13:00+00:00
draft: false
title: Explicación de modelos

url: /2020/06/12/explicacion-de-modelos/
categories:
- ciencia de datos
- estadística
tags:
- cajas negras
- estadística
- explicación
- aprendizaje automático
---

Este es el primer año en el que en mi curso de _ciencia de datos_ (hasta ahora en el EAE; a partir del año que viene, vaya uno a saber si y dónde) introduzco una sección sobre explicación de modelos.

Hay quienes sostienen que, mejor que crear un modelo de caja negra y tratar luego de explicar las predicciones, es recomendable comenzar con un modelo directamente explicable (p.e., un GLM). Por mucha razón que traigan, _vox clamantis in deserto_: hay y seguirá habiendo modelos de caja negra por doquier.

Pero nuestra natural inclinación a saber nos impulsará siempre a tratar de entender por qué nuestro sistema le da una puntuación de 4.6 a tal vino. Querremos saber qué le falta o le sobra. Querremos saber qué palanca activar para alcanzar el 4.7. Querremos saber siempre.

Como premio de consolación para quienes usen herramientas de caja negra ([explicables pero no interpretables](https://statmodeling.stat.columbia.edu/2018/10/30/explainable-ml-versus-interpretable-ml/), en cierta nomenclatura), existe una creciente y relativamente moderna caja de herramientas teóricas y prácticas. Y una manera accesible de obtener una visión global de lo que hay es leer [esto](https://pbiecek.github.io/ema/). Aunque sea en diagonal.
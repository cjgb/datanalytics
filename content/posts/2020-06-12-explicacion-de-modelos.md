---
author: Carlos J. Gil Bellosta
categories:
- ciencia de datos
- estadística
date: 2020-06-12 09:13:00+00:00
draft: false
lastmod: '2025-04-06T19:07:28.529440'
related:
- 2020-05-14-la-gramatica-del-analisis-explicativo-interactivo-de-modelos.md
- 2019-03-27-sobre-la-necesaria-validacion-a-posteriori-de-modelos-de-caja-negra.md
- 2018-02-14-diagramas-de-cajas-lo-que-hay-que-saber-y-muchas-otras-cosas-que-no-hacen-tanta-falta-pero-que-son-entretenidas.md
- 2024-10-17-interpretacion-modelos.md
- 2024-09-24-cortos-stats.md
tags:
- cajas negras
- estadística
- explicación
- aprendizaje automático
title: Explicación de modelos
url: /2020/06/12/explicacion-de-modelos/
---

Este es el primer año en el que en mi curso de _ciencia de datos_ (hasta ahora en el EAE; a partir del año que viene, vaya uno a saber si y dónde) introduzco una sección sobre explicación de modelos.

Hay quienes sostienen que, mejor que crear un modelo de caja negra y tratar luego de explicar las predicciones, es recomendable comenzar con un modelo directamente explicable (p.e., un GLM). Por mucha razón que traigan, _vox clamantis in deserto_: hay y seguirá habiendo modelos de caja negra por doquier.

Pero nuestra natural inclinación a saber nos impulsará siempre a tratar de entender por qué nuestro sistema le da una puntuación de 4.6 a tal vino. Querremos saber qué le falta o le sobra. Querremos saber qué palanca activar para alcanzar el 4.7. Querremos saber siempre.

Como premio de consolación para quienes usen herramientas de caja negra ([explicables pero no interpretables](https://statmodeling.stat.columbia.edu/2018/10/30/explainable-ml-versus-interpretable-ml/), en cierta nomenclatura), existe una creciente y relativamente moderna caja de herramientas teóricas y prácticas. Y una manera accesible de obtener una visión global de lo que hay es leer [esto](https://pbiecek.github.io/ema/). Aunque sea en diagonal.
---
author: Carlos J. Gil Bellosta
date: 2020-03-06 09:13:00+00:00
draft: false
title: Fases divergentes y convergentes del análisis de datos

url: /2020/03/06/fases-divergentes-y-convergentes-del-analisis-de-datos/
categories:
- consultoría
tags:
- consultoría
---

[Aquí](https://simplystatistics.org/2018/09/14/divergent-and-convergent-phases-of-data-analysis/) se propone un método para el análisis de datos que resume

![](/wp-uploads/2020/03/double_diamond_data_analysis-1024x724.png)

Consta de dos procesos _divergentes_,

  * la exploración de los datos y
  * la modelización

y dos convergentes,

  * la síntesis y
  * la narración, que concluye el análisis.

En el enlace anterior se describe el proceso con más detalle. Eso sí, mis comentarios. El primero es que cada vez veo menos diferencia entre explorar y modelar. No entiendo ninguna exploración que no esté motivada por un modelo implícito; p.e., representar las medias por grupo no es otra cosa que una ANOVA para pobres. Crear árboles de decisión sobre los datos brutos es muy indicativo de por dónde van los tiros en los datos, qué variables son más importantes, cuáles son irrelevantes, etc. Obviamente, el modelo final no va a ser ninguno de estos protomodelos, pero sí que contienen su germen.

El segundo es que faltan _retroflechas_, las que conducen de una fase a alguna de las anteriores. La linealidad del análisis de datos es consultoría ficción y en el mundo real [se parece más a _Primer_ que a _12 hombres sin piedad_](https://xkcd.com/657/large/).
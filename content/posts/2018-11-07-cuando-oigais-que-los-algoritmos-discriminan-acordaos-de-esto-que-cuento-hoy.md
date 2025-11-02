---
author: Carlos J. Gil Bellosta
categories:
- ciencia de datos
date: 2018-11-07 08:13:40+00:00
draft: false
lastmod: '2025-04-06T18:52:28.845427'
related:
- 2021-02-11-solo-el-modelo-vacio-pasa-todos-los-checks.md
- 2018-11-14-modelos-y-sesgos-discriminatorios-unas-preguntas.md
- 2010-10-17-sin-sexo-por-decision-judicial.md
- 2020-02-26-algoritmos-y-acatarrantes-definiciones-de-justicia.md
- 2017-01-16-weapons-of-math-destruction.md
tags:
- ciencia de datos
- discriminación
- sesgo
title: Cuando oigáis que los algoritmos discriminan, acordaos de esto que cuento hoy
url: /2018/11/07/cuando-oigais-que-los-algoritmos-discriminan-acordaos-de-esto-que-cuento-hoy/
---

Generalmente, cuando construyes uno de esos modelos para clasificar gente entre merecedores de una hipoteca o no; de un descuento o no; de... vamos, lo que hacen cientos de _científicos de datos_ a diario, se utilizan dos tipos de fuentes de datos: individuales y grupales.

La información grupal es la que se atribuye a un individuo por el hecho de pertenecer a un sexo, a un grupo de edad, a un código postal, etc. Típicamente tiene una estructura seccional (invariante en el tiempo).

La individual es producto de su propio comportamiento: histórico de transacciones, antecedentes penales, registros médicos, etc. Típicamente, es longitudinal.

Construir modelos consiste en combinar esos dos tipos de fuentes de información para poder realizar predicciones sobre los sujetos en cuestión. No entraré en detalles sobre cómo.

Ahora vienen los _raritos_. Y me refiero a estos:

![](/img/2017/01/weapons_math_destruction.jpg)

Que van y dicen que:

* [Usar información grupal es discriminatorio](http://www.equineteurope.org/Finland-Assessing-credit-rating-on-the-basis-of-statistical-data-alone-is).
* [Que usar información individual es discriminatorio](https://marginalrevolution.com/marginalrevolution/2018/10/unintended-consequences-information-bans.html).

Así que, ¿qué cojones querrán los _raritos_?
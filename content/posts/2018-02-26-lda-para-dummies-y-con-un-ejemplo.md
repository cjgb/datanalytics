---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2018-02-26 08:13:36+00:00
draft: false
lastmod: '2025-04-06T19:09:57.549016'
related:
- 2022-10-04-bayesianismo-frecuentismo-teoria-decision-01.md
- 2022-10-06-bayesianismo-frecuentismo-teoria-decision-02.md
- 2012-10-08-las-cosquillas-de-los-sondeos-electorales.md
- 2014-11-04-dislexia-probabilistica.md
- 2016-07-04-gestion-de-la-mendacidad-encuestoelectoral-los-numeros.md
tags:
- dirichlet
- estadística
- lda
title: LDA para dummies (y con un ejemplo)
url: /2018/02/26/lda-para-dummies-y-con-un-ejemplo/
---

Tema de hoy: LDA (_Latent Dirichlet Allocation_). A raíz de la pregunta de una atenta lectora que quiere saber de qué va la cosa. Con un ejemplo: reproducir el mecanismo mental para tratar de averiguar a qué partido vota alguien.

Supongamos que hay cuatro partidos (PP, PSOE, Ciudadanos, IU). Supongamos que una persona _al azar_ votaría a uno de los cuatro. Pero no sabemos a cuál. De todos modos, como leemos las encuestas, _sabemos_ que la probabilidad de que vote PP es _alrededor_ del 30% etc.

No podemos decir que esas probabilidades _son_, p.e., (.3, .25, .25, .20). Podemos decir que están _alrededor de_ (.3, .25, .25, .20). Con una certidumbre determinada.

La distribución de Dirichlet (y de ahí el nombre de la cosa) lo es sobre vectores positivos que suman uno y están alrededor de un valor dado con una dispersión determinada. Es, de hecho, una distribución de probabilidades sobre vectores de probabilidades (como lo es la beta, a la que generaliza).

Tras la digresión superficialmente matemática, seguimos con el experimento mental.

A nuestro sujeto se le pueden hacer preguntas: qué opina sobre las pensiones, sobre los toros, sobre el contrato único, sobre el _sexo no binario_, etc. Como tenemos datos sobre lo que opinan los votantes del PP, etc. sobre esas cuestiones, podemos usar esa información para actualizar nuestras probabilidades iniciales. Pero invirtiendo (¡para eso está el teorema de Bayes!) la flecha causal (si se me permite).

En concreto, si nuestro sujeto echase pestes de los sindicatos, ¿cómo cambiaría nuestra opinión sobre su partido favorito? Estamos superacostumbrados a realizar ese tipo de ajustes en nuestro día a día. Con el teorema de Bayes podemos cuantificar y precisar ese proceso de _actualización de probabilidades_ a la vista de información nueva.

El resultado de nuestro análisis es una nueva distribución de probabilidades, seguramente más _picuda_ (o precisa), que da más credibilidad a la preferencia del sujeto por un partido determinado que las probabilidades originales, basadas en encuestas _urbi et orbi_, que valen para un sujeto abstracto, pero no para este en concreto.

Y esa es toda la ciencia de la cosa. Luego, eso sí, viene la tecnología: el cómo llevarlo a la práctica, cómo resolver los cuellos de botella computacionales que aparecen necesariamente en aplicaciones no triviales, etc. Pero esa es otra guerra.
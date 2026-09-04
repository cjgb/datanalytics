---
author: Carlos J. Gil Bellosta
categories:
- cortos
date: 2026-07-28
description: Incluyendo errores de la ONS británica, la varianza de la posteriori,
  la subjetividad de los modelos estadísticos y la seudoanonimidad.
lastmod: '2026-07-24T02:41:30.842659'
related:
- 2026-04-07-cortos.md
- 2025-07-01-cortos-estadistica.md
- 2025-10-16-estadistica.md
- 2025-12-11-cortos.md
- 2025-11-20-estadistica.md
tags:
- estadística
- estadística bayesiana
- retórica
- anonimidad
- ine
title: 'Notas (31): una serie de apuntes sobre estadística'
url: /2026/07/21/cortos-estadística/
---

Francisco Marcos cierra en Almacén de Derecho su [serie sobre el cártel de la leche](https://almacendederecho.org/cuanto-vale-el-cartel-de-la-leche-y-ii) analizando las ocho sentencias de la Audiencia Provincial de Barcelona señalando cómo el juez rechazó las estimaciones de daños realizadas por ambas partes usando objetivísimos modelos macroeconómicos y prefirió evaluar su impacto, poco más o menos, por la cuenta de la vieja. Un episodio más que nos recuerda que la estadística es poco más que un recurso retórico.

En la misma línea, Gabrielle Sorensen [retuerce el hilo metodológico para reestudiar la famosa «paradoja de la igualdad de género»](https://asteriskmag.substack.com/p/the-gender-equality-paradox-that), según la cual las mujeres de los países más igualitarios son menos propensas a optar por carreras STEM. Sostiene que el resultado es muy sensible a las decisiones de medición, se infla por un sesgo estadístico y, al controlar por conglomerados culturales, la relación ---como no podía ser de otra manera tras repasar la biografía de la autora--- desaparece o incluso se invierte: la paradoja no es tal, sino un artefacto impulsado por los países occidentales, que son _outliers_ en muchos rasgos.

John D. Cook examina en su blog el [comportamiento de la varianza a posteriori en estadística bayesiana](https://www.johndcook.com/blog/2026/07/12/posterior-variance/). Contrariamente a lo que pueda dictar la intuición, en el modelo conjugado beta-binomial la varianza puede aumentar ante datos inesperados; en el normal-normal, cada nueva observación reduce la varianza; y en el poisson-gamma la varianza aumenta con cada evento observado y disminuye cuadráticamente con el tiempo (en la interpretación más usual del proceso).

Dado un conjunto de $n$ personas, [hacen falta $\log_2(n)$ bits de información para identificar a cada individuo](https://datanalytics.com/2013/02/06/anonimidad-en-ficheros-de-microdatos-un-estudio-en-el-contexto-espanol/). Así las cosas, Dynomight conjetura que [la (pseudo) anonimidad desaparecerá](https://dynomight.net/pseudpocalypse/) dado que los rasgos de estilo son suficientes para extraer los no tantos bits de información necesarios para identificar a una persona a partir de un texto razonablemente largo que haya redactado. Su estimación es, de hecho, que un texto en inglés de unas mil palabras da para destilar los 29 bits de información suficientes para identificar a una persona dentro del universo angloparlante.

Guardaba una selección de artículos (como [este](https://www.ft.com/content/5bd04b67-f30f-46fe-9d05-b0b0bcd6d3c4), [este](https://www.ft.com/content/5fd0a771-e2a9-4cbf-a00f-f0cfc7134dfb), [este](https://www.ft.com/content/2fecabbb-53b7-4c54-bfed-d24de9799cbe), este de la BBC, o [esta misma disculpa pública de la ONS](https://blog.ons.gov.uk/2026/06/19/learning-from-an-operational-issue-temporarily-impacting-lfs-data-in-support-of-our-continued-recovery/)) sobre errores del INE británico, la ONS, pero prácticamente no tengo ninguno del de aquí. Debe de ser porque hace mucho mejor las cosas.
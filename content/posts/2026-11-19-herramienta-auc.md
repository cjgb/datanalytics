---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2026-11-19
lastmod: '2026-11-18'
description: "Está pensada para ganar intuición sobre el concepto del AUC y entender por qué es alto o bajo en según qué circunstancias."
tags:
- auc
- clasificación
- bondad de ajuste
title: "Una herramienta pedagógica para explorar el AUC"
url: /2026/11/19/herramienta-exploracion-auc/
---

Hacía tiempo que andaba detrás de la idea de construir una [herramienta para explorar el AUC](/auc-exploration-tool/auc-simulator.html).

He escrito en [varias ocasiones](https://datanalytics.com/tags/auc/) sobre los inconvenientes y problemas asociados a este indicador, sobre todo cuando se usa como «único instrumento de vuelo». Pero sucede a menudo que carecemos de intuiciones sobre qué valores son aceptables en un contexto concreto, qué puede haber hecho crecer o decrecer el indicador, cómo le afectan determinados casos problemáticos, etc. Pero el proceso de adquirir esa intuición es lento porque los nuevos casos ---nuevos modelos, nuevos problemas, etc.--- suceden esporádicamente. Lo ideal sería disponer de una amplia gama de casos con los que poder ir ganando intuición sobre lo que el AUC nos puede estar contando (o no).

Ese es el problema que mi pequeña herramienta trata de resolver.

Aunque pienso que solo será útil para tres de cada millón y, de ellos, más de la mitad estarán ya tan atrapados por la liturgia estulta del _number not high enough_ que ni entenderán de qué les puedo estar hablando aquí hoy.
---
author: Carlos J. Gil Bellosta
categories:
- artículos
date: 2020-03-24 09:13:00+00:00
draft: false
lastmod: '2025-04-06T18:53:09.363939'
related:
- 2020-03-20-casos-de-coronavirus-en-madrid-provincia-un-modelo-un-poco-menos-crudo-basado-en-la-mortalidad-ii.md
- 2019-07-03-modelizacion-de-retrasos-una-aplicacion-del-analisis-de-supervivencia.md
- 2024-05-23-espeanza-vida-covid.md
- 2020-03-19-casos-de-coronavirus-en-madrid-provincia-un-modelo-muy-crudo-basado-en-la-mortalidad.md
- 2020-03-12-monitorizacion-diaria-de-la-mortalidad.md
tags:
- artículos
- coronavirus
- letalidad
- supervivencia
title: ¿Se puede calcular la letalidad (del coronavirus, digamos) sin el análisis
  de la supervivencia?
url: /2020/03/24/se-puede-calcular-la-letalidad-del-cornavirus-digamos-sin-el-analisis-de-la-supervivencia/
---

Pues no lo sé. Pero con él, sí, según _[Methods for estimating the case fatality ratio for a novel, emerging infectious disease](https://www.ncbi.nlm.nih.gov/pubmed/16076827)_:

>During the course of an epidemic of a potentially fatal disease, it is important that the case fatality ratio be well estimated. The authors propose a novel method for doing so based on the Kaplan-Meier survival procedure, jointly considering two outcomes (death and recovery), and evaluate its performance by using data from the 2003 epidemic of severe acute respiratory syndrome in Hong Kong, People's Republic of China. They compare this estimate obtained at various points in the epidemic with the case fatality ratio eventually observed; with two commonly quoted, naïve estimates derived from cumulative incidence and mortality statistics at single time points; and with estimates in which a parametric mixture model is used. They demonstrate the importance of patient characteristics regarding outcome by analyzing subgroups defined by age at admission to the hospital.

La mala noticia es que no vamos a contar con datos detallados que tracen paciente a paciente, su ingreso (e, idealmente, la fecha de contagio), así como esas características de los pacientes que pueden determinar el desenlace de su enfermedad. Al menos, no los que miramos los toros desde detrás de la barrera informativa.
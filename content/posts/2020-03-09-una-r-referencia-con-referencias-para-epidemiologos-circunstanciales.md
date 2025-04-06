---
author: Carlos J. Gil Bellosta
categories:
- estadística
- r
date: 2020-03-09 09:13:00+00:00
draft: false
lastmod: '2025-04-06T19:11:25.895527'
related:
- 2020-03-10-seguimiento-de-los-nuevos-casos-diarios-de-coronavirus-en-tiempo-real-con-r.md
- 2020-03-09-seguimiento-del-coronavirus-en-tiempo-real-con-r.md
- 2020-04-27-muestreo-sensibilidad-y-especificidad.md
- 2020-03-20-casos-de-coronavirus-en-madrid-provincia-un-modelo-un-poco-menos-crudo-basado-en-la-mortalidad-ii.md
- 2020-03-19-casos-de-coronavirus-en-madrid-provincia-un-modelo-muy-crudo-basado-en-la-mortalidad.md
tags:
- epidemiología
- paquetes
- r
- surveillance
title: Una R-referencia con referencias para epidemiólogos circunstanciales
url: /2020/03/09/una-r-referencia-con-referencias-para-epidemiologos-circunstanciales/
---

Lo del coronavirus nos ha convertido a todos en epidemiólogos circunstanciales. Casi ninguno de vosotros tenéis acceso a los datos necesarios para hacer cosas por vuestra cuenta, pero sí, tal vez gracias a esta entrada, las herramientas necesarias para ello.

Podéis empezar por el paquete [`survellance`](https://CRAN.R-project.org/package=surveillance) de R, que implementa muchos de los métodos más modernos para la monitorización de brotes epidémicos.

En particular, puede que os interese la función `bodaDelay`, intitulada _Bayesian Outbreak Detection in the Presence of Reporting Delays_, y que implementa una serie de métodos para estimar el número real de casos cuando las notificaciones de los positivos llegan tarde. O, en plata, si dizque hay 613 confirmados oficiales, ¿cuántos podría llegar a haber _realmente_?

Además, hay referencias, etc. todas ellas muy accesibles.
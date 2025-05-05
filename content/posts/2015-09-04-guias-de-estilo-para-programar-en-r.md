---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2015-09-04 08:13:38+00:00
draft: false
lastmod: '2025-04-06T18:46:33.421239'
related:
- 2011-03-08-c2bfcomo-mejorar-tu-estilo-de-programacion-en-r.md
- 2010-11-01-una-propuesta-de-guia-de-estilo-de-r.md
- 2011-01-20-nuevo-paquete-para-procesar-texto-en-r-stringr.md
- 2015-10-02-purrr-otro-dialecto-para-la-programacion-funcional-en-r.md
- 2019-02-14-modas-y-fotogenia-del-codigo-secuencial.md
tags:
- estilo
- programación
- r
title: Guías de estilo para programar en R
url: /2015/09/04/guias-de-estilo-para-programar-en-r/
---

[Frans van Dunné](https://twitter.com/fransvandunne) me ha hecho llegar su [guía de estilo de programación en R](https://rpubs.com/FvD/guia-estilo-r). Abunda en otra creada por Google hace un tiempo y que traduje y adapté [aquí](https://datanalytics.com/2014/01/27/guia-de-estilo-de-r-de-google/).

Tiene como novedad, dice, su adaptación a las formas y maneras de Hadley Wickham, aún no tan conocido entonces. Coinciden, no obstante, en lo más.

Ninguna de las dos trata el uso las tuberías (operador `%>%`). Pero es un asunto que se nos puede ir de las manos: de hecho, hoy he conocido el paquete `[backpipe](https://github.com/decisionpatterns/backpipe)`, que implementa `%<%` y que nos augura largas y desesperantes sesiones de depuración de código.
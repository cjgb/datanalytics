---
author: Carlos J. Gil Bellosta
date: 2018-05-23 08:13:19+00:00
draft: false
title: Un generador de datos sintéticos para proteger la privacidad de los microdatados

url: /2018/05/23/un-generador-de-datos-sinteticos-para-proteger-la-privacidad-de-los-microdatados/
categories:
- consultoría
- estadística
tags:
- anonimidad
- estadística
- python
- microdatos
---

[DataSynthesizer](https://github.com/DataResponsibly/DataSynthesizer) (véase también el correspondiente [artículo](https://github.com/DataResponsibly/DataSynthesizer/blob/master/docs/cr-datasynthesizer-privacy.pdf)) es un programa en Python que:

1. Toma una tabla de datos (microdatos, de hecho) que contiene información confidencial.
2. Genera otra _aleatoria_ pero que conserva (¿los conservará?) la estructura básica de la información subyacente (conteos, correlaciones, etc.).

Está pensado para poder realizar el análisis estadístico de (determinados) datos sin verlos propiamente.

Particularmente interesante es el algoritmo para preservar la correlación entre columnas.

[Nota: he aprovechado la entrada para acuñar el neologismo _microdatado_ para referirme a quien figura en un fichero de microdatos.]

[Otra nota: está desarrollado en Python. Hay que ir tomando nota de esas cosas.]

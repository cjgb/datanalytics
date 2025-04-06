---
author: Carlos J. Gil Bellosta
categories:
- nlp
- r
- charlas
date: 2013-05-13 07:18:08+00:00
draft: false
lastmod: '2025-04-06T19:08:31.501986'
related:
- 2013-05-23-diapositivas-de-mi-charla-sobre-un-lematizador-desambiguado-con-r.md
- 2011-12-13-un-lematizador-para-el-espanol-con-r-c2bfcutre-c2bfmejorable.md
- 2014-04-29-todo-el-mundo-habla-de-cadenas-de-markov.md
- 2014-10-03-lengua-y-markov-en-martinacocina-este-sabado.md
- 2012-01-05-un-lematizador-para-el-espanol-con-r-ii.md
tags:
- lematizador
- nlp
- r
title: 'Charla: un lematizador probabilístico con R'
url: /2013/05/13/charla-un-lematizador-probabilistico-con-r/
---

El jueves 16 de mayo hablaré en el [Grupo de Interés Local de Madrid de R](http://r-es.org/Grupo+de+Inter%C3%A9s+Local+de+Madrid+-+GIL+Madrid) sobre [lematizadores](http://es.wikipedia.org/wiki/Lematizaci%C3%B3n) probabilísticos.

Hablaré sobre el proceso de lematizacion y trataré de mostrar su importancia dentro del mundo del llamado procesamiento del lenguaje natural (NLP). La lematización es un proceso humilde dentro del NLP del que apenas nadie habla: su ejercicio solo ha hecho famoso a [Martin Porter](http://en.wikipedia.org/wiki/Martin_Porter). Lo eclipsan otras aplicaciones más vistosas, como el siempre sobrevalorado análisis del sentimiento. Sin embargo, es una pieza fundamental que subyace (o debería subyacer) en cualquier aplicación seria que analice textos.

En la charla repasaré las tres grandes familias de soluciones para el problema de la lematización:

* las basadas en _reglas duras_,
* las basadas en diccionarios y, finalmente,
* las más interesantes, las probabilísticas.

Y, en particular, describiré con cierto detalle —aunque tratando de obviar los aspectos técnicos más áridos— un algoritmo que combina _oportunísticamente_ diccionarios y [modelos ocultos de Markov](http://es.wikipedia.org/wiki/Modelo_oculto_de_Markov) y que debería ver la luz _en producción_ dentro del conjunto de [APIs lingüísticas de Molino de Ideas](http://www.apicultur.com/).
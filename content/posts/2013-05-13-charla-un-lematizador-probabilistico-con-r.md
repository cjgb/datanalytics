---
author: Carlos J. Gil Bellosta
date: 2013-05-13 07:18:08+00:00
draft: false
title: 'Charla: un lematizador probabilístico con R'

url: /2013/05/13/charla-un-lematizador-probabilistico-con-r/
categories:
- nlp
- r
- charlas
tags:
- lematizador
- nlp
- r
---

El jueves 16 de mayo hablaré en el [Grupo de Interés Local de Madrid de R](http://r-es.org/Grupo+de+Inter%C3%A9s+Local+de+Madrid+-+GIL+Madrid) sobre [lematizadores](http://es.wikipedia.org/wiki/Lematizaci%C3%B3n) probabilísticos.

Hablaré sobre el proceso de lematizacion y trataré de mostrar su importancia dentro del mundo del llamado procesamiento del lenguaje natural (NLP). La lematización es un proceso humilde dentro del NLP del que apenas nadie habla: su ejercicio solo ha hecho famoso a [Martin Porter](http://en.wikipedia.org/wiki/Martin_Porter). Lo eclipsan otras aplicaciones más vistosas, como el siempre sobrevalorado análisis del sentimiento. Sin embargo, es una pieza fundamental que subyace (o debería subyacer) en cualquier aplicación seria que analice textos.

En la charla repasaré las tres grandes familias de soluciones para el problema de la lematización:

* las basadas en _reglas duras_,
* las basadas en diccionarios y, finalmente,
* las más interesantes, las probabilísticas.

Y, en particular, describiré con cierto detalle —aunque tratando de obviar los aspectos técnicos más áridos— un algoritmo que combina _oportunísticamente_ diccionarios y [modelos ocultos de Markov](http://es.wikipedia.org/wiki/Modelo_oculto_de_Markov) y que debería ver la luz _en producción_ dentro del conjunto de [APIs lingüísticas de Molino de Ideas](http://www.apicultur.com/).

---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2016-04-25 09:13:42+00:00
draft: false
lastmod: '2025-04-06T19:12:45.021481'
related:
- 2017-01-10-repensando-la-codificacion-por-impacto.md
- 2016-07-13-rapido-y-frugal-una-digresion-en-la-direccion-inhabitual.md
- 2020-11-11-codificacion-de-categoricas-de-1-a-a-b-a.md
- 2014-03-07-victoria-o-diferencia-de-puntos-ahora-con-random-forests.md
- 2018-01-08-recodificacion-de-variables-categoricas-de-muchos-niveles-ayuda.md
tags:
- árboles de decisión
- discretización
title: Discretización de variables continuas (con árboles)
url: /2016/04/25/discretizacion-de-variables-continuas-con-arboles/
---

La primera entrada de esta bitácora es de enero de 2010. En aquella época, recuerdo, había apartado un artículo sobre categorización de variables continuas, i.e., el proceso de convertir (¿para qué?) una variable continua en categórica de una manera _óptima_.

Aparte de cuestionar el _paraqué_ (¿por qué porqué es sustantivo y _paraqué_ no?) de la cosa me asaltaron dudas sobre el cómo. Si se quiere discretizar, ¿por qué no usar directamente un árbol? Es decir, un árbol simple en el que se modele la variable objetivo en función de la continua que se desee discretizar.

Y esa es la entrada que nunca escribí en su día. Y ahora llego tarde porque [alguien ya lo ha hecho por mí](https://blog.clevertap.com/how-to-convert-numerical-variables-to-categorical-variables-with-decision-trees/).

(Gracias se le deben a Gema Mora, exalumna de mi [curso de R en KSchool](http://kschool.com/cursos/madrid/programa-profesional-de-iniciacion-a-r/), que me ha pasado la nota; me alegro mucho de verla activa en estos menesteres).

**Addenda:** atención al tercer punto de [esto](http://www.datanalytics.com/2017/01/20/la-h-filosofia-de-la-estadistica-en-once-puntos/).
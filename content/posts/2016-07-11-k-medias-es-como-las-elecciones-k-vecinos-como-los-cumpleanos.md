---
author: Carlos J. Gil Bellosta
date: 2016-07-11 08:13:24+00:00
draft: false
title: k-medias es como las elecciones; k-vecinos, como los cumpleaños

url: /2016/07/11/k-medias-es-como-las-elecciones-k-vecinos-como-los-cumpleanos/
categories:
- ciencia de datos
- estadística
tags:
- estadística
- k-medias
- k-vecinos
- ciencia de datos
---

El otro día asistí a la enésima confusión sobre k-medias y k-vecinos. Que lo es, más en general, sobre el clústering contra modelos locales de la clase que sean, desde k-vecinos hasta el filtrado colaborativo. Veamos si esta comparación que traigo hoy a mis páginas contribuye a erradicar dicha confusión.

k-medias es como las elecciones. Hace poco tuvimos unas en España. Alguien decidió (aproximadamente) que `k = 4` y nos pidió, a nosotros, punticos del espacio, identificar el centroide más próximo a nosotros para que lo votásemos. Pues eso, la misma frustración que muchos dizque sintieron teniendo que elegir entre partidos/centroides subjetivamente igual de alejados de los intereses de uno es la que sienten nuestros punticos cuando los _procrusteamos_ para asociarlos al _totum revolutum_ de los _clientes estrella_, etc.

k-vecinos es como los cumpleaños. Cuando el puntico $latex x_i$ cumple años, busca en su entorno a sus `k` más queridos amigos y allegados y se va de fiesta con ellos. ¿Que quiere una fiesta más grande a un a riesgo de juntarse con gente que ni fu ni fa? Aumenta `k`; ¿que busca una mayor intimidad y afinidad?; lo achica (¿cómo demonios se puntúa una frase como esta? ¿algún ortógrafo en la sala?).

Predefinir grupos es cómodo, rápido y podía hacerse incluso con las máquinas viejunas de hace 20 años. Encontrar grupos afines _ad hoc_ lleva más tiempo, es más costoso computacionalmente pero contribuye a mitigar la frustración de nuestros punticos.

---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2019-02-14 08:13:14+00:00
draft: false
lastmod: '2025-04-06T19:09:54.415317'
related:
- 2010-04-21-para-que-copien-peguen-y-disfruten.md
- 2015-02-11-recurrencia-recurrente.md
- 2021-05-18-un-viejo-truco-para-que-r-vuele.md
- 2012-01-23-nueve-reinas-con-sas-y-r-tambien.md
- 2012-01-12-cosa-prodigiosa-sin-palabras-i.md
tags:
- programación
- r
title: Modas y fotogenia del código secuencial
url: /2019/02/14/modas-y-fotogenia-del-codigo-secuencial/
---

Este tipo de _programación_ se puso de moda en los noventa:

![](/wp-uploads/2019/02/clementine.png#center)

Y yo decía: ¿dónde están mis bucles? ¿Y mis bifurcaciones?

Este tipo de _programación_ está de moda últimamente:

{{< highlight R >}}
hourly_delay <- flights %>%
  filter(!is.na(dep_delay)) %>%
  group_by(date, hour) %>%
  summarise(
    delay = mean(dep_delay),
    n = n() ) %>%
  filter(n > 10)
{{< / highlight >}}

Y todo bien, sí, pero sigo sin tener bucles o bifurcaciones.

Tal vez no hagan falta. Al menos, para cosas de andar por casa. Pero, lo confieso, el código _de verdad_ que escribo está lleno de casos especiales, comprobaciones de todo tipo de contingencias, reglas que aplican a unas columnas sí y otras no, objetos complejos (p.e., listas), que se van rellenando de una u otra manera dependiendo de las opciones del usuario y otras enojosas coyunturas muy reñidas con la elegancia.

A alguien le convendrán esas modas para generar código secuencial fotogénico. A mí, lo confieso, apenas me resuelven nada.
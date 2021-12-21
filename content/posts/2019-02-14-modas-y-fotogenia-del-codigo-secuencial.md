---
author: Carlos J. Gil Bellosta
date: 2019-02-14 08:13:14+00:00
draft: false
title: Modas y fotogenia del código secuencial

url: /2019/02/14/modas-y-fotogenia-del-codigo-secuencial/
categories:
- r
tags:
- programación
- r
---

Este tipo de _programación_ se puso de moda en los noventa:

![](/wp-uploads/2019/02/clementine.png)

Y yo decía: ¿dónde están mis bucles? ¿Y mis bifurcaciones?

Este tipo de _programación_ está de moda últimamente:

{{< highlight R "linenos=true" >}}
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
---
author: Carlos J. Gil Bellosta
date: 2015-07-14 08:13:54+00:00
draft: false
title: Efectos en regresiones logísticas

url: /2015/07/14/efectos-en-regresiones-logisticas/
categories:
- estadística
tags:
- effects
- paquetes
- r
- regresión logística
---

Rescato y reconvierto un comentario de mi buen amigo José Luis Cañadas en [una entrada mía reciente](http://www.datanalytics.com/2015/07/06/una-interpretacion-rapida-y-sucia-de-los-coeficientes-de-la-regresion-logistica/) en la de hoy.

Sugiere José Luis el uso del paquete [`effects`](http://cran.r-project.org/web/packages/effects/index.html) de R para estudiar el efecto de (que el caso concreto de interés, aunque hay otros) las variables de un modelo logístico.

Nos copia el código



    library(<a href="http://inside-r.org/r-doc/stats/effects">effects)
    mod.cowles <- <a href="http://inside-r.org/r-doc/stats/glm">glm(volunteer ~ sex + neuroticism*extraversion,
                      data = Cowles, <a href="http://inside-r.org/r-doc/stats/family">family = <a href="http://inside-r.org/r-doc/stats/binomial">binomial)
    eff.cowles <- allEffects(mod.cowles,
                             xlevels = list(extraversion = seq(0, 24, 6)),
                             given.values = c(sexmale = 0.5))
    plot(eff.cowles, type = "response")



que genera

[![effects](/wp-uploads/2015/07/effects.png)
](/wp-uploads/2015/07/effects.png)

un gráfico en el que se aprecia el efecto de las variables en la probabilidad de `volunteer`. Entre otras cosas, nos indica el efecto de `sex`, que coincide con el que podemos obtener haciendo



    tapply(Cowles$volunteer == "yes", Cowles$sex, mean)
    #female      male
    #0.4474359 0.3868955



y el mucho más jugoso análisis del efecto cruzado, en el que se aprecia la desigual influencia de una variable según el nivel de la otra (y supongo que habrá maneras de _invertir_ la gráfica).

Los efectos en este tipo de análisis son de interés limitado si no se puede fijar el nivel de las variables adicionales. Por ejemplo, nos interesaría conocer el efecto del término cruzado solo para los hombres. O del sexo para quienes tengan un nivel dado de alguna de las otras variables, etc. Para eso están los argumentos `given.values` y `typical`.

Y, ¿para qué todo esto? Pues para que cuando ajustes tu próxima regresión logística no te quedes en un análisis de los coeficientes sino que, trascenciéndolo, puedas analizar lo jugoso: la probabilidad que asignaría tu modelo a los distintos sujetos en función de variables de interés.

Y termino con un pequeño ejercicio autoevaluable: a la vista del gráfico anterior, ¿qué signo tiene el efecto cruzado de `neuroticism` y `extraversion`?


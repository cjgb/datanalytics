---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2015-07-14 08:13:54+00:00
draft: false
lastmod: '2025-04-06T18:50:16.980939'
related:
- 2014-11-17-los-coeficientes-de-la-regresion-logistica-con-sobremuestreo.md
- 2012-04-11-correccion-por-exposicion-del-modelo-logistico.md
- 2020-04-13-regresion-tradicional-vs-multinivel.md
- 2012-05-18-modelos-exponenciales-para-grafos-aleatorios-y-iii-inferencia.md
- 2018-02-06-interacciones-mecanicas-en-regresiones-logisticas.md
tags:
- effects
- paquetes
- r
- regresión logística
title: Efectos en regresiones logísticas
url: /2015/07/14/efectos-en-regresiones-logisticas/
---

Rescato y reconvierto un comentario de mi buen amigo José Luis Cañadas en [una entrada mía reciente](https://datanalytics.com/2015/07/06/una-interpretacion-rapida-y-sucia-de-los-coeficientes-de-la-regresion-logistica/) en la de hoy.

Sugiere José Luis el uso del paquete [`effects`](http://cran.r-project.org/web/packages/effects/index.html) de R para estudiar el efecto de (que el caso concreto de interés, aunque hay otros) las variables de un modelo logístico.

Nos copia el código

{{< highlight R >}}
library(effects)
mod.cowles <- glm(volunteer ~ sex + neuroticism*extraversion,
    data = Cowles, family = binomial)
eff.cowles <- allEffects(mod.cowles,
    xlevels = list(extraversion = seq(0, 24, 6)),
    given.values = c(sexmale = 0.5))
plot(eff.cowles, type = "response")
{{< / highlight >}}


que genera

[![effects](/wp-uploads/2015/07/effects.png#center)
](/wp-uploads/2015/07/effects.png#center)

un gráfico en el que se aprecia el efecto de las variables en la probabilidad de `volunteer`. Entre otras cosas, nos indica el efecto de `sex`, que coincide con el que podemos obtener haciendo


{{< highlight R >}}
tapply(Cowles$volunteer == "yes", Cowles$sex, mean)
#female      male
#0.4474359 0.3868955
{{< / highlight >}}

y el mucho más jugoso análisis del efecto cruzado, en el que se aprecia la desigual influencia de una variable según el nivel de la otra (y supongo que habrá maneras de _invertir_ la gráfica).

Los efectos en este tipo de análisis son de interés limitado si no se puede fijar el nivel de las variables adicionales. Por ejemplo, nos interesaría conocer el efecto del término cruzado solo para los hombres. O del sexo para quienes tengan un nivel dado de alguna de las otras variables, etc. Para eso están los argumentos `given.values` y `typical`.

Y, ¿para qué todo esto? Pues para que cuando ajustes tu próxima regresión logística no te quedes en un análisis de los coeficientes sino que, trascenciéndolo, puedas analizar lo jugoso: la probabilidad que asignaría tu modelo a los distintos sujetos en función de variables de interés.

Y termino con un pequeño ejercicio autoevaluable: a la vista del gráfico anterior, ¿qué signo tiene el efecto cruzado de `neuroticism` y `extraversion`?
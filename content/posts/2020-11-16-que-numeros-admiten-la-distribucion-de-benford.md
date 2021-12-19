---
author: Carlos J. Gil Bellosta
date: 2020-11-16 09:13:00+00:00
draft: false
title: ¿Qué números admiten la distribución de Benford?

url: /2020/11/16/que-numeros-admiten-la-distribucion-de-benford/
categories:
- estadística
- probabilidad
tags:
- ley de benford
- logaritmo
---

_[Esta entrada es casi una caracterización de lo que promete el título. Quitarle el casi sería prolijo. Pero creo que casi, casi, se adivina de lo que sigue.]_

Siempre que hablamos de distribuciones de probabilidad, somos muy conscientes de los requisitos y condiciones bajo las que aplican. Con una excepción: al hablar del manido Benford. En tales casos se suele argumentar de una manera un tanto mística. Y doblemente mística, como consecuencia, cuando toca explicar por qué en ciertos datos concretos no aplica.

Veamos: la distribución de Benford aplica a los primeros dígitos de los números $latex 10^X$ donde $latex X$ es una variable aleatoria uniforme en [0, 1]; o también en [0, 2], o en [7, 9]. Pero no si lo es en [19, 34.17], por ejemplo. Aplicaría también a una variable aleatoria uniforme en $latex [0, \infty]$, de esas tan del gusto de los bayesianos.

Para ilustrar lo que ocurre realmente, simulemos la distribución del los primeros dígitos de $latex 10^X$ donde $latex X$ es una variable aleatoria uniforme definida en $latex [0, x]$ para una seleción de valores entre 0 y 4:

{{< highlight R "linenos=true" >}}
library(ggplot2)

nsim <- 100000
endpoints <- seq(0.01, 4, by = .01)

res <- sapply(endpoints, function(x){
    muestra <- 10^(runif(nsim, 0, x))
    digitos_iniciales <- sapply(muestra,
      function(x) floor(x / 10^floor(log10(x))))
    table(digitos_iniciales) / nsim
})

tmp <- lapply(res, function(x)
  data.frame(cifra = names(x),
              prob = as.numeric(x)))
tmp <- lapply(1:length(endpoints), function(i){
    a <- tmp[[i]]
    a$endpoint <- endpoints[i]
    a
})

tmp <- do.call(rbind, tmp)
ggplot(tmp, aes(x = endpoint, y = prob)) +
  geom_line() +
  facet_wrap(~cifra) +
  theme_bw()
{{< / highlight >}}

Da como resultado

![](/wp-uploads/2020/11/distribucion_benford.png)

Los valores que se obtienen en las abscisas enteras son Benford; los restantes, no. Obviamente (¿aparentemente?) hay convergencia: cada vez es menos relevante dónde ocurre el corte en la cola.

Que pueda aplicarse Benford viene a ser equivalente a plantearse por qué son tan comunes distribuciones de números como las que comento en la caracterización. Lo cual trasciende el alcance de lo que me he planteado escribir hoy.

**Coda:** Para terminar, un _teorema_ (visto en Twitter y aceptado sin pestañear por gente que debería ser más crítica) que se cumple y que no se cumple a la vez: si tienes unos números que cumplen Benford y los multiplicas por una constante, los números resultantes también cumplen Benford.
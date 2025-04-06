---
author: Carlos J. Gil Bellosta
categories:
- estadística
- r
date: 2020-05-11 09:13:00+00:00
draft: false
lastmod: '2025-04-06T19:12:09.678350'
related:
- 2020-04-13-regresion-tradicional-vs-multinivel.md
- 2020-03-18-lme4-simulate.md
- 2020-06-29-sobremuestreando-x-y-no-y.md
- 2022-03-03-error-sesgo-modelos-lineales.md
- 2015-01-27-grandes-datos-maquinas-pequenas-y-regresiones-logisticas-con-variables-categoricas.md
tags:
- lm
- modelos
- r
title: ¿Agregar antes de modelar?
url: /2020/05/11/agregar-antes-de-modelar/
---

El otro día me pasaron unos datos artificiales para poder probar el ajuste de cierto tipo de modelos. El autor de la simulación construyó tres conjuntos de pares (x,y) y luego los agregó (media de los y agrupando por x) antes de proporcionármelos.

¿Tiene sentido agregar antes de modelar? Incluso sin entrar en el problema del potencial número desigual de observaciones por punto (datos _desbalanceados_) o las heterogeneidades entre las distintas iteraciones (que nos llevaría al mundo de los modelos mixtos).

Nah, no tiene sentido agregar de esa manera. Mejor modelar los datos con observaciones _repetidas_. Y quien no esté convencido, que pruebe

{{< highlight R >}}
library(plyr)

x <- seq(0, 1, by = .3)
nreps <- 100

raw_data <- data.frame(x = x,
    y = rnorm(nreps * length(x), 0, .1))
raw_data$y <- 1 + .5 * raw_data$x + raw_data$y

agg_data <- ddply(raw_data, .(x),
    summarize, y = mean(y))

model_raw <- lm(y ~ x, data = raw_data)
model_agg <- lm(y ~ x, data = agg_data)

summary(model_raw)
summary(model_agg)
{{< / highlight >}}
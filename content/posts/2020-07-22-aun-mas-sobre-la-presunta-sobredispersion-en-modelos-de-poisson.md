---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2020-07-22 12:59:20+00:00
draft: false
lastmod: '2025-04-06T19:07:12.857706'
related:
- 2020-07-17-mas-sobre-la-presunta-sobredispersion-en-el-modelo-de-poisson.md
- 2020-07-16-no-tus-datos-no-tienen-sobredispersion-es-que-el-gato-de-nelder-se-ha-merendado-la-epsilon.md
- 2019-01-08-modelos-de-conteos-con-sobredispersion-con-stan.md
- 2020-06-29-sobremuestreando-x-y-no-y.md
- 2020-03-18-lme4-simulate.md
tags:
- estadística
- glm
- poisson
- sobredispersión
- intervalo de predicción
title: Aún más sobre la presunta sobredispersión en modelos de Poisson
url: /2020/07/22/aun-mas-sobre-la-presunta-sobredispersion-en-modelos-de-poisson/
---

_[Esta entrada continúa el ciclo al que he dedicado [esta](https://datanalytics.com/2020/07/17/mas-sobre-la-presunta-sobredispersion-en-el-modelo-de-poisson/) y [esta otra](https://datanalytics.com/2020/07/16/no-tus-datos-no-tienen-sobredispersion-es-que-el-gato-de-nelder-se-ha-merendado-la-epsilon/) entradas durante los últimos días.]_

Las dos entradas anteriores de la serie se resumen en que:

* el modelo de Poisson no recoge todas las fuentes de error que pueden existir en los datos y que
* las soluciones al uso (como, p.e., usar modelos quasi-Poisson) son puros remiendos.

Si el error en el modelo de Poisson entra (también) en el término lineal,  podemos modelar ese error explícitamente. Podría haber implementado la solución INLA o Stan del problema, pero me conformaré con la `lme4`. Primero, generaré los datos (igual que en las entradas anteriores) y añadiré una variable categórica que identifique cada registro:

{{< highlight R >}}
n <- 1000
sigma <- .5
x <- rep(-5:5, each = n)

x_real <- -1 + .5 * x + rnorm(length(x), 0, sigma)
y <- sapply(
  x_real,
  function(lambda) rpois(1, exp(lambda)))

datos <- data.frame(
    x = x,
    y = y,
    id = factor(1:length(x))
)
{{< / highlight >}}

Como se aprecia, he añadido un error normal con $\sigma = .5$ en el término lineal. Y ahora,

{{< highlight R >}}
library(lme4)
modelo_glmer <- glmer(
    y ~ x + (1 | id),
    data = datos,
    family = "poisson")
summary(modelo_glmer)
{{< / highlight >}}

da

{{< highlight R >}}
Generalized linear mixed model fit by maximum likelihood (Laplace Approximation) ['glmerMod']
  Family: poisson  ( log )
Formula: y ~ x + (1 | id)
    Data: datos

      AIC      BIC   logLik deviance df.resid
  23420.8  23442.8 -11707.4  23414.8    10997

Scaled residuals:
    Min      1Q  Median      3Q     Max
-1.5140 -0.4656 -0.2288  0.1937  8.3973

Random effects:
  Groups Name        Variance Std.Dev.
  id     (Intercept) 0.2763   0.5257
Number of obs: 11000, groups:  id, 11000

Fixed effects:
            Estimate Std. Error z value Pr(>|z|)
(Intercept) -0.98043    0.02124  -46.16   <2e-16 ***
x            0.48867    0.00556   87.89   <2e-16 ***
---
Signif. codes:  0 ‘***’ 0.001 ‘**’ 0.01 ‘*’ 0.05 ‘.’ 0.1 ‘ ’ 1

Correlation of Fixed Effects:
  (Intr)
x -0.780
{{< / highlight >}}

Como se puede ver, no solo se recuperan (aproximadamente) los coeficientes originales, sino que tenemos estimaciones bastante precisas (0.52 vs 0.5) de la desviación estándar del error del término lineal.

Y aunque pensaba que esta iba a ser la última de las entradas de las serie, creo que la voy a cerrar otro día con una adicional sobre los intervalos de predicción.
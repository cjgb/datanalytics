---
author: Carlos J. Gil Bellosta
categories:
- estadística bayesiana
date: 2026-04-30
description: En el contexto de las pruebas A/B bayesianas, se estudia la elección
  de prioris compatibles con lifts realistas que pasen el «prior predictive check».
lastmod: '2026-04-24T12:04:13.020956'
related:
- 2023-03-21-reduccion-error-tests-ab.md
- 2018-05-24-prioris-informativas-un-ejemplo.md
- 2026-02-18-prior-predictive-distribution.md
- 2016-01-14-construccion-de-prioris-informativas-a-la-de-finetti.md
- 2016-02-29-los-tres-contraargumentos-habituales.md
tags:
- estadística bayesiana
- pruebas ab
- prioris
title: 'Pruebas A/B bayesianas: sobre la elección de una priori compatible con lo
  que cabe esperar de ella'
url: /2026/04/30/prioris-pruebas-ab/
---

No voy a robar el tiempo de nadie explicando qué es una prueba A/B. Diré solo que las voy a estudiar desde una perspectiva bayesiana y que voy a analizar críticamente la selección de las prioris.

Por centrar ideas, supongo que la tasa de éxito _a priori_ está alrededor del 5% y que mis prioris van a ser, en principio, betas:

```r
mu <- .05
sd <- .02

# cálculo de los parámetros de la beta correspondiente
beta_params <- function(mu, sd) {
  var <- sd^2
  tmp <- mu * (1 - mu) / var - 1
  a <- mu * tmp
  b <- (1 - mu) * tmp
  c(a = a, b = b)
}

parms <- beta_params(mu, sd)

print(parms)
#       a        b
#  5.8875 111.8625
```

Una elección estándar de las prioris sería considerar $A, B \sim \text{Beta}(a, b)$ independientes. Entonces cabe preguntarse si la distribución a priori es compatible o no con lo que se esperaría al observar datos y la respuesta es negativa.

En efecto, si se hace

```r
n <- 1000

sample_prior_A <- rbeta(n, parms["a"], parms["b"])
sample_prior_B <- rbeta(n, parms["a"], parms["b"])

lift_distribution <- sample_prior_B / sample_prior_A - 1

hist(lift_distribution, main = "Prior distribution of the lift", xlab = "lift", freq = F, breaks = 50)
```

se obtiene la gráfica

![Lift under independence of groups](/img/2026/priors-ab-test-00.png#center)

que demuestra cómo la anterior elección da por plausibles _lifts_ ($p_B / p_A -1$) poco realistas, demasiado alejados del cero.

(Nota: la elección de prioris sobre A y B induce una «priori implícita» para el _lift_, L. Volveré a usar el término «priori implícita» más abajo.)

Juan Orduz estudia en [_Bayesian Power Analysis for A/B Testing_](https://juanitorduz.github.io/bayesian_power_ab_testing/) una formulación alternativa (planteada/sugerida por otros: consúltense los artículos que enlaza) en los siguientes términos:

$$A \sim \text{Beta}(a, b)$$
$$L \sim N(0, \sigma)$$

donde $L$ es el _lift_ y $\sigma$ es un valor pequeño que fuerza al _lift_ a priori a mantenerse en el rango del que espera una persona razonable:

```r
mu_lift <- 0
sd_lift <- .1

lift_prior_distribution <- rnorm(n, mu_lift, sd_lift)
```

Y comienzan a ocurrir cosas.

La primera de ellas es que B está determinado por las distribuciones de A y L,

```r
sample_prior_B_induced <- sample_prior_A * (1 - lift_prior_distribution)
```

y que B está correlado con A:

```r
rho <- cor(sample_prior_A, sample_prior_B_induced)
# 0.969132

plot(sample_prior_A, sample_prior_B_induced)
```

![A is correlated with B](/img/2026/priors-ab-test-01.png#center)

Pero lo más significativo es que entonces B ya no es una $\text{Beta}(a, b)$. En efecto, aunque su media sigue siendo la misma que en el caso anterior, su varianza está ligeramente inflada. De hecho, es

$$\sigma^2_B = \sigma^2_A + (\sigma^2_A + \mu^2) \sigma^2_L$$

que, aunque en este caso es apenas ligeramente superior a la original, podría levantar suspicacias en gente con una tolerancia metodológica inferior a la mía.

Pero se me ocurre una formulación alternativa (usando cópulas, obviamente):

```r
library(copula)

gc <- normalCopula(param = rho, dim = 2)

mv <- mvdc(
  copula    = gc,
  margins   = c("beta", "beta"),
  paramMargins = list(
    list(shape1 = parms["a"], shape2 = parms["b"]),
    list(shape1 = parms["a"], shape2 = parms["b"])
  )
)

samp <- rMvdc(n, mv)
colnames(samp) <- c("A", "B")

cor(samp, method = "pearson")
#          A         B
#A 1.0000000 0.9686657
#B 0.9686657 1.0000000

mean(samp[,"A"])
#[1] 0.05048211
mean(samp[,"B"])
#[1] 0.05047582

sd(samp[,"A"])
#[1] 0.02031405
sd(samp[,"B"])
#[1] 0.01997436

plot(samp)
```

![A is correlated with B](/img/2026/priors-ab-test-02.png#center)

Y con respecto al _lift_, se tiene

```r
tmp <- samp[, "A"] / samp[, "B"] - 1
hist(tmp, main = "Prior distribution of the implicit lift", xlab = "lift", freq = F)
```

![Induced lift prior distribution](/img/2026/priors-ab-test-03.png#center)

La cuestión es ver cómo _operativizar_ esta nueva priori en NumPyro, PyMC, Stan o similares. Supongo que se podrá. Igual le pregunto a Claude un día de estos.
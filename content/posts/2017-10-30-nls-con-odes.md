---
author: Carlos J. Gil Bellosta
categories:
- estadística
- r
date: 2017-10-30 08:13:52+00:00
draft: false
lastmod: '2025-04-06T18:57:24.473662'
related:
- 2017-10-16-modelos-no-lineales-directos-e-inversos.md
- 2017-10-23-modelos-directos-inversos-y-en-los-que-tanto-da.md
- 2022-03-03-error-sesgo-modelos-lineales.md
- 2023-01-18-modelo-poisson-numpyro.md
- 2023-01-24-funciones-enlace.md
tags:
- desolve
- kgode
- nls
- odes
title: nls con odes
url: /2017/10/30/nls-con-odes/
---

Más sobre secuencia de [entradas acerca de ajustes no lineales](https://datanalytics.com/2017/10/16/modelos-no-lineales-directos-e-inversos/). Con (casi) los mismos datos que entonces:

{{< highlight R >}}
set.seed(155)

n <- 100

a <- 1
b <- -1/2
sigma <- 0.1

x <- runif(n, -1, 1)
y <- exp(a * x + b) + rnorm(n, 0, sigma)

dat <- data.frame(x, y)
{{< / highlight >}}

Las `y` proceden de las `x` a través de una función no lineal `exp(a * x + b)`. Que hoy supondremos desconocida. Supondremos únicamente que conocemos cierto mecanismo físico que determina la evolución de las `y` a partir de las `x` dado por una ecuación diferencial

$$ \frac{dy}{dx} = a \exp(ax + b)$$

que ignoramos cómo integrar.

Nota: este es un caso trivial y simple de otro en donde la ecuación diferencial es conocida pero no tiene solución cerrada.

La cosa es que podemos ajustar directamente el modelo sin pasar por la fórmula cerrada. Así:

{{< highlight R >}}
library(deSolve)

my_ode <- function(t, state, parms){
  a <- parms$a
  b <- parms$b
  dy <- a * exp(a * t + b)
  list(dy)
}

foo <- function(a, b, init, x){
  parms = list(a = a, b = b)
  times <- seq(min(dat$x), max(dat$x), by = 0.1)
  res <- ode(y = init, times = times, func = my_ode, parms = parms)[,2]
  approx(times, res, x, rule = 2)$y
}


modelo <- nls(y ~ foo(a, b, init, x),
              data = dat,
              start = list(a = 10, b = 2, init = 0.00001))

summary(modelo)
{{< / highlight >}}

En el código anterior hemos definido la ecuación diferencial como lo exige el paquete `deSolve` de R y hemos creado una función, `foo`, que resuelve la ecuación diferencial y devuelve (vectorizadamente) las `y` correspondientes a un vector de `x`.

El resultado, si lo probáis, no es muy distinto del que se obtendría haciendo

{{< highlight R >}}
modelo_cerrado <- nls(y ~ exp(a * x + b),
  data = dat, start = list(a = 10, b = 2))
summary(modelo_cerrado)
{{< / highlight >}}

Lo de hoy tiene dos ramificaciones relevantes. La primera, cómo abreviar el ajuste [reescribiendo la ecuación diferencial directamente en C](https://cran.r-project.org/web/packages/deSolve/vignettes/compiledCode.pdf). La segunda, explorar el [paquete `KGode`](https://cran.r-project.org/web/packages/KGode/index.html), que parece que es relevante para este tipo de problemas.
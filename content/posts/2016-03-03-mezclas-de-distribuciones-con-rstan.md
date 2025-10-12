---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2016-03-03 09:13:13+00:00
draft: false
lastmod: '2025-04-06T18:59:36.133560'
related:
- 2015-06-25-diferencia-de-medias-a-la-bayesiana-con-salsa-de-stan.md
- 2019-01-08-modelos-de-conteos-con-sobredispersion-con-stan.md
- 2016-07-04-gestion-de-la-mendacidad-encuestoelectoral-los-numeros.md
- 2017-04-12-experimentos-con-extremely-small-data-la-media-muestral-de-pocas-betas.md
- 2018-03-01-kriging-con-stan.md
tags:
- em
- flexmix
- mezclas
- r
- stan
title: Mezclas de distribuciones con Stan
url: /2016/03/03/mezclas-de-distribuciones-con-stan/
---

{{< highlight R >}}
y <- c(rnorm(1000), rnorm(2000, 1, 0.5))
{{< / highlight >}}

es una mezcla de dos normales (N(0, 1) y N(1, 0.5)) con pesos 1/3 y 2/3 respectivamente. Pero, ¿cómo podríamos estimar los parámetros a partir de esos datos?

Se puede usar, p.e., [`flexmix`](https://cran.r-project.org/web/packages/flexmix/index.html), que implementa eso del EM. Pero en el librillo de este maestrillo dice


{{< highlight R >}}
library(rstan)

y <- c(rnorm(1000), rnorm(2000, 1, 0.5))

codigo <- "
data {
  int<lower=1> K; // number of mixture components
  int<lower=1> N; // number of data points
  real y[N]; // observations
}

parameters {
  simplex[K] theta; // mixing proportions
  real mu[K]; // locations of mixture components
  real<lower=0> sigma[K]; // scales of mixture components
}

model {
  real ps[K]; // temp for log component densities

  sigma ~ cauchy(0,2.5);
  mu ~ normal(0,10);

  for (n in 1:N) {
    for (k in 1:K) {
      ps[k] <- log(theta[k]) + normal_log(y[n],mu[k], sigma[k]);
    }
    increment_log_prob(log_sum_exp(ps));
  }
}"

fit <- stan(model_code = codigo,
            data = list(K = 2, N = length(y), y = y),
            iter=48000, warmup=2000,
            chains=1, thin=10)
{{< / highlight >}}


En el código anterior no sé si queda claro cómo cada punto $y_i$ sigue una distribución (condicionada a los parámetros) con densidad $\theta_1 \phi(y_i, \mu_1, \sigma_1) + \theta_2 \phi(y_i, \mu_2, \sigma_2)$.

El resultado no es malo: los valores medianos de las muestras de los parámetros de los parámetros son próximos a los de partida, etc., como puede verse en

![mixture_fitted_values](/wp-uploads/2016/03/mixture_fitted_values.png#center)

Y una coda: en la primera aproximación al problema corrí cuatro cadenas (en lugar de una sola, como en el código que comparto) y el resultado era confuso. Entre otras cosas, las distribuciones de los pesos de la mezcla eran bimodales y los intervalos de confianza muy altos. Eso se debe fundamentalmente a la _no identificabilidad_ de los parámetros: algunas cadenas llamaban $\theta_1$ al peso de la normal centrada en 0 y otras a la centrada en 1. Esto puede apreciarse en el _traceplot_

![mcmc_chains](/wp-uploads/2016/03/mcmc_chains.png#center)

de esa primera ejecución del programa con cuatro cadenas.

Supongo que es un fenómeno conocido, aunque no he encontrado referencias al respecto en el poco tiempo que he dedicado a ello. Por eso he preferido correr una única cadena y, salvo que alguien me pueda proponer una alternativa, me parece que es lo más razonable.
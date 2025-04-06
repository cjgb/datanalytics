---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2019-01-08 08:13:00+00:00
draft: false
lastmod: '2025-04-06T18:54:55.444456'
related:
- 2020-07-17-mas-sobre-la-presunta-sobredispersion-en-el-modelo-de-poisson.md
- 2020-07-22-aun-mas-sobre-la-presunta-sobredispersion-en-modelos-de-poisson.md
- 2022-01-11-caracterizacion-binomial-negativa-poisson-gamma.md
- 2020-07-16-no-tus-datos-no-tienen-sobredispersion-es-que-el-gato-de-nelder-se-ha-merendado-la-epsilon.md
- 2017-12-15-la-poisson-y-la-estabilizacion-de-la-varianza.md
tags:
- ceros
- inflación
- poisson
- stan
- sobredispersión
title: Modelos de conteos con sobredispersión (con Stan)
url: /2019/01/08/modelos-de-conteos-con-sobredispersion-con-stan/
---

Esta entrada muestra cómo afrontar (con Stan) un problema que encontré el otro día en un lugar que no puedo mencionar pero en el que sé que me leen (y los destinatarios sabrán que va por ellos).

El contexto es el siguiente: se hace un test A/B donde la variable de interés son unos conteos. Hay varios grupos (aquí los reduciré a dos) y los datos siguen _aproximadamente_ (aquí omitiré la parte de la inflación de ceros) una distribución de Poisson. Pero solo _aproximadamente_: existe sobredispersión, es decir, la varianza de los datos excede su media.

Así que la formulación más natural, en la que cada $latex n_i \sim \text{Pois}(\lambda)$ no vale. Recurrir a la binomial negativa es una opción, la opción de libro viejo, pero destruye la interpretabilidad del modelo y obliga a renunciar a las propiedades más interesantes de la Poisson (p.e., la aditividad).

Una mejor aproximación es interpretar la sobredispersión de la Poisson como efecto de la heterogeneidad de los sujetos. Es decir, que cada sujeto tiene su propia $latex \lambda$ y crear un modelo jerárquico: uno para las lambdas (p.e., $latex \lambda_i \sim \Gamma(a, b)$ y otro para los conteos, $latex n_i \sim \text{Pois}(\lambda_i)$.

Para lo cual, genero datos (obviamente, de acuerdo con mi modelo):

{{< highlight R >}}
# sujetos por experimento
n <- 5000

# mejora en tratamiento
incr <- .05

# parámetros iniciales de la
# distribución de heterogeneidad
a <- 3
b <- 4


prop.control <- rgamma(n, a, b)
obs.control <- sapply(prop.control,
  function(lambda) rpois(1, lambda))

prop.tratamiento <- rgamma(n, a, b) * (1 + incr)
obs.tratamiento <- sapply(prop.tratamiento,
  function(lambda) rpois(1, lambda))
{{< / highlight >}}

Y ahora modelo en Stan:






{{< highlight c >}}
data {
  int n;
  int control[n];
  int tratamiento[n];
}

parameters {
  real<lower = 0> a;
  real<lower = 0> b;
  real<lower = -0.01, upper = 0.2> incr;
  real<lower = 0> lambdas_control[n];
  real<lower = 0> lambdas_tratamiento[n];
}

model {
  lambdas_control ~ gamma(a, b);
  lambdas_tratamiento ~ gamma(a, b);

  for(i in 1:n){
    control[i] ~ poisson(lambdas_control[i]);
    tratamiento[i] ~ poisson(lambdas_tratamiento[i] * (1 + incr));
  }
}
{{< / highlight >}}

Y ejecuto:

{{< highlight R >}}
library(rstan)

fit <- stan("disp_poisson.stan",
            data = list(n = n, control = obs.control,
                    tratamiento = obs.tratamiento),
            iter = 10000, warmup = 2000,
            chains = 1, thin = 10)

res <- as.data.frame(fit)
{{< / highlight >}}

El resultado es lo de menos. Lo de más, que tenemos disponible este procedimiento para modelar la sobre dispersión de los conteos, que es más natural que otros.

**Nota:** para una visión alternativa, [esto](https://journals.sagepub.com/doi/abs/10.1177/1471082X14524676?rss=1).
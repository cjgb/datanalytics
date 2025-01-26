---
author: Carlos J. Gil Bellosta
date: 2017-01-18 08:13:16+00:00
draft: false
title: Va de si hay una o dos lambdas

url: /2017/01/18/va-de-si-hay-una-o-dos-lambdas/
categories:
- r
tags:
- accidentes
- poisson
- r
- stan
- dgt
---

Un año, el 2016, mueren 1160 personas en accidentes de tráfico. El anterior, 1131, i.e., 29 menos. Ruido estadístico aparte, ¿aumentan?

Comenzamos a optar. Primera elección _subjetiva_: son muestras de una Poisson de parámetro desconocido. La pregunta: ¿el mismo?

Una manera de estudiar lo anterior es plantear

{{< highlight R >}}
1160 ~ poisson(lambda * (1 + incr))
1131 ~ poisson(lambda)
{{< / highlight >}}

y estudiar la distribución de `incr`. Que a saber qué distribución tendrá (teóricamente). Pero, ¿importa?

Mejor que rebuscar a ver qué distribución podría tener la cosa, basta con envolverlo en un poco de seudo-C++,

{{< highlight R >}}
stancode <- '
  parameters{
    real<lower = 0> lambda;
    real<lower = -1, upper=1> incr;
  }

  model{
    1160 ~ poisson(lambda * (1 + incr));
    1131 ~ poisson(lambda);
  }
'
{{< / highlight >}}

y luego, dejar que la magia surta efecto:

{{< highlight R >}}
library(rstan)
fit <- stan(model_code = stancode, chains = 1,
            iter = 12000, warmup = 2000, thin = 10)

summary(fit)$summary[1:2, c("mean", "2.5%", "97.5%")]
#               mean         2.5%       97.5%
#lambda 1.131041e+03 1065.3705780 1200.341736
#incr   2.745496e-02   -0.0531976    0.116086
{{< / highlight >}}

Y se podrían pintar los histogramas, etc. También podemos de alguna manera estimar la probabilidad de que la accidentalidad haya subido, si es que la pregunta tiene sentido:

{{< highlight R >}}
tmp <- as.data.frame(fit)
mean(tmp$incr > 0)
#[1] 0.732
{{< / highlight >}}

Es decir, podíamos decir que hay un 25% de probabilidades de que [los neocríticos de la DGT](http://www.elmundo.es/motor/2017/01/04/586bf1b422601d63628b4655.html) estén equivocados.



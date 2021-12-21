---
author: Carlos J. Gil Bellosta
date: 2015-06-25 08:13:35+00:00
draft: false
title: Diferencia de medias a la bayesiana con salsa de stan

url: /2015/06/25/diferencia-de-medias-a-la-bayesiana-con-salsa-de-stan/
categories:
- estadística
- r
tags:
- estadística bayesiana
- gosset
- r
- stan
- stan
- student
- t-test
---

El habitual problema de la diferencia de medias suele formularse de la siguiente manera: hay observaciones $latex y_{1i}$ e $latex y_{2i}$ donde


$latex y_{ji} \sim N(\mu_j, \sigma)$


e interesa saber si $latex \mu_1 = \mu_2$. Obviamente, se desconoce $latex \sigma$. De [cómo resolvió Gosset](http://www.datanalytics.com/2012/09/13/gosset-el-remuestreador-de-la-infinita-paciencia/) el problema están los libros de estadística llenos. En R,








    set.seed(1234)
    N1 <- 50
    N2 <- 50
    mu1 <- 1
    mu2 <- -0.5
    sig1 <- 1
    sig2 <- 1
     
    y1 <- rnorm(N1, mu1, sig1)
    y2 <- rnorm(N2, mu2, sig2)
     
    <a href="http://inside-r.org/r-doc/stats/t.test">t.test(y1, y2)
    # Welch Two Sample t-test
    #
    # data:  y1 and y2
    # t = 4.7059, df = 95.633, p-value = 8.522e-06
    # alternative hypothesis: true difference in means is not equal to 0
    # 95 percent confidence interval:
    #   0.5246427 1.2901923
    # sample estimates:
    #   mean of x  mean of y
    # 0.5469470 -0.3604705








En [`rstan`](http://mc-stan.org/rstan.html),








    library(rstan)
     
    standat <- list(N1 = length(y1),
                    N2 = length(y2),
                    y1 = y1,
                    y2 = y2,
                    mu0 = mean(c(y1,y2)))
     
    stanmodelcode <- '
    data {
      int<lower=1> N1;
      int<lower=1> N2;
      vector[N1] y1;
      vector[N2] y2;
      real mu0;
    }
     
    parameters {
      real mu;
      real diff;
      real<lower=0> sigma1;
      real<lower=0> sigma2;
    }
     
    model {
      // prioris
      mu ~ normal(mu0, 10);
      sigma1 ~ cauchy(0, 5);
      sigma2 ~ cauchy(0,5);
     
      // verosimilitud
      for (n in 1:N1){
        y1[n] ~ normal(mu, sigma1);
      }
      for (n in 1:N2){
        y2[n] ~ normal(mu + diff, sigma2);
      }
    }
    '
     
    fit <- stan(model_code = stanmodelcode,
                data = standat,
                iter=12000, warmup=2000,
                chains=4, thin=10)








La parte más importante es `model` que, como las demás, es autoexplicativa y muy natural (tal vez, excepto la un tanto artificiosa selección de las distribuciones a priori, no particularmente informativas). Además, y esto es de lo más importante, fácilmente generalizable a otras situaciones.

El resultado de la cosa es








    print(fit)
    # Inference for Stan model: stanmodelcode.
    # 4 chains, each with iter=12000; warmup=2000; thin=10;
    # post-warmup draws per chain=1000, total post-warmup draws=4000.
    #
    # mean se_mean   sd   2.5%    25%    50%    75%  97.5% n_eff Rhat
    # mu       0.54    0.00 0.13   0.29   0.46   0.54   0.63   0.80  3771    1
    # diff    -0.90    0.00 0.20  -1.30  -1.04  -0.91  -0.77  -0.51  3756    1
    # sigma1   0.91    0.00 0.09   0.75   0.84   0.90   0.97   1.11  3977    1
    # sigma2   1.06    0.00 0.11   0.88   0.99   1.05   1.13   1.30  4000    1
    # lp__   -46.89    0.02 1.47 -50.86 -47.56 -46.56 -45.83 -45.13  3945    1
    #
    # Samples were drawn using NUTS(diag_e) at Wed Jun 24 18:00:29 2015.
    # For each parameter, n_eff is a crude measure of effective sample size,
    # and Rhat is the potential scale reduction factor on split chains (at
    # convergence, Rhat=1).








donde puede apreciarse que la estimación de las medias, el intervalo de confianza de la diferencia de medias (`diff`), etc., prácticamente coinciden con los del `t.test` de más arriba. En efecto, los cuantiles 2.5 y 97.5 de `diff` son -1.30 y -0.51, mientras que los que arroja el test de Student son 0.5246427 y 1.2901923.

Además,








    <a href="http://inside-r.org/r-doc/graphics/pairs">pairs(fit, pars=c("mu", "sigma1", "sigma2", "diff"))








produce

[![posterior](/wp-uploads/2015/06/posterior.png)
](/wp-uploads/2015/06/posterior.png)

que es la mar de resultón.

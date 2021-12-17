---
author: Carlos J. Gil Bellosta
date: 2015-09-18 08:13:23+00:00
draft: false
title: 'Un problema "sencillo": posiciones y ruido'

url: /2015/09/18/un-problema-sencillo-posiciones-y-ruido/
categories:
- estadística
- r
tags:
- kalman
- r
- rstan
---

Voy a describir la solución un problema _sencillo_. Se trata de un objeto que se mueve a una velocidad no necesariamente constante en línea recta. Este objeto emite su posición y velocidad periódicamente (p.e., cada segundo). Por centrar ideas, su posición y velocidad reales en esos momentos es



    n <- 100
    v.real <- rnorm(n, 1, 0.2)
    x.real <- cumsum(v.real)



(Perdóneseme lo gañán de la física que aplico para calcular las posiciones: prometo que se puede y que sé hacerlo mejor; pero para el presente caso, vale).

Sin embargo, el canal por el que el objeto transmite esa información tiene ruido. La señal recibida es, por tanto,



    sigma.x <- 0.2
    sigma.v <- 0.2
    v0 <- v.real + rnorm(n, 0, sigma.v)
    x0 <- x.real + rnorm(n, 0, sigma.x)



El problema consiste en obtener estimaciones de la posición del objeto a partir de las observadas (con ruido). Hay una solución sencilla: las posiciones observadas son las reales más un error normal de desviación estándar 0.2. Podemos quedarnos ahí.

También podemos leer y aplicar [esto](https://en.wikipedia.org/wiki/Kalman_filter). Que conste que lo he intentado, pero me he aburrido enseguida. ¡Qué carajal!

Así que he dejado que R lo haga casi todo por mí:



    library(rstan)

    standat <- list(N = n, x0 = x0, v0 = v0,
                    sigmax = sigma.x,
                    sigmav = sigma.v)

    stanmodelcode <- '
    data {
      int<lower=1> N;
      vector[N] x0;
      vector[N] v0;
      real sigmax;
      real sigmav;
    }

    parameters {
      vector[N] x;
      vector[N] v;
    }

    model {
      for (n in 1:N){
        v0[n] ~ normal(v[n], sigmav);
      }

      x0[1] ~ normal(x[1], sigmax);

      for (n in 2:N){
        x0[n] ~ normal(x[n], 0.1);
        x[n]  ~ normal(x[n-1] + 1 * v[n-1], 0.1);
      }
    }
    '

    fit <- stan(model_code = stanmodelcode,
                data = standat,
                iter=12000, warmup=2000,
                chains=4, thin=10)



La estimación (por la media de la distribución a posteriori de las posiciones `x`) puede obtenerse haciendo `colMeans(as.data.frame(fit)[,1:n])` y dejo como ejercicio comparar el error cuadrático medio así obtenido con el de la estimación perezosa de más arriba.

Nota (por si alguien no se ha percatado): a lo de más arriba se lo llama por ahí filtro de Kalman. Solo que resuelto de una manera inhabitual.



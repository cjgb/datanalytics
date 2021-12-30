---
author: Carlos J. Gil Bellosta
date: 2019-05-31 09:11:07+00:00
draft: false
title: 'Modelos GARCH (o: no me cuentes tu vida, dame el pxxx modelo generativo y
  ya)'

url: /2019/05/31/modelos-garch-o-no-me-cuentes-tu-vida-dame-el-p-modelo-generativo-y-ya/
categories:
- estadística
- r
tags:
- garch
- modelos generativos
- r
- series temporales
- stan
---

Los modelos GARCH son otra de esas cosas de las que oyes hablar y como nunca se convierten en problemas de los _de carne en el asador_, preocupan poco y ocupan menos (más allá de que sabes que se trata de modelos similares a los de series temporales _de toda la vida_ donde la varianza varía de cierta forma a lo largo del tiempo).  Pero comienzas a leer cosas como [esta](https://ntguardian.wordpress.com/2019/01/28/problems-estimating-garch-parameters-r-part-2-rugarch/) y no te enteras de nada: solo hay letras y llamadas a funciones oscuras y oscurantistas.

En cambio, ves el [código (o seudocódigo) del modelo generativo](https://mc-stan.org/docs/2_18/stan-users-guide/modeling-temporal-heteroscedasticity.html) (de un cierto subtipo de modelo GARCH) y... y ya está. El modelo generativo, sin necesidad de palabras, prácticamente agota la ciencia de la cosa. Además, lo copipegas en Stan y tienes el ajuste.

Bonus:

{{< highlight R "linenos=true" >}}
a0 <- .1
a1 <- .2
a2 <- .5
mu <- 0
sigma0 <- 1

n <- 250

# valores iniciales
sigma <- rep(sigma0, n)
x <- rep(rnorm(1, mu, sigma), n)

for(i in 2:n){
  sigma[i] <- sqrt(a0 + a1 * x[i-1]^2 +
      a2 * sigma[i-1]^2)
  x[i] <- rnorm(1, mu, sigma[i])
}

par(mfrow=c(2,1))
plot(x, type = "l", main = "x",
    xlab = "", ylab = "")
plot(sigma, type = "l", main = "sigma",
    xlab = "", ylab = "")
{{< / highlight >}}


![](/wp-uploads/2019/05/garch.R.png#center)



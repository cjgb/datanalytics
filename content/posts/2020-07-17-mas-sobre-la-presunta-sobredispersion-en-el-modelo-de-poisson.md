---
author: Carlos J. Gil Bellosta
date: 2020-07-17 17:17:38+00:00
draft: false
title: Más sobre la presunta sobredispersión en el modelo de Poisson

url: /2020/07/17/mas-sobre-la-presunta-sobredispersion-en-el-modelo-de-poisson/
categories:
- estadística
tags:
- estadística
- poisson
- sobredispersión
- glm
---

_[Esta entrada abunda sobre [la de ayer](https://www.datanalytics.com/2020/07/16/no-tus-datos-no-tienen-sobredispersion-es-que-el-gato-de-nelder-se-ha-merendado-la-epsilon/) y sin la cual no se entiende.]_

Generemos unos datos, las `x`:

{{< highlight R "linenos=true" >}}
n <- 1000
sigma <- .5
x <- rep(-2:2, each = n)
x_real <- -1 + .5 * x + rnorm(length(x), 0, sigma)
{{< / highlight >}}

En el bloque anterior hemos creado una/la variable observada, `x`, el término lineal que operará en el modelo de Poisson, `-1 + .5 * x`, y el _real_, `-1 + .5 * x + rnorm(length(x), 0, sigma)`, que agrega al anterior el impacto de otras variables no tenidas en cuenta a través de un error normal al uso.

Generamos las `y`:

{{< highlight R "linenos=true" >}}
y <- sapply(x_real, function(lambda) rpois(1, exp(lambda)))
{{< / highlight >}}

Realidad, y según la teoría bajo la que cabe aplicar el modelo de Poisson, los vectores

{{< highlight R "linenos=true" >}}
tapply(y, x, var)
#        -2        -1         0         1         2
# 0.1750711 0.2701892 0.4400561 0.8555716 1.5842683
{{< / highlight >}}

y

{{< highlight R "linenos=true" >}}
exp(-1 + .5 * (-2:2))
# [1] 0.1353353 0.2231302 0.3678794 0.6065307 1.0000000
{{< / highlight >}}

deberían ser aproximadamente iguales. De hecho, casi lo son si forzamos $latex \sigma = 0$:

{{< highlight R "linenos=true" >}}
y <- sapply(-1 + .5 * x, function(lambda) rpois(1, exp(lambda)))
tapply(y, x, var)
exp(-1 + .5 * (-2:2))
{{< / highlight >}}

Si hacemos

{{< highlight R "linenos=true" >}}
datos <- data.frame(
    x = x,
    y = y
)

modelo_glm <- glm(y ~ x, data = datos, family = poisson)
summary(modelo_glm)
{{< / highlight >}}

Obtenemos

{{< highlight R "linenos=true" >}}
Call:
glm(formula = y ~ x, family = poisson, data = datos)

Deviance Residuals:
    Min       1Q   Median       3Q      Max
-1.4731  -0.9109  -0.5633   0.3742   4.4913

Coefficients:
            Estimate Std. Error z value Pr(>|z|)
(Intercept) -0.87974    0.02415  -36.44   <2e-16 ***
x            0.48065    0.01598   30.07   <2e-16 ***
---
Signif. codes:  0 ‘***’ 0.001 ‘**’ 0.01 ‘*’ 0.05 ‘.’ 0.1 ‘ ’ 1

(Dispersion parameter for poisson family taken to be 1)

    Null deviance: 6184.4  on 4999  degrees of freedom
Residual deviance: 5145.1  on 4998  degrees of freedom
AIC: 9051.2

Number of Fisher Scoring iterations: 6
{{< / highlight >}}

Mientras que si nos decantamos por el modelo quasi-Poisson,

{{< highlight R "linenos=true" >}}
modelo_quasi <- glm(y ~ x, data = datos, family = quasipoisson)
summary(modelo_quasi)
{{< / highlight >}}

obtenemos algo parecido,

{{< highlight R "linenos=true" >}}
Call:
glm(formula = y ~ x, family = quasipoisson, data = datos)

Deviance Residuals:
    Min       1Q   Median       3Q      Max
-1.4731  -0.9109  -0.5633   0.3742   4.4913

Coefficients:
            Estimate Std. Error t value Pr(>|t|)
(Intercept) -0.87974    0.02646  -33.24   <2e-16 ***
x            0.48065    0.01752   27.44   <2e-16 ***
---
Signif. codes:  0 ‘***’ 0.001 ‘**’ 0.01 ‘*’ 0.05 ‘.’ 0.1 ‘ ’ 1

(Dispersion parameter for quasipoisson family taken to be 1.201217)

    Null deviance: 6184.4  on 4999  degrees of freedom
Residual deviance: 5145.1  on 4998  degrees of freedom
AIC: NA

Number of Fisher Scoring iterations: 6
{{< / highlight >}}

con la salvedad de que el modelo _quasi_ nos advirte que existe una sobredispersión del 20%, i.e., que la varianza estimada de los datos es un 20% superior a la esperada por el modelo de Poisson.

De hecho,

{{< highlight R "linenos=true" >}}
tapply(y, x, var) / predict(modelo_glm, data.frame(x = -2:2), type = "response")
#        -2        -1         0         1         2
# 1.1426982 0.9928202 1.1523015 1.3737663 1.3469143
{{< / highlight >}}

que es un vector cuya media coincide prácticamente con el parámetro de dispersión, 1.2017. Pero es que con este planteamiento en particular, la sobredispersión ni siquiera es proporcional al valor de $latex \hat{\mu}$, como demuestra la siguiente simulación,

{{< highlight R "linenos=true" >}}
x <- runif(100000, -2, 5)

y <- exp(x + rnorm(length(x), 0, .2))
y <- sapply(y, function(lambda) rpois(1, lambda))

#plot(x, y)

rejilla_x <- seq(min(x), max(x), length.out = 100)

get_local_variance <- function(x, y, centro, d = .1){
    tmp <- y[abs(x - centro) < d]
    var(tmp) / exp(centro)
}

local_variance <- sapply(
    rejilla_x,
    function(centro) get_local_variance(x, y, centro))

plot(rejilla_x, local_variance, type = "l",
        xlab = "", ylab = "dispersión local",
        main = "dispersión local en función del\nvalor de la expresión lineal")
{{< / highlight >}}

que produce

![](/wp-uploads/2020/07/dispersion_local.png)

_[**Nota aclaratoria:** la gráfica anterior debería ser aproximadamente constante para que pudiésemos creernos el ajuste que la quasi-Poisson hace al modelo de Poisson en el caso en cuestión.]_

Y el próximo día trato de ajustar el modelo sin las restricciones que impone la tecnología de los setenta.
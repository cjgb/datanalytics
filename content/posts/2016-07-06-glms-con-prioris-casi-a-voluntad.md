---
author: Carlos J. Gil Bellosta
categories:
- estadística
- r
date: 2016-07-06 08:13:34+00:00
draft: false
lastmod: '2025-04-06T19:05:05.457305'
related:
- 2020-07-17-mas-sobre-la-presunta-sobredispersion-en-el-modelo-de-poisson.md
- 2020-06-29-sobremuestreando-x-y-no-y.md
- 2014-08-13-mis-procesos-puntuales-con-glm.md
- 2023-09-07-problema-modelos-bayesianos-identicabilidad.md
- 2012-02-01-la-frontera-bayesiana-en-problemas-de-clasificacion-simples.md
tags:
- arm
- estadística bayesiana
- r
title: GLMs con prioris (casi) a voluntad
url: /2016/07/06/glms-con-prioris-casi-a-voluntad/
---

Esto que cuento hoy puede ser muy útil: cómo mejorar los GLMs mediante la introducción de prioris (casi) a voluntad sobre los coeficientes. Usando el [paquete `arm` de R](https://cran.r-project.org/web/packages/arm/index.html), claro.

De momento y porque aún tengo sucios los datos sobre los que me gustaría aplicar el modelo, extraeré un ejemplo de la ayuda de la función principal del paquete, `bayesglm`.

Primero, preparo unos datos:

{{< highlight R >}}
n <- 100
x1 <- rnorm (n)
x2 <- rbinom (n, 1, .5)
b0 <- 1
b1 <- 1.5
b2 <- 2
y <- rbinom (n, 1, invlogit(b0+b1*x1+b2*x2))
{{< / highlight >}}

Comenzamos con un `glm` de toda la vida.

{{< highlight R >}}
M1 <- glm (y ~ x1 + x2, family=binomial(link="logit"))
display (M1)
# glm(formula = y ~ x1 + x2, family = binomial(link = "logit"))
# coef.est coef.se
# (Intercept) 0.79     0.36
# x1          1.23     0.33
# x2          2.04     0.64
# ---
#   n = 100, k = 3
# residual deviance = 77.5, null deviance = 107.9 (difference = 30.4)
{{< / highlight >}}

El resultado es el mismo que usando `bayesglm` con una priori plana y totalmente ininiformativa:

{{< highlight R >}}
M2 <- bayesglm (y ~ x1 + x2, family=binomial(link="logit"),
                prior.scale=Inf, prior.df=Inf)
display (M2)
# bayesglm(formula = y ~ x1 + x2, family = binomial(link = "logit"),
#          prior.scale = Inf, prior.df = Inf)
# coef.est coef.se
# (Intercept) 0.79     0.36
# x1          1.23     0.33
# x2          2.03     0.64
# ---
#   n = 100, k = 3
# residual deviance = 77.5, null deviance = 107.9 (difference = 30.4)
{{< / highlight >}}

La cosa cambia cuando usamos la distribución a priori por defecto de `bayesglm`,

{{< highlight R >}}
M3 <- bayesglm (y ~ x1 + x2, family=binomial(link="logit"))
display (M3)
# bayesglm(formula = y ~ x1 + x2, family = binomial(link = "logit"))
# coef.est coef.se
# (Intercept) 0.80     0.35
# x1          1.12     0.30
# x2          1.84     0.59
# ---
#   n = 100, k = 3
# residual deviance = 77.7, null deviance = 107.9 (difference = 30.2)
{{< / highlight >}}

que es una Cauchy con _escala_ 2.5, i.e.,

{{< highlight R >}}
M4 <- bayesglm (y ~ x1 + x2, family=binomial(link="logit"),
                prior.scale=2.5, prior.df=1)
display (M4)
# bayesglm(formula = y ~ x1 + x2, family = binomial(link = "logit"),
#          prior.scale = 2.5, prior.df = 1)
# coef.est coef.se
# (Intercept) 0.80     0.35
# x1          1.12     0.30
# x2          1.84     0.59
# ---
#   n = 100, k = 3
# residual deviance = 77.7, null deviance = 107.9 (difference = 30.2)
{{< / highlight >}}

Nótese que la priori es una t, que _degenera_ en una normal cuando los grados de libertad son muchos, como en

{{< highlight R >}}
M6 <- bayesglm (y ~ x1 + x2, family=binomial(link="logit"),
                prior.scale=2.5, prior.df=Inf)
{{< / highlight >}}

Además de la escala y, en cierta medida, la anchura de las colas, también se puede indicar el _centro_ de las prioris (con `prior.mean`), tanto de manera global como individualmente para cada una de ellas:

{{< highlight R >}}
M9 <- bayesglm(y ~ x1 + x2, family=binomial(link="logit"),
                prior.scale=2.5, prior.df=7,
                prior.mean = c(b1, b2))
display(M9)
# bayesglm(formula = y ~ x1 + x2, family = binomial(link = "logit"),
#          prior.mean = c(b1, b2), prior.scale = 2.5, prior.df = 7)
# coef.est coef.se
# (Intercept) 0.79     0.35
# x1          1.26     0.32
# x2          2.04     0.62
# ---
#   n = 100, k = 3
# residual deviance = 77.5, null deviance = 107.9 (difference = 30.4)
{{< / highlight >}}

¿No es hoy el cielo más azul?
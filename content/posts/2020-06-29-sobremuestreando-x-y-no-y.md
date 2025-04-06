---
author: Carlos J. Gil Bellosta
categories:
- ciencia de datos
- estadística
- r
date: 2020-06-29 09:13:00+00:00
draft: false
lastmod: '2025-04-06T18:50:38.241861'
related:
- 2014-11-17-los-coeficientes-de-la-regresion-logistica-con-sobremuestreo.md
- 2020-07-17-mas-sobre-la-presunta-sobredispersion-en-el-modelo-de-poisson.md
- 2015-01-27-grandes-datos-maquinas-pequenas-y-regresiones-logisticas-con-variables-categoricas.md
- 2020-07-22-aun-mas-sobre-la-presunta-sobredispersion-en-modelos-de-poisson.md
- 2022-03-03-error-sesgo-modelos-lineales.md
tags:
- ciencia de datos
- estadística
- r
- regresión logística
- sobremuestreo
title: Sobremuestreando x (y no y)
url: /2020/06/29/sobremuestreando-x-y-no-y/
---

Construyo unos datos (artificiales, para conocer _la verdad_):

{{< highlight R >}}
n <- 10000
x1 <- rnorm(n)
x2 <- rnorm(n)
probs <- -2 + x1 + x2
probs <- 1 / (1 + exp(-probs))
y <- sapply(probs, function(p) rbinom(1, 1, p))
dat <- data.frame(y = y, x1 = x1, x2 = x2)
{{< / highlight >}}

Construyo un modelo de clasificación (logístico, que hoy no hace falta _inventar_, aunque podría ser cualquier otro):

{{< highlight R >}}
summary(glm(y ~ x1 + x2, data = dat, family = binomial))
#Call:
#glm(formula = y ~ x1 + x2, family = binomial, data = dat)
#
#Deviance Residuals:
#    Min       1Q   Median       3Q      Max
#-2.2547  -0.5967  -0.3632  -0.1753   3.3528
#
#Coefficients:
#            Estimate Std. Error z value Pr(>|z|)
#(Intercept) -2.05753    0.03812  -53.97   <2e-16 ***
#x1           1.01918    0.03386   30.10   <2e-16 ***
#x2           1.00629    0.03405   29.55   <2e-16 ***
#---
#Signif. codes:  0 ‘***’ 0.001 ‘**’ 0.01 ‘*’ 0.05 ‘.’ 0.1 ‘ ’ 1
#
#(Dispersion parameter for binomial family taken to be 1)
#
#    Null deviance: 9485.2  on 9999  degrees of freedom
#Residual deviance: 7373.4  on 9997  degrees of freedom
#AIC: 7379.4
#
#Number of Fisher Scoring iterations: 5
{{< / highlight >}}

Correcto.

Sobremuestreo. Por construcción, hay más casos 1 que 0. Así que igualo las clases y reajusto:

{{< highlight R >}}
tmp <- split(dat, dat$y)
tmp[["0"]] <- tmp[["0"]][sample(1:nrow(tmp[["0"]]), nrow(tmp[["1"]])),]
dat_oversampling <- do.call(rbind, tmp)
summary(glm(y ~ x1 + x2, data = dat_oversampling, family = binomial))
#Call:
#glm(formula = y ~ x1 + x2, family = binomial, data = dat_oversampling)
#
#Deviance Residuals:
#     Min        1Q    Median        3Q       Max
#-2.82905  -0.86448   0.03408   0.84398   2.87510
#
#Coefficients:
#            Estimate Std. Error z value Pr(>|z|)
#(Intercept) -0.54650    0.04441  -12.31   <2e-16 ***
#x1           1.02262    0.04613   22.17   <2e-16 ***
#x2           1.00801    0.04597   21.93   <2e-16 ***
#---
#Signif. codes:  0 ‘***’ 0.001 ‘**’ 0.01 ‘*’ 0.05 ‘.’ 0.1 ‘ ’ 1
#
#(Dispersion parameter for binomial family taken to be 1)
#
#    Null deviance: 5043.3  on 3637  degrees of freedom
#Residual deviance: 3801.0  on 3635  degrees of freedom
#AIC: 3807
#
#Number of Fisher Scoring iterations: 4:
{{< / highlight >}}

Aparece un sesgo. Estamos incrementando la probabilidad de 1. En la regresión logística eso se manifiesta (únicamente, de hecho), en el término independiente. Hay mil maneras de reajustar ese tipo de modelos, pero no voy a entrar en eso hoy.

Lo que ocurre es que hay otra manera de muestrear: usando una variable muy correlacionada con `y` pero que no sea `y`. P.e., una variable muy predictiva en el modelo. Existen muchas variantes de la cosa, pero aquí utilizaré la variante más simple conceptualmente:

{{< highlight R >}}
dat$split <- dat$x1 > .5
tmp <- split(dat, dat$split)
tmp[["FALSE"]] <- tmp[["FALSE"]][sample(1:nrow(tmp[["FALSE"]]), nrow(tmp[["TRUE"]])),]
dat_oversampling <- do.call(rbind, tmp)
{{< / highlight >}}

Así las cosas,

{{< highlight R >}}
summary(glm(y ~ x1 + x2, data = dat_oversampling, family = binomial))
#Call:
#glm(formula = y ~ x1 + x2, family = binomial, data = dat_oversampling)
#
#Deviance Residuals:
#    Min       1Q   Median       3Q      Max
#-2.2712  -0.6609  -0.3946  -0.1306   3.1221
#
#Coefficients:
#            Estimate Std. Error z value Pr(>|z|)
#(Intercept) -2.04067    0.05100  -40.01   <2e-16 ***
#x1           1.01137    0.04175   24.22   <2e-16 ***
#x2           1.03267    0.04078   25.32   <2e-16 ***
#---
#Signif. codes:  0 ‘***’ 0.001 ‘**’ 0.01 ‘*’ 0.05 ‘.’ 0.1 ‘ ’ 1
#
#(Dispersion parameter for binomial family taken to be 1)
#
#    Null deviance: 6635.7  on 6175  degrees of freedom
#Residual deviance: 5140.9  on 6173  degrees of freedom
#AIC: 5146.9
#
#Number of Fisher Scoring iterations: 5
{{< / highlight >}}

¡Sin sesgo!

**Nota:** obviamente, todo lo anterior aplica si realmente tienes que sobremuestrear.

**Otra nota:** aquí he tratado el asunto del sesgo y únicamente el sesgo. Nada se ha dicho sobre lo que le puede ocurrir a la varianza por usar menos observaciones.
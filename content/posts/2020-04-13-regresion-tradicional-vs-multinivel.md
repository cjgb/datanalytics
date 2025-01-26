---
author: Carlos J. Gil Bellosta
date: 2020-04-13 09:13:00+00:00
draft: false
title: Regresión tradicional vs multinivel

url: /2020/04/13/regresion-tradicional-vs-multinivel/
categories:
- estadística
- r
tags:
- estadística bayesiana
- lm
- lme4
- modelos mixtos
- r
---

Ayer se leía en Twitter que

{{< x user="joscani" id="1249017607199621123" >}}

Cabe preguntarse qué pasa si se analizan los mismos datos usando ambas técnicas. Obviamente, hay muchos tipos de datos y supongo que los resultados variarán según qué variante se utilice. Aquí voy a centrarme en unos donde hay medidas repetidas de un factor aleatorio. También voy a situarme en un contexto académico, en el que interesan más las estimaciones de los efectos fijos, que en uno más próximo a mi mundo, la consultoría, donde son más relevantes las estimaciones regularizadas de los efectos aleatorios.

Los datos son:

{{< highlight R >}}
library(plyr)
library(lme4)

set.seed(333)

sd_aleatorio <- 1
sd_error <- 1
n_niveles <- 20
n_reps <- 6
intercepto <- .5

efecto_fijo <- 1.5
tmp <- sample(rep(0:1, each = n_niveles * n_reps /2))

dat_fijo <- data.frame(
    fijo = factor(tmp),
    efecto_fijo = tmp * efecto_fijo
)

dat_aleatorio <- ldply(1:n_niveles, function(nivel){
    data.frame(
        aleatorio = paste0("random_", nivel),
        efecto_aleatorio = rep(rnorm(1, 0, sd_aleatorio), n_reps)
    )
})

dat <- cbind(dat_fijo, dat_aleatorio)
dat$y <- intercepto + dat$efecto_fijo + dat$efecto_aleatorio + rnorm(nrow(dat), 0, sd_error)
{{< / highlight >}}

Y las regresiones tradicional y multinivel producen

{{< highlight R >}}
modelo_lm <- lm(y ~ fijo + aleatorio, data = dat)
summary(modelo_lm)

# Call:
#     lm(formula = y ~ fijo + aleatorio, data = dat)
#
# Residuals:
#     Min       1Q   Median       3Q      Max
# -2.54116 -0.64561 -0.01708  0.58706  2.22806
#
# Coefficients:
# Estimate Std. Error t value Pr(>|t|)
# (Intercept)         1.89664    0.39014   4.861 4.38e-06 ***
# fijo1               1.24459    0.18802   6.619 1.87e-09 ***
# aleatoriorandom_2  -0.62928    0.55352  -1.137  0.25834
# aleatoriorandom_3  -0.60991    0.55794  -1.093  0.27699
# aleatoriorandom_4  -0.44177    0.55794  -0.792  0.43038
# aleatoriorandom_5  -0.08816    0.55352  -0.159  0.87378
# aleatoriorandom_6  -2.67117    0.55794  -4.788 5.92e-06 ***
# aleatoriorandom_7  -2.74010    0.55086  -4.974 2.76e-06 ***
# aleatoriorandom_8  -0.73759    0.55352  -1.333  0.18575
# aleatoriorandom_9  -0.23444    0.55352  -0.424  0.67282
# aleatoriorandom_10 -1.33424    0.55086  -2.422  0.01725 *
# aleatoriorandom_11 -0.13610    0.55794  -0.244  0.80778
# aleatoriorandom_12 -1.32126    0.55794  -2.368  0.01982 *
# aleatoriorandom_13 -2.54023    0.55086  -4.611 1.20e-05 ***
# aleatoriorandom_14 -0.74932    0.55086  -1.360  0.17683
# aleatoriorandom_15 -1.02631    0.55352  -1.854  0.06670 .
# aleatoriorandom_16 -0.34843    0.54996  -0.634  0.52783
# aleatoriorandom_17  0.87490    0.55086   1.588  0.11542
# aleatoriorandom_18 -1.56946    0.55352  -2.835  0.00555 **
# aleatoriorandom_19 -1.45809    0.56407  -2.585  0.01120 *
# aleatoriorandom_20 -1.30429    0.56407  -2.312  0.02283 *
# ---
# Signif. codes:  0 ‘***’ 0.001 ‘**’ 0.01 ‘*’ 0.05 ‘.’ 0.1 ‘ ’ 1
#
# Residual standard error: 0.9526 on 99 degrees of freedom
# Multiple R-squared:  0.6069,	Adjusted R-squared:  0.5275
# F-statistic: 7.642 on 20 and 99 DF,  p-value: 1.237e-12
{{< / highlight >}}

y

{{< highlight R >}}
modelo_lmer <- lmer(y ~ fijo + (1 | aleatorio), data = dat)
summary(modelo_lmer)
# Linear mixed model fit by REML ['lmerMod']
# Formula: y ~ fijo + (1 | aleatorio)
# Data: dat
#
# REML criterion at convergence: 365
#
# Scaled residuals:
#     Min       1Q   Median       3Q      Max
# -2.99682 -0.68842  0.00075  0.57968  2.38530
#
# Random effects:
#  Groups    Name        Variance Std.Dev.
#  aleatorio (Intercept) 0.7344   0.8570
#  Residual              0.9073   0.9525
# Number of obs: 120, groups:  aleatorio, 20
#
# Fixed effects:
#             Estimate Std. Error t value
# (Intercept)   0.9548     0.2299   4.152
# fijo1         1.2218     0.1854   6.592
#
# Correlation of Fixed Effects:
#     (Intr)
# fijo1 -0.403
{{< / highlight >}}

respectivamente. La estimación del efecto fijo es similar en ambos casos, pero hay una diferencia notable en el ajuste del término independiente. Veamos qué sucede si repetimos el proceso anterior muchas veces:

{{< highlight R >}}
foo <- function(){
tmp <- sample(rep(0:1, each = n_niveles * n_reps /2))

dat_fijo <- data.frame(
    fijo = factor(tmp),
    efecto_fijo = tmp * efecto_fijo
)


dat_aleatorio <- ldply(1:n_niveles, function(nivel){
    data.frame(
        aleatorio = paste0("random_", nivel),
        efecto_aleatorio = rep(rnorm(1, 0, sd_aleatorio), n_reps)
    )
})

dat <- cbind(dat_fijo, dat_aleatorio)
dat$y <- intercepto + dat$efecto_fijo + dat$efecto_aleatorio + rnorm(nrow(dat), 0, sd_error)

modelo_lm <- lm(y ~ fijo + aleatorio, data = dat)

modelo_lmer <- lmer(y ~ fijo + (1 | aleatorio), data = dat)

c(fixef(modelo_lmer), coefficients(modelo_lm)[1:2])
}

res <- replicate(1000, foo())
res <- as.data.frame(t(res))
{{< / highlight >}}


Las estimaciones de los efectos fijos son similares:

![](/wp-uploads/2020/04/efecto_fijo_lmer_lm.png#center)

pero hay diferencias notables en la del término independiente:

![](/wp-uploads/2020/04/termino_independiente_lmer_lm.png#center)

Cosa que, bien pensada, _a posteriori_, tiene su lógica, creo...
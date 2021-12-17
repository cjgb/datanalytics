---
author: Carlos J. Gil Bellosta
date: 2017-10-16 08:13:41+00:00
draft: false
title: Modelos no lineales directos e inversos

url: /2017/10/16/modelos-no-lineales-directos-e-inversos/
categories:
- estadística
- r
tags:
- estadística
- modelos
- r
---

Las malandanzas de [Circiter](http://www.circiter.es) la han conducido al siguiente entuerto: estimar $latex \alpha$ donde



$latex y = f_\alpha(x) + \epsilon$



y $latex f_\alpha$ es una función no lineal horrible. Sin embargo, $latex f^{-1}_\alpha$ es mucho más manejable y podría plantearse el modelo



$latex x = f^{-1}_\alpha(y) + \epsilon$



(donde este nuevo $latex \epsilon$ no coincide con el anterior: piénsese en el [método delta](https://www.datanalytics.com/2017/05/24/aquellos-que-ignoran-la-estadistica-etcetera/) y léase la nota final).

Un ejemplo. Que arranca con unos datos autoexplicativos:




    n <- 100

    a <- 1
    b <- -1/2
    sigma <- 0.1

    x <- runif(n, -1, 1)
    y <- exp(a * x + b) + rnorm(n, 0, sigma)




El modelo _directo_ da:




    mod_directo <- nls(y ~ exp(a * x + b),
                       start = list(a = 0.1, b = 0.1))
    summary(mod_directo)

    # Formula: y ~ exp(a * x + b)
    #
    # Parameters:
    #   Estimate Std. Error t value Pr(>|t|)
    # a  1.04285    0.02814   37.05   <2e-16 ***
    # b -0.52418    0.01971  -26.60   <2e-16 ***
    # ---
    # Signif. codes:  0 ‘***’ 0.001 ‘**’ 0.01 ‘*’ 0.05 ‘.’ 0.1 ‘ ’ 1
    #
    # Residual standard error: 0.09199 on 98 degrees of freedom
    #
    # Number of iterations to convergence: 5
    # Achieved convergence tolerance: 1.816e-07




Y el _inverso_,




    mod_inverso <- nls(x ~ (log(y) - b) / a, start = list(a = 0.1, b = 0.1))
    summary(mod_inverso)

    # Formula: x ~ (log(y) - b)/a
    #
    # Parameters:
    #   Estimate Std. Error t value Pr(>|t|)
    # a  1.20718    0.03900   30.95   <2e-16 ***
    # b -0.56361    0.02187  -25.77   <2e-16 ***
    # ---
    # Signif. codes:  0 ‘***’ 0.001 ‘**’ 0.01 ‘*’ 0.05 ‘.’ 0.1 ‘ ’ 1
    #
    # Residual standard error: 0.1792 on 98 degrees of freedom
    #
    # Number of iterations to convergence: 8
    # Achieved convergence tolerance: 1.185e-09




_Pas mal!_

**Nota:** No me concedo el tiempo de pintar la geometría de la cosa, pero es un buen ejercicio imaginársela (y ver qué representan los errores de ambos modelos).

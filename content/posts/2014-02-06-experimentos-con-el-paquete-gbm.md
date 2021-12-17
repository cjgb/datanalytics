---
author: Carlos J. Gil Bellosta
date: 2014-02-06 08:07:56+00:00
draft: false
title: Experimentos con el paquete gbm

url: /2014/02/06/experimentos-con-el-paquete-gbm/
categories:
- ciencia de datos
- estadística
tags:
- gbm
- glm
- poisson
- stepwise
---

No conocía el [paquete `gbm`](http://cran.r-project.org/web/packages/gbm/index.html). Pero como ahora ando rodeado de _data scientists_ que no son estadísticos...

Bueno, la cuestión es que había que ajustar un modelo para el que yo habría hecho algo parecido a



    dat <- <a href="http://inside-r.org/r-doc/utils/read.csv">read.csv("http://www.ats.ucla.edu/stat/data/poisson_sim.csv")
    summary(m.glm <- <a href="http://inside-r.org/r-doc/stats/glm">glm(num_awards ~ prog + math, <a href="http://inside-r.org/r-doc/stats/family">family = "poisson", data = dat))
    # Call:
    #   glm(formula = num_awards ~ prog + math, family = "poisson", data = dat)
    #
    # Deviance Residuals:
    #   Min       1Q   Median       3Q      Max
    # -2.1840  -0.9003  -0.5891   0.3948   2.9539
    #
    # Coefficients:
    #   Estimate Std. Error z value Pr(>|z|)
    # (Intercept) -5.578057   0.676823  -8.242   <2e-16 ***
    #   prog         0.123273   0.163261   0.755     0.45
    # math         0.086121   0.009586   8.984   <2e-16 ***
    #   ---
    #   Signif. codes:  0 ‘***’ 0.001 ‘**’ 0.01 ‘*’ 0.05 ‘.’ 0.1 ‘ ’ 1
    #
    # (Dispersion parameter for poisson family taken to be 1)
    #
    # Null deviance: 287.67  on 199  degrees of freedom
    # Residual deviance: 203.45  on 197  degrees of freedom
    # AIC: 385.51
    #
    # Number of Fisher Scoring iterations: 6



como en [esta página](http://www.ats.ucla.edu/stat/r/dae/poissonreg.htm).

La alternativa con el paquete `gbm` es esta:



    library(<a href="http://inside-r.org/packages/cran/gbm">gbm)
    summary(m.gbm <- <a href="http://inside-r.org/packages/cran/gbm">gbm(num_awards ~ prog + math, distribution = "poisson", data = dat))
    # var rel.inf
    # math math     100
    # prog prog       0

    m.gbm
    # gbm(formula = num_awards ~ prog + math, distribution = "poisson",
    #     data = dat)
    # A gradient boosted model with poisson loss function.
    # 100 iterations were performed.
    # There were 2 predictors of which 1 had non-zero influence.



El resultado es bastante sorprendente. Al menos, a mí me sorprende. Así que voy a tratar de invertir un tiempo estos días tratando de entender:




	  * Cómo funciona `gbm`
	  * Si la selección de variables que parece que realiza internamente es útil (véase [esto](http://www.datanalytics.com/2014/01/28/algunos-problemas-de-la-regresion-paso-a-paso-stepwise/))
	  * Y, sobre todo, por qué demonios `glm` y `gbm` no se ponen de acuerdo en cuál es la variable menos relevante en el modelo.


Mientras tanto, si algún lector tiene alguna pista sobre la respuesta a alguna de las preguntas anteriores...



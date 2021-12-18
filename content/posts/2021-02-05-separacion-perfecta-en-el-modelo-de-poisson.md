---
author: Carlos J. Gil Bellosta
date: 2021-02-05 09:13:00+00:00
draft: false
title: Separación perfecta en el modelo de Poisson

url: /2021/02/05/separacion-perfecta-en-el-modelo-de-poisson/
categories:
- estadística
- r
tags:
- poisson
- separación
- zeileis
---

El asunto de la separación perfecta en el modelo logístico es [sobradamente conocido](https://caminosaleatorios.wordpress.com/2017/11/29/regresion-logistica-y-datos-con-grupos-linealmente-separables/). Solo quiero añadir al respecto dos cosas que no se suelen decir:

* Es un dolor que solo duele a los frecuentistas que  no usan regularización (y van quedando cada vez menos de esos).
* Que no es malo sino bueno: ¿qué cosa mejor que tus datos puedan responder categóricamente las preguntas que les planteas (supuesto, claro, está, un N suficientemente grande).

Lo que es menos conocido es que el problema de la separación perfecta también puede afectar a la regresión de Poisson.

Voy a ilustrarlo con el segundo ejemplo más sencillo que se me ocurre. Supongamos que

$$Y \sim \text{Pois}(X)$$

donde $latex X$ es una variable aleatoria que toma los valores $latex a$ y $latex b$. Supongamos que tenemos una muestra de tamaño $latex 2N$ donde a cada nivel de $latex X$ le corresponden $latex N$ casos. Los estimadores por máxima verosimilitud de los coeficientes correspondientes a esos valores son $latex \log n_a /N$ y $latex \log n_b /N$ respectivamente.

Pero, ¿qué pasa si $latex n_a = 0$? El estimador es $latex -\infty$; aunque, en realidad, acabo de ver que R se come la tostada:

{{< highlight R "linenos=true" >}}
set.seed(1)
N <- 100
x <- rep(c("a", "b"), each = N)
y <- c(rep(0, N), rpois(N, 1))
modelo <- glm(y ~ -1 + x, family = poisson)
summary(modelo)
# Call:
#   glm(formula = y ~ -1 + x, family = poisson)
#
# Deviance Residuals:
#   Min        1Q    Median        3Q       Max
# -1.42127  -0.00997  -0.00006  -0.00006   2.24293
#
# Coefficients:
#   Estimate Std. Error z value Pr(>|z|)
# xa  -20.30259 1554.18637  -0.013     0.99
# xb    0.00995    0.09950   0.100     0.92
#
# (Dispersion parameter for poisson family taken to be 1)
#
# Null deviance: 292.635  on 200  degrees of freedom
# Residual deviance:  92.625  on 198  degrees of freedom
# AIC: 252.98
#
# Number of Fisher Scoring iterations: 18
{{< / highlight >}}

El coeficiente `xb` es, efectivamente

{{< highlight R "linenos=true" >}}
log(sum(y) / N)
# [1] 0.009950331
{{< / highlight >}}

aunque `glm` nos engaña y da por convergida una regresión que no lo está. De todos modos, el coeficiente `xa` tiene un valor de -20 y un error estándar de 1554, nada menos, lo que debería hacer saltar alarmas donde hubiere luces.

Para saber más, y para que quede constancia de de dónde he sacado todo lo anterior, _[Bias Reduction as a Remedy to the Consequences of Infinite Estimates in Poisson and Tobit Regression](https://arxiv.org/abs/2101.07141)_ del, entre otros, genial y nunca suficientemente apreciado A. Zeileis.

**Coda:** Apenas acabo lo anterior, me doy cuenta de que [ya había hablado del tema](https://www.datanalytics.com/2018/04/11/modelos-con-inflacion-de-ceros-y-separacion-perfecta/) de pasada hace un par de años largos.




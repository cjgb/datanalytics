---
author: Carlos J. Gil Bellosta
date: 2022-03-08
title: Estadística en las ciencias blandas
url: /2022/03/08/estadistica-ciencias-blandas/
draft: true
categories:
- estadística
tags:
- ciencia
- mala ciencia
- modelos mixtos
- r
---

Voy a comenzar con una simulación bastante inofensiva:

{{< highlight R >}}
set.seed(1)
n <- 10000
x <- runif(n)
error <- rnorm(n, 0, .1)
indep <- -1
b_0 <- .5
y_0 <- indep + x * b_0 + error
modelo_0 <- lm(y_0 ~ x)
summary(modelo_0)
{{< / highlight >}}

que da como resultado

{{< highlight text "linenos=false" >}}
Call:
lm(formula = y_0 ~ x)

Residuals:
     Min       1Q   Median       3Q      Max
-0.42844 -0.06697 -0.00133  0.06640  0.37449

Coefficients:
             Estimate Std. Error t value Pr(>|t|)
(Intercept) -1.001951   0.001967  -509.5   <2e-16 ***
x            0.500706   0.003398   147.3   <2e-16 ***
---
Signif. codes:  0 ‘***’ 0.001 ‘**’ 0.01 ‘*’ 0.05 ‘.’ 0.1 ‘ ’ 1

Residual standard error: 0.0989 on 9998 degrees of freedom
Multiple R-squared:  0.6847,	Adjusted R-squared:  0.6846
F-statistic: 2.171e+04 on 1 and 9998 DF,  p-value: < 2.2e-16
{{< / highlight >}}

Me he limitado a construir el típico conjunto de datos que cumple las condiciones de libro para poder aplicar la regresión lineal y he reconstruido los parámetros originales a través del resultado de esta: el término independiente (-1), la pendiente (.5), la desviación estándar del error (.1), etc.

Este es el típico modelo de las ciencias _duras_: los datos se refieren a entidades homogéneas (moléculas, bolas de billar, concentraciones molares, etc.) y el efecto es único y común para todas ellas.

El planteamiento de partida para ciencias más blanditas vendría a ser:

{{< highlight R >}}
beta_a <- 3
beta_b <- 3
b_1 <- rbeta(n, beta_a, beta_b)
y_1 <- indep + x * b_1 + error
{{< / highlight >}}

es decir, existe un efecto cuyo valor promedio es .5 pero que no es siempre igual a ese valor ---porque depende del sujeto y estos son heterogéneos--- sino que _lo ronda_. Sin embargo, los asalariados de esas disciplinas siguen aplicando sistemáticamente los mismos modelos ---más sobre esto, debajo; que nadie se me enfade aún---, es decir,

{{< highlight R >}}
modelo_1 <- lm(y_1 ~ x)
{{< / highlight >}}

para obtener

{{< highlight text "linenos=false" >}}
Call:
lm(formula = y_1 ~ x)

Residuals:
     Min       1Q   Median       3Q      Max
-0.57436 -0.09249 -0.00105  0.09450  0.61423

Coefficients:
             Estimate Std. Error t value Pr(>|t|)
(Intercept) -0.999687   0.002940 -340.02   <2e-16 ***
x            0.498481   0.005081   98.11   <2e-16 ***
---
Signif. codes:  0 ‘***’ 0.001 ‘**’ 0.01 ‘*’ 0.05 ‘.’ 0.1 ‘ ’ 1

Residual standard error: 0.1479 on 9998 degrees of freedom
Multiple R-squared:  0.4905,	Adjusted R-squared:  0.4905
F-statistic:  9626 on 1 and 9998 DF,  p-value: < 2.2e-16
{{< / highlight >}}

donde todo está mal:

* El coeficiente del _efecto_ da la impresión de estar fijo en el valor .5, cuando sabemos que es falso.
* La incertidumbre obviada sobre el coeficiente anterior aflora en el error del modelo en forma de sobreestimación: debería ser .1, pero da .15.
* La R² se desploma (¿resulta familiar?)

**Comentarios:**

Alguno me tachará de injusto porque en su ciencia blandengue particular, en un semestre de cierta optativa del doctorado, dizque se nombran los modelos mixtos (jerárquicos, o como quiera que se den en llamar en la disciplina en cuestión) de pasada, que son precisamente los que aplicarían en este caso. Replicaría que entre los artículos que veo glosados (y sistemáticamente ensalzados) en los blogs que sigo (¿seguía?) de ciencias blandengues, jamás de los jamases veo aplicados esas técnicas. Más bien, las del `modelo_1` anterior, tal vez controlando aquí o allá por alguna variable y poco más. De la variabilidad del efecto, _niente_. Diríase tema tabú.

Cuando dicen "si aplicamos tratamiento X a una población A se obtiene una respuesta Y" hay que pensar siempre que la respuesta de los miembros de la población A no es homogénea y que tal vez, sí, globalmente, en promedio sea Y; pero de ahí a poder...



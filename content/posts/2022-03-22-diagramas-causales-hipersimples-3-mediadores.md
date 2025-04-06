---
author: Carlos J. Gil Bellosta
categories:
- estadística
- causalidad
date: 2022-03-22
lastmod: '2025-04-06T19:04:46.805079'
related:
- 2022-03-10-diagramas-causales-hipersimples-1-errores.md
- 2022-03-18-diagramas-causales-hipersimples-2-control.md
- 2022-03-08-estadistica-ciencias-blandas.md
- 2022-03-03-error-sesgo-modelos-lineales.md
- 2020-04-13-regresion-tradicional-vs-multinivel.md
tags:
- causalidad
- redes bayesianas
- regresión lineal
- error
- sesgo
- r
title: 'Diagramas causales hiperbásicos (III): mediadores'
url: /2022/03/22/diagramas-causales-hiperbasicos-03-mediadores/
---

Esta es la tercera entrada de la serie sobre diagramas causales hiperbásicos, que, como la segunda, no se entenderá sin ---y remito a--- la
[primera](/2022/03/10/diagramas-causales-hiperbasicos-01-variables-omitidas/)
que define el contexto, objetivo e hipótesis subyacentes de la serie completa. Además, sería conveniente haber leído
[la segunda](/2022/03/18/diagramas-causales-hiperbasicos-02-controlar-variable/).

Esta vez, el diagrama causal es una pequeña modificación del de la anterior:

![](/wp-uploads/2022/03/red_causal_hiperbasica_02.png#center)

Ahora, la variable $X$ influye sobre $Y$ por dos vías: directamente y a través de $Z$. Variables como $Z$, conocidas como _mediadores_ son muy habituales. Uno podría pensar que, realmente, ninguna $X$ actúa _directamente_ sobre ninguna $Y$ sino a través de una serie de mecanismos que involucran a variables intermedias $Z_1, \dots, Z_n$ que constituyen una cadena causal. Puede incluso que se _desencadenen_ varias de estas cadenas causales que transmitan a $Y$ la potencia de $X$. Que hablemos de la influencia causal de $X$ sobre $Y$ es casi siempre una hipersimplificación de la realidad.

Como en las entradas anteriores de la serie, voy a volver a simular datos para comparar las regresiones `Y ~ X` e `Y ~ X + Z`:

{{< highlight R >}}
x <- rnorm(n)
z <- .8 * x + rnorm(n)
y <- .5 * x + .2 * z + rnorm(n, 0, .1)
{{< / highlight >}}

Incluyendo `Z`, es decir, ajustando `lm(Y ~ X + Z)`, se obtiene

{{< highlight text "linenos=false" >}}
Coefficients:
             Estimate Std. Error t value Pr(>|t|)
(Intercept) -0.002671   0.003127  -0.854    0.393
x            0.503470   0.004018 125.305   <2e-16 ***
z            0.195947   0.003145  62.302   <2e-16 ***

Residual standard error: 0.09877 on 997 degrees of freedom
Multiple R-squared:  0.9811,	Adjusted R-squared:  0.9811
F-statistic: 2.588e+04 on 2 and 997 DF,  p-value: < 2.2e-16
{{< / highlight >}}

que identifica correctamente los coeficientes del modelo generativo. Sin embargo, si se omite `Z`, i.e., ajustando `lm(Y ~ X)`, se obtiene

{{< highlight text "linenos=false" >}}
Coefficients:
             Estimate Std. Error t value Pr(>|t|)
(Intercept) -0.003313   0.006913  -0.479    0.632
x            0.666681   0.006736  98.976   <2e-16 ***

Residual standard error: 0.2184 on 998 degrees of freedom
Multiple R-squared:  0.9075,	Adjusted R-squared:  0.9075
F-statistic:  9796 on 1 and 998 DF,  p-value: < 2.2e-16
{{< / highlight >}}

donde el coeficiente de `X` se ha estimado como $.66$. Podría parecer un sesgo, pero no lo es: $.66$ es el efecto total de `X` sobre `Y`. Es decir, la suma del efecto directo, $.5$ y el efecto indirecto, $0.2 \times 0.8$ a través de `Z`.

Hasta aquí todo correcto.

Sin embargo, la causalidad (y el gráfico _causal_ que aparece en la entrada) son conceptos metaestadísticos. Al fin y al cabo, el conjunto de datos `(X, Y, Z)` creado no deja de ser una variable normal tridimiensional con media cero y matriz de covarianzas

{{< highlight R >}}
cov(cbind(x, z, y))
#           x         z         y
# x 1.0560331 0.8651563 0.7009087
# z 0.8651563 1.7489359 0.7780376
# y 0.7009087 0.7780376 0.5149983
{{< / highlight >}}

Por tanto, alguien podría haber argumentado que el _verdadero_ modelo generativo es

{{< highlight R >}}
z2 <- rnorm(n, 0, sd(z))
m  <- lm(x ~ z)
x2 <- coef(m)[2] * z2 + rnorm(n, 0, sd(residuals(m)))
y2 <- .5 * x2 + .2 * z2 + rnorm(n, 0, .1)
{{< / highlight >}}

que también da lugar a una variable normal tridimensional de media cero y matriz de covarianzas

{{< highlight R >}}
cov(cbind(x2, z2, y2))
#           x2        z2        y2
# x2 1.1087920 0.9406288 0.7431180
# z2 0.9406288 1.8412636 0.8371988
# y2 0.7431180 0.8371988 0.5485281
{{< / highlight >}}

pero donde se invierte la relación _causal_ entre `X` y `Z` y esta última variable se convierte en un confusor (como en la [segunda entrada de la serie](/2022/03/18/diagramas-causales-hiperbasicos-02-controlar-variable/)). En tal caso, la regresión que incluye `Z`,

{{< highlight text "linenos=false" >}}
Coefficients:
             Estimate Std. Error t value Pr(>|t|)
(Intercept) -0.003360   0.003146  -1.068    0.286
x2           0.499728   0.003862 129.380   <2e-16 ***
z2           0.202869   0.003038  66.772   <2e-16 ***

Residual standard error: 0.09944 on 997 degrees of freedom
Multiple R-squared:  0.9801,	Adjusted R-squared:  0.9801
F-statistic: 2.456e+04 on 2 and 997 DF,  p-value: < 2.2e-16
{{< / highlight >}}

seguiría dándose por buena. Sin embargo, la que la excluye, es decir, `Y ~ X`,

{{< highlight text "linenos=false" >}}
Coefficients:
             Estimate Std. Error t value Pr(>|t|)
(Intercept) -0.006290   0.007354  -0.855    0.393
x2           0.654061   0.007235  90.398   <2e-16 ***

Residual standard error: 0.2325 on 998 degrees of freedom
Multiple R-squared:  0.8912,	Adjusted R-squared:  0.8911
F-statistic:  8172 on 1 and 998 DF,  p-value: < 2.2e-16
{{< / highlight >}}

que vuelve a generar aproximadamente el mismo coeficiente que antes, i.e., aproximadamente $.66$, sería descartada por _sesgada_  por los motivos planteados la semana pasada.
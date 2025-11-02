---
author: Carlos J. Gil Bellosta
categories:
- estadística
- causalidad
date: 2022-03-18
lastmod: '2025-04-06T18:48:50.313076'
related:
- 2022-03-22-diagramas-causales-hipersimples-3-mediadores.md
- 2022-03-10-diagramas-causales-hipersimples-1-errores.md
- 2022-03-03-error-sesgo-modelos-lineales.md
- 2012-04-19-variables-instrumentales-con-r.md
- 2022-03-08-estadistica-ciencias-blandas.md
tags:
- causalidad
- redes bayesianas
- regresión lineal
- errores
- sesgo
- r
title: 'Diagramas causales hiperbásicos (II): ¿qué significa "controlar por" una variable?'
url: /2022/03/18/diagramas-causales-hiperbasicos-02-controlar-variable/
---

Esta es la segunda entrada de la serie sobre diagramas causales hiperbásicos. No se entenderá sin ---y remito a--- la
[entrada anterior](/2022/03/10/diagramas-causales-hiperbasicos-01-variables-omitidas/)
que define el contexto, objetivo e hipótesis subyacentes de la serie completa.

El diagrama causal objeto de esta entrada es apenas una arista más complejo que el de la anterior:

![](/img/2022/03/red_causal_hiperbasica_01.png#center)

Ahora la variable $Z$ afecta tanto a $Y$ (como en la entrada anterior) como a $X$ (esta es la novedad). Es una situación muy común en el análisis de datos. Algunos ejemplos:

* $X$ es la dosis de una medicina, $Y$ es la mejora de paciente y $Z$ es su edad. Puede que el médico tenga en cuenta la edad para determinar la dosis y que la edad, además, influya en el grado de mejora. Cabe esperar que pacientes más viejos reciban mayores dosis y que, no obstante, su mejora sea menor.
* $X$ es una campaña publicitaria, $Y$ son las ventas y $Z$ es la vinculación del cliente.
* $X$ es la cantidad de abono, $Y$ es el rendimiento y $Z$ es la lluvia.
* Etc.

Para volver a comparar las regresiones `Y ~ X` y `Y ~ X + Z` puedo simular datos concretos de acuerdo con el modelo causal anterior haciendo, p.e.,

{{< highlight R >}}
z <- rnorm(n)
x <- .8 * z + rnorm(n)
y <- .5 * x + .2 * z + rnorm(n, 0, .1)
{{< / highlight >}}

La regresión con la variable $Z$ omitida da

{{< highlight text "linenos=false" >}}
Coefficients:
             Estimate Std. Error t value Pr(>|t|)
(Intercept) -0.020597   0.005672  -3.631 0.000296 ***
x            0.600401   0.004483 133.941  < 2e-16 ***

Residual standard error: 0.1793 on 998 degrees of freedom
Multiple R-squared:  0.9473,	Adjusted R-squared:  0.9472
F-statistic: 1.794e+04 on 1 and 998 DF,  p-value: < 2.2e-16
{{< / highlight >}}

que no recoge, como puede verse, el efecto real de $X$ sobre $Y$: es de $.5$ pero la regresión lo estima en $.6$. Recuérdese que el coeficiente de $X$ mide cuánto varía (crece, en este caso) $Y$ al hacer crecer $X$. Pero un incremento de $X$ puede descomponerse en dos partes: lo que crece $X$ per se y lo que crece por influencia de $Z$. Y lo que crece por influencia de $Z$ afecta a $Y$ directamente (a través del coeficiente de $X$) y también indirectamente, a través de la influencia directa de $Z$ sobre $Y$.

Al faltar $Z$ en el modelo, este solo ve un incremento grande del valor de $Y$ al hacer crecer $X$ y sobreestima su efecto. El problema se corrige cuando $Z$ es incorporado al modelo. En efecto, haciendo `summary(lm(Y ~ X + Z))`, se obtiene

{{< highlight text "linenos=false" >}}
Coefficients:
             Estimate Std. Error t value Pr(>|t|)
(Intercept) -0.006195   0.003072  -2.017    0.044 *
x            0.505452   0.003089 163.626   <2e-16 ***
z            0.193288   0.003916  49.355   <2e-16 ***

Residual standard error: 0.0967 on 997 degrees of freedom
Multiple R-squared:  0.9847,	Adjusted R-squared:  0.9847
F-statistic: 3.207e+04 on 2 and 997 DF,  p-value: < 2.2e-16
{{< / highlight >}}

Esta vez el modelo ha estimado correctamente el impacto de $X$ sobre $Y$, $.5$. Además, ha estimado correctamente la influencia directa de $Z$ sobre $Y$, $.2$.

Introducir variables con una estructura causal similar a la de $Z$ en un modelo (y ya no solo en una regresión lineal) es lo que se conoce como _controlar por_ dichas variables. Y a las variables se las conoce popularmente como _controles_. Como se ha visto en esta entrada, _controlar_ (es decir, incluirlos en el modelo) es _estrictamente_ necesario.


### Notas adicionales

En el último párrafo he dicho que introducir los controles en el modelo es _estrictamente_ necesario. Pero he usado las cursivas por un motivo muy concreto: un diseño experimental adecuado podría hacerlo innecesario. Por ejemplo, en laboratorio se podrían obtener datos de $X$ e $Y$ fijando $Z = 0$. En tal caso, el _control_ se realizaría antes de la modelización, en el momento de la captura de datos a través de un _diseño experimental_ adecuado y el modelo `Y ~ X` no estaría sesgado. Sin embargo, esa posibilidad es quimérica cuando se trabaja con datos observacionales.

En situaciones reales, además, no solo hay una variable $Z$ sino que podríamos identificar $Z_1, \dots$ potenciales controles y en algún momento habría que hacer un _corte causal_ y decir: el resto de las variables sesgan el modelo, sí, pero poco; así que podemos omitirlas. Hay que tener en cuenta lo que Paul Meehl llamaba _crud factor_ (véase [_Why Summaries of Research on Psychological Theories are Often Uninterpretable_](https://doi.org/10.2466/pr0.1990.66.1.195)) y que describe así:

> In the social sciences and arguably in the biological sciences, "everything correlates to some extent with everything else."

También hay que tener en cuenta que el ejemplo sobre el que se ha razonado es simple y las influencias de las variables son todas lineales. Pero esto es una hipersimplificación de la realidad. Pudiera ser que, usando modelos lineales, alguien pretendiera _haber controlado por_ una serie de variables pero que, en realidad, no lo esté haciendo ---o solo lo esté haciendo parcialmente--- habida cuenta de los potenciales mecanismos causales no lineales.

### Nota final

Una complicación adicional a la hora de controla por variables que algún control puede resultar no ser observable. Es decir, que se sepa que haya uno operando y confundiendo el efecto de $X$ sobre $Y$ de alguna manera pero que no podamos saber cuál o cuáles son. Tendríamos el sesgo pero no la _variable culpable_ por la que controlar. Trataré el tema en una entrada posterior.

### Dos notas finales más

Parecería ---y el ejemplo hipersimple de esta entrada parece señalarlo--- que bastaría con _controlar_ por los _confusores_ ---sí, he omitido el nombre formal que reciben variables como $Z$ muy conscientemente hasta este el momento--- para obtener estimaciones insesgadas de los efectos. Pero en [_No, you have not controlled for confounders_](https://davidlindelof.com/no-you-have-not-controlled-for-confounders/) se nos advierte que podría no ser tan sencillo.

Más evidencias al respecto pueden encontrarse en [_Interaction Effects Need Interaction Controls_](https://datacolada.org/80), donde se nos advierte que cuando existen interacciones (¿cuándo no?) es necesario también usar interacciones en los controles.
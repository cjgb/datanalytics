---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2023-03-21
lastmod: '2025-04-06T19:05:44.427696'
related:
- 2020-04-13-regresion-tradicional-vs-multinivel.md
- 2022-03-03-error-sesgo-modelos-lineales.md
- 2022-03-10-diagramas-causales-hipersimples-1-errores.md
- 2016-01-25-comparaciones-de-tres-grupos-pruebas-vs-modelos.md
- 2015-06-25-diferencia-de-medias-a-la-bayesiana-con-salsa-de-stan.md
tags:
- estadística
- prueba de hipótesis
- tests ab
- cuped
title: Reducción del error en tests A/B (y similares)
url: /2023/03/21/reduccion-error-tests-ab/
---

Hoy, cuatro maneras distintas de realizar un test A/B. Comienzo con unos datos simulados que tienen este aspecto:

{{< highlight R >}}
set.seed(1)
n <- 1000
test <- c(rep(0, n/2), rep(1, n/2))
y0 <- rnorm(n)
y1 <- y0 + test + rnorm(n)
{{< / highlight >}}

Ahí:
- `n` es el número de sujetos, 1000.
- `test` es un vector que indica el tratamiento: 500 en un grupo, 500 en otro.
- `y0` es el _valor_ de/asociado a los sujetos en un periodo anterior al tratamiento.
- `y1` es el _valor_ de los sujetos después del tratamiento. Como se puede ver, está relacionado con el tratamiento en sí y con el valor anterior. Se le ha añadido, además, cierta cantidad de ruido estadístico.

Hay varias maneras de estimar el efecto del tratamiento (o de, como dicen algunos, realizar un test A/B). Voy a mencionar cuatro.

## I

{{< highlight R >}}
mod01 <- lm(y1 ~ test)
summary(mod01)
{{< / highlight >}}

Es _casi_ el t-test y da como resultado

{{< highlight text >}}
             Estimate Std. Error t value Pr(>|t|)
(Intercept)  0.01966    0.06582   0.299    0.765
test         0.90487    0.09309   9.721   <2e-16 ***
{{< / highlight >}}

El coeficiente del test es _casi_ 1 y el error estándar, 0.09.

## II

{{< highlight R >}}
mod02 <- lm(y1 ~ test + y0)
summary(mod02)
{{< / highlight >}}

Que da:

{{< highlight text >}}
             Estimate Std. Error t value Pr(>|t|)
(Intercept) -0.003125   0.046557  -0.067    0.947
test         0.973866   0.065870  14.785   <2e-16 ***
y0           1.006014   0.031840  31.596   <2e-16 ***
{{< / highlight >}}

Mejor que antes. El coeficiente del test está más próximo a 1 y el error ha bajado a 0.065.

### III

{{< highlight R >}}
mod0 <- lm(y1 ~ y0)
y2 <- resid(mod0)
mod03 <- lm(y2 ~ test)
summary(mod03)
{{< / highlight >}}

Que da:

{{< highlight text >}}
            Estimate Std. Error t value Pr(>|t|)
(Intercept) -0.48640    0.04653  -10.45   <2e-16 ***
test         0.97280    0.06581   14.78   <2e-16 ***
{{< / highlight >}}

Prácticamente, como II.

### IV

{{< highlight R >}}
mod0 <- lm(y1 ~ y0)
y2 <- resid(mod0)
mod0 <- lm(test ~ y0)
test2 <- resid(mod0)
mod04 <- lm(y2 ~ test2)
summary(mod04)
{{< / highlight >}}

Que da:

{{< highlight text >}}
              Estimate Std. Error t value Pr(>|t|)
(Intercept) -1.231e-16  3.290e-02    0.00        1
test2        9.739e-01  6.584e-02   14.79   <2e-16 ***
{{< / highlight >}}

Prácticamente, como cualquiera de los dos anteriores.

### Comentario

Todas las maneras anteriores de realizar la prueba A/B tienen nombre, aunque no estoy seguro de cuál es. La primera, donde el error del tratamiento es más grande, se conoce técnicamente como test de Student e, informalmente, como la _marca del novato_.

Los otros tres producen un error más pequeño para el coeficiente de interés y son prácticamente equivalentes. El favorito de casi todos debería ser el II: sabemos que en la regresión

$$y \sim x + \epsilon$$

el error, $\epsilon$ es consecuencia de variables no contempladas en el modelo y si las tienes, ¿por qué no usarlas? ¡Es gratis!

Las otras dos ---una de las cuales, pero no estoy seguro de cuál, ha sido _redescubierta_ como
[CUPED](https://towardsdatascience.com/How-to-double-a-b-testing-speed-with-cuped-f80460825a90)---
está basada en lo siguiente: si tienes una regresión del tipo

$$y \sim x1 + x2 + \epsilon$$

y $x1$ es ortogonal a $x2$, puedes ajustar el modelo globalmente o _por partes_: primero $y ~ x1$ y luego los residuos de $y$ sobre $x2$ (o a la inversa). Los modelos II, III y IV son similares porque, precisamente, `test`, la variable que indica quién recibe el tratamiento, es ortogonal ---perfectamente, en la teoría, y casi, casi, en la práctica--- a cualquier otra circunstancia de los sujetos.

Eso nos lleva a la siguiente reflexión:

- No está claro qué le gana CUPED al método clásico de la regresión completa.
- Las diferencias serán tanto menores cuanto mayor sea el tamaño de la muestra (porque menor será la correlación entre la variable del tratamiento y cualquier otra variable).
- Las diferencias entre los modelos II, III y IV se explican, precisamente, por esas pequeñas correlaciones residuales entre la variable de tratamiento e $y1$ (en este caso).
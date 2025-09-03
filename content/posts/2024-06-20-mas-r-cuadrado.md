---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2024-06-20
lastmod: '2025-04-06T19:12:25.934901'
related:
- 2021-02-16-hay-mil-motivos-para-criticar-una-regresion-trucha-pero-una-rc2b2-baja-no-es-uno-de-ellos.md
- 2022-03-10-diagramas-causales-hipersimples-1-errores.md
- 2020-06-29-sobremuestreando-x-y-no-y.md
- 2021-10-26-sobre-las-r2-pequenas-y-sus-interpretaciones.md
- 2014-11-17-los-coeficientes-de-la-regresion-logistica-con-sobremuestreo.md
tags:
- regresión lineal
- r cuadrado
title: Más sobre las R² pequeñas
url: /2024/6/20/mas-r-cuadrado-pequenas/
---

### I.

Si uno hace

{{< highlight r >}}
n <- 1000

# dos clases del mismo tamaño n
x <- c(rep(0, n), rep(1, n))

# mean(y0) = .45, mean(y1) = .55
y0 <- y1 <- rep(0, n)
y0[1:(.45 * n)] <- 1
y1[1:(.55 * n)] <- 1

# mean(y) = .5
y <- c(y0, y1)

summary(lm(y ~ x))
{{< / highlight >}}

obtiene

{{< highlight text >}}
Residuals:
   Min     1Q Median     3Q    Max
 -0.55  -0.45   0.00   0.45   0.55

Coefficients:
            Estimate Std. Error t value Pr(>|t|)
(Intercept)  0.45000    0.01574  28.590  < 2e-16 ***
x            0.10000    0.02226   4.492 7.44e-06 ***
---
Signif. codes:  0 ‘***’ 0.001 ‘**’ 0.01 ‘*’ 0.05 ‘.’ 0.1 ‘ ’ 1

Residual standard error: 0.4977 on 1998 degrees of freedom
Multiple R-squared:   0.01,	Adjusted R-squared:  0.009505
F-statistic: 20.18 on 1 and 1998 DF,  p-value: 7.444e-06
{{< / highlight >}}

donde quiero subrayar que la R² es del 1% o _muy pequeña_.

### II.

Hay dos maneras de entender los resultados del ejercicio anterior (y, en particular, del pequeño valor de la R²).

El primero, más o menos, automático, nos dice que el modelo no es particularmente informativo: apenas mejora el modelo _vacío_ que predice siempre `mean(y) = .5`.

Sin embargo, también se puede argumentar que el modelo es sumamente informativo, como
[aquí](https://statmodeling.stat.columbia.edu/2024/06/17/this-well-known-paradox-of-r-squared-is-still-buggin-me-can-you-help-me-out/),
donde se da la siguiente interpretación:

- `x` representa el estado,
- `y` indica si un ciudadano (del estado `x`) vota al partido republicano.

Entonces, el modelo nos cuenta que el estado `x = 0` es (profundamente) demócrata y el otro, (profundamente) republicano. Por lo que el modelo es _muy_ informativo: casi seguro, las políticas implementadas en los dos estados van a ser muy distintas entre sí.

### III.

Este ejemplo está hermanado con esos en los que se confronta la significancia estadística y la no estadística. Podría decirse aquí también que la R² está _correlacionada_ con el concepto de interés extra-estadístico, pero que no está perfectamente identificado con él.

Y, por supuesto, recuérdese [_Sobre las R² pequeñas y sus interpretaciones_](/2021/10/26/sobre-las-r2-pequenas-y-sus-interpretaciones/).
---
author: Carlos J. Gil Bellosta
date: 2017-10-23 08:13:15+00:00
draft: false
title: Modelos directos, inversos y en los que tanto da

url: /2017/10/23/modelos-directos-inversos-y-en-los-que-tanto-da/
categories:
- estadística
- r
tags:
- estadística
- nls
- onls
- paquetes
- r
- regresión
---

Continúo con [esto](https://www.datanalytics.com/2017/10/16/modelos-no-lineales-directos-e-inversos/) que concluí con una discusión que me negué a resolver sobre la geometría de los errores.

Que es la manera de entender que los problemas directos e inversos no son exactamente el mismo. Digamos que no es una medida invariante frente a reflexiones del plano (que es lo que hacemos realmente al considerar el modelo inverso).

¿Pero y si medimos la distancia (ortogonal) entre los puntos $latex (x,y)$ y la curva $latex y = f(x)$ (o, equivalentemente, $latex x = f^{-1}(x)$)? Entonces daría (o debería dar) lo mismo.

Podemos ensayarlo usando el paquete [`onls`](https://cran.r-project.org/web/packages/onls/index.html), que [nos proporciona exactamente eso](https://rmazing.wordpress.com/2015/01/18/introducing-orthogonal-nonlinear-least-squares-regression-in-r/).

Voilá (usando los datos de la entrada anterior):

{{< highlight R >}}
    mod_directo <- onls(y ~ exp(a * x + b),
                        start = list(a = 0.1, b = 0.1))
    summary(mod_directo)

    # Formula: y ~ exp(a * x + b)
    #
    # Parameters:
    #   Estimate Std. Error t value Pr(>|t|)
    # a   1.0107     0.1786   5.659 1.51e-07 ***
    # b  -0.4843     0.1188  -4.076 9.32e-05 ***
    #   ---
    # Signif. codes:  0 ‘***’ 0.001 ‘**’ 0.01 ‘*’ 0.05 ‘.’ 0.1 ‘ ’ 1
    #
    # Residual standard error of vertical distances: 0.6124 on 98 degrees of freedom
    # Residual standard error of orthogonal distances: 0.07816 on 98 degrees of freedom
    #
    # Number of iterations to convergence: 2
    # Achieved convergence tolerance: 1.49e-08
{{< / highlight >}}

y

{{< highlight R >}}
    mod_inverso <- onls(x ~ (log(y) - b) / a, start = list(a = 0.1, b = 0.1))
    summary(mod_inverso)

    # Formula: x ~ (log(y) - b)/a
    #
    # Parameters:
    #   Estimate Std. Error t value Pr(>|t|)
    # a  1.02304    0.14805   6.910 4.92e-10 ***
    # b -0.48512    0.08978  -5.403 4.59e-07 ***
    #   ---
    # Signif. codes:  0 ‘***’ 0.001 ‘**’ 0.01 ‘*’ 0.05 ‘.’ 0.1 ‘ ’ 1
    #
    # Residual standard error of vertical distances: 0.873 on 98 degrees of freedom
    # Residual standard error of orthogonal distances: 0.08608 on 98 degrees of freedom
    #
    # Number of iterations to convergence: 11
    # Achieved convergence tolerance: 1.49e-08
{{< / highlight >}}




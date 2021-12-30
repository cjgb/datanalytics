---
author: Carlos J. Gil Bellosta
date: 2012-04-19 07:30:54+00:00
draft: false
title: Variables instrumentales con R

url: /2012/04/19/variables-instrumentales-con-r/
categories:
- estadística
- r
tags:
- econometría
- estadística
- r
- variables instrumentales
- iv
---

Los economistas usan unas _cosas_ a las que llaman variables instrumentales con las que uno apenas se tropieza fuera de contextos econométricos. El problema se plantea en el contexto de la regresión

$$y_i = \beta x_i + \varepsilon_i,$$

cuando existe correlación entre _X_ y $latex \varepsilon$. En tales casos, el estimador por mínimos cuadrados es

$$\hat{\beta} =\frac{x'y}{x'x}=\frac{x'(x\beta+\varepsilon)}{x'x}=\beta+\frac{x'\varepsilon}{x'x}$$

y debido a la correlación entre _X_ y $latex \varepsilon$, está sesgado.

La solución que se plantea en ocasiones es el de usar variables instrumentales, es decir, variables correlacionadas con _X_ pero no con $latex \varepsilon$. La siguiente simulación en R ilustra el problema:

{{< highlight R "linenos=true" >}}
library(MASS)
library(AER)

n <- 100

b.0 <- 1
b.1 <- 2

cov.mat <- diag(3)
cov.mat[2,1] <- cov.mat[1,2] <- sqrt(0.5)
cov.mat[3,1] <- cov.mat[1,3] <- sqrt(0.5)

foo <- function(){
    xze <- data.frame(mvrnorm(n, rep(0,3), cov.mat ))
    colnames( xze ) <- c("x", "z", "e")

    xze$y <- b.0 + b.1 * xze$x + xze$e

    c.m1 <- coefficients( lm( y ~ x, data = xze ) )
    c.m2 <- coefficients( ivreg( y ~ x | z, data = xze ) )

    data.frame( c.1.1 = c.m1[1], c.1.2 = c.m1[2],
        c.2.1 = c.m2[1], c.2.2 = c.m2[2] )
}

foo()

res <- replicate( 1000, foo(), simplify = F )
res <- do.call( rbind, res )
{{< / highlight >}}

Lo que se hace en ella es construir 1000 conjuntos de datos con las variables `y`, `x`, `z` y el error `e`. Las tres últimas son normales y están construidas de forma que:

* La correlación entre `x` y el error `e` no es nula.
* La correlación entre `x` y `z` tampoco es nula.
* La correlación entre `z` y el error `e` es nula.

Luego, se construye `y` como `b.0 + b.1 * x + e`. Finalmente, se comparan los coeficientes obtenidos por la regresión por mínimos cuadrados tradicional con la que se obtiene usando `z` como variable instrumental. La comparación de los coeficientes obtenidos puede observarse gráficamente haciendo

{{< highlight R "linenos=true" >}}
library(ggplot2)
library(reshape)

mi.coef <- res[,c(2,4)]
colnames(mi.coef) <- c("ols", "vi")
mi.coef <- melt( mi.coef )

ggplot(mi.coef, aes(x=value, fill=variable)) + geom_density(alpha=.3)
{{< / highlight >}}

que produce el gráfico

[![](/wp-uploads/2012/04/coeficientes.png#center)
](/wp-uploads/2012/04/coeficientes.png#center)

En esencia, lo que se ha hecho es calcular el coeficiente condicionando previamente por `z`, es decir, calculando


$$ E [ y | z ] = \beta E [ x | z ] + E [ \varepsilon | z ], $$


que anula el error. Por otra parte, como puede apreciarse en el gráfico, se pierde precisión, es decir, aumenta la varianza del estimador (y se ensancha la campana alrededor de su valor medio) por la pérdida de información que supone condicionar `x` a `z`.

El lector interesado hará bien en:

* Estudiar el efecto de cambiar la correlación entre `x` y `z` en la anchura de la campana.
* Leer la [entrada de la Wikipedia sobre variables instrumentales](http://en.wikipedia.org/wiki/Instrumental_variable) para entender cómo se extiende este caso univariante al general.
* Echarle un vistazo al artículo _[Instrumental Variables Estimation in Political Science: A Readers's Guide](http://vote.research.yale.edu/Sovey%20&%20Green%20--%20Instrumental%20Variables%20in%20PS.pdf)_ para conocer mejor el uso y el abuso de este tipo de técnicas en aplicaciones reales.


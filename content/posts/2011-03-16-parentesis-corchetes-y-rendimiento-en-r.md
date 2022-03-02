---
author: Carlos J. Gil Bellosta
date: 2011-03-16 09:31:45+00:00
draft: false
title: Paréntesis, corchetes y rendimiento en R

url: /2011/03/16/parentesis-corchetes-y-rendimiento-en-r/
categories:
- r
tags:
- programación
- r
---

Conforme se populariza el uso de R, cobran creciente importancia las cuestiones concernientes a su rendimiento, su gestión de la memoria, etc. Hasta el punto que incluso uno de sus creadores, Ross Ihaka, ha expresado últimamente su [descontento con las limitaciones de R](http://www.stat.auckland.ac.nz/~ihaka/downloads/Compstat-2008.pdf) (el enlace es gentileza de Daniel Castro) sugiriendo que sus componentes puramente estadísticos deberían construirse sobre la base de un lenguaje distinto, posiblemente Lisp.

Dentro de este contexto de preocupación sobre el rendimiento de R, han aflorado algunas cuestiones acerca de la eficiencia del intérprete a la hora de resolver expresiones matemáticas. Por ejemplo, Radford Neal estudió el [desigual desempeño de R](http://radfordneal.wordpress.com/2010/08/15/two-surpising-things-about-r/) frente a ciertas expresiones matemáticas equivalentes: en particular, la expresión

{{< highlight R >}}
1/{a*{b+c}}
{{< / highlight >}}

frente a

{{< highlight R >}}
1/(a*(b+c))
{{< / highlight >}}

Puede verse más información sobre el mismo tema [aquí](http://radfordneal.wordpress.com/2010/08/19/speeding-up-parentheses-and-lots-more-in-r/), [aquí](http://xianblog.wordpress.com/2010/09/06/insane/) y [aquí](http://blog.binfalse.de/2011/02/readability-vs-speed-in-r/).

Lo que resulta curioso, cuando no denunciable, es que los autores de todos estos análisis renuncien al rigor estadístico y comparen A contra B a partir de una única observación de cada caso. El código que presento debajo es sustancialmente más riguroso en ese aspecto: replica, aleatoriza y utiliza un análisis de la varianza para ver qué de cierto hay en la hipótesis del Sr. Neal:







{{< highlight R >}}
## seis funciones de distinto grado de complejidad

# con paréntesis
p1 <-  function(x) 1/(1+x)
p2 <-  function(x) (1/(1+x))
p3 <-  function(x) (((1 /(((x + 1))))))

# con corchetes
ll1 <- function(x) 1/{1+x}
ll2 <- function(x) {1/{1+x}}
ll3 <- function(x) {{{1 /{{{ x + 1} }} } } }

dat <- data.frame(sep = rep(c("p", "ll"), each = 3), complejidad = factor(rep(1:3, 2)))
dat$foo <- paste(dat$sep, dat$complejidad, sep = "")

dat <- dat[ sample(rep(1:nrow(dat), 20)), ]                # aleatorizo

time.foo <- function(foo){
    f <- get(foo)
    system.time(kk <- replicate(1000000, f(3)))[3]	# tiempos de 10^6 iteraciones
}

dat$tiempo <- sapply(dat$foo, time.foo)                        # ¡tiempos!

summary(lm(tiempo ~ sep + complejidad, data = dat))

boxplot(tiempo ~ sep + factor(complejidad), data = dat,
    ylim = c(0, max(dat$tiempo)), xlab = "",
    ylab = "segundos",
    main = "Tiempo de ejecución de 10^6 iteraciones\nde seis expresiones equivalentes en R")
{{< / highlight >}}







La salida que obtengo en mi máquina es

{{< highlight R >}}
Call:
lm(formula = tiempo ~ sep + factor(complejidad), data = dat)

Residuals:
        Min       1Q   Median       3Q      Max
-0.44783 -0.14304 -0.06825  0.11217  1.33167

Coefficients:
                        Estimate Std. Error t value Pr(>|t|)
(Intercept)           4.74283    0.04307 110.128  < 2e-16 ***
sepp                  0.05583    0.04307   1.296    0.197
factor(complejidad)2  0.24500    0.05275   4.645 9.04e-06 ***
factor(complejidad)3  1.03550    0.05275  19.632  < 2e-16 ***
---
Signif. codes:  0 ‘***’ 0.001 ‘**’ 0.01 ‘*’ 0.05 ‘.’ 0.1 ‘ ’ 1

Residual standard error: 0.2359 on 116 degrees of freedom
Multiple R-squared: 0.7847,     Adjusted R-squared: 0.7791
F-statistic: 140.9 on 3 and 116 DF,  p-value: < 2.2e-16
{{< / highlight >}}

y el gráfico (¡nunca, nunca, nunca obviéis el gráfico!),

[![](/wp-uploads/2011/03/rendimiento_parentesis_r.png#center)
](/wp-uploads/2011/03/rendimiento_parentesis_r.png#center)

Así que:



* se aprecia una diferencia entre los tiempos de ejecución de según la complejidad de la expresión,
* aunque no entre el uso de paréntesis o corchetes.

Y para acabar, dejo a mis lectores como tarea:

1. Estudiar si vale la pena o no considerar la interacción entre las dos variables.
2. Estudiar más rigurosamente el hecho de que la variable `sep` no tiene influencia comparando un modelo con ella y un modelo sin ella.


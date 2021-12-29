---
author: Carlos J. Gil Bellosta
date: 2011-02-28 09:07:36+00:00
draft: false
title: 'Programación funcional en R: Reduce'

url: /2011/02/28/programacion-funcional-en-r-reduce/
categories:
- r
tags:
- r
- programación funcional
---

Siguiendo con la serie de artículos sobre programación funcional que comencé [hablando de Filter()](http://www.datanalytics.com/2010/11/24/programacion-funcional-en-r-filter/) hace un tiempo, trataré hoy la función Reduce(). El contenido de cuanto sigue debería ser familiar de quienes asistieron al Taller Avanzado de R en las [II Jornadas de Usuarios de R](http://www.datanalytics.com/2010/12/29/noticia-de-las-ii-jornadas-de-usuarios-de-r/).

Reduce es el segundo de los tiempos de una abstracción popularizado por Google y otros pero que tiene sus raíces en los lenguajes funcionales (Lisp y otros): _map-reduce_. En resumen, _map_ es la transformación


$$(v_1, \dots, v_n) \longmapsto (f(v_1), \dots, f(v_n))$$


mientras que reduce consiste en (algo parecido a)


$$(f(v_1), \dots, f(v_n))  \longmapsto F(f(v_1), \dots, f(v_n)),$$


que devuelve un único valor a partir del vector transformado. Dado un vector $latex v=(v_1, \dots, v_n)$ y una función $latex f$, sabemos cómo construir $latex (f(), \dots, f())$ y $latex (f(v_1), \dots, f(v_n))$ usando las funciones replicate() y sapply(). Lo que permite Reduce() es hacer


$$f(f(\dots f(f(v_1, v_2), v_3), \dots), v_n)$$


y, como consecuencia,


$$f(f(\dots f(x) \dots)).$$


En particular, Reduce() acepta como argumento una función (que, a su vez, acepta dos argumentos) y un vector (además de, posiblemente, argumentos auxiliares adicionales que el interesado encontrará en la ayuda).

El primer ejemplo es simple: vectorizar una función. Tambén es impráctico porque la función que queremos vectorizar ya está vectorizada: max().







{{< highlight R "linenos=true" >}}
    f <- function(x, y) ifelse(x > y, x, y)     # máximo de dos valores
    v <- rnorm(100)
    Reduce(f, v)
    max(v)
{{< / highlight >}}







El segundo tiene que ver con [fracciones continuas](http://es.wikipedia.org/wiki/Fracci%C3%B3n_continua):







{{< highlight R "linenos=true" >}}
    f <- function(x, y) y + 1 / x
    v <- rep(1, 12)
    Reduce(f, v, accumulate = T)
{{< / highlight >}}







El interesado puede también probar a definir







{{< highlight R "linenos=true" >}}
    f(x, y) = x + 1 / y
{{< / highlight >}}







y jugar con las opciones right = T/F de Reduce().

El tercer ejemplo puede resultar más interesante. Hay algo de markoviano en la función Reduce() que hace que pueda aplicarse con (discutible, pues es una aproximación) éxito a la simulación de colas. En este caso, simulamos una cola en la que tanto el número de clientes que llegan como el de los que salen en cada intervalo de tiempo (pequeño y fijo) sigue una ley de Poisson. Esto es una aproximación de la situación tal vez más realista en la que ambos fenómenos se rigen por un proceso de Poisson ([que puede simularse tal como nos enseña Olivier Núñez en la lista de ayuda de R](https://stat.ethz.ch/pipermail/r-help-es/2010-April/000891.html)).

El código es así:







{{< highlight R "linenos=true" >}}
    n <- 10000      # n periodos de 1 minuto
    lambda1 <- .3   # intensidad de las llegadas
    lambda2 <- .4   # intensidad del tiempo de servicio

    events <- data.frame(
        entrada = rpois(n, lambda1),
        salida  = rpois(n, lambda2)
       )

    # Convertimos el df en una lista por minutos
    events <- by(events, 1:n, I)
    calcular.longitud.cola <- function(long.cola, delta){
        max(0, long.cola + delta$entrada - delta$salida)
    }

    # hour.events <- Reduce(estado.cola, events, init = 0)
    longitud.cola <- Reduce(calcular.longitud.cola, events, init = 0, accumulate = T)
    plot(longitud.cola, type = "l")
{{< / highlight >}}







El interesado en profundizar en el estudio de esta función puede ejercitarse con los siguientes ejercicios:



1. Vectorizar las funciones `cbind()` y `rbind()`
2. Reescribir el código para reescribir el código que ofrecí en la entrada [A vueltas con los fractales](http://www.datanalytics.com/2010/10/26/a-vueltas-con-los-fractales/) usando la función `Reduce()`


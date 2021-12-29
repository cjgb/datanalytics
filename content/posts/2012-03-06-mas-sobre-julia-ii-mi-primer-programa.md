---
author: Carlos J. Gil Bellosta
date: 2012-03-06 08:37:57+00:00
draft: false
title: 'Más sobre Julia (II): mi primer programa'

url: /2012/03/06/mas-sobre-julia-ii-mi-primer-programa/
categories:
- programación
- r
tags:
- programación
- julia
- r
---

A las entradas que he hecho sobre [Julia](http://julialang.org/) estos últimos días, quiero añadir esta en la que publico mi primer programa en dicho lenguaje.

Me ha dado por reimplementar el programa para realizar un [muestreo de Gibbs](http://es.wikipedia.org/wiki/Muestreo_de_Gibbs) que aparece en [_Gibbs sampler in various languages_](http://darrenjw.wordpress.com/2011/07/16/gibbs-sampler-in-various-languages-revisited/).

Lo primero ha sido instalar Julia, para lo que basta con seguir las [instrucciones que aparecen en su página de github](https://github.com/JuliaLang/julia#readme). Y aviso: tarda bastante en descargar y compilar todas sus dependencias.

El código de mi programa, para que quede constancia pública de que vengo a ser un pionero en España usándolo, es:


{{< highlight julia "linenos=true" >}}
function gibbs(n, thin)
        x = 0.0
        y = 0.0
        for i=1:n
                for j=1:thin
                        x = randg(3) / (y * y + 4)
                        y = randn() / sqrt(2*x + 2) + 1 / (x + 1)
                end
                println(i, " ", x, " ", y)
        end
end

gibbs(50000, 1000)
{{< / highlight >}}

El programa en cuestión, tal cual viene en la página que cito arriba, en R, ha tardado en ejecutarse

{{< highlight bash "linenos=true" >}}
$ time Rscript mcmc00.R > data.tab

real 8m31.259s
user 8m29.668s
sys 0m0.948s
{{< / highlight >}}

Y en Julia,

{{< highlight bash "linenos=true" >}}
$ time julia mcmc00.j > data.tab.j

real 0m9.268s
user 0m9.113s s
ys 0m0.144s
{{< / highlight >}}

Es decir, del orden de 60 veces menos. Es de reseñar que este tipo de algoritmos son de los menos indicados para ser ejecutados con R: son imposibles de vectorizar. No en vano, MCMC (tal como aparece en los nombres de los programas) significa _Markov Chain Monte Carlo_ y en una cadena de Markov, cada valor depende del estado anterior. Hay que morir a hierro y construir un bucle.

El resultado de ambas simulaciones puede apreciarse en el siguiente gráfico:

[![](/wp-uploads/2012/03/simulations_output001.png)
](/wp-uploads/2012/03/simulations_output001.png)

Es cierto que en este ejemplo concreto, los números aleatorios podrían precalcularse en una única llamada a `rnorm` o `rgamma`, pero no he observado una ganancia sustancial de tiempos, que se pierden, fundamentalmene, en el código interpretado dentro del bucle.

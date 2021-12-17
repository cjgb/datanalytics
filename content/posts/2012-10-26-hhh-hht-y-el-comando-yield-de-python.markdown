---
author: Carlos J. Gil Bellosta
date: 2012-10-26 07:18:38+00:00
draft: false
title: HHH, HHT y el comando "yield" de Python

url: /2012/10/26/hhh-hht-y-el-comando-yield-de-python/
categories:
- probabilidad
- r
tags:
- probabilidad
- python
- r
---

Variable aleatoria X: tiramos una moneda al aire sucesivamente y contamos el número de veces que lo hacemos hasta obtener el patrón HHH (tres caras) en las tres últimas tiradas.

Variable aleatoria Y: lo mismo, pero hasta que salga el patrón HHT.

Entonces las medias de X e Y son iguales, ¿verdad? Pues no. (¿Alguien sabría decirme cuál de las combinaciones, HHH o HHT, tiende, _en promedio_, a aparecer antes? Pueden darse explicaciones muy complejas, pero existe una muy simple e intuitiva).

Este pequeño (¿y sorprendente?) ejercicio probabilístico me ha servido de excusa para practicar con el comando [yield en Python](http://stackoverflow.com/questions/231767/the-python-yield-keyword-explained), del que vine a tener noticia recientemente.

El código es:



    <span style="color:#800000; font-weight:bold; ">from random <span style="color:#800000; font-weight:bold; ">import choice

    <span style="color:#800000; font-weight:bold; ">def cadena<span style="color:#808030; ">(<span style="color:#808030; ">)<span style="color:#808030; ">:
            a<span style="color:#808030; ">, b<span style="color:#808030; ">, c <span style="color:#808030; ">= <span style="color:#808030; ">(<span style="color:#e34adc; ">None<span style="color:#808030; ">, <span style="color:#e34adc; ">None<span style="color:#808030; ">, <span style="color:#e34adc; ">None<span style="color:#808030; ">)
            <span style="color:#800000; font-weight:bold; ">while<span style="color:#808030; ">(<span style="color:#e34adc; ">True<span style="color:#808030; ">)<span style="color:#808030; ">:
                    a<span style="color:#808030; ">, b<span style="color:#808030; ">, c <span style="color:#808030; ">= b<span style="color:#808030; ">, c<span style="color:#808030; ">, choice<span style="color:#808030; ">(<span style="color:#0000e6; ">"HT"<span style="color:#808030; ">)
                    <span style="color:#800000; font-weight:bold; ">yield a<span style="color:#808030; ">,b<span style="color:#808030; ">,c

    niter <span style="color:#808030; ">= <span style="color:#008c00; ">100000
    HHH <span style="color:#808030; ">= <span style="color:#808030; ">[<span style="color:#008c00; ">0<span style="color:#808030; ">] <span style="color:#808030; ">* niter
    HHT <span style="color:#808030; ">= <span style="color:#808030; ">[<span style="color:#008c00; ">0<span style="color:#808030; ">] <span style="color:#808030; ">* niter

    <span style="color:#800000; font-weight:bold; ">for i <span style="color:#800000; font-weight:bold; ">in <span style="color:#e34adc; ">range<span style="color:#808030; ">(niter<span style="color:#808030; ">)<span style="color:#808030; ">:
            cont <span style="color:#808030; ">= <span style="color:#008c00; ">1
            gen <span style="color:#808030; ">= cadena<span style="color:#808030; ">(<span style="color:#808030; ">)

            <span style="color:#800000; font-weight:bold; ">while<span style="color:#808030; ">( <span style="color:#e34adc; ">True <span style="color:#808030; ">)<span style="color:#808030; ">:
                    seq <span style="color:#808030; ">= gen<span style="color:#808030; ">.next<span style="color:#808030; ">(<span style="color:#808030; ">)
                    <span style="color:#800000; font-weight:bold; ">if seq <span style="color:#808030; ">=<span style="color:#808030; ">= <span style="color:#808030; ">(<span style="color:#0000e6; ">'H'<span style="color:#808030; ">, <span style="color:#0000e6; ">'H'<span style="color:#808030; ">, <span style="color:#0000e6; ">'H'<span style="color:#808030; ">) <span style="color:#800000; font-weight:bold; ">and HHH<span style="color:#808030; ">[i<span style="color:#808030; ">] <span style="color:#808030; ">=<span style="color:#808030; ">= <span style="color:#008c00; ">0<span style="color:#808030; ">:
                            HHH<span style="color:#808030; ">[i<span style="color:#808030; ">] <span style="color:#808030; ">= cont

                    <span style="color:#800000; font-weight:bold; ">if seq <span style="color:#808030; ">=<span style="color:#808030; ">= <span style="color:#808030; ">(<span style="color:#0000e6; ">'H'<span style="color:#808030; ">, <span style="color:#0000e6; ">'H'<span style="color:#808030; ">, <span style="color:#0000e6; ">'T'<span style="color:#808030; ">) <span style="color:#800000; font-weight:bold; ">and HHT<span style="color:#808030; ">[i<span style="color:#808030; ">] <span style="color:#808030; ">=<span style="color:#808030; ">= <span style="color:#008c00; ">0<span style="color:#808030; ">:
                            HHT<span style="color:#808030; ">[i<span style="color:#808030; ">] <span style="color:#808030; ">= cont

                    cont <span style="color:#808030; ">+<span style="color:#808030; ">= <span style="color:#008c00; ">1

                    <span style="color:#800000; font-weight:bold; ">if<span style="color:#808030; ">( HHH<span style="color:#808030; ">[i<span style="color:#808030; ">] <span style="color:#808030; ">* HHT<span style="color:#808030; ">[i<span style="color:#808030; ">] <span style="color:#808030; ">> <span style="color:#008c00; ">0 <span style="color:#808030; ">)<span style="color:#808030; ">:
                            <span style="color:#800000; font-weight:bold; ">break

    <span style="color:#800000; font-weight:bold; ">for x <span style="color:#800000; font-weight:bold; ">in HHH<span style="color:#808030; ">:
            <span style="color:#800000; font-weight:bold; ">print x<span style="color:#808030; ">;
    <span style="color:#800000; font-weight:bold; ">for x <span style="color:#800000; font-weight:bold; ">in HHT<span style="color:#808030; ">:
            <span style="color:#800000; font-weight:bold; ">print x<span style="color:#808030; ">;




La magia está en el comando `yield` en la función `cadena`. Al hacer



    gen <span style="color:#808030; ">= cadena<span style="color:#808030; ">(<span style="color:#808030; ">)




se _inicia_ el iterador. Cada vez que uno llama entonces a



    seq <span style="color:#808030; ">= gen<span style="color:#808030; ">.next<span style="color:#808030; ">(<span style="color:#808030; ">)




se ejecuta una iteración del bucle



    <span style="color:#800000; font-weight:bold; ">while<span style="color:#808030; ">(<span style="color:#e34adc; ">True<span style="color:#808030; ">)<span style="color:#808030; ">:
         a<span style="color:#808030; ">, b<span style="color:#808030; ">, c <span style="color:#808030; ">= b<span style="color:#808030; ">, c<span style="color:#808030; ">, choice<span style="color:#808030; ">(<span style="color:#0000e6; ">"HT"<span style="color:#808030; ">)
         <span style="color:#800000; font-weight:bold; ">yield a<span style="color:#808030; ">,b<span style="color:#808030; ">,c




en la función `cadena`, que recuerda entre llamada y llamada el estado de las variables (internas a ella) `a`, `b` y `c` (además de devolver, como haría `return`, el valor generado.

Si tengo un poco de tiempo, veré si puedo implementar esta misma solucíón (sospecho que podría ser posible) con el [paquete iterators de R](http://cran.r-project.org/web/packages/iterators/index.html).

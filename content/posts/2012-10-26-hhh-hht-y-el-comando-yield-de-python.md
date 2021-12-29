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

{{< highlight python "linenos=true" >}}
from random import choice

def cadena():
        a, b, c = (None, None, None)
        while(True):
                a, b, c = b, c, choice("HT")
                yield a,b,c

niter = 100000
HHH = [0] * niter
HHT = [0] * niter

for i in range(niter):
        cont = 1
        gen = cadena()

        while( True ):
                seq = gen.next()
                if seq == ('H', 'H', 'H') and HHH[i] == 0:
                        HHH[i] = cont

                if seq == ('H', 'H', 'T') and HHT[i] == 0:
                        HHT[i] = cont

                cont += 1

                if( HHH[i] * HHT[i] > 0 ):
                        break

for x in HHH:
        print x;
for x in HHT:
        print x;
{{< / highlight >}}

La magia está en el comando `yield` en la función `cadena`. Al hacer

{{< highlight python "linenos=true" >}}
gen = cadena()
{{< / highlight >}}

se _inicia_ el iterador. Cada vez que uno llama entonces a

{{< highlight python "linenos=true" >}}
seq = gen.next()
{{< / highlight >}}

se ejecuta una iteración del bucle

{{< highlight R "linenos=true" >}}
while(True):
        a, b, c = b, c, choice("HT")
        yield a,b,c
{{< / highlight >}}

en la función `cadena`, que recuerda entre llamada y llamada el estado de las variables (internas a ella) `a`, `b` y `c` (además de devolver, como haría `return`, el valor generado.

Si tengo un poco de tiempo, veré si puedo implementar esta misma solucíón (sospecho que podría ser posible) con el [paquete iterators de R](http://cran.r-project.org/web/packages/iterators/index.html).

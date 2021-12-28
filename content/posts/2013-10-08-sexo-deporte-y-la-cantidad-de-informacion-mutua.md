---
author: Carlos J. Gil Bellosta
date: 2013-10-08 07:46:13+00:00
draft: false
title: Sexo, deporte y la cantidad de información mutua

url: /2013/10/08/sexo-deporte-y-la-cantidad-de-informacion-mutua/
categories:
- consultoría
- estadística
- r
tags:
- consultoría
- estadística
- r
---

Perdón por el titular. No soy inasequible a las modas.

La cuestión del día de hoy es la siguiente: tenemos una variable X inobservable y otra variable Y potencialmente correlacionada con X. ¿Cuánto podemos decir de X de conocida Y?

Supongamos que ambas son binarias. Si conozco Y poseo 1 bit de información. Si solo conozco X (que me da pistas sobre Y) conoceré una fracción de un bit de información (sobre Y).

Comencemos por los casos extremos. En una situación de total independencia (cuando X no dice nada de Y), tenemos...

{{< highlight R "linenos=true" >}}
    library(entropy)
    ind <- as.table(outer(c(30, 40), c(40, 30)))
    ind
    #A    B
    #A 1200  900
    #B 1600 1200
    mi.plugin(ind, unit = "log2")
    #-2.9419e-17
{{< / highlight >}}

... ¡0 bits de información!

En cambio, si Y determina completamente X, tenemos

{{< highlight R "linenos=true" >}}
    dep <- as.table(matrix(c(1000, 0, 0, 1000), 2,2))
    dep
    #A    B
    #A 1000    0
    #B    0 1000
    mi.plugin(dep, unit = "log2")
    #1
{{< / highlight >}}

... ¡1 bit de información!

Nada sorprendente bajo el sol, ¿verdad?

Ahora veamos un caso más real. Queremos saber (en un caso hipotético) si a alguien le gusta el deporte. Podemos usar como variable indirecta el sexo (sabemos que a los hombres les tiende a gustar un poco más el deporte que a las mujeres):

{{< highlight R "linenos=true" >}}
sexo.deporte <- matrix(c(4e5, 1e5, 1e5, 4e5), 2,2)
sexo.deporte <- as.table(sexo.deporte)
sexo.deporte
#A     B
#A 4e+05 1e+05
#B 1e+05 4e+05
{{< / highlight >}}

O podemos ver si una persona paga o no un canal de deporte. Si paga uno de esos canales, sabemos casi a ciencia cierta que le gusta; sin embargo, sabemos que muchos aficionados al deporte no lo hacen.

{{< highlight R "linenos=true" >}}
tvcable.deporte <- matrix(c(1e5, 1000, 4e5, 499e3), 2,2)
tvcable.deporte <- as.table(tvcable.deporte)
tvcable.deporte
# A      B
# A 100000 400000
# B   1000 499000
{{< / highlight >}}

La pregunta es: ¿qué variable aporta más información? ¿Una algo genérica que aplica a toda la población? ¿O una que permite identificar con mucha precisión a un subconjunto pequeño de ella? La respuesta depende de las tablas en cuestión, pero en este caso concreto,

{{< highlight R "linenos=true" >}}
mi.plugin(sexo.deporte, unit = "log2")
# 0.27807
mi.plugin(tvcable.deporte, unit = "log2")
# 0.10079
{{< / highlight >}}

Y la variable sexo aporta casi el triple de información que la otra.


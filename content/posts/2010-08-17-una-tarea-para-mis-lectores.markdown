---
author: Carlos J. Gil Bellosta
date: 2010-08-17 21:09:38+00:00
draft: false
title: Una tarea para mis lectores

url: /2010/08/17/una-tarea-para-mis-lectores/
categories:
- r
tags:
- r
- programación
---

Ayer me dieron los resultados de unos análisis de sangre y, contra todo pronóstico, la médica me dijo que tengo el colesterol bajo control. ¡Con razón —me dije—, si en el blog lo hago yo todo! Así que para mejorar la circulación sanguínea de mis lectores, esta entrada es un ejercicio para quienes me leen. Espero pues que, a pesar de lo vacacional de las fechas, tengan tiempo de completar lo que queda sin hacer y lo hagan constar —antes de que pase lista— en un comentario explicando sus averiguaciones.

La cosa va de lo siguiente.

A veces, programando (en este caso, en R), tienes una lista (en sentido genérico) de objetos etiquetados. Como eso de _lista de objetos_ etiquetados igual no se entiende, fabrico una:

{{< highlight R "linenos=true" >}}
n <- 100000
dat <- data.frame( id = paste( "id", 1:n, sep = "_" ),
                    valor = rnorm( n ), stringsAsFactors = F )
{{< / highlight >}}

Los objetos son los dat$valor (números en este caso) y las etiquetas, dat$id, un identificador.

En el programa (retomando el hilo), de vez en cuando, se necesita el valor correspondiente a una etiqueta. En el caso que planteo, el número de valores es grande pero cabe en memoria; las llamadas son esporádicas y los valores se recuperan de uno en uno. Y la pregunta es: ¿cuál es la manera más eficiente de obtener esos valores?

Voy a plantear varias opciones y es tarea de los lectores más diligentes explorar su rendimiento. De los valores creados anteriormente vamos a extraer los del vector

{{< highlight R "linenos=true" >}}
n.sample <- 20000
seleccion <- sample( dat$id, n.sample )
{{< / highlight >}}


uno a uno. En una situación más real, las llamadas están repartidas dentro de un código que realmente hace algo. En esta prueba nos limitaremos a crear un vector que contenga los valores correspondientes a las etiquetas seleccionadas.

Con vectores:

{{< highlight R "linenos=true" >}}
system.time( res <- sapply( seleccion,
                function( x ) dat$valor[ dat$id == seleccion ] ) )
{{< / highlight >}}

Con listas:

{{< highlight R "linenos=true" >}}
mi.lista <- sapply(dat$valor, I, simplify = F)
names(mi.lista) <- dat$id
system.time(res <- sapply(seleccion, function(x) mi.lista[[x]]))
{{< / highlight >}}


Con entornos:

{{< highlight R "linenos=true" >}}
mi.entorno.0 <- new.env()
invisible(sapply(1:n, function(i)
                assign(dat$id[i], dat$valor[i], env = mi.entorno.0)))
system.time(res <- sapply( seleccion, function( x ) mi.entorno.0[[x]]))
{{< / highlight >}}


Con el paquete data.table:

{{< highlight R "linenos=true" >}}
require(data.table)
tmp.dat <- dat
tmp.dat$id <- factor(tmp.dat$id)
mi.data.table <- data.table(tmp.dat)
setkey(mi.data.table, id)
system.time(res <- sapply(seleccion,
                function(x) mi.data.table[ J(x) ]$valor))
{{< / highlight >}}


Con _hashes_ (existe el [paquete hash](http://cran.r-project.org/web/packages/hash/index.html), pero no lo usaremos acá; no obstante, (1) internamente usa entornos como los que aquí utilizo y (2) mis lectores están invitados a explorar dicha opción, por supuesto):

{{< highlight R "linenos=true" >}}
mi.entorno.1 <- new.env( hash = T )
invisible(sapply(1:n, function(i)
                assign(dat$id[i], dat$valor[i], env = mi.entorno.1)))
system.time(res <- sapply(seleccion,
                function(x) mi.entorno.1[[x]]))
{{< / highlight >}}


¿Qué opción es la mejor? La respuesta, espero, pronto en los comentarios, espero.

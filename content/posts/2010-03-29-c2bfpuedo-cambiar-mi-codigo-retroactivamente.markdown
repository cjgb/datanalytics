---
author: Carlos J. Gil Bellosta
date: 2010-03-29 01:45:50+00:00
draft: false
title: ¿Puedo cambiar mi código retroactivamente?

url: /2010/03/29/puedo-cambiar-mi-codigo-retroactivamente/
categories:
- r
tags:
- r
---

La verdad, me gustaría, Me gustaría volver atrás y modificar algunas docenas de código en R que malescribí como un diletante por no estar al tanto de una función de R cuya verdadera utilidad descubrí recientemente (gracias le sean dadas, de nuevo, a Jorge Iván Vélez).

La verdad, no tengo excusa. Incluso [se habló de ella](http://erre-que-erre-paco.blogspot.com/2009/12/aplicar-una-funcion-una-matriz-o-array.html) en nuestro [blog hermano](http://erre-que-erre-paco.blogspot.com).

Y es que nunca me había percatado de la potencia de la función `mapply`. He aquí el problema: se tienen dos listas de la misma longitud y se quieren transformar los objetos de la primera en función de datos extraídos de los objetos correspondientes de la segunda. En los tiempos oscuros que duraron hasta anteayer, me veía abocado a utilizar un bucle que llevase la contabilidad del índice para poder recorrer ambas listas simultáneamente:

{{< highlight R "linenos=true" >}}
salida <- list()
for (i in 1:length(lista1)){
    salida <- c(salida, haz.algo.con(lista1[[i]], lista2[[i]])
}
{{< / highlight >}}


Ese horrendo pecado contra las más elementales reglas de la estética lo he cometido yo en más de una ocasión. Mea culpa. Como lo feo tiene que ser necesariamente incorrecto, dejaré que sea el mismo Jorge Iván el que nos muestre cómo hacerlo correctamente. Puede verse [aquí](http://n4.nabble.com/Using-lapply-with-two-lists-td1692883.html). Todo un placer para quienes creemos que el código también puede ser poesía.

¿Cómo haré para retroactivamente corregir todo ese mal código que he ido dejando por ahí?

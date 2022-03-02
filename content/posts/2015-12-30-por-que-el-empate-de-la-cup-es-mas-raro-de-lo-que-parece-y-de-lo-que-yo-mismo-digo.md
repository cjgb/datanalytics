---
author: Carlos J. Gil Bellosta
date: 2015-12-30 08:13:03+00:00
draft: false
title: ¿Por qué el empate de la CUP es más raro de lo que parece (y de lo que yo mismo
  digo)?

url: /2015/12/30/por-que-el-empate-de-la-cup-es-mas-raro-de-lo-que-parece-y-de-lo-que-yo-mismo-digo/
categories:
- números
tags:
- binomial
- elecciones
---

Menos el de un presunto profesor,

>La probabilidad de que 3030 votantes en la [#ANECUP](https://twitter.com/hashtag/ANECUP?src=hash) empaten con 1515 votos es 1 / 3029 = 0.00033014, lo que corresponde a un suceso imposible
>
> -- Mario Bilbao (@mario_bilbao) [December 27, 2015](https://twitter.com/mario_bilbao/status/681206256175083520)

todos los análisis que he visto al respecto ([1](http://www.elespanol.com/espana/20151228/90241027_0.html), [2](https://gallir.wordpress.com/2015/12/28/las-probabilidades-del-empate-de-la-cup/), [3](http://www.eldiario.es/piedrasdepapel/probable-empate-Asamblea-CUP_6_467263286.html)), [incluido el mío](http://www.datanalytics.com/2015/12/29/empates-electorales-sorteos-y-una-inadvertida-paradoja/), coinciden en señalar que la probabilidad de empate en el muy manido acto asambleario de la CUP es _relativamente alta_: alrededor del 1,5%. Y más todavía si se tienen en cuenta los resultados de las votaciones previas.

Es pequeña, cierto, pero menor es aún la probabilidad de que jamás ocurra algo poco probable.

Esta entrada va a servir para cuestionar esa cifra (insisto, mía también) y argumentar que la probabilidad es significativamente menor. Hay que advertir que el recurso a la distribución binomial tiene poco sentido en estos contextos. Principalmente, porque depende de un parámetro, `p`, que, ¿cómo se determina? `p` es únicamente la proporción de votantes que se decantaron por el sí. Si `p = 0.5` es solo porque hubo un empate. El argumento hiede a tautología frecuentista. La gente, como algún comentarista ha señalado, no vota de la misma manera en que una moneda que se lanza al aire repetidas veces. Existe una diferencia sustancial (i.e., de sustancia) entre ambos tipos de fenómenos aleatorios.

Si 1515 personas votaron sí, no tiene sentido calcular la probabilidad de que lo hubieran hecho 1513, que es lo que hace implícitamente el usuario de la binomial. Sí que tendría sentido, sin embargo, calcular la probabilidad de que en 3030 tiradas de una moneda apareciesen 1513 caras después de haber observado 1515 en una ronda previa de 3030 tiradas.

De hecho, además, [como indica Kiko Llaneras](http://www.elespanol.com/espana/20151228/90241027_0.html),

>En EL ESPAÑOL hemos tomado los resultados de las elecciones generales del 20 de diciembre. Nos hemos fijado en los 300 pueblos que tienen entre 3.000 y 4.000 habitantes y nos hemos hecho una pregunta: ¿En cuántos hubo un empate entre los dos partidos que quedaron primero y segundo? Sólo en uno de los 300.

Uno de trescientos está, de hecho, en el límite de la significancia estadística para la hipótesis de partida de que la probabilidad de empate es de 1.5% (dejo los detalles al lector).

Así que me planteo el siguiente problema. Una población de entre 3000 y 4000 personas (número elegido al azar uniformemente) se plantea una votación sobre una materia en disputa. El apoyo estimado de dicha propuesta está entre el 40% y el 60% (nota: un bayesiano querría reconocer conceptos en ese enunciado). Precisamente porque la propuesta está reñida y para conocer el porcentaje real de apoyo de la propueta es que se plantea la votación. La pregunta es: ¿cuál sería una buena estimación de la probabilidad de empate?

Nótese que, de entrada, la probabilidad es, a lo sumo, la mitad de 1.5%: ¡una condición necesaria para el empate es que el número de votantes sea par (algo que ningún analista advirtió, creo)!

El código que planteo es

{{< highlight R >}}
foo <- function(n){
  cuantos <- sample(desde:hasta, n, replace = T)
  p <- .4 + .2 * runif(n)
  sies <- mapply(function(a, b)
    rbinom(1, a, b), cuantos, p)
  sies == cuantos - sies
}

100 * mean(foo(1000000))
{{< / highlight >}}

La ejecución es un ejercicio para mis lectores. Solo adelanto que el resultado es más próximo a la estimación del _presunto_ que a la de los demás.

Y las notas:

* Cada cual es libre de jugar con las prioris.
* No está prohibido usar betas en lugar de uniformes.
* ¿Me dejo algo?
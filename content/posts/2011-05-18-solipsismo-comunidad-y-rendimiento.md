---
author: Carlos J. Gil Bellosta
date: 2011-05-18 07:45:20+00:00
draft: false
title: Solipsismo, comunidad y rendimiento

url: /2011/05/18/solipsismo-comunidad-y-rendimiento/
categories:
- r
tags:
- r
---

Desde esta bitácora hemos seguido atentamente el a veces espinoso asunto del rendimiento de R. De ello es muestra entradas como [ésta](http://www.datanalytics.com/2011/03/16/parentesis-corchetes-y-rendimiento-en-r/). Por eso retomamos el asunto para comentar desde una óptica distinta un análisis publicado hace un mes cuyo autor estudia la [ineficiencia de funciones básicas como la media y otras similares](http://lookingatdata.blogspot.com/2011/04/speeding-up-r-computations.html).

Y llega a conclusiones que no es necesario manifestar explícitamente a quien ejecute esto en R:







{{< highlight R >}}
x <- rnorm(50000)

foo.mean <- function(){ mean(x) }
foo.mean.int <- function(){ .Internal(mean(x)) }
foo.sum  <- function(){ sum(x) / length(x) }

system.time(tmp <- replicate(10000, foo.mean()))
system.time(tmp <- replicate(10000, foo.mean.int()))
system.time(tmp <- replicate(10000, foo.sum()))
{{< / highlight >}}







Efectivamente, la media es lenta: pierde mucho tiempo en comprobaciones, revisando opciones y casos particulares. Además, es una función genérica que tiene que encontrar el método adecuado. Todo eso supone, efectivamente, un sobrecoste.

La API de R es —relativamente— simple y rica. ¿Imagináis que hubiese 10 funciones para tomar medias en lugar de una sola con diversos parámetros con valores por defecto razonables? ¿Imagináis que la función `mean` tuviese nombres distintos en función de si su argumento contiene nulos?

Pareciere que los desarrolladores del núcleo de R han tenido más cuidado en hacer las cosas bien y han sobreponderado los requisitos de los usuarios que utilizan el _software_ de modo interactivo que los de quienes lo necesitan para exprimir montañas de datos.

Tiene cierto sentido y razón en este aspecto el autor de la entrada que comento en sustituir en su código las llamadas a `mean` por una función _ad hoc_ que suma y divide. Y así con otras funciones. De hecho, la misma política de sustitución se propugnaba en la entrada [aquí](http://www.datanalytics.com/2011/05/13/consejos-para-utilizar-r-en-produccion) comentada.

Ciertamente, es una opción. y es justificable y válida en algunas circunstancias. Pero quiero hacer constar unas objeciones que deberían también ponderar quienes estan tentados en emular los dos ejemplos que cito en los enlaces de más arriba:



* **Legibilidad y mantenibilidad:** gran parte del coste asociado al desarrollo de _software_ no está asociado a su eficiencia sino a la facilidad con que se puede entender, extender y mejorar. La potencial caja de Pandora que puede abrirse de extender la sustitución de  `mean` por `sum(x)/length(x)`a más y más complejas funciones, encierra crujir de huesos y rechinar de dientes.
* **Beneficio de las mejoras:** el uso de funciones de alto nivel, aunque pueda sufrir una penalización _ahora_, permite aprovechar las mejoras que se hagan en el _futuro_ sin tocar el código. Todo lo que se optimice _bajo el capó_ redundará en una automática y gratuita mejora de la eficiencia.

Afotunadamente, R es un proyecto colaborativo y libre. Es seguro que los desarrolladores acabarán prestando atención a ese sector de usuarios que demandan mejoras de rendimiento. Y para que eso ocurra es labor de los interesados alentar el debate y hacer manifiesta su necesidad. Espero que este mensaje contribuya positivamente a ello.

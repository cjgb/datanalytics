---
author: Carlos J. Gil Bellosta
date: 2011-10-04 07:10:42+00:00
draft: false
title: Puedes probar cualquier cosa (con paciencia)

url: /2011/10/04/puedes-probar-cualquier-cosa-con-paciencia/
categories:
- estadística
- probabilidad
tags:
- estadística
- probabilidad
- feller
---

Puedes _probar _prácticamente cualquier cosa. Con paciencia, claro. Por ejemplo, coge una moneda de tu bolsillo. Puedes _probar_ que tiene un sesgo: salen más caras (o cruces, da igual) de lo que cabría esperar.

No lo vas a probar como los gañanes, no. Lo vas a probar usando los mismos métodos con los que se aprueban los medicamentos u otras verdades relevantísimas: mostrando al mundo un p-valor pequeñajo, por debajo de 0.05. Veamos cómo.

El truco se llama _parada condicional_: puedes hacer prueba tras prueba hasta que salga lo que buscas. Y entonces decir ¡eureka! La probabilidad de que puedas hacerlo (en algún momento) es, dicen que decía W. Feller, 1.

Pero vamos a ver si es cierto. Comenzamos seleccionando un número mínimo de pruebas, `n.min` y, para no caer en bucles infinitos un número máximo, `n.max`. Luego, usando el código

{{< highlight R "linenos=true" >}}
n.max <- 1000000
n.min <- 100

prop <- qbinom( 0.05, n.min:n.max, lower.tail = F, 0.5 )
prop <- prop / n.min:n.max
prop <- 100 * ( prop - 0.5 )

plot( log( prop ), type = "l", lwd = 2,
      xlab = "número de pruebas", ylab = "log delta",
      main = "% de desviación vs. número de pruebas")
{{< / highlight >}}

obtendremos para cada valor entre `n.min` y `n.max` la desviación (positiva) con respecto al 50% esperado bajo la hipótesis nula —la moneda no está sesgada— suficiente como para que se encienda la luz roja del p-valor:

[![](/wp-uploads/2011/09/optimal_stopping.png#center)
](/wp-uploads/2011/09/optimal_stopping.png#center)

Por ejemplo, como `prop[900]` es 2.55, bastaría con que en la prueba número 1000 (= 900 + 100) obtuviésemos una proporción del 52.55% de caras como para poder rechazar la hipótesis de que la moneda no está sesgada al límite usual de confianza.

Ahora podemos comenzar a hacer experimentos:

{{< highlight R "linenos=true" >}}
foo <- function( ){
  x <- 100 * ( ( cumsum( rbinom( n.max, 1, 0.5 ) ) / 1:n.max )[ n.min:n.max ] - 0.5 )
  min( which( x > prop ) )
}

res <- replicate( 1000, foo() )
{{< / highlight >}}

Tras 1000 de ellos, la variable `res` contiene el número de pruebas que hay que hacer para conseguir rebasar el porcentaje crítico. En mis pruebas, es necesario hacer más de `n.max` ensayos 428 veces. Pero en más de la mitad de las ocasiones, el resto, es necesario realizar un número menor de ensayos antes de llegar al momento feliz de la _prueba irrefutable_.

La distribución del número de ensayos que es necesario realizar antes de alcanzar un p-valor suficiente tiene una cola muy gruesa, más, por ejemplo, que la distribución de Cauchy (que es una distribución sin media). Es decir, la paciencia necesaria para probar algo que casi seguro que no es cierto es sustancial.

Pero no deja de ser cierto que hay [gente con infinita paciencia](http://ejp.org.uk/index.php?page=Current%20Issue) que no se cansarán nunca de probar, probar y probar desoyendo las admoniciones de Feller y el eco que de ellas hago en estas páginas.

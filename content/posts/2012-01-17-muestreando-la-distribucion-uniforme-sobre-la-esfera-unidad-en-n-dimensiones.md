---
author: Carlos J. Gil Bellosta
date: 2012-01-17 06:56:36+00:00
draft: false
title: Muestreando la distribución uniforme sobre la esfera unidad en n dimensiones

url: /2012/01/17/muestreando-la-distribucion-uniforme-sobre-la-esfera-unidad-en-n-dimensiones/
categories:
- probabilidad
- r
tags:
- probabilidad
- r
- simulación
---

Debo esta entrada a la diligencia de [Juanjo Gibaja](http://jjgibaja.net/), que se tomó la molestia de ubicar los teoremas relevantes en el libro _Simulation and the Monte Carlo Method_ de Rubinstein y Kroese.

Esencialmente, como la distribución normal multivariante (con matriz de covarianzas `I`) es simétrica, entonces, dadas $latex X_1,\dots, X_m \sim N( 0, I_n )$ independientes, los `m` puntos del espacion `n`-dimensional $latex X_i/\| X_i \|$ siguen una distribución uniforme sobre su esfera (su superficie, vale la pena reiterar) unidad.

Para muestrear la bola `n`-dimensional, hay que muestrear primero la esfera (como en el párrafo anterior) y luego generar `m` variables aletorias $latex U_i$ con la distribución uniforme. La muestra en la esfera unidad será entonces $U_i^{1/n} X_i/\| X_i \|$.

Efectivamente, $latex X_i/\| X_i \|$ proporciona la dirección. Y en cuanto a la distancia con respecto al centro hay que tener encuenta que la bola de radio r < 1 contiene sólo un $latex r^n$ del volumen de la bola unidad. Como $latex P( U_i < r ) = r$, entonces $latex P( U^{1/n} < r ) = P( U < r^n ) = r^n$.

[![](/wp-uploads/2012/01/muestra_uniforme_esfera.png#center)
](/wp-uploads/2012/01/muestra_uniforme_esfera.png#center)

En R,

{{< highlight R "linenos=true" >}}
n <- 100
d <- 2

x <- matrix( rnorm(d * n), n, d )
x.norma <- sqrt( rowSums( x^2 ) )
u <- runif( n )

plot( x / x.norma, col = "red", xlab = "", ylab = "" )
points( x * u^{1/d} / x.norma, col = "blue" )
{{< / highlight >}}

Y si alguien quiere ver las rodajas de una distribución uniforme sobre la esfera 5-dimensional, por ejemplo, puede ejecutar

{{< highlight R "linenos=true" >}}
n <- 100
d <- 5

x <- matrix( rnorm(d * n), n, d )
x.norma <- sqrt( rowSums( x^2 ) )
u <- runif( n )

plot( data.frame(x * u^{1/d}/ x.norma ))
{{< / highlight >}}

¿Le sugiere el gráfico (p.e., los rangos de las proyecciones sobre los distintos ejes) algún comentario?

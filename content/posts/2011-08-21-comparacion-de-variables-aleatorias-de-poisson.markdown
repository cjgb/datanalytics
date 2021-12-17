---
author: Carlos J. Gil Bellosta
date: 2011-08-21 07:53:08+00:00
draft: false
title: Comparación de variables aleatorias de Poisson

url: /2011/08/21/comparacion-de-variables-aleatorias-de-poisson/
categories:
- estadística
- probabilidad
- r
tags:
- estadística
- poisson
- probabilidad
- r
---

El otro día apareció publicado en Significance una [comparación entre el número de tarjetas recibidas por las selecciones inglesas de fúlbol masculina y femenina](http://www.significancemagazine.org/details/webexclusive/1248403/The-fairer-sex-Comparing-cautions-in-men-and-womens-football.html).

Los hombres habían recibido 196 tarjetas en los 48 partidos disputados en el periodo de referencia y las mujeres, 40 en 24 partidos. El promedio de tarjetas, por lo tanto, de 4.1 y 1.7 respectivamente. Y la pregunta es: ¿hay motivos razonables para pensar que las mujeres juegan menos sucio?

Aparentemente, la distribución de tarjetas en un partido sigue una distribución de Poisson. Esto es un inconveniente (relativo) porque en los cursos básicos de estadística nos enseñaron a comparar medias de variables distribuidas normalmente o proporciones cuando siguen una distribución binomial. Pero... ¿cómo se hace en este caso?

Vamos a revisar este problema desde dos puntos de vista distintos: el del impaciente y el de quien quiera saber más. El pirmero querrá comenzar a usar R de inmediato y cuenta con la función poisson.test con la que puede hacer:



* `poisson.test( 3, r = 4.1 )` indica hasta qué punto es razonable suponer que el parámetro de la distribución de Poisson es 4.1 cuando se han mostrado tres tarjetas en un partido.
* `poisson.test( 40, T = 24, r = 4.1 )` para ver si cabe esperar una ratio de 4.1 tarjetas por partido cuando se han obtenido 40 en 24 partidos. A quien conozca las propiedades de las variables aleatorias de Poisson no le sorprenderá que advierta que dicha expresión coincida, esencialmente, con `poisson.test( 40, r = 24 *4.1 )`: la suma de 24 variables aleatorias de Poisson de parámetro 4.1 es una variable aleatoria de Poisson con parámetro 24 * 4.1.
* `poisson.test( c( 196, 40 ), T = c( 48, 24 ) )`, que contrasta la hipótesis de que los ratios de tarjetas obtenidos, 196 / 48 y 40 / 24 sean iguales.
* `poisson.test( c( 196, 40 ), T = c( 48, 24 ), r = 2 )` que contrasta la hipótesis de que el ratio _verdadero entre las tarjetas entre hombres y mujeres sea de 2 cuando se han obtenido ratios de 196 / 48 y 40 / 24 para unas y otras.

Para los dos últimos constrastes, poisson.test utiliza la siguiente propiedad de la distribución de Poisson. Supongamos que tenemos dos variables aleatorias de Poisson con parámetros $latex \lambda$ $latex r \lambda$ y que en $latex p_1$ y $latex p_2$ muestras independientes de cada una de ellas ($latex p$ significa númeropartidos en nuestro contexto) se han obtenido un total de $latex x_1$ y $latex x_2$ casos (tarjetas). Entonces


$$ P_\lambda( x_1, x_2 ) = \exp(-p_1 \lambda ) \frac{ (p_1 \lambda)^{x_1} }{ x_1! } \exp(-p_2 r \lambda ) \frac{ (p_2 r \lambda)^{x_2} }{ x_2! } = $$
$$ = \frac{ ( x_1 + x_2 )! }{ x_1! x_2! } \left( \frac{ p_1}{ p_1 + r p_2 } \right)^{x_1} \left( \frac{ rp_2}{ p_1 + r p_2 } \right)^{x_2} \exp({ -(p_1 + rp_2 ) \lambda})   \frac{ ( (p_1 + r p_2 )\lambda)^{x_1 + x_2} }{ ( x_1 + x_2)! },$$


expresión que puede partirse en dos. Por un lado,


$$ \exp ({ -(p_1 + rp_2 ) \lambda})  \frac{ ( (p_1 + r p_2 )\lambda)^{x_1 + x_2} }{ ( x_1 + x_2)! },$$


que es la probabilidad de que el número total de tarjetas sume x_1 + x_2, que sigue una distribución de Poisson con parámetro $latex (p_1 + r p_2 )\lambda$.

Por el otro, se tiene


$$ \frac{ ( x_1 + x_2 )! }{ x_1! x_2! } \left( \frac{ p_1}{ p_1 + r p_2 } \right)^{x_1} \left( \frac{ rp_2}{ p_1 + r p_2 } \right)^{x_2}$$


que es la probabilidad de $latex x_1$ éxitos en $latex x_1 + x_2$ intentos bajo una ley binomial con probabilidad $latex p_1 / (p_1 + r p_2 )$ y que coincide con la probabilidad condicionada $latex P_\lambda( x_1, x_2 | x_1 + x_2 )$, que no depende de $latex \lambda$ y permite ver hasta qué punto valores desiguales de $latex x_1$ y $latex x_2$ pueden o no ser indicio de lo razonable de la hipótesis de partida acerca del valor de $latex r$. De hecho, internamente, la función `poisson.test` utiliza `binom.test` en tales casos.

El tener que condicionar por valor de $latex x_1 + x_2$ para eliminar la dependencia con respecto a $latex \lambda$ es equivalente a restringir el parámetro a su valor más verosímil. Supongo que a los bayesianos les irrita esta manera de proceder y tienen sus propias [alternativas](http://stats.stackexchange.com/questions/10766/two-poisson-random-variables-and-likelihood-ratio-test).

Acabo la discusión indicando que existen [otros procedimientos para afrontar este tipo de problemas](http://sankhya.isical.ac.in/search/64a3/64a3037.pdf).

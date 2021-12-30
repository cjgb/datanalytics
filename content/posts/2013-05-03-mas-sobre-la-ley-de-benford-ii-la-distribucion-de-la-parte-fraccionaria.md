---
author: Carlos J. Gil Bellosta
date: 2013-05-03 07:21:09+00:00
draft: false
title: 'Más sobre la ley de Benford (II): la distribución de la parte fraccionaria'

url: /2013/05/03/mas-sobre-la-ley-de-benford-ii-la-distribucion-de-la-parte-fraccionaria/
categories:
- estadística
- r
tags:
- estadística
- ley de benford
- r
---

Continuamos hoy [nuestra serie sobre la llamada ley de Benford](http://www.datanalytics.com/2013/04/16/mas-sobre-la-ley-de-benford-i-una-condicion-suficiente) discutiendo la distribución de la parte fraccionaria de las muestras de una distribución.

La parte fraccionaria de un número es, para entendernos, lo que va detrás de la coma. Técnicamente, `x - floor(x)`. ¿Le sorprendería a alguien la parte fraccionaria de una secuencia _aleatoria_ de números no tenga una distribución uniforme sobre [0,1)?

Obviamente, si los números son enteros no. ¿Pero si siguen la distribución normal? Se puede probar, de hecho, que si la serie sigue una distribución de probabilidad que sea

* **regular**, es decir, que no tenga picos extraños y, más en concreto, cuya función de densidad crezca hasta cierto punto y decrezca de él en adelante y
* **extendida**, es decir, que cubra un rango amplio de valores (p.e., la recta real entera),

entonces la distribución de la parte fraccionaria de sus muestras serán aproximadamente uniformes. Y lo serán tanto más cuanto menor sea el máximo de la función de distribución. La referencia, el artículo [_Pourquoi la loi de Benford n’est pas mystérieuse_](http://www.ehess.fr/revue-msh/pdf/N182R1280.pdf?) de Nicolas Gauvrit y Jean-Paul Delahaye.

Esto se verifica fácilmente en ciertos casos. Por ejemplo,

{{< highlight R "linenos=true" >}}
x <- rnorm(100000)
x <- x - floor(x)

par(mfrow=c(1,2))
hist(x, col = "grey")
qqplot(x, runif(100000), main = "qqplot")
{{< / highlight >}}

que produce

[![](/wp-uploads/2013/05/dist_parte_fraccionaria.png#center)
](/wp-uploads/2013/05/dist_parte_fraccionaria.png#center)

En la siguiente entrega analizaremos qué tiene que ver esto con la ley de Benford.
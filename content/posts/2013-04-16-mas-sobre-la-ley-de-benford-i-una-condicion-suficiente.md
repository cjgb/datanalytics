---
author: Carlos J. Gil Bellosta
date: 2013-04-16 07:44:50+00:00
draft: false
title: 'Más sobre la ley de Benford (I): una condición suficiente'

url: /2013/04/16/mas-sobre-la-ley-de-benford-i-una-condicion-suficiente/
categories:
- estadística
- r
tags:
- estadística
- ley de benford
- r
---

Las circunstancias —frente a las que soy dócil como el que más— me conducen a escribir de nuevo sobre la [Ley de Benford](http://www.datanalytics.com/blog/tag/ley-de-benford/). En concreto, voy a traer a la atención de mis lectores una condición suficiente para que se cumpla. Y de ella extraeremos conclusiones tal vez sorprendentes en sucesivas entradas de la serie que con esta inicio.

Dado un número (p.e., 1234), lo podemos descomponer en dos: una potencia de 10 y otro entre 0 y 10:

{{< highlight R "linenos=true" >}}
n <- 1234     # por ejemplo
suelo <- floor(log10(n))
parte.decimal <- log10(n) - suelo

10^suelo            # una potencia de 10
10^parte.decimal    # entre 0 y 10
{{< / highlight >}}

Si lo que llamamos `parte.decimal` tiene una distribución uniforme en el intervalo (0,1), entonces la probabilidad de que un número comience por, por ejemplo, 3, será

$$ P\left( 10^{\text{parte.decimal}} \in [3,4) \right),$$

o bien

$$ P\left( \log_{10} 3 \le \text{parte.decimal} < \log_{10} 4 \right),$$

que no es otra cosa que $latex log_{10} 4- log_{10} 3$, el valor que corresponde a la [definición estándar de la ley en cuestión](http://es.wikipedia.org/wiki/Ley_de_Benford).

Así que, en resumen:

>Una condición suficiente para que se verifique la Ley de Benford para una serie de valores $latex x_1, \dots, x_n$ es que la parte decimal de los valores $latex \log_{10} x_i$ tenga una distribución uniforme sobre el intervalo (0,1).

(Nota: estoy obviando los signos).

---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2023-06-13
lastmod: '2025-04-06T19:04:36.019662'
related:
- 2019-12-04-p-valores-y-decisiones.md
- 2021-02-25-sobre-sumas-de-cuadrados-de-normales-con-varianzas-desiguales.md
- 2017-04-12-experimentos-con-extremely-small-data-la-media-muestral-de-pocas-betas.md
- 2012-08-24-p-valores-bajo-la-hipotesis-nula-tras-multiples-comparaciones.md
- 2020-06-29-sobremuestreando-x-y-no-y.md
tags:
- pearson
- p-valores
- weldon
- dados
- r
- multinomial
title: Si Pearson hubiese tenido un ordenador como el mío...
url: /2023/06/13/pearson-ordenadores/
---

... muchas cosas serían muy distintas hoy en día. Hoy quiero elaborar sobre su artículo de 1900 [_X. On the criterion that a given system of deviations from the probable in the case of a correlated system of variables is such that it can be reasonably supposed to have arisen from random sampling_](http://dx.doi.org/10.1080/14786440009463897)
famoso por nada menos que introducir el concepto de p-valor y el uso de la $\chi^2$ para medir la bondad de ajuste.

En el artículo hay una construcción teórica que no me he tomado la molestia de leer con detalle y algunos ejemplos, siendo el primero de ellos

![](/wp-uploads/2023/pearson-p-valor.png#center)

Para resolverlo, usa ---¡por primera vez!--- el test de la $\chi^2$ para llegar a un p-valor ---o, en su nomenclatura, una P--- de 0.000016. Pero, ¿cómo se podría llegar a un resultado similar aplicando primeros principios y sin la perífrasis matemática a la que se vio abocado Pearson por no tener ordenador?

Primero, los datos de partida:

{{< highlight r >}}
weldon <- c(
     185, 1149, 3265, 5475,
    6114, 5194, 3067, 1331,
     403,  105,   14,    4,
       0)
{{< / highlight >}}

Esos datos, de estar los datos bien calibrados, deberían ser producto de un proceso estocástico

$$D \sim \text{multinomial}(p_0, \dots, p_{12})$$

donde el vector $(p_i)$ es

{{< highlight r >}}
probs <- dbinom(0:12, 12, 1/3)
{{< / highlight >}}

La probabilidad de la tirada en cuestión es

{{< highlight r >}}
p_weldon <- dmultinom(weldon, sum(weldon), probs)
p_weldon
#8.308909e-28
{{< / highlight >}}

es decir, un número ínfimo. Aunque dicha probabilidad no nos dice gran cosa. De hecho, resultado más probable, el _central_ tiene una probabilidad igualmente ínfima:

{{< highlight r >}}
dmultinom(
    round(probs * sum(weldon)),
    sum(round(probs * sum(weldon))),
    probs)
#3.682668e-19
{{< / highlight >}}

Así que uno puede preguntarse: de repetirse el experimento del Sr. Weldon muchas veces, ¿en qué proporción de los casos se obtendría una probabilidad menor? Y para ello, basta con hacer

{{< highlight r >}}
res <- replicate(
  10000,
  dmultinom(
    rmultinom(1, sum(weldon), probs),
    sum(weldon), probs))

mean(res < p_weldon)
#1e-04
{{< / highlight >}}

Y nada más. De modo que si Pearson hubiese tenido ordenadores, hoy estaríamos prestando más cuidado a modelar con mimo el proceso aleatorio que genera los datos y menos a buscar en recetarios de métodos que resuelven problemas que no nos paramos a pensar que ya no tenemos.
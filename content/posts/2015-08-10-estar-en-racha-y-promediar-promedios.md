---
author: Carlos J. Gil Bellosta
categories:
- probabilidad
date: 2015-08-10 08:13:27+00:00
draft: false
lastmod: '2025-04-06T18:49:56.044212'
related:
- 2018-10-10-un-resultado-probabilistico-contraintuitivo-parte-i.md
- 2014-02-12-de-ratios-apuestas-y-riesgos.md
- 2024-12-19-promediar-predicciones.md
- 2013-11-22-un-pequeno-problema-de-probabilidad.md
- 2019-12-04-p-valores-y-decisiones.md
tags:
- probabilidad
- r
title: Estar en racha (y promediar promedios)
url: /2015/08/10/estar-en-racha-y-promediar-promedios/
---

Suponemos que observamos rachas de longitud `2 + rpois(1, 10)` de un juego en el que se tiene éxito (1) o se fracasa (0) con probabilidad 1/2. Nos interesa saber si existe eso de las _rachas de suerte_, es decir, si es más probable que a un éxito le suceda otro o lo contrario.

El observador ve rachas y calcula el número de veces que a un éxito le sigue un éxito y el número de veces que a un éxito le sigue un fracaso así:

{{< highlight R >}}
racha <- function(){
    n.tiros <- 2 + rpois(1, 10)
    x <- rbinom(n.tiros, 1, 0.5)
    #print(x)
    uno.uno  <- sapply(1:(n.tiros - 1),
                        function(i) all(x[i:(i+1)] == c(1,1)))
    uno.cero <- sapply(1:(n.tiros - 1),
                        function(i) all(x[i:(i+1)] == c(1,0)))

    c(sum(uno.cero), sum(uno.uno))
}

res <- data.frame(t(replicate(100000, racha())))
{{< / highlight >}}

Por supuesto, ignora los casos en que no sucede ningún éxito, donde no hay sustancia para distinguir si hay o no rachas:

{{< highlight R >}}
res <- res[rowSums(res) > 0, ]
{{< / highlight >}}

Y sí, como cabe esperar, el número de secuencias éxito-éxito viene ser el mismo que el de secuencias éxito-fracaso:

{{< highlight R >}}
colSums(res)
#    X1     X2
# 274366 275400
{{< / highlight >}}

Ahora bien, nuestro observador no es capaz de sumar el número de combinaciones éxito-éxito y éxito-fracaso. Nuestro observador ve las tiradas una a una y calcula las probabilidades de obtener una combinación éxito-éxito, es decir,

{{< highlight R >}}
probs <- res[,2] / (rowSums(res))
{{< / highlight >}}

y en su cabeza se hace una idea de lo probable que es una racha éxito-éxito promediando dichas probabilidades así:

{{< highlight R >}}
mean(probs)
{{< / highlight >}}

¿Qué obtiene? Un medio, ¿verdad?

Pues no.
---
author: Carlos J. Gil Bellosta
date: 2019-05-07 09:13:34+00:00
draft: false
title: Elecciones e índice (supernaíf) de Shapley

url: /2019/05/07/elecciones-e-indice-supernaif-de-shapley/
categories:
- estadística
- r
tags:
- atribución
- paquetes
- r
- shapley
- teoría de juegos
---




Aprovechando que el paquete [`GameTheoryAllocation`](https://cran.r-project.org/package=GameTheoryAllocation) ha emergido de mi FIFO de pendientes a los pocos días de conocerse los resultados de las [adjetivo superlativizado omitidísimo] elecciones generales, voy a calcular de la manera más naíf que se me ocurre el [índice de Shapley](https://en.wikipedia.org/wiki/Shapley_value) de los distintos partidos. Que es:

![](/wp-uploads/2019/05/indice_shapley.png#center)

Al  menos, de acuerdo con el siguiente código:

{{< highlight R >}}
library(GameTheoryAllocation)

partidos <- c(123, 66, 57, 35, 24, 15, 7, 7,
              6, 4, 2, 2, 1, 1)
names(partidos) <- c("psoe", "pp", "cs", "iu",
                      "vox", "erc", "epc", "ciu",
                      "pnv", "hb", "cc", "na",
                      "compr", "prc")

coaliciones <- coalitions(length(partidos))
tmp <- coaliciones$Binary

profit <- tmp %*% partidos
profit <- 1 * (profit > 175)

res <- Shapley_value(profit, game = "profit")

res <- as.vector(res)
names(res) <- names(partidos)
res <- rev(res)

dotchart(res, labels = names(res),
          main = "naive shapley index \n elecciones 2019")
{{< / highlight >}}

Lo del índice de Shapley, de ignorarlo, lo tendréis que consultar por vuestra cuenta.  Al menos, para saber por qué no debería usarse tan frecuentemente (en problemas de atribución, entre otros).

Y lo de naíf viene a cuento de en lo anterior se ha partido de varias hipótesis poco realistas. Entre ellas:

* Que  los partidos colaboran y están dispuestos a colaborar. Sin embargo, es probable que ciertos partidos se nieguen en principio a coordinarse (piénsese en Vox y como quiera que se llame ahora Herri Batasuna; o, en muchos asuntos, entre PP y PSOE).
* Que no se tiene en cuenta la posibilidad de alcanzar mayorías simples (dado que los partidos pueden abstenerse).

Por lo tanto, una versión menos naíf del código anterior debería reemplazar la definición `profit <- 1 * (profit > 175)` por una fórmula más compleja. Pero no seré yo...
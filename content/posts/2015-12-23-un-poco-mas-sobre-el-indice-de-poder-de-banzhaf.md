---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2015-12-23 08:13:51+00:00
draft: false
lastmod: '2025-04-06T18:52:25.489635'
related:
- 2012-04-04-de-dhondt-a-banzhaf.md
- 2015-12-22-coaliciones-de-banzhaf-en-el-20d.md
- 2015-05-20-banzhaf-y-las-elecciones-que-se-nos-vienen.md
- 2019-05-07-elecciones-e-indice-supernaif-de-shapley.md
- 2017-01-25-el-numero-efectivo-de-partidos.md
tags:
- banzhaf
- política
- r
title: Un poco más sobre el índice de poder de Banzhaf
url: /2015/12/23/un-poco-mas-sobre-el-indice-de-poder-de-banzhaf/
---

En el año 2012 escribí [esto](http://www.datanalytics.com/2012/04/04/de-dhondt-a-banzhaf/), que incluye

>El índice de Banzhaf para un determinado partido político mide su poder en términos del porcentaje de las posibles alianzas mínimas ganadoras en las que participa dentro de su universo total. Una alizanza es ganadora cuando reúne más de la mitad de los votos. Y es mínima cuando todos sus integrantes son necesarios para que sea ganadora; excluye, por ejemplo, la alianza trivial formada por todos los partidos.

Ni idea de dónde saqué eso. Ni siquiera descarto que fuese una malinterpretación de algo donde se decía otra cosa. De hecho, en el enlace que acompaña al párrafo, efectivamente, dice otra cosa.

Merecido es que reimplemente la función teniendo encuenta la que parece ser la verdadera definición del índice. Es la siguiente:

{{< highlight R >}}
banzhaf <- function(x, mayoria = sum(x) / 2){
  tmp <- rep(list(c(TRUE, FALSE)), length(x))
  tmp <- expand.grid(tmp)
  tmp <- tmp[apply(tmp, 1, function(i) sum(x[i])) > mayoria, ]

  totales <- apply(tmp, 1, function(i) sum(x[i]))

  res <- sapply(1:length(x), function(i) sum(tmp[,i] & (totales - x[i] < mayoria)))
  res / sum(res)
}
{{< / highlight >}}

Y prometo que la función da [los mismos resultados que los ejemplos que aparecen en la Wikipedia](https://en.wikipedia.org/wiki/Banzhaf_power_index). Ahora,


{{< highlight R >}}
escannos <- c(123, 90, 69, 40, 9, 8, 6, 2, 2, 1)
res <- banzhaf(escannos)
names(res) <- c( "pp", "psoe", "pod", "c's", "erc", "dl", "pnv", "iu", "bildu", "cc")
{{< / highlight >}}

etc.

Pido mil excusas por la confusión que haya contribuido a generar y agradezco a Juanjo y a Alanítico, que en los comentarios a [esto](http://www.datanalytics.com/2015/12/22/coaliciones-de-banzhaf-en-el-20d/) me pusieron sobre la pista del problema.

Finalmente, creo que se le podría aplicar eso de _se non è vero, è ven trovato_ al criterio de poder que atribuí a Banzhaf más arriba y, tal vez, con algunas correcciones (p.e., ponderar adecuadamente el peso de los partidos en las coaliciones mínimas: menor cuantos más partidos entren en ellas), pueda ser incluso más realista que otros para determinadas coyunturas.
---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2015-12-22 08:13:22+00:00
draft: false
lastmod: '2025-04-06T19:11:41.554359'
related:
- 2015-12-23-un-poco-mas-sobre-el-indice-de-poder-de-banzhaf.md
- 2012-04-04-de-dhondt-a-banzhaf.md
- 2015-05-20-banzhaf-y-las-elecciones-que-se-nos-vienen.md
- 2019-05-07-elecciones-e-indice-supernaif-de-shapley.md
- 2015-12-30-por-que-el-empate-de-la-cup-es-mas-raro-de-lo-que-parece-y-de-lo-que-yo-mismo-digo.md
tags:
- banzhaf
- política
- r
title: Coaliciones de Banzhaf en el 20D
url: /2015/12/22/coaliciones-de-banzhaf-en-el-20d/
---

Usando [código de una entrada anterior](http://www.datanalytics.com/2015/05/20/banzhaf-y-las-elecciones-que-se-nos-vienen/) voy a medir [el poder de cada partido político de acuerdo con Banzhaf](https://en.wikipedia.org/wiki/Banzhaf_power_index) tras las elecciones de diciembre de 2015.

{{< highlight R >}}
escannos <- c(123, 90, 69, 40, 9, 8, 6, 2, 2, 1)
names(escannos) <- c( "pp", "psoe", "pod", "c's",
    "erc", "dl", "pnv", "iu", "bildu", "cc")
banzhaf(escannos)
{{< / highlight >}}


da 14 _coaliciones mínimas_,

{{< highlight R >}}
pp psoe
pp pod
pp c's erc dl
pp c's erc pnv
pp c's erc iu bildu
pp c's dl pnv
pp c's dl iu bildu cc
psoe pod c's
psoe pod erc dl
psoe pod erc pnv iu
psoe pod erc pnv bildu
psoe pod dl pnv iu bildu
psoe pod dl pnv iu cc
psoe pod dl pnv bildu cc
{{< / highlight >}}

y un reparto de _poder_ que queda de esta manera:

{{< highlight R >}}
 psoe   pod    pp   pnv    dl   erc   c's    iu bildu    cc
 57.1  57.1  50.0  50.0  50.0  42.8  42.8  35.7  35.7  21.4
{{< / highlight >}}

Gráficamente,

[![banzhaf_2015](/wp-uploads/2015/12/banzhaf_2015.png#center)
](/wp-uploads/2015/12/banzhaf_2015.png#center)

Y una nota: _coaliciones mínimas_ no significa _coaliciones probables_; de hecho, obviamente, las hay imposibles.
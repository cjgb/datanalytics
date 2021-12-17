---
author: Carlos J. Gil Bellosta
date: 2015-12-22 08:13:22+00:00
draft: false
title: Coaliciones de Banzhaf en el 20D

url: /2015/12/22/coaliciones-de-banzhaf-en-el-20d/
categories:
- r
tags:
- banzhaf
- política
- r
---

Usando [código de una entrada anterior](http://www.datanalytics.com/2015/05/20/banzhaf-y-las-elecciones-que-se-nos-vienen/) voy a medir [el poder de cada partido político de acuerdo con Banzhaf](https://en.wikipedia.org/wiki/Banzhaf_power_index) tras las elecciones de diciembre de 2015.



    escannos <- c(123, 90, 69, 40, 9, 8, 6, 2, 2, 1)
    names(escannos) <- c( "pp", "psoe", "pod", "c's", "erc", "dl", "pnv", "iu", "bildu", "cc")
    banzhaf(escannos)



da 14 _coaliciones mínimas_,
`
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
`
y un reparto de _poder_ que queda de esta manera:
`
 psoe   pod    pp   pnv    dl   erc   c's    iu bildu    cc
 57.1  57.1  50.0  50.0  50.0  42.8  42.8  35.7  35.7  21.4
`

Gráficamente,

[![banzhaf_2015](/wp-uploads/2015/12/banzhaf_2015.png)
](/wp-uploads/2015/12/banzhaf_2015.png)

Y una nota: _coaliciones mínimas_ no significa _coaliciones probables_; de hecho, obviamente, las hay imposibles.

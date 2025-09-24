---
author: Carlos J. Gil Bellosta
categories:
- ciencia de datos
- r
date: 2015-09-14 08:13:50+00:00
draft: false
lastmod: '2025-04-06T19:09:18.881520'
related:
- 2014-06-19-factorizaciones-positivas-de-matrices-igualmente-positivas.md
- 2019-01-24-nmds-y-un-poquito-mas-alla.md
- 2014-07-16-dos-descomposiciones-positivas-de-tablas-de-contingencia.md
- 2018-10-04-embeddings-y-analisis-del-carrito-de-la-compra.md
- 2020-07-21-analisis-de-arquetipos.md
tags:
- encuestas
- ciencia de datos
- nmf
- paquetes
- r
- svd
title: 'NMF: una técnica mergente de análisis no supervisado'
url: /2015/09/14/nmf-una-tecnica-mergente-de-analisis-no-supervisado/
---

[N]NMF (se encuentra con una o dos enes) es una técnica de análisis no supervisado emergente. Se cuenta [entre mis favoritas](http://www.datanalytics.com/tag/nmf/).

[N]NMF significa _non negative matrix factorization_ y, como [SVD](https://en.wikipedia.org/wiki/Singular_value_decomposition), descompone una matriz `M` como `UDV'`. Solo que, en este caso, las entradas de `M` son todas positivas. Y la descomposición es `UV'`, donde las entradas de ambas matrices son también positivas.

¿Qué tipo de matrices tienen entradas estrictamente positivas?

* Las resultantes de cuestionarios donde sujetos (filas) valoran (de 0 a 10) objetos, propuestas, etc. (columnas).
* Las que representan clientes (filas) que compran (un determinado número >= 0) de productos (columnas).
* ...

Y acabo con un instrumento (el [paquete `NMF`](https://cran.r-project.org/web/packages/NMF/index.html) de R) y el [análisis de una encuesta](http://www.oreilly.com/data/free/files/analyzing-the-analyzers.pdf) realizado con dicha técnica para que la veáis en acción.
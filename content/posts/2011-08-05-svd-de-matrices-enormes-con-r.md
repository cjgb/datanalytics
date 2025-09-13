---
author: Carlos J. Gil Bellosta
categories:
- ciencia de datos
- estadística
- r
date: 2011-08-05 07:38:55+00:00
draft: false
lastmod: '2025-04-06T18:48:34.804725'
related:
- 2015-03-24-compresion-con-svd.md
- 2010-01-26-r-y-conjuntos-de-datos-grandes.md
- 2010-03-07-c2bfsabes-estadistica-c2bfquieres-ganar-100k-dolares-pues-lee.md
- 2017-09-06-python-y-r-una-perspectiva-markoviana.md
- 2020-04-22-reduccion-de-la-dimensionalidad.md
tags:
- ciencia de datos
- r
- svd
- netflix
title: SVD de matrices enormes con R
url: /2011/08/05/svd-de-matrices-enormes-con-r/
---

Supongo que mis lectores habrán leído acerca del [_Netflix Prize_](http://en.wikipedia.org/wiki/Netflix_Prize). En el vídeo de este viernes se ilustra cómo se puede R para implementar la parte más computacionalmente intensiva de [la solución ganadora](http://www.commendo.at/UserFiles/commendo/File/GrandPrize2009_BigChaos.pdf) utilizando el [paquete irlba](http://cran.r-project.org/web/packages/irlba/index.html), la descomposición de la matriz de datos en sus componentes singulares (más propiamente, obtener algunas de ellas).

{{< youtube id="ipkuRqYT8_I">}}
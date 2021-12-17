---
author: Carlos J. Gil Bellosta
date: 2018-07-20 08:13:58+00:00
draft: false
title: 'kamila: Clústering con variables categóricas'

url: /2018/07/20/kamila-clustering-con-variables-categoricas/
categories:
- estadística
- r
tags:
- cluster
- estadística
- paquetes
- r
---

La codificación de las variables categóricas en problemas de clústering es la fuente de la mayor parte de los problemas con que se encuentran los desdichados que se ven forzados a aplicar este tipo de técnicas.

Existen algoritmos que tratan de resolver el problema sin necesidad de realizar codificaciones numéricas. [`kamila`](https://cran.r-project.org/web/packages/kamila/index.html) es un paquete de R que implementa uno de ellos. El artículo que lo acompaña, [_A semiparametric method for clustering mixed data_](https://link.springer.com/article/10.1007/s10994-016-5575-7#Sec5) aporta los detalles, que en resumen son:



 	  * Para las variables continuas, se usa algo parecido a k-medias (que viene a ser también como usar una mezcla de gaussianas).
 	  * Para las categóricas, se buscan distribuciones multinomiales (dicho de otra manera, se modelan las variables categóricas como mezclas de multinomiales).
 	  * Los clústers están definidos por parejas de las anteriores.

No lo he probado, pero tiene buena pinta. Al menos, mejor que la habitual chocolatada.

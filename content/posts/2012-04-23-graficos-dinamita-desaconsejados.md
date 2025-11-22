---
author: Carlos J. Gil Bellosta
categories:
- gráficos
date: 2012-04-23 06:41:01+00:00
draft: false
lastmod: '2025-04-06T19:11:07.425228'
related:
- 2014-11-19-dime-que-quieres-comparar-con-que.md
- 2011-11-08-bump-charts-para-comparar-graficamente-proporciones-entre-periodos.md
- 2012-05-03-representacion-de-datos-asociados-a-grupos.md
- 2011-07-27-diagramas-de-puntos-dotplots.md
- 2011-01-05-1139.md
tags:
- graficaca
- gráficos
title: Gráficos "dinamita", desaconsejados
url: /2012/04/23/graficos-dinamita-desaconsejados/
---

No sé por qué se llaman así. Ni idea. Vine a enterarme de tal nombre a través de un comentario de Carlos Ortega en la lista de usuarios de R. Parece que se usan habitualmente en diversas áreas y tienen el siguiente aspecto:

[![](/img/2012/04/dinamita00.png#center)
](/img/2012/04/dinamita00.png#center)

Se trata de diagramas de barras a los que se añaden unos apéndices que tratan de medir la variabilidad a la que se entiende que están sujetas aquellas. Una representación alternativa del mismo conjunto de datos ilustra el motivo por el que se desaconseja su uso:

[![](/img/2012/04/dinamita01.png#center)
](/img/2012/04/dinamita01.png#center)

¿Hacen falta palabras?

En _[Dynamite Plots: Unmitigated Evil](http://emdbolker.wikidot.com/blog:dynamite)_ se enumera una serie de motivos por los que es preferible no usarlos:

* su ratio tinta/datos es bajo
* esconden los datos originales, como se aprecia en la comparación anterior
* suelen asumir que los intervalos de confianza son simétricos
* pueden esconder aspectos de los datos, como la bimodalidad
* cuando muestransolo el tramo superior del intervalo de confianza dificultan la comparación entre grupos
* aparentemente, crean una ilusión visual por la que el lector tiende a agregar la longitud correspondiente al intervalo de confianza a la barra


En ese mismo enlace aparece el gráfico

[![](/img/2012/04/dinamita02.png#center)
](/img/2012/04/dinamita02.png#center)

en el que se comparan seis representaciones gráficas alternativas de los mismos datos. ¿Puede decirse que la de la esquina superior izquierda es la mejor?
---
author: Carlos J. Gil Bellosta
date: 2012-04-23 06:41:01+00:00
draft: false
title: Gráficos "dinamita", desaconsejados

url: /2012/04/23/graficos-dinamita-desaconsejados/
categories:
- gráficos
tags:
- graficaca
- gráficos
---

No sé por qué se llaman así. Ni idea. Vine a enterarme de tal nombre a través de un comentario de Carlos Ortega en la lista de usuarios de R. Parece que se usan habitualmente en diversas áreas y tienen el siguiente aspecto:

[![](/wp-uploads/2012/04/dinamita00.png)
](/wp-uploads/2012/04/dinamita00.png)

Se trata de diagramas de barras a los que se añaden unos apéndices que tratan de medir la variabilidad a la que se entiende que están sujetas aquellas. Una representación alternativa del mismo conjunto de datos ilustra el motivo por el que se desaconseja su uso:

[![](/wp-uploads/2012/04/dinamita01.png)
](/wp-uploads/2012/04/dinamita01.png)

¿Hacen falta palabras?

En _[Dynamite Plots: Unmitigated Evil](http://emdbolker.wikidot.com/blog:dynamite)_ se enumera una serie de motivos por los que es preferible no usarlos:



	  * su ratio tinta/datos es bajo
	  * esconden los datos originales, como se parecia en la comparación anterior
	  * suelen asumir que los intervalos de confianza son simétricos
	  * pueden esconder aspectos de los datos, como la bimodalidad
	  * cuando muestran sólo el tramo superior del intervalo de confianza dificultan la comparación entre grupos
	  * aparentemente, crean una ilusión visual por la que el lector tiende a agregar la longitud correspondiente al intervalo de confianza a la barra


En ese mismo enlace aparece el gráfico

[![](/wp-uploads/2012/04/dinamita02.png)
](/wp-uploads/2012/04/dinamita02.png)

en el que se comparan seis representaciones gráficas alternativas de los mismos datos. ¿Puede decirse que la de la esquina superior izquierda es la mejor?

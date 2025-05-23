---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2020-09-21 09:13:00+00:00
draft: false
lastmod: '2025-04-06T18:58:02.171668'
related:
- 2014-03-12-veinte-paquetes-de-r-para-cientificos-de-datos.md
- 2010-09-16-representando-graficamente-conjuntos-de-datos-pequenos.md
- 2016-11-16-detras-de-la-deteccion-de-anomalias-en-series-temporales.md
- 2018-04-09-la-intrahistoria-de-mi-libro-de-r.md
- 2017-05-16-soy-un-dinosaurio-sobre-las-novedades-de-r.md
tags:
- iris
- r
- estadística
- gráficos
title: En defensa de iris
url: /2020/09/21/en-defensa-de-iris/
---

El archiconocido conjunto de datos `iris` es víctima reciente de un ataque relacionado con su pecado original: haber tenido unos padres estigmatizados hoy por su otrora popular idea de que gracias a la ciencia podríamos construir un futuro mejor.

También ha sido víctima de ataques, esta vez más endógenos, relacionados con lo menguado de su tamaño y lo trivial de su estructura.

Vengo aquí a romper una lanza ---tres, más bien--- en favor de este muy querido de los más conjunto de datos. Tres lanzas esgrimidas, como se verá, en contextos, con fines y ante públicos muy concretos.

La primera tiene que ver con la ubicuidad del uso de `iris` en infinidad de páginas de ayuda, entradas de blog, textos, etc. Si se le hace a iris lo que a Cartago, muchas cosas dejarán de funcionar y miles de programadores perderán tardes enmendando cosas que hoy funcionan felizmente en lugar de hacer cosas más amenas.

Las otras dos tienen que ver con cualidades nada triviales de `iris` que se esconden tras su aparente simplicidad. La tercera línea de código que invito a ejecutar los lectores de mi [libro de R](https://datanalytics.com/libro_r) es `plot(iris)`, que produce

![](/wp-uploads/2020/09/plot_iris.png#center)

y donde se aprecian muchos patrones reseñables de los datos. Examinarlo durante 5-10 minutos puede haber sido para muchos el primer ejercicio medianamente serio de análisis de datos: se ven ciertas relaciones lineales, grupos perfectamente diferenciados de acuerdo con determinadas características, otras con un solapamiento más problemático, etc.

Otra característica muy instructiva de `iris` es la que pone de manifiesto hacer `boxplot(iris$Sepal.Width ~ iris$Species)`:

![](/wp-uploads/2020/09/iris_boxplot.png#center)

No solo puede ser la primera aproximación de muchos a los diagramas de cajas, sino que ilustra eficazmente uno de sus usos y su potencia: cómo puede servir para identificar _outliers_ que lo son solo cuando se contemplan dentro de su clase pero que vuelan por debajo del radar en una visión menos sofisticada de los datos.

Y omito el párrafo de resumen, cierre y colofón, como tantas otras veces, en atención a la inteligencia de mis lectores.
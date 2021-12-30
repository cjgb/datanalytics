---
author: Carlos J. Gil Bellosta
date: 2012-08-24 06:50:08+00:00
draft: false
title: p-valores bajo la hipótesis nula tras múltiples comparaciones

url: /2012/08/24/p-valores-bajo-la-hipotesis-nula-tras-multiples-comparaciones/
categories:
- estadística
- r
tags:
- estadística
- r
- p-valores
- t-test
---

Imagina que trabajas en lo que Ionnidis, en su artículo [_Why Most Published Research Findings Are False_](http://www.datanalytics.com/2011/03/03/casi-todos-los-resultados-cientificos-que-se-publican-son-falsos/), llama un _null field_; es decir, un área de investigación (tipo homeopatía o percepción extrasensorial) en la que no hay resultados ciertos, en la que las relaciones causa-efecto no pasan de ser _presuntas_. O tienes un conjunto de datos en un campo _no nulo_ pero que, por algún motivo, no recoge las variables necesarias para explicar un cierto fenómeno.

Aun en esas circunstancias es posible, [como comentábamos ayer](http://www.datanalytics.com/2012/08/23/ajustar-o-no-ajustar-esta-es-la-cuestion/), comenzar a plantear hipótesis, muchas hipótesis. Realizar un test de Student sobre cada una de ellas es como ejecutar la función

{{< highlight R "linenos=true" >}}
foo <- function(){
    x <- rnorm( 100 )
    y <- rnorm( 100 )
    t.test( x, y, alternative = "greater" )$p.value
}
{{< / highlight >}}

¿Y qué pasa si se ejecuta _muchas _veces? Esto:

{{< highlight R "linenos=true" >}}
plot(sort(replicate(1000, foo())))
{{< / highlight >}}

Que gráficamente, para los perezosos, tiene esta pinta:

[![](/wp-uploads/2012/08/p_values.png)
](/wp-uploads/2012/08/p_values.png)

Este gráfico pone de manifiesto que los p-valores obtenidos siguen una ley uniforme (en [0,1]) tal y como cabe esperar de la teoría. Porque el p-valor no es otra cosa que $latex F^{-1}(X)$ donde en este caso, bajo la hipótesis nula, $latex X$ tiene la distribución dada por $latex F$.

Es decir, _probadas _un número suficiente de hipótesis, siempre habrá alguna que resulte _significativa_.

El lector interesado podrá encontrar una discusión similar [en los enlaces de la entrada que publiqué ayer](http://www.datanalytics.com/2012/08/23/ajustar-o-no-ajustar-esta-es-la-cuestion/).

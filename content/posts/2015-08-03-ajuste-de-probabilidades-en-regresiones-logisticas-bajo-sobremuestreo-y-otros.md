---
author: Carlos J. Gil Bellosta
date: 2015-08-03 08:13:17+00:00
draft: false
title: Ajuste de probabilidades en regresiones logísticas bajo sobremuestreo ( y otros)

url: /2015/08/03/ajuste-de-probabilidades-en-regresiones-logisticas-bajo-sobremuestreo-y-otros/
categories:
- estadística
- r
tags:
- estadística
- r
- regresión logística
---

En ocasiones el conjunto de datos sobre el que se ajusta una regresión logística está desequilibrado con respecto a la población subyacente. Por ejemplo, puede suceder que la tasa de casos positivos en los datos sea del 20% mientras que en la población general es del 5%.

Esto puede suceder por varios motivos. El sobremuestreo uno de ellos: se sobremuestrea cuando se toman, por ejemplo, todos los casos positivos y solo un subconjunto de los negativos.

Para muchos fines esto puede no tener mayor impacto: por ejemplo, cuando solo interesa construir un _scoring_ para clasificar casos. Sin embargo, cuando interesa conocer la verdadera probabilidad (estimada) asociada a cada caso, se incurre en un sesgo.

¿Cómo corregirlo?

De acuerdo con [_Logistic Regression in Rare Events Data_](http://gking.harvard.edu/files/0s.pdf) el único coeficiente afectado es el independiente y para obtener el que corresponde a la población completa hay que restarle al obtenido en la población el término

$$ \log \left( \frac{1 - \tau}{\tau} \frac{\bar{y}}{1 - \bar{y}} \right)$$

donde $latex \tau$ es la proporción de éxitos en la población subyacente y $latex \bar{y}$ es el estimado en la muestra.

Este ajuste puede ayudarnos a resolver el siguiente problema en R: se ha ajustado el modelo usando una muestra sesgada y ahora se quiere calcular la probabilidad de éxito _real_ asociada a las observaciones de un conjunto de datos. No vale hacer simplemente

`predict(mi.modelo, newdata = nuevos.datos, type = "response")`

porque las probabilidades asignadas estarían sesgadas. Lo que puede hacerse es usar la función

{{< highlight R >}}
prediccion.calibracion <- function(model, newdata, proporciones){
  tmp <- predict(model, newdata = newdata)
  offset <- log( (1 - proporciones[1]) / proporciones[1] *
                    proporciones[2] / (1-proporciones[2]) )
  tmp <- tmp - offset
  exp(tmp) / (1 + exp(tmp))
}
{{< / highlight >}}

que, primero, calcula la predicción sesgada en la escala lineal, aplica luego el término corrector y, finalmente, usa la función de enlace (_link_) para obtener las probabilidades de éxito con el sesgo corregido.

**Nota:** esta entrada debe a [esta otra](http://www.datanalytics.com/2014/11/17/los-coeficientes-de-la-regresion-logistica-con-sobremuestreo/).

---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2018-02-06 08:13:18+00:00
draft: false
lastmod: '2025-04-06T19:13:11.051790'
related:
- 2014-11-17-los-coeficientes-de-la-regresion-logistica-con-sobremuestreo.md
- 2022-03-22-diagramas-causales-hipersimples-3-mediadores.md
- 2022-03-10-diagramas-causales-hipersimples-1-errores.md
- 2015-07-06-una-interpretacion-rapida-y-sucia-de-los-coeficientes-de-la-regresion-logistica.md
- 2022-03-18-diagramas-causales-hipersimples-2-control.md
tags:
- estadística
- interacciones
- regresión logística
title: Interacciones "mecánicas" en regresiones logísticas
url: /2018/02/06/interacciones-mecanicas-en-regresiones-logisticas/
---

En general, dos variables _interaccionan_ cuando el efecto de una cambia al modificarse el nivel de la otra. Un caso particular (aunque notable) de interacción es el habitual en los modelos lineales, generalizados o no. En ellos, al introducir en el modelo términos del tipo `x1 * x2`, estamos indicando que el coeficiente de la segunda variable, $x_2$, es $\alpha + \beta x_1$. El efecto de un incremento de una unidad de $x_2$ depende entonces de $x_1$.

Esas son interacciones _conceptuales_ (la terminología no es mía; luego indicaré de quién). Existen otras, las _mecánicas_, producto de la no linealidad de modelos tales como la regresión logística. Cosa que ilustraré con un ejemplo en el que no existen interacciones conceptuales por construcción pero sí afloran interacciones mecánicas.

La función

{{< highlight R >}}
my_prob <- function(x1, x2, a = 0.2, b1 = 1, b2 = -0.5){
  res <- a + b1 * x1 + b2 * x2
  1 / (1 + exp(-res))
}
{{< / highlight >}}

predice la probabilidad de un modelo logístico (hipotético) en el que la variable objetivo depende de dos variables, `x1` y `x2` (con los coeficientes que aparecen en el código). Por construcción, no hay interacción.

El código siguiente muestra las diferencias entre la probabilidad estimada al aumentar variar la variable `x2` de 2 a 3 a distintos niveles (-1, 2 y 5) de la variable `x1`.

{{< highlight R >}}
diff(my_prob(-1, c(2, 3)))
# [1] -0.0507281
diff(my_prob(2, c(2, 3)))
# [1] -0.100337
diff(my_prob(5, c(2, 3)))
# [1] -0.00935299
{{< / highlight >}}

¡La variación varía! Luego hay interacción (en el sentido general), pese a que no la haya conceptualmente. Porque existe una interacción mecánica.

Más aún, pueden construirse ejemplos en los que exista una interacción positiva entre dos variables pero poder encontrar valores para los que la relación se vuelve negativa (i.e., al incrementar la una, decrece el efecto de la otra).

Ejemplos de lo anterior, referencias, etc. pueden consultarse [aquí](http://datacolada.org/57).
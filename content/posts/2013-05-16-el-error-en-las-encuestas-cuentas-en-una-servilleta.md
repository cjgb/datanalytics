---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2013-05-16 07:31:52+00:00
draft: false
lastmod: '2025-04-06T19:04:19.813391'
related:
- 2022-09-13-errores-cierto-tipo-encuestas.md
- 2016-02-04-y-termino-con-lo-de-los-intervalos.md
- 2016-01-22-analisis-estadistico-de-respuestas-ocultas-en-encuestas.md
- 2016-06-29-por-una-vez-accedo-a-hablar-de-algo-de-lo-que-no-se.md
- 2011-01-10-c2bfuna-caida-demasiado-drastica-de-la-varianza.md
tags:
- encuestas
- estadística bayesiana
title: 'El error en las encuestas: cuentas en una servilleta'
url: /2013/05/16/el-error-en-las-encuestas-cuentas-en-una-servilleta/
---

Bien escondidita en las encuestas que se publican, puede encontrarse a veces una ficha técnica. Y esta suele contener una frase de esta guisa: _Partiendo de los criterios del muestreo aleatorio simple, para un nivel de confianza del 95 % (que es el habitualmente adoptado) y en la hipótesis más desfavorable de máxima indeterminación (p=q=0.5), el margen de error de los datos referidos al total de la muestra es de 3.2 puntos._

(Nota: la frase está extraída de [aquí](http://blogs.elpais.com/metroscopia/2013/05/barometro-electoral-mayo-2013.html) y hace referencia a una encuesta en la que no se usa el muestreo aleatorio simple y en cuyo original, el nivel de confianza habitualmente aceptado —errata, supongo— figura como del 99.5 % en lugar del 95 %; pero, total, tanto da: nadie lee y a nadie le importa la _liturgia_ de la ficha técnica).

En fin, sigamos.

La cuestión es que el otro día una colega me preguntó lo siguiente: efectivamente, el margen de error en sus datos era, creo recordar, del 4 % bajo la consabida hipótesis conservadora de `p=q=0.5`. No obstante, su `p` estimada era de 0.14, muy lejos del 0.5 de la máxima indeterminación. Y su pregunta era: ¿cuál sería el margen razonable de error en ese caso?

El resto de los datos, a continuación:

{{< highlight R >}}
N <- 546   # número de sujetos en la población
n <- 182   # número de sujetos muestreados

p <- 0.14  # proporción estimada de sujetos X

x <- ceiling(n * p)  # número obtenido de sujetos X en la muestra
{{< / highlight >}}

Llamemos $latex \theta$ a la variable (desconocida, aleatoria) que indica el número de individuos X en la población. Lo que hemos obtenido en la muestra es una visión indirecta de $latex \theta$, típicamente representada como

$$ p | \theta.$$

Esta expresión muestra cómo la proporción (conocida, porque se mide sobre la muestra) de sujetos X depende de la variable de interés $latex \theta$. Y nos interesa conocer el rango de valores de $latex \theta$ compatible con el valor observado, $latex p$.

Para ello usaremos el teorema de Bayes,

$$ P(\theta | x) \propto P(x | \theta) P(\theta)$$

y dada nuestra ignorancia _a priori_ sobre $P(\theta)$, bien podemos suponerla uniforme (esto es, independiente de $latex \theta$), con lo cual

$$ P(\theta | x) \propto P(x | \theta).$$

Y ahora

{{< highlight R >}}
n.reales <- 0:N
probs <- sapply(n.reales, function(y) dhyper(x, y, N-y, n, log = FALSE))
probs <- probs / sum(probs)
{{< / highlight >}}

calcula `probs`, el vector de probabilidades correspondiente a la distribución a posteriori de $latex \theta$ sobre `0:N`, que tiene la siguiente pinta:

[![](/wp-uploads/2013/05/distr_posteriori_encuesta.png#center)
](/wp-uploads/2013/05/distr_posteriori_encuesta.png#center)

Haciendo

{{< highlight R >}}
tmp <- n.reales[order(probs)]
tmp <- tmp[cumsum(sort(probs)) > 0.05 ]
range(tmp) / N * 100
# 10.43956 18.68132
{{< / highlight >}}

llegamos a la conclusión de que (con nuestras hipótesis) tenemos garantizado al 95% que el valor verdadero de la proporción estará confinado en el intervalo [0.104, 0.187]: el margen de error es del 4%.

Y cambiando el valor de `p`, también que el margen de error en el caso de máxima indeterminación no bajaría (mucho) del 6 % (y no del 4 % que habían anunciado: fíate de las colegas, fíate).
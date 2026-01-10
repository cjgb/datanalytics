---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2022-09-13
description: Sobre un tipo de errores en cierto tipo de encuestas que no se suele
  tener en cuenta
lastmod: '2025-04-06T18:44:30.651543'
related:
- 2013-05-16-el-error-en-las-encuestas-cuentas-en-una-servilleta.md
- 2016-06-29-por-una-vez-accedo-a-hablar-de-algo-de-lo-que-no-se.md
- 2023-09-07-problema-modelos-bayesianos-identicabilidad.md
- 2016-01-22-analisis-estadistico-de-respuestas-ocultas-en-encuestas.md
- 2016-02-04-y-termino-con-lo-de-los-intervalos.md
tags:
- estadística bayesiana
- encuestas
- abc
title: Errores en cierto tipo de encuestas
url: /2022/09/13/errores-cierto-tipo-encuestas/
---

En las encuestas a las que estamos acostumbrados se le pregunta a la gente cosas del tipo: ¿tiene Vd. perro? Luego, las respuestas se tabulan, etc., y se publican los resultados.

Pero en otras ---por ejemplo, en la
[Encuesta de percepción de la ciencia y la tecnología en España](https://www.fecyt.es/es/noticia/encuestas-de-percepcion-social-de-la-ciencia-y-la-tecnologia-en-espana)--- se preguntan cosas como: ¿vivieron los primeros humanos al mismo tiempo que los dinosaurios? Y allí no se trata de averiguar qué es lo que responde la gente sino, más bien, cuánta gente sabe la respuesta.

Por eso es relevante el siguiente problema (extraído de [aquí](https://statmodeling.stat.columbia.edu/2022/02/01/a-question-about-exercise-4-9-in-regression-and-other-stories-my-questioner-asked-for-a-bayesian-solution-but-in-that-case-i-was-thinking-of-a-simple-classical-approach-based-on-linearly-transformin/)):

> Una pregunta de selección múltiple de tiene cuatro opciones. Supóngase que el alumno que toma el examen o sabe la respuesta o responde al azar. 100 alumnos realizan el examen y 60 marcan la respuesta correcta. Constrúyase un intervalo de confianza al 95% para la proporción de los alumnos que sabían la respuesta.

En el enlace anterior hay una solución _rápida_ para el problema. Pero es más tediosa que programarla _estilo bayesiano_,

{{< highlight python >}}
n <- 100

foo <- function(n_correctas){
  while (TRUE) {
    # flat prior
    p <- runif(1)

    x <- rbinom(1, n, p)
    y <- rbinom(1, n - x, .25)

    if (x + y == n_correctas)
      return(p)
  }
}

posteriori <- replicate(1000, foo(60))
quantile(posteriori, c(.025, .975))
{{< / highlight >}}

que da $[.34, .59]$. Nótese, además, que el intervalo de confianza ---ya sé, ya sé que algunos no lo queréis llamar _de confianza_, pero paso--- es más ancho que el que correspondería al de la peor encuesta _tradicional_, es decir, el que da `prop.test(50, 100)` y que es $[.40, 0.60]$.

(Y no hace falta decir tampoco que la estimación de `p` no es del 60% sino, más bien, del 46%. Cosa que va a ser relevante más abajo.)

Y en lo que sigue, varios comentarios.

El primero es que he usado una versión simplicísima de una técnica muy socorrida para estimar posterioris, el [ABC](/tags/abc/). Detalles no tocan hoy.

El segundo es que es muy cutre que en una encuesta que lleva _ciencia y tecnología_ en el nombre no traten de ajustar el sesgo al que hace referencia el problema en preguntas como la de los dinosaurios. ¡No es una encuesta _online_ de un periódico de provincias! Obviamente, luego, la prensa (como [aquí](https://maldita.es/malditateexplica/20211027/humanos-dinosaurios-eurobarometro-ciencia-tecnologia/)) da por buenos los números sesgados. Vale, soy consciente de que el mecanismo postulado en el problema solo es uno de los muchos que podrían plantearse para tratar de medir `p`, que algunos pueden ser más agresivos que otros, etc.; pero no-mecanismo es manifiestamente peor que _algún_ mecanismo.

Y el último es más técnico y, en tanto que ningún experto en encuestas se manifieste, quedará planteado únicamente como cuestión: como se ve, el error de `p` en una pregunta como la de los dinosaurios es mayor que en una como la de los perros. Eso implica que se está subestimando el error muestral (o que el tamaño muestral es insuficiente para garantizarlo). No sé si existirán precedentes, teoría o mecanismos para tener en cuenta estas circunstancias. Al fin y al cabo, el problema en cuestión no parece tan distinto del del procedimiento para [encuestar _confidencialmente_](/2016/01/22/analisis-estadistico-de-respuestas-ocultas-en-encuestas/).


### Coda

Después de un intercambio de mensajes con [Picanúmeros](https://twitter.com/Picanumeros) en Twitter, me parece necesario volver a subrayar que el mecanismo de corrección del sesgo propuesto en esta entrada (e inspirado en el ejercicio que se menciona en ella) es solo uno ---y no el único--- y, en muchos casos, ni el más razonable siquiera. Efectivamnete, de ser universal, nunca habría una pregunta similar a las analizadas aquí con una tasa de acierto inferior al ~50%. Pero nos consta que las hay.

Es posible que sin una _priori_ justificable sobre los mecanismos del sesgo, reportar la tasa de respuesta _tal cual_ sea lo más conveniente: de ser todos los _mecanismos_ equiprobables, por pura simetría, sería difícil justificar uno que moviese el estimador en una dirección concreta.
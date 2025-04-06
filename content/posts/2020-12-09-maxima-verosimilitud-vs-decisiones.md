---
author: Carlos J. Gil Bellosta
categories:
- ciencia de datos
- estadística
date: 2020-12-09 10:23:00+00:00
draft: false
lastmod: '2025-04-06T18:56:00.767283'
related:
- 2022-05-24-log-scoring-mv.md
- 2022-10-04-bayesianismo-frecuentismo-teoria-decision-01.md
- 2018-10-10-un-resultado-probabilistico-contraintuitivo-parte-i.md
- 2019-12-04-p-valores-y-decisiones.md
- 2018-05-22-existira-algun-caso-de-uso-de-la-estadistica-que-no-sea-materia-prima-para-la-toma-de-decisiones-informadas.md
tags:
- ciencia de datos
- estadística
- teoría de la decisión
- verosimilitud
title: Máxima verosimilitud vs decisiones
url: /2020/12/09/maxima-verosimilitud-vs-decisiones/
---

En _[Some Class-Participation Demonstrations for Introductory Probability and Statistics](https://www.researchgate.net/publication/247256806_Some_Class-Participation_Demonstrations_for_Introductory_Probability_and_Statistics)_ tienen los autores un ejemplo muy ilustrativo sobre lo lo relativo (en oposición a fundamental) del papel de la máxima verosimilitud (y de la estadística puntual, en sentido lato) cuando la estadística deja de ser un fin en sí mismo y se inserta en un proceso más amplio que implica la toma de decisiones _óptimas_.

Se trata de un ejemplo pensado para ser desarrollado en una clase. Consiste en un juego en el que el profesor muestra a los alumnos un bote con monedas y les propone que traten de acertar su número exacto. En tal caso, los alumnos se la quedan y pueden repartirse el contenido.

El ejercicio procede en dos momentos que son sucesivos pero que están (a diferencia de lo que se ve por ahí) relacionados:

  1. Se estima la distribución del número de monedas en la jarra.
  2. Se determina la apuesta.

En lo concerniente a (1), llegan a dar por buena una distribución N(160, 60). Pero lo relevante es que el artículo razona y llega a una conclusión tan razonable e intuitiva como inhabitual, de que la apuesta no tiene que ser la moda de la distribución (o el EMV), 160, sino el que maximize el beneficio esperado. Es decir,

{{< highlight R >}}
x <- 1:300
which.max(x * dnorm(x, 160, 60))
#[1] 180
{{< / highlight >}}

en lugar de

{{< highlight R >}}
which.max(dnorm(x, 160, 60))
#[1] 160
{{< / highlight >}}

Parece mentira que estas cosas tengan que ser escritas. Pero, ¿os cuento cómo sucede en realidad? Es así:

1. Alguien tiene que tomar una decisión _data driven_ y se la encarga a unos estadísticos a los que proporciona solo la mitad de la información. En particular, no les dice para qué se va a usar aquello en lo que se les manda meter la nariz.
2. Los estadísticos estudian el caso y responden: N(160, 60).
3. Al gerifalte le estalla la cabeza y pide algo menos académico (que esto es una empresa y ya no estamos en la universidad, etc.)
4. Los estadísticos, tras rumiar lindezas en la sala del café, responden: 160.
5. Pasan cosas cutres que simplemente contribuyen a aumentar la entropía del universo en vano.
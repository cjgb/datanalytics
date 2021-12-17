---
author: Carlos J. Gil Bellosta
date: 2012-07-27 19:44:51+00:00
draft: false
title: ¡A los datos mismos!

url: /2012/07/27/a-los-datos-mismos/
categories:
- consultoría
- estadística
tags:
- consultoría
- estadística
- poisson
---

Me llamaron (y aún no tengo claro qué hay _de lo mío_ en el asunto) para un proyecto. Consistía en estimar el tiempo que lleva completar determinados _procesos_ en una conocida empresa.

Cada proceso $latex P_i$, se ve, consistía en una sucesión de subprocesos parametrizados, por lo que las duraciones podrían calcularse algo así como



$latex P_i=p_{i1}+\dots+p_{ik}.$



Además, cada $latex p_{ij}$ dependía de ciertos parámetros, aunque eso no es lo más relevante para el caso.

El objetivo del proyecto, como decía, era realizar estimaciones de la duración de los procesos pero la forma en que me lo plantearon, _calcular la media y la varianza o algo así_, me puso sobre aviso.

En una primera lectura, me di cuenta de que cabría pensar que la distribución de la duración de cada $latex p_{ij}$ podría aproximarse por algo así como una mezcla de distribuciones de Poisson. Una de ellas, con un parámetro pequeño y un peso elevado, correspondería a las situaciones _normales_ y la otra, con un parámetro muy alto y un peso pequeño, a las situaciones _excepcionales_ (posiblemente relacionadas con incidencias de servicio y otras circunstancias).

En esa coyuntura, las distribuciones tienen una cola pesada y la media y la varianza se convierten en indicadores engañosos de la realidad: ¿de qué sirven si _casi siempre_ se termina en 2 o 3 días pero en un buen 5% de los casos la demora puede llegar a exceder los 20 días?

Además, las características del proyecto y sus distintas circunstancias me trajeron a la memoria un pequeño [artículo de Chris Anderson](http://www.wired.com/science/discoveries/magazine/16-07/pb_theory/) que, tras arrancar con la consabida cita de Box,


<blockquote>Todos los modelos son falsos, pero algunos son útiles</blockquote>


se lanza a criticar la _vieja_ ciencia a la vez que aportar evidencias de la emergencia de una nueva que rehuye los modelos tradicionales. Estos serían mecanismos simplificadores de la realidad y resumidores de datos que, en la era pre-Google, eran imposibles de comprehender en su conjunto.

Y los éxitos de esta nueva ciencia en la que la correlación reina sobre la causalidad son innegables: Google traduce textos, y no mal del todo, sin saber si "blanco" es un adjetivo (le basta con la abrumadora evidencia documental de que tiene que ver con "blanc", "white" y sus análogos en otros idiomas) o cuál es la función gramatical de un adverbio.

¿Por qué, entonces, tengo que fatigar el cerebro para ver si una mezcla de distribuciones de Poisson tienen o no un ajuste razonable? ¿Por qué no dar por buena la distribución misma de los datos —la duración de los procesos previos— como... su misma distribución? ¿Qué ganamos?

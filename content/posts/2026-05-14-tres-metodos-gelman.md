---
author: Carlos J. Gil Bellosta
categories:
- números
date: 2026-05-14
description: 'A propósito de una entrada de Andrew Gelman: ¿tres formas cualitativamente
  distintas de abordar un problema estadístico o variaciones dentro de un mismo esquema
  general?'
lastmod: '2026-05-08T00:43:45.844385'
related:
- 2016-09-20-tres-metaprincipios-estadisticos-que-se-quedan-en-dos-que-se-quedan-en-uno.md
- 2021-01-26-que-modelas-cuando-modelas.md
- 2017-10-24-tres-de-seis-consejos-para-mejorar-las-regresiones.md
- 2024-04-18-estadistica-individuos.md
- 2025-05-20-cortos-estadistica.md
tags:
- economía
- estadística pública
- paradoja de simpson
title: Tres maneras de «atacar» un problema estadístico (¿o es una sola?)
url: /2026/05/14/tres-maneras-problema-estadistico/
---

Andrew Gelman escribió recientemente [_These are the three ways of attacking a statistical problem (illustrated with the NFL example)_](https://statmodeling.stat.columbia.edu/2026/03/30/these-are-the-three-ways-of-attacking-a-statistical-problem-illustrated-with-the-nfl-example/) en el que se enfrenta a un problema estadístico usando tres técnicas distintas.

El problema consiste en determinar cuál es el patrón de resultados más frecuente en series de cuatro enfrentamientos entre equipos de fútbol americano: todas las combinaciones $(x_1, x_2, x_3, x_4)$, donde $x_i \in \{0, 1\}$, desde $(1, 1, 1, 1)$ (el primer equipo gana todos los enfrentamientos) hasta $(0, 0, 0, 0)$ (el primer equipo pierde todos los enfrentamientos).

Los tres métodos que discute son los que llama:

- el probabilístico,
- el puramente empírico y
- la modelización estadística.

Para el primero considera el _modelo probabilístico_

$$P(\text{team i beats team j}) = \text{invlogit}(a_i – a_j + b*\text{home}_{ij})$$

que depende de y utiliza algunas aproximaciones razonables para los distintos parámetros:

- Las $a_j$ proceden de una distribución normal (las habilidades de cada equipo) con una $\sigma$ elegida para las diferencias entre determinados cuantiles tengan un impacto razonable.
- Para el efecto del campo, $b$, usa información a priori obtenida de algún tipo de estudio, según la cual, los equipos que juegan en casa tienen una _probabilidad bruta_ de ganar, es decir, sin tener en cuenta otras consideraciones, del 55%.

Con eso simula y obtiene una serie de resultados y frecuencias para cada una de las opciones.

El método empírico consiste en buscar los históricos de resultados y tabular. No lo desarrolla, pero es factible: los datos existen.

El tercer método consiste en este caso en plantear otro modelo,

$$\text{score differential} \sim N(a_i - a_j + b*\text{home}_{ij}, sigma_y)$$

y ajustarlo sobre datos históricos de resultados de partidos. Luego, con ello, simular.

La pregunta que me hago yo es: ¿son tan distintos entre sí? En el fondo:

- Todos ellos plantean un modelo probabilístico. Aunque no lo parezca a primera vista, incluso el segundo lo hace: estima ciertas probabilidades de ocurrencia a través de sus frecuencias, cosa que en el fondo es el principio de la máxima verosimilitud para el modelo probabilístico implícito.
- Todas ellas usan datos. Algunas aproximaciones necesitan más, otras menos. Pero en todas ellas hay una «mirada al mundo».
- Todas plantean hipótesis probabilísticas más o menos defendibles. Por ejemplo, en las dos últimas, que patrones observados en los años 50 son todavía relevantes hoy. Y el primero, que la calidad de los equipos puede modelarse mediante una distribución normal.

En el fondo, donde Gelman encuentra tres formas cualitativamente distintas de enfrentarse a un problema yo veo tres puntos dentro de un espectro.
---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2022-11-24
lastmod: '2025-04-06T18:45:02.347266'
related:
- 2022-10-11-bayesianismo-frecuentismo-teoria-decision-03.md
- 2022-10-06-bayesianismo-frecuentismo-teoria-decision-02.md
- 2019-07-19-un-truco-para-reducir-la-varianza-de-un-estimador.md
- 2021-03-02-un-argumento-para-usar-la-normal-la-maximizacion-de-la-entropia.md
- 2022-10-13-bayesianismo-frecuentismo-teoria-decision-04.md
tags:
- estadística
- media
- matemáticas
title: Sobre la llamada ley del estadístico inconsciente
url: /2022/11/24/ley-estadistico-inconsciente/
---

Es innegable que el rótulo
[_ley del estadístico inconsciente_](https://en.wikipedia.org/wiki/Law_of_the_unconscious_statistician)
llama la atención. Trata sobre lo siguiente: si la variable aleatoria es $X$ y la medida es $P_X$, entonces, su esperanza se define como

$$E[X] = \int x dP_X(x).$$

Supongamos ahora que $Y = f(X)$ es otra variable aleatoria. Entonces

$$E[Y] = \int y dP_Y(y)$$

para cierta medida (de probabilidad) $P_Y$. Pero es _natural_, fuerza de la costumbre, dar por hecho que

$$E[Y] = E[g(X)] = \int f(x) dP_X(x)$$

sin parar mientes. Por ejemplo, miles de personas habrán leído

![](/img/2022/11/montecarlo_integration.png#center)

en la página de la Wikipedia sobre la integración de Montecarlo, inconcientes de que la ley de los grandes números no dice eso sino otra cosa. Y que entre las dos media el teorema que motiva la entrada de hoy.

Pero, vamos, de buscarlo, uno lo encuentra donde debe estar. Rebuscando lo mínimo, por ejemplo, en el capítulo IX.2 del primer volumen sobre probabilidades de Feller, se establece el

![](/img/2022/11/ley-estadistico-inconsciente-feller.png#center)

que no es otra cosa que una versión del que nos trae hoy al teclado.
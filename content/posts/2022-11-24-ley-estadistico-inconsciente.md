---
author: Carlos J. Gil Bellosta
date: 2022-11-24
title: 'Sobre la llamada ley del estadístico inconsciente'

url: /2022/11/24/ley-estadistico-inconsciente/
categories:
- estadística
tags:
- estadística
- media
- matemáticas
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

![](/wp-uploads/2022/11/montecarlo_integration.png#center)

en la página de la Wikipedia sobre la integración de Montecarlo, inconcientes de que la ley de los grandes números no dice eso sino otra cosa. Y que entre las dos media el teorema que motiva la entrada de hoy.

Pero, vamos, de buscarlo, uno lo encuentra donde debe estar. Rebuscando lo mínimo, por ejemplo, en el capítulo IX.2 del primer volumen sobre probabilidades de Feller, se establece el

![](/wp-uploads/2022/11/ley-estadistico-inconsciente-feller.png#center)

que no es otra cosa que una versión del que nos trae hoy al teclado.
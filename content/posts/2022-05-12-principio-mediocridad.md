---
author: Carlos J. Gil Bellosta
date: 2022-05-12
title: 'El principio de mediocridad como instrumento para estimar duraciones'
description: 'El principio de mediocridad como instrumento para estimar duraciones'
url: /2022/05/12/causalidad-individualismo-metodologico/
categories:
- estadística
tags:
- supervivencia
- probabilidad
- principio de mediocridad
- trucos
---

Esta entrada trata de explicar cómo utilizar el llamado principio de mediocridad para la estimación de la duración de _cosas_ cuando apenas se sabe nada al respecto. En ese sentido, extiende y fundamente lo que puede leerse
[aquí](https://en.wikipedia.org/wiki/Mediocrity_principle#Longevity_Estimation).

### Planteamiento

Consideremos el conjunto $A$ de todos los pares de números (reales, que todo hay que decirlo) $0 < a < b$.

En todo lo que sigue, $b$ se interpretará como la duración total de _algo_ (la existencia de la especie humana, el número de semanas que una obra teatral estará en cartel, etc.) y $a$ el momento en el que un observador ha contemplado la existencia de ese _algo_.

El conjunto $A$ se puede dividir en dos partes:

* $M$, de _mediocre_, que contiene todos los pares $(a, b)$ de $A$ tales que $0 < \alpha b < b < (1-\alpha) b < b$ para cierto valor $0 < \alpha< 1$ (p.e., $\alpha = .025$). Se trata de los pares donde $a$ está _lejos_ de los extremos.
* $E$, de _excepcional_, es el complementario de $M$.

Podría decirse que $P(M) = 1- 2\alpha$. Es decir, que is $\alpha = .025$, entonces $P(M) = .95$. (Quien esté incómodo por el hecho de que se estén usando probabilidades _impropias_, puede considerar que los valores $b$ de $M$ son menores que un número finito pero _plusquamsobrehumano_.)


### Aplicación

Supongamos que observo que _algo_ ha comenzado hace 1 periodo temporal y que mi observación de ese hecho es _casual_ y no _particular_. Puedo suponer entonces que $(1, b)$, donde $b$ es la duración (desconocida) de ese algo está en $M$. Al menos, con una probabilidad del 95% (suponiendo que $\alpha = .025$).

Eso condiciona los posibles valores de $b$. El menor valor de $b$ para el que $(1, b) \in M$ es $1 / (1 - \alpha)$ y el mayor, $1/\alpha$. Es decir, con un 95% de probabilidad, la duración del evento estará entre $1.025$ y $40$.

De hecho, en la Wikipedia (véase el enlace de más arriba) toman $\alpha = .25$ para decir que algo que ha durado $T$ tiene un 50% de probabilidades de durar entre $T/3$ y $3T$ más. Lo cual, además, recuerda mucho a la [_regla del tres_](/2016/11/30/la-regla-del-tres-para-estimar-la-probabilidad-de-un-evento-todavia-no-observado/) de la que ya se habló aquí hace seis años.

### Comentario

Obviamente, las estimaciones son demasiado _anchas_ como para permitir aplicaciones prácticas de la cosa. Además, en el mundo de las cosas prácticas, suele haber mucha más información disponible sobre la _función de supervivencia_ de las cosas. Pero esta aplicación del principio de mediocridad es un pelín más informativa que el simple encogimiento de hombros.
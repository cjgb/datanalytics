---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2022-05-24
description: Seleccionar modelos usando el log scoring es usar el principio de la
  máxima verosimilitud
lastmod: '2025-04-06T19:07:53.041293'
related:
- 2020-12-09-maxima-verosimilitud-vs-decisiones.md
- 2022-02-17-examenes-probabilisticos.md
- 2019-01-16-una-de-las-mil-maneras-malas-de-elegir-al-mejor-predictor.md
- 2019-01-17-mejores-predictores-un-ejemplo-el-de-brier.md
- 2023-07-25-tutorial-numpyro-1-modelos-probabilisticos.md
tags:
- máxima verosimilitud
- scorings
title: Log scoring = máxima verosimilitud
url: /2022/05/24/log-scoring-es-maxima-verosimilitud/
---

Hay dos técnicas en estadística que son una sola. Pero como se usan en contextos aparentemente distintos, tienen una historia diferente, se tratan con un lenguaje particular, posiblemente en _asignaturas de distinto año_, etc., y nadie se ha molestado en tender puentes, se consideran, prácticamente inconmensurables cuando, en el fondo, son la misma cosa.

Me refiero al llamado _log scoring_ (para seleccionar entre modelos) y el principio de la máxima verosimilitud.

## Máxima verosimilitud

No voy a pretender que el principio de la máxima verosimilitud _sea_ lo que cuento a continuación, pero sí que es un ejemplo ilustrativo de su uso.

Se tira al aire una moneda 100 veces y se obtienen 60 caras. Hay un modelo de libro para este problema: que se trata de un experimento de Bernoulli con probabilidad $p$ de ocurrencia (de cara). El principio de la máxima verosimilitud postula que es adecuado estimar $p$ como el valor que maximiza $p^{60}(1-p)^{40}$ de entre todos los $p \in [0,1]$.

Tomando logaritmos, la estimación de $p$ es aquella que maximiza la expresión

$$60 \log(p) + 40 \log(p)$$

Visto de otro modo ---i.e., como _selección de modelos_ en lugar de _ajuste de parámetros_---, tenemos un número incontable de modelos, uno para cada valor $p \in [0,1]$, y nos decantamos por aquel que maximiza la expresión anterior.


## Log scoring

De nuevo, no voy a pretender que el uso de los _log scoring_ _sea_ lo que cuento a continuación, pero sí que es un ejemplo ilustrativo de su aplicación.

Ahora tengo el mismo problema (tirada de monedas, etc.) y una serie de $n$ _modelos_ realizados por varios equipos distintos. Todos son modelos de Bernoulli y todos están caracterizados por la probabilidad $p_1, \dots, p_n$ de cara.

Para determinar cuál es el _mejor_ modelo usando los _log scorings_ como criterio, estudiaría los valores

$$60 \log(p_i) + 40 \log(p_i)$$

con $i = 1, \dots, n$ y me quedaría con el _modelo_ correspondiente al valor de $i$ que maximizase la expresión anterior.

En el fondo, como se ve, la misma cosa.

(Vale, _sabemos_ que en el caso continuo ---como el que describo arriba y que es el más habitual del uso del principio de la máxima verosimilitud--- y de cumplirse ciertas condiciones adicionales, existe todo un arsenal metodológico que nos garantiza ciertas propiedades del estimador. Cosa que en el caso _discreto_, que es como tiende a utilizarse el criterio del _log scoring_ no es siquiera planteable. Pero fuera de eso, conceptualmente, son una y la misma cosa.)
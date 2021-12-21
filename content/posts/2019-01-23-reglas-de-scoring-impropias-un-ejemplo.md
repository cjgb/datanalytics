---
author: Carlos J. Gil Bellosta
date: 2019-01-23 08:13:07+00:00
draft: false
title: 'Reglas de "scoring" impropias: un ejemplo'

url: /2019/01/23/reglas-de-scoring-impropias-un-ejemplo/
categories:
- estadística
tags:
- harrell
- predicción
- scorings
---

Todo lo que he venido escribiendo sobre reglas de _scoring_ propias vino en el fondo motivado por [_Damage Caused by Classification Accuracy and Other Discontinuous Improper Accuracy Scoring Rules_](http://www.fharrell.com/post/class-damage/), una entrada en el blog de Frank Harrell en la que se discute el siguiente caso:

1. El tipo simula unos datos para ser ajustados mediante una regresión logística (de manera que conoce _la verdad_ subyacente).
2. Construye varios modelos alternativos para ajustarlos.
3. Utiliza varios _scorings_ distintos para seleccionar _el mejor_ modelo.

Uno de los _scorings_ elegidos es el _accuracy_ (es decir, el número de observaciones correctamente clasificadas). Pero resulta que este criterio, contra lo que cabría esperar, prefiere un modelo distinto del óptimo.

Hummmm...

No discutiré más el caso; está suficientemente bien descrito en el enlace que aparece más arriba. Pero no está de más tener en cuenta ese tipo de cosas. Por si acaso.
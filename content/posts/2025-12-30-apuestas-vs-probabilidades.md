---
-categories:
- números
author: Carlos J. Gil Bellosta
date: 2025-12-30
description: Explora la relación entre precios y probabilidades subjetivas a través
  de Savage y Sharpe. Analizamos cómo la aversión al riesgo define los mercados de
  predicción.
lastmod: '2026-01-03T23:24:08.510338'
related:
- 2022-04-26-redefinicion-probabilidades-subjetivas.md
- 2020-05-18-como-pensar-en-la-probabilidad-de-un-evento.md
- 2023-04-04-kant-probabilidad-apuestas.md
- 2025-06-12-probabilidades-mercados-apuestas.md
- 2020-10-30-mercados-de-apuestas-como-cobertura.md
tags:
- probabilidad subjetiva
- mercados de predicciones
title: Sobre la relación entre precio y probabilidad en mercados de predicciones
url: /2025/12/30/apuestas-vs-probabilidades/
---

Ahora que se popularizan los mercados de predicciones, merece la pena revisitar algunas ideas sobre la relación entre precios y probabilidades.

He citado varias veces [esta página del blog](/2020/05/18/como-pensar-en-la-probabilidad-de-un-evento/) de donde rescato la cita de Sam Savage

> Mi padre, Leonard Jimmie Savage, fue un pionero en la defensa de las probabilidades subjetivas. Desde pequeño, me enseñó a pensar en la probabilidad de un evento como el dinero que estaría dispuesto a pagar por participar en una apuesta en la que ganaría cien dólares si ocurriese.

Lo escribió en un [articulo de 2004](https://pubsonline.informs.org/do/10.1287/orms.2004.03.14/full/) y luego, rebajando la cifra de 100 dólares a uno solo, en su libro _The Flaw of Averages_.

Pero existen al menos dos motivos por los que sabemos que la relación es solo aproximada (en un sentido similar ese en el que la física newtoniana aproxima la relativista). El primero es el de la aversión al riesgo. O más bien, del distinto apetito por el riesgo. No es casualidad que en las dos definiciones de probabilidad que ofrece Savage arriba use cantidades relativamente pequeñas. Y que en el libro, posterior al artículo, rebaje dos órdenes de magnitud la cantidad aposada. Porque si la apuesta es demasiado grande, el precio máximo que mucha gente estaría dispuesta a arriesgar como proporción del valor del préstamo quedaría por debajo de su probabilidad esperada: ¿estarías realmente dispuesto a apostar medio millón por ganar uno al cara o cruz?

Además, si nuestra vivienda vale 100k estamos dispuestos a pagar tal vez 100 al año en concepto de seguro. Pero ¿significa eso que la probabilidad de siniestro total es de $1/1000$? Casi seguro es muy inferior y por eso, la compañía de seguros, que tiene un colchón de capital mucho más voluminoso que el nuestro, está encantada de ofrecer un precio de 100 a sabiendas que que la probabilidad de siniestro _verdadera_ es una fracción. Para un actor económico _grande_, un seguro de 100k es análogo a una apuesta de un dólar para el infante Savage: una cantidad por debajo del umbral al que se disparan los efectos de la aversión al riesgo.

La segunda fuente de discrepancias tiene que ver con la dimensión temporal, como consecuencia, los tipos de interés. Tal vez no el mejor sitio pero sí uno de los primeros para entender estas cuestione sea el artículo [_Nuclear Financial Economics_](https://web.stanford.edu/~wfsharpe/art/RP1275.pdf), de W.F. Sharpe, que incluye en su página 17 condiciones para que las probabilidades sean idénticas a los precios. Y también explica el motivo por el que distintos sujetos pueden asignar distintos valores a una misma apuesta.

Una característica de los mercados de predicciones es que generan un único precio, común para todos los participantes. Por lo que habría agentes dispuestos a transar en ellos. El dueño de la vivienda de más arriba querría comprar 1000 contratos de una apuesta que pagase 100 si su casa se incendiase durante los próximos 12 meses a 0.1 céntimos la unidad y es posible que 1000 inversores distintos estuviesen dispuestos a vendérselos incluso por menos. Además, un inversor pequeño podría asumir muchos pequeños riesgos independientes (y convertirse en una micro-empresa de seguros) participando en apuestas donde la otra parte paga una prima por sacarse de encima un riesgo excesivo.

Es decir, la cuestión no es si los precios representan o no probabilidades sino que es precisamente la discrepancia entre ambas las que posibilitan la existencia de mercados de predicciones. Incluso cuando (y esta es una hipótesis muy fuerte e irreal) se supone que los agentes que operan en el mercado conocen las probabilidades subyacentes _reales_.
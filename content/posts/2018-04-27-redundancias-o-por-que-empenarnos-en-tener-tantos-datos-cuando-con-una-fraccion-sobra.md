---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2018-04-27 08:13:47+00:00
draft: false
lastmod: '2025-04-06T18:57:39.561351'
related:
- 2016-09-12-big-vs-small-data-en-estadistica-aplicada-aplicada.md
- 2021-01-26-que-modelas-cuando-modelas.md
- 2012-01-12-localidad-globalidad-y-maldicion-de-la-dimensionalidad.md
- 2011-01-10-c2bfuna-caida-demasiado-drastica-de-la-varianza.md
- 2023-09-07-problema-modelos-bayesianos-identicabilidad.md
tags:
- estadística
- grados libertad
title: Redundancias (o por qué empeñarnos en tener tantos datos cuando con una fracción
  sobra)
url: /2018/04/27/redundancias-o-por-que-empenarnos-en-tener-tantos-datos-cuando-con-una-fraccion-sobra/
---

_[Esta entrada no contiene ni respuestas ni, tan siquiera, buenas preguntas. Solo vuelco en ella ideas más o menos inconexas que me rondan la cabeza. Tal vez alguien sepa reformularlas mejor, plantear la pregunta concreta que exige el asunto y, con suerte, responderla con claridad y distinción.]_

Mi proyecto trata de la estimación de los parámetros que rigen una determinada curva (altamente no lineal) de la que se tienen N observaciones en el tiempo. Igual que tengo N podría tener 2N o N/2.

Pero, ¿cuál es el número _efectivo_ de observaciones?

Si mis datos fuesen una línea, con dos observaciones (sin ruido) bastaría. Si fuese una circunferencia, con tres habría bastantes. El resto son deducibles y aportan poco.

Si mis datos fuesen de temperatura ambiental, podría tener datos horarios. Pero también cada minuto. Y o cada segundo. Podría fabricar y presumir de tener _big data_. Pero solo almacenaría redundancias.

Si las observaciones son independientes (contexto tipo: regresión lineal), está bien contar con más datos (aunque su importancia decrece marginalmente). Cuando no lo son, las cosas cambian. Por ejemplo, el [teorema de Nyquist](https://en.wikipedia.org/wiki/Nyquist%E2%80%93Shannon_sampling_theorem) establece un límite a partir del cual observaciones adicionales están de más (en ciertos contextos).

Y nada más.
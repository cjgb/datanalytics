---
author: Carlos J. Gil Bellosta
categories:
- probabilidad
date: 2018-10-11 08:13:50+00:00
draft: false
lastmod: '2025-04-06T19:09:34.486694'
related:
- 2018-10-10-un-resultado-probabilistico-contraintuitivo-parte-i.md
- 2022-10-04-bayesianismo-frecuentismo-teoria-decision-01.md
- 2014-01-09-como-apostar-si-tienes-que.md
- 2020-10-30-mercados-de-apuestas-como-cobertura.md
- 2011-06-24-sobre-el-libro-the-flaw-of-averages.md
tags:
- paradojas
- probabilidad
- feller
title: Un resultado probabilístico contraintuitivo (y II)
url: /2018/10/11/un-resultado-probabilistico-contraintuitivo-y-ii/
---

Va sobre [lo de ayer](https://datanalytics.com/2018/10/10/un-resultado-probabilistico-contraintuitivo-parte-i/). Hay una demostración de ese resultado contraintutivo [aquí](https://math.stackexchange.com/questions/655972/help-rules-of-a-game-whose-details-i-dont-remember/656426#656426). Hay una referencia [aquí](http://www-isl.stanford.edu/~cover/papers/paper73.pdf). Existen discusiones sobre si este resultado se debe a Feller; si no lo es, bien pudiera haberlo sido; la verdad, es muy como de él.

Pero una cosa es la demostración y otra muy distinta, descontraintuitivizar el resultado. Para ello, escuchemos la siguiente conversación entre dos sujetos:

**A:** No has visto el cierre de la bolsa hoy, ¿verdad?

**B:** Nah.

**A:** Elige pues: BBVA o Santander. Es para un juego.

**B:** Pues... Santander.

**A:** Hoy ha subido el 2.3%. Y ahora el juego: con esa info, ¿quién ha subido más, BBVA o Santander?

B tiene varias opciones. Una de ella es constestar al tuntún (la estrategia naive de ayer). La otra es pensar en lo probable que es una subida del 2.3%. Al hacerlo, está considerando una distribución de probabilidad, la que considera que rige las variaciones de precio de las acciones, que no tiene que ser igual a la _verdadera_ distribución de probabilidad que rige las variaciones de precio de las acciones.

Si B entiende que 2.3% es un valor muy alto para dicha distribución, se quedará con BBVA. En caso contrario, elegirá el Santander. Y es sensato.

Pero el problema es muy similar al planteado ayer:

* Hay una distribución desconocida que rige las variaciones de valor de las acciones.
* Hay una distribución distinta que rige la decisión de B.
* Hay un valor de referencia que ayuda a B a decidir si el valor observado es alto o bajo.

Diráse: las dos distribuciones son distintas, sí, pero _parecidas_. Concedido. Pero ser distinto es una mera cuestión de grado y la demostración del resultado muestra hasta dónde pueden desviarse las dos distribuciones para que el resultado se mantenga.

Segundo, B ha elegido un _valor de referencia_ de su distribución. Y sí, un valor de referencia. Que puede ser la media, un cuantil determinado o, por qué, no, una muestra de tamaño uno.
---
author: Carlos J. Gil Bellosta
categories:
- números
date: 2017-09-07 08:13:43+00:00
draft: false
lastmod: '2025-04-06T19:12:20.997052'
related:
- 2018-07-23-suicidios-crisis-y-cambios-de-regimen-en-series-temporales.md
- 2018-01-09-mortalidad-en-carretera-contada-de-una-manera-distinta.md
- 2018-07-19-que-no-que-es-imposible-esconder-medio-millon-de-muertos-y-que-la-cordialidad-esta-de-mas.md
- 2017-12-01-simpson-de-nuevo-ahora-con-la-mortalidad.md
- 2018-02-22-mas-sobre-sesgo-varianza-y-gripe-estimaciones-a-ojimetro.md
tags:
- mortalidad
- números
- series temporales
- stl
title: Ey, ¡en esta serie hay más muertos que en Juego de Tronos!
url: /2017/09/07/ey-en-esta-serie-hay-mas-muertos-que-en-juego-de-tronos/
---

La serie en cuestión es esta (abridla en otra pestaña para verla en la plenitud de su definición):

![](/img/2017/09/defunciones_historicas.png#center)

Con tiene _todas_ (explicar por qué no son todas sería complicado, pero se puede dar el cuantificador casi por bueno) las defunciones (diarias) en España desde la fecha indicada.

Los datos brutos están en la figura superior. Las tres siguientes tienen la descomposición estacional, la tendencia y los residuos tal como los estima `stl`.

Se aprecian aquel verano del 2003 que tanto alivió las cuentas de la Seguridad Social a golpe de mortalidad prematura, el invierno sumamente lesivo para ella del 2001, los periodos de exceso de mortalidad (los restos, que de eso van los restos), etc. No alcanzo a apreciar el 11M, aunque sí un pico que podría coincidir con lo del Spanair, que son los dos acontecimientos del periodo que recuerdo en que mucha gente se murió a la vez.

Y, esta vez, me tendréis que tomar la palabra porque no puedo divulgar ni datos ni código. Son vuestros, lo sé, pero solo los pudo mirar yo.
---
author: Carlos J. Gil Bellosta
categories:
- estadística
- varios
date: 2021-10-19 09:13:00+00:00
draft: false
lastmod: '2025-04-06T19:11:44.637641'
related:
- 2018-04-03-causalidad-malo-lo-uno-pero-tampoco-bueno-lo-otro.md
- 2021-10-01-esos-felices-momentos-le-verrier.md
- 2022-03-30-nuevo-video-en-youtube-causalidad-carlos-madrid.md
- 2024-10-08-cortos-stats.md
- 2019-03-27-sobre-la-necesaria-validacion-a-posteriori-de-modelos-de-caja-negra.md
tags:
- causalidad
- modelos
- predicción
- le verrier
title: 'Causalidad inversa: más sobre los momentos "Le Verrier"'
url: /2021/10/19/causalidad-inversa-mas-sobre-los-momentos-le-verrier/
---

Escribí el otro día sobre los llamados [momentos Le Verrier](https://datanalytics.com/2021/10/01/esos-felices-momentos-le-verrier/). Que, siguiendo la nomenclatura de _[Why ask why? Forward causal inference and reverse causal questions](https://www.nber.org/system/files/working_papers/w19614/w19614.pdf)_ no son otra cosa que ejercicios de causalidad inversa con final feliz.

Efectivamente, según el artículo, las cuestiones de índole causal son de dos tipos: prospectivas y retrospectivas (o inversas), en una traducción muy libre. Las primeras, más habituales, se refieren a cuáles serán los efectos de una causa. ¿Qué pasará si aumento mi presupuesto de publicidad? ¿Qué pasará con la temperatura de un dispositivo si aumento la potencia? Etc. Son preguntas a las que responden los modelos, sea a través del estudio de una serie de coeficientes, realizando predicciones, etc.

Las segundas, las inversas, se refieren a la causa de efectos (típicamente) observados. Pueden ser de dos tipos, una distinción en la que no entra el artículo. El primero corresponde a situaciones en las que tenemos un modelo del mundo, observamos una predicción y queremos conocer las causas: ¿por qué se deniega la hipoteca? ¿Por qué estaba tan caliente el dispositivo a las 11 de la mañana? Etc.

El segundo, mucho más interesante (y que es el que, de hecho, aborda el artículo), se refiere a situaciones en las que nuestro modelo (sea este estadístico o más _mundano_): ¿por qué no se ha concedido una hipoteca a un tipo que parece tener un buen perfil de riesgo? ¿Por qué estaba frío el dispositivo aun cuando trabajaba a plena potencia? ¿Por qué no hay (había) inflación a pesar de toda la emisión monetaria de los últimos años? ¿Por qué ---en definitiva--- el mundo no obedece a mi modelo (o representación que tengo de él)?

Que son todas cuestiones muy relevantes, que suelen exigir una revisión de nuestros modelos y que no siempre concluyen felizmente.
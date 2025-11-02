---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2023-05-09
lastmod: '2025-04-06T18:51:35.786805'
related:
- 2022-05-10-encuestas-electorales-cualitativas.md
- 2019-05-30-escenarios-jerarquicos-para-encuestas-electorales-en-contextos-multipartidistas.md
- 2023-05-16-promedio-predicciones-electorales.md
- 2016-05-09-encuestas-electorales-medios-y-sesgos-ii.md
- 2015-09-29-la-funesta-mania-de-querer-acertar.md
tags:
- encuestas
- predicción
- españa
title: Encuestas vs predicciones electorales
url: /2023/05/09/encuestas-predicciones-electorales/
---

## I.

Imaginemos que estamos viendo un partido de fútbol en la tele. Arriba, a la izquierda, hay un par de cifras: es el marcador que nos dice cómo va el partido.

En un mundo paralelo, en lugar del resultado provisional (p.e., 0-0 al comenzar el partido), el marcador podría mostrar la predicción del resultado al acabar el encuentro. Podría suceder que en el minuto cero indicase algo así como 3-2 si tal fuese la mejor estimación posible del resultado final.

Imaginemos que un viajero de ese mundo paralelo viene al nuestro y ve un partido en la tele. En el minuto 50, el encuentro va 0-0 pero al final ganan los locales 2-0. El viajero podría indignarse y protestar sobre el sesgo del modelo predictivo. Pero en nuestro mundo lo tomarían, sin duda, por loco: en el minuto 50, efectivamente, el marcador era 0-0; nadie está pronosticando goles futuros.

## II.

En el mundo de las encuestas (en general) electorales, existen dos funciones _distintas_ (las cursivas son claramente intencionadas): las encuestas electorales y los pronósticos electorales. En inglés, se las conoce como _polling_ y _forecasting_ y todo queda más claro si se piensa en ellas como _nowcasting_ y _forecasting_.

La encuesta nos da minuto y resultado. El pronóstico, lo que podría llegar a pasar en unas elecciones concretas.

## III.

Para abundar en la diferencia, uno puede visitar [esta página](https://projects.economist.com/us-2020-forecast/president) en The Economist sobre la predicción de las elecciones de 2020. Uno puede consultar las encuestas electorales,

![](/img/2023/encuestas-predicciones-00.png#center)

y también la evolución de las predicciones electorales,

![](/img/2023/encuestas-predicciones-01.png#center)

Estas predicciones, como dice la página en cuestión, son el resultado de un modelo que...

> ... primero promedia las encuestas asignándoles un peso de acuerdo con su tamaño y corrigiendo su tendencia a sobreestimar el apoyo a un partido concreto. Luego combina este promedio con nuestras predicciones basadas en datos no procedentes de encuestas...

## IV.

Pero, en España, ¿tenemos _predicciones_ propiamente dichas? Honestamente, no las he visto. En algunos sitios hacen _promedios de encuestas_ (p.e., [aquí](https://en.wikipedia.org/wiki/Opinion_polling_for_the_2023_Spanish_general_election)), que es una especie de primera aproximación al asunto. Cosas que hace Kiko Llaneras en El País pueden ---aunque, sinceramente, no me acuerdo bien--- asimilarse a lo que podría llamarse _predicciones electorales_.

_[Si alguien sabe de alguna empresa u organismo que realice explícitamente predicción electoral en España, agradecería que lo hiciese constar en los comentarios para la ilustración de todos.]_

## V.

Lo que tenemos en España, esencialmente, son _encuestas_. Que, simplemente, aspiran a determinar cuál es la situación en un momento dado. Por ejemplo, en
[esta nota metodológica del CIS](https://www.cis.es/cis/export/sites/default/-Archivos/Marginales/3240_3259/3242/IM3242.pdf)
se lee:

> Así, las estimaciones resultantes del modelo aplicado en esta ocasión representan, en cierto modo, un valor de referencia para evaluar el efecto de las campañas electorales que mediaran entre el momento de la medición del estado del sistema actual y los resultados finales.

_[¡Qué cojonazos!]_

Dicho de otro modo, las encuestas que trascienden en los medios son solo perspectivas más o menos ruidosas, más o menos interesadas/sesgadas, del _minuto y resultado_. Sin pretensiones ulteriores.

## VI.

¿Cómo evaluar predicciones electorales? No me voy a ocupar del asunto porque:

1. Como digo, no hay. Y si las hay, yo no las conozco y tú tampoco.
2. De haberlas, sería una trivialidad: existe una realidad objetiva, el resultado final de las elecciones, contra la que contrastar las predicciones.

## VII.

¿Cómo evaluar encuestas electorales?

De entrada, no cabe comparar las encuestas con los resultados de las elecciones. Por lo tanto, tampoco premiar ni criticar por _no acertar_ (los resultados finales) dado que las encuestas, se supone, aspiran a medir una cosa distinta. Solo que esta cosa distinta no es observable.

En el partido de fútbol con el que se abría esta entrada, el resultado minuto a minuto es conocido sin ningún género de duda. Pero aquello que miden las encuestas no lo es. Así que podría pensarse que son _inasequibles a la crítica_.

De todos modos, se me ocurren dos maneras de evaluar la bondad de una estadística electoral:

1. De existir predicciones electorales, una serie de encuestas electorales sería _buena_ si tuviesen un peso grande (y habría que definir aquí qué entender por peso y cómo calcularlo) en una predicción con un error bajo. Una posibilidad, por ejemplo, sería recalcular las predicciones con y sin dicha serie de encuestas y medir la diferencia.
2. A falta de predicciones electorales, si una encuesta se repite en el tiempo siguiendo una metodología fija y determinista, podría evaluarse en función de cómo los resultados convergen a los de la elección misma (supuesto que se sigan haciendo encuestas hasta _el último momento_).

## VIII.

De todos modos, pocas vidas pueden ser más descansadas que las de un facedor de encuestas electorales: los números que uno publica son incuestionables. Pueden ser cuestionados, sí, por aquel que financia las encuestas. Tal vez este prefiera ciertas fotos a otras. Pero no tiene que ser muy difícil contentarlo.

[Aquí](https://reis.cis.es/REIS/PDF/REIS_178_091647600818218.pdf) un exresponsable de metodología del CIS dice:

> No es científicamente aceptable la trasformación de los datos exclusivamente por consideraciones genéricas basadas en experiencias empíricas previas. Alterar la información que procede de la sociedad solamente es aceptable desde un marco teórico que dé cuenta y explique las razones para hacerlo.

Cosa en la que el autor no puede estar más de acuerdo. Pero todos sabemos también que:

1. Hay muchas teorías circulando entre las que elegir.
2. Una teoría deja la mar de cabos sueltos entre los que optar por los más convenientes.

Por lo que uno puede preguntarse si en este asunto ---como en tantos otros--- la teoría precede a los resultados o si aquella es solo una justificación a posteriori de estos.

## IX.

En resumen, todo este asunto es una marcianada y una pérdida de tiempo. Si eres un ciudadano de a pie, como yo, lo más racional es dedicar el tiempo a asuntos más provechosos y sobre los que uno tiene algo de agencia. El ruido que acompaña a las encuestas electorales tiene una única causa: que les prestamos atención. Pero hay muchas cosas más interesantes que hacer, incuso ---y particularmente--- en periodos electorales.

De hecho, paradójicamente, solo habrá buenas encuestas electorales (y aquí uso la siguiente definición de _buena_: que no traten de agradar a algún _jefazo_ que espere unos determinados resultados) en la medida que no les hagamos casito. Para más señas, [Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law).
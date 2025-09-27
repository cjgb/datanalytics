---
author: Carlos J. Gil Bellosta
categories:
- probabilidad
date: 2023-09-05
lastmod: '2025-04-06T18:48:36.808519'
related:
- 2021-12-09-mas-sobre-la-estimacion-de-probabilidades-de-eventos-que-no-se-repiten.md
- 2018-07-16-consecuencias-indeseadas-de-la-falta-de-humildad.md
- 2021-04-08-sobre-las-probabilidades-de-eventos-que-ocurren-una-unica-vez.md
- 2021-01-19-estos-keynesianos-ven-el-mundo-de-una-manera-muy-muy-loca.md
- 2020-03-25-cuantificacion-y-riesgo.md
tags:
- predicciones
- libros
- guerra nuclear
title: '[Super]forecasting'
url: /2023/09/05/superforecasting/
---

### I.

Dedicarse a hacer predicciones ---es decir, estimar las probabilidades de ocurrencia de eventos futuros--- por _hobby_ es un entretenimiento tan digno como cualquier otro. Además, hoy en día existen plataformas (como
[esta](https://lepoint.hypermind.com/),
[esta](https://www.predictit.org/),
[esta](https://www.metaculus.com/),
[esta](https://kalshi.com/) o
[esta](https://manifold.markets/))
donde poner a prueba las habilidades propias e, incluso, llegar a _monetizarlas_. Es un mundo en el que ponderé introducirme en su día para hacer más llevaderas las pesadumbres de la existencia; al fin y al cabo, las habilidades que exige ---un conocimiento somero de la teoría de la probabilidad, sentido común y curiosidad y diligencia para documentarse sobre temas variopintos--- no me son del todo ajenos. Lo descarté finalmente por tres motivos:

1. Que la gran mayoría de las cuestiones que se suelen plantear en esos _mercados_, sinceramente, ni me van ni me vienen.
2. La competencia de otros entretenimientos más apetecibles a los que dedicar el rato.
3. Un último motivo que expondré en la parte final de la entrada.

No obstante, sigo el asunto de reojo llegando incluso, hace un tiempo, a leer uno de los libros obligatorios del aficionado a la materia: [Superforecasting](https://en.wikipedia.org/wiki/Superforecasting:_The_Art_and_Science_of_Prediction). La lectura fue un poco decepcionante: uno espera de él una discusión más o menos formal sobre técnicas para afrontar problemas de predicción y, particularmente, embridar los sesgos cognitivos, pero en realidad encuentra cualquier otra cosa.

No obstante, haría falta tener un lamentable nivel de comprensión lectora de rematarlo sin llegar a averiguar que el truco más socorrido del _superpredictor_ es la de casi cualquier otro _superloquesea_: análisis y síntesis, dividir y recomponer. Es decir, desmenuzar el suceso del que se quiere estimar la probabilidad en subeventos más asequibles, estimar sus probabilidades ---el análisis--- y reconstruir la del evento inicial ---la síntesis--- recurriendo a las técnicas habituales de la teoría de la probabilidad.

### II.

Un caso particular del problema de la predicción es la de estimar la probabilidad de eventos que aún no se han producido jamás.

Así hace Guillermo Luijk en una entrada reciente ---aprovecho para informar de que todo su blog es muy recomendable---:
[_¿Qué probabilidad tienes de vivir una guerra nuclear?_](https://www.overfitting.net/2023/08/que-probabilidad-tienes-de-vivir-una.html). El que en los casi setenta años que han discurrido desde que comenzaron a proliferar las armas nucleares no se haya producido ninguno acota necesariamente la probabilidad anual de _holocausto nuclear_. Esas cotas pueden usarse luego para realizar estimaciones prospectivas: ¿qué nos pueden deparar, p.e., los próximos treinta años?

Es problema, así formulado ---o simplificado---, es bien conocido. Si el evento en cuestión ha tenido N ocasiones ---con la misma probabilidad--- de ocurrir pero no se ha materializado nunca, se puede aplicar la llamada _regla del tres_ de la que escribí
[aquí](/2016/11/30/la-regla-del-tres-para-estimar-la-probabilidad-de-un-evento-todavia-no-observado/)
y que John Cook ha tratado recientemente en su blog
[aquí](https://www.johndcook.com/blog/2023/08/30/first-time-seeing-a-rare-event/). Obviamente, la regla tiene más interés teórico que práctico: en muchas situaciones de interés, las probabilidades no son homogéneas.

### III.

Por ahí se ven de vez en cuando análisis detallados que hacen determinados _superpredictores_ de eventos de lo más variopinto como, por ejemplo,
[_What Comes After COVID_](https://asteriskmag.com/issues/02/what-comes-after-covid)
de Juan Cambeiro. Podrían usarse como ejemplos para introducir a los neófitos en las sutilezas del cálculo probabilístico.

De todos modos, quiero terminar recomendando
[_The Extinction Tournament_](https://astralcodexten.substack.com/p/the-extinction-tournament),
una entrada en Astral Codex Ten que parece un metaanálisis sobre la cuestión. Estudia diversos planteamientos y resultados ---no necesariamente convergentes--- de distintos grupos de expertos y superpredictores sobre la probabilidad de futuras presuntas catástrofes (incluida la guerra nuclear) y se puede leer de diversas maneras. Una de puede servir para averiguar lo que determinados expertos opinan sobre un asunto que es de _interés general_: si seguiremos sobre la faz de la tierra en cien años. Otra, más técnica, en la que más o menos indirectamente se pueden intuir las técnicas que siguen los expertos para llegar a esas conclusiones. Y una tercera, tal vez la más relevante, la que permite poner en tela de juicio todo lo anterior: de entrada, ni los expertos se ponen de acuerdo. Ciertamente, se habla de probabilidades bajas, como no puede ser de otra manera; pero una probabilidad baja acumulada anualmente durante un periodo largo da lugar a probabilidades de ocurrencia que pueden resultar muy sustanciales.

### IV.

En el mundo de las predicciones existe un continuo. Próximo a uno de sus extremos, el más feliz, se encuentran, por ejemplo, las predicciones meteorológicas. En
[_The quiet revolution of numerical weather prediction_](https://www.nature.com/articles/nature14956)
los autores repasan las mejoras que ha experimentado las tecnologías de la predicción meteorológica en los últimos años. De ahí extraigo

![](/wp-uploads/2023/predicciones-meteorologicas.png#center)

que lo ilustra (aunque omitiré abundar en qué significa el _forecast skill_: bastará saber que las líneas crecientes indican mejoría y que 100% es la _predicción perfecta_). El que se pueda comprobar frecuentemente la validez de las predicciones ---como sucede en meteorología--- permite afinar la tecnología de modo concluyente.

En el extremo opuesto se encuentra la especulación pura, la retórica. Y queda a la discreción del lector ubicar dentro del continuo ejercicios como los que motivaron el _Extinction Tournament_ mencionado en la sección anterior.

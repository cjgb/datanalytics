---
author: Carlos J. Gil Bellosta
date: 2021-12-13
title: Sobre el exceso de mortalidad en noviembre de 2021

url: /2021/12/09/mas-sobre-exceso-mortalidad-noviembre-2021/
categories:
- estadística
- números
tags:
- be-momo
- euromomo
- gripe
- momo
- mortalidad
- modelos
---

_[Nota: trabajé ---pero desde hace muchos meses ya no--- en MoMo. Así que algo sé al respecto. No obstante, las opiniones reflejadas aquí son enteramente mías. Además, están escritas desde una perspectiva estadística, no epidemiológica o, por extensión, médica.]_


Han aparecido ciertas noticias en prensa acerca del exceso de mortalidad reflejado por MoMo ---más sobre MoMo, [aqui](https://www.datanalytics.com/2020/04/08/momo-una-documentacion-oficiosa/)--- durante el mes de noviembre de 2021 (véase [esto](https://www.larazon.es/salud/20211206/tbkbf5ze2zfmvgpmde4gyupemq.html) o [esto](https://theobjective.com/espana/2021-12-12/exceso-muertes-momo-coronavirus/)). La tónica general de los artículos es la del _desconcierto_ de los expertos, que ni se explican ni se atreven a explicarnos posibles motivos del repunte de la mortalidad.

Las cifras que se discuten son las del _exceso de mortalidad_. El exceso de mortalidad es la diferencia entre la mortalidad observada y la estimada por un determinado modelo. Hablar pues del exceso de mortalidad es hablar de las defunciones observadas y las estimadas. Ha habido periodos en los que la magnitud problemática eran las defunciones observadas, particularmente en los más crudos de la pandemia. Ahora, creo, hay que prestar atención al modelo.

MoMo utilizaba (y no sé si sigue utilizando) un modelo que en mi época iba a ser reemplazado por otro bastante distinto e ignoro si es ya el caso. Otras agencias como [EuroMOMO](https://www.euromomo.eu/) o el [_ISCIII belga_](https://www.datanalytics.com/2020/04/16/be-momo/), por citar dos que conozco bien, usan otros distintos. Modelos distintos darían, por supuesto, estimaciones distintas del exceso de mortalidad. Pero sospecho que casi todos ellos identificarían un exceso por lo que voy a discutir a continuación.

![](/wp-uploads/2021/12/image.png)

Toca retrotraerse a los principios de la estimación de la mortalidad. El gráfico anterior ilustra los patrones básicos de la mortalidad ---en los países desarrollados del hemisferio norte, al menos--- a lo largo de tiempo. Está [extraído de EuroMOMO](https://www.euromomo.eu/graphs-and-maps/#excess-mortality) y registra la mortalidad semanal conjunta de todos los países integrados en dicho consorcio.

El patrón habitual ---abstracción sea hecha del periodo pandémico--- es el siguiente:

  * Una tendencia global (¿lineal?) no particularmente acusada.
  * Una estacionalidad intraanual con pico en el inverno y valle en el verano.
  * Otros fenómenos puntuales que se concentran en el verano y el invierno y que discutiré más abajo.

El modelo clásico (que es el que usa EuroMOMO) es el de Serfling (de los años 60), que traté hace un tiempo [aquí](https://www.datanalytics.com/2020/04/06/en-primavera-en-serio-ni-de-cona/). Es, esencialmente, una regresión con un término lineal en t y una sinusoide con un periodo de 365 días. Así de simple: es pura tecnología de los principios de la era de la estadística computacional. Y es el que proporciona la línea gris punteada en el gráfico anterior.


Los fenómenos puntuales de interés ---y que, al final, son los que tratan de estimar estos modelos--- son las defunciones producidas por las olas de calor en verano, las olas de frío en invierno y las atribuibles a la epidemia estacional de gripe. Todos estos fenómenos son, en principio, identificables y estimables sobre la base del modelo anterior a partir de otras variables como la temperatura o los indicadores de incidencia gripal. Se caracterizan, además, porque no siempre ocurren en las mismas fechas ni tienen la misma intensidad. Sin embargo, a pesar de su interés intrínseco, su discusión es irrelevante para el problema que justifica esta entrada hoy.

Lo relevante es la estacionalidad anual y su modelización. Obviamente, las oscilaciones en la _mortalidad base_ que recogen se deben, directa o indirectamente, al efecto de la temperatura. La pregunta es: ¿recoge una sinusoide adecuadamente ese efecto de la tempertura? La respuesta es no. Y lo sabe hasta el refranero: _en Madrid, nueve meses de invierno y tres de infierno_. Efectivamente, existe una asimetría tanto en la amplitud como en la duración más o menos sutil entre los picos del invierno y los valles del verano de los que la sinusoide _hace abstracción_.

El problema puede mitigarse de varias maneras. Por ejemplo, añadiendo más armónicos (senos y cosenos con periodos 365/2, por ejemplo) o reemplazando la sinuoside por _splines_ (que es lo que hace la nueva versión de MOMO).

Pero aun con estos modelos más sofisticados, siguen apareciendo problemas de ajuste en ciertos _meses intermedios_, los de primavera y otoño: basta con que el invierno se alargue para que se sobreestime la mortalidad en primavera. Y si el invierno llega antes de hora, pasará lo mismo a finales de otoño.

En concreto, en noviembre el modelo viene a recoger el comportamiento esperado o promedio de lo que ocurre en años anteriores (sujeto además a un montón de restricciones adicionales porque los meses no se ajustan individualmente sino en combinación y continuidad con el resto) y un noviembre anómalo puede producir desviaciones.

Y, efectivamente, a la pregunta de si noviembre ha sido anómalo, [AEMET ha tenido la gentileza de contestarnos que sí](http://www.aemet.es/es/noticias/2021/12/resumen_clima_noviembre_2021):

>AEMET acaba de hacer público el balance climático mensual correspondiente a noviembre; el pasado mes ha tenido en conjunto un carácter muy frío, con una temperatura media en la España peninsular de 8,2 ºC, 1,2 ºC por debajo de la media de este mes (periodo de referencia: 1981-2010). Se ha tratado del décimo noviembre más frío desde el comienzo de la serie en 1961, y del cuarto más frío del siglo XXI, por detrás de los meses de noviembre de 2008, 2001 y 2010.

Así que lo más sensato que se me ocurre decir acerca de las desviaciones ---relativamente pequeñas, además--- de la mortalidad del mes de noviembre es que reflejan, entre otras cosas ---recuérdese que aún _estamos en pandemia_--- un adelanto del invierno que el modelo base no puede detectar. Obviamente, esta es una hipótesis que habría que contrastar con lo ocurrido en otros países (aunque sí, EuroMOMO parece apuntar a que ese pudiera ser el caso también, aunque la evidencia está confundida con el impacto de la sexta (¿sexta?) ola) o en el desglose por provincias o CCAA de las series de MOMO.




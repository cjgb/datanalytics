---
author: Carlos J. Gil Bellosta
date: 2020-04-08 09:13:00+00:00
draft: false
title: 'MoMo: una documentación oficiosa'

url: /2020/04/08/momo-una-documentacion-oficiosa/
categories:
- estadística
tags:
- isciii
- modelos
- mortalidad
---

Estos días se habla de [MoMo](https://www.isciii.es/QueHacemos/Servicios/VigilanciaSaludPublicaRENAVE/EnfermedadesTransmisibles/MoMo/Paginas/MoMo.aspx) y por primera vez en quince años largos, el público está contemplando gráficas como

![](/wp-uploads/2020/04/momo.png)

que resumen lo más jugoso del sistema. MoMo (de monitorización de la mortalidad) es un sistema desarrollado por el ISCIII para seguir en tiempo _casi_ real la evolución de la mortalidad en España.

Utiliza como fuente de datos fundamental la procedente de los registros civiles informatizados, que son la práctica mayoría (aunque no todos: queda excluido ~5% de la población). Además, las defunciones tienen cierto retraso en la notificación, como ya he comentado [aquí](https://www.datanalytics.com/2020/03/12/monitorizacion-diaria-de-la-mortalidad/).

En la gráfica anterior, los datos más actuales estarían muy por debajo de 1000 (y en el último día, muy cerca de 0) si no fuese por un modelo que describí [aquí](https://www.datanalytics.com/2019/07/03/modelizacion-de-retrasos-una-aplicacion-del-analisis-de-supervivencia/) para evitar dos cosas:

* que los gráficos sean antiestéticos, con una línea negra que desciende en picado hacia el cero;
* que aparezcan artefactos debidos al modelo de corrección del retraso.

El modelo de corrección del retraso _tiende_ a la _media_ por construcción tal y como se aprecia en la figura anterior. Por supuesto, la _media_ es el valor _correcto_ casi siempre, pero no en los tiempos del coronavirus.

Pero eso afecta a la línea negra, la de las defunciones observadas. Sin embargo, hoy me quiero ocupar de la línea azul y de la banda morada.

Antes de eso, una precisión. Quienes sepáis de la cosa encontraréis en esta discusión cosas inhabituales, chocantes y, en algún caso, cómicas. Pero tened en cuenta que el autor del modelo es un médico (que se ha hecho famoso, además, por cuestiones que no tienen que ver con la modelización estadística y que sin ninguna duda realiza incomparablemente mejor) y... ¡a vosotros me gustaría veros poniendo inyecciones!

El modelo se ha explicado en varios sitios con un:

>MoMo se basa en un modelo restrictivo de medias móviles históricas. La tendencia se corrige alineando la mortalidad de años anteriores al año actual, utilizando la mediana anual.

Que es, por supuesto, una frase que no le dice nada a nadie. A continuación, pues, la verdad de la cosa.

MoMo modela muchas series temporales simultáneamente. En particular, las correspondientes a segmentar los fallecidos diarios por:

Por provincia y CCAA (y alguna división administrativa y climática más).
* Por sexo.
* Por grandes grupos de edad: menores de 65, 65-75, más de 75.

Es decir, hay una serie temporal para mujeres menores de 65 en Murcia, otra para hombres mayores de 75 en Galicia, otra para todo Aragón completo, etc. Aunque en los informes que publican actualmente en un ejercicio de inusitada transparencia solo se muestren las más _gordas_.

Veamos cómo _estima_ el modelo cada una de esas series. El objetivo es, para cada serie, establecer cuál debería ser la mortalidad en un día determinado y crear unas bandas de confianza (técnicamente, de _predicción_) que acoten el comportamiento esperado o normal de la mortalidad y poder así detectar desviaciones.

_[Nota: aunque las bandas tengan la etiqueta de intervalos de confianza al 99%, realmente lo son al 98%: van del cuantil al 1% al del 99%, más o menos.]_

_[Otra nota: el modelo que se describe a continuación es esencialmente no lineal; en concreto, las defunciones estimadas por el modelo para Andalucía difieren de la suma de las estimadas para cada una de sus provincias. No mucho, pero no deja de ser molesto.]_

Supongamos que hoy es 8 de abril de 2020. ¿Cómo se determinan la mortalidad estimada y sus correspondientes intervalos de confianza? Primero voy a contar casi toda la verdad y, luego, el ajuste. Casi toda la verdad es lo siguiente:

Se toma la mortalidad de los días

* 8 de abril de 2019, 2018, 2017, 2017 y 2015,
* 9 de abril de 2019, 2018, 2017, 2017 y 2015,
* 7 de abril de 2019, 2018, 2017, 2017 y 2015,
* ...
* 13 de abril de 2019, 2018, 2017, 2017 y 2015,
* 3 de abril de 2019, 2018, 2017, 2017 y 2015,

es decir, la de los días entre el 3 y el 13 de abril de los cinco años anteriores y:

* la estimación de la mortalidad es la mediana de esos números y
* los intervalos de confianza son el `q01` y el `q99` .

Claro, alguien dirá que el `q99` de unos pocos números es prácticamente el máximo de ellos. Y tendrá razón. Por eso, el código original se excluían _a manubrio_ fechas aciagas como la del accidente de Spanair, la del del metro de Valencia y otras.

¿Y el año que viene con lo del coronavirus? Pues si el código no cambia, pasarán cosas muy chistosas, seguro.

Eso de arriba es la _casi_ verdad. La verdad completa utiliza un ajuste sobre las cifras de mortalidad de años pasados porque la serie tiene una tendencia (que no pasa nada grave por considerar lineal) que hay que corregir.

No diré cómo hacía el código original, porque corregía al revés (achicando las cifras más recientes para nivelarlas con las más antiguas), sino cómo quedó después de arreglar el _bug_: para cada día se calcula la mediana de las defunciones de los 12 meses anteriores y las cifras de los años previos se elevan usando la diferencia entre las medianas correspondientes a ese año y el actual. Es decir, si hoy hay una mediana de 150 defunciones y en 2015 había 140, las cifras de 2015 se _corrigen_ sumando 5.

Eso es esencialmente todo. Llamadlo como queráis (_nonparametric nowcast_ sería un buen nombre) pero, por amor de Dios, no lo probéis en casa.
---
author: Carlos J. Gil Bellosta
date: 2020-10-19 09:13:00+00:00
draft: false
title: El "nowcast" de MOMO, por qué sobreestima en el año del coronavirus y qué pasará
  en los siguientes si no se remedia

url: /2020/10/19/el-nowcast-de-momo-por-que-sobreestima-en-el-ano-del-coronavirus-y-que-pasara-en-los-siguientes-si-no-se-remedia/
categories:
- estadística
- números
tags:
- mediana
- momo
- nowcast
- outliers
---




Hablo de MOMO de nuevo. Esta vez por culpa de la sobreestimación de las defunciones esperadas:








https://twitter.com/buceadorestadi3/status/1317061603905490944








¿Cómo estima MOMO las defunciones esperadas? Lo voy a explicar en tres pasos que se afinan secuencialmente.







**Paso 1:** Imaginemos que queremos realizar lo que algunos llaman el _nowcast_ correspondiente al día de hoy, 18 de octubre de 2020 para alguna de las series que monitoriza MOMO. Podría tomar la mediana de los días 18 de octubre de los años 2019, 2018,... hasta, no sé, 2014.







**Paso 2:** Por varios motivos (n demasiado pequeño, [estacionalidad intrasemanal](https://www.datanalytics.com/2019/07/09/estacionalidad-semanal-de-la-mortalidad/), interés en calcular intervalos de predicción, etc.), en lugar de tomar solo los 18 de octubre, se podrían tomar los 7 días alrededor del 18 de octubre de los años anteriores, es decir, los días 15-21 de octubre de los años 2019,..., 2014 y tomar las correspondientes medianas (y sus cuantiles).







**Paso 3:** Pero la mortalidad de 2014 y la de 2019 no son comparables directamente. La mortalidad tiene [una tendencia](https://www.datanalytics.com/2017/12/01/simpson-de-nuevo-ahora-con-la-mortalidad/) y la mediana del número diario de defunciones ha venido creciendo en 10-20 al año en los últimos tiempos. Así que las cifras de los años anteriores (2014-2019) se corrigen así:





  * Se toma la mediana de las defunciones diarias de los años correspondientes, $latex m_i$.  * Se toma la mediana de los últimos 365 días (19 de octubre de 2019-hoy), $latex m_a$ (nótese: no del año corriente sino, insisto, los últimos 365 días).  * Si el 16 de octubre de 2015 se observaron $latex x$ defunciones, en el cálculo de la mediana se usa el valor $latex x + (m_a - m_i)$. El efecto de la corrección $latex m_a - m_i$ consiste en _elevar_ (típicamente es un incremento) el valor $latex x$ al que le correspondería _hoy_.





Y creo que ahora es evindente el motivo de la sobreestimación en el _nowcast_: el covid ha inflado $latex m_a$. De hecho, ese valor ha pasado de crecer (para la serie nacional) en 10-20 defunciones al día ha dar un salto de unas 40 entre el $latex m_i$ de 2019 y el valor que se está usando estos días. Se usó la mediana por su resistencia frente a _outliers_ (por ejemplo, la mortalidad en invierno puede variar mucho de año en año a causa de la gripe), pero ni esta ha podido aguantar el envite del covid.







Y acabo con una serie de antos que he ido extrayendo de la discusión anterior por no saturarla de apartes y que listo en un orden no premeditado:





  * Las de MOMO son otras de las muchas series temporales cuyo modelado ha roto el covid (véase [esto](https://www.datanalytics.com/2020/10/05/una-potencial-consecuencia-positiva-de-lo-del-coronavirus/) o [esto](https://nadaesgratis.es/admin/estacionalidad-post-covid)) y que van a necesitar un arreglo serio.  De no hacerse, el año que viene MOMO tendrá sesgos de otro tipo (por ejemplo, sobreestimará los cuantiles superiores). Un pajarito me cuenta que la solución ya está en marcha y que podría pasar por la sustitución del sistema actual por otro más acorde con lo que se hace en otros países (véase, p.e., [esto](https://epistat.wiv-isp.be/momo/)).  * Todo modelo existe en una atmósfera de hipótesis. La llamo _atmósfera_ porque aunque está siempre presente, nos envuelve de una manera tan constante y sutil que tendemos a olvidarnos de ella. Y esa atmósfera está poblada de hipótesis aunque utilicemos los modelos menos paramétricos del mundo.   * Obviamente, esta entrada mía de hoy advierte sobre lo pueril de pensar que la mediana protege de todo tipo de _outliers_ y en cualquier situación.  * MOMO no solo estudia la mortalidad nacional absoluta sino también la mortalidad desglosada por todas las combinaciones imaginables de nivel administrativo, sexo y tramo de edad. Los resultados relativos a la primera son públicos, el resto no (¡ja!). En total, monitoriza unas 1000 series con características estadísticas tremendamente heterogéneas: las hay donde no habría inconveniente en modelarlas con un error gaussiano (p.e., las nacionales o las de CCAA grandes) y otras que consisten esencialmente en ceros con algún 1 esporádico.  * El método MOMO fue diseñado hace años y no sé cuáles fueron los motivos por los que se implementó así en lugar de haberse adoptado otras opciones. Pero sospecho que la heterogeneidad de las series que menciono en el punto anterior tendría algo que ver: no es lo mismo la serie diaria de mortalidad nacional que la de niñas menores de 15 años en Teruel.   * MOMO no tiene como objetivo (o lo considera subsidiario) cuantificar con precisión incrementos de mortalidad. Su objetivo fundamental es identificar desviaciones inesperadas de la mortalidad y generar alertas que se envían a las autoridades sanitarias correspondientes; estas alertas están basadas en la magnitud y duración de los excesos de mortalidad y tampoco son públicas. Siendo el de la cuantificación de los excesos un objetivo secundario MOMO, no corrige las cifras de mortalidad por la falta de cobertura de los registros civiles; otros proveedores con objetivos distintos, como [el INE](https://www.ine.es/experimental/defunciones/experimental_defunciones.htm), sí que lo hacen.


---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2017-11-27 08:13:17+00:00
draft: false
lastmod: '2025-04-06T19:11:53.817555'
related:
- 2016-02-05-los-resultados-de-esta-investigacion-tienen-puntos-en-comun-con-la-metodologia-cientifica-aunque-en-ningun-momento-tendran-la-misma-validez-ni-tampoco-es-su-intencion-que-la-tenga.md
- 2024-10-08-cortos-stats.md
- 2019-06-05-causalidad-atribucion-madrid-central.md
- 2011-04-20-causalidad-o-asociacion-indicios-de-la-primera.md
- 2025-03-11-cortos-causalidad.md
tags:
- causalidad
- contaminación
- correlación
- eldiario
- madrid
- prensa
title: Más sobre correlaciones espurias y más sobre correlación y causalidad
url: /2017/11/27/mas-sobre-correlaciones-espurias-y-mas-sobre-correlacion-y-causalidad/
---

Hoy toca esto:

{{< x user="iescolar" id= "933661144052625408" >}}

Se trata de una invitación para leer el artículo [_Los picos de contaminación coinciden con un aumento radical en los ingresos hospitalarios_](http://www.eldiario.es/madrid/alta-contaminacion-afecta-pulmones-Madrid_0_473502958.html), un cúmulo de desafueros epilogados por el ya habitual

>[Los resultados de esta investigación tienen puntos en común con la metodología científica aunque en ningún momento tendrán la misma validez ni tampoco es su intención que la tenga.](https://datanalytics.com/2016/02/05/los-resultados-de-esta-investigacion-tienen-puntos-en-comun-con-la-metodologia-cientifica-aunque-en-ningun-momento-tendran-la-misma-validez-ni-tampoco-es-su-intencion-que-la-tenga/)

En primer lugar y antes de nada, me es obligado felicitar a los dos autores del _estudio_: desde el sector privado, sin ningún tipo de subvención pública y con coste cero para el contribuyente, han llegado a la misma conclusión que un señor, [este](https://datanalytics.com/2017/10/03/vivir-del-ruido/), que, aparte de omitir la coletilla anterior en sus artículos, nos cuesta a todos un chorro de euros cada mes.

El artículo es un sindiós, un catálogo completo de lo que no hay que hacer y trivialmente falsable. Trata de establecer una correlación, que el director del periódico eleva relación de causalidad, entre contaminación e ingresos hospitalarios urgentes por enfermedades respiratorias.

Pero digresemos sobre fuentes de correlación.

Una es la causalidad. Si hay causalidad, hay correlación. Bien.

Otra es la casualidad. V.g.,

![](/img/2017/11/correlation_causality_mountains.png#center)

Internet está lleno de ejemplos. Basta con buscar "_correlation isn't causation_" o jugar un poco con [Google Correlate](https://www.google.com/trends/correlate) para convencerse de ello.

Existe una tercera que consiste en jugar con los gráficos, sus escalas, etc., para crear apariencias de casi cualquier cosa. Hay ejemplos [aquí](https://datanalytics.com/2011/05/31/graficaca-en-el-ft/) o [aquí](https://datanalytics.com/2011/01/31/un-grafico-enganabobos/).

La cuarta es más enjundiosa. Y nada como un diagrama para sintetizarla:

![](/img/2017/11/correlation_causation_common_cause.jpg)


El gráfico anterior explora tres posibles circunstancias en las que pueden aparecer correlaciones entre dos variables (enfermedad y exposición). La primera, la más trivial y a la que se atiene el artículo, es la causal. La última es menos relevante para lo que traemos entre manos. La fundamental es la de en medio: existe una causa común que modula tanto la exposición como la enfermedad.

En este caso, esa causa común es el invierno. El invierno favorece la fijación de los contaminantes a ras de suelo. El invierno afecta a la gente con enfermedades respiratorias incluso donde la contaminación no es apreciable. Fin.

Es posible que alguien piense (es encomiable) que los dos efectos se suman y pretenda deslindar el uno del otro. Tendrá que tener muy buena suerte para poder distinguir el primero y muy fuerte (el del frío) de otro mucho menor que está además condicionado por una variable, la exposición a la contaminación, que es imposible de medir decentemente. Es algo solo es abordable con dinero de los demás.

En definitiva, existen disciplinas enteras (véase [esto](https://datanalytics.com/2016/10/31/modelos-graficos-probabilisticos-en-coursera/) y [esto](https://datanalytics.com/2014/06/24/causalidad-a-la-pearl-y-el-operador-do/)) que estudian estas cuestiones y con cuyos rudimentos conviene familiarizarse antes de pontificar.

Y ya.
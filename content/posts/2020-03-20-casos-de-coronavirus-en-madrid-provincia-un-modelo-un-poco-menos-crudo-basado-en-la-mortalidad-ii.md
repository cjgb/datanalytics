---
author: Carlos J. Gil Bellosta
categories:
- r
- estadística
date: 2020-03-20 09:18:28+00:00
draft: false
lastmod: '2025-04-06T19:12:11.085069'
related:
- 2020-03-19-casos-de-coronavirus-en-madrid-provincia-un-modelo-muy-crudo-basado-en-la-mortalidad.md
- 2020-05-07-coronavirus-cualitativo.md
- 2020-10-23-comentarios-varios-sobre-un-articulo-de-el-pais-sobre-momo.md
- 2020-04-08-momo-una-documentacion-oficiosa.md
- 2020-03-12-monitorizacion-diaria-de-la-mortalidad.md
tags:
- coronavirus
- mortalidad
- r
- stan
title: 'Casos de coronavirus en Madrid provincia: un modelo un poco menos crudo basado
  en la mortalidad (II)'
url: /2020/03/20/casos-de-coronavirus-en-madrid-provincia-un-modelo-un-poco-menos-crudo-basado-en-la-mortalidad-ii/
---

_[Nota: el código relevante sigue estando [en GitHub](https://github.com/cjgb/covid_madrid). No es EL código sino UN código que sugiere todos los cambios que se te puedan ocurrir. Entre otras cosas, ilustra cómo de dependientes son los resultados de la formulación del modelo, cosa muchas veces obviada.]_

Continúo con la entrada de [ayer](https://datanalytics.com/2020/03/19/casos-de-coronavirus-en-madrid-provincia-un-modelo-muy-crudo-basado-en-la-mortalidad/), que contenía más errores que información útil respecto a objetivos y métodos.

Los objetivos del análisis son los de obtener una estimación del número de casos activos de coronavirus en la provincia de Madrid. La de los casos oficiales tiene muchos sesgos por culpa de los distintos criterios seguidos para determinarlos a lo largo del tiempo. Sin embargo, es posible que los fallecimientos debidos al coronavirus, antes al menos de que se extienda el _triaje de guerra_, son más fiables. Eso sí, la conexión entre unos (casos) y otros (defunciones) depende de una tasa de letalidad desconocida. El objetivo del modelo es complementar la información de los casos notificados con la de defunciones.

Me apoyo, además, en [esta entrada de blog](https://medium.com/@carlosbort/coronavirus-podr%C3%ADa-haber-hasta-100-veces-m%C3%A1s-contagiados-de-los-reportados-7f54cbcdeec) en la que aprendemos que:

* Un contagiado, de morir, lo hace al cabo de unos 22 días de contagio (aunque en nuestro modelo, los sujetos morirán entre los días 6 y 22 sin distingos entre ellos).
* Un contagiado, de sanar, lo hace al cabo de unos 27 días.
* Un contagiado puede contagiar a otros durante todo el periodo hasta que al final muere o sana.

Los datos disponibles son los de [fallecidos en Madrid por día tal como los provee Datadista](https://github.com/datadista). El modelo del modelo (es decir, uno que estás invitadísimo a criticar, reescribir, adaptar y, cómo no, mejorar), está disponible en [GitHub](https://github.com/cjgb/covid_madrid).

El modelo que propongo tiene una limitación importante: todos los sujetos tienen la misma probabilidad de morir en caso de contagio. Por otro lado, he tratado de resolver el problema de la variabilidad de la tasa de transmisión (no va a ser igual en pleno 8M que ahora que estamos encerrados en casa) implementando algo parecido a un _gaussian random field_ à la INLA para el famoso R0.

El hecho de incorporar la mortalidad observada infla los casos esperados de  enfermos en comparación a un modelo más naif que solo tiene en cuenta lo que dicen las autoridades. Aunque la variabilidad, lo confieso, depende grandemente de las variantes del modelo usado.

Los gráficos que resumen el modelo (que tal vez vaya actualizando) pueden consultarse en GitHub. Las del día en que escribo son:

![](/img/2020/03/Rplot-972x1024.png#center)

donde se comparan los casos oficiales  (en rojo) con las estimaciones del modelo y

![](/img/2020/03/Rplot01-972x1024.png#center)

que muestra los casos estimados _hoy_.
---
author: Carlos J. Gil Bellosta
date: 2017-09-05 08:13:18+00:00
draft: false
title: Predecir a los predictores por incordiar

url: /2017/09/05/predecir-a-los-predictores-por-incordiar/
categories:
- estadística
tags:
- elecciones
- encuestas
- estadística
---

Sirve esta entrada para hacer saber lo fundamental del trabajo de fin de master (TFM en lo que sigue) de [Susana Huedo](https://www.linkedin.com/in/susana-huedo-garc%C3%ADa-7478b1143/) (que busca trabajo y es una chica muy sabida, aplicada y espabilada) en el [CIFF](http://www.ciff.net/). Los TFM que propongo y acabo supervisando jamás tienen vocación de criogénesis anaquélica. A Susana le sugerí un tema muy _punk_ y con recorrido: [tratar de] predecir a los predictores. Fundamentalmente, para joder.

Los chefs de encuestas electorales tienen dos discursos —uno previo y otro posterior a la publicación de los resultados—, una serie de recetas y datos que solo [excepcionalmente](https://www.datanalytics.com/2012/10/08/las-cosquillas-de-los-sondeos-electorales/) publican. Dirán que se ciñen a una metodología científica, etc. Literatura.

Existe una _metodología_ alternativa, una hipótesis malévola, que es la que explora el TFM: que los _chefs_ ignoran sus datos y, simplemente, emplatan el _consenso_ de las últimas encuestas publicadas con aliño del sesgo ideológico del medio que apoquina. En términos matematicoides,


    encuesta ~ consenso + sesgo


Esta manera de cocinar no deja de ser una hipótesis en tanto que no tengamos metafísico acceso al pensamiento de quienes, indubitablemente, lo negarán por la cuenta que les trae. Pero podríamos usar datos para estimar su plausibilidad. En particular, podríamos tratar de predecir sus predicciones usando ese esquema como modelo.

El consenso, tal como lo tiene calculado Susana, tiene este aspecto:

![](/wp-uploads/2017/09/consenso_encuestas.png)


El ajuste es un tanto menos regular que los que se encuentran publicados por ahí porque solo utilizan información previa. Los _splines_ y demás, usan ventanas que incluyen puntos del futuro incognoscibles hoy.

El sesgo (me limito al del PP aquí) por medio puede estimarse mediante una regresión lineal (donde la variable dependiente es la diferencia entre el valor publicado y el consenso y la independiente el medio) y no sorprenderá a nadie:

![](/wp-uploads/2017/09/sesgo_encuestas.png)


Algunas de las predicciones obtenidas a toro pasado tienen esta pinta:

![](/wp-uploads/2017/09/predicciones_encuestas.png)


Que no está mal del todo, aunque son las que dormirán en una estantería. Las más interesantes deberían ser las que debieran dar continuidad a este trabajo: una aplicación _web_ que anuncie los resultados que publicarían _mañana_ los distintos medios.

Esa es una de las futuras líneas de trabajo que emanan de este.

La otra es aprovechar parte del código generado para armar un protopaquete de R dirigido al análisis electoral en España. De momento, aunque solo fuese eso, que pudiese descargar los datos que hay por ahí. Y sobre eso, lo que sea menester.

**Nota metodológica:** Hay una manera más sofisticada y preferible de ajustar el modelo anterior. Nótese que se calcula primero el consenso y luego el sesgo. Pero una vez obtenido el sesgo, éste podría utilizarse para afinar el consenso. Etc. En definitiva, que consenso y sesgo deberían estimarse de una. Pero esto, recuerdo, es un TFM.

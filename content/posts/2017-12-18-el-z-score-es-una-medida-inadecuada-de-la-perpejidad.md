---
author: Carlos J. Gil Bellosta
categories:
- estadística
- probabilidad
date: 2017-12-18 08:13:26+00:00
draft: false
lastmod: '2025-04-06T18:48:27.353583'
related:
- 2021-02-05-separacion-perfecta-en-el-modelo-de-poisson.md
- 2020-07-17-mas-sobre-la-presunta-sobredispersion-en-el-modelo-de-poisson.md
- 2020-07-22-aun-mas-sobre-la-presunta-sobredispersion-en-modelos-de-poisson.md
- 2020-10-21-z-scores-p-scores-y-el-problema-de-las-areas-pequenas.md
- 2012-01-12-localidad-globalidad-y-maldicion-de-la-dimensionalidad.md
tags:
- modelos
- poisson
- probabilidad
- z-score
title: El z-score es una medida inadecuada de la perplejidad
url: /2017/12/18/el-z-score-es-una-medida-inadecuada-de-la-perpejidad/
---

Tenemos un dato y un valor de referencia. Por ejemplo, el valor predicho por uno modelo y el observado. Queremos medir la distancia entre ambos. ¿En qué unidades?

Antes de eso, incluso, ¿para qué queremos medir esa distancia? Esta es la pregunta fácil: para ver cómo encaja en el modelo propuesto, para ver cómo lo sorprende, para cuantificar la perplejidad.

Los estadísticos están acostumbrados a medir la perplejidad en unas unidades que solo ellos entienden, si es que las entienden: desviaciones estándar. El _z-score_ de un residuo es el número de desviaciones estándar que lo separan de su estimación. Si es una, exclaman ¡bah!; si es dos, ¡oh!; si es tres, ¡oooh!; si es cuatro, ¡ooooooh, válgame Dios!, etc.

Restringirse al _z-score_ ahorraba a los estadísticos de antaño una consulta a la tabla de probabilidades de la normal estándar en el apéndice de algún libro viejo. Supongo que si los estadísticos de antaño hubiesen tenido más a mano la probabilidad correspondiente no nos habrían acostumbrado a manejar un indicador intermedio e inferior.

Y es inferior, entre otros motivos, por su limitado ámbito de aplicación. ¿Qué si los residuos son, por ejemplo, Poisson? Si los estadísticos nos hubiesen acostumbrado a medir errores en términos de probabilidad, el problema sería sencillo: bastaría con aplicar la función `ppois` de R para poder decir que un valor _tan_ extremo solo se vería un porcentaje dado de las veces. Y con series temporales, un porcentaje dado de los días. O mejor aún, tantas veces al año, o al siglo. Porque así debiera medirse la perplejidad.

Estas probabilidades, además, deberían tener una distribución uniforme, con lo que verificar la bondad de los modelos sería una trivialidad.

Pero como no es así y estamos anclados en lo viejuno, con errores de Poisson y muchos otros, tenemos que hacer mil malabares para simetrizar y normalizar los residuos (como [aquí](https://www.datanalytics.com/2017/12/15/la-poisson-y-la-estabilizacion-de-la-varianza/)), etc.
---
author: Carlos J. Gil Bellosta
categories:
- artículos
- ciencia de datos
- programación
- estadística
date: 2019-04-01 09:13:27+00:00
draft: false
lastmod: '2025-04-06T18:58:16.459508'
related:
- 2013-07-10-mi-definicion-de-big-data.md
- 2017-03-09-un-parrafo-afortunadisimo-sobre-las-nuevas-aptitudes.md
- 2019-10-04-varian-sobre-el-muestreo.md
- 2014-04-08-v-jornadas-de-la-ensenanza-y-aprendizaje-de-la-estadistica-y-la-investigacion-operativa.md
- 2014-07-09-estrategias-escalables-con-r.md
tags:
- big data
- estadística bayesiana
title: ¿Irán por aquí los tiros en el futuro de la "ciencia de datos"?
url: /2019/04/01/iran-por-aqui-los-tiros-en-el-futuro-de-la-ciencia-de-datos/
---

Para muchos, el futuro de la llamada ciencia de datos seguirá la estela dejada por

![](/img/2019/03/theverge.jpg)

y sus continuadores usando cosas _deep_. Pero a la vez, sin tanto estruendo y con una mucho menor cobertura mediática, otros están trazando una ruta alternativa que ilustran artículos como [_Bayes and Big Data: The Consensus Monte Carlo Algorithm_](https://ai.google/research/pubs/pub41849) (atención todos a lo que hace uno de sus coautores, [Steven L. Scott](https://sites.google.com/view/stevethebayesian/), que convierte en oro todo lo que toca). Como abrebocas, su resumen (con mi subrayado):

> Una definición útil de _big data_ es que se refiere a datos demasiado grandes para ser procesados cómodamente en una sola máquina, ya sea por cuellos de botella del procesador, la memoria o el disco. Las GPUs pueden aliviar el cuello de botella del procesador, pero los de la memoria o el disco solo pueden eliminarse dividiendo los datos entre varias máquinas. La comunicación entre un gran número de máquinas es costosa (independientemente de la cantidad de datos que intercambien), por lo que existe la necesidad de algoritmos que realicen análisis bayesianos aproximados distribuidos con una comunicación mínima. El Consensus Monte Carlo opera **ejecutando una simulación de Monte Carlo independiente en cada máquina para luego combinarlas**. Dependiendo del modelo, las simulaciones resultantes pueden ser casi indistinguibles de las que se habrían obtenido al ejecutar un algoritmo secuencialmente en sola máquina.
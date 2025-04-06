---
author: Carlos J. Gil Bellosta
categories:
- ciencia de datos
date: 2022-07-28
description: Un subproducto del análisis NLP de las entradas de nadaesgratis.es
lastmod: '2025-04-06T19:08:03.527290'
related:
- 2018-01-05-preludio-de-mas-por-venir.md
- 2017-11-14-advertencias-sobre-el-uso-de-los-n-gramas-de-google.md
- 2014-09-30-va-sobre-el-numero-de-palabras.md
- 2022-09-01-tf-idf.md
- 2015-05-07-para-los-que-buscais-proyectos-de-analisis-visualizacion-de-datos.md
tags:
- nlp
- economía
title: 'npl(nadaesgratis.es): el subproducto'
url: /2022/07/28/nadaesgratis-temas/
---

Estos días me he entretenido repasando el estado del arte en NLP y otras tecnologías que hace un tiempo no toco y que, la verdad sea dicha, cambian ---muy a mejor--- una barbaridad. A tal fin, descargué al disco duro el texto de todas las entradas de un blog que leía en tiempos, [nadaesgratis.es](https://nadaesgratis.es/) ---unas 4388 entradas, menos unas 30 que ya no existen, a lo largo de 13 años y que vienen a ocupar, en texto no comprimido, como treinta quijotes, unos 33 MB--- para mis pruebas.

La entrada de hoy es un subproducto de mis ejercicios que, seguramente, no interese a nadie. Se trata de cómo ha ido evolucionando en el tiempo en dicho blog la presencia de una serie de términos algunos de los cuales me interesan y otros no (aunque a [algunos sí](https://blog.independent.org/2022/06/07/research-interests-academic-economists/)).

El resultado es este, donde muestro para cada término ---ordenados decrecientemente por frecuencia---, el porcentaje de entradas en el año en cuestión en el que se mencionó el asunto:

![](/wp-uploads/2022/07/nadaesgratis.png)
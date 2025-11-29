---
author: Carlos J. Gil Bellosta
categories:
- ciencia de datos
date: 2022-07-28
description: Un subproducto del análisis NLP de las entradas de nadaesgratis.es
lastmod: '2025-11-29'
related:
- 2018-01-05-preludio-de-mas-por-venir.md
- 2017-11-14-advertencias-sobre-el-uso-de-los-n-gramas-de-google.md
- 2014-09-30-va-sobre-el-numero-de-palabras.md
- 2022-09-01-tf-idf.md
- 2015-05-07-para-los-que-buscais-proyectos-de-analisis-visualizacion-de-datos.md
tags:
- nlp
- economía
- nadaesgratis
title: 'npl(nadaesgratis.es): el subproducto'
url: /2022/07/28/nadaesgratis-temas/
---

Estos días me he entretenido repasando el estado del arte en NLP y otras tecnologías que hace un tiempo no toco y que, la verdad sea dicha, cambian ---muy a mejor--- una barbaridad. A tal fin, descargué al disco duro el texto de todas las entradas de un blog que leía en tiempos, [nadaesgratis.es](https://nadaesgratis.es/) para mis pruebas. Son unas 4388 entradas, menos unas 30 que ya no existen, a lo largo de 13 años y que vienen a ocupar, en texto no comprimido, unos 33 MB, es decir, como unos treinta quijotes.

La entrada de hoy es un subproducto de mis ejercicios que, seguramente, no interesará a nadie. Se trata de cómo ha ido evolucionando en el tiempo la presencia de una serie de términos. De ellos, algunos me interesan y otros no (aunque [hay gente a la que sí](https://blog.independent.org/2022/06/07/research-interests-academic-economists/)).

El resultado es el siguiente gráfico, donde muestro la evolución anual del porcentaje de entradas en los que se menciona cada término (ordenados estos por frecuencia absoluta):

![](/img/2022/07/nadaesgratis.png)

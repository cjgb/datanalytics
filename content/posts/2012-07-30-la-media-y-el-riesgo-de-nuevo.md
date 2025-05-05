---
author: Carlos J. Gil Bellosta
categories:
- estadística
- finanzas
date: 2012-07-30 07:13:14+00:00
draft: false
lastmod: '2025-04-06T19:05:18.449145'
related:
- 2012-06-05-medias-y-medianas-en-el-banco-de-espana.md
- 2016-05-31-el-extrano-caso-de-la-media-empirica-menguante.md
- 2013-05-14-la-media-la-mediana-y-el-bundesbank.md
- 2011-05-26-el-problema-de-la-media-el-problema-con-la-media.md
- 2012-06-22-las-auditorias-bancaria-de-ayer.md
tags:
- estadística
- finanzas
- media
- mediana
- spiegelhalter
title: La media y el riesgo (de nuevo)
url: /2012/07/30/la-media-y-el-riesgo-de-nuevo/
---

Hoy me han preguntado una cosa algo rara. Era alguien del departamento de riesgos de una conocida entidad financiera que quería saber cómo calcular (con SAS) la media del LTV. El LTV, aunque tiene otras acepciones, significa en este contexto _loan to value_, el cociente entre el valor de un préstamo y valor del colateral que lo respalda.

(Este LTV tiene que ver con el famoso _le financiamos el 80% del valor de la inversión_ de otras épocas. Un préstamo con un LTV bajo es seguro: el banco puede con más o menos facilidad recuperar el 100% del capital prestado; un préstamo con un LTV alto es mucho más problemático.)

El problema con el que se encontraba era que, en algunos casos, para ciertos contratos, los importes que tienen en el sistema eran (o parecían ser) erróneos y había casos de LTV con valores ridículamente altos que _afectaban a la media_. De ahí su interés por _filtrarlos_.

Mi respuesta automática: usa la mediana. Pero una sinapsis me ha hecho eco y ha rebotado la señal hacia capas más lúcidas de mi cerebro y me llevó a pensar cómo, para un departamento de riesgos, una medida de centralidad de la LTV es irrelevante. Por varios motivos.

* En primer lugar por las ponderaciones: muchos préstamos pequeños con una LTV baja pueden enmascarar unos préstamos grandes con una LTV grande (y de mucho riesgo, por tanto). Y si se calcula la media de la LTV usando ponderando por el tamaño del préstamo, el resultado global es la suma del capital prestado dividido entre la suma del colateral. ¡Algo de masiado _rudimentario_ para todo un departamento de riesgos!
* En segundo lugar, y de manera más importante, porque el riesgo puede no estar en la masa de préstamos con un LTV razonable sino en un subconjunto de los de mayor LTV. ¿Por qué entonces la media y no una selección de cuantiles altos? ¿Por qué no ya la misma distribución del LTV en lugar de resúmenes tan cuestionables como caducos?

Luego se burlan de nosotros. Nos atribuyen un comentario gañán a eso de cuando alguien mete la cabeza en el horno y los pies en la nevera. Pero luego van los departamentos de riesgos y... media al canto. Y también [el Banco de España desaporta su granito de arena](https://datanalytics.com/2012/06/12/por-que-me-quejo-del-banco-de-espana/).

[![](/wp-uploads/2012/07/neg18.png#center)
](/wp-uploads/2012/07/neg18.png#center)

Uno querría pensar, también, que [algunos de los economistas más reputados](http://www.fedeablogs.net/economia/) de este país estarían libres de ese vicio. Sin embargo, recientemente, en su bitácora plantearon [una competición](http://www.fedeablogs.net/economia/?p=23735): crear una entrada para el mismo usando datos procedentes del recientemente inaugurado centro de información estadística del notariado. Y el áccesit lo recibió Gabi Foix, de quien tomo el gráfico que figura más arriba, que escribió sobre, ¡sorpresa!, la [evolución del LTV medio](http://www.fedeablogs.net/economia/?p=23641) (aunque no lo aclara en la entrada). En descarga del autor, hay que indicar que los notarios no se han esmerado mucho y que la información que publican, como ya hice constar, [deja bastante que desear](https://datanalytics.com/2012/07/11/otra-oximoron-notarios-y-estadisticas/). Y, efectivamente, los notarios sólo publican las medias. ¡Como son notarios!

(Que conste que pensé en participar en esa competición, pero visto lo visto en el portal del notariado, lo dejé pasar).

¡Spiegelhalter, ven a España y _libera nos a malo_!
---
author: Carlos J. Gil Bellosta
categories:
- ciencia de datos
- estadística
date: 2019-07-03 09:13:52+00:00
draft: false
lastmod: '2025-04-06T18:45:50.585408'
related:
- 2017-09-13-trucos-cutrebayesianos.md
- 2020-03-20-casos-de-coronavirus-en-madrid-provincia-un-modelo-un-poco-menos-crudo-basado-en-la-mortalidad-ii.md
- 2020-04-08-momo-una-documentacion-oficiosa.md
- 2014-08-11-procesos-puntuales-una-primera-aproximacion.md
- 2012-04-11-correccion-por-exposicion-del-modelo-logistico.md
tags:
- bayes
- epidemiología
- estimación
title: 'Modelización de retrasos: una aplicación del análisis de supervivencia'
url: /2019/07/03/modelizacion-de-retrasos-una-aplicacion-del-analisis-de-supervivencia/
---

En vigilancia epidemiológica contamos eventos (p.e., muertes o casos de determinadas enfermedades). Lo que pasa es que el caso ocurrido en el día 0 puede notificarse con un retraso de 1, 2, 3... o incluso más días. En algunas aplicaciones, incluso semanas.

¿Cómo estimar el número de casos ocurridos el día 0 el día, p.e., 5?

Se puede aplicar el análisis de la supervivencia donde el evento muerte se reinterpreta como notificación. El día 0 todos los sujetos están _vivos_ y, poco a poco, van _cayendo_. Como en los consabidos modelos/gráficos de Kaplan-Meier,

![](/wp-uploads/2019/07/kaplan-meier.jpeg)

Incluso, si el retraso puede atribuirse a distintos factores (por ejemplo, el día de la semana en que se produce el evento porque la gente que los comunica deja caer el boli el viernes a las tres), pueden construirse distintas curvas, como en

![](/wp-uploads/2019/07/kaplan-meier_2.jpeg)

Hecho lo cual, ¿cómo estimar el número de casos del día 0 el día, p.e, 5? El modelo proporciona la proporción de notificados, $latex x$. Así que se hace una regla de tres y si a $latex x$ le corresponden $latex n$ notificados, a 1 le corresponderán... $latex n/x$.

Pues no, no, no, no... ¡no!

Ese modelo trivial es más inestable que el carajo. ¡Imaginad cómo puede bailar ese estimador cuando $latex x$ es del orden del 1%!

Es mucho mejor utilizar un suavizado (de inspiración bayesiana). Si $latex m$ es el número medio de notificaciones diarias, es mucho mejor utilizar

$$ n + (1 - x) m$$

que vendría a ser un promedio de nuestro modelo anterior con peso $latex x$ y otro modelo más simple (con peso $latex 1 -x$) que asigna a cada día un número de notificados igual a la media histórica.

Así funciona (y no siempre tan bien como sería deseable) [esto](https://momo.isciii.es/public/momocalor), de donde extraigo

![](/wp-uploads/2019/07/mortalidad_calor.png#center)

**Nota:** En el gráfico hay algo más, un poco más, que es lo que permite construir intervalos no muy confiables de confianza alrededor del estimador construido más o menos como se indica arriba.

**Otra nota:** Este es el tipo de cosas que hacemos en Circiter y gracias a las cuales nos distinguimos (muy favorablemente) de otras empresas donde, bueno,... la estadística... Callaré, mejor.
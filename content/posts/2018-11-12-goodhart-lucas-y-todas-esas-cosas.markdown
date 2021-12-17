---
author: Carlos J. Gil Bellosta
date: 2018-11-12 08:13:30+00:00
draft: false
title: Goodhart, Lucas y todas esas cosas

url: /2018/11/12/goodhart-lucas-y-todas-esas-cosas/
categories:
- estadística
tags:
- causalidad
- correlación
- econometría
- goodhart
- lucas
---

Como me da vergüenza que una búsqueda de Goodhart en mi blog no dé resultados, allá voy. Lo de Goodhart, independientemente de lo que os hayan contado, tiene que ver con

![](/wp-uploads/2018/11/grafico_causal.png)


es decir, un gráfico causal hiperbásico. Si la variable de interés **y** es difícil de medir, resulta tentador prestar atención a la variable observable **x** y usarla como _proxy_. Todo bien.

Pero también puede interesar operar sobre **y** y a cierta gente le puede sobrevenir la ocurrencia de operar sobre **x** con la esperanza de que eso influya sobre **y**.

Pero no, en nuestro grafo causal, **x** e **y** están correlacionadas porque ambas dependen de una tercera variable **z**. Pero no existe relación causal sobre ellos.

La [ley de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) nos advierte de lo anterior: convertir un indicador en un objetivo puede hacer que el indicador deje de serlo. Bueno, lo afirma más taxativamente (que _siempre_ deja de ser un buen indicador) y abundaré más sobre el asunto, que no es baladí, más abajo.

Ejemplos de indicadores torcidos por su uso como objetivos son la productividad (por hora de trabajo), la curva de Phillips y muchos otros. Uno de los más recientes es el de la pretensión del gobierno de conceder el título de bachillerato a quienes no hayan aprobado todas las asignaturas. Entiendo que el razonamiento para ello es que quien obtiene el título suele tener tener una vida laboral más exitosa. Pero si la relación entre esas variables es similar al de la relación causal indicada más arriba, la medida será inefectiva (en términos de primer orden) y vaya uno a saber en qué dirección apuntarán los de segundo orden.

La llamada [crítica de Lucas](https://en.wikipedia.org/wiki/Lucas_critique) está relacionada con la ley de Goodhart. Se refiere a modelos econométricos construidos sobre indicadores y proxies sin relación causal sobre las variables de interés. Operar sobre aquellas puede acabar simplemente rompiendo la correlación que recogen los modelos, siendo completamente inefectivas para conseguir los fines deseados.

Salvo que (citando de la Wikipedia)...



<blockquote>if we want to predict the effect of a policy experiment, we should model the "deep parameters" (relating to preferences, technology, and resource constraints) that are assumed to govern individual behavior: so-called "microfoundations."</blockquote>



Es decir, salvo que se consideren aquellos indicadores que tienen vínculos causales con los parámetros de interés. Que es la salvedad que falta a la ley de Goodhart para ser perfectamente universal.

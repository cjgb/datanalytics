---
author: Carlos J. Gil Bellosta
categories:
- varios
date: 2014-11-26 07:13:05+00:00
draft: false
lastmod: '2025-04-06T18:55:47.077595'
related:
- 2022-02-01-abundancia-roja.md
- 2012-03-28-contrafactualidad-radial.md
- 2024-07-02-ciencia-ingenieria.md
- 2011-08-01-dos-aplicaciones-c2bfsorprendentes-del-analisis-de-la-correlacion-canonica.md
- 2021-07-07-hayek-vs-machin-lenin.md
tags:
- dualidad
- ferrocarriles
title: 'Dualidad en la práctica: lecciones de la guerra fría'
url: /2014/11/26/dualidad-en-la-practica-lecciones-de-la-guerra-fria/
---

Uno de los conceptos más lábiles y menos aprehensibles que he encontrado en los libros desde mis tiempos de primero de carrera es el de la dualidad. El caso histórico que traigo hoy a estas páginas os ayudará a desabstraerlo. O, en el peor de los casos, os entretendrá.

En 1930, el Ministerio de Transportes de la Unión Soviética publicó un libro sobre planificación ferroviaria en el que colaboró A.N. Tolstoi estudiando un problema de optimización. En la URSS había factorías, ciudades, minas, etc. y ferrocarriles que los unían. Tolstoi calculó la capacidad máxima de la red ferroviaria y su funcionamiento óptimo.

[![trenes_urss_01](/img/2014/11/trenes_urss_01.png#center)
](/img/2014/11/trenes_urss_01.png#center)

Resolvió lo que hoy llamamos un **problema de flujo máximo**.

En 1955, en plena guerra fría, Harris y Ross publicaron un informe secreto (¿publicaron y secreto juntos?), _Fundamentals of a Method for Evaluating Rail Net Capacities_, en el que estudiaban el problema de qué nodos de la red ferroviaria soviética habría que bombardear para impedir de la manera más eficaz posible el tráfico de mercancías hacia la Europa del Este.

[![trenes_urss_02](/img/2014/11/trenes_urss_02.png#center)
](/img/2014/11/trenes_urss_02.png#center)

Planteron lo que hoy llamamos un **problema de corte mínimo**.

Lo curioso del caso es que [ambos problemas son duales](http://en.wikipedia.org/wiki/Max-flow_min-cut_theorem), es decir, de alguna manera equivalentes y _el mismo_. Solo que vistos desde lados opuestos de, en este caso, el telón de acero.
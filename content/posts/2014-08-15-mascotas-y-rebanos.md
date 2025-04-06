---
author: Carlos J. Gil Bellosta
categories:
- programación
- estadística
date: 2014-08-15 07:13:22+00:00
draft: false
lastmod: '2025-04-06T18:45:58.012198'
related:
- 2019-09-16-un-modelo-que-alimenta-una-simulacion.md
- 2024-12-03-cortos-stats.md
- 2014-10-13-los-tests-de-hipotesis-son-los-macarrones-con-cosas-de-la-nevera.md
- 2015-01-27-grandes-datos-maquinas-pequenas-y-regresiones-logisticas-con-variables-categoricas.md
- 2023-11-14-cuantas-iteraciones-mcmc.md
tags:
- programación
- estadística
title: Mascotas y rebaños
url: /2014/08/15/mascotas-y-rebanos/
---

Muchos cuidamos de nuestro ordenador casi como una mascota: le ponemos un nombre (a menudo escribo desde `tiramisu`), le hacemos algo de mantenimiento, etc. Hay quienes, incluso, decoran sus máquinas con pegatinas.

Pero llega un momento en que hay que comenzar a tratar a las máquinas no tanto como mascotas sino como rebaños. Desde una pantalla aneja a esta en la que escribo estoy manejando un _clúster_ de más de 200 GB y 50 núcleos distribuido en varias máquinas que ni sé dónde están. Además, solo espero que crezca. Ya no cuido de una mascota; cuido de un rebaño.

Cuidar rebaños implica utilizar herramientas distintas que permitan, por ejemplo, instalar el mismo _software_ a través de las distintas máquinas rápidamente, programáticamente.

Uno de los usos de este _clúster_ es ajustar varios millones de _glms_. Hay quien cuida de sus modelos, de nuevo, como si fuesen mascotas: que si el ajuste, que si el _outlier_, que si el p-valor del coeficiente, etc. Que si mi gatito no me come.

Pero varios millones de _glms_ son un rebaño. No sé muy bien cómo habrá que hacer para comprobar el ajuste, la selección de variables, la detección de _outliers_, etc. No sé si hay teoría al respecto pero si algún día doy con el libro _Rebaños de modelos_, me lo bajo de [libgen](http://libgen.org/) seguro.
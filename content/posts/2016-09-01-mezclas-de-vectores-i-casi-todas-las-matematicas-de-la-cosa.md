---
author: Carlos J. Gil Bellosta
categories:
- varios
date: 2016-09-01 08:13:00+00:00
draft: false
lastmod: '2025-04-06T18:58:02.899415'
related:
- 2016-09-02-mezclas-de-vectores-ii-un-caso-de-uso.md
- 2022-07-14-proximidad-distribuciones.md
- 2014-06-05-minimos-cuadrados-con-restricciones.md
- 2016-06-22-gbm-ii-minizacion-de-funciones-perdidas-cuadraticas-residuos-y-gradientes.md
- 2017-09-11-pues-los-svms-al-final-no-son-tan-exoticos.md
tags:
- matemáticas
- mezclas
title: 'Mezclas de vectores (I): casi todas las matemáticas de la cosa'
url: /2016/09/01/mezclas-de-vectores-i-casi-todas-las-matematicas-de-la-cosa/
---

Arranco con esta una serie que estimo que será de tres entradas sobre cómo mezclar vectores con una aplicacioncilla que tal vez sorprenda a alguno.

Comenzaré fijando un vector $x_1 \in R^n$ y una función _casi_ biyectiva $f_1:R^n \mapsto R^m$ todo lo suave (continua, diferenciable, etc.) que nos dé la gana. _Casi_ no es un concepto matemático; el concepto propiamente matemático usaría el prefijo cuasi-, pero espero que se me permita seguir y prometo que lo que quiero dar a entender quedará claro más adelante.

Construyo entonces la función $h(x, x_1, f_1) = \|f_1(x) - f_1(x_1) \|$ y busco su mínimo (que bien pudiera ser local) mediante cualquier técnica al uso. Cabe esperar que ese mínimo, $\hat{x}_1$ sea parecido a $x_1$. Si la función fuese biyectiva y el método de minimización perfecto, $\hat{x}_1 = x_1$ y todo sería aburridoramente perfecto. Afortunadamente para lo que sigue, no va a ser así el caso.

Tomo un segundo vector $x_2$ y otra función $f_2$ similar a la anterior y defino, para un valor $\alpha \in [0,1]$ la función

$$ h(x, \alpha, x_1, f_1, x_2, f_2) = \alpha h(x, x_1, f_1) + (1-\alpha) h(x, x_2, f_2)$$

¿Qué cosa esperamos de su mínimo? Tiene que ser algo que se parezca a la vez a $x_1$ y a $x_2$, una especie de mezcla de ambos vectores.

¿No es increíble? No, no lo es en absoluto. Pero mostraré mañana cómo se le puede sacar punta a la idea de una manera sorprendente.
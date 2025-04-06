---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2020-02-18 09:13:00+00:00
draft: false
lastmod: '2025-04-06T18:49:28.366901'
related:
- 2024-04-04-sobre-cis.md
- 2016-02-04-y-termino-con-lo-de-los-intervalos.md
- 2021-04-01-por-que-es-tan-enrevesada-la-definicion-de-intervalo-de-confianza.md
- 2020-10-26-intervalos-de-confianza-y-la-velocidad-de-la-luz.md
- 2016-02-03-otra-vuelta-al-caso-del-test-que-rechaza-y-el-intervalo-que-contiene.md
tags:
- estadística
- intervalo de confianza
title: La probabilidad de que el parámetro esté en el intervalo de confianza es .95
url: /2020/02/18/la-probabilidad-de-que-el-parametro-este-en-el-intervalo-de-confianza-es-95/
---

Si dices lo anterior, corres el riesgo de que un estadístico gruñón frunza mucho el ceño.

Hace muchos, muchos años, las gentes ávidas de saber más acudieron al tabernáculo donde se congregaban los sapientísimos estadísticos frecuentistas implorándoles una herramienta con que estimar el error de sus estimaciones puntuales. Estos cavilaron luengamente y décadas después entregaron a los representantes de los hombres, reunidos en el ágora, unas tablas de piedra que tenían grabadas a cincel la teoría de los intervalos de confianza. Pero, les advirtieron, los intervalos de confianza no son lo que vosotros queréis sino otra cosa y a quien ose interpretarlos torcidamente le pasará lo que a aquella señora que comió la manzana inadecuada: será expulsado del paraíso de la teoría _como Dios manda_.

Así, desde entonces, la advertencia se propagó por los manuales estadísticos al uso, como por ejemplo, el de Berger y Casella,

![](/wp-uploads/2020/02/beger_casella_ci.png#center)

O en [_Estadística Básica Edulcorada_](https://bookdown.org/aquintela/EBE/intervalos-de-confianza.html#interpretacion),

>Así, por ejemplo, un intervalo de confianza al 95% garantiza que, si tomamos 100 muestras, el verdadero valor del parámetro estará dentro del intervalo en **aproximadamente **el 95 de los intervalos construidos.

Vale, bien, de acuerdo. Para los frecuentistas, el parámetro es fijo y el intervalo es aleatorio. Etc. Pero, ¿aún podemos decir que la probabilidad de que nuestro intervalo de confianza, el que tenemos _aquí y ahora_, contenga el parámetro verdadero es, p.e., del 95%? ¿O tenemos que seguir esgrimiendo siempre el perifrástico subterfugio para no incurrir en la ira de los puristas?

Ahí va un argumento frecuentista hasta el tuétano.

* Hemos creado nuestro intervalo de confianza con nuestros datos usando un algoritmo implementado en, p.e., R, que ha sido usado para crear intervalos de confianza, digamos, ~1000 millones de veces.
* De los ~1000 millones de intervalos de confianza, ~950 millones contenían al parámetro de interés y ~50 millones, no.
* Entonces, nuestro intervalo de confianza es una bola extraída de una urna conceptual con ~950 millones de bolas blancas y ~50 millones de bolas negras.
* Luego la probabilidad de que nuestro intervalo de confianza contenga el parámetro de interés es del ~95%.

¿A qué viene decir que si repetimos el experimento muchas veces blá, blá, blá, cuando realmente, nuestro experimento ya ha sido repetido muchas veces? ¿No es precisamente eso (i.e., construir las probabilidades en términos de frecuencias) lo que postula la estadística frecuentista?
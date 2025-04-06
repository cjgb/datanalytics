---
author: Carlos J. Gil Bellosta
categories:
- finanzas
date: 2022-09-15
description: 'Perder ganando: consecuencias de la no ergodicidad'
lastmod: '2025-04-06T19:01:39.943110'
related:
- 2024-10-03-ergodicidad.md
- 2011-05-12-c2bfque-nos-jugamos.md
- 2012-01-19-cosa-prodigiosa-ahora-con-palabras-ii.md
- 2014-01-09-como-apostar-si-tienes-que.md
- 2011-05-16-c2bfque-nos-jugamos-addenda-no-queremos-jugarnos-nada.md
tags:
- finanzas
- economía
title: Perder ganando (o a la inversa)
url: /2022/09/15/perder-ganando/
---

Partes con un capital de 100 euros y te ofrecen un juego: se tira una moneda al aire y si sale cara, tu capital se multiplica por 1.5 (te dan 50 euros); pero si sale cruz, te quedas con el 60% de él (pierdes 40 euros).

El juego tiene un _valor esperado_ de $5$ ($= .5 \times 50 - .5 \times 40$) por lo que, bajo cierto punto de vista, merece la pena _apostar_. (Bajo otros que involucran el principio de la aversión al riesgo, tal vez no, pero esa es otra historia).

Ahora, tienes la opción de iterar. De nuevo, si tu capital en un momento determinado es $x$, el valor esperado de cada iteración es
$$.5 \times .5 \times x - .5 \times .4 \times x = 0.05 \times x > 0.$$
Así que, por el mismo principio, merece la pena seguir apostando.

Por otro lado, _en promedio_ (esto es mentira: véase más abajo), vas a obtener tantas caras como cruces, por lo que tu capital después de $2n$ tiradas se convertirá en $100 (1.5 \times .6)^n = 100 \times .9^n$, que tiende a cero.

Para saber más sobre el asunto, [_Ergodicity economics: a primer_](https://www.jasoncollins.blog/ergodicity-economics-a-primer/).

Pero antes, unos números:

La proporción $p$ de caras necesarias para mantener el capital al cabo de $n$ tiradas viene dado por $1.5^{pn}.6^{(1-p)n} = 1$, que da $p = 0.5574$. Si $X$ es el número de caras en $n$ tiradas, para mantener tu capital necesitas que $X \ge pn$, o bien que $X/n \ge p > .5$. Pero $X/n$ es aproximadamente normal $N(.5, .5 / \sqrt{n})$, así que la probabilidad de mantener el capital converge a cero.
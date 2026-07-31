---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2026-07-30
description: Un ejemplo simple e introductorio de lo que se ha venido a denominar
  «persuasión bayesiana».
lastmod: '2026-07-24T02:48:43.622220'
related:
- 2022-10-04-bayesianismo-frecuentismo-teoria-decision-01.md
- 2025-06-05-bayesianismo-epistemologia.md
- 2021-03-04-sobre-el-teorema-de-aumann.md
- 2021-02-08-el-teorema-de-bayes-como-la-version-modal-del-modus-tollens.md
- 2022-09-06-problema-estadistica-frecuencias-naturales.md
tags:
- estadística bayesiana
- persuasión
- teorema de bayes
- frecuencias naturales
title: De cómo B, un individuo con segundas intenciones, engaña al agente racional
  A a pesar de saber que B está interesado en mentirle
url: /2026/07/30/persuasion-bayesiana/
---

Por fijar ideas, supongamos que:

- A es un aficionado al cine que decide pagar por ver una película si la probabilidad de que sea buena es del 50% o más.
- Solo el 30% de las películas son buenas.

Así las cosas, en principio, A nunca iría al cine: sin otra información, la probabilidad de que una película sea buena es del 30%, por debajo de su umbral de decisión. Pero es que, además:

- B es un crítico de cine a sueldo de la industria. Le interesa que la gente vaya al cine.
- B sabe si una película es buena o mala.
- A es un agente racional y conoce sobradamente los incentivos de B.
- B escribe críticas de cine en el periódico y puede elegir entre dar una crítica positiva o negativa a una película determinada.

Como A lee la crítica de B, este puede engañarle. No, por supuesto, de la manera burda. Si B hiciese críticas sistemáticamente buenas de todas las películas, A no obtendría de ellas información adicional y su probabilidad a posteriori quedaría anclada en el 30%.

Pero B puede hacer lo siguiente:

1. Escribir críticas positivas de películas que son buenas.
2. Escribir críticas positivas de tres de cada siete películas malas.
3. Escribir críticas negativas para el resto.

En lo que sigue voy a usar «frecuencias naturales» en lugar de aplicar el teorema de Bayes, por no asustar a los lectores menos duchos en el manejo de fracciones.

Supongamos que hay diez películas: las buenas son la 1, 2 y 3; las malas, el resto. B hace críticas positivas de las películas 1, 2, 3, 4, 5 y 6 y malas de las 7, 8, 9 y 10.

Aunque A sabe que solo hay tres películas buenas entre las diez, de entre las que tienen críticas positivas hay tres de seis, la mitad. Es decir, para esas seis películas, la probabilidad de que una película sea buena es del 50%, justo en el umbral de decisión. Y, por lo tanto, las ve todas.

El buen hacer de B consigue que A, en lugar de cero, vea nada menos que seis películas.

Para saber más al respecto, [esto](https://www.aeaweb.org/articles?id=10.1257/aer.101.6.2590).
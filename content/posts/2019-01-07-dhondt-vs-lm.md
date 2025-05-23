---
author: Carlos J. Gil Bellosta
categories:
- números
date: 2019-01-07 08:13:26+00:00
draft: false
lastmod: '2025-04-06T19:00:05.662253'
related:
- 2019-03-19-si-das-la-regla-por-buena-enhorabuena-estas-usando-el-sistema-dhondt.md
- 2012-10-08-las-cosquillas-de-los-sondeos-electorales.md
- 2016-05-09-encuestas-electorales-medios-y-sesgos-ii.md
- 2012-04-04-de-dhondt-a-banzhaf.md
- 2016-07-04-gestion-de-la-mendacidad-encuestoelectoral-los-numeros.md
tags:
- dhondt
- elecciones
title: d’Hondt vs lm
url: /2019/01/07/dhondt-vs-lm/
---

Se cuestiona Malaprensa ([aquí](http://www.malaprensa.com/2019/01/podria-vox-sacar-45-diputados-con-un.html)) si con un 12.9% de los votos podría Vox obtener 45 escaños. Precisamente porque es lo que le correspondería con una regla de tres. Pero todo el mundo sabe que entre lo uno y lo otro media la regla de d'Hondt, causa de resabidas distorsiones.

Y, tras realizar las debidas simulaciones, concluye que sí, que es perfectamente posible.

Pero eso es algo que ya sabíamos los que habíamos leído [esto](https://www.lancaster.ac.uk/fass/events/epop2013/docs/SLIDES.%20A%20statistical%20model%20to%20transform%20election%20poll%20proportions%20into%20representatives.%20The%20Spanish%20case.pdf), que viene a decir que sí, que por contraintuitivo que parezca, `lm` atribuye escaños no mal. Para vagos, selecciono:

>A strong linear relationship exists between the proportions of votes and seats a party gains.
>Despite the strong global relationship (R2=0.98), it seems  that a single equation for each party can yield better results.
>For small national parties, the linear relationship seems to work after 4% of votes, a logit transformation maybe could be useful for the whole range.
>
> Jose M. Pavia, "A statistical model to transform election poll proportions into representatives: The Spanish case"
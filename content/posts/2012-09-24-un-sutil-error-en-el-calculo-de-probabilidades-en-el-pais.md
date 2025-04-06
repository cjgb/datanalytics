---
author: Carlos J. Gil Bellosta
categories:
- probabilidad
date: 2012-09-24 07:57:24+00:00
draft: false
lastmod: '2025-04-06T18:46:06.037850'
related:
- 2018-05-28-los-extranos-numeros-de-los-muertos-en-carretera-por-accidente.md
- 2012-04-30-contar-c2bffacil.md
- 2017-01-18-va-de-si-hay-una-o-dos-lambdas.md
- 2020-05-13-en-defensa-de-simon-variaciones-diarias-de-la-mortalidad.md
- 2011-06-01-micromuertes.md
tags:
- percepción del riesgo
- probabilidad
- riesgo
- prensa
title: Un (¿sutil?) error en el cálculo de probabilidades en El País
url: /2012/09/24/un-sutil-error-en-el-calculo-de-probabilidades-en-el-pais/
---

[Leo en El País](http://economia.elpais.com/economia/2012/09/20/actualidad/1348166062_597975.html) que

>La aviación es el modo de transporte más seguro de cuantos existen. Los expertos califican una organización como ultrasegura cuando ofrece un ratio de un accidente por cada millón de operaciones. 2011 se cerró en Europa con cero accidentes aéreos. En todo el mundo se registraron 0,37 accidentes por cada millón de vuelos. Estadísticamente hablando, una persona que volara diariamente tendría un accidente en 3.000 años.

Hummmm... a primera vista, sabiendo que 3000 años viene a ser un millón de días, me salían no 3000 años sino 9000, el triple. ¿Estaría en lo cierto?

Si se registran 0.37 accidentes por millón de vuelos, cabe esperar que la ley que rige el fenómeno sea Poisson de parámetro 3.7e-07. De acuerdo con la relación existente entre la distribución de Poisson y la exponencial, sabemos que el _tiempo_, es decir, el número de vuelos, hasta el siguiente accidente está gobernado por una distribución exponencial con el mismo parámetro.

Y que la media de dicha distribución, es decir, el número medio de vuelos que cabe esperar hasta el siguiente accidente, es el inverso del parámetro, es decir, 2.7 millones de vuelos. A razón de uno por día, serían 7400 años. Y salen 9100 años si uno realiza las aproximaciones habituales: asumir que 0.37 es un tercio y que el número de días de un año es, también, un tercio de mil.

No, no, no me impresionan las habilidades probabilísticas de El País.
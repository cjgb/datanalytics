---
author: Carlos J. Gil Bellosta
categories:
- cortos
date: 2025-06-03
description: El algoritmo FSRS para Anki y algunos otros asuntos más sobre modelización
  estadística
lastmod: '2025-08-31T15:59:39.071606'
related:
- 2022-09-13-errores-cierto-tipo-encuestas.md
- 2025-04-22-cortos-stats.md
- 2022-03-03-error-sesgo-modelos-lineales.md
- 2022-02-17-examenes-probabilisticos.md
- 2016-06-29-por-una-vez-accedo-a-hablar-de-algo-de-lo-que-no-se.md
tags:
- modelización
- splines
- meehl
- intervalos de confianza
- anki
title: El algoritmo FSRS para Anki y algunos otros asuntos más sobre modelización
  estadística
url: /2025/06/03/cortos-modelizacion/
---

### I.

[_Understanding Basis Spline (B-spline) By Working Through Cox-deBoor Algorithm_](https://www.kenkoonwong.com/blog/bspline/), sobre los B‑splines, el algoritmo de Cox–de Boor para calcularlos y construirlos y cómo usarlos en modelos. Ajusta un modelo con `mgcv:gam` primero y luego lo reproduce con `lm` para entender cuáles son esas nuevas variables que forman la base de los _splines_ que `gam` genera _automágicamente_. Una vez ahí, pasa a ilustrar cómo utilizar los _splines_ en `stan`.

### II.

Gelman sobre la [heurística de la inversión del error](https://statmodeling.stat.columbia.edu/2025/04/22/the-error-reversal-heuristic-how-would-you-have-reacted-had-the-error-gone-in-the-opposite-direction/). La idea es la siguiente:

   - Alguien dice que un resultado es 100 y que 100 es muy significativo.
   - Pero luego se descubre un error y el resultado no es 100 sino 10 (apenas relevante).
   - Sin embargo, los autores del estudio tienden a alegar que el error no cambia las conclusiones.

La heurística que plantea Gelman es pensar en qué hubiera pasado de ocurrir al revés:

   - Primero se publica el valor de 10.
   - Luego se descubre un error y resulta que la estimación real es 100.

En tal caso, ¿seguirían alegando los autores que el error es intrascendente y que no cambia nada? ¿O dirían, más bien, que eso refuerza en grado sumo su tesis hasta el extremo de la confirmación?

### III.

José Luis Cañadas escribe sobre el [área de aplicación](https://muestrear-no-es-pecado.netlify.app/2025/05/aoa.html), un concepto que tiene que ver con el grado de cobertura que ofrecen los datos de entrenamiento del _universo_ completo. En efecto, los modelos estadísticos, en principio, predicen _cualquier valor_ y uno querría saber en qué medida _interpolan_ información conocida o _extrapolan_ para sujetos de los que no tenemos otros similares. El concepto del _área de aplicación_ trata de construir un indicador del grado de interpolación vs extrapolación.

### IV.

A estas alturas del partido, debería estar bastante claro ya que los _juicios actuariales_ son superiores a los _clínicos_. En la frase anterior uso una nomenclatura tal vez desfasada pero que remite a los primeros estudios de la cuestión, como
[este](https://datanalytics.com/2014/06/16/tan-actual-25-anos-despues/) y otros que se pueden encontrar [aquí](https://datanalytics.com/tags/meehl/).

Los sistemas automáticos, en principio, superan a los humanos a la hora de emitir juicios. Pero algunos de nuestros colegas basados en la química del carbono se esfuerzan denodadamente en buscar áreas en las que los humanos todavía lo podamos hacer mejor que las máquinas. Así ha de leerse el texto
[_Dumb statistical models, always making people look bad_](https://statmodeling.stat.columbia.edu/2025/04/18/dumb-statistical-models-always-making-people-look-bad/)
que, a diferencia de lo que se suele leer al respecto en español, sí que va más allá del [efecto _pierna rota_](https://datanalytics.com/2022/02/08/efecto-pierna-rota/).

### V.

Un problema de la aplicación de la estadística bayesiana es que tiende a proporcionar intervalos de confianza/credibilidad demasiado estrechos, tan estrechos que no soportan un mínimo análisis crítico. Así que no falta teoría, como
[esta](https://statmodeling.stat.columbia.edu/2025/06/16/approximate-posterior-recalibration/)
para justificar el hacerlos más anchos. En esta ocasión, usando una técnica que llaman _simulation-based calibration_, con la que aspiran a capturar _la verdadera incertidumbre_.

### VI.

Este es un pequeño entretenimiento para quien quiera ver qué pasa cuando a uno le da por [interpolar datos _en el dominio de la frecuencia_](https://www.getyourdataon.com/2025/06/interpolation-in-frequency-domain.html).


### VII.

El sistema [Anki](https://es.wikipedia.org/wiki/Anki) usa un algoritmo por defecto. Parece que hay otro, FSRS, que gusta más a alguna gente (en la que me incluyo). Tiene, cómo no, una base estadística razonablemente accesible que se discute [aquí](https://domenic.me/fsrs).
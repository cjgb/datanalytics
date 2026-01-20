---
author: Carlos J. Gil Bellosta
categories:
- cortos
date: 2025-05-27
description: Gráficas de sesgo vs gráficas de calibración y algunas notas más sobre
  estadística
lastmod: '2025-06-29T18:15:48.432629'
related:
- 2025-04-22-cortos-stats.md
- 2025-05-20-cortos-estadistica.md
- 2024-05-02-falacia-ecologica.md
- 2022-03-03-error-sesgo-modelos-lineales.md
- 2012-01-12-localidad-globalidad-y-maldicion-de-la-dimensionalidad.md
tags:
- estadística
- postestratificación
- laplace
- principio de la piraña
title: Gráficas de sesgo vs gráficas de calibración y algunas notas más sobre estadística
url: /2025/05/27/cortos-estadistica/
---

Si los datos en tratamiento tienen más varianza que los datos en control, ¿deberías sobrerrepresentar alguno de los grupos en el experimento? La respuesta es sí:
[deberías sobrerrepresentar el grupo de tratamiento](https://statmodeling.stat.columbia.edu/2025/03/21/you-can-learn-a-lot-from-a-simple-simulation-example-of-experimental-design-with-unequal-variances-for-treatment-and-control-data/).

El [principio de la piraña](https://statmodeling.stat.columbia.edu/2025/03/22/the-piranha-principle-what-does-it-mean-exactly/): dado que el mundo observable es razonablemente predecible, una de dos:

- o bien no hay demasiados factores _grandes_ independientes operando causalmente,
- o bien estos factores grandes interactúan negativamente entre sí de manera que se cancelan mutuamente.

Cita Jessica Hullman un [parrafito de un artículo de Cornfield y Tukey](https://statmodeling.stat.columbia.edu/2024/11/08/two-spans-of-the-bridge-of-inference/) (sí, _ese_ Tukey) que traduzco aquí:

> En casi cualquier aplicación de la estadística, la inferencia de las conclusiones a partir de las observaciones tiene dos partes, de las cuales solo la primera es estadística. Un experimento genético con Drosophila usualmente involucrará moscas de cierta raza de una especie determinada. Las conclusiones propiamente basadas en datos no pueden extenderse más allá de esta raza. Sin embargo, el biólogo (usualmente y, a menudo, sabiamente) extenderá la conclusión a (a) toda la especie, (b) todas las Drosophila, o (c) un grupo más grande de insectos. Esta extrapolación puede ser implícita o explícita, pero casi siempre está presente. Si tomamos el símil del puente que cruza un río a través de una isla, hay un tramo estadístico desde la orilla cercana hasta la isla, y otro extraestadístico desde la isla hasta la orilla lejana. Ambos son importantes. Si se modifica el análisis estadístico, haciéndolo más fuerte o más débil, la isla se acerca o se aleja de la orilla. Al hacer esto, es fácil olvidar el segundo tramo, que usualmente solo puede fortalecerse mejorando la ciencia o el arte del que depende. Sin embargo, una comprensión equilibrada y la elección entre las posibilidades estadísticas requiere una atención constante al segundo tramo. A menudo puede valer la pena mover la isla más cerca de la orilla lejana a costa de debilitar el tramo estadístico cuando el extraestadístico es débil.

[Esta entrada](https://statmodeling.stat.columbia.edu/2025/05/08/dont-hold-out-on-me-some-thoughts-on-out-of-sample-prediction/) de Gelman abunda en un asunto que resultará familiar para muchos lectores: construyes un modelo y lo quieres evaluar. Pero, ¿sobre qué datos? ¿Qué ocurre, además, si los nuevos datos son muy distintos de los de entrenamiento? Una idea que sugiere en tales casos es la de la postestratificación. Es decir, cambiar los pesos de las observaciones del nuevo conjunto de datos para que parezcan más a los del primer conjunto de datos.

[Aquí](https://www.sumsar.net/blog/2013/11/easy-laplace-approximation/) se muestra cómo hacer la aproximación de Laplace a distribuciones a posteriori _a mano_. (Un problema que encontré yo al tratar de aplicar técnicas parecidas hace unos años era que el maldito hessiano no estaba _definido negativo_ en el presunto máximo...).

Si $p_i$ son las probabilidades reales y $\hat{p}_i$ las estimadas por un modelo:
- Con el gráfico de $\hat{p}_i$ contra $p_i$ visualizamos el _sesgo_.
- Con el gráfico de $p_i$ contra $\hat{p}_i$ visualizamos la calibración.
- Y según [_Calibration of clinical prediction rules does not just assess bias_](https://www.jclinepi.com/article/S0895-4356(13)00237-0/abstract), podemos tener calibración y no sesgo, sesgo y no calibración, etc.

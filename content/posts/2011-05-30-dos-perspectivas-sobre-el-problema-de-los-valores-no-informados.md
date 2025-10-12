---
author: Carlos J. Gil Bellosta
categories:
- estadística
- r
date: 2011-05-30 07:48:59+00:00
draft: false
lastmod: '2025-04-06T18:55:22.513306'
related:
- 2020-09-03-contrariamente-a-lo-que-creia-recordar-hot-deck-locf.md
- 2020-04-13-regresion-tradicional-vs-multinivel.md
- 2023-09-07-problema-modelos-bayesianos-identicabilidad.md
- 2020-03-18-lme4-simulate.md
- 2022-03-03-error-sesgo-modelos-lineales.md
tags:
- estadística
- r
- missing values
- paquetes
title: Dos perspectivas sobre el problema de los valores no informados
url: /2011/05/30/dos-perspectivas-sobre-el-problema-de-los-valores-no-informados/
---

Me llegó el otro día información acerca de un curso sobre métodos para afrontar el problema planteado por los valores no informados (_missing observations_) que su autor agrupaba bajo etiquetas bastante simpáticas: el bueno, el malo y el impensable. Tal vez faltaba el feo, tal vez porque lo son todos ellos, igual que el bendito problema que suponen. Añadía, sin mayores abundamientos, que



* explicaría cómo la solución común es en general la peor;
* mostraría por qué cierta solución sencilla, relativamente común y con mala fama no es habitualmente tan mala, explicando, además, cuáles son las situaciones en las que funciona y no funciona e
* indicaría dos soluciones que proporcionan resultados insesgados, una de las cuales es sencilla de implementar pero sólo funciona en ciertas circunstancias y la otra, aunque más complicada, funciona siempre.

Es un planteamiento un tanto comercial y no exento de gancho. Sin embargo, para el interesado en estos temas, traigo a colación dos artículos que ofrecen dos perspectivas algo distintas sobre este problema. El primero es una panorámica de procedimientos y herramientas existentes para encarar el problema de los valores no informados (en el contexto del análisis de la regresión, pero fácilmente extrapolables a otros similares), [_Much Ado About Nothing: A Comparison of Missing Data Methods and Software to Fit Incomplete Data Regression Models _](http://maven.smith.edu/~nhorton/muchado.pdf). El segundo es un informe de la [_Agencia Europea del Medicamento_](http://www.ema.europa.eu),  [_Guideline on Missing Data in Confirmatory Clinical Trials_](http://www.ema.europa.eu/docs/en_GB/document_library/Scientific_guideline/2010/09/WC500096793.pdf), que sostiene una postura razonablemente paranoica al respecto (resumidamente: en caso de duda, siempre la solución más conservadora).

Siempre me ha sorprendido que los estándares de rigor estadístico impuestos por las distintas agencias encargadas de aprobar medicamentos sean sistemáticamente rebajados en otras áreas. En un estudio de 100 trabajos de investigación que menciona el primer artículo, 81 de ellos utilizó conjuntos de datos con observaciones no informadas y muy pocos de ellos habrían podido ser sancionados por la EMA.

Pero puede que a los lectores de esta bitácora les interen más los contenidos del primer artículo que, como abrebocas, resumo en cuatro pinceladas.

Comienza distinguiendo tres tipos de conjuntos con datos no informados:



* MCAR (_missing completely at random_), en que el patrón de los registros no informados no depende ni de la variable respuesta $Y$, ni de los valores observados de los predictores, $X_{obs}$. Es el caso más propicio.
* MAR (_missing at random_), cuando dicho patrón depende de $Y$ e $X_{obs}$, pero no de ningún otro factor.
* NINM (_non ignorable missingness_), cuando el patrón de los datos no informados depende, entre otros, del valor no observado de los datos no observados (mis excusas: no he sabido evitar la reiteración en esta frase). Este es precisamente el caso en el que los métodos de imputación discutidos en el resto del artículo pueden introducir sesgos.

Dichos métodos están clasificados en varios grupos:

* Caso completo, consistente en ignorar las observaciones con datos no informados, que sólo es insesgado en el caso MCAR.
* Métodos _ad hoc_, entre los cuales se cita el sustituir los valores no informados por un valor característico (una media del resto, un valor elegido por defecto) o el uso de una serie de técnicas incomprensiblemente populares y que son herencia de otra era: LOCF (_last observation carried forward_) y similares.
* Imputación múltiple, sobre el que el lector encontrará abundante información adicional en [multiple-imputation.com](http://multiple-imputation.com/).
* Otros métodos, como los basados en la función de verosimilidad, métodos bayesianos o de ponderación.

Finalmente ofrece una panorámica de herramientas de _software_ con las que tratar este problema, entre las que se cuentan (restringiéndome a las que serán útiles a los usuarios de R):



* Amelia II, implementado en el paquete [Amelia](http://cran.r-project.org/web/packages/Amelia/index.html).
* La función [`aregImpute`](http://lib.stat.cmu.edu/S/Harrell/help/Hmisc/html/aregImpute.html) del paquete Hmisc.
* El paquete [mice](http://cran.r-project.org/web/packages/mice/index.html) (_multiple imputation by chained equations_).

Y aunque éstas sean los que menciona el artículo, es cierto que una búsqueda por la [lista de paquetes de CRAN](http://cran.r-project.org/web/packages/) permite identificar muchas otras relacionadas con el mismo asunto.

¿Cuáles serán las favoritas de mis lectores?
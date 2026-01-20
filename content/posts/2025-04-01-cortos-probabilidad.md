---
author: Carlos J. Gil Bellosta
categories:
- cortos
date: 2025-04-01
description: Unos cuantos enlaces sobre la teoría de la probabilidad, incluidas dos
  paradojas, una discusión sobre los p-valores y el ruido azul y blanco
lastmod: '2025-04-21T13:55:41.800112'
related:
- 2024-12-19-promediar-predicciones.md
- 2014-02-12-de-ratios-apuestas-y-riesgos.md
- 2021-10-28-dos-cuestiones-sobre-la-naturaleza-de-la-probabilidad-planteadas-por-keynes-en-1921-pero-que-siguen-hoy-igual-de-vigentes.md
- 2016-09-28-como-se-escribia-verosimilitud-en-frances-en-1774.md
- 2011-06-24-sobre-el-libro-the-flaw-of-averages.md
tags:
- probabilidad
- paradojas
- berkson
- p-valores
- odds
- regresión logística
title: Un par de paradojas de la teoría de la probabilidad y algunos asuntos más
url: /2025/04/01/cortos-probabilidad/
---

Comienzo la entrada de hoy con un enlace al muy denso [_Interpretations of probability_](https://plato.stanford.edu/entries/probability-interpret/), en la Enciclopedia de Filosofía de Stanford que, admito, no será del interés de la mayoría.

Podría llegar a decirse ---aunque no me atreveré a tanto--- que en toda disciplina intelectual _tiene_ que haber paradojas porque de otra manera, sería indistinguible del uso sistemático del sentido común. Así que hoy traigo a colación
[este análisis de un caso particular de la paradoja de Berkson](https://ofaurochsandangels.substack.com/p/an-analysis-of-berksons-paradox) (que se añade a las [ocasiones en las que ya me he referido a ella](/tags/berkson/)) y
[este otro sobre la de Lindley](https://en.wikipedia.org/wiki/Lindley%27s_paradox). La primera tiene que ver con la correlación que aparece entre dos variables aleatorias independientes cuando de repente observamos información concomitante; la segunda, con los test de hipótesis (asunto del que, por fortuna, me he mantenido alejado durante largo tiempo).

Acerca de este último asunto y de los p-valores trae Gelman un par de entradas interesantes,
[_Understanding p-values: Different interpretations can be thought of not as different “philosophies” but as different forms of averaging_](https://statmodeling.stat.columbia.edu/2024/12/02/understanding-p-values-different-interpretations-can-be-thought-of-not-as-different-philosophies-but-as-different-forms-of-averaging/) y
[_4 different meanings of p-value (and how my thinking has changed_)](https://statmodeling.stat.columbia.edu/2024/12/03/4-different-meanings-of-p-value-and-how-my-thinking-has-changed-2/). La última de las _interpretaciones_ de los p-valores del segundo artículo es:

> Un p-valor es el resultado de unas operaciones aplicadas a unos datos que recibe por convención la etiqueta de p-valor.

Finalmente, dos apuntes adicionales. El primero,
[sobre la construcción del llamado _ruido azul_](https://acko.net/blog/stable-fiddusion/),
que puede entenderse como muestreos de una variante de la distribución uniforme más uniforme de lo que realmente es. En efecto, la representación de una muestra de una distribución uniforme bidimensional es una especie de _gris_, pero un gris que no se percibe como _uniforme_. Si se le añade además algún tipo de dispersión aparecen necesariamente zonas con un gris más claro y otras con uno más oscuro:

![Ruido blanco difuminado](/img/2025/blurred_white_noise.png#center)

El _ruido azul_ permite obtener distribuciones uniformes más _uniformes_ y los viejos del blog lo habrán relacionado con las [sucesiones de Sobol](/tags/sobol/) y lo que llamé probabilidades _hirsutas_ y _pocholas_.

El segundo,
[una discusión sobre los _odds_ para representar y comunicar probabilidades](https://www.bryanshalloway.com/2023/11/03/odds-are-you-re-using-probabilities-to-describe-event-outcomes/)
que, sin negarle interés, omite dos cuestiones importantes:
- Que es un sistema primitivo y obsoleto de pensar en las probabilidades de eventos.
- Pero que, desafortunadamente, el papel fundamental de la regresión logística ha ayudado a perpetuar.
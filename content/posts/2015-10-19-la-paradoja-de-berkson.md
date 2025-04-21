---
author: Carlos J. Gil Bellosta
categories:
- probabilidad
date: 2015-10-19 08:13:09+00:00
draft: false
lastmod: '2025-04-06T19:04:30.674804'
related:
- 2019-06-12-la-paradoja-de-berkson-2.md
- 2015-08-07-una-paradoja-que-no-me-parece-paradojica-la-de-bertrand-y-una-pregunta.md
- 2016-09-28-como-se-escribia-verosimilitud-en-frances-en-1774.md
- 2022-09-06-problema-estadistica-frecuencias-naturales.md
- 2014-07-31-combinacion-de-probabilidades.md
tags:
- paradojas
- probabilidad
- berkson
title: La paradoja de Berkson
url: /2015/10/19/la-paradoja-de-berkson/
---

Queremos calentar unas empanadas en el horno y, ¡oh desgracia!, no funciona. Pueden pasar dos cosas (independientes entre sí):

* El horno está estropeado ($latex A$)
* El horno está desenchufado ($latex B$)

Hemos observado el evento $latex A \cup B$ y nos preocupa mucho $latex P(A | A \cup B)$, es decir, que tengamos que llamar al técnico y comernos frías las empanadas a la vista de que el horno no responde.

Sin embargo, observamos rápidamente $latex B$: que habíamos desenchufado el horno. Luego, de repente, nos encontramos ante el cálculo de $latex P(A | B, A \cup B)$. Dicho de otra manera, evaluar la probabilidad de que el horno esté estropeado a la vista de que:

* El horno está o bien estropeado o bien desenchufado
* El horno está desenchufado

Obviamente, $latex P(A|B,A \cup B) \leq P(A|A\cup B)$. De otra manera, la probabilidad de que no funcione por avería es menor una vez que hemos constatado que no estaba enchufado.

La desigualdad anterior (que se cumple siempre) se conoce como paradoja de Berkson y se puede leer más sobre ella (incluida una demostración malísima) [aquí](https://en.wikipedia.org/wiki/Berkson%27s_paradox).

Es paradoja porque en algunos contextos parece contraintituivo. En efecto, al ser independientes los dos eventos, $latex P(A|B) =  P(A)$. Pero al condicionar por $latex A \cup B$, se obtiene la desigualdad anterior.

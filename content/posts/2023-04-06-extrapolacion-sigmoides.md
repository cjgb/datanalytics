---
author: Carlos J. Gil Bellosta
date: 2023-04-06
title: 'Extrapolar es difícil (¿imposible?); hoy, con "sigmoides"'

url: /2023/04/06/extrapolacion-imposible-sigmoides/
categories:
- estadística
tags:
- extrapolación
- estadística
- artículos
- sigmoide
- función logísitica
---

La extrapolación problemática. Que es la manera erudita de decir que _ni de coña_.

![](/wp-uploads/2023/extrapolating.png#center)

La extrapolación ---lineal, en este caso--- tiene dos problemas:

1. No sabemos si el fenómeno va a seguir comportándose de manera lineal fuera del rango de las observaciones.
2. Aunque lo sea, el error cometido al ajustar una recta usando solo datos de un extremo es muy grande. Lo ideal, de hecho, es tener datos en _ambos_ extremos del intervalo de interés.

[De hecho, creo que lo anterior se puede convertir en un _teorema_: si tenemos datos $(x_i, y_i)$, el _mejor_ modelo lineal se obtiene cuando la mitad de los $x_i$ son iguales al mínimo de los $x_i$ y la otra mitad, al máximo de los $x_i$.]

Ahora, una gente publica
[_Sigmoids behaving badly: why they usually cannot predict the future as well as they seem to promise_](https://arxiv.org/abs/2109.08065),
que significa lo siguiente:

> Vamos a hacer como que desconocemos todos los problemas asociados a la extrapolación de modelos lineales y vamos a comenzar _ex novo_ a estudiar los problemas de la extrapolación de modelos en que lo que queremos ajustar es una _sigmoide_ en general (incluyendo la función logística y sus variaciones asimétricas). Cosa que es aún más difícil y problemática que la extrapolación de modelos lineales.
>
> Por el camino haremos como que nos vamos sorprendiendo de encontrar resultados análogos a los trilladísimos en el caso de la regresión lineal ---solo que elevados al cubo--- y si tenemos suerte y nos lo publican, tendremos un renglón más en el CV.

Un desperdicio de tiempo y talento.



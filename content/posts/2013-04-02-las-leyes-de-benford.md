---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2013-04-02 07:44:47+00:00
draft: false
lastmod: '2025-04-06T18:50:40.885774'
related:
- 2013-05-10-mas-sobre-la-ley-de-benford-iii-la-magica-propiedad-de-los-logaritmos-decimales.md
- 2020-11-16-que-numeros-admiten-la-distribucion-de-benford.md
- 2011-09-15-la-ley-de-benford.md
- 2013-05-03-mas-sobre-la-ley-de-benford-ii-la-distribucion-de-la-parte-fraccionaria.md
- 2013-04-16-mas-sobre-la-ley-de-benford-i-una-condicion-suficiente.md
tags:
- estadística
- ley de benford
title: Las leyes de Benford
url: /2013/04/02/las-leyes-de-benford/
---

Escriribé hoy sobre las leyes de Benford. Así, en plural.

Porque cuando [escribí sobre la Ley de Benford](https://datanalytics.com/2011/09/15/la-ley-de-benford/) hace un tiempo, indiqué cómo la frecuencia de cada primer dígito es decreciente (del 1 al 9) siempre que la función de densidad de la serie de los números que se investigue sea ella misma decreciente. Este resultado trivial bien podría llamarse _Ley Débil de Benford_.

Sin embargo, las probabilidades de ocurrencia de cada dígito dependen de la distribución de la serie, como bien podrá comprobar quien visite esa antigua entrada mía.

Ahora bien, Arthur Charpentier ha escrito sobre [la Ley de Benford en su bitácora Freakonometrics](http://freakonometrics.hypotheses.org/5214) recientemente explicando bajo qué condiciones son aplicables las probabilidades de los dígitos conocidas por todos, es decir,

$$P(D=d) = \frac{\log(1+1/d)}{\log(10)}.$$

La condición es que al cambiar la escala, no cambie la distribución del primer dígito. Lo cual viene a ser equivalente a que la función de densidad $latex f(x)$ sea proporcional a $latex f(kx)$ y eso conduce necesariamente a que $latex f(x) = x^{-1}$, un caso particular de la [distribución de Pareto](http://es.wikipedia.org/wiki/Distribuci%C3%B3n_de_Pareto).

Más aún, Charpentier analiza en qué casos las primeras cifras de muestras de algunas otras distribuciones siguen la ley $latex P(D=d)$ anterior y encuentra cómo los resultados no son enteramente disconformes en algunos (¡pero no todos!).

Y este es el hecho que bien podría venir en llamarse _Ley Fuerte de Benford_. Quedaría no obstante pendiente la tarea de caracterizar —de ser posible, claro— aquellas distribuciones a las que resultase aplicable.
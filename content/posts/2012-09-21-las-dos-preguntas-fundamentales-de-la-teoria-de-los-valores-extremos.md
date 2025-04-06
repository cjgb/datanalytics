---
author: Carlos J. Gil Bellosta
categories:
- estadística
- probabilidad
date: 2012-09-21 07:23:35+00:00
draft: false
lastmod: '2025-04-06T18:50:17.641875'
related:
- 2016-01-18-el-problema-de-los-tanques-alemanes-y-de-la-maxima-verosimilitud-esquinada.md
- 2021-03-02-un-argumento-para-usar-la-normal-la-maximizacion-de-la-entropia.md
- 2022-10-11-bayesianismo-frecuentismo-teoria-decision-03.md
- 2020-05-28-sobre-la-funcion-de-riesgo-en-el-analisis-de-la-supervivencia.md
- 2011-01-10-c2bfuna-caida-demasiado-drastica-de-la-varianza.md
tags:
- estadística
- evt
- probabilidad
- riesgo
title: Las dos preguntas fundamentales de la teoría de los valores extremos
url: /2012/09/21/las-dos-preguntas-fundamentales-de-la-teoria-de-los-valores-extremos/
---

En muchos ocasiones es necesario realizar estimaciones sobre el máximo de una serie de valores aleatorios.

Uno de los casos más conocidos que me vienen a la mente es el llamado problema de los tanques alemanes. Durante la II Guerra Mundial, los aliados, para estimar el ritmo de producción de tanques del enemigo, recogían el número de serie de los que destruían o capturaban. Gracias a esta muestra potencialmente aleatoria, podían realizar estimaciones del máximo de la serie y, de ahí, del número de unidades construidas durante cierto intervalo de tiempo. Pero este es un problema trivial comparado con el de estimar el máximo nivel que puede alcanzar una riada o la carga que puede llegar a soportar un puente en los próximos cien o mil años.

Dada una sucesión de variables aleatorias independientes $latex X_1, X_2,\dots$, si $latex M_n$ es el máximo de las `n` primeras, pueden suceder dos cosas obvias:

* Que las $latex X_i$ estén acotadas y que su máximo, por lo tanto, tienda a un valor constante.
* Que no estén acotadas, por lo que el máximo tenderá a infinito.

Pero aunque tienda a infinito, todavía podría ser posible encontrar valores $latex a_n$ y $latex b_n$ tales que la distribución de

$$ \frac{ M_n - b_n }{a_n}$$

no sea degenerada. Nótese que

$$ P \left( \frac{ M_n - b_n }{a_n} < x \right) = P( M_n < a_n x + b_n) = F^n( a_n x + b_n)$$

En esta última expresión, el exponente $latex n$ hace tender la expresión a cero (dado que $latex F < 1$) pero, por otra parte, la _dilatación_ $latex a_n x + b_n$ tiende a hacer crecer la base de la potencia.

Las dos preguntas que surgen entonces son:

* ¿Existe alguna función de distribución $latex G$ a la que tienda $latex F^n( a_n x + b_n)$? De existir, ¿debería tener alguna forma característica?
* ¿Existe algún tipo de restricción sobre _F_ —aparte de la no acotación, claro— que garantice la convergencia?

La respuesta, en tu biblioteca.
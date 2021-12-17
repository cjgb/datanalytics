---
author: Carlos J. Gil Bellosta
date: 2100-12-13
title: 'Bayesianismo vs frecuentismo (bajo la óptica de la teoría de la decisión)'

url: /asdf/
categories:
- estadística
- números
tags:
- euromomo
- momo
- mortalidad
---

**I.**

Partimos de una distribución $latex \phi(\theta)$ conocida —en lo que sigue, sin mayor pérdida de generalidad y por fijar ideas, va a ser una $latex N(0, 1)$— que <em>genera</em> valores $latex \theta$ que queremos estimar de la manera más precisa posible. En concreto, queremos minimizar el valor promedio del error —cuadrático a modo de ejemplo, aunque podría tomarse otro— $latex (\theta - \delta)^2$, donde $latex \delta$ es nuestra estimación. Es decir, buscamos el valor $latex \delta$ que minimiza el error


$latex \int (\theta - \delta)^2 \phi(\theta) d\theta.$



La respuesta óptima y conocida de todos es $latex \delta = 0$, que da un error de 1.



**II.**



Todo se vuelve más interesante y realista cuando esa $latex \theta$ con distribución $latex \phi(\theta)$ se utiliza para obtener una muestra de, p.e., 10 valores conocidos $latex x$ con distribución $latex N(\theta, 1)$. Entonces $latex \delta$ depende de $latex x$ —es decir, podemos usar $latex x$ para <em>afinar</em> la estimación de $\theta$— y el error promedio de $latex (\theta - \delta(x))^2$ es



$latex \int \int (\theta - \delta(x))^2 \phi(x | \theta) \phi(\theta) dx d\theta.$



**III.**



Para resolver este problema, podemos aplicar el teorema de Fubini y representar el error de la forma



$latex \int \big( \int (\theta - \delta(x))^2 \phi(\theta | x) d\theta \big) p(x) dx$



y analizar la expresión entre paréntesis,



$latex \int (\theta - \delta(x))^2 \phi(\theta | x) d\theta,$



que es una función de $latex x$ (o, más bien, donde $latex x$ está fijo).



Esa expresión se minimiza cuando se toma $latex \delta(x)$ igual a la media de la distribución $latex \phi(\theta | x)$, que es, [según la Wikipedia](https://en.wikipedia.org/wiki/Conjugate_prior),  $latex \sum x / 11$ (y el error cometido será 1/ 11).



Antes de continuar, hay que realizar algunas advertencias. La primera es que a esta peculiar manera de aplicar el teorema de Fubini fija $latex x$, es decir, los datos. Se parte de unos datos, los observados, y a partir de ellos se toma la decisión $latex \delta(x)$ que es óptima para dichos datos concretos. En este caso concreto, se trata de la media de la posteriori; pero en general, con otras funciones de pérdida, sería alguna expresión que dependiese de ella. Es decir, toda la información relevante está en esa distribución a posteriori de $latex \theta$ dado $latex x$.



La segunda es que se conoce por algunos como estadística bayesiana (y de ahí parte del título de la entrada). La tercera es que parte de esos que la conocen por tal nombre, envuelven el razonamiento anterior en una serie de argumentos metafísicos y oscuros que apelan, entre otros, a la subjetividad, que nunca he acabado de entender. Posiblemente porque tendrán en mente algún tipo de problema concreto de esa naturaleza al que aplique el formalismo anterior pero con el que yo aún no he topado.



Y, finalmente, cabe preguntarse por el error cometido cuando se reitera el proceso anterior para otros valores de $latex x$, es decir, plantear el problema de la calibración. En concreto, hace falta volver a la ecuación primera y evaluar



$latex \int \big( \int (\theta - \delta(x))^2 \phi(\theta | x) d\theta \big) p(x) dx,$



que vale 1/11 porque, como hemos establecido antes, el valor de la expresión entre paréntesis es siempre igual a 1/11. (Efectivamente, en esta ocasión y debido a la particular selección de las distribuciones y la función de pérdida ocurre así, pero no tiene por qué serlo necesariamente.)



**IV.**



Pero de la expresión original



$latex \int \big( \int (\theta - \delta(x))^2 \phi(x | \theta) dx \big) \phi(\theta) d\theta$



también puede extraerse —para razonar sobre ella—



$latex \int (\theta - \delta(x))^2 \phi(x | \theta) dx$



fijando <em>de facto</em> $latex \theta$. Lo cual es problemático porque se está fijando, precisamente, un, el valor desconocido.



Lo que se está planteando aquí es encontrar un valor pequeño de la función de pérdida para cualquier valor observado $latex x$ generado por el valor desconocido $latex \theta$. No es nada fácil razonar sobre la expresión anterior y navegar las contradicciones lógicas que encierra equivale a navegar las contradicciones lógicas del otro modo de la estadística, alternativo al bayesiano y más frecuente que él y que se conoce como —aunque no por eso— frecuentista.



Aplicando algunos de sus resultados más habituales, que garantizan ciertos criterios de optimalidad, un puede llegar a la conclusión de que la <em>mejor</em> opción para $latex \delta(x)$ es la media de $latex x$, $latex \bar{x}$. Pero en tal caso, la integral anterior vale, precisamente, 1/10. Y el mismo valor tiene en este caso la original.



<em>[Nota: la estimación anterior no es estrictamente necesaria y podría plantearse alguna extensión de la forma funcional de $latex \delta(x)$ que</em> o<em>freciese un error global menor. De hecho, esto tiene que ser posible porque uno siempre podría recurrir a la expresión usada en la sección anterior y reducir el error global cometido.]</em>



**V.**



La universalidad del planteamiento original —obviamente, siempre que no se ate a distribuciones, etc. concretas como he hecho en esta entrada por motivos expositivos— donde la función de error tiene solo dos parámetros (el parámetro de la distribución y los datos) da lugar, según el orden de la integración, a los dos únicos modos existentes de la estadística, los que han venido a llamarse frecuentista y bayesiano.



El bayesiano tiene una justificación lógica más natural, hace mejor uso de la información disponible y, como consecuencia, tiene un error global menor.

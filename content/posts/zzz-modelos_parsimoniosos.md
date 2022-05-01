---
author: Carlos J. Gil Bellosta
date: 2100-12-13
title: Modelos parsimoniosos como regularización de otros más precisos

url: /asdf1/
categories:
- estadística
- números
tags:
- euromomo
- momo
- mortalidad
---

Una de las fuentes más importantes, más desconocida y menos tratada de error en la modelación estadística es, precisamente, el error de modelo. Existe un modelo físico, real y típicamente desconocido que tratamos de aproximar mediante una función más o menos compleja. En tanto que el modelo teórico que planteamos difiere del desconocido, vamos a estar 

Uno de los consejos más añejos en el oficio es el de decantarse por la parsimonia (o simplicidad, o...). Sea $latex M_0$ nuestro candidato parsimonioso. Pero como somos guays, nos tienta usar otros modelos menos parsimoniosos $latex M_i$ (que podemos suponer que extienden $latex M_0$) para luego preguntarnos con cuál quedarnos.

Una de las opciones a nuestra disposición, implícita o explícita, consiste en promediar los $latex M_i$ (bayesianamente o no). Pues bien, de alguna manera cabe esperar que el modelo promedio, $latex P(M_i)$ sea $latex P(M_i) \sim M_0$. Por supuesto, la anterior es una hipótesis fuerte que no doy necesariamente por buena y que exige demostración. Pero tiene sentido intuitivo y si uno piensa en los árboles, por ejemplo, casi, casi ve por dónde tendría que ir una demostración particular (¿no es el pruning algo parecido?).

Pensemos: cada $latex M_i$ enriquece $latex M_0$ de una determinada manera. Digamos que cada $latex M_i = M_0 + \Delta_i$. Pero al promediar los $latex M_i$, se obtiene $latex M_0 + P(\Delta_i)$ y el aporte de cada $latex \Delta_i$ es razonablemente pequeño en ese promedio.

De todos modos, lo que viene a indicar esta entrada es que existe un motivo adicional en pro de los modelos parsimoniosos: se podrían interpretar como el promedio (o regularización) de otros más sofisticados. Por lo que es probable que si optas por ensamblar modelos complicados, tal vez estés simplemente volviendo a la casilla de partida después de un largo, largo rodeo.

Más, aquí.

Nota: Pienso: ¿no son los bosques aleatorios mi propio contrajemplo?
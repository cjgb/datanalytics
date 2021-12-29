---
author: Carlos J. Gil Bellosta
date: 2021-07-14 09:13:00+00:00
draft: false
title: 'Mi apuesta para el larguísimo plazo: Julia'

url: /2021/07/14/mi-apuesta-para-el-larguisimo-plazo-julia/
categories:
- ciencia de datos
- programación
- r
tags:
- ciencia de datos
- programación
- julia
- python
- r
- sas
- spss
---

  * _Larguísimo_, arriba, significa algo así como 10 o 20 años. Vamos, como cuando comencé con R allá por el 2001.
  * R es, reconozcámoslo, un carajal. Pocas cosas mejores que [esta](https://www.youtube.com/watch?v=VdD0nHbcyk4) para convencerse.
  * No dejo de pensar en aquello que me dijo un profesor en 2001: que R no podría desplazar a SAS porque no tenía soporte modelos mixtos. Yo no sabía qué eran los modelos mixtos en esa época pero, desde entonces,  vine a entender y considerar que "tener soporte para modelos mixtos" venía a ser como aquello que convertía a un lenguaje para el análisis de datos en una alternativa viable y seria a _lo existente_. Y mirad [esto](https://github.com/JuliaStats/MixedModels.jl).
  * Obviamente, lo de los modelos mixtos no es más que una _metáfora_. Realmente significa algo así como "el sistema X tiene muchas cosas y su alternativa, Y, es un mero juguete". Pero no hay nada que impida que Y comience a implementar todo aquello que le falta. Además, mucho más rápida y eficientemente. P.e., ¿cuánto tardó R en dotarse de su gramática de los gráficos? Pues bien, Juilia ya los tiene. (¿Cómo se dice _leapfrog_ en español?)
  * Dicho de otra manera, R ha sido el estado del arte en computación estadística en los últimos años. Ha avanzado por prueba y error. Pero ahora, cualquier rival ya sabe qué tiene que hacer exactamente para llegar a donde está R.
  * Julia _corre_ sobre [LLVM](https://en.wikipedia.org/wiki/LLVM). Es decir, que se beneficia automáticamente de cualquier mejora realizada sobre la _máquina virtual_ (si es que se me permite llamar así a LLVM).
  * Esta semana he estado programando en C unas rutinas que tienen que ser llamadas desde R. Pero, ¿no sería el mundo más hermoso no tener que cambiar de lenguaje para tener rendimiento de C?
  * Arriba comparo R y Julia como extremos de un arco (en el que a la izquierda de R quedan aún irrelevancias como SAS o SPSS). Python ocupa una posición intermedia entre ambos. Desde un punto de vista meramente técnico, si alguna dimensión es Python mejor que R, Julia es todavía mejor que Python. Salvo, de nuevo, la cantidad de flecos y cascabeles de los que ya dispone Python y que todavía no están presentes en Julia. Pero, como se ha dicho arriba, desde la perspectiva del _larguísimo plazo_, es una objeción irrelevante que apunta a un estado transitorio de las cosas.

Y supongo que podría seguir.

Obviamente, en todo lo anterior y con la excusa de estar instalado en el larguísimo plazo, he obviado una circunstancia fundamental: la base instalada y las inercias que operan en todo lo humano. Lo único que puedo decir al respecto es que ya las he vivido: he vivido en primera persona la transición de SAS/SPSS a R y soy consciente como el que más de las piedras del camino.

De todos modos, lo escrito arriba no es más que una apuesta, una opción para jugar (o no hacerlo) que los más intrépidos podrán (o tratarán de) aprovechar de la manera habitual: seguir operando con las herramientas tradicionales que llenan la nevera, pagan el alquiler y acrecientan los ahorros necesarios para largarse de la piel de toro a lugares más benignos y con más brillante futuro por un lado y seguir a Julia de reojo para que su potencial llegada no pille a contrapié.
---
author: Carlos J. Gil Bellosta
date: 2010-10-06 21:50:44+00:00
draft: false
title: Matlab es más rápido que R... ¿y?

url: /2010/10/06/matlab-es-mas-rapido-que-r-y/
categories:
- r
tags:
- matlab
- r
---

No sé si alguna vez en la vida he visto una copia legal de Matlab. Creo que no. Ni forzando la memoria consigo recordar haber conocido a alguien que haya pagado los [2000 euros que cuesta una licencia comercial en España](http://www.mathworks.com/store/priceListLink.do).

Eso sí, he conocido a mucha gente a la que le gusta mucho. Y que habla maravillas de él, etc. En algún sitio lo habrán probado, presumo.

Los aficionados a Matlab lo son también a comentar lo rápido que es. He desperdiciado largas horas en aburridoras conversaciones acerca de lo veloz que es Matlab haciendo nosequé operaciones (que no realizo ni directa ni indirectamente casi nunca). Y de paso, a comentar lo bien que se compara contra R (¿por chinchar?): alguna vez he tenido que asistir con desigual grado de indiferencia a inopinadas e improvisadas sesiones de programación en las que construir comparativas que demuestren cuánto más gallardamente invierte unas matrices Matlab que R.

Hoy me he tropezado con [un trabajo similar]( http://mlg.eng.cam.ac.uk/dave/rmbenchmark.php) aunque algo más elaborado: una comparación de la velocidad de ejecución de un abanico de operaciones matemáticas entre R y Matlab. Y me apetece dejar hoy un comentario al respecto.

El primero es que no sé prácticamente nada de métodos numéricos para álgebra lineal. No sólo no llegué a aprender prácticamente nada del asunto sino que se me olvidó enseguida. Se me olvidó incluso dónde leí lo más útil de lo que conozco de la materia (creo que fue en la introducción al capítulo relativo al álgebral lineal del libro [Numerical Recipes in C](http://www.amazon.com/Numerical-Recipes-Art-Scientific-Computing/dp/0521431085) ): nunca, nunca, nunca uses tu propio código para implementar tal tipo de métodos numéricos (a no ser que te llames [Kazushige Goto]( http://en.wikipedia.org/wiki/Kazushige_Goto), añadía un amigo). Tanto R como Matlab (como Octave, como...) utilizan [BLAS](http://en.wikipedia.org/wiki/Basic_Linear_Algebra_Subprograms), [LAPACK](http://en.wikipedia.org/wiki/Lapack) y librerías análogas para estos fines. Algunas son libres. Otras son propietarias y están optimizadas para determinadas arquitecturas de _hardware_. Matlab, aparentemente, usa una versión de BLAS, [MLK](http://software.intel.com/en-us/articles/using-intel-mkl-with-matlab/), optimizada por Intel para sus máquinas. Algo parecido hace el R _tuneado_ por [Revolutions](http://www.revolutionanalytics.com/). Y no creo que sea imposible compilar R contra una de estas librerías (si uno paga el correspondiente precio de las licencias, claro).

Al final, esencialmente, una comparación entre la eficiencia de R y Matlab para realizar operaciones de álgebra lineal se reduce a una comparación entre distintas versiones de BLAS y LAPACK con sus desiguales grados optimización para la plataforma correspondiente. (El que quiera saber algo más al respecto en un contexto R-céntrico puede mirar [aquí](http://dirk.eddelbuettel.com/blog/code/gcbd/), [aquí](http://dirk.eddelbuettel.com/blog/2010/09/15/#gcbd_0.2.2), en las páginas 46-49 de [aquí](http://dirk.eddelbuettel.com/papers/useR2010hpcTutorial.pdf) o, principalmente, [aquí](http://es.wikipedia.org/wiki/Ley_de_Amdahl)).

Bien, concedido, Matlab es más rápido que R... ¿y?

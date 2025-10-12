---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2016-02-04 09:13:51+00:00
draft: false
lastmod: '2025-04-06T19:07:06.776553'
related:
- 2021-04-01-por-que-es-tan-enrevesada-la-definicion-de-intervalo-de-confianza.md
- 2020-02-18-la-probabilidad-de-que-el-parametro-este-en-el-intervalo-de-confianza-es-95.md
- 2013-05-16-el-error-en-las-encuestas-cuentas-en-una-servilleta.md
- 2022-10-11-bayesianismo-frecuentismo-teoria-decision-03.md
- 2016-02-03-otra-vuelta-al-caso-del-test-que-rechaza-y-el-intervalo-que-contiene.md
tags:
- estadística
- estadística bayesiana
- intervalos de confianza
- p-valores
- prueba de hipótesis
title: Y termino con lo de los intervalos
url: /2016/02/04/y-termino-con-lo-de-los-intervalos/
---

Y termino con lo de los intervalos. Me refiero a [esto](https://datanalytics.com/2016/01/29/el-test-rechaza-pero-el-intervalo-contiene-contraejemplos/) y [esto](https://datanalytics.com/2016/02/03/otra-vuelta-al-caso-del-test-que-rechaza-y-el-intervalo-que-contiene/).

Nunca me habría atrevido a escribir sobre el tema, y exponerme, de paso, a la muy razonadas explicaciones de quienes tuvieron a bien comentarlas, si no hubiese sido por un tema personal: el recuerdo de la frustración que me supuso hacerme en su día con la teoría subyacente tanto a las pruebas de hipótesis como a la construcción de intervalos de confianza.

Recuérdese que soy matemático. Igual trepé ese tejado desde la vertiente opuesta a la de la mayoría. No estaba programado para actos de fe.

En lo de las pruebas de confianza, por ejemplo, me lo parecían que se _rechazasen_ hipótesis argumentando sobre datos que no se han observado. Cuando se construye el p-valor como $P(T(X) > T(\hat{X})| \theta_0)$, donde $\hat{X}$ son los datos obtenidos en el experimento, se está argumentando sobre la imposibilidad de valores posibles de $T(X)$ más extremosos que los obtenidos.

Pero aún era más grave la teoría subyacente a la construcción de los intervalos de confianza. Se observa un valor $\hat{\theta}$ (p.e., la proporción de caras obtenidas al tirar una moneda) y el intervalo de confianza se construye alrededor (y en ocasiones simétricamente) alrededor de ese valor.

Veamos, existe (¿realmente?) un valor real del parámetro, $\theta$ y uno estimado por los datos (p.e., la proporción de caras), $\hat{\theta}$. El truco, si recuerdo bien, es que si

$$ \hat{\theta} - \theta \sim F_\theta,$$

donde $F$ es alguna distribución (usualmente la normal), se utiliza algún tipo de prestidigitación matemática para cambiar $F_\theta$ por $F_{\hat{\theta}}$. No tanto porque esté justificado sino porque no hay alternativa. Y si tiene barba, San Antón. Solo así el intervalo pivota alrededor de $\hat{\theta}$. En ocasiones ese cambio equivale en la práctica a hacer como si $\hat{\theta}$ fuese el valor del parámetro y el _verdadero_, fuese un valor muestreado a partir de él.

Son muchos años ya desde entones, pero recuerdo verme pensando en lo siguiente:

* $\hat{\theta}$ es una magnitud que se compone de dos partes: señal (sobre el valor real del parámetro) y ruido.
* Ese valor estimado $\hat{\theta}$ no debería _generar_ el intervalo. Con generar me refiero a actuar como si fuese el valor real del parámetro gracias tal vez a una aproximación, como indico más arriba. Ese valor es generado por el valor real (aunque desconocido) del parámetro. Supongamos, por ejemplo, en el caso de una proporción, que obtenemos una estimada de 0.6; ese valor puede proceder de un parámetro real de 0.51, de otro de 0.875, de otro de 0.61, etc. cada uno de ellos con una probabilidad distinta.
* Es decir, que lo que se tiene es una colección de probabilidades $p(\hat{\theta}|\theta)$ a las que tenía que _dar la vuelta_ para conseguir $p(\theta|\hat{\theta})$.
* La manera en la que lo vi hacer en la pizarra me parecía grotesca y difícimente justificable.
* Además, mil tíos distintos, usando variaciones de esos principios grotescos y difícilmente justificables ha creado mil versiones distintas de esos intervalos de confianza.

Si hubiese sido un poco más agudo, habría levantado el dedo y habría preguntado: ¿por qué no usar el teorema de Bayes? Pero era demasiado pendejo.

Ahora me está tocando enseñar a otros todas estas cosas y me enfrento con una serie de problemas:

* Me toca contar cosas en las que no creo.
* Me toca contar cosas que considero artificiosas e innecesariamente complejas.
* Me toca contar cosas que no son siquiera congruentes entre sí.
* Cuando lo podría obtener todo sin mayores complicaciones teóricas cambiando de punto de vista.

Y a veces, la verdad, me dan ganas de hacer una pira de libros de estadística viejuna en mitad de la plaza.
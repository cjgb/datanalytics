---
author: Carlos J. Gil Bellosta
date: 2011-07-26 07:55:41+00:00
draft: false
title: ¿Qué es un banco? ¿Qué son las pruebas de resistencia? (En primera derivada)

url: /2011/07/26/que-es-un-banco-que-son-las-pruebas-de-resistencia-en-primera-derivada/
categories:
- finanzas
- números
- r
tags:
- finanzas
- números
- r
---

En primera derivada, un banco es un señor que pone 10, capta 90 en depósitos de ahorradores —a los que da un interés del 4 %— y presta 100 al 5 %. El código en R que aparece a continuación indica cuál es el beneficio del señor:







{{< highlight R >}}
capital <- 10
depositos <- 90

int.dep   <- 0.04
int.pres  <- 0.05

prestamos <- capital + depositos
ingresos <- prestamos * ( 1 + int.pres )
gastos   <- depositos * ( 1 + int.dep  )

beneficio <- ingresos - gastos
rentabilidad.capital <- 100 * beneficio / capital
{{< / highlight >}}







Quien lo ejecute comprobará cómo el señor obtiene un jugoso beneficio. Además, el señor podría hacerlo aún más jugoso incrementando el valor de los depósitos, es decir, captando más ahorro con el mismo capital inicial. Queda como ejercicio para mis lectores repetir los cálculos anteriores con `depositos <- 190`, etc.

Obviamente, los señores que montan bancos quieren prestar lo más posible: en ello les va la rentabilidad.

Pero, ¡cuidado!:



* ¡hay gente a la que se presta dinero que luego va y no lo devuelve!
* la ley —entre otros— obliga al señor a devolver el dinero íntegramente a los ahorradores... ¡o va a la cárcel! (en primera derivada, claro)

Repitamos pues los cálculos anteriores teniendo en cuenta que un determinado porcentaje de los préstamos nunca se recuperan:







{{< highlight R >}}
capital <- 10
depositos <- 90
tasa.morosidad <- 0.02
int.dep   <- 0.04
int.pres  <- 0.05

prestamos <- capital + depositos
prestamos.buenos <- prestamos * ( 1 - tasa.morosidad )

ingresos <- prestamos.buenos * ( 1 + int.pres )
gastos   <- depositos * ( 1 + int.dep  )

beneficio <- ingresos - gastos - prestamos * tasa.morosidad
rentabilidad.capital <- 100 * beneficio / capital
{{< / highlight >}}







Se reduce la rentabilidad, ¿verdad? ¿Y si aumenta el tamaño de los depósitos? ¿Y si aumenta la tasa de morosidad? ¿Y si aumentan ambos? Las principales preguntas que uno (o el señor) puede plantearse son:



* ¿Bajo qué condiciones la rentabilidad del capital es nula? ¿En qué punto comienza a ser negativa?
* Y más importante, ¿en qué momento la rentabilidad del capital es -100%?

La segunda pregunta es fundamental porque si se acaba el capital, es decir, si se agotan lo que puso el señor sobre la mesa, faltará dinero para resarcir las inversiones de los ahorradores. ¡Llorarán los niños! ¡Alguien tendrá que ir a la cárcel!

La inversión inicial del señor no sirve (exclusivamente) para que obtenga importantes réditos con los que adquirir yates: es un seguro contra _lo que pueda pasar_. Y si algo pasa, es él quien debiera perder el dinero, no los ahorradores.

Los dos elementos fundamentales para medir la seguridad de los depósitos son el ratio entre capital y préstamos y la tasa de morosidad. Como hemos visto, si el primero es pequeño, el señor obtendrá beneficios extraordinarios; si es grande, ganará menos dinero, pero podrá soportar un incremento de la tasa de morosidad sin quebrar.

Los bancos centrales ponen límites a la codicia de los señores que montan bancos: exigen que se mantenga un ratio de capital mínimo —un concepto muy popular en prensa estos días—, es decir, que el cociente entre las variables capital y prestamos no descienda de un cierto nivel. Y también someten a los bancos a las llamadas pruebas de resistencia, que son otra cosa que lo que ya habrán hecho mis lectores: ver qué pasa con el capital del señor cuando se manipula (al alza) la variable `tasa.morosidad`.

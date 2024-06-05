---
author: Carlos J. Gil Bellosta
date: 2024-06-03
title: "Descuento hiperbólico: lo que es y lo que no es"
url: /2024/06/03/descuento-hiperbolico
categories:
- varios
tags:
- descuento hiperbólico
- sicología
- economía
- matemáticas
---

### I.

La teoría dice que el valor _ahora_ (o presente) de un bien $A$ en el futuro, dentro de un tiempo $t$, es $A\exp(-tr)$, donde $r$ es la llamada tasa de descuento.

Entonces, si $A$ son 100 € y la $r$ de cierto individuo es tal que el valor presente de 100 € dentro de un año son 50 €, este individuo valorará de igual manera 50 € hoy o $100 \exp(-r) = 50$ € dentro de un año.

Si $r$ es constante ---una simplificación bastante seria de la teoría que no rige cuando uno profundiza en el mundo de la finanzas, por ejemplo---, entonces dicho individuo será indiferente entre:
- 25 € hoy
- 50 € dentro de un año: $25 = 50 \exp(-r)$
- 100 € dentro de dos años: $25 = 100 \exp(-2r)$
- etc.

### II.

Pero la gente no es _tan racional_. La gente suele razonar de tal manera ---al menos, según los sicólogos que hacen estudios de campo al respecto--- que valora más el pájaro en mano que el que vendrá. En particular, un humano _normal_:

- Tenderá a valorar más los 25 € hoy que los 50 mañana.
- Es mucho más indiferente entre 50 € dentro de un año que 50 € dentro de dos que lo que dice la teoría precedente.

Es como si la función de descuento no fuese la exponencial sino una función que:
- Desciende rápidamente al principio.
- Y luego se mantiene más o menos constante.

En particular, como se discute [aquí](/2023/02/16/descuento-hiperbolico-bayesiano/), la función _hiperbólica_ en la que suele pensarse como reemplazo de la exponencial $A \exp(-rt)$ es

$$\text{valor presente} = \frac{A}{1 + kt}.$$

Ciertamente, esta función decae más despacio que la exponencial y no discrimina tanto el valor presente entre dos tiempos $t_1, t_2 > 0$ como la exponencial.

### III.

La entrada de hace un par de años que enlazo muestra cómo esta elección no es enteramente irracional si hay incertidumbre sobre la tasa de descuento que hay que utilizar. Para los detalles, consúltese.

### IV.

Pero el descuento hiperbólico confunde más que aclara cuando uno usa la tasa de descuento para tratar de entender otro problema que aparece también en la sicología: descontamos demasiado males futuros.

En concreto, un sujeto _normal_, al tener la opción de comer o no un postre de chocolate, tenderá a valorar más el placer a corto plazo que las consecuencias negativas para la salud a medio o largo plazo. Es como si a esas consecuencias negativas les aplicase una tasa de descuento muy elevada. ¡Pero la función del descuento hiperbólico decae muy lentamente!

Si la función de descuento fuese la hiperbólica, todo el mundo tendría una vida _supersana_. Pero tiende a ocurrir ---¿no?--- lo contrario.

### V.

Una función de descuento que recogiese las desviaciones observadas de los agentes seudorracionales frente a las que sugiere la teoría tradicional del descuento debería cumplir:

- Tener una caída rápida en un entorno del 0 (sobre valorando el presente)
- Decrecer muy lentamente fuera de dicho entorno.
- Tener un valor muy bajo en el futuro (sobre todo, al cabo de unos años, descontando casi a 0 lo que pase entonces)

Un escalón, vamos.

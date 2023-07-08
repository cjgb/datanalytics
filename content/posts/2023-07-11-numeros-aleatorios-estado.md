---
author: Carlos J. Gil Bellosta
date: 2023-07-11
title: 'Números aleatorios, estado interno y su relación con el paralelismo'

url: /2023/07/11/numeros-aleatorios-paralelismo/
categories:
- programación
tags:
- números aleatorios
- jax
- r
- paralelismo
---

## I.

En primer lugar, no voy a hablar de números aleatorios sino _seudoaleatorios_. Resumiéndolo todo mucho, un generador de números seudoaleatorios (PRNG en lo que sigue) es una función que a partir de una secuencia fácilmente adivinable (p.e., 0, 1, 2,...) genera otra de números con apariencia aleatoria.

Los números de la secuencia adivinable constituirían los distintos _estados_ del PRNG. En R, Python y otros lenguajes populares, el generador de números aleatorios hace dos cosas: generar un número aleatorio y actualizar el estado.

_[Estos generadores de números aleatorios no son pues lo que algunos llaman _funciones puras_ en tanto que tienen _efectos secundarios_.]_

## II.

En R, el estado original se determina especificando la semilla:

{{< highlight R >}}
set.seed(1)
{{< / highlight >}}

El _verdadero_ estado del PRNG por defecto de R puede consultarse así

{{< highlight R >}}
.Random.seed
{{< / highlight >}}

y es un vector largo (longitud 626) de enteros.

Cuando se hace

{{< highlight R >}}
runif(1)
{{< / highlight >}}

suceden dos cosas, una explícita y otra implícita. La explícita es que se obtiene el número 0.2655087. La implícita es que se modifica el estado.

_[Nota técnica: el vector `.Random.seed` solo cambia cada 600 llamadas y pico a `runif`. Supongo que este funcionamiento se debe a algún tipo de optimización interna y que el _estado verdadero_ incluye el _estado_ más algún tipo de puntero o contador.]_

## III.

Esa manera de proceder es cómoda para el usuario, pero se convierte en un problema cuando se quiere paralelizar reproduciblemente código que usa números aleatorios: los distintos subprocesos tendrían que acceder al registro _central_ del estado de manera coordinada, etc.

Para evitar ese problema, en [JAX](https://github.com/google/jax), la generación de números aleatorios es algo más engorrosa: es el usuario el que tiene que encargarse de actualizar el estado del PRNG explícitamente. De la generación de números aleatorios se encargan dos funciones puras (sin efectos secundarios) distintas, $r$ y $u$. La segunda actualiza el estado:

$$u(e_i) = e_{i+1},$$

mientras que la primera necesita un estado explícito. Generar números aleatorios en JAX, por tanto, vendría a hacerse así:

{{< highlight R >}}
e0 <- seed(0)
r0 <- r(e0)
e1 <- u(e0)
r1 <- r(e1)
...
{{< / highlight >}}
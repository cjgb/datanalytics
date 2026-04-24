---
author: Carlos J. Gil Bellosta
categories:
- estadística bayesiana
date: 2026-04-23
description: 'Un análisis de dos artículos recientes sobre los orígenes del covid usando estadística bayesiana.'
lastmod: '2026-04-18T17:06:50.301931'
related:
- 2018-01-12-abc.md
- 2018-10-23-abc-2.md
- 2022-09-13-errores-cierto-tipo-encuestas.md
- 2018-10-24-abc-2-2.md
- 2014-10-10-bootstrap-bayesiano.md
tags:
- estadística bayesiana
- covid
- abc
title: 'Covid: ¿una o dos transmisiones a humanos?'
url: /2026/04/23/covid-transmisiones/
---

Volveré al covid más abajo. Antes, propedéutica.

Hay dos monedas, la A y la B. Alguien tira una de ellas 100 veces y obtiene 60 caras. Y la pregunta es: ¿qué moneda usó?

Un indicador que nos permite razonar sobre qué moneda es más plausible es el factor de Bayes, es decir, la razón

$$\frac{P(60/100 \| A)}{P(60/100 \| B)}$$

Para calcular $P(60/100 \| X)$, lanzo la moneda $X$ $N \times 100$ veces, cuento el número de caras en cada una de las $N$ rachas de $100$ tiradas y calculo la proporción de casos en los que obtengo exactamente 60 caras.

El ejemplo admite dos complicaciones:

1. En el ejemplo anterior tengo dos «sistemas generativos» (que generan el número de caras en cien lanzamientos de una moneda, la A o la B). En muchos problemas no es factible generar valores físicamente sino que es necesario simular.
2. En versiones razonables del ejemplo anterior es relativamente probable obtener 60 caras en series de 100 tiradas. Pero podría darse el caso de que el patrón observado fuese prácticamente imposible de obtener y por más simulaciones que realizásemos, nuestras probabilidades estimadas fuesen siempre 0.

Por ejemplo, imagínese que en lugar de 100 tiradas y 60 caras hubiese habido 100.000.000.000.001 tiradas y se hubiesen obtenido 60.000.000.000.000 caras. En tal caso, sería razonable reemplazar el experimento «lanzar $N$ veces las monedas 100.000.000.000.001 veces y contar los casos en los que se obtienen 60.000.000.000.000 caras» por «lanzar $N$ veces las monedas 100 veces y contar los casos en los que se obtienen 60 caras». O tal vez por «lanzar $N$ veces las monedas 1000 veces y contar los casos en los que se obtienen 600 caras».

Esa estrategia es algo que se parece a ---si no lo es exactamente--- lo que se ha dado en llamar ABC, o _approximate Bayesian computation_: nuestros experimentos no reproducen exactamente los datos observados sino otros similares. Geométricamente, no buscamos caer exactamente en un punto sino que nos conformamos con hacerlo en un pequeño entorno suyo.

Una exigencia de esta técnica es que el grado de aproximación sea idéntico en las dos aproximaciones de la probabilidad. No se le puede exigir a una moneda obtener 60 caras en rachas de 100 tiradas y a la otra 600 en rachas de 1000 porque eso estaría sesgando el resultado en favor de la primera.

Y ahora, entro propiamente en materia.

Se ha estudiado el material genético de los primeros virus de covid detectados en humanos (a finales de 2019 en la zona de Wuhan, en China) y se ha observado que tiene una estructura consistente en dos ramas diferenciadas, separadas por una mutación (parte de la derecha en el siguiente gráfico).

![](/img/2026/origen-covid.png#center)

Eso conduce a especular una teoría sobre el origen del covid: que hubo un doble contagio a partir de cepas distintas del virus (tal como describe pictóricamente el gráfico anterior).

Que se contrapone a otro mecanismo generativo: que existió un único contagio (y que, por lo tanto, la escisión en dos ramas ocurrió dentro de un huésped humano).

Dos artículos han tratado de aplicar las técnicas descritas más arriba para determinar la plausibilidad relativa de ambos mecanismos:

- [_The molecular epidemiology of multiple zoonotic origins of SARS-CoV-2_](https://www.science.org/doi/10.1126/science.abp8337).
- [_An Article in Science on Covid Origins Contains a Fundamental Error_](https://econjwatch.org/file_download/1405/WeissmanMarch2026.pdf?mimetype=pdf), que sostiene que el artículo anterior comete un error conceptual en la estimación de una de las probabilidades condicionales.

La principal complicación aquí es que ningún procedimiento de simulación es capaz de reproducir el árbol filogenético observado. Es necesario:

1. Realizar simulaciones. Podría decirse que su semejanza a los fenómenos que pudieran haber ocurrido en Wuhan en 2019 es problemática, aunque esta no es la principal cuestión que se debate aquí.
2. Determinar cuándo uno de los árboles obtenidos en una simulación es "compatible" con el observado. Para eso, los autores de primer artículo definieron una "topología" particular de los árboles aceptables en la simulación.

La objeción del segundo estudio tiene que ver con la exigencia del método ABC señalada más arriba: según su autor, el criterio de aceptación de los árboles construidos según el criterio del contagio único era mucho más elevado que el usado con los construidos de acuerdo con el otro. Dependiendo de si aceptas sus objeciones o no, obtendrás los resultados mutuamente contradictorios de uno u otro estudio.

(Mi opinión personal, después de haber revisado ambos artículos, se decanta más por los argumentos del primero. Pero eso, como casi todo en ciencia, es mera opinión. Ya sabemos que la erística es la nueva verdad.)

**Coda:** La cuestión tratada en este artículo tiene una connotación política porque la hipótesis de un doble contagio reduciría la plausibilidad de una fuga en un laboratorio, etc. Un rollo macabeo.
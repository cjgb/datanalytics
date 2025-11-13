---
-categories:
- estadística
author: Carlos J. Gil Bellosta
date: 2025-11-11
description: Crítica a prácticas estadísticas comunes como trocear variables y ajustar
  regresiones logísticas segmentadas, con reflexiones sobre equilibrios inadecuados
  y alternativas.
lastmod: '2025-11-13T20:48:54.652729'
related:
- 2012-01-12-localidad-globalidad-y-maldicion-de-la-dimensionalidad.md
- 2023-09-07-problema-modelos-bayesianos-identicabilidad.md
- 2025-04-22-cortos-stats.md
- 2024-02-01-optimizacion-generalizacion.md
- 2025-10-16-estadistica.md
tags:
- regresión logística
- árboles
- equilibrios inadecuados
- mala ciencia
title: Unas notas sobre la sorprendente y contumaz persistencia histórica de las regresiones
  logísticas a trozos
url: /2025/11/11/regresion-logistica-trozos/
---

Hace unos días [publiqué](/2025/10/16/cortos-estadiistica/) una pequeña cita de Frank Harrell:

> Las relaciones entre las variables casi nunca son lineales [...]. Muchos de los que no han estudiado en profundidad los problemas del sesgo y la eficiencia creen que la presencia de relaciones no lineales se remedia tramificando las variables continuas en intervalos. Es lo más desastroso que pudiere hacerse.

Resulta que trabajo ahora en un sector que, un poco como todos, está enredado en lo que Yudkowsky llama un _equilibrio inadecuado_. De hecho, escribió un libro al respecto cuyo título completo es [_Equilibrios inadecuados: dónde y cómo las civilizaciones se quedan atrapadas_](https://www.goodreads.com/book/show/36606376-inadequate-equilibria). Estos equilibrios inadecuados adquieren formas distintas en sectores distintos y alguna vez me he ocupado en estas páginas de los que he sufrido en, p.e., la [epidemiología](/2020/04/06/en-primavera-en-serio-ni-de-cona/).

En este, por ejemplo, no causa espanto construir modelos logísticos donde todas las variables están segmentadas. Es práctica habitual, por ejemplo, hacer lo siguiente:

1. Toma variables una a una y encuentra _cortes óptimos_ mediante técnicas similares a las de ajustar un árbol de clasificación univariante.
2. Con eso se trocea cada una de las variables.
3. Luego ajusta una regresión logística sobre las variables categóricas resultantes.

Al final, si se usan $n$ variables y cada una se trocea en, pongamos, 3 tramos, las predicciones serán constantes en $n^3$ regiones del espacio. Si la logística no tiene interacciones, esas predicciones serán ---no matemáticamente, pero sí prácticamente--- producto de probabilidades, las que aportan cada una de las variables. En efecto,  si las probabilidades de ocurrencia son pequeñas, el denominador de la expresión

$$\frac{\exp(a_0 + \sum_{ij} a_{ij}x_{ij})}{1 + \exp(a_0 + \sum_{ij} a_{ij}x_{ij})}$$

es prácticamente 1 y, por lo tanto, la probabilidad en cada región es esencialmente el producto

$$P(x_1, \dots, x_n) = \exp(a_0) \prod_{i} \exp(\sum_j a_{ij}x_{ij})) = P_0 \prod_{i} P(x_i)$$

donde en todo lo anterior $j$ indica el tramo que identifica la región en cuestión para cada una de las variables $x_i$. Es como tener una tabla n-dimensional y asignar a cada celda la probabilidad en términos del producto de las marginales.

Es una aproximación a la modelización estadística que no sé si alguien habrá visto desarrollada en algún texto de estadística de los últimos 50 años fuera de los específicamente dirigidos a algún estrecho sector reacio a la actualización metodológica.

Pensaba el otro día en vías para escapar de este equilibrio inadecuado. Una de las menos ambiciosas es pensar en árboles de decisión. Si las predicciones son constantes en regiones que se construyen variable a variable, ¿por qué no usar las regiones definidas con un árbol de clasificación que las contemple a todas simultáneamente? Porque, ¿está claro que la probabilidad de los eventos para los sujetos en una de las regiones tenga que depender de ---como hace implícitamente la regresión logística--- observaciones que están fuera de él?

Además, $n^3$ regiones ---como arriba--- pueden ser muchas. Es previsible que en algunas de ellas haya muy pocos elementos. ¿Cómo de fiables pueden ser las predicciones para esos sujetos? En los árboles, al menos, es posible introducir restricciones para que no cree ramas excesivamente _finas_ en las que las estimaciones puedan no ser fiables.

La verdad, no sé hacia dónde llevar esta entrada ni cómo rematarla. Las historias de cuando era pequeño concluían con una moraleja. Esta, ni eso. Tiene final abierto para que cada cual la complete según su parecer.

### Coda

Pocos días después de escrito lo anterior, recordé que un colega que trabajaba en el mundo de los seguros me comentaba hace tiempo que en su sector no es extraño ajustar regresiones logísticas de esta manera:

1. Se propone un modelo base _completo_, es decir, con todas las variables más todas las interacciones entre ellas.
2. El modelo se somete a un proceso de _backwards elimination_ para ir simplificándolo.
3. En cierto momento, el proceso se detiene en el modelo que consideran _óptimo_.

Es, como decía uno que conocía, _lo mismo pero del revés_.

### Otra coda

No sé si alguien habrá advertido el uso del [futuro del subjuntivo](/2023/11/23/futuro-subjuntivo/) en la entrada. Mi LLM corrector insiste en que se trata de un error. Pero yo sé más que él de eso.
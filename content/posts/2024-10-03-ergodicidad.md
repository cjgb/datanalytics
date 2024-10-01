---
author: Carlos J. Gil Bellosta
date: 2024-10-03
title: 'Ergodicidad, Birkoff, Pareto, Sidgwick, utilitarismo y todas esas cosas'
url: /2024/10/03/ergodicidad-utilitarismo
categories:
- varios
tags:
- ergodicidad
- ética
- pareto
---

### I.

Consideremos un proceso estocástico $X$ (por ejemplo, una sucesión de tiradas de monedas) y varias realizaciones suyas $x_i$. (Una realización sería, en este caso, una secuencia concreta de tiradas de monedas). Supongamos que cada realización $x_i$ está asociada a un sujeto $i$ (el que tira las monedas). Por conveniencia, $x_i(n)$ es la enésima tirada del sujeto $i$.

Se puede hablar de la media de $X$ que debería ser 1/2 (la proporción de caras). Pero hay varias maneas de pensar en esa _media_: por ejemplo, como el límite de

$$\frac{1}{T} \sum_{t = 1}^T x_i(t)$$

para cierto $i$ o como el límite

$$\frac{1}{N} \sum_{n = 1}^N x_n(t)$$

para cierto $t$. Es decir, podemos pensar en elegir un sujeto y promediar sus tiradas o fijar un momento $t$ y promediar las tiradas de todos los sujetos. Para el proceso $X$ tal cual se ha definido, tanto da: se obtiene 1/2 en cualquiera de los dos casos.

Que la media a lo largo del tiempo para un sujeto y la media a través de los sujetos para un momento determinado sean idénticos es consecuencia de la llamada ergodicidad del proceso $X$. Tiene que ver con el teorema de Birkoff y muchas otras cosas que pertenecen a mi pasado remoto.

### II.

Pero no todos los procesos son ergódicos. Piénsese en el siguiente proceso (discutido con más detalle [aquí](https://ergodicityeconomics.com/2024/02/05/ergodicity-economics-a-history-2/)):

1. Se parte de un capital de 1.
2. Se tira una moneda al aire.
3. Si sale cara, el capital se multiplica por 1.5; si sale cruz, se multiplica por 0.6.
4. GOTO 2.

Entonces, el promedio del capital a lo largo de los sujetos se multiplica por 1.05 en cada iteración: si se parte de $c$, en la mitad de los casos este se convierte en $1.5 c$ y, en la otra mitad, en $0.6.c$. Entonces,

$$\frac{1}{2} 1.5 c + \frac{1}{2} .6 c = c \frac{1.5 + .6}{2} = 1.05 c$$

Sin embargo, si se realiza el promedio para un sujeto concreto a lo largo del tiempo, la situación cambia. Por ejemplo, después de 1000 tiradas, la mitad de los sujetos habrán obtenido menos caras que cruces, por lo que su capital será menor que

$$1 \times 1.5^{500} \times 0.6^{500} = .9^{500} \approx 0$$

Tras 100 tiradas, solo el 13% de los sujetos conservan su capital; tras mil tiradas, solo uno de cada diez mil; tras diez mil tiradas, mi ordenador, por falta de precisión numérica, no encuentra ninguno. Y aun así, ¡la _media societal_ crece en cada tirada!

### III.

A este pequeño experimento se le pueden extraer varias moralejas relativas al impacto que pueden tener las grandes cifras, las estadísticas que se publican por ahí, en los individuos concretos. Un juego (o una _política_) con un impacto societal promedio positivo pasaría todos los filtros del utilitarismo estricto (basado en el criterio de aumentar la utilidad media) ---no así el criterio de Pareto, que prohíbe incrementar la utilidad de unos a costa de la de otros---.

Igualmente, hay estadísticas ---de las que publica el INE, etc.--- que parecen ergódicas: se publican con el beneplácito de los más reputados estadísticos del estado y uno las encuentra reflejadas en su entorno, donde uno aprecia casos de aquello a lo que se refiere la estadística en cuestión. Pero en ocasiones uno advierte una discrepancia notable entre aquello que lee y aquello que observa. Supongo que ocurre menos en la España de hoy que en la URSS de antaño, pero, sin duda, siguen existiendo cifras no ergódicas.
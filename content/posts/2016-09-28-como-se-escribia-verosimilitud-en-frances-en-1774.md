---
author: Carlos J. Gil Bellosta
date: 2016-09-28 08:13:46+00:00
draft: false
title: ¿Cómo se escribía "verosimilitud" en francés en 1774?

url: /2016/09/28/como-se-escribia-verosimilitud-en-frances-en-1774/
categories:
- estadística
tags:
- historia
- laplace
- verosimilitud
- fundamentos de probabilidad
---

Lo cuento luego, después del (por mí traducido) contexto:


>La incertidumbre del conocimiento humano puede serla sobre los sucesos o de las causas de los sucesos; si se nos asegura, por ejemplo, que una urna encierra bolas blancas y negras en una proporción dada y se pregunta por el color de una bola extraída al azar, el suceso es incierto, pero la causa de la que depende la probabilidad de su existencia, es decir, la proporción de bolas blancas y negras, es conocida.
>
>Pero en el problema siguiente: "Una urna contiene bolas blancas y negras en una proporción desconocida, se extrae una al azar y resulta ser blanca: determinar la probabilidad de que la proporción de bolas blancas y negras sea de p a q"; el suceso es conocido pero la causa no.

Nótese que se habla de la probabilidad de la proporción. ¡Qué emoción!

Más:

>A estos dos tipos de problemas se pueden reducir todos los de la teoría de la probabilidad [théorie des hazards].

Veamos a dónde nos lleva esto:

![laplace_verosimilitud](/wp-uploads/2016/09/laplace_verosimilitud.png)

¡Esa es la función de verosimilitud!

Esencialmente, dice que

$$ \frac{P(\theta_1 | X)}{P(\theta_2|X)} = \frac{P(X | \theta_1)}{P(X | \theta_2)}$$

y que, como consecuencia,

$$ P(\theta_i | X) = \frac{P(X | \theta_i)}{\sum_j P(X | \theta_j)}$$

cosa que no es del todo cierta (porque se asumen prioris uniformes, omisión que el 80% de la profesión le excusaría de buen grado) pero que es una verosimilitud en toda regla.

El resto de la _Mémoire sur la probabilitité des causes par les evenements_ es superemocionante. Uno está esperando a la vuelta de cada hoja encontrar $latex f^\prime(x) = 0$ y, voilá, tener una estimación por máxima verosimilitud. Pero no, en cada coyuntura en que el bueno de Laplace podría haber adelantado en reloj de la ciencia en siglo y medio, sale por peteneras: que si el valor promedio, que si la mediana, que si...

Y por terminar, una curiosidad: uno de los problemas a los que aplica Laplace todo lo anterior es [al de las tres medidas](https://www.datanalytics.com/2011/09/14/la-estadistica-del-numero-tres/). Para el que se le ocurre utilizar como función de error, en lugar de lo/la normal, [la suya propia](https://es.wikipedia.org/wiki/Distribuci%C3%B3n_de_Laplace). Eso sí que es personalidad, ¡carajo!
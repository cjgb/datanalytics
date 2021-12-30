---
author: Carlos J. Gil Bellosta
date: 2010-11-12 09:38:03+00:00
draft: false
title: Abundando en lo de nuestra ineptitud para estimar la probabilidad condicionada

url: /2010/11/12/abundando-en-lo-de-nuestra-ineptitud-para-estimar-la-probabilidad-condicionada/
categories:
- probabilidad
tags:
- probabilidad
---

Antes de seguir leyendo, trate de responder a la siguiente pregunta:

>Una familia tiene dos hijos (acá usamos el masculino en forma genérica: pudieran ser de cualquier sexo). Uno de ellos es niño. ¿Cuál es la probabilidad de que el otro sea también niño?

Si su respuesta es 0.5 va a tener que seguir leyendo el resto del artículo. Pero tampoco se deprima: parece que nuestro cerebro está maleado para caer en tal error y así lo parece refrendar una microencuesta que elaboro interpelando a incautos.

Quería basarme en datos de familias del INE para probar lo incorrecto del valor 0.5, pero no existe en la contabilidad nacional un informe del número de hijos por sexo y familia. Así que he fabricado un país artificial con R:

{{< highlight R "linenos=true" >}}
# Para facilitar la replicabilidad del experimento
set.seed( 1234 )

# 1 millón de familias tienen 2 hijos
# La variable n.hijos.varones cuenta el número de varones en cada una de ellas
n.hijos.varones <- rbinom( 1000000, 2, 0.5 )

table( n.hijos.varones )
# n.hijos.varones
#      0      1      2
# 250696 499112 250192

# La probabilidad de tener dos niños cuando se tiene al menos un niño viene dada
# por el siguiente cociente:
sum( n.hijos.varones == 2 ) / sum( n.hijos.varones > 0 )
# 0.3338992
{{< / highlight >}}

¡La respuesta es próxima a 1/3! Y éste es precisamente el valor que cabe esperar. De hecho, si $latex X, Y \in {0,1}$ son variables aleatorias binomiales que indican si el primer o segundo hijo, respectivamente, son niños, entonces:



1. Cabe esperar que X e Y sean independientes.
2. Que la probabilidad de que tomen el valor 1 sea 1/2.

El enunciado del problema indicado más arriba puede reescribirse matemáticamente se reduce a calcular

$$ P( X + Y = 2 | X + Y > 0 ), $$


que es (de acuerdo con la definición de la  [probabilidad condicionada](http://es.wikipedia.org/wiki/Probabilidad_condicionada))


$$\frac{P( X + Y = 2 , X + Y > 0 )}{ P( X + Y > 0 ) } = \frac{P( X + Y = 2 )}{ P( X + Y > 0 ) } = \frac{1/4}{ 3/4 } = \frac{1}{3}$$


También es evidente en la siguiente figura:


[![](/wp-uploads/2010/11/grafico_probabilidad_condicional.png#center)
](/wp-uploads/2010/11/grafico_probabilidad_condicional.png#center)


La pregunta que ha dado origen al problema puede reformularse, al fin y al cabo así: ¿cuál es la posibilidad de _caer_ en la casilla gris oscuro si se sabe que se ha _caído_ en una casilla gris?

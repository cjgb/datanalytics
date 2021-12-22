---
author: Carlos J. Gil Bellosta
date: 2014-11-13 07:13:19+00:00
draft: false
title: Simpson y la plebe anumérica

url: /2014/11/13/simpson-y-la-plebe-anumerica/
categories:
- consultoría
- estadística
- probabilidad
tags:
- consultoría
- estadística
- paradoja de simpson
- probabilidad
---

Supongamos que los habitantes de un país tienen una probabilidad determinada (y no necesariamente igual) $latex p_i$ de comprar un determinado producto. Supongamos que se lanza una campaña publicitaria que incrementa en una cantidad fija $latex \epsilon$, p.e., 5%, esa probabilidad.

Supongamos, finalmente, que se trata de una cantidad que se desea estimar.

Unos individuos reciben la campaña publicitaria. Otros no. ¿Cuál es la diferencia entre las proporciones de individuos que compran el producto en uno y otro grupo? ¿$latex \epsilon$? ¿Es esa nuestra mejor estimación?

¡No necesariamente!

De hecho, esa diferencia puede ser prácticamente cualquier número (razonable).

La proporción de compras entre quienes reciben la campaña tiene media $latex 1/n \sum p_i + \epsilon$. Entre quienes no la reciben, es $latex 1/m \sum q_j$. La diferencia es $latex \epsilon + 1/n \sum p_i - 1/m \sum q_j$.

En una situación ideal (¡pero yo no he dicho que la situación lo sea!) los valores $latex p_i$ y $latex q_j$ tendrían la misma distribución, el término $latex 1/n \sum p_i - 1/m \sum q_j$ sería próximo a cero y, por lo tanto, la diferencia entre las proporciones estaría cercana a $latex \epsilon$.

¿Pero qué si la probabilidad de recibir la campaña crece con $latex p$? Es algo que pasa a menudo: piénsese en anuncios de televisiones en televisión. En tal caso, los $latex p_i$ serían en promedio superiores a los $latex q_j$ y habría una sobreestimación de $latex \epsilon$.

Y a la inversa. Por ejemplo, una campaña lanzada a clientes a los que hace mucho que no se ve el pelo, tal vez porque no están muy poco interesados en el producto en cuestión.

La entrada de hoy es una trivialidad. Excepto, parece, para la plebe anumérica. ¡Carajo con la plebe anumérica!
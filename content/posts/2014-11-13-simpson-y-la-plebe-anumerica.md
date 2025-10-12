---
author: Carlos J. Gil Bellosta
categories:
- consultoría
- estadística
- probabilidad
date: 2014-11-13 07:13:19+00:00
draft: false
lastmod: '2025-04-06T19:02:05.132598'
related:
- 2011-01-10-c2bfuna-caida-demasiado-drastica-de-la-varianza.md
- 2013-05-16-el-error-en-las-encuestas-cuentas-en-una-servilleta.md
- 2018-09-04-podria-ser-simpson-pero-a-lo-mejor-es-otra-cosita.md
- 2012-01-12-localidad-globalidad-y-maldicion-de-la-dimensionalidad.md
- 2024-05-02-falacia-ecologica.md
tags:
- consultoría
- estadística
- paradoja de simpson
- probabilidad
title: Simpson y la plebe anumérica
url: /2014/11/13/simpson-y-la-plebe-anumerica/
---

Supongamos que los habitantes de un país tienen una probabilidad determinada (y no necesariamente igual) $p_i$ de comprar un determinado producto. Supongamos que se lanza una campaña publicitaria que incrementa en una cantidad fija $\epsilon$, p.e., 5%, esa probabilidad.

Supongamos, finalmente, que se trata de una cantidad que se desea estimar.

Unos individuos reciben la campaña publicitaria. Otros no. ¿Cuál es la diferencia entre las proporciones de individuos que compran el producto en uno y otro grupo? ¿$\epsilon$? ¿Es esa nuestra mejor estimación?

¡No necesariamente!

De hecho, esa diferencia puede ser prácticamente cualquier número (razonable).

La proporción de compras entre quienes reciben la campaña tiene media $1/n \sum p_i + \epsilon$. Entre quienes no la reciben, es $1/m \sum q_j$. La diferencia es $\epsilon + 1/n \sum p_i - 1/m \sum q_j$.

En una situación ideal (¡pero yo no he dicho que la situación lo sea!) los valores $p_i$ y $q_j$ tendrían la misma distribución, el término $1/n \sum p_i - 1/m \sum q_j$ sería próximo a cero y, por lo tanto, la diferencia entre las proporciones estaría cercana a $\epsilon$.

¿Pero qué si la probabilidad de recibir la campaña crece con $p$? Es algo que pasa a menudo: piénsese en anuncios de televisiones en televisión. En tal caso, los $p_i$ serían en promedio superiores a los $q_j$ y habría una sobreestimación de $\epsilon$.

Y a la inversa. Por ejemplo, una campaña lanzada a clientes a los que hace mucho que no se ve el pelo, tal vez porque no están muy poco interesados en el producto en cuestión.

La entrada de hoy es una trivialidad. Excepto, parece, para la plebe anumérica. ¡Carajo con la plebe anumérica!
---
author: Carlos J. Gil Bellosta
date: 2023-01-12
title: 'Otra forma de llegar a la distribución normal'

url: /2023/01/12/otra-forma-llegar-distribucion-normal/
categories:
- probabilidad
tags:
- probabilidad
- distribución normal
- física
- termodinámica
- maxwell-boltzmann
---

¿Cómo llegamos a la distribución normal? Típicamente, por aplicación ---implícita, explícita, rutinaria o litúrgica--- del teorema central del límite: una variable aleatoria es normal porque la creemos consecuencia de pequeñas perturbaciones independientes.

Pero hay otra vía.

Supongamos que tenemos tres ---o, para el caso, $n > 1$--- variables aleatorias continuas  independientes con la misma distribución. Su densidad, por tanto, puede factorizarse así:

$$f(x_1, x_2, x_3) = f(x_1) f(x_2) f(x_3).$$

Supongamos además que $f(x_1, x_2, x_3)$ depende solo de $x_1^2 + x_2^2 + x_3^2$, la distancia al origen. De otro modo, que

$$f(x_1) f(x_2) f(x_3) = f(x_1^2 + x_2^2 + x_3^2).$$

Entonces, tomando logaritmos y derivando, es trivial ---especialmente para aquellos que saben qué es un logaritmo y cómo se derivan las funciones--- convencerse de que la única opción posible para cada $f(x_i)$ es la consabida función de densidad de una variable aleatoria normal.

¿Se ha llegado alguna vez a deducir la normalidad de una distribución por este método? Pues sí, al menos una, a mediados del XIX donde las $X_i$ eran las componentes de la velocidad de las partículas de un gas perfecto _en equilibrio_. Que son independientes porque, ¿por qué no iban a serlo? Como consecuencia, las $X_i$ son normales y la distribución de las velocidades,

$$\sqrt{X_1^2 + X_2^2 + X_3^2}$$

sigue una distribución $\chi$ ---que es como la $\chi^2$, pero sin el cuadrado por razones obvias--- con tres grados de libertad que los físicos conocen como de Maxwell-Boltzmann.
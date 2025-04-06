---
author: Carlos J. Gil Bellosta
categories:
- probabilidad
date: 2016-09-16 08:13:12+00:00
draft: false
lastmod: '2025-04-06T18:50:10.152879'
related:
- 2022-06-23-kalman.md
- 2014-08-11-procesos-puntuales-una-primera-aproximacion.md
- 2018-10-23-abc-2.md
- 2016-06-16-metropolis-hastings-en-scala.md
- 2022-10-11-bayesianismo-frecuentismo-teoria-decision-03.md
tags:
- física
- mcmc
- mecánica
- metropolis
- probabilidad
title: Hamilton al rescate de Metropolis-Hastings
url: /2016/09/16/hamilton-al-rescate-de-metropolis-hastings/
---

El [algoritmo de Metropolis-Hastings](https://en.wikipedia.org/wiki/Metropolis%E2%80%93Hastings_algorithm) se usa para muestrear una variable aleatoria con función de densidad $latex p$. Permite crear una sucesión de puntos $latex x_i$ que se distribuye según $latex p$.

Funciona de al siguiente manera: a partir de un punto $latex x_i$ se buscan candidatos a $latex x_{i+1}$ de la forma $latex x_i + \epsilon$, donde $latex \epsilon$ es, muy habitualmente, $latex N(0, \delta)$ y $latex \delta$ es pequeño. De otra manera, puntos próximos a $latex x_i$. Un candidato se acepta (y se convierte en $latex x_{i+1}$) o se rechaza (y toca probar con otro) según los valores de $latex p(x_i)$ y $latex p(x_i + \epsilon)$:

* Si el segundo valor es mayor que el primero, se acepta el candidato.
* Si no, se echa a suertes según su valor relativo.

Todo bien hasta que (p.e., en altas dimensiones) se rechazan casi todos los candidatos y el proceso es muy lento. Además de que, por construcción, $latex x_{i+1}$ está cerca de $latex x_i$: la sucesión obtenida no es iid ni por el forro.

¿Existe una manera de conseguir _mejores_ candidatos (i.e., con una menor tasa de rechazo)?

El algoritmo arriba indicado explora todas las direcciones simétricamente. Pero algunas son mejores que otras (George Orwell dixit). ¿_Cuálas_ (una vecina dixit)?

Pensemos en la mecánica clásica. Un objeto se mueve en el espacio impelido por el campo de fuerzas que genera una determinada energía potencial $latex U$. Seguirá órbitas que explorarán predominantemente zonas de potencial bajo y, desde luego, tendrá vedadas zonas de potencial infinito.

¿Podríamos usar esa propiedad para muestrear $latex p$? Sí si consideramos, como potencial $latex -\log p(x)$. Con una elección de equivalente de energía cinética (¿por qué no $latex v^2$?) se puede construir el hamiltoniano y comenzar a trazar órbitas para obtener candidatos.

Dos problemas:

* El primero es que fijadas unas condiciones iniciales, el hamiltoniano es constante y las órbitas, por ejempo, nunca saldrán de ciertos pozos de potencial, por lo que habrá zonas vedadas de nuevo. La solución pasa por muestrear órbitas distintas correspondientes a condiciones iniciales de velocidad distintas (con una determinada distribución sobre estas velocidades).

![halleyorbit](/wp-uploads/2016/09/HalleyOrbit.gif)

* La segunda, sobre la que no he visto nada escrito, es que las partículas pasan proporcionalmente poco tiempo en las zonas de energía potencial baja (que corresponden a las de probabilidad alta). Eso sucede porque en ellas la energía cinética es alta: en plata, las atraviesan a toda leche. Como el cometa Halley, que pasa casi todo el tiempo donde no se lo ve.

Los corolarios, [aquí](https://arxiv.org/pdf/1206.1901.pdf).
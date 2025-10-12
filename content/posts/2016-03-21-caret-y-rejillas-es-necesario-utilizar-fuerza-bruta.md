---
author: Carlos J. Gil Bellosta
categories:
- ciencia de datos
- r
date: 2016-03-21 09:13:25+00:00
draft: false
lastmod: '2025-04-06T18:52:24.161113'
related:
- 2024-02-01-optimizacion-generalizacion.md
- 2017-09-11-pues-los-svms-al-final-no-son-tan-exoticos.md
- 2020-02-24-to-irls-or-not-to-irls.md
- 2023-11-14-cuantas-iteraciones-mcmc.md
- 2024-12-03-cortos-stats.md
tags:
- caret
- optimización
- r
title: 'Caret y rejillas: ¿es necesario utilizar fuerza bruta?'
url: /2016/03/21/caret-y-rejillas-es-necesario-utilizar-fuerza-bruta/
---

Durante la [charla de Carlos Ortega del pasado jueves sobre el paquete `caret` y sus concomitancias](https://prezi.com/0gsib_jcetim/bombas-r-caret-modelos-y-otros-animales/), se planteó el asunto de la optimización de los parámetros de un modelo usando rejillas (_grids_) de búsqueda.

Cuando un determinado algoritmo depende de, p.e., cuatro parámetros, se puede definir una rejilla como en

{{< highlight R >}}
gbmGrid <-  expand.grid(interaction.depth = c(1, 5, 9),
      n.trees = (1:30)*50,
      shrinkage = 0.1,
      n.minobsinnode = 20)
{{< / highlight >}}

y `caret` se encarga de ajustar el modelo bajo todas esas combinaciones de parámetros (90 en el ejemplo) para ver cuál de ellas es, con las debidas salvedades, óptima.

Jorge Ayuso me planteó la siguiente pregunta: ¿cabría, en lugar de recorrer todas las combinaciones, utilizar un algoritmo de optimización que encontrase un óptimo en el espacio 4-dimensional de parámetros? En principio, la idea es sugerente, aunque está sujeta a dos consideraciones. La primera, pesimista, que el error que se quiere minimizar está sujeto a error. No es un valor fijo como cuando uno quiere maximizar $f(x)=x^2$. De hecho, la salida de `caret` es de la forma

{{< highlight R >}}
interaction.depth  n.trees  Accuracy   Kappa      Accuracy SD  Kappa SD
1                   50      0.7705490  0.5350650  0.10073946   0.2037707
1                  100      0.7944632  0.5835422  0.09419873   0.1914364
1                  150      0.8011593  0.5964959  0.09019200   0.1851888
2                   50      0.8015147  0.5978660  0.09962239   0.2017663
2                  100      0.8088333  0.6119527  0.09563838   0.1946951
2                  150      0.8189363  0.6319720  0.08708353   0.1784560
3                   50      0.7953015  0.5855569  0.09652109   0.1969998
3                  100      0.8143113  0.6232661  0.08878854   0.1824782
3                  150      0.8217377  0.6373545  0.09037965   0.1866666
{{< / highlight >}}

donde se aprecia cómo el paquete tiene la decencia de mostrarnos la sd de la tasa de acierto. Muchos de los métodos de optimización habituales hacen _catas locales_ para calcular gradientes y similares.

La segunda, esta vez optimista, es que nunca he visto una situación en que la curva del error no sea _grosso modo_ convexa.

Con las dos consideraciones anteriores, pienso que tal vez un método de optimización similar al de [Nelder-Mead](https://en.wikipedia.org/wiki/Nelder%E2%80%93Mead_method), que no se basa en gradientes, podría funcionar. Como alternativa, podría plantearse una estrategia basada en el [descenso cíclico por coordenadas](http://statweb.stanford.edu/~jhf/ftp/glmnet.pdf) que, a diferencia de otras [moderneces más en boga](https://github.com/AunSiro/Algoritmos-Geneticos-R-Python-Meetup), nunca ha dejado de darme alegrías.

De todos modos, y permítaseme terminar así, casi todo lo relativo a `caret` me parece un entretenimiento más propio de [_script kiddies_](http://www.urbandictionary.com/define.php?term=script+kiddie) que de gente seria.
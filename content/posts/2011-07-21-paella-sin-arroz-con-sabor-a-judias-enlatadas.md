---
author: Carlos J. Gil Bellosta
categories:
- finanzas
- probabilidad
date: 2011-07-21 07:00:14+00:00
draft: false
lastmod: '2025-04-06T18:47:18.386876'
related:
- 2017-01-16-weapons-of-math-destruction.md
- 2012-03-30-tolstoi-sobre-los-mercados-ineficientes.md
- 2024-07-03-cortos-stats.md
- 2014-03-28-predictores-con-varianza-casi-nula-inflacion-loterias-y-linea-de-comandos.md
- 2014-10-28-tres-sigmas-o-nanay.md
tags:
- finanzas
- mercados financieros
- probabilidad
- simulación
title: Paella sin arroz con sabor a judías enlatadas
url: /2011/07/21/paella-sin-arroz-con-sabor-a-judias-enlatadas/
---

El otro día leí el artículo [_A Prototype Model of Stock Exchange_](http://econpapers.repec.org/paper/arxpapers/cond-mat_2f9709118.htm)de G. Caldarelli, M. Marsili y Y.C. Zhang. La promesa que me ofrecía era la de la creación de un sistema relativamente realista de los agentes que operan en los mercados financieros que diese lugar a una evolución de precios con propiedades similares a las observadas.

Sin embargo, el planteamiento, interesante en un principio, se deshinchó enseguida:


* El modelo planteado por los autores ni siquiera aspira a representar los aspectos más distintivos del mercado: en lugar de agentes tremendamente desiguales en tamaño y entrelazados en una maraña de dependencias e influencias mutuas, los agentes son todos equivalentes en tamaño (si bien es cierto que en el _estado estacionario_ de la simulación los ingresos adquieren una distribución dada por una [ley de potencias](http://es.wikipedia.org/wiki/Ley_de_potencias)) y que actúan de manera independiente entre sí una vez observados los precios en el mercado.
* Los resultados, una serie temporal de precios, es calificada por los autores como _muy rica_, aunque enseguida pasan, en un dechado de honradez, a apuntar diferencias más o menos manifiestas entre sus características estadísticas y las observadas en mercados reales.

Entiendo y aplaudo el virtuosismo técnico empleado por los autores del artículo y la implementación de los algoritmos involucrados. No obstante, tras leerlo, me embriaga una extraña sensación que no debe de ser muy distinta de aquellos comensales a los que se les anunció paella, se les advirtió que no traía arroz ni gambas y comprobaron después que sabía a judías de lata.
---
author: Carlos J. Gil Bellosta
date: 2020-11-11 09:13:00+00:00
draft: false
title: 'Codificación de categóricas: de (1 | A) a (B | A)'

url: /2020/11/11/codificacion-de-categoricas-de-1-a-a-b-a/
categories:
- ciencia de datos
- estadística
tags:
- ciencia de datos
- codificación
- estadística
- modelos mixtos
- variables categóricas
---




La notación y la justificación de `(1 | A)` está [aquí](https://www.datanalytics.com/2014/12/29/modelos-mixtos-por-doquier/), una vieja entrada que no estoy seguro de que no tenga que retocar para que no me gruña el ministerio de la verdad.







Esta entrada lo es solo para anunciar que en uno de [nuestros](https://www.datanalytics.com/2014/12/29/modelos-mixtos-por-doquier/) proyectos y a resultas de una idea de [Luz Frías](https://twitter.com/koldLight), vamos a implementar una versión mucho más parecida al lo que podría representar el término `(B | A)`, que es, casi seguro, _chorrocientasmil_ veces mejor.







_[Corrección: tengo que reconocer que no había usado la sintaxis` (B | A)` en `lmer` porque, entre otros motivos, no existe. Así que non è vero. ¿Pero, è ben trovata? Si `(1 | A)` segmenta el valor de la constante en trozos (determinados por `A`) que asumen un mismo valor, `(B | A)` bien podría representar lo equivalente, donde se subsegmentan según `A` los segmentos que define `B`. Pero no, parece que no es tal la manera de hacer eso en lmer y parece que es la igualmente natural `(1 | A:B)` o `(1 | A\B)` o sus variantes según qué se pretenda hacer exactamente.]_




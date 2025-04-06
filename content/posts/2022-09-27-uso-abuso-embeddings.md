---
author: Carlos J. Gil Bellosta
categories:
- ciencia de datos
date: 2022-09-27
lastmod: '2025-04-06T19:10:29.577699'
related:
- 2018-10-15-dos-ejercicios-propuestos-sobre-embeddings.md
- 2018-10-03-de-que-matriz-son-los-embeddings-una-factorizacion.md
- 2014-12-29-modelos-mixtos-por-doquier.md
- 2023-12-19-suma-informacion.md
- 2024-06-06-cortos-llms.md
tags:
- redes neuronales
- embeddings
- nlp
title: Uso y abuso de los "embeddings"
url: /2022/09/27/uso-abuso-embeddings/
---

La variable feota por excelencia de nuestra profesión es el código postal: es categórica, tiene miles de niveles, muchos son infrecuentes, etc. Así que cuando se inventaron los [_embeddings_](https://en.wikipedia.org/wiki/Word_embedding), hace la tira, se me ocurrió crear uno por defecto. Es decir, una representación en baja dimensión de esa variable que pudiera aplicarse a una variedad de modelos. Y así fue hasta que al cabo de unos minutos se me ocurrió que ya existía una, muy natural, en dos dimensiones, que difícilmente iba a poder ser batida por un constructo ciego a la realidad: latitud y longitud.

La de los _embeddings_ es una más de esas ideas locas surgidas en el seno del ML que, si te la cuentan, dices: vale, tiene sentido pero no va a funcionar. Pero que resulta que va y funciona, tú. Tiene que haber habido millones de otras ideas/ocurrencias similares que hayan acabado no funcionando, pero esta resulta que sí. Sin demostración, como la acupuntura, pero con resultados visibles y contrastables.

Además, ha sido paquetizada tan conveniente y cómodamente que ahora cualquiera puede utilizarla casi para todo, hasta para hacer _embeddings_ de variables categóricas tan consuetudinarias como los días de la semana, como [aquí](https://flovv.github.io/Embeddings_with_tf/).

Pero, vamos, nah, no lo hagáis.

### Nota 1

Me quedó pendiente el siguiente ejercicio: hacer un _embedding_ de los códigos postales en dos dimensiones y ver si reconstruye el mapa de este ingrato país.

### Nota 2

Relacionado con la nota anterior, ¿qué cosa es más _guay_?
* He reemplazado la variable `codigo_postal` por sus coordenadas centrales.
* He reemplazado la variable `codigo_postal` por su _embedding_.
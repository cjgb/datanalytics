---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2023-11-02
lastmod: '2025-04-06T19:08:36.492664'
related:
- 2020-03-16-interacciones-y-seleccion-de-modelos.md
- 2022-03-08-estadistica-ciencias-blandas.md
- 2024-09-12-cortos-stats.md
- 2023-09-07-problema-modelos-bayesianos-identicabilidad.md
- 2020-02-06-model4you.md
tags:
- estadística
- interacciones
- r
title: ¿De dónde vienen las interacciones?
url: /2023/11/02/origen-interacciones/
---

El contexto es, esencialmente, la creación de modelos lineales ---no necesariamente los clásicos---, aunque la discusión podría extenderse más allá. Una cosa que nos suelen enseñar los libros es que si en un modelo de la pinta

```
y ~ t + g
```

(donde `t` es un _tratamiento_ y `g` es algún tipo de grupo) nos da por introducir una interacción (en este caso solo cabe `t*g`) _tenemos_ necesariamente que incluir los efectos individuales `t` y `g` so pena de incurrir en una larga retahíla de pecados estadísticos. La admonición suele venir seguida de una discusión que, admito, nunca he acabado de comprender.

De hecho, en R, es fácil definir el modelo que incluye las interacciones y los efectos individuales,

```
y ~ t * g
```

pero tendría que consultar la manera de eliminar los efectos principales ---vale, en realidad, no; pero es un decir---. R, tanto en esto como en tantas otras cosas, está diseñado para facilitar hacer las cosas tal como deben hacerse; y esta, todo hay que decirlo, es una de las pocas cosas en que le gana la partida a Python.

Parece, pues, haber motivos teóricos por los que incluir los efectos principales. Pero voy a argumentar en lo que sigue que la cuestión de si incluirlos o no ni siquiera tiene sentido ---es una pregunta vacía--- desde el punto de vista práctico. En cierto modo la pregunta de si incluirlos o no es una pregunta teórica para la que la teoría parece también haber encontrado respuesta pero que el debate es ---o debería ser--- ajeno para quienes hacemos estadística desde la trinchera.

Porque, ¿de dónde vienen las interacciones?, ¿por qué las usamos? La respuesta es simple: si partimos de un modelo como el primero y observamos que `t` tiene un efecto _significativo_ (en el sentido amplio del término), podemos ---¡debemos!--- preguntarnos si tal vez sea diferente entre los distintos subgrupos de `g`. Para eso introducimos el término de la interacción. Los modelos basados en árboles realizan la comprobación automáticamente: una vez parten por `t`, comienzan a explorar la posible existencia de particiones ulteriores. Con modelos más tradicionales, es uno el que tiene que realizar la comprobación _a mano_.

Introducir interacciones es algo que uno hace no porque dado que existe la posibilidad teórica no hay motivo para no hacerlo. Se hace porque, precisamente, hay motivos para hacerlo. Estos son, precisamente, que existe un efecto principal sólido.

Quiero terminar con una advertencia final: el proceso anterior tiene un peligro de tipo II. Sería posible ---y no es difícil construir datos _ad hoc_--- en los que el efecto principal sea prácticamente nulo pero que, sin embargo, existan importantes diferencias por tratamiento. Sobre lo cual tengo que decir:

* Aunque exista esa posibilidad teórica, no es una circunstancia que tienda a ocurrir en la práctica. Si un tratamiento es positivo, suele serlo para todos los grupos, aunque tal vez de manera asimétrica.
* Pero tal vez en un mundo tan resignado a los ejercicios _de suma cero_ veamos cada vez más tratamientos que globalmente ---recuérdese: tienen suma cero--- son inefectivos pero que afectan desigualmente a los distintos grupos.
---
author: Carlos J. Gil Bellosta
categories:
- ciencia de datos
date: 2023-01-16
lastmod: '2025-04-06T18:52:32.834432'
related:
- 2024-02-13-outliers-dos-modos.md
- 2016-11-16-detras-de-la-deteccion-de-anomalias-en-series-temporales.md
- 2024-02-01-optimizacion-generalizacion.md
- 2024-12-03-cortos-stats.md
- 2023-01-10-stable-diffusion-1d.md
tags:
- ciencia de datos
- pca
- autoencoders
- keras
- deep learning
- outliers
title: 'Autoencoders: una serie de lecciones aprendidas'
url: /2023/01/16/autoencoders-lecciones-consejos/
---

Estos días pasados he tenido que usar _autoencoders_ como mecanismos para _reducir la dimensión_ de una serie de conjuntos de datos. El principal problema al que me he enfrentado ---cómo no--- ha sido el de diseñar una arquitectura adecuada para el problema en cuestión. El principal motivo es que la práctica totalidad de los tutoriales, ejemplos, etc. disponibles por ahí tienen como aplicación principal el tratamiento de imágenes y en mi caso no.

¿Es esto importante? ¿Por qué?

Lo es y lo es porque las imágenes tienen una estructura muy concreta: como vectores, son números positivos y acotados (con un rango que depende de la condificación). Y no tienen _outliers_.

Sin embargo, los datos que uno encuentra en casi todas las aplicaciones _tradicionales_ tienen datos de todo pelaje: positivos y negativos, ¡enteros!, con _outliers_, etc. Vamos, lo que uno se encuentra cuando piensa en aplicar PCA por el mundo.

La principal recomendación genérica que puedo hacer para aplicar exitosamente los _autoencoders_ en esta situación es:

1. Normalizar los datos de serie (por supuesto)
2. Usar `tanh` como función de activación (¡nunca la sigmoide!).
3. No usar función de activación (o usar la identidad) en la última capa del _decoder_.

La tangente hiperbólica es la opción _menos mala_ en el exiguo menú de funciones de activación que proporciona, en mi caso, Keras. Una función de activación más interesante sería una que:

1. Creciese como $f(x) = x$ cerca del cero.
2. Creciese como $f(x) = x^\alpha$ con $\alpha$ típicamnete en $(0, 1)$ para valores positivos grandes.
3. Fuese simétrica: $f(-x) = f(x)$.

Creo que permitiría gestionar el problema de los outliers mejor que la `tanh`.

Y unas notas finales sobre la gestión de _outliers_ que, seguramente, serán conocidas de muchos pero que tampoco he visto explicitadas por ahí a menudo. El problema de los _outliers_ es que desdibujan la información proporcionada por las observaciones _normales_. Pero no se sabe cuál es dicha información ---y cuáles son las observaciones _normales_--- hasta que no tratas de extralerla modelizando. Una estrategia, pues, para eliminar las observaciones anómalas es la siguiente:

1. Ajustar un primer modelo (_autoencoder_ en particular).
2. Calcular el error de reconstrucción observación a observación.
3. Descartar ---¡con sumo cuidado!--- aquellas observaciones con un mayor error.
4. Repetir varias veces.

Obviamente, los puntos 3 y 4 son muy delicados: hay que tener cuidado de, como dicen, no tirar al niño con el agua sucia de la bañera. Dudo que exista un criterio universal para hacerlo bien que se atenga a principios estrictamente estadísticos.
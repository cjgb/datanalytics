---
author: Carlos J. Gil Bellosta
date: 2022-07-05
title: 'Sobre la hipótesis de la variedad'
description: 'Una discusión sobre la "manifold hypothesis" en ciencia de datos'
url: /2022/07/05/hipotesis-variedad/
categories:
- estadística
tags:
- ciencia de datos
- fundamentos
- hipótesis de la variedad
---

Dice (y traduzco) François Chollet en su libro sobre aprendizaje profundo:

> [...] la hipótesis de la variedad [manifold hypothesis] consiste en que todos los datos naturales están situados sobre una variedad de dimensión baja dentro del espacio de alta dimensionalidad en el que están cosificados. Es una hipótesis muy fuerte sobre la estructura de la información en el universo. Pero, por lo que sabemos hasta la fecha, no solo se cumple sino que es el motivo por el que el aprendizaje profundo funciona.

¿Qué quiere decir, en plata, la hipótesis de la variedad? Imaginemos todas las posibles fotos de gatitos de tamaño 1000x1000. Las fotos _viven_ en un espacio de alta dimensión: $R^{3e6}$, i.e., el producto cartesiano de tres millones de rectas reales (tres canales de color para un millón de píxeles).

La hipótesis de la variedad postula que existe un espacio $R^N$, donde N es mucho menor que $3e6$ (y posiblemente, algo así como 50) y una función $f$ de $R^N$ en $R^{3e6}$ tal que los $f(x)$ y solo los $f(x)$ son fotos de gatitos.

¿Cómo se construye/aproxima $f$? Por ejemplo, con _autoencoders_:

![](/wp-uploads/2022/07/autoencoders.webp#center)

La función _decoder_, $f_\theta$ de la imagen corresponde/correspondería a nuestra anterior $f$.

Y sí, funciona. No voy a pretender que lo hace con cualquier dimensionalidad del espacio intermedio, para cualquier estructura potencial de las funciones de codificación y descodificación, etc. Pero se ha podido hacer.

Para más info, [esto](https://towardsdatascience.com/understanding-variational-autoencoders-vaes-f70510919f73).

Y, para acabar, una pregunta para mis excolegas matemáticos: si nuestra información está contenida en una esfera de $R^3$ y el espacio intermedio tiene dimensión dos, ¿qué resultados nos garantizan la imposibilidad de una reconstrucción razonable? ¿Cuál sería la diferencia, por ejemplo, con el caso en el que la información estuviese contenida en una parábola de $R^2$ y el espacio intermedio tuviese dimensión uno?


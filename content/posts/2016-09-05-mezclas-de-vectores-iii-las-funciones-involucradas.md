---
author: Carlos J. Gil Bellosta
categories:
- varios
date: 2016-09-05 08:13:45+00:00
draft: false
lastmod: '2025-04-06T19:05:50.812755'
related:
- 2022-07-12-transferencia-estilo-rrnn.md
- 2016-09-02-mezclas-de-vectores-ii-un-caso-de-uso.md
- 2023-01-10-stable-diffusion-1d.md
- 2016-09-01-mezclas-de-vectores-i-casi-todas-las-matematicas-de-la-cosa.md
- 2022-06-16-modelos-difusion.md
tags:
- fotografía
- matemáticas
- mezclas
- redes neuronales
- ostagram
title: 'Mezclas de vectores (III): las funciones involucradas'
url: /2016/09/05/mezclas-de-vectores-iii-las-funciones-involucradas/
---

_[Tiempo después de la publicación de esta entrada hice otra, [esta](https://datanalytics.com/2022/07/12/transferencia-estilo-rrnn/), en la que se ahonda en la función de pérdida usada en la reconstrucción del estilo o textura de las imágenes y que en esta serie no se trató con el detalle que el asunto requiere.]_

En esta tercera entrada de la serie (aquí está la [primera](https://datanalytics.com/2016/09/01/mezclas-de-vectores-i-casi-todas-las-matematicas-de-la-cosa/) y la [segunda](https://datanalytics.com/2016/09/02/mezclas-de-vectores-ii-un-caso-de-uso/)) quiero ocuparme de las que llamé $latex f_1$ y $f_2$, las funciones involucradas. Que son las que obran la magia, por supuesto. Con casi cualquier otra opción se habría obtenido una patochada, pero estas son funciones especiales.

Las funciones en cuestión están extraídas de esta,

![inception03](/wp-uploads/2016/09/inception03.png#center)

que es una representación esquemática (extraída de [aquí](https://research.googleblog.com/2016/03/train-your-own-image-classifier-with.html)) de una red neuronal para el reconocimiento de imágenes. El nodo superior lee píxels y el el inferior dice si en la foto hay unos loros o no. Los colores indican distintos tipos de operaciones (convoluciones, etc.) internas de la red.

Una red neuronal no deja de ser una función construida como composición de otras: cada nodo del gráfico anterior, de hecho, no deja de ser una función relativamente simple.

Si corres esa red neuronal sobre una foto de las dimensiones adecuadas, el resultado es un vector de probabilidades. Pero, ¿qué pasa con los pasos intermedios? Precisamente $latex f_1$ y $latex f_2$ son dos de esos pasos intermedios elegidos (no por mí, lo aviso) adecuadamente de modo que la una detecte estructura global en el gráfico y la otra, textura. De este modo, el vector mezcla, la imagen resultante, adquiere las formas de una de las fotos y las texturas de la otra.

Una colección de enlaces relevantes y puede que interesantes es:

* [_Inceptionism: Going Deeper into Neural Networks_](https://research.googleblog.com/2015/06/inceptionism-going-deeper-into-neural.html)
* El [código](https://github.com/google/deepdream) asociado a la anterior entrada
* [Ostagram: cosa fina](http://www.ostagram.ru/)
* [_A Neural Algorithm of Artistic Style_](https://arxiv.org/abs/1508.06576), una versión en pdf y subida a arXiv de lo que he contado estos días
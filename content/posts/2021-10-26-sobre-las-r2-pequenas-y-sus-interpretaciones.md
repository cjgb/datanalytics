---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2021-10-26 09:13:00+00:00
draft: false
lastmod: '2025-04-06T18:45:09.645581'
related:
- 2022-03-10-diagramas-causales-hipersimples-1-errores.md
- 2021-02-16-hay-mil-motivos-para-criticar-una-regresion-trucha-pero-una-rc2b2-baja-no-es-uno-de-ellos.md
- 2022-03-08-estadistica-ciencias-blandas.md
- 2022-03-03-error-sesgo-modelos-lineales.md
- 2024-06-20-mas-r-cuadrado.md
tags:
- r cuadrado
- regresión lineal
title: Sobre las R² pequeñas y sus interpretaciones
url: /2021/10/26/sobre-las-r2-pequenas-y-sus-interpretaciones/
---

Hace unos meses escribí una [entrada en defensa (parcial) de una regresión lineal con una R² pequeña](https://datanalytics.com/2021/02/16/hay-mil-motivos-para-criticar-una-regresion-trucha-pero-una-r2-baja-no-es-uno-de-ellos/). He vuelto a pensar sobre ella y retomo la discusión para esclarecer ---sobre todo, para profanos--- qué mide la R² y cómo interpretarla según el contexto.

Comienzo por un experimento físico mental. En un laboratorio se realiza un experimento para medir la relación entre dos magnitudes físicas, un efecto $y$ y una causa $x$. La teoría especifica una relación del tipo $y = a + b x$ y experimentalmente (y en condiciones de laboratorio ideales) se obtienen una serie de datos $(x_i, y_i)$. La relación entre ambos es de la consabida forma

$$ y_i = \hat{a} + \hat{b} x_i + \epsilon_i$$

donde $\epsilon_i$ son unos errores pequeños cometidos durante el proceso experimental. En concreto, se puede especular que, en realidad,

$$ y_i = \hat{a} + \hat{b} x_i + \sum_{ij} a_j z_{ij}$$

donde $z_{ij}$ son variables (o causas) que afectan al proceso de recogida de datos (variaciones de temperatura, rozamiento, precisión del instrumental, etc.) que se consideran irrelevantes y, en este caso concreto, pequeñas.

La R² en este experimento mide la relación entre el efecto de $x$ y las $z_j$:si el de la primera es muy grande con respecto al de las segundas ---que es lo habitual en las _ciencias duras_--- la R² será próxima a 1; si pasa lo contrario y la señal es pequeña con respecto al ruido, será próxima a 0.

Pero que el efecto de $x$ sea pequeño con respecto al de las $z_j$ (y, por lo tanto, la R² sea pequeña) no significa que no exista efecto o que sea irrelevante. Eso es lo que, en el fondo, le pasó al bueno de Galileo cuando comenzó a contar aquellas cosas que decía haber observado a través de su telescopio. Cuando se enfrentó con los primeros problemas, Galileo invitó a estudiosos de la época a comprobar la veracidad de sus afirmaciones y los invitó a utilizar su telescopio. Y lo que sucedió ---quedan vestigios documentales de ello--- es que no vieron nada: el telescopio de Galileo era sumamente rudimentario y esas señales de las que hablaba estaban diluidas en un proceloso mar de aberraciones ópticas. Podría decirse que su R² era tan baja que no le hicieron caso. Pero señal (y verdad), ¡vaya que si la había!

(Nota: tengo pendiente reescribir y extender la historia anterior desde un punto de vista bayesiano bastante adivinable. Y confesar, además, que la historia alrededor del caso Galileo es mucho más comprensible si se lo considera no ese genio aislado, incomprendido y castigado, que es como ha quedado para la posteridad, sino como un _magufo_, uno de los tantos que adornan toda época y lugar, que resulta que tuvo razón; al menos, en lo que concierne a sus observaciones astronómicas.)

En resumen, una R² alta es condición suficiente, pero no necesaria, para poder dar por buenas relaciones como las anteriores (donde, vale la pena insistir, existe una teoría sustantiva subyacente que, entre otras cosas, establece de antemano la causalidad).

¿Y en las ciencias sociales (como en esa aplicación que motivó la entrada original)? Recuérdese que se argumentaba sobre este modelo,

![Imagen](https://pbs.twimg.com/media/EtJXBmOW4AI8r5d?format=jpg&name=small)

que fue criticado por su pequeña R². En este caso, la relación lineal entre las variables $x$, tamaño del estado, e $y$, progresividad fiscal, tiene unos errores $\epsilon_i$ manifiestamente altos; es decir, que el efecto de variables no observadas $z_j$ ---seguro que a los economistas que lean estas líneas podrán dar nombre a muchas--- es elevado. Pero eso no significa en ningún caso que $x$ no tenga ningún efecto ---que sea causal, es otra cuestión enteramente distinta---.

En resumen, de todos los tests a los que podríamos someter al modelo lineal anterior (y sus potenciales implicaciones, especialmente las de índole causal), es precisamente el de la R² el que podría pasar más desahogadamente. Se podría cuestionar de muchas otras maneras pero no en términos del estadístico en cuestión.
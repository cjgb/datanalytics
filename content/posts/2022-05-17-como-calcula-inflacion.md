---
author: Carlos J. Gil Bellosta
date: 2022-05-17
title: Cómo se calcula (vs cómo podría calcularse) la inflación
description: 'Una propuesta para introducir variabilidad en la estimación de la inflación'
url: /2022/05/17/como-calcula-ine-inflacion/
categories:
- estadística
- números
tags:
- inflación
- ine
- variabilidad
- efectos heterogéneos
---

En resumidas cuentas, el INE calcula la inflación asi:

1. A partir de la encuesta de presupuestos familiares, crea una _cesta típica_ de productos.
2. A partir de "datos de campo" evalúa la variación de los precios que forman parte de esa cesta de productos.

Comentarios:

* Esa cesta de productos cuya evolución se sigue sería la que adquiriría una _familia idealizada_ que no existe en absoluto. Por ejemplo, esa cesta puede sugerir que la familia _idealizada_ consume un 0.1% de su presupuesto anual en comida de perros. Pero nadie consume un 0.1% de su presupuesto anual en eso: quienes tengan perro gastarán mucho más; los que, no, nada.

* El índice (y su aumento) así creados pueden no ser muy relevantes para un hogar concreto. Por eso existen herramientas como [esta](http://news.bbc.co.uk/2/hi/business/7669072.stm) para calcular _tu propia inflacion_.

* Abunda en uno de esos grandes problemas que al que vienen apuntando estas páginas desde hace tiempo: el de la reificación. Estamos convirtiendo en "real" el resultado de un "algoritmo" sin cuestionarlo.

* No está claro si los hogares implementan medidas para luchar contra la inflación como, p.e., variar la composición de su cesta de consumo particular para mitigar el efecto de las variaciones de precios de los productos que la integran. (Por eso, algunos dicen que la tasa de inflación pública es mayor que la la "privada", en tanto que no tienen en cuenta el reajuste de la composición de las cestas efectivas de productos).

Un procedimiento alternativo para el cálculo del IPC sería:

* Tomar las cestas "efectivas" de cada uno de los hogares que forman parte del panel de la encuesta de presupuestos familiares.
* Calcular el IPC particular para cada una de ellas.
* Publicar el correspondiente histograma para la ilustración de todos.
* Calcular el IPC "publicado" a partir de algún tipo de media adecuadamente ponderada, [_winsorizada_](https://en.wikipedia.org/wiki/Winsorized_mean), [ulurizada](http://www.datanalytics.com/2021/11/24/medias-ponderadas-a-lo-uluru/), etc. de esos IPCs particulares.

Permítaseme terminar recopilando una serie de enlaces a estas y otras páginas sobre asuntos relativos a la cuestión de hoy. Primero, sobre la inflación, escribí ya en 2010 en líneas muy parecidas a las de esta entrada
[aquí](http://www.datanalytics.com/2010/10/12/el-indice-de-inflacion-sostenible-que-no-existe/). Luego, sobre la variabilidad de los efectos en subgrupos ya he escrito en varias ocasiones, como
[aquí](http://www.datanalytics.com/2020/07/14/sobre-el-efecto-medio/),
[aquí](http://www.datanalytics.com/2020/01/24/estan-los-hogares-preparados-para-una-nueva-recesion/),
[aquí](http://www.datanalytics.com/2013/04/15/tu-tasa-de-paro-en-medialab-prado/)
o [aquí](http://www.datanalytics.com/2020/02/06/model4you/)
y tengo además una colección de artículos ajenos sobre el mismo tema de entre los que destaco
[este](https://statmodeling.stat.columbia.edu/2020/07/13/if-variation-in-effects-is-so-damn-important-and-so-damn-obvious-why-do-we-hear-so-little-about-it/)
o [este](https://statmodeling.stat.columbia.edu/2018/11/28/multilevel-models-multiple-comparisons-varying-treatment-effects/).

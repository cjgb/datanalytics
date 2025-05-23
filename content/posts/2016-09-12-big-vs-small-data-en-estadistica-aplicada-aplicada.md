---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2016-09-12 08:13:19+00:00
draft: false
lastmod: '2025-04-06T18:57:12.141362'
related:
- 2018-04-27-redundancias-o-por-que-empenarnos-en-tener-tantos-datos-cuando-con-una-fraccion-sobra.md
- 2023-09-28-potencia-tests.md
- 2019-10-04-varian-sobre-el-muestreo.md
- 2012-01-12-localidad-globalidad-y-maldicion-de-la-dimensionalidad.md
- 2017-04-12-experimentos-con-extremely-small-data-la-media-muestral-de-pocas-betas.md
tags:
- big data
- diseño experimental
- estadística
- muestras pequeñas
title: Big vs small data en estadística aplicada aplicada
url: /2016/09/12/big-vs-small-data-en-estadistica-aplicada-aplicada/
---

Tengo un proyecto entre manos. Trata de medir un efecto pequeño bajo una condición experimental (una palanca que se puede subir y bajar) con un enorme ruido de fondo (debido a factores para los que no existe la susodicha palanca). Existen dos aproximaciones que, en su versión resumida, son:

* Datos pequeños: recoger un conjunto pequeño de mediciones en un contexto en el que los factores no controlables sean constantes (aunque en la práctica no lo vayan a ser).
* Datos grandes: recoger muchas mediciones alterando el factor controlable a lo largo de un periodo de tiempo extenso.

Se supone —y lo advierto, sobre todo para evitar que algún purista quiera señalar que lo es— en ambos casos, que existe cierta aleatorización del factor experimental para que sea lo más ortogonal posible al ruido no controlado.

Existen dos variables fundamentales que pueden inclinar la balanza en uno u otro sentido:

* El ruido que pueda existir en las medidas.
* El coste de recoger los datos, muy alto en el caso de los datos pequeños y, previsiblemente, pequeño en el otro.

Existen varios aspectos que hacen de este un problema interesante desde el punto de vista de la estadística aplicada aplicada (no, lo anterior no es una errata):

* El énfasis que se hace en la recogida de datos, en la medición: el proceso de la estadística aplicada aplicada comienza, precisamente, en el diseño de la recogida de datos.
* Existen condicionantes no puramente estadísticos (económicos, de factibilidad física, etc.)a los que atenerse y que actúan como restricciones.
* Que permite experimentar vitalmente esas [tensiones sobre los que han escrito tantos](http://www.longtail.com/about.html).

Ya veremos qué pasa al final.
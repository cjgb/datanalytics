---
author: Carlos J. Gil Bellosta
date: 2013-05-10 07:08:38+00:00
draft: false
title: 'Más sobre la ley de Benford (III): la "mágica" propiedad de los logaritmos
  decimales'

url: /2013/05/10/mas-sobre-la-ley-de-benford-iii-la-magica-propiedad-de-los-logaritmos-decimales/
categories:
- estadística
tags:
- estadística
- ley de benford
---

Esta entrada tiene como prerrequisito las dos que la preceden: [esta](http://www.datanalytics.com/blog/2013/04/16/mas-sobre-la-ley-de-benford-i-una-condicion-suficiente/) y [esta](http://www.datanalytics.com/blog/2013/04/16/mas-sobre-la-ley-de-benford-i-una-condicion-suficiente/).

Si $latex x_1, \dots, x_n$ es una muestra de una distribución de probabilidad $latex X$ _regular_ y _extendida_, entonces $latex \log_{10}x_1, \dots, \log_{10}x_n$ es una muestra de $latex \log_{10}X$, que es otra distribución de probabilidad

* _regular_ (porque el logaritmo es una función creciente) y
* _extendida_ (aunque hay que convenir que menos: el logaritmo achica los números grandes).

Por lo tanto, cabe esperar que también la parte decimal de $latex \log_{10}x_1, \dots, \log_{10}x_n$ tenga una distribución uniforme sobre el intervalo [0,1). Luego cumple la Ley de Benford (véase la [condición suficiente](http://www.datanalytics.com/blog/2013/04/16/mas-sobre-la-ley-de-benford-i-una-condicion-suficiente/)). Esto se debe a esa (¿contraintuitiva?) propiedad del logaritmo decimal: convertir el dígito más significativo de un número, el primero, en la parte menos significativa de su logaritmo, la que sigue a la coma.

Tres notas de rigor:

* En lugar de $latex \log_{10}$ podrían usarse otras funciones (el cuadrado, la raíz cuadrada, etc.) que también transforman distribuciones regulares y extendidas en otras que lo son igualmente. Pero se perdería la _magia_ de la relación entre la parte fraccionaria con el primer dígito.
* La parte fraccionaria de una distribución regular y extendida es _aproximadamente_ uniforme. La uniformidad solo se garantiza en el límite (conforme la distribución se hace más y más extendida sobre la recta real). Es posible (cuestión que exploré [aquí](http://www.datanalytics.com/blog/2011/09/15/la-ley-de-benford/)) que los primeros dígitos de muestras de determinadas distribuciones no sigan la Ley de Benford.
* Queda ver cuáles son las razones (¿sicológicas?) que llevarían a los humanos a inventar secuencias de números que no obedecen una ley extendida y regular. En particular, que violan la regularidad.

En la última entrada de la serie abundaré esa tercera nota y hablaré de posibles extensiones que no son sino ocurrencias mías.

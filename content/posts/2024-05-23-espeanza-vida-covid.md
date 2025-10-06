---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2024-05-23
lastmod: '2025-04-06T19:11:40.850040'
related:
- 2020-10-23-comentarios-varios-sobre-un-articulo-de-el-pais-sobre-momo.md
- 2020-10-19-el-nowcast-de-momo-por-que-sobreestima-en-el-ano-del-coronavirus-y-que-pasara-en-los-siguientes-si-no-se-remedia.md
- 2020-04-08-momo-una-documentacion-oficiosa.md
- 2011-10-10-las-proyecciones-de-la-poblacion-de-espana-a-corto-plazo-del-ine-no-valen-para-un-carajo.md
- 2014-10-30-y-si-no-se-mantuvieran.md
tags:
- demografía
- covid
- esperanza de vida
title: ¿Redujo el covid la esperanza de vida en 2020? No y sí, según se mire.
url: /2024/05/23/covid-esperanza-vida/
---

### I.

La esperanza de vida en 2020 es el número de años que en promedio vivirá un crío nacido ese año.

El problema de esa definición estriba en que para calcularla rectamente habría que esperar hasta, no sé, 2140, para:

* Contar el número N de nacidos en 2020.
* Calcular la suma $\sum_i x_i$ de las edades a las que fallecieron (suponiendo que en 2140 ya hayan muerto todos).
* Dividir la segunda de las cifras por la primera.

Y no, no es factible esperar 120 años en publicar una estadística. Ni siquiera para el INE.

## II.

Así que la esperanza de vida _es_ ---en esta segunda definición uso cursivas--- otra cosa: el resultado de una operación matemática distinta que tiene la particularidad de que puede rematarse el 1 de enero del año siguiente al de interés, 119 años antes que con el algoritmo del apartado anterior.

Al final de 2020 se puede calcular cuántos niños de 0-1 años han fallecido de esa _cohorte_. Pero no cuántos fallecerán entre las edades de 1 y 2 años. Así que en ese tramo se usa la mortalidad ya conocida en 2020 de los niños que nacieron en 2019. Y así, para estimar la mortalidad de los niños nacidos en 2020 cuando tengan 60 años, se usa la mortalidad en 2020 de los nacidos en 1960, etc.

## III.

Pero claro, en 2020 murieron más de los nacidos en 1940 de lo que es habitual. Eso significa que el algoritmo descrito en II se ve afectado por una perturbación que no está claro que tenga que afectar a los nacidos en 2020 en el año 2100 (cuando tengan la misma edad que los nacidos en 1940 en 2020).

Es decir, se trata de un artefacto del algoritmo.

Por supuesto, el _artefacto_ es informativo: cae la _esperanza de vida_ y se puede comparar esta caída con otras que se hayan observado en otros tiempos y lugares para comparar cuantitativamente este tipo de fenómenos. Pero, por lo demás, afecta solo a lo que la esperanza de vida _es_ y no a lo que es.

## IV.

En puridad, no habría que usar la mortalidad de quienes tienen X años en 2020 para estimar la mortalidad de esa cohorte en el año 2020 + X. Lo que debería usarse es la proyección de la mortalidad de los que tienen X años en 2020, 2019, 2018, etc. hacia el futuro, hacia 2020 + X, y usar esa. De procederse así, 2020 habría podido considerarse un _outlier_, etc.

Pero, ¡qué sabré yo de esas cosas!
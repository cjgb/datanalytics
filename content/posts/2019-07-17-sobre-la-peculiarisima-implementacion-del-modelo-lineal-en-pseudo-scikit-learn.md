---
author: Carlos J. Gil Bellosta
date: 2019-07-17 09:13:55+00:00
draft: false
title: Sobre la peculiarísima implementación del modelo lineal en (pseudo-)scikit-learn

url: /2019/07/17/sobre-la-peculiarisima-implementacion-del-modelo-lineal-en-pseudo-scikit-learn/
categories:
- estadística
- python
tags:
- modelo lineal
- python
- scikit-learn
- variables categóricas
---

Si ejecutas

{{< highlight python >}}
import numpy as np
from sklearn.linear_model import LinearRegression

n = 1000
X = np.random.rand(n, 2)

Y = np.dot(X, np.array([1, 2])) + 1 + np.random.randn(n) / 2
reg = LinearRegression().fit(X, Y)

reg.intercept_
reg.coef_
{{< / highlight >}}

se obtiene más o menos lo esperado. Pero si añades una columna linealmente dependiente,

{{< highlight python >}}
X = np.column_stack((X, 1 * X[:,1]))
{{< / highlight >}}

ocurren cosas de la más calamitosa especie:

{{< highlight python >}}
Y = np.dot(X, np.array([1, 2, 1])) + 1 + np.random.randn(n) / 2
reg = LinearRegression().fit(X, Y)
reg.coef_
# array([ 9.89633991e-01, -1.63740303e+14,  1.63740303e+14])
{{< / highlight >}}

Comentarios:

  * Diríase que la implementación del modelo lineal en scikit-learn no es la que se estudia por doquier (la prima, la inversa, etc.); sospecho que convierte el error cuadrático en una función que depende de los coeficientes y se la pasan a un optimizador (más o menos) genérico.
  * Supongo que la implementación actual pasa todos las pruebas unitarias.
  * Y sospecho, además, que las pruebas unitarias no las ha planteado un estadístico.
  * Así que tal vez los de scikit-learn no saben que tienen problemas de colinealidad; y si alguien se lo ha comentado, igual no han comprendido el _issue_.
  * Para la predicción, el problema arriba apuntado no es tal. Aun con coeficientes desaforados y siempre que no haya problemas de precisión numérica, tanto da hacer las cosas como todo el mundo o implementando ocurrencias como la anterior.
  * Pero para todo lo demás (p.e., impacto de variables, etc.), la implementación es de traca y no vale para maldita de Dios la cosa.
  * Aunque a estas alturas de siglo, ¿quién en su sano juicio usa el modelo lineal básico?
  * Además, en la práctica, no hay problemas de colinealidad (ni aproximada o, mucho menos, exacta). Hummm...
  * ¿O sí? Mi colega Cañadas ha escrito una entrada en su blog sobre la [codificación de variables categóricas](https://muestrear-no-es-pecado.netlify.com/2019/07/15/codificaci%C3%B3n-parcial/) donde denuncia cómo en Python las funciones más habituales crean por defecto columnas linealmente dependientes por defecto (por no omitir el primer nivel). O sea, en Python, si no andas con cuidado, acabas con la suela llena de _kk_ de perro.
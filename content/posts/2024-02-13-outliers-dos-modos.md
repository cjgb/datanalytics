---
author: Carlos J. Gil Bellosta
date: 2024-02-13
title: '"Outliers": las dos aproximaciones'
url: /2024/02/13/outliers-dos-aproximaciones/
categories:
- estadística
tags:
- estadística
- outliers
---

Leyendo [_Taking Outlier Treatment to the Next Level_](https://joachim-gassen.github.io/2021/07/outliers/) me entretuve en pensar cómo la literatura sobre el tratamiento de los _outliers_ tiende a ignorar y confundir los dos modos ---o más bien, circunstancias--- de enfrentarse a ellos. Por ejemplo, en ese enlace se discute alrededor de los datos y el modelo representado en,

![](/wp-uploads/2024/outliers.png#center)

que, como veremos, pertenece a lo que llamo primer modo usando técnicas propias del segundo.

Obviamente, el segundo tiene que poder ilustrarse con datos concretos. Es entendible. Pero es contraproducente para el lector pensar que las técnicas propias del segundo modo han de aplicarse ---o poder aplicarse--- donde procede las del primero.

¿Cuáles son esos _modos_? El primero aplica en los casos en que uno estudia un conjunto de datos y un modelo concreto. Esos datos pueden contener observaciones sospechosas y se hace necesario prestarles la debida atención. El segundo ocurre cuando uno construye código que ha de utilizarse sobre muchos casos y ejemplos distintos y se sospecha que podrían estar sembrados de _outliers_; el caso más extremo podría ser aquel en el que uno desarrolla paquetes (p.e., de R) que acabarán usando terceros desconocidos con cualquier tipo de datos de vaya uno a adivinar qué naturaleza.

En el primer modo uno debería actuar de manera cuantitativa y aplicar todo el conocimiento sobre la materia que le esa posible concitar. Uno tiene que plantearse por qué aparecen esos aparentes _outliers_, si realmente lo son, si pertenecen a la distribución que se quiere modelar o a otra, contactar con el proveedor de los datos, etc.

Desafortunadamente, eso no siempre es posible. A veces toca construir cientos o miles de modelos simultáneamente sobre conjuntos de datos distintos. Es imposible revisarlos todos con detenimiento; en particular, porque algunos de ellos pueden no existir todavía (y solo llegarán meses o años después). Entonces no queda otra que aplicar métodos cuantitativos de carácter más o menos paliativo, como los métodos estadísticos robustos, etc. y confiar en que hagan más bien que mal al ser aplicados en masa.

El autor de lo que lees ha creado código que implementa modelos que ni sabe dónde están corriendo. Al desarrollarlo, se tuvieron en mente una serie de circunstancias razonables de uso y el ajuste de los modelos se hace usando técnicas robustas en las que el analista último tiene cierta ---pero tampoco demasiada--- libertad de especificación. Pero no es tan raro que, de vez en cuando, lleguen a uno problemas de ajuste: un cliente trató de hacer X con los datos Y y obtuvo el resultado inesperado Z, cuando lo suyo habría sido Z\'. Entonces, cuando uno revisa el contexto del problema (X,Y) concreto, entiende cómo efectivamente cabe esperar Z\', por qué se obtiene Z ---el método _robusto_ en cuestión produce artefactos fácilmente adivinables en _ese_ caso específico--- y lo suyo habría sido utilizar algún otro procedimiento distinto del aplicado _urbi et orbi_.
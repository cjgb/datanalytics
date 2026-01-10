---
author: Carlos J. Gil Bellosta
categories:
- ciencia de datos
- estadística
date: 2016-10-20 08:13:17+00:00
draft: false
lastmod: '2025-04-06T19:13:21.522504'
related:
- 2011-09-28-datos-grandes-colas-largas.md
- 2017-11-21-primeros-principios-para-la-estadistica-descriptiva.md
- 2018-06-07-posterioris-informativas-o-mas-bien-cuando-te-informan-de-cual-es-la-posteriori.md
- 2024-10-17-interpretacion-modelos.md
- 2023-10-19-errores-chatgpt.md
tags:
- estadística
- información
- ciencia de datos
title: El principio de información
url: /2016/10/20/el-principio-de-informacion/
---

Tramontando el recetariado, llegamos a los principios. Y el más útil de todos ellos es el de la información (o cantidad de información).

(Sí, de un tiempo a esta parte busco la palabra _información_ por doquier y presto mucha atención a los párrafos que la encierran; anoche, por ejemplo, encontré un capitulito titulado _The Value of Perfect Information_ que vale más que todo Schubert; claro, que Schubert todavía cumple la función de proporcionar seudoplacer intelectual a mentes blandas y refractarias al concepto del valor de la información perfecta).

![Claude Shannon](/img/2016/10/claudeshannon.jpg#center)

En ciencia de datos no interesan los datos en sí sino los fenómenos y la información que podemos extraer de ellos. Los datos son solo una de sus manifestaciones. Pero sabemos que pueden ser malos. O mejores. Siempre perfectibles. El punto de partida de la ciencia de datos (salvo en ese portal donde se propone una versión puerilizada de la ciencia de datos; Kaggle, dizque se llama) no son los datos sino el fenómeno que se quiere estudiar.

Reitero: una parte sustancial y muy relevante de la ciencia de datos es recopilar la mayor cantidad posible de información sobre un fenómeno en forma de... datos.

(La otra gran vertiente de la ciencia de datos consiste en crear funciones (modelos) que absorban esa información; que en lugar de representarse en forma de filas y columnas, se manifieste en forma de numeritos que operen como, por ejemplo, coeficientes).

¿Qué principio rige el proceso de creación de datos? El de la información, necesariamente. Cuántos, cuáles y cómo son preguntas que uno se formula al recoger datos que ha de responder el principio de la cantidad de información (tal vez acompañado con el de los rendimientos decrecientes).

(Pero no os preocupéis: Kaggle os lo da hecho en forma de csv. Os lo(s) bajáis y ya).

Supongamos que tenemos ya datos (no necesariamente tabulares) `X`. `X` puede ser una tabla (como es bastante típico) pero también otra cosa. Entonces uno quiere realizar operaciones (transformaciones) sobre ellos. A partir de `X`, podemos construir `T(X)`, lo datos originales transformados por `T`.

_¿Qué sucede con la cantidad de información?_

Pues nada si la transformación es reversible. Por ejemplo, si `T` es un cambio de unidades o implica tomar logaritmos en una columna de números positivos (y omitidos los problemas de precisión numérica).

_¿Y si no es reversible?_

Pues se pierde información. Necesariamente. Se rescata algo; el resto, se pierde.

_Pero, ¿por qué podríamos querer perder información?_

Por ejemplo, porque una de nuestras columnas se llama `cod_postal`, que es categórica (insisto para alguien que ignora que la apelo: **¡es categórica!**) y tiene muchos niveles. Por cuestiones operativas, puede plantearse la conveniencia de transformarla de alguna manera. Hay transformaciones que preservan la cantidad de información (la de los _dummies_); otras no.

_¿Voy a seguir escribiendo sobre esto?_

Sí, pero no hoy. Tengo en mente un ejemplo concreto que discutir con cierto detalle (detalle en un sentido impresionista del término) pero estoy cansado de teclear.
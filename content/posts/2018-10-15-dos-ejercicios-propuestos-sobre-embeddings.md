---
author: Carlos J. Gil Bellosta
date: 2018-10-15 08:13:11+00:00
draft: false
title: Dos ejercicios (propuestos) sobre "embeddings"

url: /2018/10/15/dos-ejercicios-propuestos-sobre-embeddings/
categories:
- ciencia de datos
tags:
- embeddings
- matrices
- nlp
---

Se me han ocurrido en los dos últimos días un par de ejercicios sobre _embeddings_ que no voy a hacer. Pero tal vez alguien con una agenda más despejada que la mía se anime. Uno es más bien tonto; el otro es más serio.

El primero consiste en tomar las provincias, los códigos postales o las secciones censales y crear _textos_ que sean, para cada una de ellas, las colindantes. Luego, construir un _embedding_ de dimensión 2. Objetivo: probar o refutar que el embedding es una transformación de las coordenadas geográficas de las unidades geográficas. Bonus: ver qué pasa con _embeddings_ de dimensión superior.

El segundo es comprobar experimentalmente si lo que dice el artículo que comenté [aquí](https://www.datanalytics.com/2018/10/03/de-que-matriz-son-los-embeddings-una-factorizacion/) es cierto o no. Es decir, tomar un _embedding_ cualquiera, construir la matriz $latex m_{ij} = w_ic_i$ y ver si tiene la forma que aseguran los autores del artículo.
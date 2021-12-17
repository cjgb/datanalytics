---
author: Carlos J. Gil Bellosta
date: 2020-10-09 09:13:00+00:00
draft: false
title: Explicación de modelos como procedimiento para aportar valor a un "scoring"

url: /2020/10/09/explicacion-de-modelos-como-procedimiento-para-aportar-valor-a-un-scoring/
categories:
- ciencia de datos
- estadística
tags:
- ciencia de datos
- explicación
- factorización
- lime
---




El principal asunto preambular en todo lo que tiene que ver con la explicación de modelos es _ético_ (ético en la versión ñoña de la palabra, hay que dejar claro). Pero tiene sentido utilizar  técnicas de explicación de modelos para aportarles valor añadido. En particular, un modelo puede proporcionar un determinado _scoring_, pero se le puede pedir más: se le puede pedir una descripción de los motivos que justifican ese _scoring_, particularísimanete, en los casos más interesantes: los valores más altos / bajos.







Así en uno de [nuestros](https://circiter.es) últimos proyectos: acompañamos a cada uno de nuestros _scorings_ de una serie de causas y sus correspondientes pesos en la decisión final.







Igual un día cuento cómo se construyen y cómo involucran factorizaciones no negativas de matrices, una de mis técnicas favoritas y por qué no utilizan algunas de las técnicas más conocidas (tipo LIME) que podría pensarse que le solucionan a uno la tarea _gratis_.




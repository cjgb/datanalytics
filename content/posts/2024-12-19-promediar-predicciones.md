---
author: Carlos J. Gil Bellosta
date: 2024-12-19
title: 'Una justificación desapasionada del promedio como mecanismo para agregar predicciones'
url: /2024/12/19/promedio-predicciones
categories:
- estadística
tags:
- predicciones
- teoría de la decisión
- expertos
---

Existe incertidumbre sobre el resultado, 0 o 1, de un evento de interés $X$. Se convoca a $n$ expertos que hacen predicciones $p_1, \dots, p_n$ sobre dicho evento, i.e., el experto $i$ considera que $P(X = 1) = p_i$. Entonces, ¿cómo se pueden combinar las predicciones $p_i$ para obtener una predicción conjunta $p$?

Uno pensaría que el promedio, $p = \frac{1}{n} \sum_i p_i$, es una opción razonable. En la literatura se discuten también generalizaciones del tipo $p = \sum_i w_i p_i$ para pesos $w_i$ que suman 1. Sin embargo, en sitios como
[este](https://forum.effectivealtruism.org/posts/sMjcjnnpoAQCcedL2/when-pooling-forecasts-use-the-geometric-mean-of-odds)
se sugiere usar la media geométrica de los _odds_ (o, equivalentemente, la aritmética de los _log ods_), es decir, calcular los _log odds_,

$$l_i = \log \frac{p_i}{1-p_i},$$

calcular su media $l = \frac{1}{n}\sum_i l_i$ e invertir la transformación para obtener $p$.

En el resto de esta entrada voy a proporcionar una justificación muy desapasionada del uso de la media, ponderada o no. Podría referirme a la literatura, que no solo existe sino que, además, es extensa y aburrida, pero prefiero razonar desde primeros principios.

Cuando un experto dice $p_i$, muy probablemente esté pensando en un rango alrededor de $p_i$ y, en el fondo, en algo que parece una distribución beta concentrada alrededor de $p_i$ y de una cierta anchura. Por ejemplo, si el experto dice que el evento tiene una probabilidad entre .7 y .8, uno puede acudir a
[mi aplicación de cálculo de parámetros](http://priors.datanalytics.com/)
para obtener que los parámetros alfa y beta implícitos son 151 y 50.

![](/wp-uploads/2024/expertos_beta.png#center)

Si uno interpreta la opinión de los expertos como _datos_, la de ese vendría a ser equivalente a observar 201 realizaciones de las cuales 151 resultaron en 1 y 50 en 0. Tendría sentido entonces _agregar_ las distribuciones betas implícitas para obtener una distribución beta combinada de parámetros $\alpha = \sum_i \alpha_i$ y $\beta = \sum_i \beta_i$. La $p$ resultante sería la media de esta nueva distribución beta, es decir,

$$p = \frac{\sum_i \alpha_i}{\sum_i (\alpha_i + \beta_i)}.$$

Es evidente que $p$ sería la media aritmética de los $p_i$ si $\alpha_i + \beta_i = \alpha_j + \beta_j$ para todo par de expertos $(i,j)$ y un promedio ponderado (ponderado por la precisión) en otro caso.

Este argumento tiene algunos puntos débiles, en todo caso. Implícitamente se ha usado que la información que aportan los distintos expertos es independiente. Pero es posible que gran parte de la información que aporten sea redundante, por lo que, por escribirlo de alguna manera rápida, el $\alpha$ combinado sería sustancialmente menor que $\sum_i \alpha_i$; obviamente, lo mismo ocurre con $\beta$. Al promediar se está dando excesivo peso ---al ser agregada muchas veces--- a la información conocida de todos.

No está claro cómo el usar la media geométrica de los _odds_ ---la alternativa al uso de las medias planteada más arriba--- resuelve este problema. Implícitamente, como en la formulación descrita en esta entrada, asume una cierta distribución de la incertidumbre, pero la modela en el espacio de los _odds_ (el semieje positivo), y la interpretación, por culpa de la transformación no lineal entre el espacio de las probabilidades y el de los _odds_ se me escapa.

A veces, para modelar un sistema uno usa una distribución de Poisson. Y uno lo hace a sabiendas de los motivos por los que la elección es razonable y los motivos por los que no (¿son los eventos _verdaderamente_ independientes?). A veces, para agregar predicciones, uno usa la media aritmética. Espero que, gracias a esto que escribo hoy, sea más consciente de los motivos por los que su elección es y no es razonable.
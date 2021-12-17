---
author: Carlos J. Gil Bellosta
date: 2017-02-09 08:13:13+00:00
draft: false
title: La inesperada correlación de los ratios

url: /2017/02/09/la-inesperada-correlacion-de-los-ratios/
categories:
- estadística
tags:
- estadística
- independencia
- probabilidad
---

Tomemos dos variables aleatorias independientes y positivas,




    set.seed(123)
    n <- 100
    x <- runif(n) + 0.5
    y <- runif(n) + 0.5




No tengo ni que decir que su correlación es prácticamente cero,



    cor(x,y)
    #-0.0872707




y que en su diagrama de dispersión tampoco vamos a poder leer otra cosa:

![](/wp-uploads/2017/02/disp_indep_xy.png)


Ahora generamos otra variable independiente de las anteriores,




    z <- runif(n) + 0.5




y calculamos el cociente de las primeras con respecto a esta:




    xz <- x / z
    yz <- y / z




¿Independientes? Hummmm...




    cor(xz, yz)
    # 0.5277787




![](/wp-uploads/2017/02/disp_ratio_xy.png)


Parece que no. Porque valores grandes del cociente aplastan a la vez a los valores de `x` e `y` y a la inversa. La correlación entre las nuevas variables crece con la del denominador, de hecho.

Así que ¡cuidado al dividir!

**Nota:** Lo aquí publicado es casi, casi, casi una traducción de [esto](https://nsaunders.wordpress.com/2017/02/03/the-real-meaning-of-spurious-correlations/).










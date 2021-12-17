---
author: Carlos J. Gil Bellosta
date: 2017-01-10 08:13:49+00:00
draft: false
title: Repensando la codificación por impacto

url: /2017/01/10/repensando-la-codificacion-por-impacto/
categories:
- r
tags:
- árboles de decisión
- ciencia de datos
- ctree
- party
- rpart
---

Hay una entrada mía, [esta](https://www.datanalytics.com/2014/12/29/modelos-mixtos-por-doquier/), que me ronda la cabeza y con la que no sé si estoy completamente de acuerdo. Trata de justificar la [_codificación por impacto_](http://www.win-vector.com/blog/2012/07/modeling-trick-impact-coding-of-categorical-variables-with-many-levels/) de variables categóricas en modelos lineales (generalizados o no) y cuanto más la releo, menos me la creo. O, más bien, comienzo a cuestinarme más seriamente contextos en los que funciona y contextos en los que no.

Pero comencemos por uno simple: los árboles. Es moda pensar que, dado un predictor categórico, un árbol explora todas las permutaciones posibles de categorías y que por eso algunas implementaciones de, por ejemplo, bosques aleatorios no permiten variables categóricas de más de cierto número no particularmente generoso de niveles.

[Esto](http://www-rohan.sdsu.edu/~jjfan/sta702/ctree.pdf) remite a la página 101 del [mítico libro de Breiman et al.](https://www.amazon.es/Classification-Regression-Wadsworth-Statistics-Probability/dp/0412048418) donde, al parecer, sugiere que



<blockquote>[f]or categorical predictors that has many levels $latex \{b_1,\dots, b_L\}$, one way to reduce the number of splits is to rank the levels as $latex \{b_{l_1}, \dots, b_{l_L}\}$ according to the occurrence rate within each node $latex p\{1|b_{l_1}\} \le p\{1|b_{l_2}\} \le \dots \le p\{1|b_{l_L}\}$ and then treat it as an ordinal input.</blockquote>



Es decir, sugiere esencialmente la codificación por impacto. Y diríase que `rpart` la trae de serie si es que leo correctamente el código en `anova.c` y `gini.c`.

Por si acaso, un experimento. Primero, datos:




    n <- 1000
    x1 <- sample(letters[1:10], n, replace = T)
    x2 <- runif(n)
    coefs <- rcauchy(10)
    names(coefs) <- letters[1:10]
    y <- coefs[x1] + 2 * x2 + rnorm(n)
    dat <- data.frame(y, x1, x2)




Con el código anterior construyo una tabla con una variable objetivo numérica, `y` y dos variables indpendientes: `x1` categórica y `x2` continua.

Ahora,




    library(rpart)

    # creo x3 recodificando por impacto
    tmp <- tapply(dat$y, dat$x1, mean)
    dat$x3 <- tapply(dat$y, dat$x1, mean)[dat$x1]

    modelo.0 <- rpart(y ~ x1 + x2, data = dat)
    modelo.1 <- rpart(y ~ x2 + x3, data = dat)

    table(data.frame(rama0 = modelo.0$where,
                     rama1 = modelo.1$where))




Corredlo cuantas veces queráis y veréis: pura diagonal.

Podéis probar con `party`, pero no tendréis tanta suerte. Es _casi_ diagonal, pero con _excepcioncitas_ (¿qué hará?):




    library(party)

    # creo x3 recodificando por impacto
    tmp <- tapply(dat$y, dat$x1, mean)
    dat$x3 <- tapply(dat$y, dat$x1, mean)[dat$x1]

    modelo.0 <- ctree(y ~ x1 + x2, data = dat)
    modelo.1 <- ctree(y ~ x2 + x3, data = dat)

    table(data.frame(rama0 = modelo.0@where,
                     rama1 = modelo.1@where))




¿A dónde va todo esto? A que en principio, la codificación por importancia no debería afectar a ningún método basado en árboles (¡y eso incluye a muchos de los métodos _boost_!) y, si lo hace, debería ser más por una cuestión de implementación que por otra cosa.




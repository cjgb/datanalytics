---
author: Carlos J. Gil Bellosta
date: 2013-12-18 07:23:00+00:00
draft: false
title: ¿Cuánta gente usará R (vs Python vs otros) dentro de 1000 años?

url: /2013/12/18/cuanta-gente-usara-r-vs-python-vs-otros-dentro-de-1000-anos/
categories:
- r
tags:
- markov
- python
- r
---

Pues no lo sé. Seguramente, nadie. Pero como he visto [esto](http://vote.sparklit.com/poll.spark/203792) (que no es otra forma que una representación palabrera de una matriz de transiciones de Markov) y el debate [R vs Python](http://readwrite.com/2013/11/25/python-displacing-r-as-the-programming-language-for-data-science#awesm=~oqk8RnEIOuwrgH) para el análisis de datos ha resonado estos últimos días con cierta fuerza, voy a ensayar un pequeño divertimento matemático que me traslada a una clase práctica de Álgebra I en mis años de estudiante.

Es el siguiente:



    # creo la matriz de transición

    cols <- c("r", "python", "otros")
    mt <- c(227, 108, 33, 31, 140, 7, 58, 27, 68 + 73)
    mt <- matrix(mt, nrow = 3, byrow = T)
    colnames(mt) <- rownames(mt) <- cols
    mt <- prop.table(mt, 1)

    # la diagonalizo
    tmp <- eigen(mt)

    # efectivamente, la diagonalización "funciona"
    tmp$vectors %*% diag(tmp$values) %*% solve(tmp$vectors)

    # y dejo discurrir 1000 años
    tmp$vectors %*% diag(tmp$values^10000) %*% solve(tmp$vectors)



Como resultado, podemos _estimar_ que el en futuro, el 33% de los _data scientists_ estarán usando R contra el 53% que usará Python y el 13% que se decantará por otras herramientas. O, casi seguro, no.

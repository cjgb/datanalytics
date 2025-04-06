---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2013-12-18 07:23:00+00:00
draft: false
lastmod: '2025-04-06T18:56:18.755115'
related:
- 2017-09-06-python-y-r-una-perspectiva-markoviana.md
- 2014-03-20-los-sospechosos-habituales-y-python.md
- 2019-02-12-sr-python-muchas-gracias-por-su-candidatura-ya-le-llamaremos-cuando-tenga-modelos-mixtos.md
- 2011-03-17-ya-no-si-sino-cuanto.md
- 2021-07-14-mi-apuesta-para-el-larguisimo-plazo-julia.md
tags:
- markov
- python
- r
title: ¿Cuánta gente usará R (vs Python vs otros) dentro de 1000 años?
url: /2013/12/18/cuanta-gente-usara-r-vs-python-vs-otros-dentro-de-1000-anos/
---

Pues no lo sé. Seguramente, nadie. Pero como he visto [esto](http://vote.sparklit.com/poll.spark/203792) (que no es otra forma que una representación palabrera de una matriz de transiciones de Markov) y el debate [R vs Python](http://readwrite.com/2013/11/25/python-displacing-r-as-the-programming-language-for-data-science#awesm=~oqk8RnEIOuwrgH) para el análisis de datos ha resonado estos últimos días con cierta fuerza, voy a ensayar un pequeño divertimento matemático que me traslada a una clase práctica de Álgebra I en mis años de estudiante.

Es el siguiente:

{{< highlight R >}}
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
{{< / highlight >}}


Como resultado, podemos _estimar_ que el en futuro, el 33% de los _data scientists_ estarán usando R contra el 53% que usará Python y el 13% que se decantará por otras herramientas. O, casi seguro, no.
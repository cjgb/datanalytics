---
author: Carlos J. Gil Bellosta
categories:
- programación
date: 2014-07-04 07:13:15+00:00
draft: false
lastmod: '2025-04-06T18:50:18.308785'
related:
- 2011-03-16-parentesis-corchetes-y-rendimiento-en-r.md
- 2012-05-28-desencriptando-ii-la-avaricia-es-mala.md
- 2011-05-18-solipsismo-comunidad-y-rendimiento.md
- 2012-03-06-mas-sobre-julia-ii-mi-primer-programa.md
- 2010-09-04-paquetes-estadisticos-una-anecdota-sin-moraleja.md
tags:
- econometría
- r
- vectorización
title: 'Vectorización en R: un contraejemplo'
url: /2014/07/04/vectorizacion-en-r-un-contraejemplo/
---

No hay regla sin excepción, dicen. Para la recomendación casi única para quienes se quejan de la lentitud de R, es decir, ¡vectoriza!, he encontrado hoy [una](http://www.fedeablogs.net/economia/?p=38514).

Sí, el artículo deja R por los suelos. En el fondo, no tanto, porque viene a decir que R es malo para lo que la documentación de R dice que es malo: véase cómo en [Writing R Extensions](http://cran.r-project.org/doc/manuals/r-release/R-exts.html#Interface-functions-_002eC-and-_002eFortran) nos advierten que la convolución _is hard to do fast in interpreted R code, but easy in C code_. Y el problema que tratan de resolver los autores contiene una convolución (a través de una cadena de Markov, para pasar de un nivel de capital al del siguiente periodo). Es decir, en cierta medida solo viene a confirmar que la documentación de R es buena.

He tratado de vectorizarlo y sí, el código se ha quedado en nada. Después de precalcular todo lo precalculable, los cuatro bucles del código original se han quedado en algo así como

{{< highlight R >}}
consumption <- lapply(1:5,
  function(n) (1-bbeta)*log( - outer(vGridCapital,
    mOutput[,n], "-")))

while (maxDifference>tolerance){

  expectedValueFunction <- bbeta * mValueFunction %*% t(mTransition)

  mValueFunctionNew <- sapply(
    1:nGridProductivity,
    function(i)
      apply(consumption[[i]] - expectedValueFunction[,i], 2, max))

  maxDifference  <- max(abs(mValueFunctionNew-mValueFunction))
  mValueFunction <- mValueFunctionNew

  iteration = iteration+1;
  if ((iteration %% 10)==0 | iteration ==1){
    cat("  Iteration = ", iteration," Sup Diff = ",
      maxDifference,"\n");
  }
}
{{< / highlight >}}

que es una pequeña tontería. Pero debido a las particulares características del problema en cuestión, el precálculo y la vectorización implican evaluar y almacenar en memoria una cantidad ingente de valores que no son utilizados para nada. No se utilizan porque, por resumir, la solución implica buscar transiciones desde un estado a otro que, por la definición concreta del problema, está en un entorno de él. Por eso es contraproducente vectorizar y precalcular: muchos de los valores almacenados están muy lejos de la solución y una implementación que se limita a explorar exclusivamente los derredores del estado anterior será siempre superior.

En fin, ahí queda la cosa. ¡Qué se le va a hacer! Eso sí, ¡ni elegido con candil!
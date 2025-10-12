---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2015-02-12 08:13:34+00:00
draft: false
lastmod: '2025-04-06T18:55:14.663629'
related:
- 2020-05-28-sobre-la-funcion-de-riesgo-en-el-analisis-de-la-supervivencia.md
- 2012-04-11-correccion-por-exposicion-del-modelo-logistico.md
- 2021-02-23-tres-teoremas-que-son-casi-ciertos.md
- 2010-10-25-una-solucion-al-problema-de-la-separacion-perfecta-con-regresiones-logisticas.md
- 2012-01-12-localidad-globalidad-y-maldicion-de-la-dimensionalidad.md
tags:
- churn
- estadística
- supervivencia
title: Parametrización de modelos de supervivencia (paramétricos)
url: /2015/02/12/parametrizacion-de-modelos-de-supervivencia-parametricos/
---

He participado directa o indirectamente en algunas decenas de los llamados proyectos de _churn_. Estoy al tanto de aún más de los que he hablado con otros colegas.

Digresión (para desavisados): se aplica (impropiamente) el término _churn_ a aquellos clientes (en general) que abandonan una compañía o dan de baja un servicio. En realidad _churn_ se refiere al flujo a corto plazo de clientes de poco valor que adquiere una compañía y que pierde enseguida. No sé por qué no se ha popularizado _abandono_. Uno de los primeros proyectos que abordan los departamentos de _inteligencia de clientes_ de las compañías que se lo pueden permitir es tratar de identificar aquellos clientes con alta probabilidad de abandonarla.

Una de las mayores frustraciones de quienes procedemos del mundo de la estadística es que (prácticamente) nadie se haya planteado jamás utilizar las técnicas del análisis de la supervivencia al abandono. Por algún motivo, el análisis de la supervivencia se ha circunscrito a dos o tres áreas de aplicación pequeñas y estancas: medicina, ciertas áreas de la bioestadística y la demografía, los seguros (¡por supuesto!) y tal vez la ciencia de materiales y la fiabilidad en ingenería. Fin.

Uno de mis grandes temas y que menos amigos me ha granjeado es el de la adecuación de las herramientas de modelación de fenómenos estadísicos a la estructura probabilística del problema. Muchos de quienes trabajan en _data mining_/_science_ desconocen este tipo de técnicas. Tampoco es culpa suya. Acabo de buscar en el libro (¡muy recomendable!) [_An Introduction to Statistical Learning_](http://www-bcf.usc.edu/~gareth/ISL/) la palabra _surviv(al)_ y aparece exactamente dos veces en +400 páginas: la primera asociada al técnicas de discriminación lineal y la segunda a _clústering_ y PCA.

Este preámbulo (que ahora que releo descubro que casi amerita una entrada propia) es solo abrebocas para el asunto de hoy, una parametrización que desconocía de modelos paramétricos de supervivencia y que he descubierto leyendo [esto](http://data.princeton.edu/pop509/ParametricSurvival.pdf).

Más allá de las consabidas funciones de riesgo, de supervivencia, etc., una parametrización alternativa de $T$, el tiempo que discurre hasta que ocurre lo que interesa, es posible: $\log(T)=\alpha + \sigma W$ donde $W$ es una distribución de probabilidad de soporte en todo el eje real.

Por ejemplo, para la distribución exponencial, la correspondiente $W$ tiene la antiestética función de densidad $\exp(w-e^w)$ (donde $\sigma = 1$, $\alpha = -\log \lambda$). Para la lognormal, $W$ es la normal. Para otras de las habituales, se puede consultar la referencia anterior. Incluso es posible encontrar expresiones $\alpha + \sigma W$ de las que muchos de los modelos habituales son casos particulares.

No estoy al tanto de aplicaciones de esta parametrización pero, sin duda, existen. Si no, a nadie daña una pequeña dosis de culturilla estadística.
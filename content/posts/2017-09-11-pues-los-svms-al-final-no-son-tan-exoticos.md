---
author: Carlos J. Gil Bellosta
categories:
- ciencia de datos
- estadística
date: 2017-09-11 08:13:03+00:00
draft: false
lastmod: '2025-04-06T18:46:12.017004'
related:
- 2016-06-22-gbm-ii-minizacion-de-funciones-perdidas-cuadraticas-residuos-y-gradientes.md
- 2024-02-01-optimizacion-generalizacion.md
- 2018-03-01-kriging-con-stan.md
- 2022-11-04-umap-tsne-etc.md
- 2019-04-16-sobre-el-error-de-generalizacion-porque-a-veces-se-nos-olvida.md
tags:
- estadística
- gcdnet
- regresión logística
- svm
title: Pues los SVMs, al final, no son tan exóticos
url: /2017/09/11/pues-los-svms-al-final-no-son-tan-exoticos/
---

Impartí un curso sobre máquinas de vector soporte (SVMs en lo que sigue) en Lima el pasado mes de agosto.

Las SVMs (o más propiamente, los clasificadores de margen máximo) son exóticos dentro del repertorio del _científico de datos_. Lo que buscan es un hiperplano que maximiza el _margen_ entre tirios o troyanos,

![](/wp-uploads/2017/09/maximo_margen.png#center)

con o sin penalización para los puntos que insisten en permanecer en la región del espacio que no les corresponde. El _modelo_ se ajusta resolviendo un problema de minimización inhabitual: uno de los llamados programas cuadráticos convexos. (Del que no nos tenemos que preocupar habitualmente porque delegamos la resolución en el _software_).

Sin embargo, preparando el material, vine a tropezar con una reformulación del problema anterior, que lo reduce a la minimización de una función de pérdida particular. En efecto, en la sección 12.3.2 del archiconocido [ESL](https://web.stanford.edu/~hastie/ElemStatLearn/) se plantea cómo en el contexto habitual de la clasificación (penalizada)


$$ \min \sum_1^N L(y_i, f(x_i)) + \frac{\lambda}{2} \|\beta\|^2,$$

donde $f(x) = h(x) \beta + \beta_0$, se obtiene

* la regresión logística (penalizada) si $L(y, x) = \log(1 + \exp(-yf(x))$ y
* SVM cuando $L(y, x) = [1 - yf(x)]_+$ (donde $[x]_+$ representa la parte positiva de $x$).

Resumiendo, en el fondo, estamos haciendo, casi, regresión logística (con o sin _kernels_, dependiendo de $h$) dado que las dos funciones de pérdida son, geométricamente, bastante parecidas:

![](/wp-uploads/2017/09/hinge_loss.png#center)

**Comentarios:**

* Me encantan los resultados que subsumen unas cosas en otras.
* Busqué y no encontré referencias a cuándo fue y de mano de quién que vino a obtenerse esta reformulación. ¿Será del mismo Vapnik? ¿Será de otro? ¿Será [esta](http://cbcl.mit.edu/publications/ps/evgeniou-reviewall.pdf)? ¿Le sabría malo?
* Es posible ajustar _modelos_ SVM sin tener que plantear un programa cuadrático, etc. Basta con minimizar la función de pérdida anterior directamente, como hace el paquete [`gcdnet`](https://cran.r-project.org/web/packages/gcdnet/index.html) de R.
---
author: Carlos J. Gil Bellosta
categories:
- cortos
date: 2024-12-26
lastmod: '2025-04-06T18:51:17.182859'
related:
- 2023-03-02-conformal-prediction.md
- 2024-09-24-cortos-stats.md
- 2024-02-01-optimizacion-generalizacion.md
- 2020-11-02-distancias-i-el-planteamiento-del-problema.md
- 2012-01-12-localidad-globalidad-y-maldicion-de-la-dimensionalidad.md
tags:
- predicción conforme
- gráficos
title: Predicción conforme, visualización y otros comentarios breves
url: /2024/12/26/cortos-estadistica/
---

### Predicción conforme

Hace un año largo dejé unas breves impresiones sobre la llamada [_predicción conforme_](/2023/03/02/prediccion-conforme/) en el blog. Hoy traigo un par de artículos sobre el tema de gente que ha estado pensando sobre el asunto más que yo.

1. [_Conformal prediction estilo compadre_](https://muestrear-no-es-pecado.netlify.app/2023/03/26/conformal_estilo_compadre/), que implementa la técnica cuidadosamente en R para desmitificarla y que todo el mundo tenga claro de qué se está hablando realmente.
1. [_When do we expect conformal prediction sets to be helpful?_](https://statmodeling.stat.columbia.edu/2024/02/20/when-do-we-expect-conformal-prediction-sets-to-be-helpful/), con una crítica a la técnica en cuestión similar a la que le hice yo.

### Gráficos

Tres enlaces interesantes sobre gráficos. Uno, sobre la
[visualización y animación de las series de Fourier](https://www.andreinc.net/2024/04/24/from-the-circle-to-epicycles);
otro sobre la [regularización en mapas usando MRF](https://fromthebottomoftheheap.net/2017/10/19/first-steps-with-mrf-smooths/)
y, finalmente, [un juego](https://www.graphs.world/) en el que hay que adivinar a qué serie estadística corresponde el gráfico sin etiquetas que se propone.


### Varios

1. Un análisis dimensional revela que los litros por km (p.e., el consumo de un coche) son una [medida de área](https://what-if.xkcd.com/11/). Corresponden precisamente a la sección de un tubito que tiene una longitud de 1 km y el volumen igual a ese consumo. Cada $x$ metros de ese tubito contienen la gasolina necesaria para recorrerlos. Si un coche de gasolina consume del orden de 1 litro cada 12 kms, la sección de la que estamos hablando, de ser cuadrada, tendría una arista de .3 mm.
1. Gran parte de los problemas asociados a las contraseñas y su uso real tiene que ver con un artículo, [_Passsword Security: A Case History_](https://dl.acm.org/doi/pdf/10.1145/359168.359172) publicado en 1979. En [_How some of the world's most brilliant computer scientists got password policies so wrong_](https://stuartschechter.org/posts/password-history/) se discuten los motivos. Tienen que ver, como cabe esperar, con la reacción de los usuarios (i.e, los efectos dinámicos) frente a la implementación de las medidas que recomiendan los expertos por mucho que aisladamente tengan sentido en un análisis estático.
1. La estadística nació hace siglos como un conjunto de técnicas para leer lo general a partir de lo particular: censos, encuestas, muestreos, etc. Pero hay una tendencia al _regreso_ y, una vez observado lo general, crear una reconstrucción de lo particular. Véase, por ejemplo, este artículo, [_El mapa del gasto en calefacción, edificio a edificio: ¿pagas más que tu vecino?_](https://www.elconfidencial.com/economia/2024-01-11/mapa-eficiencia-energetica-calefaccion-edificio-rehabilitacion_3796426/), sobre el que podrían hacerse tantas preguntas.

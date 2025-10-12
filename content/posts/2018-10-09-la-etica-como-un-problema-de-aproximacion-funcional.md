---
author: Carlos J. Gil Bellosta
categories:
- varios
date: 2018-10-09 08:13:42+00:00
draft: false
lastmod: '2025-04-06T18:59:58.011502'
related:
- 2015-12-09-droga-dura-el-retorno-de-los-chamanes.md
- 2017-03-07-en-contra-del-estado-de-derecho.md
- 2024-10-17-interpretacion-modelos.md
- 2016-02-04-y-termino-con-lo-de-los-intervalos.md
- 2018-03-02-reflexiones-bayesianas-al-hilo-del-manido-independientemente-de-su-ideologia-los-economistas-suelen-estar-de-acuerdo-en-que.md
tags:
- ética
- vapnik
- rawls
- interpolación
title: La ética, como un problema de aproximación funcional
url: /2018/10/09/la-etica-como-un-problema-de-aproximacion-funcional/
---

Hoy, las notas primero.

**Nota:** Ética y moral son la misma palabra en sus idiomas de origen. En español se usan de diversas maneras y hay opiniones diversas al respecto. Las emplearé en el sentido de que la moral es la ética aplicada y la ética la teoría de la moral, defendida por algunos. Ética, entonces, es el producto intelectual de una gente que se dedica profesional o semiprofesionalmente a cavilar sobre el comportamiento humano.

**Otra nota:** En primavera, cuando estuve escayolado, sin poder prácticamente teclear ni escribir cosa productiva alguna, leí aún más abundante y desordenadamente que de habitual. Lo que cuento hoy son observaciones que hice entonces a resultas de todo aquel poco productivo esfuerzo.

Voy a comenzar con una hipótesis fuerte. Es así: existen coyunturas $c_i$, acciones que se pueden realizar en esas coyunturas, $a_j$ y valoraciones éticas $v(c_i, a_j)$ sobre las que, y ahí está la hipótesis fuerte, existe un amplio consenso. Puede elegirse el dominio de $v$ como un conjunto ordenado (bueno, regular, malo) o una escala 0-10; tanto da para lo que sigue. La cosa es que la gente parece estar de acuerdo de qué acciones son correctas en un contexto dado y cuáles no, es decir, sobre $v$. Por supuesto, hablo de consensos y no de valoraciones personales, aunque salvo en casos patológicos (p.e., sicópatas), los sujetos tienen una idea bastante clara del consenso de los demás.

Entonces la ética como producción intelectual consiste en una secuencia de ensayos por aplicar a $v$ la técnica del [principio de la descripción de longitud mínima](https://en.wikipedia.org/wiki/Minimum_description_length). El sueño húmedo de los estudiosos de la ética sería encontrar una descripción que cupiese en un folio de una función $\hat{v}$ tal que $\hat{v} \approx v$. Advierto la relación de este concepto con el de la [dimensión de Vapnik–Chervonenkis](https://en.wikipedia.org/wiki/VC_dimension).

Propuestas de $v$ que uno encuentra por ahí son los diez mandamientos, el imperativo categórico de Kant, lo del velo de la ignorancia de Rawls, las maximización de la utilidad de los, ejem, utilitaristas, etc. Todo lo que uno lee al respecto tiene las siguiente estructura:

* Alguien enumera propuestas $\hat{v}_i$ que circulan por ahí.
* Encuentra casos $\hat{v}_i(c_j, a_k) \neq v(c_j, a_k)$ muy manifiestamente.
* Propone una $\hat{v}$ alternativa.

La verdad es que los estudiosos de la ética son muy ingeniosos a la hora de encontrar esos contraejemplos $(c_j, a_k)$. Uno de mis favoritos es el de la [conclusión repugnante](https://plato.stanford.edu/entries/repugnant-conclusion/). El del [dilema del tranvía](https://en.wikipedia.org/wiki/Trolley_problem) también, se ve, da mucha guerrita. Y supongo que los habrá muy entretenidos. De hecho, si me pagasen por ello, creo que podría ser bastante bueno para generar problemas y contradicciones de este tipo para tocar las pelotas a los fabricantes de $\hat{v}$. De hecho, en topología, se me daba muy bien construir ejemplos de espacios $T_1$ que no eran $T_2$ y cosas similares.

Y casi termino. Muchos de los fabricantes de $\hat{v}$ son inofensivos y se limitan a discutir casos en la pizarra y afinar, si procede, los coeficientes de su función, tratanto de aproximar su $\hat{v}$ a $v$. Los verdaderamente peligrosos son aquellos que emprenden el camino contrario, tratando de violentar $v$ para aproximarla a su $\hat{v}$. Se llaman constructivistas sociales y a veces han incurrido en lo que denuncia en antepenúltimo párrafo de [esto](http://induecourse.ca/social-constructivism-the-basics/).
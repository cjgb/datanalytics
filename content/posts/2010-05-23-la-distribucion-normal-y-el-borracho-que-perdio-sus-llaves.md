---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2010-05-23 22:33:16+00:00
draft: false
lastmod: '2025-04-06T19:07:55.996892'
related:
- 2014-02-27-d-hand-sobre-estadistica-y-mineria-de-datos.md
- 2014-10-10-bootstrap-bayesiano.md
- 2016-09-28-como-se-escribia-verosimilitud-en-frances-en-1774.md
- 2023-09-19-curtosis-t-test.md
- 2017-01-16-weapons-of-math-destruction.md
tags:
- estadística
- distribución normal
title: La distribución normal y el borracho que perdió sus llaves
url: /2010/05/23/la-distribucion-normal-y-el-borracho-que-perdio-sus-llaves/
---

Leí una vez un chiste sobre estadísticos. Lo tengo, de hecho, en algún lugar de mi disco duro y prometo incluir una referencia a la fuente una vez lo ubique.

Trata de un borracho que pierde sus llaves en la noche y comienza a buscarlas a la luz de una farola. Alguien se ofrece a ayudarlo.

—Qué le ocurre, ¿buen hombre?

—He perdido las llaves.

—¿Recuerda dónde pudo haber ocurrido?

—Pues en aquel callejón... pero las busco por aquí porque hay más luz.

¿Qué tiene esto que ver con la estadística? Pues que dicha disciplina ha heredado malos vicios derivados del hecho que su currículo se estableció antes de que se popularizaran los ordenadores. ¿Consecuencia? Gran parte de su teoría gravita alrededor de métodos no excesivamente exigentes desde el punto de vista de carga computacional. Y precisamente por ese motivo: por ser computacionalmente tratables.

En particular, la farola teórica que ilumina a los estadísticos es la de la ubicua distribución normal y su cohorte de estadísticos asociados: la media, la suma cuadrática de errores, la varianza, etc.

Comenta [Taleb en su muy recomendable libro _El cisne negro_](http://es.wikipedia.org/wiki/Nassim_Taleb) cómo en cierta época (que podría precisar si no fuese tan perezoso como para acercarme a mi estantería) los matemáticos ahondaban en el estudio de la distribución normal porque _era la que usaban los físicos_, mientras que los físicos la utilizaban porque _los matemáticos los tenían convencidos de que era la natural para realizar inferencias sobre sus datos con ruidos aleatorios_.

Así, muchos años después, seguimos buscando nuestras llaves no dónde creímos perderlas sino donde más luz da la farola.
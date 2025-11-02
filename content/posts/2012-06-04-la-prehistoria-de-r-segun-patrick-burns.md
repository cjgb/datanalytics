---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2012-06-04 07:29:16+00:00
draft: false
lastmod: '2025-04-06T18:50:39.565660'
related:
- 2017-05-08-como-fue-r-antes-de-r.md
- 2021-07-14-mi-apuesta-para-el-larguisimo-plazo-julia.md
- 2011-11-28-r-en-la-ensenanza-unos-comentarios-a-los-comentarios.md
- 2018-04-09-la-intrahistoria-de-mi-libro-de-r.md
- 2013-06-24-pqr-un-r-mas-rapido.md
tags:
- r
- historia
title: La prehistoria de R, según Patrick Burns
url: /2012/06/04/la-prehistoria-de-r-segun-patrick-burns/
---

Para muchos de nosotros, R es algo del siglo XXI. [Patrick Burns](http://www.portfolioprobe.com/), sin embargo, es capaz de estirar la memoria hasta hace casi 30 años, 1984, momento en el que S, que era entonces un proyecto experimental de los laboratorios Bell, _salió al mundo_.

S evolucionó hacia S+ entre 1984 y 1992. Al aparecer R, la situación era aproximadamente así:

[![](/img/2012/06/s_r_lisp.png#center)
](/img/2012/06/s_r_lisp.png#center)

Y, de hecho, en las primeras versiones de R, el código (extraído del artículo _[R: Lessons Learned, Directions for the Future](http://www.stat.auckland.ac.nz/~ihaka/downloads/JSM-2010.pdf)_ de Ross Ihaka) tenía esta pinta:

[![](/img/2012/06/r_primitivo.png#center)
](/img/2012/06/r_primitivo.png#center)

R aspiraba a ser un lenguaje que heredase las virtudes que muchos encuentran en Lisp. S había sido creado desde el más puro pragmatismo para ser más utilizado en aplicaciones interactivas que como entorno de programación. Pero, finalmente, por buscar la compatibilidad entre ambos,  el esquema anterior quedó reescrito así:

[![](/img/2012/06/s_r_lisp_nuevo.png#center)
](/img/2012/06/s_r_lisp_nuevo.png#center)

Y esto, en opinión de Burns, Ihaka y otros, contribuyó a hacer de R un lenguaje un tanto caótico. Así que, ¿seguimos a Burns, nos relajamos y lo aceptamos como tal? ¿O pensamos, como Ihaka, que hay que [replantear R desde la base](http://www.stat.auckland.ac.nz/~ihaka/downloads/Compstat-2008.pdf) para convertirlo en el lenguaje estadístico del futuro, con capacidad para manejar volúmenes mayores de datos, incrementar su velocidad y permitirle sacar partido más fácilmente de las arquitecturas distribuidas?
---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2011-05-24 07:00:49+00:00
draft: false
lastmod: '2025-04-06T18:46:39.394671'
related:
- 2010-07-13-rjython-un-nuevo-paquete-para-llamar-a-python-desde-r.md
- 2013-04-01-rpython-ya-esta-en-cran.md
- 2013-11-20-rpython-ya-en-windows.md
- 2015-01-02-publicada-una-nueva-version-de-rpython-win.md
- 2015-06-22-rpython-anaconda.md
tags:
- r
- paquetes
- rpython
title: Se buscan "alpha testers" para rPython
url: /2011/05/24/se-buscan-alpha-testers-para-rpython/
---

Busco _alpha testers_ para mi paquete `rPython`. El paquete es la evolución natural de [`rJython`](http://cran.r-project.org/web/packages/rJython/index.html), un paquete de R que permite llamar a Jython, el dialecto de Python que corre sobre la máquina virtual de Java, desde R.

`rPython` permite llamar al _verdadero_ Python. Funciona perfectamente en mi máquina, pero necesito ver qué problemas de instalación y uso aparecen en otras plataformas. De momento, sólo funcionaría sobre plataformas UNIX o Linux. Me sorprendería lo indecible que funcionase también sobre Windows: sería toda una casualidad.

Quien disponga de unos minutos que perder en pro de los intereados en la interacción de Python y R está invitado a:


* Instalar el paquete desde R-Forge mediante el comando `install.packages("rPython", repos="http://R-Forge.R-project.org")`
* Cargar el paquete mediante `library( rPython )`
* Ejecutar cualquiera de los ejemplos que aparecen en la ayuda de alguna de las funciones del paquete, como, por ejemplo,








{{< highlight R >}}
a <- 1:4
b <- 5:8
python.exec( c( "def concat(a,b):", "\treturn a+b" ) )
python.call( "concat", a, b)
{{< / highlight >}}










* Mandarme un correo con los problemas encontrados, de haberlos.

¡Quedaré muy agradecido!

(Además, si alguien tiene experiencia en el desarrollo de paquetes de R sobre Windows y quiere echarme una mano...)
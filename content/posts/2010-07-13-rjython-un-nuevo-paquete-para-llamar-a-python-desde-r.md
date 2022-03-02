---
author: Carlos J. Gil Bellosta
date: 2010-07-13 22:18:03+00:00
draft: false
title: 'rJython: un nuevo paquete para llamar a Python desde R'

url: /2010/07/13/rjython-un-nuevo-paquete-para-llamar-a-python-desde-r/
categories:
- r
tags:
- jython
- python
- r
- paquetes
---

Ya está disponible el paquete `rJython` que permite llamar a Python desde R. Aunque todavía no se ha subido a CRAN, puede instalarse así:

{{< highlight R >}}
install.packages("rJython", repos="http://R-Forge.R-project.org")
{{< / highlight >}}

Una vez instalado puede probarse el paquete ejecutando, por ejemplo,

{{< highlight R >}}
rJython <- rJython()
a <- 1:4
jython.assign(rJython, "a", a)
jython.exec(rJython, "b = len( a )")
jython.get(rJython, "b")
rJython$exec("import math")
jython.get(rJython, "math.pi")
jython.call(rJython, "len", 1:3)
b <- 5:8
rJython$exec("def concat(a,b): return a+b")
jython.call(rJython, "concat", a, b)
{{< / highlight >}}


**Arquitectura: Jython y rJava**

El paquete no está basado en el habitual [Cpython](http://en.wikipedia.org/wiki/CPython) sino en [Jython](http://en.wikipedia.org/wiki/Jython), un intérprete de Python desarrollado en Java. El motivo es doble:


* La integración de R y Java está bastante madura gracias al paquete [rJava](http://www.rforge.net/rJava/).
* Es difícil detectar de una manera robusta y _multiplataforma_ el intérprete de Python.

El paquete se distribuye con la versión 2.5.1 de Jython (actualmente, la más reciente). Esto permite que pueda instalarse sin otras dependencias que rJava.

Las desventajas de usar Jython en lugar de Cpython son:

* Sólo se pueden utilizar módulos de Python escritos enteramente en dicho lenguaje.
* El rendimiento es menor al utilizarse una pila de lenguajes interpretados para ejecutar el código.

**Comunicación entre R y Jython: JSON**

La comunicación entre R y Python se realiza serializando los objetos de cada lenguaje utilizando [JSON](http://es.wikipedia.org/wiki/JSON). El paquete [rjson](http://cran.r-project.org/web/packages/rjson/index.html) en R y [simplejson](http://code.google.com/p/simplejson/) en Python se utilizan para codificar y decodificar los objetos en sus respectivos entornos.

**Excepciones**

Se ha hecho cierto esfuerzo en permitir la captura en R de las excepciones que puede generar Python.

**Motivación e historia**

Se han realizado varios intentos por integrar R y Python. El más antiguo del que tengo noticia (y que creo es ya obsoleto) es [RSPython](http://www.omegahat.org/RSPython/). El módulo [RPy](http://rpy.sourceforge.net/) de Python permite llamar a R desde Python pero echaba en menos una manera de llamar a Python desde R.

Existe un paquete en CRAN, [RPyGeo](http://cran.r-project.org/web/packages/RPyGeo/index.html), que llama a Python, aunque de una manera uniplataforma (sólo en Windows y si se instala Python en el mismo directorio que el autor del paquete) y burda: mediante llamadas al sistema por línea de comandos.

La respuesta de Gabor Grothendieck a una pregunta mía en [R-devel](http://www.mail-archive.com/r-devel@r-project.org/msg16867.html) apuntaba a un paquete suyo, [RSymPy](http://code.google.com/p/rsympy/), en el que había resuelto el problema de la manera que elabora rJython. En comunicaciones posteriores con él decidimos colaborar para construir un paquete que abundase en su idea original y que pudiese servir de plataforma de comunicación entre R y Python.

Ahora se libera una versión, la 0.0-2, que en justicia podría adoptar el sobrenombre de _alfísima_.


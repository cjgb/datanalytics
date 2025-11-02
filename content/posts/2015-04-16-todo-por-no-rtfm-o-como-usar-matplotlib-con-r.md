---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2015-04-16 08:13:26+00:00
draft: false
lastmod: '2025-04-06T19:13:13.933959'
related:
- 2013-11-20-rpython-ya-en-windows.md
- 2011-08-29-2570.md
- 2013-04-01-rpython-ya-esta-en-cran.md
- 2010-04-21-para-que-copien-peguen-y-disfruten.md
- 2010-07-13-rjython-un-nuevo-paquete-para-llamar-a-python-desde-r.md
tags:
- matplotlib
- python
- r
- rpython
title: Todo por no RTFM (o cómo usar matplotlib con R)
url: /2015/04/16/todo-por-no-rtfm-o-como-usar-matplotlib-con-r/
---

Quien escribió [Call matplotlib from R](http://gallery.rcpp.org/articles/matplotlib-from-R/) podía haberse ahorrado bastante trabajo de la peor especie (programación de bajo nivel con C++) leyendo los benditos manuales (de [`rPython`](http://cran.r-project.org/web/packages/rPython/index.html), en este caso).

Le bastaba hacer

{{< highlight R >}}
library(rPython)

x <- seq(0, 2*pi, length = 100)
sx <- sin(x)
cx <- cos(x)

python.assign("x", x)
python.assign("sx", sx)
python.assign("cx", cx)

python.exec("import matplotlib.pyplot as plt")

python.exec("plt.rcParams.update({'figure.figsize' : (7,4)})")
python.exec("plt.plot(x, sx)")
python.exec("plt.plot(x, cx, '--r', linewidth=2) ")
python.exec("plt.legend(('sin(x)', 'cos(x)'))")
python.exec("plt.savefig('2015-04-02-pyplot.png')")
{{< / highlight >}}

para obtener

[![2015-04-02-pyplot](/img/2015/04/2015-04-02-pyplot.png#center)
](/img/2015/04/2015-04-02-pyplot.png#center)

con una fracción del esfuerzo y sin reinventar la rueda.

**Nota:** por supuesto, tienes que tener [`matplotlib`](http://matplotlib.org/) instalado. E.g., `sudo apt-get install python-matplotlib`
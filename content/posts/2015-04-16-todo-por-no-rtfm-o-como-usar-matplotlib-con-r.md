---
author: Carlos J. Gil Bellosta
date: 2015-04-16 08:13:26+00:00
draft: false
title: Todo por no RTFM (o cómo usar matplotlib con R)

url: /2015/04/16/todo-por-no-rtfm-o-como-usar-matplotlib-con-r/
categories:
- r
tags:
- matplotlib
- python
- r
- rpython
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

[![2015-04-02-pyplot](/wp-uploads/2015/04/2015-04-02-pyplot.png#center)
](/wp-uploads/2015/04/2015-04-02-pyplot.png#center)

con una fracción del esfuerzo y sin reinventar la rueda.

**Nota:** por supuesto, tienes que tener [`matplotlib`](http://matplotlib.org/) instalado. E.g., `sudo apt-get install python-matplotlib`



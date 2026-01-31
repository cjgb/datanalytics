---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2015-06-22 08:13:28+00:00
noindex: true
lastmod: '2025-04-06T18:47:45.898218'
related:
- 2019-06-06-mi-infraestructura-para-python.md
- 2011-05-24-se-buscan-alpha-testers-para-rpython.md
- 2013-04-01-rpython-ya-esta-en-cran.md
- 2015-01-21-donde-guardar-los-paquetes-de-r-en-linux-al-menos.md
- 2010-07-13-rjython-un-nuevo-paquete-para-llamar-a-python-desde-r.md
tags:
- anaconda
- python
- r
- rpython
title: rPython & Anaconda
url: /2015/06/22/rpython-anaconda/
---

_Nota: publico hoy en inglés en atención al público potencial de la entrada._

[`rPython`](http://cran.r-project.org/web/packages/rPython/index.html) lets R users call Python code. [Anaconda ](https://store.continuum.io/cshop/anaconda/) is a _completely free enterprise-ready Python distribution for large-scale data processing, predictive analytics, and scientific computing_. Not surprisingly, some users want to call Anaconda Python rather than their system's default Python.

However, Anaconda is a very particular package: unlike most other packages, whose files are scattered in a diversity of locations, it is self contained in a single directory. This helps Anaconda solve some problems, like the _library hell_. It is intended to provide the same _experience_ regardless of the specifics of the host system.

But this does not come for free. Problems arise, for instance, when one wants to dynamically link against Anaconda Python. This is precisely what `rPython` intends: when `rPython` is installed, it will —if the proper configuration parameters are provided— compile against Anaconda Python libraries. So far so good.

However, when it is loaded (via `library(rPython)`), it will search for the right Python library (e.g., `libpython2.7.so.1.0`) inside the directories listed in the environment variable `LD_LIBRARY_PATH` (in fact, it is a bit more complicated than that, but let's forget the details) and try to dynamically load it. But because of Anaconda's DIY (or autistic) design, `$ANACONDA_HOME/lib` will not be found there.

Options? For instance, you can `ldconfig` to register Anaconda libs in the system (but do beware of unintended side effects!). You can also try to add `$ANACONDA_HOME/lib` to `/etc/R/ldpaths`, but something may also break; in my case, R refuses to start, in fact.

In summary, I have no idea how to solve this problem. But perhaps some of my readers know!
---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2015-12-11 08:13:41+00:00
draft: false
lastmod: '2025-04-06T18:52:47.525869'
related:
- 2013-04-01-rpython-ya-esta-en-cran.md
- 2014-03-20-los-sospechosos-habituales-y-python.md
- 2022-09-20-tools-etl-memory.md
- 2016-04-06-rpython-feather.md
- 2010-07-13-rjython-un-nuevo-paquete-para-llamar-a-python-desde-r.md
tags:
- pandas
- python
- r
- rpython
title: Pasando data.frames de R como tablas de pandas en Python usando rPython
url: /2015/12/11/pasando-data-frames-de-r-como-tablas-de-pandas-en-python-usando-rpython/
---

Un usuario de [`rPython`](https://cran.r-project.org/web/packages/rPython/index.html), David González Knowles, me ha facilitado su código para pasar una tabla, `iris` en este caso, de R a una tabla de pandas en Python usando mi paquete.

En R hay tablas de serie. En Python no. La [librería pandas de Python](http://pandas.pydata.org/) implementa algo parecido a los `data.frames`. Solo que nada garantiza que un usuario de Python la tenga instalada. Por eso no hay un formato de destino claro y universal para las tablas de R a través de rPython. Y por eso, en Python, si se tiene `pandas` instalado, el usuario tiene que hacer _algo_, lo siguiente:

{{< highlight R >}}
library(rPython)

python.assign('iris', iris)
python.exec("print type(iris)")
# <type 'dict'>

python.exec("import pandas as pd")
python.exec("pd_iris = pd.DataFrame.from_dict(iris,orient='columns')")
python.exec("print type(pd_iris)")
#<class 'pandas.core.frame.DataFrame'>
{{< / highlight >}}

Sería posible (y lo comento por si alguien recoge el guante) desarrollar una extensión (o continuación) de `rPython` que asumiese que el Python de destino tiene `pandas` instalado y que incluyese operaciones como la indicada más arriba para facilitar la vida a los usuarios.
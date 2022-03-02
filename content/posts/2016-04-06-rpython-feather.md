---
author: Carlos J. Gil Bellosta
date: 2016-04-06 09:13:28+00:00
draft: false
title: rPython + feather

url: /2016/04/06/rpython-feather/
categories:
- r
tags:
- feather
- python
- r
- rpython
---

Supongo que a estas alturas todos conoceréis [`feather`](http://blog.rstudio.org/2016/03/29/feather/) y [`rPython`](https://www.datanalytics.com/2013/04/01/rpython-ya-esta-en-cran/). Hoy los vais a ver trabajar juntos.

Primero solo en R:

{{< highlight R >}}
library(feather)
path <- "/tmp/my_data.feather"
write_feather(cars, path)
my_cars <- read_feather(path)
{{< / highlight >}}

Ahora, para pasarle datos a Python:

{{< highlight R >}}
library(rPython)
python.exec("import feather")
python.exec("a = feather.read_dataframe('/tmp/my_data.feather')")
python.exec("print a")
{{< / highlight >}}

Y, finalmente, para crear datos _grandes_ en Python y devolvéselos a R:

{{< highlight R >}}
python.exec("import numpy as np")
python.exec("import pandas as pd")
python.exec("arr = np.random.randn(10000000)")
python.exec("arr[::10] = np.nan")
python.exec("df = pd.DataFrame({'column_{0}'.format(i): arr for i in range(10)})")
python.exec("feather.write_dataframe(df, '/tmp/test.feather')")

python.data <- read_feather("/tmp/test.feather")
dim(python.data)
#[1] 10000000       10
{{< / highlight >}}

Los tiempos, que los mida cada cual.


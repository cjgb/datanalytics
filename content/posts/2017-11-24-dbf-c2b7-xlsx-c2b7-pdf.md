---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2017-11-24 08:13:55+00:00
draft: false
lastmod: '2025-04-06T19:07:45.762704'
related:
- 2011-04-07-nueva-version-de-paquete-colbycol.md
- 2011-03-10-r-hdf5-y-bases-de-datos-orientadas-a-columnas.md
- 2011-03-04-1680.md
- 2013-05-02-data-table-i-cruces.md
- 2015-06-23-sparkr-1-4-carga-de-ficheros-csv.md
tags:
- dbf
- foreign
- paquetes
- pdf
- r
- readxl
- tabulizer
- xlsx
title: dbf · xlsx · pdf
url: /2017/11/24/dbf-xlsx-pdf/
---

Me escriben pidiendo consejo sobre cómo leer datos contenidos en (una serie larga de) ficheros en formatos `.dbf`, `.xlsx` (con un formato extraño) y `.pdf`.

**`.dbf`**

No tengo ni curiosidad por averiguar de dónde proceden. Simplemente,

{{< highlight R >}}
library(foreign)
res <-read.dbf("R0010.DBF")
{{< / highlight >}}

funciona de maravilla.

**`.xlsx`**

Estos sí que sé de dónde vienen (y me guardo la opinión). El problema aquí no era leer directamente tablas contenidas en hojas sino ir extrayendo celdas y rangos de hojas. Así que:

{{< highlight R >}}
library(readxl)

f <- "blablabla.xlsx"

fecha <- read_excel(f, range = "L1:L2")
col1  <- read_excel(f, range = "L2:L7")
tabla <- read_excel(f, range = "A14:AJ41")
{{< / highlight >}}

**`.pdf`**

Un gran depende. Puede ser muchas cosas (entre peores y pésimas, por supuesto). Pero [hablan bien del paquete `tabulizer` de R](https://datascienceplus.com/extracting-tables-from-pdfs-in-r-using-the-tabulizer-package/). A saber.
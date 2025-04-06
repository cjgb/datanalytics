---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2015-02-09 07:13:30+00:00
draft: false
lastmod: '2025-04-06T19:01:25.697496'
related:
- 2012-08-06-un-paseo-por-el-paquete-microdatoses-y-la-epa-de-nuevo.md
- 2017-04-10-pues-si-puede-fabricarse-uno-para-espana.md
- 2016-12-19-problemas-navidenos-decon-r.md
- 2010-11-17-siete-consejos-para-expertos-en-analisis-de-datos.md
- 2017-03-28-rejillas-poblacionales-con-r-un-borrador.md
tags:
- cursos
- r
title: Ejercicios de mi clase de R
url: /2015/02/09/ejercicios-de-mi-clase-de-r/
---

Ya conté que participo (como profesor) en el [Experto en _Data Science_ de la U-tad](http://www.datanalytics.com/2014/10/09/experto-en-data-science-en-la-u-tad/). Voy a copiar aquí los ejercicios que propuse en la asignatura de preparación de datos con R. Por si alguien les quiere hincar el diente. En lo que sigue he eliminado algunos detalles que no vienen a cuento. He dejado el resto.

Son así:

Los ejercicios tienen que resolverse individualmente. No son sencillos: parte de ellos están inspirados en problemas prácticos reales. Por eso puedes ayudarte de cualquier tipo de instrumento (Google, blogs, libros, etc.) que estaría a tu alcance en tu trabajo. Eso sí, en las soluciones que envíes, indica los recursos que utilices y deja clara cuál es tu aportación en cada caso.

No es necesario que envíes código. Puedes presentarlos en, p.e., entradas en tu bitácora (si tienes y quieres utilizarla), en repositorios de GitHub o similares. En caso de que envíes código, trata de usar R Markdown y que el documento sea reproducible (i.e., que yo pueda recrear la salida).

A pesar de que hay 12 puntos en juego, las prácticas se evaluarán sobre 10, que es la máxima nota.

**Clases S4 y mapas (2 puntos)**

Obtén `shapefiles` de, p.e., provincias españolas (el INE los proporciona). Luego, obtén datos de algún tipo de estadística asociada a dichas entidades (población, tasa de desempleo, etc.). Con esos dos elementos, crea un `SpatialPolygonsDataFrame` y represéntalos gráficamente.

Trata de hacerlo reproduciblemente (¿con R MarkDown?).

**JSON & XML (2 puntos)**

Busca un proveedor de datos via API que te interese. Descarga unos datos, procésalos y crea una pequeña historia en su derredor. Trata de que la obtención de los datos, etc. tenga su dificultad: se valorarán tanto el tratamiento de los datos como su interés o motivación.

Hazlo reproduciblemente (¿con R Markdown?)

**Web scraping, texto y fechas (2 puntos)**

Descarga información bursátil de `http://goo.gl/yD2Bwb` y crea un `data.frame` a partir de ella con la misma información que en la tabla que aparece en la página. Convierte las columnas numéricas a número, etc., las fechas a fecha, etc.

Ten en cuenta que la columna hora puede tener dos tipos de información: la hora durante las horas de operación de los mercados y el día en formato dd/mm/aaaa fuera de mercado. Que tu código tenga en cuenta esa circunstancia.

Alternativamente, si encuentras algunos datos de tu interés que te interese procesar y tengan un nivel de dificulad similar al anterior, úsalos en lugar de los propuestos.

El código que envíes tiene que ser capaz de crear la tabla a la hora en que lo ejecute.

**plyr, dplyr y data.table (2 puntos)**

Descarga los microdatos del censo del 2011 de `http://goo.gl/guhG1M`. Puedes bajar el nacional o, si tienes problemas de memoria, alguno de los regionalizados. En esa página hay también información sobre las variables contenidas en el fichero y su formato. Puedes leerlo en R usando el paquete `MicroDatosEs`. Consulta la ayuda de la función `censo2010`.

El ejercicio consiste en identificar algunas variables de tu interés y construir tablas por los indicadores que creas convenniente. Por ejemplo, población por sexo y grupo de edad en cada provincia. O proporción de viudos y viudas por tramo de edad y provincia. O...

Eso sí: hazlo usando los dos paquetes `dplyr` y `data.table` (¿y `reshape2`?). Trata también con `plyr`. Añade un comentario sobre la velocidad relativa de los distintos paquetes para procesar los datos. ¿Cuál es tu favorito?

Nota: Una columna muy importante en el censo es el factor de elevación. Para contar la población de España habria que hacer `sum(factorel)` donde `factorel` es el nombre que podría recibir esa columna. Hay un ejemplo práctico de cómo usar el factor de elevación en `http://goo.gl/U6Ys8W`.

**RHadoop (2 puntos)**

Sube un subconjunto de datos del censo del ejercicio anterior (¿100k líneas?) a Hadoop y haz una tabulación de variables de tu interés del censo usando `mapreduce`.

**Ejercicio extra (2 puntos)**

Crea un paquete de R (con dos o tres funciones tontas, que hagan cualquier cosa). Súbelo a GitHub. Se valorará que el paquete pueda ser instalado usando `devtools`.
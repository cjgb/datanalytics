---
author: Carlos J. Gil Bellosta
categories:
- ciencia de datos
- consultoría
- r
date: 2020-02-10 18:00:00+00:00
draft: false
lastmod: '2025-04-06T19:10:56.222313'
related:
- 2016-04-15-ahora-cartociudad-encuentra-informacion-administrativa-relativa-a-un-punto.md
- 2020-04-29-la-lista-de-la-verguenza-los-municipios-con-registros-civiles-no-informatizados.md
- 2022-09-27-uso-abuso-embeddings.md
- 2016-06-13-censura-a-la-izquierda-en-las-universidades-espanolas.md
- 2011-09-26-anumerismo-atenuante-o-agravante.md
tags:
- cartociudad
- ciencia de datos
- direcciones
- españa
- normalización
- r
title: Sobre la normalización de las direcciones postales
url: /2020/02/10/sobre-la-normalizacion-de-las-direcciones-postales/
---

Lo de las direcciones postales es un caos. Trabajar con ellas, una tortura. Y cualquier proyecto _de ciencia de datos_ que las emplee se convierte en la n-ésima reinvención de la rueda: normalización y tal.

Cuando todo debería ser más sencillo. Cada portal en España tiene asociado un _número de policía_, un identificador numérico único. Independientemente de que quienes lo habiten se refieran a él de formas variopintas, vernaculares y, en definitiva, desnormalizadas y desestandarizadas hasta pedir basta.

Una organización seria no debería almacenar, como todas las que conozco hasta la fecha sin excepción, la dirección como campo de texto casi libre. Debería almacenar el número de policía. Este debería asignarse en el momento de la captura de datos (p.e., cuando un cliente o empleado introduce una dirección en un formulario) garantizando una representación única.

¿Cómo se puede obtener el número de policía? Por ejemplo, usando [`caRtociudad`](https://github.com/rOpenSpain/caRtociudad) así:

{{< highlight R >}}
library(caRtociudad)

location <- cartociudad_geocode("garcía arista 13, zaragoza")
location_info <- cartociudad_get_location_info(latitude = location$lat, longitude = location$lng)
numero_policia <- location_info$num.via.id
numero_policia
# [1] "502970129165"
{{< / highlight >}}

**Coda:** todo lo relativo al número de policía podría considerarse un _outlier_ dentro los ratios entre los grados de utilidad y de conocimiento de las herramientas y estrategias necesarias para hacer (cierto tipo de) _ciencia de datos_ en España. No obstante, yo lo dejo aquí escrito y fechado como referencia mía y aviso para los demás.
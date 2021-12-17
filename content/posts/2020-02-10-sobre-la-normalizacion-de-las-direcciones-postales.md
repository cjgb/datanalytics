---
author: Carlos J. Gil Bellosta
date: 2020-02-10 18:00:00+00:00
draft: false
title: Sobre la normalización de las direcciones postales

url: /2020/02/10/sobre-la-normalizacion-de-las-direcciones-postales/
categories:
- ciencia de datos
- consultoría
- r
tags:
- cartociudad
- ciencia de datos
- direcciones
- españa
- normalización
- r
---




Lo de las direcciones postales es un caos. Trabajar con ellas, una tortura. Y cualquier proyecto _de ciencia de datos_ que las emplee se convierte en la n-ésima reinvención de la rueda: normalización y tal.







Cuando todo debería ser más sencillo. Cada portal en España tiene asociado un _número de policía_, un identificador numérico único. Independientemente de que quienes lo habiten se refieran a él de formas variopintas, vernaculares y, en definitiva, desnormalizadas y desestandarizadas hasta pedir basta.







Una organización seria no debería almacenar, como todas las que conozco hasta la fecha sin excepción, la dirección como campo de texto casi libre. Debería almacenar el número de policía. Este debería asignarse en el momento de la captura de datos (p.e., cuando un cliente o empleado introduce una dirección en un formulario) garantizando una representación única.







¿Cómo se puede obtener el número de policía? Por ejemplo, usando `[caRtociudad](https://github.com/rOpenSpain/caRtociudad)` así:







    library(caRtociudad)

    location <- cartociudad_geocode("garcía arista 13, zaragoza")
    location_info <- cartociudad_get_location_info(latitude = location$lat, longitude = location$lng)
    numero_policia <- location_info$num.via.id
    numero_policia
    # [1] "502970129165"







**Coda:** todo lo relativo al número de policía podría considerarse un _outlier_ dentro los ratios entre los grados de utilidad y de conocimiento de las herramientas y estrategias necesarias para hacer (cierto tipo de) _ciencia de datos_ en España. No obstante, yo lo dejo aquí escrito y fechado como referencia mía y aviso para los demás.




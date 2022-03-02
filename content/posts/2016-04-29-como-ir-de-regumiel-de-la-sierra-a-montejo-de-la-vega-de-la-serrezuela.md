---
author: Carlos J. Gil Bellosta
date: 2016-04-29 08:13:11+00:00
draft: false
title: Cómo ir de Regumiel de la Sierra a Montejo de la Vega de la Serrezuela

url: /2016/04/29/como-ir-de-regumiel-de-la-sierra-a-montejo-de-la-vega-de-la-serrezuela/
categories:
- r
tags:
- cartociudad
- r
- geolocalización
---

Pues así:

* Continúe por CALLE SAN JUAN DE RABANERA
* Gire justo a la izquierda por CALLE DIPUTACION
* Gire justo a la derecha por CALLE CABALLEROS
* Gire ligeramente a la izquierda por PLAZA RAMON Y CAJAL
* Gire a la izquierda por PLAZA MARIANO GRANADOS
* Gire a la izquierda por PASEO ESPOLON (EL)
* Gire ligeramente a la izquierda por AVENIDA VALLADOLID
* Gire ligeramente a la izquierda por N-122
* Continúe por A-11
* Continúe por N-122
* Gire ligeramente a la izquierda por CARRETERA SIN NOMBRE
* Continúe por N-122
* Gire a la izquierda por BU-924
* Continúe por N-122
* Continúe por BU-930
* Gire a la derecha por BU-940
* Continúe por CALLE FELIPE GARCIA
* Continúe por BU-940
* Gire ligeramente a la derecha por BU-932
* Gire a la izquierda por CALLE PAJARES
* Continúe por BU-V-9321
* Continúe por SG-V-9321
* Continúe por road
* Continúe por SG-V-9321
* Gire a la derecha por CALLE BAÑUELOS

O al menos, eso dice la novísima función `caRtociudad::get_cartociudad_route`. Que, además (y además de otras cosas) te dice que, en coche, tardarías 6969024... ¿milisegundos?

El código, como de habitual, aquí:


{{< highlight R >}}
library(caRtociudad)

origen  <- cartociudad_geocode("Regumiel de la Sierra, Soria")
destino <- cartociudad_geocode("Montejo de la Vega de la Serrezuela, Segovia")

ruta <- get_cartociudad_route(
	c(origen$latitude, origen$longitude),
	c(destino$latitude, destino$longitude))
{{< / highlight >}}


Notas:

* La función anterior tiene (a día de hoy) un pequeño _bug_ del que me he dado cuenta al correr este ejemplo.
* `cartociudad.es` no tiene información del sentido de las calles, por lo que bien te puede meter a contravía.
* El significado de los campos devueltos por la función puede consultarse en y alrededor de la página 77 de [esto](http://www.cartociudad.es/recursos/Documentacion_tecnica/CARTOCIUDAD_ServiciosWeb.pdf).
* Si no te llamas Luz y sabes representar esa ruta sobre un mapa de `caRtociudad` te invito a un algo (además de publicar aquí, si me dejas, la solución).
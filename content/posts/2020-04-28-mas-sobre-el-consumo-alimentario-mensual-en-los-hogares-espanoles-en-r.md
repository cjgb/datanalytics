---
author: Carlos J. Gil Bellosta
categories:
- números
- r
date: 2020-04-28 09:13:00+00:00
draft: false
lastmod: '2025-04-06T18:50:15.635576'
related:
- 2020-04-01-consumo-alimentario-mensual-en-los-hogares-espanoles-en-r.md
- 2012-03-27-acceso-y-reutilizacion-de-datos-publicos.md
- 2017-04-10-pues-si-puede-fabricarse-uno-para-espana.md
- 2011-06-10-datos-publicos-datos-dup.md
- 2014-06-27-disponible-una-nueva-version-de-microdatoses.md
tags:
- datos abiertos
- datos públicos
- r
title: Más sobre el consumo alimentario mensual en los hogares españoles en R
url: /2020/04/28/mas-sobre-el-consumo-alimentario-mensual-en-los-hogares-espanoles-en-r/
---

He actualizado el repositorio que anuncié [aquí](https://datanalytics.com/2020/04/01/consumo-alimentario-mensual-en-los-hogares-espanoles-en-r/), es decir, [este](https://github.com/cjgb/consumo_mensual_alimentos), con una función adicional cuya razón de ser es la siguiente:

* El ministerio de la cosa hace una encuesta sobre hábitos de compra y consumo de alimentos en España.
* Luego proporciona dos _vistas_ sobre los mismos datos:
* Una, en forma de ficheros `.xls` con más profundidad histórica, datos más recientes y menos variables.
* Otra, a través de un formulario _web_ que devuelve páginas con tablas `html` que tiene menos profundidad histórica, tiene un retraso mayor de publicación pero alguna variable más (p.e., la penetración).

No preguntéis por qué. El bienestar de todos, que es la aspiración máxima de las instituciones públicas, se escribe derecho pero con renglones torcidos.

**Nota:** Correr el _script_ que baja datos de los formularios lleva unas cuantas horas.

**Otra nota:** Igual alguien quiere correr periódicamente esos _scripts_ para generar y volcar datos en alguno de esas plataformas desde la que agentes privados proveen servicios públicos de primera (p.e., GitHub).
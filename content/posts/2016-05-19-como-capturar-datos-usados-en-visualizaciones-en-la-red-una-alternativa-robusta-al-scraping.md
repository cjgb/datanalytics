---
author: Carlos J. Gil Bellosta
categories:
- varios
date: 2016-05-19 08:13:00+00:00
draft: false
lastmod: '2025-04-06T18:46:28.788790'
related:
- 2016-05-20-descarga-de-datos-del-ibex-35-y-otros-minuto-a-minuto-en-tiempo-casi-real.md
- 2011-03-24-c2bfdonde-obtengo-mis-datos-c2a1pregunta.md
- 2014-04-24-aventuras-de-web-scraping-como-bajarse-todo-el-boe.md
- 2013-01-10-una-aplicacion-seo-con-r.md
- 2018-01-05-preludio-de-mas-por-venir.md
tags:
- chrome
- html
- webscraping
title: 'Cómo capturar datos usados en visualizaciones en la red: una alternativa robusta
  al scraping'
url: /2016/05/19/como-capturar-datos-usados-en-visualizaciones-en-la-red-una-alternativa-robusta-al-scraping/
---

Se me pregunta cómo llegué a [los datos](https://spreadsheets.google.com/feeds/list/1vyVTJPr7ZpuQI4m17cekWl485cQ-Zh6O9Yb6zXkPpYI/od6/public/values?alt=json) con los que armé [esta entrada](https://www.datanalytics.com/2016/05/09/encuestas-electorales-medios-y-sesgos-ii/). Recuérdese que gráficos como los que aparecen [aquí](http://www.elmundo.es/grafico/espana/2015/10/15/561fe19422601dd7728b45ef.html) los pinta tu propio navegador con javascript. De alguna manera, el servidor manda datos a tu navegador y, por lo tanto, de alguna manera, esos datos obran en tu poder. Sólo hay que saber capturarlos.

La manera (más bien, una de ellas):

* Abre la página con Chrome
* Abre [_Chrome DevTools_](https://developer.chrome.com/devtools) (con control-mayúscula-c en algunas máquinas o a través de menús (Tools, etc.) siempre).
* Entra a la pestaña _Network_ y selecciona [XHR](https://en.wikipedia.org/wiki/XMLHttpRequest).
* Busca entre los distintos ficheros intercambiados: típicamente, los datos están en el fichero  más voluminoso.

Hay variantes (p.e., el navegador puede estar haciendo una [petición POST](https://en.wikipedia.org/wiki/POST_(HTTP))), pero como todos los lectores de este blog menos, que me conste, uno sois gente lista, seguro que dais con la manera.
---
author: Carlos J. Gil Bellosta
categories:
- números
- r
date: 2017-05-31 08:13:29+00:00
draft: false
lastmod: '2025-04-06T18:51:18.504714'
related:
- 2014-09-23-el-impacto-causal-de-google.md
- 2018-09-25-disponible-el-fichero-de-datos-abiertos-mas-goloso-de-ambas-castillas-las-rutas-de-bicimad.md
- 2016-09-23-importa-mas-la-causalidad-hoy-en-dia.md
- 2017-10-20-he-tratado-de-contrastar-una-hipotesis-sin-exito-asi-que-solo-publico-el-subproducto.md
- 2015-09-07-prioris-subjetivas.md
tags:
- bicimad
- causalimpact
- madrid
- r
- series temporales
- causalidad
title: Dizque al sexto mes... pero ¿y los datos?
url: /2017/05/31/dizque-al-sexto-mes-pero-y-los-datos/
---

He leído [esto](http://www.eldiario.es/desde-mi-bici/sexto-mes-BiciMAD-municipalizada-resucito_6_647845233.html), que trata de lo distinta que es

![](/img/2017/05/bicimad_usos.png#center)


a la izquierda y a la derecha de la línea roja punteada.

La historia contada desde las posterioris basadas en datos difiere de la apriorística (recordad: ideología = priori). En concreto

![](/img/2017/05/bicimad_causal_impact.png#center)

Reconoceréis una aplicación de [`causalImpact`](https://google.github.io/CausalImpact/CausalImpact.html) y lo que significa el gráfico está comentado en todas partes.

Código y datos, por mor de la reproducibilidad, [aquí](/uploads/bicimad_causal_impact.zip).
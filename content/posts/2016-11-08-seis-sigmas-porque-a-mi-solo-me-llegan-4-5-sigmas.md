---
author: Carlos J. Gil Bellosta
categories:
- estadística
- números
date: 2016-11-08 08:13:13+00:00
draft: false
lastmod: '2025-04-06T19:06:33.121648'
related:
- 2017-05-24-aquellos-que-ignoran-la-estadistica-etcetera.md
- 2020-01-22-siete-llaves-al-sepulcro-del-metodo-delta.md
- 2017-12-18-el-z-score-es-una-medida-inadecuada-de-la-perpejidad.md
- 2016-05-24-tanto-ha-llovido-en-terminos-de-precision-numerica-desde-2008.md
- 2013-05-16-el-error-en-las-encuestas-cuentas-en-una-servilleta.md
tags:
- estadística
- seis sigma
title: ¿Seis sigmas? Porque a mí solo me llegan 4.5 sigmas
url: /2016/11/08/seis-sigmas-porque-a-mi-solo-me-llegan-4-5-sigmas/
---

Seis sigma es un conjunto de métodos y prácticas para mejorar la calidad de los procesos industriales. Su nombre está inspirado por la distribución normal: aspira a que la tasa de errores (por ejemplo, piezas defectuosas producidas por una planta) sea `pnorm(-6)`.

![six_sigma_definition_standard_deviations](/wp-uploads/2016/11/six_sigma_definition_standard_deviations.jpg)

Pero `pnorm(-6)` es 9.8e-10 (uno por millardo, aproximadamente), mientras que, según la Wikipedia, que siempre tiene la razón, la aspiración del Seis Sigma es la de alcanzar _3.4 defective features per million opportunities_. Que es bastante (trescientas veces) superior.

En realidad, `qnorm(3.4e-6)` es, aproximadamente, -4.5. No son seis, sino 4.5 sigmas las que corresponden a la tasa de error que indica la Wikipedia. La respuesta al misterio de la cosa parece estar [aquí](https://www.isixsigma.com/ask-dr-mikel-harry/ask-six-sigma-methodology/where-did-name-six-sigma-come/): se deja un margen del 25% (¡en la escala de las sigmas!) _porsiaca_.

Como las velocidades anunciadas vs reales del ADSL, vamos.
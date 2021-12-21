---
author: Carlos J. Gil Bellosta
date: 2016-11-08 08:13:13+00:00
draft: false
title: ¿Seis sigmas? Porque a mí solo me llegan 4.5 sigmas

url: /2016/11/08/seis-sigmas-porque-a-mi-solo-me-llegan-4-5-sigmas/
categories:
- estadística
- números
tags:
- estadística
- seis sigma
---

Seis sigma es un conjunto de métodos y prácticas para mejorar la calidad de los procesos industriales. Su nombre está inspirado por la distribución normal: aspira a que la tasa de errores (por ejemplo, piezas defectuosas producidas por una planta) sea `pnorm(-6)`.

![six_sigma_definition_standard_deviations](/wp-uploads/2016/11/six_sigma_definition_standard_deviations.jpg)

Pero `pnorm(-6)` es 9.8e-10 (uno por millardo, aproximadamente), mientras que, según la Wikipedia, que siempre tiene la razón, la aspiración del Seis Sigma es la de alcanzar _3.4 defective features per million opportunities_. Que es bastante (trescientas veces) superior.

En realidad, `qnorm(3.4e-6)` es, aproximadamente, -4.5. No son seis, sino 4.5 sigmas las que corresponden a la tasa de error que indica la Wikipedia. La respuesta al misterio de la cosa parece estar [aquí](https://www.isixsigma.com/ask-dr-mikel-harry/ask-six-sigma-methodology/where-did-name-six-sigma-come/): se deja un margen del 25% (¡en la escala de las sigmas!) _porsiaca_.

Como las velocidades anunciadas vs reales del ADSL, vamos.

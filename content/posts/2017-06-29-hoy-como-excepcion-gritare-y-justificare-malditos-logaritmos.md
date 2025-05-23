---
author: Carlos J. Gil Bellosta
categories:
- estadística
- r
date: 2017-06-29 08:13:36+00:00
draft: false
lastmod: '2025-04-06T19:01:24.265958'
related:
- 2017-10-16-modelos-no-lineales-directos-e-inversos.md
- 2017-10-23-modelos-directos-inversos-y-en-los-que-tanto-da.md
- 2022-03-03-error-sesgo-modelos-lineales.md
- 2019-04-16-sobre-el-error-de-generalizacion-porque-a-veces-se-nos-olvida.md
- 2017-09-11-pues-los-svms-al-final-no-son-tan-exoticos.md
tags:
- estadística
- logaritmo
- nls
- r
title: 'Hoy, como excepción, gritaré y justificaré: ¡Malditos logaritmos!'
url: /2017/06/29/hoy-como-excepcion-gritare-y-justificare-malditos-logaritmos/
---

Dados unos números positivos hay que justificar por que **no** tomar logaritmos y no al revés. La carga de la prueba recae sobre quien no lo hace.

No obstante:

Tenía unos datos (para cada $latex t$) que siguen (me lo juran) un modelo teórico

$$ \log y \sim k \exp(-at)$$

Existen dos opciones para encontrar los parámetros deseados $latex k$ y $latex a$. El primero, tomando logaritmos y aplicando `lm`. El segundo, ajustando un modelo no lineal con, p.e., `nls`.

¿La diferencia? Inapreciable a poco razonables que sean los datos y el modelo.

En mi caso, sin embargo, las diferencias entre los dos modelos eran notables. Porque en un caso se minimiza la suma de los cuadrados de

$$ \log y_i - (\log k - a t_i)$$

y en el otro, la de los valores

$$ y_i - k \exp(-a t_i).$$

Con el segundo planteamiento se tiende, por tanto, a ajustar mejor en la zona en la que los valores $latex y_i$ son grandes. Podría decirse que uno tiene en cuenta los errores absolutos y el otro, los relativos.

¿Qué es mejor? Depende. Casi siempre (reléase el primer párrafo) el modelo lineal. Pero hoy me ha tocado tragarme mi propio logaritmo.
---
author: Carlos J. Gil Bellosta
categories:
- estadística
- números
date: 2020-07-27 09:13:00+00:00
draft: false
lastmod: '2025-04-06T18:56:39.887101'
related:
- 2022-07-21-critica-critica-momo.md
- 2019-06-07-vigilancia-de-la-mortalidad-diaria-asociada-al-exceso-de-temperatura.md
- 2020-10-23-comentarios-varios-sobre-un-articulo-de-el-pais-sobre-momo.md
- 2020-04-08-momo-una-documentacion-oficiosa.md
- 2021-12-14-sobre-el-exceso-de-mortalidad-en-noviembre-de-2021.md
tags:
- calor
- epidemiología
- isciii
- modelos
- mortalidad
- momo
- momocalor
title: 'Un recordatorio: MOMOCalor está "up and running"'
url: /2020/07/27/un-recordatorio-momocalor-esta-up-and-running/
---

Por desgracia, [MoMo](https://momo.isciii.es/public/momo/dashboard/momo_dashboard.html) ya no exige presentación. Pero con los termómetros acariciando los 40º no está mal recordar la existencia de [MoMoCalor](https://momo.isciii.es/public/momocalor), su _hermanito_, que trata atribuir mortalidad a los excesos de temperaturas.

¿Por qué es particularmente importante MoMoCalor hoy? Recuérdese que MoMo estima, simplemente, desviaciones de mortalidad con respecto a la que sería la normal en una fecha determinada. Cuando hay una epidemia o una ola de calor, la mortalidad crece y MoMo lo detecta. Pero cuando hay una epidemia y una ola de calor simultáneas, MoMo es incapaz de atribuir muertos las causas anómalas subyacentes. Pero MoMoCalor sí.

**Nota:** de hecho, la motivación última de todas estas entradas que he hecho sobre la sobredispersión en los modelos de Poisson tienen que ver precisamente con dicho modelo.

**Otra nota:** tengo un amigo que no para de tratar de convencerme de que _me pase_ al _deep learning_. Pero, echando cuentas, MoMoCalor es un modelo con, a ojo, unos 500 parámetros. No está mal para un _modelito_.
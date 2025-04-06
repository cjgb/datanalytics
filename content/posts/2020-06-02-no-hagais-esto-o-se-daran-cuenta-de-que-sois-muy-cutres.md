---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2020-06-02 09:13:00+00:00
draft: false
lastmod: '2025-04-06T18:54:27.081956'
related:
- 2010-04-21-para-que-copien-peguen-y-disfruten.md
- 2018-01-17-quitar-variables-no-significativas.md
- 2015-04-17-si-un-dia-faltan-21-63-euros-en-caja.md
- 2014-06-09-por-que-de-los-minimos-cuadrados-con-restricciones.md
- 2017-01-12-lo-que-pasa-cuando-omites-la-priori-con-variables-categoricas.md
tags:
- estadística
- modelos
- p-valores
title: No hagáis esto o se darán cuenta de que sois muy cutres
url: /2020/06/02/no-hagais-esto-o-se-daran-cuenta-de-que-sois-muy-cutres/
---

Lo que no hay que hacer nunca si no quieres que se enteren de que eres inmensamente cutre es escribir código en las líneas del siguiente seudocódigo:

{{< highlight R >}}
m = model(y ~ a + b + c)
if (modelo.p_value(a) > .05)
    m = model(y ~ b + c)
{{< / highlight >}}

¡No, no, no, no, **NO**!
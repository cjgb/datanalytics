---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2024-04-30
lastmod: '2025-04-06T18:44:19.152646'
related:
- 2020-11-25-sobre-los-origenes-de-la-falacia-ecologica.md
- 2024-05-02-falacia-ecologica.md
- 2013-09-17-la-paradoja-de-simpson-en-el-6eiiic.md
- 2014-09-26-tirar-la-piedra-esconder-la-mano.md
- 2012-01-12-localidad-globalidad-y-maldicion-de-la-dimensionalidad.md
tags:
- falacia ecológica
- estadística
- paradoja de simpson
title: Más sobre la falacia ecológica
url: /2024/4/30/falacia-ecologica
---

El de la falacia ecológica es un asunto que ya he tratado en [alguna ocasión](https://datanalytics.com/tags/falacia-ecol%C3%B3gica/). Lo retomo porque he encontrado una
[exposición excelente sobre el concepto](https://solomonkurz.netlify.app/blog/2019-10-14-individuals-are-not-small-groups-ii-the-ecological-fallacy/)
de la que esta entrada es prácticamente un plagio.

Primero discute la historia del término. Se tiende a atribuir ---yo también lo hice [aquí](https://datanalytics.com/2020/11/25/sobre-los-origenes-de-la-falacia-ecologica/)--- a W. S. Robinson en su artículo
[_Ecological Correlations and the Behavior of Individuals_](https://academic.oup.com/ije/article/38/2/337/658252). No obstante, parece que el término propiamente dicho es algo posterior: fue Hanan C. Selvin quien lo denominó _falacia ecológica_ ---con todas sus letras--- en su artículo
[_Durkheim's Suicide and Problems of Empirical Research_](https://www.jstor.org/stable/2772991)
de 1958. Además, según la entrada que gloso, el concepto ya había sido tratado específicamente por E. L. Thorndike en su artículo de 1939
[_On the fallacy of imputing the correlations found for groups to the individuals or smaller groups composing them_](https://www.jstor.org/stable/1416673?seq=1#page_scan_tab_contents).
No obstante, dada la ubicuidad de la falacia, apostaría bastante a que no costaría demasiado dar con otros precedentes (¿se puede decir _precedentes previos_ sin que te riña Lázaro Carreter?).

¿Qué es lo más importante que cabe recordar sobre la falacia ecológica? Dos cosas: la primera, es que puede ser interpretada como un caso especial de la paradoja de Simpson. La segunda es esta _historia_ con la que la describe Ellen L. Hamaker y que reproduzco, traducida, aquí:

> Supongamos que nos interesa la relación entre la velocidad a la que se escribe a máquina y el número de erratas. Si se estudia la relación entre ambas variables en una población, probablemente se encontrará una correlación negativa: escriben más rápido los que tienen más experiencia y, por lo tanto, también tienden a cometer menos errores.
>
> Pero si se trata de generalizar este resultado al _nivel intrapersonal_ se podría llegar a la conclusión de que si una persona escribe más rápido cometerá menos errores. Claramente, esto es lo contrario de lo que cabe esperar. De hecho, si un individuo concreto trata de escribir más rápido, tenderá a cometer más errores. Es decir, hay una correlacion positiva (y no negativa) a _nivel intrapersonal_.

Gráficamente,

![](/wp-uploads/2024/falacia-ecologica.png#center)

Obviamente, podría no suceder así. En muchos casos, las correlaciones _between_ y _within_ podrían estar alineadas. Y es probable que la falacia lo sea propiamente porque es más habitual que suceda así que al revés (por lo que la falacia ecológica sería una especie de prejuico o _priori_ razonable con la que afrontar nuevos problemas). (Y por eso creo que la falacia ecológica pudiera ser muy anterior a las referencias ofrecidas en el artículo: valdría la pena sumergirse en Hume o Bacon para buscar precedentes).

Pero siempre que alguien oye, por ejemplo,

> los clientes que hacen X son más rentables; induzcamos pues a todos a hacer X para aumentar la rentabilidad de la cartera

debería encendérsele una especie de piloto rojo en la periferia del campo visual avisando de que se transita terreno estadísticamente minado.
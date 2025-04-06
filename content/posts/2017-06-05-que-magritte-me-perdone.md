---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2017-06-05 08:13:51+00:00
draft: false
lastmod: '2025-04-06T19:02:40.847681'
related:
- 2010-04-21-para-que-copien-peguen-y-disfruten.md
- 2010-10-26-a-vueltas-con-los-fractales.md
- 2011-08-29-2570.md
- 2013-06-13-la-cosa-mas-friqui-que-he-visto-en.md
- 2017-09-06-python-y-r-una-perspectiva-markoviana.md
tags:
- magrittr
- r
- trucos
- paquetes
- pipes
title: Que Magritte me perdone
url: /2017/06/05/que-magritte-me-perdone/
---

¿Qué es `%>%`? ¿Para qué sirve? Hoy he hecho la presentación más sesgada y parcial del operador para neófitos en R:

{{< highlight R >}}
library(magrittr)

8 %>% sin %>% exp
exp(sin(8))
{{< / highlight >}}

(Es que madrugar me pone de mal humor y saca mi más sincero yo de dentro de mí mismo).
---
author: Carlos J. Gil Bellosta
date: 2017-06-05 08:13:51+00:00
draft: false
title: Que Magritte me perdone

url: /2017/06/05/que-magritte-me-perdone/
categories:
- r
tags:
- magrittr
- r
- trucos
- paquetes
- pipes
---

¿Qué es `%>%`? ¿Para qué sirve? Hoy he hecho la presentación más sesgada y parcial del operador para neófitos en R:

{{< highlight R "linenos=true" >}}
library(magrittr)

8 %>% sin %>% exp
exp(sin(8))
{{< / highlight >}}

(Es que madrugar me pone de mal humor y saca mi más sincero yo de dentro de mí mismo).

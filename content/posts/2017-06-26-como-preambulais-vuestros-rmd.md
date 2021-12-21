---
author: Carlos J. Gil Bellosta
date: 2017-06-26 08:13:12+00:00
draft: false
title: ¿Cómo preambuláis vuestros .Rmd?

url: /2017/06/26/como-preambulais-vuestros-rmd/
categories:
- r
tags:
- html
- r
- rmarkdown
---

Yo nunca me había preocupado demasiado de eso (salvo en las presentaciones, para la que uso [`revealjs`](http://rmarkdown.rstudio.com/revealjs_presentation_format.html) y que son otra historia), pero el otro día me pasaron y vi el efecto de

{{< highlight yaml "linenos=true" >}}
---
title: "Mi título"
author: "Yo Me Mí Conmigo"
date: '`r format(Sys.Date(), "%B %d, %Y")`'
output:
  html_document:
    toc: true
    toc_float:
      collapsed: false
      smooth_scroll: false
    theme: united
    highlight: tango
---
{{< / highlight >}}

y las cosas van a cambiar para siempre.

Y vosotros, ¿cómo preambuláis? ¿Cuál es vuestro otro truco favorito para los .Rmd?

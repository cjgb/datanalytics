---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2017-06-26 08:13:12+00:00
draft: false
lastmod: '2025-04-06T19:07:53.860814'
related:
- 2016-04-28-rmarkdown-en-el-panel-principal-de-shiny.md
- 2018-04-25-diapositivas-con-reveal-js-y-yeoman.md
- 2019-06-25-nota-para-mi-usar-flextable-usar-flextable.md
- 2016-05-25-rmd2r-un-conversor-de-lo-que-su-propio-nombre-indica.md
- 2015-03-11-format-www-r-project-org-year-2015.md
tags:
- html
- r
- rmarkdown
title: ¿Cómo preambuláis vuestros .Rmd?
url: /2017/06/26/como-preambulais-vuestros-rmd/
---

Yo nunca me había preocupado demasiado de eso (salvo en las presentaciones, para la que uso [`revealjs`](http://rmarkdown.rstudio.com/revealjs_presentation_format.html) y que son otra historia), pero el otro día me pasaron y vi el efecto de

{{< highlight yaml >}}
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
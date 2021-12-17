---
author: Carlos J. Gil Bellosta
date: 2018-04-25 08:13:31+00:00
draft: false
title: Diapositivas con reveal.js y yeoman

url: /2018/04/25/diapositivas-con-reveal-js-y-yeoman/
categories:
- consultoría
tags:
- nodejs
- presentaciones
- reveal
- yeoman
---

Alguna vez me han preguntado cómo construyo diapositivas como [estas](https://datanalytics.com/uploads/charla_stack_analitico/charla_stack_analitico_201705.html#/).

La respuesta: uso [`reveal.js`](https://github.com/hakimel/reveal.js/) (que me da prácticamente todo lo que se ve) y me apoyo en el generador [`generator-reveal`](https://github.com/slara/generator-reveal) de [`yeoman`](http://yeoman.io/) para automatizar algunas tareas. Además, casi todas las diapositivas están escritas en `markdown`.

Como casi siempre me olvido del procedimiento de arranque, siempre acudo a [este breve tutorial](https://seojeek.com/yeoman-reveal-js-generator-quick-reveal-presentations/). A los que no estamos muy puestos en todo lo `nodejs` nos viene siempre bien echar un vistazo para ver qué demonios hace cada uno de los distintos comandos (`npm`, `n`, etc.). Aunque solo sea para que no nos tachen de _script-kiddies_.

Si usas `generator-reveal`, es fácil que tengas que leer bien [su documentación](https://github.com/slara/generator-reveal). En particular, la parte que trata de cómo pasar atributos a los objetos `slide`.

Finalmente, si quieres usar LaTeX, tendrás que modificar el _template_ `templates/_index.html` que trae `generator-reveal` por defecto para adaptarlo a [esto](https://github.com/hakimel/reveal.js/#mathjax). Además, si usas markdown, marca las ecuaciones con dólares y no con corchetes o pasarán cosas.

Encontrarás cosas raras e inesperadas. Como siempre, tener claro qué es lo que sucede y qué papel desempeña cada elemento en el proceso es la manera más eficiente de tenerlo todo bajo control.

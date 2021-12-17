---
author: Carlos J. Gil Bellosta
date: 2018-12-18 08:13:45+00:00
draft: false
title: 'data.tree: porque no todos los datos son tabulares'

url: /2018/12/18/data-tree-porque-no-todos-los-datos-son-tabulares/
categories:
- r
tags:
- data.tree
- paquetes
- prof.tree
- r
---




De acuerdo, casi todos los datos son tabulares. Digamos que el 90% de ellos. Pero muchos de ellos, no. Y `data.tree` es un paquete con muy buena pinta para manejar estructuras _arborescentes_ de datos: véanse [esta](https://cran.r-project.org/web/packages/data.tree/vignettes/applications.html) y [esta](https://cran.r-project.org/web/packages/data.tree/vignettes/data.tree.html) viñeta.





![](/wp-uploads/2018/12/datatree.png)






Como no podía ser de otra manera, tiene funciones para recorrer, filtrar y podar los árboles de datos.







La aplicación gracias a la cual di con él es el paquete `[prof.tree](http://ipub.com/r-profiling/)`, que es lo mismo que el `Rprof` de toda la vida... solo que mola más:







![](/wp-uploads/2018/12/rprofile.png)







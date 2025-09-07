---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2010-08-05 14:40:52+00:00
draft: false
lastmod: '2025-04-06T19:04:38.282853'
related:
- 2016-03-07-sutilezas-de-las-licencias-libres.md
- 2010-07-13-rjython-un-nuevo-paquete-para-llamar-a-python-desde-r.md
- 2014-10-27-noticia-de-las-vi-jornadas-de-usuarios-de-r.md
- 2010-07-19-que-hacer-y-no-hacer-con-los-bichitos-que-uno-encuentra.md
- 2011-11-28-r-en-la-ensenanza-unos-comentarios-a-los-comentarios.md
tags:
- jython
- python
- r
title: Un ilustrador problema de compatibilidad de licencias libres
url: /2010/08/05/un-ilustrador-problema-de-compatibilidad-de-licencias-libres/
---

>This whole thing is such a nuisance. It seems one can't even give something away these days!

Así de infeliz se mostraba G. Grothendieck hace unos días. Y es que habíamos enviado una primera versión del paquete [rJython](http://cran.r-project.org/web/packages/rJython/index.html) que subir a CRAN y nos encontramos con problemas de licencias.

Eso de las licencias de software es un tema enojoso. Importante, pero enojoso.

Además, da la impresión, que totalmente exótico a la ética y costumbres de este país desde el que escribo: algún día, como divertimento, contaré alguna historieta. Y cuando haya vencido la fecha de prescripción, la más divertida, la más ilustradora del fenómeno, la sin par: la del código con _copyright_ de _EverisWaterhouseCoopers_.

En resumen, que por acá, todo lo que está en tu disco duro es tuyo y con él puedes hacer capas, sayos y lo que se te antoje. No así en latitudes más honestas y en las que eso de las atribuciones,  contratos y licencias se gestiona más seriamente.

Veamos pues en qué consistió el embrollo. El paquete rJython consta de tres partes distintas:

* Código en R desarrollado por los autores. Ambos estamos felices de distribuirlo con una licencia tal como la GPL.
* Un fichero binario, jython.jar, sujeto a la [Jython Public License](http://www.jython.org/license.html).
* Un módulo de Python, [simplejson](http://code.google.com/p/simplejson/), ligeramente modificado y cubierto por la [licencia del MIT](http://es.wikipedia.org/wiki/MIT_License).

CRAN nos obliga a liberar el paquete con una única licencia. La [solución que plantea Fedora para este tipo de situaciones](http://fedoraproject.org/wiki/Packaging/LicensingGuidelines#Multiple_Licensing_Scenarios) no le satisface.

No se puede liberar todo el paquete con licencia de Jython porque ésta sólo la concede la Python Foundation a terceros, sólo cubre un software llamado "Jython" y podría no ser compatible con la MIT. La MIT tampoco vale porque no está claro que sea compatible con la de Jython.

¿GPL? Por ahí encontramos que es compatible con la MIT. También con la de Python. ¿Pero con la de Jython? A saber. Comparamos las licencias de Python y Jython y constatamos que son prácticamente idénticas (sólo que en algunos lugares reemplaza "Python" por "Jython"). Así que asumimos que también son compatibles.

¿Más? Pues sí: compatibles son, pero... ¿qué significa que dos licencias lo sean? Tal vez por aburrimiento y porque se acercaba la hora de comer, queremos creer que significa que si un proyecto consta de tres ficheros,

1. Fichero1.c, cubierto por la GPL
2. Fichero2.c, cubierto por la Jython License
3. Fichero3.c, cubierto por la licencia del MIT,

entonces está permitido liberar el paquete entero como GPL siempre que quede especificado que los ficheros fichero2.c y fichero3.c están cubiertos por sus propias licencias.

¿Será así? Quien sabe. Pero la decisión está tomada y, salvado este último escollo licenciatario, rJython ya está disponible en CRAN para asombro del mundo.
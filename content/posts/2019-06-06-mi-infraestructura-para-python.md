---
author: Carlos J. Gil Bellosta
date: 2019-06-06 09:13:52+00:00
draft: false
title: Mi infraestructura para Python

url: /2019/06/06/mi-infraestructura-para-python/
categories:
- programación
- python
tags:
- anaconda
- linux
- python
- rstudio
- spyder
- vscode
- ide
---

Resumen:

* He decidido usar RStudio como IDE para Python. RStudio no es el mejor IDE para desarrollar, pero es incomparablemente mejor que cualquier otro IDE para explorar, etc. Funciona muy bien y solo puede mejorar.
* He decidido pasar de Jupyter. Los _notebooks_ valen para lo que valen, pero no para lo que hago. En caso de necesidad, uso Rmarkdown con bloques de Python. De nuevo, funcionan muy bien y solo pueden mejorar.
* Finalmente, he decidido pasar de Anaconda. Tiene incompatibilidades con RStudio. Particularmente, cuando los módulos de Python tratan de  cargar _shared libraries_. Los módulos de Anaconda tienen el vicio de buscarlos dentro del directorio de instalación, pero al lanzar el intérprete de Python a través de `reticulate`, en Linux parece que los busca en el sistema (por debajo de `/usr/lib` y similares). Y todo se rompe mucho. Mucho y muy, muy feo.

Así que uso los Python (3.7 cuando puedo, otras versiones cuando me obligan) del sistema. Pero la instalación del sistema es mínima. He creado varios `environments` _ad hoc_ (y dentro de un directorio _ad hoc_ para ellos) y obigo a reticulate a usarlos (vía `use_virtualenv()`) según conveniencia. En ellos tengo todas las dependencias (de `numpy` para arriba).

Finalmente, el fichero `requirements.txt` de los entornos son enlaces blandos a una serie de ficheros `requirements_xxx.txt` que guardo en un directorio que comparto entre mis máquinas.

**Nota final:** Uso Ubuntu 18.04.

**Addenda:** Actualizo esta entrada a finales de 2021 para enmendarme. Actualmente estoy usando VSCode como IDE y `pipenv` para gestionar mis entornos. Sigue sin gustarme Jupyter: no es ágil para explorar. Durante un tiempo me atrajo Spyder, que tiene un aspecto más parecido a RStudio y lo considero marginalmente superior a VSCode para el análisis de datos (mejor integración de los gráficos y de IPython, para mi gusto), pero creo que podría no ser el caballo ganador a medio plazo.


---
author: Carlos J. Gil Bellosta
date: 2021-03-09 16:21:00+00:00
draft: false
title: Sobre la "inferencia basada en magnitudes"

url: /2021/03/09/sobre-la-inferencia-basada-en-magnitudes/
categories:
- artículos
- estadística
tags:
- estadística
- intervalo de confianza
- metodología
- muestras pequeñas
- excel
---

[Este artículo](https://statmodeling.stat.columbia.edu/2021/02/21/statisticians-dont-use-statistical-evidence-to-decide-what-statistical-methods-to-use-also-the-way-of-the-physicist/)  (sobre si los estadísticos se autoaplican el mismo rigor metodológico a la hora de seleccionar herramientas de análisis que luego exigen a otros) me llevó a [este otro artículo](https://rss.onlinelibrary.wiley.com/doi/10.1111/1740-9713.01444) donde se menciona una técnica, la _inferencia basada en magnitudes_, MBI en lo que sigue, por sus siglas en inglés, de la que trata lo que sigue.

Buscaban las autoras del segundo artículo un ejemplo de una técnica de esas que se publican en revistas de metodología estadística que acabara no teniéndose de pie. La encontraron en la MBI, que es una técnica:

* Publicada en una revista de ciencias del deporte ([enlace](https://www.semanticscholar.org/paper/A-spreadsheet-for-deriving-a-confidence-interval%2C-a-Hopkins/ccb3d5913b54816c46ffc5ce1b83ac0fdde91a69)).
* Que se distribuye en forma de hoja de cálculo (Excel, para más señas).
* Con el propósito más o menos explícito de estudiar _efectos pequeños en muestras pequeñas_ (!!!!) no detectados por los métodos tradicionales.

Para centrar ideas, es un test de Student (sirve para comparar medias, de hecho) que casi nunca deja de dar _significativo_.

MBI tiene dos versiones. La primera es más o menos estándar (y, de hecho, recomendable). Se quieren comparar dos medias y lo que propone es esencialmente lo que indica el siguiente gráfico (extraído de [aquí](https://www.researchgate.net/publication/325217813_Magnitude-based_inference_What_is_it_How_does_it_work_and_is_it_appropriate)):

![](/wp-uploads/2021/03/Magnitude-Based-Inference-Decisions-in-Magnitude-Based.png#center)

Es decir, se crea un intervalo de confianza para la diferencia y se estudia no si no tanto si contiene al cero como su posición con respecto a un umbral que define la significancia material (y no necesariamente la estadística). Los cosas casos señalados en rojo en el gráfico distinguen ambos casos.

Esa es la parte buena pero no original del método; pero tiene otra que es original y... mala. Es como quien monta un _after_ ilegal al que se accede por una trampilla en una cafetería del montón. Si el método anterior no funciona, como cabe esperar con efectos pequeños y muestras cortas, MBI tiene _cosa buena_ en la trastienda.

Lo he mirado por encima [aquí](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5642352/) (y dejo el enlace por referencia). Se trata del método descrito en la sección dedicada al _approach 2_. No voy a abundar en él porque no tengo tiempo para magufadas. Pero si alguien se anima...
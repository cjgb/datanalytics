---
author: Carlos J. Gil Bellosta
date: 2011-02-07 09:52:19+00:00
draft: false
title: ¿Un torpedo bajo la línea de flotación de SAS?

url: /2011/02/07/un-torpedo-bajo-la-linea-de-flotacion-de-sas/
categories:
- r
tags:
- r
- sas
- revoscaler
---

[Revolution Analytics](http://www.revolutionanalytics.com/) ha disparado un torpedo apuntando bajo la línea de flotación de SAS. Se trata del _[SAS to R challenge](http://www.revolutionanalytics.com/sas-challenge/)_, una muy inteligente campaña de publicidad por la que se compromete a reescribir en R gratuitamente código SAS de clientes potenciales si el primero es más eficaz que el segundo.

Más allá de lo que la campaña _parece ser_, se esconde lo que realmente _es_: la constatación de que **el premio gordo en el mundo de análisis empresarial es la actual base instalada de SAS** y de que Revolution va a por todas.

¿Cómo espera Revolution Analytics desbancar a SAS? Utilizando su nueva extensión propietaria **RevoScaleR**, un paquete de R diseñado para afrontar los retos que supone el análisis de los conjuntos de datos _grandes_ que manejan típicamente las organizaciones. Los lectores de esta bitácora, con la ayuda de Google o [Blekko](http://blekko.com/) serán capaces de encontrar por sí mismos la típica información comercial ([vídeos](http://www.youtube.com/watch?v=Cc5qvs1vA-8), folletos, etc.) acerca del producto.

Sin embargo, destacaré aquí dos de los aspectos técnicos RevoScaleR que han transcendido:

* Utiliza un **formato propietario de almacenamiento de datos**, XDF (¿estará emparentado con [éste](http://en.wikipedia.org/wiki/Extensible_Data_Format)?), diseñado para permitir un acceso rápido a filas y columnas de los datos (y sin necesidad de volcar su contenido en la memoria).
* Contiene **reimplementaciones de diversos algoritmos** habituales en estadística y minería de datos que no necesitan disponer de la totalidad de los datos en memoria (supongo que al estilo de [biglm](http://cran.r-project.org/web/packages/biglm/index.html))

Puede encontrarse una discusión técnica (de uso, no de arquitectura) [en este artículo](http://www.rochester.edu/College/psc/thestarlab/help/Big-Data-WP.pdf). Además, los interesados en aprender más sobre nuevos paradigmas de almacenamiento de datos que combinan las ventajas de los sistemas de almacenamiento por filas (como casi todos los RDBMs) y columnas (como R), encontrarán, seguro, de interés [este enlace](http://db.csail.mit.edu/chunkystore/).

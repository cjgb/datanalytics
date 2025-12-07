---
author: Carlos J. Gil Bellosta
categories:
- ciencia de datos
date: 2010-09-19 16:28:26+00:00
lastmod: '2025-04-06T19:12:48.088129'
related:
- 2010-10-10-ibm-compro-netezza-una-taxonomia-y-algunos-comentarios.md
- 2024-11-28-cortos-stats.md
- 2018-04-09-la-intrahistoria-de-mi-libro-de-r.md
- 2023-12-14-metodologias-viejunas.md
- 2010-05-27-google-prediction-api.md
tags:
- ciencia de datos
- jdm
title: 'JDM: fuese y no hubo nada'
url: /2010/09/19/jdm-fuese-y-no-hubo-nada/
---

Por salvaguardar del olvido algunas entradas que hice en un blog que ya no existe años ha, reproduzco acá otra que solo se entenderá retrasando las manecillas de los relojes y reemplazando hojas en los anaqueles hasta hará cosa de cinco años atrás.

Fue tal como sigue:

JDM es un proyecto de especificación de una API unificada y estandarizada para facilitar el desarrollo de actividades de minería de datos. Actualmente, [la versión 2.0 de dicha API está en proceso de discusión](http://www.jcp.org/en/jsr/detail?id=247). Colaboran en su desarrollo [algunas de las principales empresas del sector](http://www.jcp.org/en/jsr/results?id=2652).

### Objetivos

Los objetivos de esta API están inspirados por los de [JDBC](http://es.wikipedia.org/wiki/JDBC). JDBC permite acceder desde aplicaciones escritas en Java a información contenida en bases de datos de una manera más o menos transparente y homogénea. Da lo mismo que los datos estén almacenados en Postgres, Oracle, DB2 u otra base de datos, siempre y cuando ésta disponga del conector JDBC adecuado.

Con JDM se quiere alcanzar el mismo objetivo: que una aplicación en Java pueda interactuar con una herramienta de minería de datos a través de una API homogénea. La aplicación, independientemente del motor utilizado, debería saber entablar con él una comunicación transparente acerca de operaciones típicas de minería de datos.

Estos objetivos son verdaderamente ambiciosos. A diferencia de JDBC, donde la información está contenida en estructuras homogéneas (tablas), JDM exigirá utilizar otras más complejas que dependerán en gran medida del tipo de operaciones de minería de datos que se quiera realizar.

### Casos de uso

El uso más directo de esta API es el del desarrollo de **interfaces** multiplataforma y _multiproveedor_. A través de una única aplicación, los usuarios podrán realizar actividades típicas de minería de datos ---crear modelos, medir su eficiencia, realizar el _scoring_ de nuevos casos, etc.--- independientemente de la plataforma sobre la que éstos se desarrollen: podrían estar utilizando, de manera transparente, [SAS](http://www.sas.com), [Weka](http://www.cs.waikato.ac.nz/ml/weka/), [SPSS](http://www.spss.com), [KXEN](http://www.kxen.com), [Statistica](http://www.statsoft.com/) u otros.

Esta aplicación podría simplificar el proceso de **migración** entre versiones de una misma herramienta de minería de datos o, incluso, la migración de una a otra porque todas ellas entenderían las peticiones de la aplicación cliente de la misma manera y devolverían resultados en el mismo formato.

La aplicación ni siquiera tendría que ser un típico interfaz de sobremesa. Podría ser un _servlet_ en un **portal de internet** que hiciese uso de herramientas de minería de datos para, en tiempo real, interactuar con los visitantes. Por ejemplo, en un portal de viajes, después de que un cliente se interesase por un determinado paquete turístico, el motor de minería de datos podría sugerirle otros que pudieran resultarle atractivos. A través de JDM, el portal podría comunicarse con esta herramienta de una manera simple.

Por otra parte, un proveedor de soluciones de minería de datos que solo posea, póngase por caso, una **herramienta-nicho** ---por ejemplo, que solo vendiese redes neuronales de cierto tipo---, podría ensanchar la base de clientes potenciales si les proporcionase la posibilidad de integrarla en un entorno de trabajo al que éstos estuviesen acostumbrados.

### Colofón

Años después, de este proyecto y de su versión 2.0 sabemos lo mismo que nos anunciaron entonces. Fuese —como en el poema cervantino— y no hubo nada.

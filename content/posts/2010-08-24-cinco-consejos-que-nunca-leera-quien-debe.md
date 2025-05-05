---
author: Carlos J. Gil Bellosta
categories:
- consultoría
date: 2010-08-24 21:51:28+00:00
draft: false
lastmod: '2025-04-06T19:02:50.681406'
related:
- 2010-09-07-mas-sobre-migraciones-de-sas-a-wps.md
- 2010-08-12-c2bfya-has-considerado-pasarte-a-wps.md
- 2010-08-27-c2bfcuanto-cuesta-una-licencia-de-sas.md
- 2010-07-18-mas-de-diez-motivos-para-usar-proc-sql-en-sas.md
- 2014-10-20-roi-de-ida-y-vuelta.md
tags:
- consultoría
- sas
- wps
title: Cinco consejos que nunca leerá quien debe
url: /2010/08/24/cinco-consejos-que-nunca-leera-quien-debe/
---

Desde que dejé de ser uno de ellos, a esa gente que vive en un mundo en el que las cifras tienen un cero de más sólo me la tropiezo en los ascensores. Los oigo hablar de potencias de motores, de la piscina del chalé y de lo mal que está el servicio. Si de verdad tuviesen interés en aquello por lo que les pagan, seguro, leerían esta entrada y no se perderían ni una coma de lo que sigue a continuación.

He de reconocer que no es mío: lo traduzco más o menos libremente de [aquí](http://www.information-management.com/blogs/sas_wps_r_steve_miller-10018465-1.html). Está está dirigido a los _CIOs_ de empresas _intensivas en SAS_ y escrito al hilo de la reciente sentencia en el [caso que enfrenta a SAS y WPS](https://datanalytics.com/2010/08/12/¿ya-has-considerado-pasarte-a-wps/). Pero quienes toman cortados conmigo por la mañana me han oído alguna vez enumerar las siguientes buenas razones:


1. Dado que SAS se compra/alquila _a la carta_, catalogar todas las licencias de productos de SAS e identificar las aplicaciones que utilizan cada una de ellas. Es increíble cómo muchas compañías —dice el autor y corroboro por experiencia personal— ignoran que han estado pagando por productos de SAS que llevan años sin utilizar.
2. Verificar que los productos de SAS corren sobre las plataformas más económicas, dado que los precios de las licencias de SAS varían sustancialmente en función del _hardware_ y sistema operativo subyacente.
3. Identificar las aplicaciones de SAS más susceptibles de ser migradas a WPS. Dicha migración no es enteramente automática, pero debería ser sencilla en algunos casos, como el de aplicaciones que realizan movimientos de datos mediante _pasos data_ o crean informes. Después de eso, realizar pruebas de concepto sobre dichas aplicaciones en WPS. Y, por supuesto, tener al corriente al comercial de SAS de dichas iniciativas.
4. Probar herramientas _modernas_ de [ETL](http://www.datanalytics.com/etl.html) como puedan serlo [Pentaho DI](http://www.pentaho.com/products/data_integration/) (antiguamente Kettle). Plantear también el uso de otras herramientas de BI _open source_ sólidas como [Jaspersoft](http://www.jaspersoft.com) o [Pentaho](http://www.pentaho.com) para la creación de informes, OLAP y cuadros de mando.
5. Identificar nuevos proyectos en los que poder comenzar a probar la capacidad gráfica y analítica de R. R es muy distinto a SAS, por lo que la organización tendría que incorporar consultores —yo me postulo— que pudieran poner en marcha la iniciativa. Pero la satisfacción de los usuarios estaría más que garantizada.
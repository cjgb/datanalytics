---
author: Carlos J. Gil Bellosta
categories:
- consultoría
date: 2010-05-27 22:12:54+00:00
lastmod: '2025-04-06T19:04:34.542624'
related:
- 2010-09-19-jdm-fuese-y-no-hubo-nada.md
- 2024-03-21-cortos.md
- 2012-09-25-predicciones-de-series-temporales-a-gran-escala-y-en-paralelo-con-r.md
- 2018-01-05-preludio-de-mas-por-venir.md
- 2023-01-05-busquedas-internet.md
tags:
- ciencia de datos
title: Google Prediction API
url: /2010/05/27/google-prediction-api/
---

Tantas cosas que escribir en este blog, tantas cosas que leer y probar, tan hermosa que está la primavera allende la ventana y... me callo porque uno nunca sabe quién puede acabar leyendo lo que escribo.

A la lista de las cosas que probar y sobre las que aprender sumo hoy una que sólo acrecienta la admiración que siento por esa empresa que tan poco se parece a otras. Se resume gráficamente en:

[](http://code.google.com/apis/predict/images/french.png#center)![Google Prediction API](http://code.google.com/apis/predict/images/french.png#center)

Es decir, desde tu terminal, desde tu aplicación, desde tu teléfono móvil puedes realizar una consulta a cierto servicio (nuevo, de ahí que lo publique acá) de Google y éste te devuelve una respuesta de acuerdo con cierto modelo que has entrenado previamente.

Tengo que revisar la documentación de este nuevo servicio. La he leído rápidamente y de reojo. Pero creo recordar de todo lo que creo haber entendido que para entrenar modelos hay que darse de alta en otro servicio de Google,  [Google Storage for Developers](http://code.google.com/intl/es-ES/apis/storage/) y comenzar a trabajar de acuerdo con la siguiente [documentación](http://code.google.com/intl/es-ES/apis/predict/docs/developer-guide.html).

Llevo tiempo pensando en la utilidad y las posibilidades de negocio que pueden generar aplicaciones estadísticas distribuidas. Pienso en ellas desde que descubrí el [proyecto Gepas](http://gepas.bioinfo.cipf.es/). Aunque me parecen más interesantes aplicaciones para realizar _scorings_ remotos de casos individuales (exactamente lo que propone Google con su nueva aplicación).

Aplicaciones, por ejemplo, que desde cualquier oficina de una empresa de seguros calculen automáticamente la prima que aplicar a un cliente con no más que rellenar un formulario en internet. O si se le concede o no una hipoteca desde una agencia bancaria en Vitigudino. O si está o no cometiendo un fraude al comprar un producto con su (o no su) tarjeta de crédito. (Incluso se me ocurre una sobre la que no puedo dar detalles para que su responsable no se entere de lo que realmente pienso de él y de sus prácticas "profesionales").

Aplicaciones que se actualicen (por ejemplo, al recalibrar el modelo) de manera automática y transparente, sin instalaciones, a través de una API permanente y bien definida.

Espero poder desocuparme pronto de mis más imperiosas fatigas; espero acabar de configurar pronto mi nuevo servidor; espero que soplen los vientos y nubes negras tapen el sol; espero que Google me dé acceso a la nueva aplicación para pasar una tarde hasta tarde en la noche a la luz del flexo explorando la nueva herramienta (y participárselo al día siguiente, claro está, a mis abnegados lectores).
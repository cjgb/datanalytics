---
author: Carlos J. Gil Bellosta
date: 2012-11-28 06:52:41+00:00
draft: false
title: ¿... coma cero dos por ciento? ¡Anda ya!

url: /2012/11/28/coma-cero-dos-por-ciento-anda-ya/
categories:
- estadística
- r
tags:
- epa
- estadística pública
- microdatoses
- r
---

Hoy hablo en la reunión del [grupo de usuarios de R de Madrid](http://r-es.org/tiki-index.php?page=Grupo%20de%20Inter%C3%A9s%20Local%20de%20Madrid%20-%20GIL%20Madrid). Voy a reciclar la charla que di en las IV Jornadas de Usuarios de R sobre mi [paquete MicroDatosEs](http://www.datanalytics.com/2012/08/03/el-paquete-microdataes-para-microdatos-publicos/) y voy a aprovechar para criticar, en mi estilo, enunciados como

>El número de parados crece en 85.000 personas y alcanza la cifra de 5.778.100. La tasa de paro se incrementa 38 centésimas hasta el 25,02%.

que pueden encontrarse en la nota de prensa del INE que resume los resultados de la última encuesta de población activa, la del tercer trimestre de 2012.

En efecto, aprovechando que el paquete MicroDatosEs permite cargar fácilmente los microdatos de la EPA, voy a construir gráficos como

[![](/wp-uploads/2012/11/variabilidad_tasa_paro-300x224.png)
](/wp-uploads/2012/11/variabilidad_tasa_paro.png)

en el que se muestra en qué rangos podría estar variando la tasa de paro recogida por el INE si el azar hubiese hecho que los entrevistados fuesen otros que los unos que eligió finalmente el INE en 1000 universos paralelos idénticos al nuestro salvo por ese pequeño detalle. Los resultados no son escandalosamente distintos de los que con cuatro cifras significativas [reificaron](http://www.datanalytics.com/2010/03/21/la-varianza-y-cifras-macroeconomicas/) los medios pero pone en cuestión nuestra manía por la ultraprecisión.

Y luego, refinando la tortura, nos haremos la misma pregunta a niveles inferiores al nacional para ver si se cumple o no que la varianza decrece con la raíz cuadrada de `n` y qué pueden significar los números publicados aplicados a Soria, La Rioja o Melilla.

¿Nos veremos?
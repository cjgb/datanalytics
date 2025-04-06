---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2019-08-27 09:13:40+00:00
draft: false
lastmod: '2025-04-06T18:55:28.277580'
related:
- 2013-02-06-anonimidad-en-ficheros-de-microdatos-un-estudio-en-el-contexto-espanol.md
- 2011-10-06-ley-de-transparencia-y-anonimidad-en-ficheros-de-microdatos.md
- 2010-10-09-c2bfes-realmente-posible-la-anonimizacion.md
- 2012-10-04-ley-de-transparencia-y-anonimidad-en-ficheros-de-microdatos-ii.md
- 2018-04-16-proteccion-de-los-datos-de-los-muertos.md
tags:
- anonimidad
- datos abiertos
- estadística pública
title: Más sobre la anonimidad y reidentificación en ficheros de microdatos
url: /2019/08/27/mas-sobre-la-anonimidad-y-reidentificacion-en-ficheros-de-microdatos/
---

Ha tenido cierta repercusión durante el verano el articulo _[Estimating the success of re-identifications in incomplete datasets using generative models](https://www.nature.com/articles/s41467-019-10933-3)_, del que se han publicado resúmenes tales como _[Bastan tres datos para identificar a cualquiera en una base anónima](https://www.technologyreview.es/s/11326/bastan-tres-datos-para-identificar-cualquiera-en-una-base-anonima)_. Cosa sobradamene conocida desde hace la tira.

De hecho, se ha publicado [esta herramienta](https://cpg.doc.ic.ac.uk/individual-risk/) para conocer tu riesgo de ser reidentificado, caso de que vivas en EEUU o el RU.

¿Y si vives en España? Siempre puedes leer [esto](http://www.seio.es/BEIO/Microdata-and-k-anonymity-a-quantitative-approach-in-the-Spanish-context.html), de lo que ya hablé (y resumí) [aquí](https://www.datanalytics.com/2013/02/06/anonimidad-en-ficheros-de-microdatos-un-estudio-en-el-contexto-espanol/).

Y, finalmente, si quieres un tratamiento distinto (y más general, basado en teoría de la información) al del artículo sobre cuánta información permite la reidentificación de gente... échale un vistazo a [esto](https://www.datanalytics.com/2011/09/22/anonimidad-y-cantidad-de-informacion/).

**Nota:** Buscándome, he encontrado [esto](https://www.aepd.es/media/notas-tecnicas/nota-tecnica-kanonimidad.pdf). ¡Me cita un estudio de la Agencia de Protección de Datos!

**Otra nota:** Lo de la fecha completa de nacimiento es tongo. Solo con ese dato y el municipio se reidentifica a cantidad de gente. Casi nunca se comunican las fechas exactas de nacimiento/defunción en microdatos públicos. Eso es de primero de privacidad.

**Nota final:** Y precisamente por lo anterior son tan poco conocidos los fenómenos de la (muy notable) estacionalidad intrasemanal de la mortalidad y la natalidad.
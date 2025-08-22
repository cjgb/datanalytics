---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2016-06-06 08:13:46+00:00
draft: false
lastmod: '2025-04-06T18:50:26.909593'
related:
- 2013-01-10-una-aplicacion-seo-con-r.md
- 2011-02-17-enredando-con-el-paquete-googlevis-de-r.md
- 2017-04-10-pues-si-puede-fabricarse-uno-para-espana.md
- 2010-05-27-google-prediction-api.md
- 2015-02-09-ejercicios-de-mi-clase-de-r.md
tags:
- google
- r
- google analytics
title: Acceso a Google Analytics desde R
url: /2016/06/06/acceso-a-google-analytcs-desde-r/
---

Google Analytics puede usarse desde su consola o bien descargando datos y procesándolos por tu cuenta. Para lo cual, desde R,

{{< highlight R >}}
require(RGoogleAnalytics)

client.id <- "1415926535-u377en6un7lugar2de7lamancha0de1cuyo5nombre0m.apps.googleusercontent.com"
client.secret <- "CEcI5nEst6pAs6Un2SecREt6-f8nt"
token <- Auth(client.id,client.secret)
#save(token,file="~/.ga_token_file")
{{< / highlight >}}


Obviamente, para lo anterior:

* Hay que instalar y cargar los paquetes relevantes
* Tienes que usar tu propio id y secreto de cliente como indica [aquí](https://auth0.com/docs/connections/social/google)
* Tienes que tener una cuenta en Google Analytics, claro

Además, puedes descomentar la última línea si quieres guardar tus credenciales para futuros usos (con las debidas medidas de seguridad). Tras lo cual,


{{< highlight R >}}
query.list <- Init(start.date = "2016-05-01",
    end.date = "2016-05-31",
    dimensions = "ga:date,ga:region",
    metrics = "ga:sessions,ga:users",
    max.results = 10000,
    #sort = "ga:date",
    table.id = "ga:2718281828")

ga.query <- QueryBuilder(query.list)
ga.data  <- GetReportData(ga.query, token)
{{< / highlight >}}

hace tuyos los datos solicitados en la consulta. En ella hay varios parámetros que nos son ajenos a los más. Las métricas y las dimensiones disponibles, por un lado, pueden consultarse [aquí](https://developers.google.com/analytics/devguides/reporting/core/dimsmets). Y, lo que más quebraderos de cabeza me dio, el nombre de tabla de la que se quiere hacer la consulta, puede averiguarse dentro de Google Analytics navegando de _Administración_ a _Ver_ (¿_View_ en inglés?) y de allí a _Ver configuración_; el numerito se encuentra en el apartado _ID de vista_.

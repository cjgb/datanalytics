---
author: Carlos J. Gil Bellosta
date: 2022-07-26
title: 'El hueco térmico: una caracterización vía kmeans'
description: 'Análisis del hueco térmico a través de un anállisis clúster'
url: /2022/07/26/hueco-termico-kmeans/
categories:
- estadística
tags:
- mercado eléctrico
- kmeans
- estadística
---

El hueco térmico es una variable aleatoria que representa la necesidad de utilizar energía térmica tradicional y no renovable para abastecer el mercado eléctrico. Tiene dos fuentes principales de variabilidad:

- La variabilidad de la demanda.
- La variabilidad de las fuentes de energía renovable.

[Una pequeña digresión: cuando $Y = X_1 + X_2$, la varianza de $Y$ depende de las de $X_i$ y de su correlación. Si son independientes, es la suma de las dos; si están negativamente correladas, la de $Y$ es inferior a la suma; etc. Este humilde opinador sostiene que a medio plazo no hay otro remedio para el sistema eléctrico que forzar una correlación negativa entre $X_1$ y $X_2$, lo cual, en plata, significa cortes más o menos selectivos de suministro.]

La forma y tamaño del hueco térmico tiene una consecuencia menor pero muy aburrida:

- Cuando es pequeño, los tirios de Twitter muestran capturas de pantalla de la aplicación de REE y la acompañan de comentarios del tipo: "¡La eólica es el futuro! ¡Ahora mismo está produciendo el nosecuantosmil por ciento del nosequé!"
- Cuando es grande, los troyanos hacen lo propio, aunque cambiando el sentido del pie de la foto: "¡Los molinillos son un fracaso! Ahora mismo, ¡mirad! "La transición ecológica es un timo!"

Etc.

En lo que me he entretenido es en caracterizar el tamaño y forma diaria del hueco eléctrico con datos reales del último año (largo) y buscar en él nueve patrones básicos. Es decir, he extraído las _formas funcionales_ del hueco térmico para cada día y las he agrupado en nueve tipos básicos. El resultado ha sido este:

![](/wp-uploads/2022/07/hueco_termico.png)

El tamaño relativo (en %) de los _clústers_ es

{{< highlight text >}}
   1    2    3    4    5    6    7    8    9
 6.3  6.1 10.9 17.0 19.9  6.8 14.5  5.5 13.1
{{< / highlight >}}

Finalmente, por si alguno quiere abundar en el análisis anterior, dejo acá el código ---muy sucio, lo reconozco--- que he usado para construir todo lo anterior:

{{< highlight python >}}
import pandas as pd
import requests
import json

cookies = {
    'visid_incap_257780': 'jc28dyHpQzWndVySBH3efkKVn2IAAAAAQUIPAAAAAABbIZnfEcl/jLCTtncIWNvS',
    'visid_incap_1863806': 'C/tZlrhlSRyu5T/zgqoAhhejyWIAAAAAQUIPAAAAAACfU/4FREH4fkd1Sm8YSVZw',
    'incap_ses_1484_257780': 'xeeYIMzTQBv48xV8QTqYFGIh1GIAAAAAn2q8n2HZPmQdj2EwL7Yv4A==',
    'incap_ses_1484_1863806': '4oF1YhQzN1j6/BV8QTqYFGsh1GIAAAAAUqEZjUhiRZGSe22Zbr8INQ==',
}

headers = {
    'authority': 'demanda.ree.es',
    'accept': '*/*',
    'accept-language': 'en-US,en;q=0.9,es-ES;q=0.8,es;q=0.7',
    # Requests sorts cookies= alphabetically
    # 'cookie': 'visid_incap_257780=jc28dyHpQzWndVySBH3efkKVn2IAAAAAQUIPAAAAAABbIZnfEcl/jLCTtncIWNvS; visid_incap_1863806=C/tZlrhlSRyu5T/zgqoAhhejyWIAAAAAQUIPAAAAAACfU/4FREH4fkd1Sm8YSVZw; incap_ses_1484_257780=xeeYIMzTQBv48xV8QTqYFGIh1GIAAAAAn2q8n2HZPmQdj2EwL7Yv4A==; incap_ses_1484_1863806=4oF1YhQzN1j6/BV8QTqYFGsh1GIAAAAAUqEZjUhiRZGSe22Zbr8INQ==',
    'sec-fetch-dest': 'script',
    'sec-fetch-mode': 'no-cors',
    'sec-fetch-site': 'same-origin',
    'sec-gpc': '1',
    'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.114 Safari/537.36',
}

params = {
    'callback': 'angular.callbacks._7',
    'curva': 'DEMANDAQH',
    'fecha': '2022-07-16',
}

response = requests.get('https://demanda.ree.es/WSvisionaMovilesPeninsulaRest/resources/demandaGeneracionPeninsula', params=params, cookies=cookies, headers=headers)


my_dates = [x.strftime("%Y-%m-%d") for x in pd.date_range(start = "2021-01-01", end = "2022-07-16")]


def get_date(my_date):
    params['fecha'] = my_date
    response = requests.get('https://demanda.ree.es/WSvisionaMovilesPeninsulaRest/resources/demandaGeneracionPeninsula', params=params, cookies=cookies, headers=headers)
    return response.text

my_data = [get_date(x) for x in my_dates]

def process_data(x):
    tmp = x
    tmp = tmp[21:-2]
    tmp = json.loads(tmp)
    tmp = tmp['valoresHorariosGeneracion']
    return pd.DataFrame(tmp)

tmp = [process_data(x) for x in my_data]

res = pd.concat(tmp)
res = res.groupby('ts').mean().reset_index()
res.to_csv("hueco-termico.csv", index=False)
{{< / highlight >}}


{{< highlight R >}}
library(data.table)
library(ggplot2)
library(lubridate)
library(scales)

minute_to_ts <- function(x){
  tmp <- paste(Sys.Date(), x)
  ymd_hm(tmp)
}

x <- fread("hueco-termico.csv")

x$hueco_termico <- x$gf + x$car + x$cc
x <- x[, c("ts", "hueco_termico")]

x$day <- sapply(strsplit(x$ts, " "), function(x) x[[1]])
x$minute <- sapply(strsplit(x$ts, " "), function(x) x[[2]])

x <- x[, n := .N, by = "day"]
x <- x[x$n == 288,]
x$n <- NULL
x$ts <- NULL

tmp <- dcast(x, day ~ minute, value.var = "hueco_termico")
days <- tmp$day
tmp <- as.matrix(tmp[, -1])

res <- kmeans(tmp, centers = 9)

centers <- data.table(res$centers)
centers$cluster <- as.numeric(row.names(centers))
centers <- melt(centers, id.vars = "cluster")
centers$ts <- minute_to_ts(centers$variable)

orig <- data.table(tmp)
orig$cluster <- res$cluster
orig$day <- days
orig <- melt(orig, id.vars = c("day", "cluster"))
orig$ts = minute_to_ts(orig$variable)

ggplot(centers, aes(x = ts, y = value)) +
  geom_line(data = orig, aes(group = day), alpha = 0.2) +
  geom_line(col = "red") +
  ylab("hueco térmico") +
  xlab("") +
  facet_wrap(~cluster) +
  scale_x_datetime(breaks = breaks_width("6 hour"),labels=date_format("%H:%M")) +
  theme_bw()
{{< / highlight >}}


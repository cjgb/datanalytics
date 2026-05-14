---
author: Carlos J. Gil Bellosta
categories:
- llms
- estadística
date: 2026-05-21
description: Una revisión crítica a ese estudio del NIST sobre el retraso de los LLMs
  chinos con respecto a los de EEUU.
lastmod: '2026-05-14T16:23:02.865473'
related:
- 2026-03-30-cortos.md
- 2023-10-05-llms-historia.md
- 2025-01-21-cortos-llms.md
- 2024-03-21-cortos.md
- 2025-09-09-cortos-llms.md
tags:
- llms
- estadística
- irt
title: Los LLMs chinos, ¿ocho meses por detrás del estado del arte?
url: /2026/05/21/llms-chinos/
---

Uno de los indicadores que sigue la gente hoy en día ---y yo con particular interés--- es el de «cuántos meses por detrás» de los mejores LLMs estadounidenses se encuentran los modelos chinos.

Al respecto, el NIST (_National Institute of Standards and Technology_ de los EEUU) ha publicado el estudio [_CAISI Evaluation of DeepSeek V4 Pro_](https://www.nist.gov/news-events/news/2026/05/caisi-evaluation-deepseek-v4-pro), que se resume en que el retraso es de ocho meses, y que contiene el gráfico

![](/img/2026/overall-ai-capability-2026.png#center)

que ilustra dichas conclusiones.

Por su interés, voy a sacarle punta al asunto.

El gráfico muestra las habilidades estimadas de una serie de LLMs aplicando el modelo 1LP de la [«teoría de la respuesta al ítem»](https://datanalytics.com/tags/irt/), que no es otra cosa que la regresión logística

$$Y_{ij} \sim \text{Bernoulli}(\text{invlogit}(\theta_i - b_j))$$

donde $i$ indexa modelos; $j$, problemas y $Y_{ij}$ indica si el modelo $i$ pudo resolver el problema $j$. Así las cosas, el coeficiente $b_j$ representa la dificultad del problema $j$ y $\theta_i$ es la estimación de la habilidad del modelo $i$.

(Nótese que el problema, tal como está planteado, no tiene solución única: exige que los $\theta_i$ se anclen a un valor de referencia para que los coeficientes sean «identificables»; véase [este artículo](/2023/07/04/3pl-numpyro/) para más detalles.)

Lo que representa el gráfico son las $\theta_i$ (más sus intervalos de confianza y unas rectas de regresión por nacionalidad).

El pie del gráfico original dice:

> Cada 200 puntos de incremento en el eje vertical corresponde a un incremento de tres veces en los _odds_ de resolver una determinada tarea.

Pero como muchos humanos no entendemos de _odds_, he construido el gráfico

![](/img/2026/triple-odds.png#center)

que hace corresponder a cada $p$ la que tiene el triple de _odds_, usando

```r
calc_triple_odds_prob <- function(p) {
  odds <- p / (1 - p)
  new_odds <- 3 * odds
  new_odds / (1 + new_odds)
}

p0 <- seq(0, 1, length.out = 100)
p1 <- calc_triple_odds_prob(p0)

plot(p0, p1, type = "l", xlab = "prob original", ylab = "prob with triple odds")
```

«Como no puede ser de otra manera», la función satura cuando $p$ es alto.

Esto tiene su relevancia cuando [la gente opina cosas como que](https://thezvi.wordpress.com/2026/05/07/ai-167-the-prior-restraint-era-begins/#:~:text=If%20you%20fully%20believe%20this%20graph%2C%20v4%20just%20caught%20up%20to%20GPT%2D5%2C%20which%20puts%20it%208%20months%20behind%20with%20a%20widening%20gap.)

> [Deepseek] v4 acaba de alcanzar a GPT-5, lo que lo sitúa 8 meses por detrás de una brecha creciente.

Pero la brecha es creciente (o no) dependiendo de la escala elegida en el eje vertical. Si se representan los _odds_, ciertamente lo es. Si se representaran las probabilidades, dependería. Lo serían si las $p$ fuesen bajas. Si fuesen altas, ocurriría lo contrario: la brecha parecería cerrarse.

La verdad, no sé por dónde andan estas probabilidades en los datos utilizados. Sospecharía que las probabilidades son altas por las noticias que se oyen acerca de la «saturación» de los _benchmarks_ tradicionales. Un indicio lo proporciona la tabla (extraída del estudio original)

![](/img/2026/overall-ai-capability-2026-irt.png#center)

que da una idea de por dónde podrían ir los tiros.

Además, he creado dos gráficos alternativos cambiando la escala a probabilidades en dos escenarios posibles: que un «elo» de 400 corresponda a una probabilidad de .1 y de .9 respectivamente y me ha salido, Claude mediante, esto:

![](/img/2026/overall-ai-capability-2026-probs.png#center)

**Nota**: no he verificado el código proporcionado por Claude, pero es consistente con lo esperado. Lo reproduzco debajo.

## Coda

Todo lo anterior es una aplicación de un principio erístico general. Las «brechas» en gráficos como el primero de la entrada pueden ensancharse o reducirse en el tiempo dependiendo de la escala elegida. Elegir _odds_, probabilidades o, incluso, funciones de utilidad, puede cambiar el aspecto cualitativo del resultado de un estudio sin necesidad de incurrir en falsedades.

Hay que tener en cuenta que, acerca de la asequibilidad del concepto de logaritmo para el español de la calle, Claude _dixit_:

> Solo el 4,1% de los adultos españoles alcanza el Nivel 4 o 5 en competencia numérica, la proporción más baja de entre los países participantes junto con Italia (4,5%). La mayor parte de los adultos en España se sitúa en el Nivel 2, mientras que la media de la OCDE alcanza su punto máximo en el Nivel 3. Además, aproximadamente uno de cada tres adultos en España se encuentra en los niveles más bajos de competencia numérica.
>
> Los logaritmos se consideran un concepto de Nivel 4-5 (aparecen en tareas que implican relaciones exponenciales, escalas como la de Richter o los decibelios, etc.). Basándose en esa cifra del 4,1%, muy pocos adultos españoles se sentirían cómodos trabajando con logaritmos, incluso si una fracción mayor pudiera reconocer vagamente la palabra.

## Apéndice

El código que Claude me ha proporcionado para construir el último de los gráficos de la entrada es:

```r
library(tidyverse)
library(lubridate)
library(patchwork)

models <- tribble(
  ~model,                 ~country, ~date,          ~elo,
  "OpenAI GPT-4o",        "US",     "2024-06-01",     25,
  "OpenAI o1",            "US",     "2024-09-01",    390,
  "OpenAI o3-mini",       "US",     "2024-11-01",    420,
  "Anthropic 3.6 Sonnet", "US",     "2025-01-15",     30,
  "OpenAI o3",            "US",     "2025-01-20",    470,
  "Anthropic Opus 4",     "US",     "2025-03-01",    500,
  "OpenAI GPT-5",         "US",     "2025-08-01",    810,
  "OpenAI GPT-5.2",       "US",     "2025-10-01",    870,
  "OpenAI GPT-5.4",       "US",     "2026-01-10",    940,
  "Anthropic Opus 4.6",   "US",     "2026-01-15",    870,
  "OpenAI GPT-5.5",       "US",     "2026-04-01",   1230,
  "DeepSeek R1",          "PRC",    "2025-03-01",    220,
  "Alibaba QwQ",          "PRC",    "2025-04-01",    230,
  "Alibaba Qwen3",        "PRC",    "2025-04-15",    290,
  "DeepSeek R1-0528",     "PRC",    "2025-05-01",    340,
  "DeepSeek V3.1",        "PRC",    "2025-07-01",    430,
  "Kimi K2-Thinking",     "PRC",    "2026-01-10",    470,
  "Kimi K2.5",            "PRC",    "2026-01-15",    510,
  "DeepSeek V4 Pro",      "PRC",    "2026-04-01",    800
) |>
  mutate(date = as_date(date))

# ── Logistic mapping ──────────────────────────────────────────────────────────
# p(s) = 1 / (1 + exp(-(s - s0) / sigma))
# We keep sigma = 400 (standard Elo divisor * log(10)/1, same scale)
# but solve s0 from: p_anchor = logistic((anchor_score - s0) / sigma)
# => s0 = anchor_score - sigma * logit(p_anchor)   [natural log logit]

sigma <- 400 / log(10)   # converts base-10 Elo to base-e: ~173.7

elo_to_p <- function(elo, s0, sig = sigma) {
  1 / (1 + exp(-(elo - s0) / sig))
}

anchor_to_s0 <- function(p_anchor, anchor_elo = 400, sig = sigma) {
  anchor_elo - sig * log(p_anchor / (1 - p_anchor))
}

s0_low  <- anchor_to_s0(0.1)   # p(400) = 0.1  → s0 ≈ 800, so 400 is weak
s0_high <- anchor_to_s0(0.9)   # p(400) = 0.9  → s0 ≈ 0,  so 400 is strong

cat("s0_low =", round(s0_low), "  s0_high =", round(s0_high), "\n")
cat("Check low:  p(400)=", round(elo_to_p(400, s0_low), 3),
    " p(25)=",  round(elo_to_p(25,  s0_low), 3),
    " p(1230)=", round(elo_to_p(1230, s0_low), 3), "\n")
cat("Check high: p(400)=", round(elo_to_p(400, s0_high), 3),
    " p(25)=",  round(elo_to_p(25,  s0_high), 3),
    " p(1230)=", round(elo_to_p(1230, s0_high), 3), "\n")

df <- models |>
  mutate(
    p_low  = elo_to_p(elo, s0_low),
    p_high = elo_to_p(elo, s0_high)
  )

# ── Trend lines ───────────────────────────────────────────────────────────────
fit_trend <- function(data) {
  data |>
    group_by(country) |>
    group_modify(~ {
      fit <- lm(elo ~ as.numeric(date), data = .x)
      date_seq <- seq(min(.x$date), max(.x$date), by = "week")
      tibble(
        date    = date_seq,
        elo_fit = predict(fit, newdata = data.frame(date = as.numeric(date_seq)))
      )
    })
}

trend_df <- fit_trend(df)
pal <- c("US" = "#3A7EC6", "PRC" = "#C44E3A")

make_plot <- function(df, trend_df, p_col, s0, title_suffix) {
  trend_df <- trend_df |>
    mutate(p_fit = elo_to_p(elo_fit, s0))

  df_plot <- df |> rename(p_val = all_of(p_col))

  ggplot() +
    geom_line(
      data = trend_df,
      aes(x = date, y = p_fit, color = country, group = country),
      linetype = "dashed", linewidth = 0.8, alpha = 0.7
    ) +
    geom_point(
      data = df_plot,
      aes(x = date, y = p_val, color = country),
      size = 3
    ) +
    scale_color_manual(values = pal, labels = c("PRC" = "PRC", "US" = "U.S.")) +
    scale_x_date(
      date_breaks = "6 months", date_labels = "%b %Y",
      limits = as_date(c("2024-01-01", "2027-01-01"))
    ) +
    scale_y_continuous(limits = c(0, 1), labels = scales::percent_format(accuracy = 1)) +
    labs(
      title    = paste0("Overall AI Capability — ", title_suffix),
      subtitle = "Probability of succeeding at a given task well (controlling for difficulty)",
      x = "Release Date", y = "p (capability)", color = NULL,
      caption = "Source: U.S. Center for AI Standards and Innovation"
    ) +
    theme_minimal(base_size = 13) +
    theme(
      plot.title = element_text(face = "bold", size = 14),
      legend.position = "top",
      panel.grid.minor = element_blank(),
      axis.text.x = element_text(angle = 30, hjust = 1)
    )
}

p1 <- make_plot(df, trend_df, "p_low",  s0_low,  "anchor: p(400) = 0.1")
p2 <- make_plot(df, trend_df, "p_high", s0_high, "anchor: p(400) = 0.9")

combined <- p1 / p2 +
  plot_annotation(
    theme = theme(plot.background = element_rect(fill = "white", color = NA))
  )

ggsave("/tmp/ai_capability_probability.png", combined, width = 10, height = 10, dpi = 150)

```
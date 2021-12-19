---
author: Carlos J. Gil Bellosta
date: 2020-03-27 09:13:00+00:00
draft: false
title: CausalImpact me ha complacido mucho

url: /2020/03/27/causalimpact-me-ha-complacido-mucho/
categories:
- ciencia de datos
- consultoría
- r
- causalidad
tags:
- causalimpact
- paquetes
- r
- causalidad
---

Estoy aquí analizando datos para un cliente interesado en estudiar si como consecuencia de uno de esos impuestos _modennos_ con los que las administraciones nos quieren hacer más sanos y robustos. En concreto, le he echado un vistazo a si el impuesto ha encarecido el precio de los productos gravados (sí) y si ha disminuido su demanda (no) usando [`CausalImpact`](https://CRAN.R-project.org/package=CausalImpact) y me ha complacido mucho que la salida de `summary(model, "report")` sea, literalmente, esta:

>During the post-intervention period, the response variable had an average value of approx. 0.89. In the absence of an intervention, we would have expected an average response of 0.91. The 95% interval of this counterfactual prediction is [0.83, 0.99]. Subtracting this prediction from the observed response yields an estimate of the causal effect the intervention had on the response variable. This effect is -0.015 with a 95% interval of [-0.095, 0.060]. For a discussion of the significance of this effect, see below.
>
> Summing up the individual data points during the post-intervention period (which can only sometimes be meaningfully interpreted), the response variable had an overall value of 22.35. Had the intervention not taken place, we would have expected a sum of 22.73. The 95% interval of this prediction is [20.85, 24.72].
>
> The above results are given in terms of absolute numbers. In relative terms, the response variable showed a decrease of -2%. The 95% interval of this percentage is [-10%, +7%].
>
> This means that, although it may look as though the intervention has exerted a negative effect on the response variable when considering the intervention period as a whole, this effect is not statistically significant, and so cannot be meaningfully interpreted. The apparent effect could be the result of random fluctuations that are unrelated to the intervention. This is often the case when the intervention period is very long and includes much of the time when the effect has already worn off. It can also be the case when the intervention period is too short to distinguish the signal from the noise. Finally, failing to find a significant effect can happen when there are not enough control variables or when these variables do not correlate well with the response variable during the learning period.
>
> The probability of obtaining this effect by chance is p = 0.364. This means the effect may be spurious and would generally not be considered statistically significant.

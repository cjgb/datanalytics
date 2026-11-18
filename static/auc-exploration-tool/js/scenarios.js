/* scenarios.js: guided lessons for the simulator (pure data; depends on nothing). */
"use strict";
/* ---------- Scenarios (guided lessons) ---------- */
const N01 = { family: "normal", p: { mu: 0, sd: 1 } };
const SCENARIOS = {
  textbook: {
    label: "Textbook binormal (AUC 0.76)",
    Y: { family: "normal", p: { mu: 1, sd: 1 } }, N: N01, nY: 500, nN: 500,
    text: "Y cases score ~ Normal(1, 1) and N cases ~ Normal(0, 1): the classes are one standard deviation apart. " +
      "The true AUC is Φ(1/√2) ≈ 0.760, which means a random Y case outscores a random N case 76% of the time.",
    tryIt: "Press <b>New sample ↻</b> a few times and watch the sample ROC wobble around the dashed true ROC. Then <b>Run R experiments</b> " +
      "below to see the whole sampling distribution of the AUC."
  },
  unequal: {
    label: "Same AUC, different classifier",
    Y: { family: "normal", p: { mu: 1.904, sd: 2.5 } }, N: N01, nY: 500, nN: 500, pin: "textbook",
    text: "Y ~ Normal(1.90, 2.5²) vs N ~ Normal(0, 1). The true AUC is <b>0.760</b>, exactly the textbook value (the pinned green curve). " +
      "But the classifiers differ. This one is far better at low false-positive rates (at FPR = 1% its TPR is ≈ 43% vs ≈ 9%), " +
      "while in the top-right corner its ROC drops <em>below</em> the diagonal: many Y cases score lower than almost every N case.",
    tryIt: "If you can only tolerate a few false alarms, these two models with the same AUC are not equal at all. Move the threshold " +
      "and compare the operating points. Look at the part of the ROC curve you would actually use."
  },
  subgroup: {
    label: "Hidden subgroup (AUC 0.76 again)",
    Y: { family: "mixture", p: { w: 0.46, mu1: 0, sd1: 1, mu2: 3, sd2: 1 } }, N: N01, nY: 500, nN: 500, pin: "textbook",
    text: "46% of Y cases look exactly like N cases (a subtype the model can't see); the other 54% score around 3. The true AUC is " +
      "<b>0.761</b>, the textbook value again. The ROC climbs steeply and then runs parallel to the diagonal: for the hidden subgroup, " +
      "no threshold does better than a coin flip.",
    tryIt: "Compare with the pinned textbook ROC. Move the threshold: sensitivity stalls near 54% long before specificity gives way. " +
      "Nothing in the single AUC number warns you about this."
  },
  rare: {
    label: "Rare positives (1% prevalence)",
    Y: { family: "normal", p: { mu: 2, sd: 1 } }, N: N01, nY: 50, nN: 5000, histMode: "counts",
    text: "50 Y cases vs 5,000 N cases, classes 2 SD apart (true AUC 0.921). The AUC is blind to prevalence, so it looks excellent. " +
      "The confusion matrix shows the other side: at most thresholds, false positives outnumber true positives, so the PPV is poor. " +
      "The CI width is driven by the 50 Y cases, not by the 5,050 total.",
    tryIt: "With the histogram on <b>counts</b>, the Y cases almost disappear. Set n<sub>N</sub> = 50: the AUC barely moves, " +
      "but the PPV at the same threshold jumps."
  },
  small: {
    label: "Small study (15 per class)",
    Y: { family: "normal", p: { mu: 1, sd: 1 } }, N: N01, nY: 15, nN: 15,
    text: "Same distributions as the textbook case (true AUC 0.760) but only 15 cases per class. A single study this small can " +
      "report almost anything between about 0.6 and 0.9.",
    tryIt: "<b>Run R experiments</b>: look at the spread of AUCs, and check whether the 95% CIs really contain the true AUC 95% of the time. " +
      "Tick the bootstrap box to compare the two CI methods."
  },
  chance: {
    label: "Barely better than chance",
    Y: { family: "normal", p: { mu: 0.1, sd: 1 } }, N: N01, nY: 100, nN: 100,
    text: "Y ~ Normal(0.1, 1) vs N ~ Normal(0, 1): true AUC 0.528. With 100 cases per class, is the model " +
      "'significantly better than chance'? Usually not, and an unlucky sample may even give AUC &lt; 0.5.",
    tryIt: "<b>Run R experiments</b> and read the <em>power vs chance</em> box (the share of studies whose CI excludes 0.5). Then set " +
      "both sample sizes to 5,000: with enough data even this nearly useless model is 'significant'."
  },
  ranks: {
    label: "Only the ranking matters (transforms)",
    Y: { family: "beta", p: { a: 4, b: 2 } }, N: { family: "beta", p: { a: 2, b: 4 } }, nY: 500, nN: 500,
    text: "The scores look like predicted probabilities: Y ~ Beta(4, 2), N ~ Beta(2, 4). The AUC uses only the <em>order</em> of the scores, so any " +
      "strictly increasing transform leaves the ROC curve and AUC exactly unchanged, however much it distorts the scores.",
    tryIt: "Change <b>Score transform</b> to s³, exp or logistic: the histograms change shape but the AUC doesn't change in any digit. " +
      "With the logistic transform every 'probability' lies between 0.50 and 0.73, a badly miscalibrated model with the same AUC. " +
      "Then try −s: reversing the ranking gives 1 − AUC."
  }
};
const CUSTOM_LESSON = {
  label: "Custom",
  text: "Pick any distribution for each class. The dashed curves are the truth implied by your choice; the solid ones come from one finite sample.",
  tryIt: "Pin the current true ROC (📌) before changing parameters, so you can compare ROC shapes with similar AUCs."
};

import React from 'react';
import { Callout, Table } from '../components/Visual.jsx';

export default {
  id: 5,
  title: 'Cell Cycle: Mitosis & Meiosis',
  subtitle: 'How cells divide for growth (mitosis) and for sex (meiosis) (SC.912.L.16.14–16.17)',
  blocks: [
    {
      id: 'cell-cycle',
      title: 'The Cell Cycle',
      subtitle: 'Interphase + M phase',
      images: [
        { src: 'ch05_cell_cycle/05_officialeoc_p4.png', alt: 'Cell cycle diagram — source: Biology1-EOC.pdf p.4', caption: 'The phases of the cell cycle' },
        { src: 'ch05_cell_cycle/06_midterm_p5.png', alt: 'Cell cycle stages — source: Honors Bio Midterm', caption: 'G1 → S → G2 → M' }
      ],
      content: (
        <>
          <p>Most of a cell\'s life is spent in <strong>interphase</strong>, where it grows, copies its DNA, and prepares to divide:</p>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li><strong>G₁:</strong> growth, normal cell function.</li>
            <li><strong>S:</strong> DNA replication (each chromosome becomes two sister chromatids).</li>
            <li><strong>G₂:</strong> growth, organelle duplication, preparation for mitosis.</li>
            <li><strong>M phase:</strong> mitosis (nuclear division) + cytokinesis (cytoplasm division).</li>
          </ul>
          <Callout kind="info" title="Checkpoints">G₁/S, G₂/M, and a metaphase checkpoint stop the cycle if DNA is damaged or improperly assembled. <strong>Cancer</strong> = failure of these checkpoints, leading to uncontrolled division.</Callout>
        </>
      )
    },
    {
      id: 'mitosis',
      title: 'Mitosis: Producing Identical Daughters',
      subtitle: 'PMAT — one division, two diploid copies',
      images: [
        { src: 'ch05_cell_cycle/07_unit6_p1_i0.jpeg', alt: 'Mitosis stages illustration — source: Honors Bio Unit 6', caption: 'Prophase / metaphase / anaphase / telophase' },
        { src: 'ch05_cell_cycle/12_unit6_p2_i1.png', alt: 'Sister chromatids alignment — source: Honors Bio Unit 6', caption: 'Sister chromatids at metaphase' }
      ],
      content: (
        <>
          <Table
            headers={['Phase', 'What\'s happening']}
            rows={[
              ['Prophase', 'Chromatin condenses into visible chromosomes; nuclear envelope breaks down; spindle forms.'],
              ['Metaphase', 'Chromosomes line up at the cell\'s equator (metaphase plate).'],
              ['Anaphase', 'Sister chromatids separate; pulled to opposite poles.'],
              ['Telophase + Cytokinesis', 'Nuclear envelopes reform; cytoplasm divides → two genetically identical diploid daughter cells.']
            ]}
          />
          <Callout kind="tip" title="Mnemonic">PMAT — Prophase, Metaphase, Anaphase, Telophase. Then Cytokinesis cleaves the cell in two.</Callout>
          <p>Result: <strong>2 diploid cells, genetically identical to the parent.</strong> Mitosis is used for growth, repair, and asexual reproduction.</p>
        </>
      )
    },
    {
      id: 'meiosis',
      title: 'Meiosis: Producing Gametes',
      subtitle: 'Two divisions, four haploid cells',
      images: [
        { src: 'ch05_cell_cycle/02_eocbank_img14.jpeg', alt: 'Meiosis I/II stages — source: Bio EOC bank', caption: 'Two division cycles' },
        { src: 'ch05_cell_cycle/16_unit6_p3_i3.jpeg', alt: 'Meiosis chromosome behavior — source: Honors Bio Unit 6', caption: 'Tetrads, crossing over, separation' }
      ],
      content: (
        <>
          <p>Meiosis happens in reproductive cells to produce <strong>gametes</strong> (sperm and egg). It includes <strong>two division rounds</strong>:</p>
          <Table
            headers={['Division', 'What separates', 'Outcome']}
            rows={[
              ['Meiosis I', 'Homologous pairs separate', '2 haploid cells (still have sister chromatids)'],
              ['Meiosis II', 'Sister chromatids separate', '4 haploid gametes']
            ]}
          />
          <p>Two key sources of genetic variation occur during Meiosis I:</p>
          <ul className="list-disc ml-6 text-sm space-y-1.5">
            <li><strong>Crossing over (Prophase I):</strong> homologous chromosomes exchange DNA segments → new allele combinations.</li>
            <li><strong>Independent assortment (Metaphase I):</strong> homologous pairs line up randomly → either parent\'s chromosome can go to either pole, giving 2²³ = ~8.4 million combinations in humans.</li>
          </ul>
          <p>A third source — <strong>random fertilization</strong> — combines two such gametes for ~70 trillion possible offspring genotypes.</p>
        </>
      )
    },
    {
      id: 'mitosis-vs-meiosis',
      title: 'Mitosis vs. Meiosis: Side-by-Side',
      subtitle: 'The single most-tested comparison',
      images: [
        { src: 'ch05_cell_cycle/04_eocbank_img31.jpeg', alt: 'Comparison chart — source: Bio EOC bank', caption: 'Side-by-side comparison' }
      ],
      content: (
        <>
          <Table
            headers={['', 'Mitosis', 'Meiosis']}
            rows={[
              ['# Divisions', '1', '2'],
              ['# Daughter cells', '2', '4'],
              ['Ploidy of daughters', 'Diploid (2n)', 'Haploid (n)'],
              ['Genetically identical to parent?', 'Yes', 'No (variation)'],
              ['Crossing over?', 'No', 'Yes'],
              ['Where', 'Body (somatic) cells', 'Gamete-producing (germ) cells'],
              ['Purpose', 'Growth, repair, asexual reproduction', 'Sexual reproduction']
            ]}
          />
          <Callout kind="info" title="Why this matters in evolution">Genetic variation from meiosis lets populations adapt to changing environments. A purely asexual species (mitosis only) is genetically uniform — a single new pathogen can wipe out the entire population.</Callout>
        </>
      )
    },
    {
      id: 'cancer',
      title: 'When Things Go Wrong: Cancer',
      subtitle: 'Lost control of cell-cycle regulation',
      content: (
        <>
          <p>Cancer cells have lost the checkpoint controls that stop normal cells from dividing. They divide uncontrollably, ignoring the "stop" signals that tell normal cells to enter G₀ (rest) or undergo apoptosis (programmed cell death). The two main mutation classes:</p>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li><strong>Proto-oncogene mutations</strong> — turn growth signals "always on" (like a stuck gas pedal).</li>
            <li><strong>Tumor-suppressor gene mutations</strong> — disable the brakes (e.g., p53).</li>
          </ul>
          <Callout kind="danger" title="Why mutations accumulate">A single mutation rarely causes cancer. It usually takes 4–6 hits in different control genes. That\'s why cancer risk increases with age.</Callout>
        </>
      )
    }
  ],
  keyReview: {
    vocab: [
      { term: 'Cell cycle', def: 'Interphase (G₁ → S → G₂) + M phase (mitosis + cytokinesis).' },
      { term: 'Interphase', def: 'Period of growth and DNA replication between divisions.' },
      { term: 'Mitosis', def: 'Nuclear division producing 2 diploid identical daughters.', tag: 'CORE', tagColor: 'sky' },
      { term: 'Meiosis', def: 'Two divisions producing 4 haploid genetically distinct gametes.', tag: 'CORE', tagColor: 'sky' },
      { term: 'Chromosome', def: 'A condensed, threadlike DNA-protein structure.' },
      { term: 'Sister chromatid', def: 'One of two identical halves of a duplicated chromosome.' },
      { term: 'Homologous chromosomes', def: 'A pair of chromosomes — one from each parent — carrying the same genes.' },
      { term: 'Diploid (2n)', def: 'Two sets of chromosomes — one from each parent.' },
      { term: 'Haploid (n)', def: 'One set of chromosomes — gametes only.' },
      { term: 'Crossing over', def: 'Exchange of DNA segments between homologs in prophase I.' },
      { term: 'Independent assortment', def: 'Random orientation of homologs at metaphase I.' },
      { term: 'Cytokinesis', def: 'Division of the cytoplasm.' },
      { term: 'Apoptosis', def: 'Programmed cell death.' },
      { term: 'Cancer', def: 'Disease of uncontrolled cell division due to checkpoint failure.' }
    ],
    laws: [
      { name: 'Chromosome rule of meiosis', desc: 'Meiosis I separates homologs; Meiosis II separates sister chromatids — same as mitosis.' }
    ],
    methods: [
      { name: 'PMAT mnemonic', expand: 'Prophase → Metaphase → Anaphase → Telophase', desc: 'Stages of mitosis (and Meiosis I and II).' },
      { name: 'Diploid → Haploid drill', desc: 'Mitosis: 2n → 2n. Meiosis: 2n → n. Fertilization: n + n → 2n.' }
    ],
    diagrams: []
  },
  questions: [
    {
      q: 'Which best compares the processes of mitosis and meiosis?',
      type: 'mcq',
      choices: [
        'Mitosis is one division → diploid daughters; meiosis is two divisions → haploid gametes.',
        'Mitosis is one division → haploid gametes; meiosis is two divisions → diploid daughters.',
        'Mitosis is two divisions → diploid daughters; meiosis is one division → haploid gametes.',
        'Mitosis is two divisions → haploid gametes; meiosis is one division → diploid daughters.'
      ],
      correct: 0,
      difficulty: 'M',
      explanation: 'One canonical statement: mitosis = 1 division → 2 diploid identical daughters; meiosis = 2 divisions → 4 haploid varied gametes.'
    },
    {
      q: 'Which best explains why meiosis results in greater genetic diversity than mitosis?',
      type: 'mcq',
      choices: [
        'After meiosis, daughter cells are diploid and have twice as much genetic material.',
        'After meiosis, haploid daughter cells are fertilized, doubling their chromosomes.',
        'During meiosis, chromosomes assort themselves independently, allowing many possible combinations.',
        'During meiosis, more daughter cells are produced, increasing fertilization odds.'
      ],
      correct: 2,
      difficulty: 'M',
      explanation: 'Independent assortment in metaphase I plus crossing over in prophase I together generate enormous combinatorial variation — that\'s what makes siblings non-identical.'
    },
    {
      q: 'Which best describes how crossing over leads to increased genetic diversity?',
      type: 'mcq',
      choices: [
        'During prophase I, DNA replicates and homologous chromosomes trade places before metaphase.',
        'During prophase I, DNA segments are exchanged between homologous chromosomes, resulting in different allele combinations.',
        'During prophase II, fragments of DNA break off and attach to other chromosomes, changing gene sequences.',
        'During prophase II, sister chromatids separate and exchange DNA segments along the way.'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'Crossing over (chiasma) happens in prophase I between homologs — not between sister chromatids. The exchanged segments rearrange existing alleles into new combinations.'
    },
    {
      q: 'Some organisms reproduce asexually through mitosis; others reproduce sexually with meiosis. Which is most beneficial during a drastic environmental change?',
      type: 'mcq',
      choices: [
        'Meiosis — more daughter cells increase the population.',
        'Meiosis — more genetic variation, so some individuals likely survive.',
        'Mitosis — more genetic mutations may be advantageous.',
        'Mitosis — more offspring produced quickly increases survival odds.'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'Drastic change favors variation. Sexual reproduction shuffles alleles, giving the population a wide range of phenotypes. Some will be lucky enough to survive the new conditions.'
    },
    {
      q: 'A human skin cell has 46 chromosomes. After mitosis, how many chromosomes does each daughter cell have?',
      type: 'mcq',
      choices: ['23', '46', '92', '0'],
      correct: 1,
      difficulty: 'E',
      explanation: 'Mitosis produces two daughter cells, each with the SAME chromosome number as the parent (46 in humans). Meiosis would halve this to 23.'
    },
    {
      q: 'A human gamete (sperm or egg) is the result of meiosis. How many chromosomes does it contain?',
      type: 'mcq',
      choices: ['23', '46', '92', 'Variable'],
      correct: 0,
      difficulty: 'E',
      explanation: 'Meiosis halves the chromosome number from 46 (diploid) to 23 (haploid). Fertilization restores 46.'
    },
    {
      q: 'During which mitotic phase do sister chromatids separate?',
      type: 'mcq',
      choices: ['Prophase', 'Metaphase', 'Anaphase', 'Telophase'],
      correct: 2,
      difficulty: 'E',
      explanation: '"Anaphase" — sister chromatids are pulled apart toward opposite poles by the spindle.'
    },
    {
      q: 'A cell with mutations in BOTH copies of the tumor-suppressor gene p53 is most likely to',
      type: 'mcq',
      choices: [
        'Stop dividing entirely.',
        'Continue dividing despite DNA damage, increasing cancer risk.',
        'Switch to meiosis.',
        'Become haploid.'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'p53 normally pauses the cell cycle to repair damage or trigger apoptosis. Without functional p53, damaged cells keep dividing — a hallmark of cancer.'
    },
    {
      q: 'A scientist observes a cell with chromosomes lined up single file at the equator, paired only with their sister chromatids. Which division and phase?',
      type: 'mcq',
      choices: ['Mitotic metaphase', 'Meiosis I metaphase', 'Meiosis II metaphase', 'Anaphase II'],
      correct: 0,
      difficulty: 'M',
      explanation: 'In mitotic metaphase AND meiotic metaphase II, chromosomes line up single file. In meiosis I, homologs are paired (TETRADS). The "single file" + "no homolog pairs" = mitosis OR meiosis II. If the question implies a regular somatic cell, mitosis.'
    },
    {
      q: 'Which event in meiosis leads to the largest amount of genetic variation per single fertilization event?',
      type: 'mcq',
      choices: [
        'DNA replication during S phase.',
        'Independent assortment of homologous chromosomes.',
        'Cytokinesis.',
        'Sister chromatid separation in anaphase II.'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'In humans, independent assortment alone gives 2²³ ≈ 8.4 million combinations from one parent — far exceeding the variation from any one event of crossing over.'
    }
  ]
};

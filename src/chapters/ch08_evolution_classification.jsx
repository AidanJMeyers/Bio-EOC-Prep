import React from 'react';
import { Callout, Table } from '../components/Visual.jsx';

export default {
  id: 8,
  title: 'Evolution & Classification',
  subtitle: 'Natural selection, evidence, speciation, taxonomy (SC.912.L.15.1, L.15.6, L.15.13–15.15)',
  blocks: [
    {
      id: 'natural-selection',
      title: 'Natural Selection',
      subtitle: 'Darwin\'s mechanism for evolution',
      images: [
        { src: 'ch08_evolution_classification/03_eocbank_img4.png', alt: 'Natural selection example — source: Bio EOC bank', caption: 'Variation, selection, inheritance' }
      ],
      content: (
        <>
          <p>Natural selection requires four conditions:</p>
          <ol className="list-decimal ml-6 text-sm space-y-1">
            <li><strong>Variation</strong> — individuals in a population differ.</li>
            <li><strong>Heritability</strong> — those differences are at least partly genetic.</li>
            <li><strong>Differential reproduction</strong> — some variants survive and reproduce more than others.</li>
            <li><strong>Time / generations</strong> — across many generations, beneficial alleles increase in frequency.</li>
          </ol>
          <Callout kind="warn" title="Common misconception">Individuals do NOT evolve. Populations evolve. Individuals are born with whatever alleles they have; only the gene pool of the population shifts over generations.</Callout>
          <p>Selection pressure can be: <strong>directional</strong> (one extreme favored — antibiotic resistance), <strong>stabilizing</strong> (middle favored — human birth weight), or <strong>disruptive</strong> (both extremes favored over middle — finch beak sizes).</p>
        </>
      )
    },
    {
      id: 'evidence',
      title: 'Evidence for Evolution',
      subtitle: 'Multiple independent lines',
      images: [
        { src: 'ch08_evolution_classification/07_practicetest_p11.png', alt: 'Comparative anatomy — source: official practice test p.11', caption: 'Human and chimpanzee hands and feet' },
        { src: 'ch08_evolution_classification/08_officialeoc_p10.png', alt: 'Hominid fossils — source: Biology1-EOC.pdf p.10', caption: 'Fossil hominids' }
      ],
      content: (
        <>
          <Table
            headers={['Evidence type', 'What it shows']}
            rows={[
              ['Fossil record', 'Transitional forms; sequence of ancient species; e.g., Tiktaalik (fish→tetrapod), Archaeopteryx (dinosaur→bird).'],
              ['Comparative anatomy', 'Homologous structures (whale fin = bat wing = human arm) reveal common ancestry.'],
              ['Vestigial structures', 'Reduced/non-functional parts (whale hip bones, human appendix) point to ancestors that used them.'],
              ['Embryology', 'Vertebrate embryos look strikingly similar in early stages.'],
              ['Molecular biology', 'DNA, RNA, and protein sequences are more similar between closely related species.'],
              ['Biogeography', 'Geographic distribution of species reflects shared history (Galápagos finches).'],
              ['Direct observation', 'Antibiotic resistance, peppered moths, Darwin\'s finch beak changes during droughts.']
            ]}
          />
          <Callout kind="tip" title="The amino acid sequence test">If two species\' protein sequences differ by 1 amino acid out of 100, they probably share a recent common ancestor. If they differ by 50, they diverged long ago.</Callout>
        </>
      )
    },
    {
      id: 'mechanisms-beyond',
      title: 'Mechanisms of Evolution Beyond Selection',
      subtitle: 'Genetic drift, gene flow, mutation',
      images: [
        { src: 'ch08_evolution_classification/04_eocbank_img5.png', alt: 'Mechanisms of evolution — source: Bio EOC bank', caption: 'Selection, drift, flow, mutation' }
      ],
      content: (
        <>
          <Table
            headers={['Mechanism', 'What it does', 'Example']}
            rows={[
              ['Mutation', 'Creates new alleles', 'Random base changes during replication'],
              ['Natural selection', 'Filters alleles by fitness', 'Bird beak size in droughts'],
              ['Genetic drift', 'Random allele frequency changes (strong in small populations)', 'Bottleneck after volcanic eruption'],
              ['Gene flow', 'Migration moves alleles between populations', 'Black wolves migrate into a gray wolf population'],
              ['Non-random mating', 'Mate choice based on traits', 'Peacock tail selection']
            ]}
          />
        </>
      )
    },
    {
      id: 'speciation',
      title: 'Speciation',
      subtitle: 'How one species becomes two',
      images: [
        { src: 'ch08_evolution_classification/05_eocbank_img7.jpeg', alt: 'Speciation diagram — source: Bio EOC bank', caption: 'Allopatric speciation' }
      ],
      content: (
        <>
          <p>A <strong>species</strong> (biological species concept) is a group of organisms that can interbreed and produce fertile offspring in nature. <strong>Speciation</strong> is the formation of new species, usually through:</p>
          <ul className="list-disc ml-6 text-sm space-y-1.5">
            <li><strong>Allopatric speciation</strong> — geographic isolation (mountain rises, sea level changes, continental drift) → populations evolve independently → eventually become reproductively incompatible.</li>
            <li><strong>Sympatric speciation</strong> — reproductive isolation without geographic separation, often via behavior, chromosome doubling (polyploidy in plants), or niche differentiation.</li>
          </ul>
          <Callout kind="info" title="Reproductive isolating mechanisms">Habitat, temporal, behavioral (mating calls), mechanical, and gametic incompatibility — any of these can prevent two diverging lineages from interbreeding.</Callout>
        </>
      )
    },
    {
      id: 'classification',
      title: 'Classification: Three Domains, Six Kingdoms',
      subtitle: 'Taxonomy from domain to species',
      content: (
        <>
          <Table
            headers={['Level', 'Example (humans)']}
            rows={[
              ['Domain', 'Eukarya'],
              ['Kingdom', 'Animalia'],
              ['Phylum', 'Chordata'],
              ['Class', 'Mammalia'],
              ['Order', 'Primates'],
              ['Family', 'Hominidae'],
              ['Genus', 'Homo'],
              ['Species', 'sapiens']
            ]}
          />
          <Callout kind="tip" title="Mnemonic">"Dear King Philip Came Over For Good Spaghetti" — Domain, Kingdom, Phylum, Class, Order, Family, Genus, Species.</Callout>
          <p><strong>The three domains:</strong></p>
          <Table
            headers={['Domain', 'Cell type', 'Examples']}
            rows={[
              ['Bacteria', 'Prokaryote (peptidoglycan walls)', 'E. coli, cyanobacteria'],
              ['Archaea', 'Prokaryote (different membrane lipids; no peptidoglycan)', 'Methanogens, halophiles, thermophiles'],
              ['Eukarya', 'Eukaryote', 'Protists, fungi, plants, animals']
            ]}
          />
          <p>Bacteria and Archaea were originally lumped into one kingdom (Monera) but molecular biology revealed Archaea make their membranes differently and copy their DNA differently — they\'re only superficially similar to Bacteria.</p>
        </>
      )
    },
    {
      id: 'binomial',
      title: 'Binomial Nomenclature',
      subtitle: 'Scientific naming',
      content: (
        <>
          <p>Linnaeus\' two-name system: <em>Genus species</em> (italics or underlined; genus capitalized, species lowercase). E.g., <em>Homo sapiens</em>, <em>Canis lupus</em>, <em>Saccharomyces cerevisiae</em>.</p>
          <Callout kind="info" title="Why bother?">Common names are inconsistent (a "robin" in the U.S. is a different species than a "robin" in the U.K.). Scientific names are universal across languages and unambiguous.</Callout>
        </>
      )
    }
  ],
  keyReview: {
    vocab: [
      { term: 'Evolution', def: 'Change in allele frequencies of a population over generations.' },
      { term: 'Natural selection', def: 'Differential survival and reproduction based on heritable traits.' },
      { term: 'Adaptation', def: 'Heritable trait that enhances survival or reproduction.' },
      { term: 'Fitness', def: 'Reproductive success — number of offspring that survive to reproduce.' },
      { term: 'Variation', def: 'Differences among individuals; the raw material for selection.' },
      { term: 'Mutation', def: 'Source of new alleles in a population.' },
      { term: 'Genetic drift', def: 'Random change in allele frequency, strong in small populations.' },
      { term: 'Gene flow', def: 'Allele movement between populations via migration.' },
      { term: 'Bottleneck effect', def: 'Drastic reduction in population → reduced variation → genetic drift.' },
      { term: 'Founder effect', def: 'Small group establishes new population with non-random allele sample.' },
      { term: 'Species', def: 'Group of organisms that can interbreed to produce fertile offspring.' },
      { term: 'Speciation', def: 'Formation of new species (allopatric or sympatric).' },
      { term: 'Homologous structures', def: 'Similar structures from common ancestry (whale fin, bat wing).' },
      { term: 'Vestigial structure', def: 'Reduced or non-functional remnant from an ancestor.' },
      { term: 'Domain / Kingdom', def: 'Highest taxonomic levels.' },
      { term: 'Binomial nomenclature', def: 'Two-name scientific naming: Genus species.' }
    ],
    laws: [
      { name: 'Law of common descent', desc: 'All life on Earth shares a common ancestor.' },
      { name: 'Hardy–Weinberg equilibrium', desc: 'Allele frequencies stay constant only when no evolution occurs (no mutation, no selection, large population, no gene flow, random mating).' }
    ],
    methods: [
      { name: 'DKPCOFGS', expand: 'Dear King Philip Came Over For Good Spaghetti', desc: 'Domain–Kingdom–Phylum–Class–Order–Family–Genus–Species hierarchy.' },
      { name: 'Identify the mechanism', desc: 'Selection (fitness), drift (small pop, random), flow (migration), mutation (new allele).' }
    ],
    diagrams: []
  },
  questions: [
    {
      q: 'How is the theory of evolution supported by the comparison of skulls and skeletons of modern humans and extinct hominids?',
      type: 'mcq',
      choices: [
        'Skull and skeleton comparisons reveal the age of different hominid specimens.',
        'They provide evidence that humans and hominids interacted.',
        'Similarity in skull shapes, hands, and hips between hominids and humans supports a common ancestry.',
        'They explain why hominids became extinct while humans evolved.'
      ],
      correct: 2,
      difficulty: 'M',
      explanation: 'Shared anatomical features point to a shared ancestor. The fossil record shows transitional features connecting modern humans to earlier hominid forms.'
    },
    {
      q: 'A population of hibiscus plants on a Pacific island had most plants killed by a lava flow. Years later, the surviving population is mostly orange-flowered, even though other islands have a mix. The most likely explanation is',
      type: 'mcq',
      choices: [
        'Cross-pollination across the islands changed the percentages.',
        'Plants on this island had a higher mutation rate.',
        'The limited population size after the flow caused a bottleneck → genetic drift.',
        'Orange plants were better adapted to lava flows; natural selection eliminated white.'
      ],
      correct: 2,
      difficulty: 'M',
      explanation: 'A bottleneck (random survival of a small subset) is genetic drift. The "selection" reading would require flower color to actually help survive lava flows — implausible.'
    },
    {
      q: 'A few high-pitched-call frogs from an island are accidentally carried to the mainland (where most frogs use low-pitched calls). What is the most likely outcome?',
      type: 'mcq',
      choices: [
        'Island frogs are quickly eliminated because they sound different.',
        'Island frogs introduce new genes into the mainland gene pool, gradually changing pitch.',
        'Mainland frogs learn high-pitched calls and pass it on genetically.',
        'Mainland frogs respond to competition by mutating to high pitch.'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'This is gene flow — migration introducing new alleles. Frogs do not "learn and pass on genetically"; mutations are not directed by competition.'
    },
    {
      q: 'Black wolves migrate over a land bridge to a region of gray wolves. A few generations later, the population includes black-and-gray wolves. The mechanism is',
      type: 'mcq',
      choices: [
        'Simultaneous mutation in both populations.',
        'Gene flow — black wolf alleles entered the gray wolf gene pool.',
        'Genetic drift among gray wolves preferring gray mates.',
        'Adaptive coat color mimicry.'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'Migration of individuals brings their alleles into the recipient population — gene flow. The increase in black-fur frequency reflects new alleles entering the pool.'
    },
    {
      q: 'The Florida panther has been confined to a small area in South Florida due to habitat loss. The most likely long-term effect of this isolation is',
      type: 'mcq',
      choices: [
        'Boosted population through limited territory and reduced prey.',
        'Increased hunting success and population growth.',
        'Limited food sources causing extinction by starvation.',
        'Reduced genetic variation, leaving them vulnerable to disease and abnormalities.'
      ],
      correct: 3,
      difficulty: 'M',
      explanation: 'Small isolated populations lose genetic variation rapidly through drift and inbreeding, increasing vulnerability to disease, environmental change, and birth defects.'
    },
    {
      q: 'In which domain would it be EASIEST to determine phylogenetic relationships?',
      type: 'mcq',
      choices: [
        'Animalia — large enough to see morphology clearly.',
        'Archaea — most ancient with greatest genetic variation.',
        'Bacteria — small genomes can be sequenced quickly.',
        'Eukaryotes — they don\'t share genetic material except in sexual reproduction.'
      ],
      correct: 3,
      difficulty: 'H',
      explanation: 'Bacteria and Archaea exchange genes via horizontal transfer, blurring phylogenetic trees. Eukaryotes mostly inherit vertically through reproduction, making lineage tracing cleaner.'
    },
    {
      q: 'Which best argues for separating Archaea and Bacteria into their own domains?',
      type: 'mcq',
      choices: [
        'Genetic analyses showed Archaea are much more ancient than Bacteria.',
        'They make their membranes differently and copy their DNA differently.',
        'Phylogenetic studies showed they store DNA differently in nuclei.',
        'The kingdom Monera was getting too large.'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'The deep biochemical differences (membrane lipids, DNA replication machinery, ribosomal RNA sequences) reveal that Archaea are more closely related to Eukarya than to Bacteria — justifying a separate domain.'
    },
    {
      q: 'Which describes a characteristic that distinguishes Fungi from other kingdoms?',
      type: 'mcq',
      choices: [
        'Fungi can reproduce sexually and asexually.',
        'Fungi are eukaryotes with complex organ systems.',
        'Fungi are heterotrophs with cell walls (chitin) that digest food externally — many decompose dead organic matter.',
        'Fungi have specialized tissues and cell walls.'
      ],
      correct: 2,
      difficulty: 'M',
      explanation: 'Fungi uniquely combine: cell walls of chitin, external digestion (secrete enzymes, absorb), and heterotrophy. Plants have cellulose walls; animals have no walls. Fungi do NOT have organ systems.'
    },
    {
      q: 'Two human protein sequences differ by 1 amino acid; humans vs. yeast differ by 38 amino acids in the same protein. The best conclusion is',
      type: 'mcq',
      choices: [
        'The protein performs different functions in humans vs. yeast.',
        'Humans and yeast are unrelated.',
        'Humans share a more recent common ancestor with each other than with yeast — divergence is proportional to time.',
        'Yeast evolves faster than humans.'
      ],
      correct: 2,
      difficulty: 'M',
      explanation: 'More sequence differences = more time since shared ancestor (assuming roughly constant mutation rate). This is the molecular clock principle.'
    },
    {
      q: 'A hospital observes that bacterial infections are increasingly resistant to antibiotics. The best explanation is',
      type: 'mcq',
      choices: [
        'Antibiotics directly cause bacteria to mutate.',
        'Resistant bacteria already existed at low frequency; antibiotic exposure killed susceptible ones, leaving the resistant to multiply.',
        'Doctors give the wrong antibiotics.',
        'Bacteria learn resistance during their lifetime.'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'Classic natural selection: variation existed (a few resistant bacteria); the antibiotic was a selection pressure; resistant bacteria reproduced more; the population shifted. Bacteria do not "learn" resistance.'
    }
  ]
};

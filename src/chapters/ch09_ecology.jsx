import React from 'react';
import { Callout, Table } from '../components/Visual.jsx';

export default {
  id: 9,
  title: 'Ecology & Ecosystems',
  subtitle: 'Food webs, populations, biodiversity, human impact (SC.912.L.17.5, L.17.9, L.17.20)',
  blocks: [
    {
      id: 'levels',
      title: 'Levels of Ecological Organization',
      subtitle: 'Organism → biosphere',
      images: [
        { src: 'ch09_ecology/13_unit13_p1_i0.png', alt: 'Levels of organization in ecology — source: Honors Bio Unit 13', caption: 'Population to biosphere' }
      ],
      content: (
        <>
          <Table
            headers={['Level', 'Description']}
            rows={[
              ['Organism', 'A single individual'],
              ['Population', 'All individuals of one species in an area'],
              ['Community', 'All populations (of all species) in an area'],
              ['Ecosystem', 'Community + abiotic factors (sun, water, soil, climate)'],
              ['Biome', 'Major regional ecosystem type (tundra, desert, rainforest, savanna…)'],
              ['Biosphere', 'All life on Earth + all environments']
            ]}
          />
          <Callout kind="info" title="Biotic vs. abiotic">Biotic = living (organisms). Abiotic = non-living (sunlight, temperature, water, soil pH, oxygen). Both shape ecosystems.</Callout>
        </>
      )
    },
    {
      id: 'food-webs',
      title: 'Energy Flow: Food Chains & Webs',
      subtitle: '10% rule and trophic levels',
      images: [
        { src: 'ch09_ecology/10_practicetest_p8.png', alt: 'Marine food web — source: official practice test p.8', caption: 'Marine food web (phytoplankton → krill → fish → seabird/seal)' },
        { src: 'ch09_ecology/12_officialeoc_p9.png', alt: 'Food chain — source: Biology1-EOC.pdf p.9', caption: 'Linear food chain' }
      ],
      content: (
        <>
          <p>Energy flows one way through ecosystems: <strong>sun → producers → consumers → decomposers</strong>. Each level is a <strong>trophic level</strong>:</p>
          <Table
            headers={['Level', 'Role', 'Examples']}
            rows={[
              ['Producers (autotrophs)', 'Make their own food via photosynthesis', 'Plants, algae, cyanobacteria'],
              ['Primary consumers', 'Eat producers (herbivores)', 'Krill, deer, cows'],
              ['Secondary consumers', 'Eat primary consumers (carnivores)', 'Small fish, foxes'],
              ['Tertiary consumers', 'Eat secondary consumers', 'Sharks, eagles'],
              ['Decomposers', 'Break down dead matter', 'Bacteria, fungi']
            ]}
          />
          <Callout kind="warn" title="The 10% rule">Only ~10% of the energy at one trophic level is passed to the next. The other 90% is lost as heat from metabolism, used for growth/movement, or contained in indigestible parts. This limits food chains to ~4–5 levels.</Callout>
          <p>So in a chain phytoplankton → krill → fish → seal, the seal has FAR less available energy than the phytoplankton — even though the seal is the largest organism.</p>
        </>
      )
    },
    {
      id: 'cycles',
      title: 'Biogeochemical Cycles',
      subtitle: 'Matter cycles; energy flows',
      images: [
        { src: 'ch09_ecology/01_eocbank_img1.jpeg', alt: 'Carbon cycle diagram — source: Bio EOC bank', caption: 'Carbon cycle' },
        { src: 'ch09_ecology/02_eocbank_img12.jpeg', alt: 'Water/nitrogen cycle — source: Bio EOC bank', caption: 'Water and nitrogen cycles' }
      ],
      content: (
        <>
          <Table
            headers={['Cycle', 'Major movements', 'Human disruption']}
            rows={[
              ['Water', 'Evaporation, condensation, precipitation, runoff, transpiration', 'Damming, irrigation, paving (runoff)'],
              ['Carbon', 'Photosynthesis ↔ respiration; CO₂ in atmosphere; fossil fuels = stored carbon', 'Burning fossil fuels → CO₂ → climate change'],
              ['Nitrogen', 'N-fixation by bacteria; nitrification; assimilation; denitrification', 'Fertilizer runoff → algal blooms / dead zones'],
              ['Phosphorus', 'Rock weathering; soil; organisms; sediment', 'Fertilizer / detergent runoff → eutrophication']
            ]}
          />
        </>
      )
    },
    {
      id: 'populations',
      title: 'Population Dynamics',
      subtitle: 'Growth, carrying capacity, limiting factors',
      images: [
        { src: 'ch09_ecology/04_eocbank_img28.jpeg', alt: 'Population growth curves — source: Bio EOC bank', caption: 'Exponential vs. logistic growth' }
      ],
      content: (
        <>
          <p>A population grows exponentially when resources are unlimited (J-shaped curve). In nature, resources eventually run out, and the population approaches the <strong>carrying capacity</strong> (K) — the maximum population the environment can sustain. The S-shaped curve is called <strong>logistic growth</strong>.</p>
          <Table
            headers={['Limiting factor type', 'Examples']}
            rows={[
              ['Density-DEPENDENT', 'Food, predation, disease, competition (effects scale with population density)'],
              ['Density-INDEPENDENT', 'Weather, fire, flood, volcanic eruption (kill regardless of density)']
            ]}
          />
          <Callout kind="info" title="At carrying capacity">Birth rate ≈ death rate. The population stabilizes around K. Fluctuations above and below are normal.</Callout>
        </>
      )
    },
    {
      id: 'community-interactions',
      title: 'Community Interactions',
      subtitle: 'Symbiosis and competition',
      content: (
        <>
          <Table
            headers={['Interaction', 'Effect on A', 'Effect on B', 'Example']}
            rows={[
              ['Mutualism', '+', '+', 'Bee + flower'],
              ['Commensalism', '+', '0', 'Barnacle on whale'],
              ['Parasitism', '+', '−', 'Tapeworm in mammal'],
              ['Predation', '+', '−', 'Wolf eating deer'],
              ['Competition', '−', '−', 'Two plants competing for sunlight']
            ]}
          />
          <Callout kind="tip" title="Niche vs. habitat">Habitat = where an organism lives (an address). Niche = what it does there (a job description). Two species cannot occupy the exact same niche in the same place — competitive exclusion.</Callout>
        </>
      )
    },
    {
      id: 'biodiversity-impact',
      title: 'Biodiversity & Human Impact',
      subtitle: 'Why diversity matters; what we\'re doing',
      images: [
        { src: 'ch09_ecology/03_eocbank_img2.jpeg', alt: 'Human impact — source: Bio EOC bank', caption: 'Pollution, habitat loss, climate' }
      ],
      content: (
        <>
          <p><strong>Biodiversity</strong> — the variety of life — is critical because it provides ecosystem services (clean water, pollination, decomposition, climate regulation) and resilience to change. The five biggest threats: habitat destruction, invasive species, pollution, overharvesting, and climate change.</p>
          <Table
            headers={['Human action', 'Ecological effect']}
            rows={[
              ['Burning fossil fuels', 'Adds CO₂ to atmosphere → global warming, ocean acidification'],
              ['Deforestation', 'Loses carbon sink + habitat'],
              ['Fertilizer runoff', 'Eutrophication, dead zones'],
              ['Introducing non-native species', 'Outcompetes natives, no natural predators'],
              ['Solar/wind power, planting trees', 'Sustainable; helps reduce CO₂']
            ]}
          />
          <Callout kind="info" title="Sustainable choices">Renewable energy (solar, wind), planting trees, reduced consumption, and protecting habitats all reduce ecological impact. Switching from petroleum to natural gas is only a partial fix — natural gas is still a fossil fuel.</Callout>
        </>
      )
    }
  ],
  keyReview: {
    vocab: [
      { term: 'Producer (autotroph)', def: 'Makes its own food (photosynthesis or chemosynthesis).' },
      { term: 'Consumer (heterotroph)', def: 'Eats other organisms.' },
      { term: 'Decomposer', def: 'Breaks down dead organisms; recycles nutrients.' },
      { term: 'Trophic level', def: 'Position in the food chain.' },
      { term: '10% rule', def: 'Only ~10% of energy passes from one trophic level to the next.' },
      { term: 'Food web', def: 'Network of feeding relationships.' },
      { term: 'Population', def: 'Members of one species in an area.' },
      { term: 'Community', def: 'All populations in an area.' },
      { term: 'Ecosystem', def: 'Community + abiotic environment.' },
      { term: 'Biome', def: 'Regional ecosystem type (tundra, desert, etc.).' },
      { term: 'Carrying capacity (K)', def: 'Maximum sustainable population in an environment.' },
      { term: 'Limiting factor', def: 'Resource or condition that limits population growth.' },
      { term: 'Niche', def: 'An organism\'s role and resource use within its environment.' },
      { term: 'Mutualism', def: 'Both species benefit.' },
      { term: 'Commensalism', def: 'One benefits, the other is unaffected.' },
      { term: 'Parasitism', def: 'One benefits, the other is harmed.' },
      { term: 'Biodiversity', def: 'Variety of life — genes, species, ecosystems.' },
      { term: 'Sustainability', def: 'Meeting current needs without compromising future generations.' }
    ],
    laws: [
      { name: '10% rule of energy transfer', desc: 'Only about 10% of the energy at one trophic level is available to the next; the rest is lost as heat or used for life processes.' },
      { name: 'Conservation of matter (cycles)', desc: 'Matter cycles; energy flows. Carbon, water, nitrogen, and phosphorus are recycled. Energy is lost as heat.' }
    ],
    methods: [
      { name: 'Identify the trophic level', desc: '"Eats only plants" → primary consumer. "Eats herbivores" → secondary. "Top of food chain" → tertiary or higher.' },
      { name: 'Density-dependent vs. independent test', desc: 'Does the factor\'s effect depend on how crowded the population is? Yes → density-dependent (disease, competition). No → density-independent (weather).' }
    ],
    diagrams: []
  },
  questions: [
    {
      q: 'Which best explains the difference in available energy at each trophic level of a food web?',
      type: 'mcq',
      choices: [
        'There is more available energy in the seal than in the phytoplankton.',
        'There is more available energy in the penguin than in the zooplankton.',
        'There is less available energy in the seal than in the phytoplankton.',
        'There is less available energy in the zooplankton than in the penguin.'
      ],
      correct: 2,
      difficulty: 'M',
      explanation: 'Energy is lost (90%) at each transfer. The top predator (seal) sits on a vastly smaller energy base than the producers (phytoplankton).'
    },
    {
      q: 'Which correctly traces energy through the trophic levels of a marine food web?',
      type: 'mcq',
      choices: [
        'Fish → seabirds → seal → penguin',
        'Phytoplankton → krill → fish → seal',
        'Seal → seabirds → fish → phytoplankton',
        'Zooplankton → phytoplankton → krill → squid'
      ],
      correct: 1,
      difficulty: 'E',
      explanation: 'Energy starts at producers (phytoplankton) and flows up: phytoplankton → krill (primary consumer) → fish (secondary) → seal (tertiary).'
    },
    {
      q: 'How does energy change as it flows from one trophic level to the next in a food web?',
      type: 'mcq',
      choices: [
        'Energy increases from penguin to seal because seals are larger.',
        'Energy decreases from zooplankton to fish because zooplankton are producers.',
        'When krill eat phytoplankton, ~90% of the energy is transferred.',
        'When seabirds eat fish, ~10% of the energy is transferred to the seabirds.'
      ],
      correct: 3,
      difficulty: 'M',
      explanation: 'The 10% rule: only ~10% of energy moves up a trophic level; ~90% is lost as heat or used for life processes.'
    },
    {
      q: 'Aquatic insect larvae are extremely abundant in the Arctic tundra each summer. Why?',
      type: 'mcq',
      choices: [
        'Adults lay thousands of eggs under the ice all winter.',
        'Insects migrate long distances to breed there.',
        'Pools of water from melting permafrost provide ideal breeding sites in summer.',
        'Summer rains replenish ponds.'
      ],
      correct: 2,
      difficulty: 'M',
      explanation: 'Permafrost melts seasonally, creating shallow pools — ideal aquatic habitats for larvae. The brief summer is exactly when their eggs hatch.'
    },
    {
      q: 'When a population reaches carrying capacity, the birth and death rates are',
      type: 'mcq',
      choices: ['Relatively equal.', 'Crashing.', 'Density dependent.', 'Density independent.'],
      correct: 0,
      difficulty: 'E',
      explanation: 'At K, births ≈ deaths and the population stabilizes. (Density-dependent factors are responsible, but the question asks about the rates themselves.)'
    },
    {
      q: 'Rainbow trout need ≥ 6.0 mg/L dissolved oxygen, but a stream has only 5.5 mg/L. Which action would best support reintroduction?',
      type: 'mcq',
      choices: [
        'Create more bends to slow the water down.',
        'Cut down trees to allow more sunlight to warm the water.',
        'Remove aquatic plants growing in the stream.',
        'Remove dams so water flows faster.'
      ],
      correct: 3,
      difficulty: 'H',
      explanation: 'Faster, more turbulent water dissolves more O₂. Slowing or warming the water would lower O₂. Removing plants would actually decrease daytime O₂ production (plants photosynthesize).'
    },
    {
      q: 'Which describes how an ABIOTIC factor can impact ecosystem population dynamics?',
      type: 'mcq',
      choices: [
        'A parasite that invades a host can reduce the host species population.',
        'Organisms competing for the same resources keep each other from overpopulating.',
        'Predators prevent herbivores from depleting plants.',
        'Seasonal temperature variations can cause some individuals in a population to die.'
      ],
      correct: 3,
      difficulty: 'M',
      explanation: 'Abiotic = non-living. Temperature is non-living. Parasites, competition, and predators are biotic factors.'
    },
    {
      q: 'A snake is introduced to an ecosystem with no natural predators. The most likely long-term effect on population dynamics is',
      type: 'mcq',
      choices: [
        'It breeds with native snakes, increasing biodiversity.',
        'It outcompetes native snakes, possibly causing native extinction.',
        'It forms mutualistic relationships with native snakes.',
        'It serves as food for predators of native snakes, increasing native populations.'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'An invasive species without predators can grow exponentially and outcompete or directly displace natives. This is one of the top causes of biodiversity loss globally.'
    },
    {
      q: 'CO₂ traps heat and is required for photosynthesis. Why is human-produced CO₂ a problem?',
      type: 'mcq',
      choices: [
        'It leads to higher global temperatures.',
        'It disrupts the natural cycling of other greenhouse gases.',
        'It adds too much CO₂ to oceans (and the rest causes warming).',
        'It causes uncontrolled photosynthesis.'
      ],
      correct: 0,
      difficulty: 'E',
      explanation: 'Excess CO₂ enhances the greenhouse effect, raising global temperatures and altering climate. Ocean acidification is also a real concern, but the primary EOC answer is warming.'
    },
    {
      q: 'Which choice is most helpful in protecting the environment and achieving sustainability?',
      type: 'mcq',
      choices: [
        'Buying paper products from harvested trees.',
        'Buying fewer mass-produced products.',
        'Using natural gas instead of petroleum.',
        'Using solar power to generate electricity.'
      ],
      correct: 3,
      difficulty: 'E',
      explanation: 'Solar is renewable and emits no CO₂ during operation. Natural gas is still a fossil fuel; harvesting trees damages forests; and reducing consumption is good but solar represents a more direct path to sustainability.'
    }
  ]
};

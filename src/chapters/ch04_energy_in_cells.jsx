import React from 'react';
import { Callout, Table } from '../components/Visual.jsx';

export default {
  id: 4,
  title: 'Photosynthesis & Cellular Respiration',
  subtitle: 'How energy enters and flows through living systems (SC.912.L.18.7–18.10)',
  blocks: [
    {
      id: 'photo-equation',
      title: 'The Photosynthesis Equation',
      subtitle: 'Sunlight + CO₂ + H₂O → glucose + O₂',
      images: [
        { src: 'ch04_energy_in_cells/01_unit5_p1_i0.png', alt: 'Photosynthesis equation diagram — source: Honors Bio Unit 5', caption: 'The summary equation' }
      ],
      content: (
        <>
          <p>Photosynthesis converts light energy into chemical energy stored in glucose:</p>
          <div className="bg-emerald-50 border border-emerald-300 p-3 rounded text-center font-mono text-sm">
            6 CO₂ + 6 H₂O + light energy → C₆H₁₂O₆ + 6 O₂
          </div>
          <p>This single equation explains why nearly all life on Earth depends on photosynthesis. Plants use the glucose for their own metabolism and structure (cellulose); animals eat the plants (or eat animals that ate plants) to get glucose. The released O₂ is the atmospheric oxygen all aerobic organisms breathe.</p>
          <Callout kind="info" title="Where does it happen?">In <strong>chloroplasts</strong>, found in plant and algal cells. Chlorophyll molecules in the chloroplast\'s thylakoid membranes absorb light.</Callout>
        </>
      )
    },
    {
      id: 'photo-stages',
      title: 'Two Stages of Photosynthesis',
      subtitle: 'Light reactions + Calvin cycle',
      images: [
        { src: 'ch04_energy_in_cells/03_unit5_image3.png', alt: 'Photosynthesis stages — source: Unit 5A practice test', caption: 'Light + dark reactions' }
      ],
      content: (
        <>
          <Table
            headers={['Stage', 'Where', 'Inputs', 'Outputs', 'Key idea']}
            rows={[
              ['Light reactions', 'Thylakoid membrane', 'Light, H₂O, NADP⁺, ADP', 'O₂, ATP, NADPH', 'Splits water; makes ATP & NADPH'],
              ['Calvin cycle (light-independent)', 'Stroma', 'CO₂, ATP, NADPH', 'Glucose (G3P)', 'Fixes CO₂ into sugar']
            ]}
          />
          <p>The light reactions need light directly. The Calvin cycle does not — it just needs the ATP and NADPH the light reactions produced. So the Calvin cycle can run briefly in the dark, but only until the ATP/NADPH stockpile runs out.</p>
        </>
      )
    },
    {
      id: 'respiration-equation',
      title: 'Cellular Respiration',
      subtitle: 'The reverse equation',
      images: [
        { src: 'ch04_energy_in_cells/04_unit5_image4.png', alt: 'Cellular respiration overview — source: Unit 5A practice test', caption: 'Three stages of respiration' }
      ],
      content: (
        <>
          <p>Cellular respiration releases the chemical energy stored in glucose to make ATP — the cell\'s direct energy currency:</p>
          <div className="bg-amber-50 border border-amber-300 p-3 rounded text-center font-mono text-sm">
            C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O + ATP (≈30–32 ATP)
          </div>
          <p>Notice this is essentially photosynthesis run in reverse. Photosynthesis stores energy; respiration spends it. <strong>Both plants and animals do cellular respiration</strong> — only plants and algae do photosynthesis.</p>
          <Callout kind="warn" title="EOC trap">"Plants don\'t respire because they photosynthesize." FALSE. Plants do BOTH — photosynthesis during light hours, respiration 24/7. They use the glucose they made to fuel their own ATP needs.</Callout>
        </>
      )
    },
    {
      id: 'respiration-stages',
      title: 'Three Stages of Respiration',
      subtitle: 'Glycolysis → Krebs → Electron transport',
      images: [
        { src: 'ch04_energy_in_cells/05_unit5_image5.png', alt: 'Respiration stages flow — source: Unit 5A', caption: 'Energy harvest steps' }
      ],
      content: (
        <>
          <Table
            headers={['Stage', 'Where', 'Inputs', 'Outputs', 'ATP yield']}
            rows={[
              ['Glycolysis', 'Cytoplasm', 'Glucose, NAD⁺, ADP', '2 Pyruvate, NADH, ATP', '2 ATP (net)'],
              ['Krebs cycle', 'Mitochondrial matrix', 'Pyruvate, NAD⁺, FAD', 'CO₂, NADH, FADH₂, ATP', '2 ATP'],
              ['Electron transport / Oxidative phosphorylation', 'Inner mitochondrial membrane', 'NADH, FADH₂, O₂', 'H₂O, ATP', '~26–28 ATP']
            ]}
          />
          <Callout kind="info" title="Why O₂ matters">Oxygen is the FINAL electron acceptor in the electron transport chain. Each O₂ picks up 4 e⁻ and 4 H⁺ to form 2 H₂O. Without O₂, the chain backs up, NADH cannot be regenerated, and ATP production grinds to a halt — leading to fermentation as a backup.</Callout>
        </>
      )
    },
    {
      id: 'fermentation',
      title: 'Fermentation: Backup Without O₂',
      subtitle: 'When oxygen runs out',
      content: (
        <>
          <p>When oxygen is scarce, cells perform <strong>fermentation</strong> after glycolysis. The point is to regenerate NAD⁺ so glycolysis can keep producing 2 ATP per glucose. Fermentation produces no extra ATP itself.</p>
          <Table
            headers={['Type', 'Used by', 'Products']}
            rows={[
              ['Lactic acid fermentation', 'Mammalian muscle (during sprinting), some bacteria', 'Lactic acid'],
              ['Alcoholic fermentation', 'Yeast, some bacteria', 'Ethanol + CO₂']
            ]}
          />
          <Callout kind="tip" title="Why bread rises">Yeast ferments dough sugars → CO₂ bubbles fill the dough → ethanol bakes off in the oven.</Callout>
        </>
      )
    },
    {
      id: 'energy-cycle',
      title: 'The Photosynthesis–Respiration Cycle',
      subtitle: 'How energy and matter cycle through ecosystems',
      images: [
        { src: 'ch04_energy_in_cells/06_unit5_image6.png', alt: 'Photosynthesis vs respiration comparison — source: Unit 5A', caption: 'Mirror reactions' }
      ],
      content: (
        <>
          <p>These two pathways form a cycle: photosynthesis takes in CO₂ + H₂O and releases O₂; respiration takes in O₂ + glucose and releases CO₂ + H₂O. The atmosphere provides the shared pool of O₂ and CO₂.</p>
          <Table
            headers={['', 'Photosynthesis', 'Cellular Respiration']}
            rows={[
              ['Inputs', '6 CO₂ + 6 H₂O + light', 'C₆H₁₂O₆ + 6 O₂'],
              ['Outputs', 'C₆H₁₂O₆ + 6 O₂', '6 CO₂ + 6 H₂O + ATP'],
              ['Energy flow', 'Stores energy', 'Releases energy'],
              ['Where', 'Chloroplast (plants/algae)', 'Mitochondrion (all eukaryotes)'],
              ['When', 'Light only', '24/7'],
            ]}
          />
        </>
      )
    }
  ],
  keyReview: {
    vocab: [
      { term: 'Photosynthesis', def: 'Light-driven synthesis of glucose from CO₂ and H₂O.', tag: 'CORE', tagColor: 'green' },
      { term: 'Cellular respiration', def: 'Catabolic breakdown of glucose to make ATP.', tag: 'CORE', tagColor: 'green' },
      { term: 'Chlorophyll', def: 'Green pigment in chloroplasts; absorbs light.' },
      { term: 'Thylakoid', def: 'Membrane sac inside chloroplast; site of light reactions.' },
      { term: 'Stroma', def: 'Fluid in chloroplast; site of Calvin cycle.' },
      { term: 'Calvin cycle', def: 'Light-independent reactions; fixes CO₂ into glucose.' },
      { term: 'ATP', def: 'Adenosine triphosphate; cell\'s direct energy currency.' },
      { term: 'NADH / NADPH', def: 'Electron carriers (different cofactors but same idea).' },
      { term: 'Glycolysis', def: 'Splits glucose to pyruvate in the cytoplasm; net 2 ATP.' },
      { term: 'Krebs cycle', def: 'CO₂-releasing cycle in mitochondrial matrix.' },
      { term: 'Electron transport chain', def: 'Inner mitochondrial membrane; uses O₂ to make ~28 ATP.' },
      { term: 'Fermentation', def: 'Anaerobic regeneration of NAD⁺; lactic acid or ethanol.' }
    ],
    laws: [
      { name: 'Conservation of energy', desc: 'Energy is not created or destroyed — photosynthesis converts light to chemical bonds; respiration converts those bonds back to ATP.' }
    ],
    methods: [
      { name: 'Reactants vs. products check', expand: 'CO₂ + H₂O + light ⇌ C₆H₁₂O₆ + O₂', desc: 'If the question asks about photosynthesis, oxygen is a PRODUCT. In respiration, oxygen is a REACTANT.' }
    ],
    diagrams: []
  },
  questions: [
    {
      q: 'Which equation describes what happens in photosynthesis?',
      type: 'mcq',
      choices: [
        'C₆H₁₂O₆ + H₂O → CO₂ + energy',
        '6 CO₂ + 6 H₂O + energy → C₆H₁₂O₆ + 6 O₂',
        'C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O + energy',
        'CO₂ + O₂ + H₂O + energy → CH₂O₅'
      ],
      correct: 1,
      difficulty: 'E',
      explanation: 'Photosynthesis: 6 CO₂ + 6 H₂O + light → glucose + 6 O₂. Choice C is the equation for cellular respiration.'
    },
    {
      q: 'What are the reactants for cellular respiration?',
      type: 'mcq',
      choices: ['H₂O and O₂', 'Glucose and O₂', 'Glucose and CO₂', 'H₂O and CO₂'],
      correct: 1,
      difficulty: 'E',
      explanation: 'Aerobic respiration consumes glucose and O₂; produces CO₂, H₂O, and ATP.'
    },
    {
      q: 'Oxygen is a product of photosynthesis. What is the primary role of this oxygen in cellular respiration?',
      type: 'mcq',
      choices: [
        'Yield energy in the form of ATP as it passes down the respiratory chain.',
        'Act as the final acceptor for electrons and hydrogen, forming water.',
        'Combine with carbon, forming CO₂.',
        'Combine with lactate, forming pyruvate.'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'O₂ is the terminal electron acceptor in the electron transport chain. Picking up the spent electrons (and H⁺) is what allows the chain to keep flowing — and it forms H₂O as a byproduct.'
    },
    {
      q: 'A student blocks the stomata of a plant\'s leaves with petroleum jelly. After several hours in sunlight, the rate of photosynthesis drops. Why?',
      type: 'mcq',
      choices: [
        'Light cannot reach the leaf cells.',
        'CO₂ cannot enter the leaf, starving the Calvin cycle.',
        'Glucose cannot leave the cells.',
        'Mitochondria stop functioning.'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'Stomata are the gas exchange pores. Blocking them stops CO₂ from entering — and CO₂ is the carbon source the Calvin cycle uses to build glucose.'
    },
    {
      q: 'If a plant cell is placed in total darkness, what happens?',
      type: 'mcq',
      choices: [
        'It dies immediately because it cannot do photosynthesis.',
        'It survives by performing cellular respiration on stored glucose.',
        'It begins to ferment.',
        'It splits water for energy.'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'Plants ALSO do cellular respiration around the clock. In darkness they live on stored sugars (and run respiration in mitochondria) until the reserves run out.'
    },
    {
      q: 'Where do the light reactions of photosynthesis occur?',
      type: 'mcq',
      choices: ['Stroma of the chloroplast', 'Thylakoid membranes', 'Mitochondrial matrix', 'Cytoplasm'],
      correct: 1,
      difficulty: 'E',
      explanation: 'Thylakoid membranes hold the photosystems and electron transport chain that convert light energy into ATP and NADPH.'
    },
    {
      q: 'During strenuous exercise, muscle cells run low on O₂ and produce lactic acid. This is because',
      type: 'mcq',
      choices: [
        'They switch to photosynthesis.',
        'They run lactic-acid fermentation to regenerate NAD⁺ so glycolysis can keep producing ATP.',
        'They start the Krebs cycle without oxygen.',
        'They release CO₂ instead of lactate.'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'Without enough O₂, the electron transport chain backs up. Cells run fermentation to regenerate NAD⁺, allowing glycolysis to keep making 2 ATP per glucose.'
    },
    {
      q: 'A poison blocks the electron transport chain in mitochondria. Which is the most immediate effect on the cell?',
      type: 'mcq',
      choices: [
        'O₂ levels rise inside the cell.',
        'ATP production drops sharply.',
        'CO₂ levels drop.',
        'Glucose builds up in the nucleus.'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'The electron transport chain produces the bulk of cellular ATP (~28 of 30). Blocking it crashes ATP supply — cells either switch to fermentation or die.'
    },
    {
      q: 'Which choice correctly pairs an organelle with its energy role?',
      type: 'mcq',
      choices: [
        'Chloroplast — cellular respiration',
        'Mitochondrion — cellular respiration',
        'Nucleus — photosynthesis',
        'Ribosome — fermentation'
      ],
      correct: 1,
      difficulty: 'E',
      explanation: 'Mitochondria perform cellular respiration. Chloroplasts perform photosynthesis. The other pairings are nonsense.'
    },
    {
      q: 'A scientist observes that a plant absorbs 6 mmol of CO₂ per hour in the light, and releases 1 mmol of CO₂ per hour in the dark. Which best explains the dark observation?',
      type: 'mcq',
      choices: [
        'Photosynthesis runs in reverse.',
        'The plant continues cellular respiration even in the dark, releasing CO₂.',
        'CO₂ is produced by the chloroplasts.',
        'The plant has stopped all metabolic activity.'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'Cellular respiration runs constantly in plant mitochondria. In the light, photosynthesis MORE than offsets respiration\'s CO₂ release; in the dark, only respiration is observed.'
    }
  ]
};

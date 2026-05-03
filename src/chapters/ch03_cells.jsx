import React from 'react';
import { Callout, Table } from '../components/Visual.jsx';

export default {
  id: 3,
  title: 'Cell Structure, Transport & Homeostasis',
  subtitle: 'Organelles, plasma membrane, diffusion, osmosis, active transport (SC.912.L.14.1–14.3)',
  blocks: [
    {
      id: 'prokaryote-eukaryote',
      title: 'Prokaryotic vs. Eukaryotic Cells',
      subtitle: 'Two domains of cellular life',
      images: [
        { src: 'svg/animal_cell.svg', alt: 'Labeled animal cell with nucleus, mitochondria, ER, Golgi, ribosomes', caption: 'Eukaryotic animal cell — membrane-bound nucleus and organelles' }
      ],
      content: (
        <>
          <p>All cells share four features: a plasma membrane, cytoplasm, ribosomes, and DNA. They split into two fundamentally different architectures:</p>
          <Table
            headers={['Feature', 'Prokaryote', 'Eukaryote']}
            rows={[
              ['Nucleus', 'No (DNA in nucleoid)', 'Yes (membrane-bound)'],
              ['Membrane organelles', 'No', 'Yes (ER, Golgi, lysosomes…)'],
              ['DNA', 'Single circular chromosome', 'Linear chromosomes'],
              ['Ribosomes', 'Smaller (70S)', 'Larger (80S)'],
              ['Size', '1–10 μm', '10–100 μm'],
              ['Examples', 'Bacteria, Archaea', 'Animals, plants, fungi, protists']
            ]}
          />
          <Callout kind="info" title="Defining feature of a eukaryote">A nucleus. The other organelles followed evolutionarily, but the nucleus is the diagnostic test.</Callout>
        </>
      )
    },
    {
      id: 'plant-vs-animal',
      title: 'Plant vs. Animal Cells',
      subtitle: 'What plants have that animals don\'t',
      images: [
        { src: 'svg/plant_cell.svg', alt: 'Labeled plant cell showing cell wall, chloroplasts, central vacuole, mitochondrion', caption: 'Plant-only structures: cell wall, chloroplasts, large central vacuole' }
      ],
      content: (
        <>
          <p>Both plant and animal cells are eukaryotes, so both have a nucleus, membrane-bound organelles, mitochondria, ribosomes, ER, Golgi, etc. Plant cells additionally have:</p>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li><strong>Cell wall</strong> (cellulose) — rigid support, outside the membrane.</li>
            <li><strong>Chloroplasts</strong> — photosynthesis.</li>
            <li><strong>Large central vacuole</strong> — water/solute storage; provides turgor pressure.</li>
          </ul>
          <p>Animal cells uniquely have <strong>centrioles</strong> (used during mitotic spindle formation) and <strong>lysosomes</strong> are typically more prominent. Both cell types have ribosomes and mitochondria — a common EOC trap is to claim plant cells "don\'t have mitochondria" because they photosynthesize. They do.</p>
          <Callout kind="warn" title="Trap question">"Plant cells have rigid cell walls and do not contain mitochondria or ribosomes." — FALSE. Plant cells have BOTH mitochondria and ribosomes; they just also have cell walls and chloroplasts.</Callout>
        </>
      )
    },
    {
      id: 'organelles',
      title: 'Major Organelles & Their Jobs',
      subtitle: 'Endomembrane system + powerhouses',
      images: [],
      content: (
        <>
          <Table
            headers={['Organelle', 'Function', 'Memorable detail']}
            rows={[
              ['Nucleus', 'Stores DNA; controls cell activity', 'Surrounded by double membrane with pores'],
              ['Ribosome', 'Synthesizes proteins', 'Rough ER ribosomes make secreted/membrane proteins'],
              ['Rough ER', 'Folds + tags proteins; ribosomes attached', 'Continuous with nuclear envelope'],
              ['Smooth ER', 'Lipid synthesis; detoxification', 'No ribosomes'],
              ['Golgi apparatus', 'Modifies, sorts, ships proteins/lipids', 'Like a UPS hub'],
              ['Mitochondria', 'Cellular respiration → ATP', 'Double membrane; inner is folded into cristae'],
              ['Chloroplast (plants only)', 'Photosynthesis', 'Double membrane; thylakoids stacked into grana'],
              ['Lysosome (animals)', 'Hydrolytic enzymes — recycle waste', 'Internal pH ~5'],
              ['Vacuole', 'Storage; central in plants', 'Plant turgor depends on full vacuole'],
              ['Cell membrane', 'Selective barrier', 'Phospholipid bilayer + proteins']
            ]}
          />
          <Callout kind="tip" title="Endomembrane flow">Newly made protein → enters Rough ER → buds off in vesicle → fuses with Golgi → modified → buds off → travels to plasma membrane (or lysosome).</Callout>
        </>
      )
    },
    {
      id: 'membrane',
      title: 'The Plasma Membrane',
      subtitle: 'Phospholipid bilayer; selective permeability',
      images: [
        { src: 'svg/membrane_transport.svg', alt: 'Three modes of membrane transport: simple diffusion, facilitated diffusion, active transport', caption: 'Phospholipid bilayer with channel proteins and ATP-driven pumps' }
      ],
      content: (
        <>
          <p>Every cell is wrapped in a <strong>phospholipid bilayer</strong>: phospholipids arrange tails-in (hydrophobic) and heads-out (hydrophilic, facing water). This double layer is naturally <strong>selectively permeable</strong> — small nonpolar molecules (O₂, CO₂) pass freely; large polar molecules and ions need protein channels.</p>
          <p>Embedded proteins do five jobs: <strong>transport</strong> (channels, carriers, pumps), <strong>receptors</strong> (signal binding), <strong>enzymatic activity</strong>, <strong>cell-cell recognition</strong> (glycoproteins), and <strong>attachment</strong> (cytoskeleton). The "fluid mosaic model" describes how proteins float in this 2D fluid bilayer.</p>
        </>
      )
    },
    {
      id: 'transport',
      title: 'Cellular Transport',
      subtitle: 'Passive vs. active; osmosis',
      images: [
        { src: 'svg/tonicity.svg', alt: 'Tonicity comparison: animal and plant cells in hypotonic, isotonic, and hypertonic solutions', caption: 'Hypotonic / isotonic / hypertonic effects on animal vs. plant cells' }
      ],
      content: (
        <>
          <Table
            headers={['Mode', 'Energy?', 'Direction', 'Example']}
            rows={[
              ['Simple diffusion', 'No (passive)', 'Down concentration gradient', 'O₂, CO₂ across membrane'],
              ['Facilitated diffusion', 'No (passive)', 'Down gradient, through protein', 'Glucose via GLUT transporters'],
              ['Osmosis', 'No (passive)', 'Water down its concentration gradient', 'Across aquaporins'],
              ['Active transport', 'Yes (ATP)', 'Against gradient', 'Sodium-potassium pump'],
              ['Endocytosis', 'Yes', 'Engulf large material into cell', 'Phagocytosis'],
              ['Exocytosis', 'Yes', 'Release large material out of cell', 'Neurotransmitter release']
            ]}
          />
          <Callout kind="info" title="Tonicity (water moves to where it\'s less concentrated as water)">
            <strong>Hypotonic</strong> environment (less solute outside): water rushes IN → animal cell bursts; plant cell becomes turgid.<br/>
            <strong>Hypertonic</strong> (more solute outside): water rushes OUT → animal cell shrivels; plant cell plasmolyzes.<br/>
            <strong>Isotonic</strong>: no net movement; cell maintains shape.
          </Callout>
        </>
      )
    },
    {
      id: 'homeostasis',
      title: 'Homeostasis',
      subtitle: 'Maintaining a stable internal state',
      content: (
        <>
          <p><strong>Homeostasis</strong> is the maintenance of a stable internal environment despite changes outside. Examples: human body temperature near 37°C, blood glucose near 90 mg/dL, blood pH near 7.4. Cells use <strong>negative feedback loops</strong>: a sensor detects deviation, an effector acts to reverse it, the variable returns to set-point.</p>
          <Callout kind="tip" title="Classic example">When body temperature rises, sweat glands activate → sweat evaporates → body cools. When it drops, shivering generates heat. Both are reversed by the hypothalamus comparing actual temperature to a set-point.</Callout>
        </>
      )
    }
  ],
  keyReview: {
    vocab: [
      { term: 'Prokaryote', def: 'Cell without a nucleus (Bacteria, Archaea).', tag: 'CORE', tagColor: 'sky' },
      { term: 'Eukaryote', def: 'Cell with a nucleus and membrane-bound organelles.', tag: 'CORE', tagColor: 'sky' },
      { term: 'Nucleus', def: 'Membrane-bound organelle storing DNA.' },
      { term: 'Mitochondrion', def: 'Site of cellular respiration; ATP factory.' },
      { term: 'Chloroplast', def: 'Plant organelle for photosynthesis.' },
      { term: 'Ribosome', def: 'Protein-synthesis machine; in cytoplasm or on rough ER.' },
      { term: 'Endoplasmic reticulum', def: 'Network of membranes; rough = with ribosomes; smooth = lipids/detox.' },
      { term: 'Golgi apparatus', def: 'Modifies, sorts, packages proteins.' },
      { term: 'Lysosome', def: 'Animal-cell digestive vesicle.' },
      { term: 'Vacuole', def: 'Storage; large central vacuole in plants.' },
      { term: 'Cell wall', def: 'Rigid outer layer in plants (cellulose), fungi (chitin), bacteria (peptidoglycan).' },
      { term: 'Phospholipid bilayer', def: 'Double layer of phospholipids; basis of all biological membranes.' },
      { term: 'Selectively permeable', def: 'Lets some things through, blocks others.' },
      { term: 'Diffusion', def: 'Passive movement of solute down its concentration gradient.' },
      { term: 'Osmosis', def: 'Diffusion of water across a selectively permeable membrane.' },
      { term: 'Active transport', def: 'Movement against the gradient using ATP.' },
      { term: 'Hypotonic / isotonic / hypertonic', def: 'Solution with less / equal / more solute compared to inside the cell.' },
      { term: 'Homeostasis', def: 'Maintenance of a stable internal environment.' }
    ],
    laws: [
      { name: 'Cell theory', desc: 'All living things are made of cells; cells come from cells; cell is the basic unit of life.' }
    ],
    methods: [
      { name: 'Identify a cell from its features', desc: 'Nucleus? → Eukaryote. Cell wall + chloroplasts + central vacuole? → Plant. No nucleus? → Prokaryote.' },
      { name: 'Predict osmosis', desc: 'Compare solute outside to solute inside. Water moves toward higher solute / lower water concentration.' }
    ],
    diagrams: []
  },
  questions: [
    {
      q: 'Which feature defines a cell as a eukaryote?',
      type: 'mcq',
      choices: ['Being able to move', 'Being able to reproduce', 'Having a nucleus', 'Having ribosomes'],
      correct: 2,
      difficulty: 'E',
      explanation: 'A nucleus is the diagnostic feature. Even prokaryotes can move and have ribosomes, and all cells reproduce.'
    },
    {
      q: 'Which best compares eukaryotes and prokaryotes?',
      type: 'mcq',
      choices: [
        'Eukaryotes have a cell wall; prokaryotes have a cell membrane.',
        'Eukaryotes have membrane-bound organelles; prokaryotes have few specialized structures.',
        'Eukaryotes use active transport; prokaryotes use facilitated diffusion.',
        'Eukaryotes use flagella; prokaryotes cannot move.'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'Eukaryotes have membrane-bound organelles (nucleus, mitochondria, ER, Golgi). Prokaryotes lack them. The other claims are wrong (both can have walls; both use active transport; both can have flagella).'
    },
    {
      q: 'Which best compares plant and animal cell structures?',
      type: 'mcq',
      choices: [
        'Animal cells contain cell walls and a large central vacuole; plant cells contain only small vacuoles.',
        'Animal cells lack chloroplasts, cell walls, and a large central vacuole — plant cells have all three.',
        'Plant cells contain rough ER and Golgi; animal cells contain smooth ER surrounded by lysosomes.',
        'Plant cells have rigid walls and contain neither mitochondria nor ribosomes.'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'Plant cells uniquely have walls, chloroplasts, and a large central vacuole. Plant cells DO have mitochondria and ribosomes — they need ATP and proteins like every other cell.'
    },
    {
      q: 'Which best compares membranes in different cell types?',
      type: 'mcq',
      choices: [
        'Animal cells have cell membranes and walls; plant cells lack cell membranes.',
        'Animal cells have membrane-bound organelles; plant cells carry out functions in the cytoplasm.',
        'Prokaryotes have only cell membranes; eukaryotes have walls and membranes.',
        'Prokaryotes and eukaryotes both have cell membranes; eukaryotes also have membrane-bound organelles.'
      ],
      correct: 3,
      difficulty: 'M',
      explanation: 'EVERY cell has a plasma membrane. Eukaryotes additionally have internal membrane-bound organelles. Walls are not exclusive to either category.'
    },
    {
      q: 'A red blood cell is placed in pure water. What happens?',
      type: 'mcq',
      choices: [
        'Water leaves the cell and it shrivels.',
        'Water enters the cell and it bursts (lyses).',
        'Salt enters the cell.',
        'Nothing — the membrane is impermeable to water.'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'Pure water is hypotonic to RBC cytoplasm. Water flows IN by osmosis until the cell ruptures. Animal cells lack a wall to resist this swelling.'
    },
    {
      q: 'A protein needs to be secreted from the cell. Which path does it most likely follow?',
      type: 'mcq',
      choices: [
        'Cytoplasmic ribosome → mitochondria → cell membrane',
        'Rough ER → Golgi → vesicle → plasma membrane (exocytosis)',
        'Lysosome → smooth ER → Golgi',
        'Nucleus → mitochondria → vacuole'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'Secreted proteins are synthesized on rough ER, modified there and in the Golgi, then carried in vesicles that fuse with the plasma membrane (exocytosis).'
    },
    {
      q: 'Sodium-potassium pumps move 3 Na⁺ out and 2 K⁺ in against their gradients. This requires',
      type: 'mcq',
      choices: ['Simple diffusion', 'Facilitated diffusion', 'Active transport (ATP)', 'Osmosis'],
      correct: 2,
      difficulty: 'E',
      explanation: 'Movement against the concentration gradient requires energy from ATP. This is the textbook example of active transport.'
    },
    {
      q: 'A plant cell is placed in a strongly hypertonic salt solution. What is observed?',
      type: 'mcq',
      choices: [
        'The cell bursts.',
        'The cell becomes turgid.',
        'The membrane pulls away from the cell wall (plasmolysis).',
        'No change.'
      ],
      correct: 2,
      difficulty: 'M',
      explanation: 'Water leaves the cell by osmosis. The membrane shrinks away from the cell wall — plasmolysis — and the plant wilts.'
    },
    {
      q: 'Why can O₂ cross the plasma membrane easily without a transporter?',
      type: 'mcq',
      choices: [
        'It is highly polar.',
        'It is small and nonpolar, so it dissolves through the lipid bilayer.',
        'It is actively pumped by ATP.',
        'It binds to a receptor that releases it inside.'
      ],
      correct: 1,
      difficulty: 'E',
      explanation: 'Small nonpolar molecules slip through the hydrophobic core of the bilayer. Charged or large polar molecules need a protein channel.'
    },
    {
      q: 'When body temperature rises above 37°C, sweat glands activate. This is an example of',
      type: 'mcq',
      choices: ['Positive feedback', 'Negative feedback', 'Osmosis', 'Active transport'],
      correct: 1,
      difficulty: 'M',
      explanation: 'Negative feedback opposes the change to restore homeostasis: high temperature triggers sweating, which cools the body back toward set-point.'
    },
    {
      q: 'Which organelle would be most abundant in a muscle cell, which has very high energy demands?',
      type: 'mcq',
      choices: ['Lysosomes', 'Mitochondria', 'Centrioles', 'Smooth ER'],
      correct: 1,
      difficulty: 'E',
      explanation: 'Mitochondria produce ATP. Cells with high energy demand (muscle, liver, neurons) pack thousands of mitochondria.'
    }
  ]
};

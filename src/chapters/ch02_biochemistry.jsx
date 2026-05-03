import React from 'react';
import { Callout, Table, Pill } from '../components/Visual.jsx';

export default {
  id: 2,
  title: 'Biochemistry: Water, Macromolecules & Enzymes',
  subtitle: 'Polar bonds, the four biomolecules, enzyme function (SC.912.L.18.1, L.18.11, L.18.12)',
  blocks: [
    {
      id: 'water',
      title: 'The Properties of Water',
      subtitle: 'Why water is the medium of life',
      images: [
        { src: 'svg/water_molecule.svg', alt: 'Polar water molecule with partial charges and hydrogen bonding cluster', caption: 'Water is polar — partial negative oxygen, partial positive hydrogens — forming hydrogen bonds' }
      ],
      content: (
        <>
          <p>Water (H₂O) is a <strong>polar molecule</strong>: oxygen pulls electrons more strongly than hydrogen, leaving oxygen slightly negative (δ⁻) and hydrogens slightly positive (δ⁺). Adjacent water molecules form weak <strong>hydrogen bonds</strong> between an O of one molecule and an H of another. This single fact explains nearly every biologically important property of water.</p>
          <Table
            headers={['Property', 'Caused by', 'Biological consequence']}
            rows={[
              ['Universal solvent', 'Polarity dissolves ionic & polar substances', 'Cytoplasm, blood, sap'],
              ['High specific heat', 'Hydrogen bonds absorb energy', 'Stable internal body temperature; oceans buffer climate'],
              ['Cohesion', 'H-bonds pull water molecules together', 'Surface tension; capillary action in xylem'],
              ['Adhesion', 'H-bonds attract water to other polar surfaces', 'Water climbs plant stems'],
              ['Less dense as a solid', 'Crystal lattice spaces molecules apart', 'Ice floats — fish survive winter under ice'],
            ]}
          />
          <Callout kind="info" title="Application question pattern">If water had a LOW specific heat instead of a high one, organisms sensitive to temperature would die because temperatures would swing wildly with the day/night cycle.</Callout>
        </>
      )
    },
    {
      id: 'macromolecules',
      title: 'The Four Macromolecules',
      subtitle: 'Carbs, lipids, proteins, nucleic acids',
      images: [
        { src: 'svg/macromolecules.svg', alt: 'The four classes of biological macromolecules with monomers and functions', caption: 'Carbohydrates, lipids, proteins, and nucleic acids' }
      ],
      content: (
        <>
          <p>All four classes of biological macromolecules contain carbon, hydrogen, and oxygen. Proteins and nucleic acids also contain nitrogen; nucleic acids and certain proteins also contain phosphorus or sulfur. Macromolecules are <strong>polymers</strong> built from <strong>monomers</strong> via dehydration synthesis (water released) and broken down via hydrolysis (water added).</p>
          <Table
            headers={['Class', 'Monomer', 'Function', 'Example']}
            rows={[
              ['Carbohydrates', 'Monosaccharide (glucose)', 'Quick energy, structure', 'Starch, glycogen, cellulose'],
              ['Lipids', '(Glycerol + fatty acids)', 'Long-term energy, membranes, signaling', 'Triglycerides, phospholipids, steroids'],
              ['Proteins', 'Amino acid', 'Enzymes, structure, transport, signaling', 'Hemoglobin, hexokinase, keratin'],
              ['Nucleic acids', 'Nucleotide', 'Genetic info storage and transfer', 'DNA, RNA'],
            ]}
          />
          <Callout kind="warn" title="Don't confuse">Carbs are hydrophilic (water-loving). Lipids are hydrophobic (water-fearing) because they are mostly long C-H chains with no polar groups.</Callout>
        </>
      )
    },
    {
      id: 'protein-structure',
      title: 'Protein Structure & Function',
      subtitle: 'Shape determines function',
      images: [
        { src: 'svg/protein_structure.svg', alt: 'Four levels of protein structure: primary, secondary, tertiary, quaternary', caption: 'Protein structure: primary → secondary → tertiary → quaternary' }
      ],
      content: (
        <>
          <p>Proteins are linear polymers of <strong>amino acids</strong> (20 standard varieties) joined by <strong>peptide bonds</strong>. The sequence of amino acids — the <strong>primary structure</strong> — is encoded in DNA. The chain folds into a 3D shape determined by interactions among side chains (hydrogen bonds, ionic bonds, hydrophobic clustering, disulfide bridges). <strong>Shape determines function.</strong></p>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li><strong>Primary:</strong> sequence of amino acids.</li>
            <li><strong>Secondary:</strong> α-helix and β-sheet local folding (H-bonds in backbone).</li>
            <li><strong>Tertiary:</strong> overall 3D shape of one chain.</li>
            <li><strong>Quaternary:</strong> two or more chains assembled (e.g., hemoglobin = 4 chains).</li>
          </ul>
          <Callout kind="danger" title="Denaturation">High temperature, extreme pH, or harsh solvents disrupt the H-bonds and ionic bonds holding the protein in its functional shape. The protein unfolds (denatures) and stops working — usually irreversibly. This is why fevers above ~107°F are deadly.</Callout>
        </>
      )
    },
    {
      id: 'enzymes',
      title: 'Enzymes',
      subtitle: 'Biological catalysts',
      images: [
        { src: 'svg/enzyme_substrate.svg', alt: 'Enzyme-substrate complex induced fit with product release', caption: 'Enzyme + substrate → enzyme-substrate complex → products + reusable enzyme' }
      ],
      content: (
        <>
          <p>An <strong>enzyme</strong> is a protein (a few are RNA — "ribozymes") that lowers the <strong>activation energy</strong> of a specific biochemical reaction. Enzymes are not consumed; they can run a reaction over and over. The substrate binds in the enzyme's <strong>active site</strong>; the shape of the active site determines which substrates the enzyme recognizes (specificity).</p>
          <Table
            headers={['Factor', 'Effect on enzyme rate']}
            rows={[
              ['Temperature ↑ (within optimal range)', 'Rate increases (more collisions)'],
              ['Temperature too high', 'Denaturation — rate drops to 0'],
              ['pH off optimal', 'Active site distorted — rate drops'],
              ['Substrate concentration ↑', 'Rate rises until enzymes saturated'],
              ['Inhibitor present', 'Rate drops (competitive or non-competitive)'],
            ]}
          />
          <Callout kind="info" title="If a protein catalyst is missing">If a genetic defect prevents an enzyme from being produced, its reaction proceeds extremely slowly or not at all. There is no automatic backup enzyme — each reaction has its own specialist.</Callout>
        </>
      )
    },
    {
      id: 'origin-of-life',
      title: 'Origin of Life: From Molecules to Cells',
      subtitle: 'The Miller-Urey experiment and microspheres',
      content: (
        <>
          <p>Early Earth had a reducing atmosphere (no free O₂), abundant H₂O, methane, ammonia, and energy from lightning and UV. The <strong>Miller-Urey experiment (1953)</strong> showed that simple organic molecules — amino acids, sugars, lipid precursors — can form spontaneously under those conditions. Lipids in water can self-assemble into <strong>microspheres</strong> (lipid bubbles), the simplest precursor to a cell membrane.</p>
          <Callout kind="warn" title="Why microspheres won't form on a meteorite">Lipids only assemble into microspheres in liquid water. Space lacks liquid water, so even though individual amino acids and lipids have been found on meteorites, microspheres haven't.</Callout>
          <p>The leap from microspheres to a self-replicating cell required the <strong>RNA world</strong>: RNA can both store genetic information AND act as a catalyst (ribozymes). Once RNA could replicate and catalyze, evolution could begin.</p>
        </>
      )
    }
  ],
  keyReview: {
    vocab: [
      { term: 'Polar molecule', def: 'A molecule with uneven charge distribution (e.g., water).', tag: 'CORE', tagColor: 'sky' },
      { term: 'Hydrogen bond', def: 'Weak attraction between a δ+ H and a δ- atom (often O or N).' },
      { term: 'Cohesion', def: 'Water molecules sticking to other water molecules.' },
      { term: 'Adhesion', def: 'Water molecules sticking to other (polar) substances.' },
      { term: 'Specific heat', def: 'Energy needed to raise a substance\'s temperature; high in water.' },
      { term: 'Hydrophilic', def: 'Water-loving; polar or charged.' },
      { term: 'Hydrophobic', def: 'Water-fearing; nonpolar (e.g., lipid tails).' },
      { term: 'Monomer / Polymer', def: 'Single unit / chain of repeated units.' },
      { term: 'Dehydration synthesis', def: 'Joining monomers by removing water.' },
      { term: 'Hydrolysis', def: 'Breaking polymers by adding water.' },
      { term: 'Enzyme', def: 'Biological catalyst, usually a protein.' },
      { term: 'Active site', def: 'Region of an enzyme where substrate binds.' },
      { term: 'Substrate', def: 'Molecule(s) acted on by an enzyme.' },
      { term: 'Activation energy', def: 'Energy barrier to start a reaction; lowered by enzymes.' },
      { term: 'Denaturation', def: 'Loss of protein shape, usually from heat or pH; usually irreversible.' }
    ],
    laws: [
      { name: 'Shape determines function', desc: 'A protein\'s 3D fold defines what it can do; disrupt the shape and you destroy the function.' },
      { name: 'Enzyme specificity', desc: 'Each enzyme recognizes one substrate (or a small family) by complementary active-site shape.' }
    ],
    methods: [
      { name: '"4 macromolecules" mnemonic', expand: 'C-Lip-PR-NA', desc: 'Carbohydrates, Lipids, PRoteins, Nucleic Acids — memorize monomer + function for each.' },
      { name: 'Property-from-polarity drill', desc: 'For each water property: which biological role does it support? (Cohesion → xylem; high specific heat → temperature stability; ice floats → aquatic life.)' }
    ],
    diagrams: []
  },
  questions: [
    {
      q: 'Which of the following best describes a result of the polar nature of water molecules?',
      type: 'mcq',
      choices: [
        'Ionic compounds dissolve easily in water.',
        'The volume of water decreases by nearly half when frozen.',
        'Water molecules repel each other.',
        'Water molecules repel most other substances.'
      ],
      correct: 0,
      difficulty: 'E',
      explanation: 'Water\'s polarity makes it the universal solvent — ionic compounds dissociate because polar water surrounds and stabilizes the ions. Volume actually expands when frozen; molecules attract, not repel.'
    },
    {
      q: 'Water has a much higher specific heat than most other covalent compounds. What might happen if water had a low specific heat instead?',
      type: 'mcq',
      choices: [
        'Flooding would occur and animals would migrate.',
        'Harmful organisms in water would reproduce rapidly.',
        'Organisms sensitive to temperature changes would die.',
        'Plants would lack water for photosynthesis.'
      ],
      correct: 2,
      difficulty: 'M',
      explanation: 'High specific heat is what stabilizes the temperature of cells, oceans, and lakes. Without it, daily temperature swings would kill temperature-sensitive organisms.'
    },
    {
      q: 'Which best compares the structures of lipids and carbohydrates?',
      type: 'mcq',
      choices: [
        'Both are made of monosaccharide monomers; lipids are hydrophobic and carbs hydrophilic.',
        'Both consist of C, H, and O; carbs have repeating structural units, lipids do not.',
        'Both contain C and H; carbs also contain O while lipids contain N.',
        'Both have a carbon backbone; lipids have an amino group and carbs have a carboxylic acid group.'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'Both classes contain C, H, and O. Carbohydrates are polymers of monosaccharides (true repeating monomers); lipids are not built from a single repeating monomer in the same sense — they are built from glycerol + fatty acids.'
    },
    {
      q: 'Which best describes the difference between nucleic acids and enzymes?',
      type: 'mcq',
      choices: [
        'Nucleic acids are building blocks of proteins; enzymes are building blocks of phospholipids.',
        'Nucleic acids contain the genetic code for protein synthesis; enzymes catalyze chemical reactions.',
        'Nucleic acids inhibit reactions; enzymes provide structural support in cells.',
        'Nucleic acids transmit signals; enzymes convert carbs into lipids and proteins.'
      ],
      correct: 1,
      difficulty: 'E',
      explanation: 'Nucleic acids (DNA/RNA) store and transfer genetic information. Enzymes (mostly proteins) catalyze specific reactions by lowering activation energy.'
    },
    {
      q: 'Some proteins catalyze biochemical reactions. If a genetic defect prevents a protein catalyst from being produced, what happens?',
      type: 'mcq',
      choices: [
        'The cell finds a different protein to catalyze the reaction.',
        'The reaction proceeds very slowly or not at all.',
        'The reaction occurs only in some places in the cell.',
        'The reverse reaction begins to proceed.'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'Each enzyme is specific. There is no automatic backup. Without the catalyst, the reaction proceeds at its uncatalyzed rate — which is often effectively zero in cell conditions.'
    },
    {
      q: 'In which circumstance would large organic molecules be most likely to form during a Miller-Urey-style laboratory experiment?',
      type: 'mcq',
      choices: [
        'If amino acids and nucleic acids both formed.',
        'If oxygen were slowly added as the experiment progressed.',
        'If RNA segments capable of catalysis formed.',
        'If the mixture were repeatedly heated and cooled.'
      ],
      correct: 3,
      difficulty: 'H',
      explanation: 'Repeated heating and cooling cycles concentrate reactants and provide the energy needed for polymerization. Free O₂ would actually destroy the reduced organic precursors.'
    },
    {
      q: 'Lipid molecules and amino acids have been found in meteorites. Why is it unlikely microspheres will be found?',
      type: 'mcq',
      choices: [
        'Amino acids cannot form the enzymes needed for microspheres.',
        'Microspheres would be destroyed by space radiation.',
        'Lipids only form microspheres when in liquid water.',
        'Microspheres can only form when oxygen is present.'
      ],
      correct: 2,
      difficulty: 'M',
      explanation: 'Microsphere self-assembly is driven by the hydrophobic effect, which requires bulk liquid water as the medium — not present on meteorites in space.'
    },
    {
      q: 'An experimenter heats an enzyme to 80°C, then cools it back to 37°C. The enzyme no longer works. Why?',
      type: 'mcq',
      choices: [
        'The substrate was destroyed.',
        'The high temperature denatured the protein\'s 3D shape, which is generally not recoverable.',
        'Enzymes only work between 0°C and 80°C.',
        'The enzyme used up its activation energy.'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'Heat breaks the H-bonds and other weak interactions that maintain protein shape. Once unfolded, most proteins do not refold correctly even after cooling — the activity is lost.'
    },
    {
      q: 'Which property of water explains why a maple tree can pull water 30 m up from its roots to its leaves?',
      type: 'mcq',
      choices: [
        'High specific heat',
        'Cohesion + adhesion (capillary action) inside xylem',
        'Water\'s low density as a solid',
        'Water acting as a universal solvent'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'Cohesion (water-water H-bonds) plus adhesion (water-xylem wall) creates an unbroken column of water that transpiration pulls upward — capillary action.'
    },
    {
      q: 'Which observation best demonstrates that "shape determines function" for proteins?',
      type: 'mcq',
      choices: [
        'Proteins contain C, H, O, and N.',
        'Sickle-cell hemoglobin differs from normal hemoglobin by one amino acid, distorting its shape, and it can no longer carry O₂ efficiently.',
        'Proteins are polymers of amino acids.',
        'Some proteins have hundreds of amino acids.'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'A single amino-acid swap changes the protein\'s 3D shape, which changes its function. This is the textbook example of structure ↔ function in biochemistry.'
    }
  ]
};

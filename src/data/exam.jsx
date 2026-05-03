import React from 'react';
import { AnchorImage } from '../components/Visual.jsx';

// Helper for inline images on questions
const Img = (src, alt, caption) => <AnchorImage src={src} alt={alt} caption={caption} />;

export const examConfig = {
  subject: 'Biology EOC Prep',
  totalQuestions: 60,
  timed: false,
  timeLimitMin: 90,
  passThreshold: 70
};

export const exam = [
  // Chapter 1: Nature of Science (5 questions)
  {
    chapter: 'Nature of Science', q: 'Which of the following is the strongest evidence that a scientific claim is reliable?',
    type: 'mcq',
    choices: ['It was published in a popular magazine.', 'It was peer reviewed and independently replicated.', 'It involved expensive equipment.', 'It was discussed by industry leaders.'],
    correct: 1, difficulty: 'E',
    explanation: 'Peer review + independent replication are the gold standard. Popular press, costly tools, and discussions are not validations.',
    visual: Img('ch01_nature_of_science/01_officialeoc_p1.jpeg', 'FL Biology EOC reference', 'Florida Biology EOC')
  },
  {
    chapter: 'Nature of Science', q: 'A scientist is testing whether a fertilizer increases plant growth. Which is the best CONTROL group?',
    type: 'mcq',
    choices: ['A plant given twice as much fertilizer.', 'A plant given no fertilizer (otherwise treated identically).', 'A plant given a different fertilizer.', 'A plant kept in the dark.'],
    correct: 1, difficulty: 'E',
    explanation: 'A control group differs ONLY in the variable being tested. Same conditions, no fertilizer, gives the comparison baseline.'
  },
  {
    chapter: 'Nature of Science', q: 'In an experiment on yeast metabolism vs. temperature, which is the INDEPENDENT variable?',
    type: 'mcq',
    choices: ['Mass of yeast', 'Volume of CO₂ produced', 'Water temperature', 'Mass of sugar'],
    correct: 2, difficulty: 'E',
    explanation: 'The variable the experimenter deliberately changes is independent — temperature. CO₂ is the dependent variable; yeast and sugar masses are controls.'
  },
  {
    chapter: 'Nature of Science', q: 'A scientific theory is best described as',
    type: 'mcq',
    choices: ['A guess that hasn\'t been tested.', 'A broad, well-substantiated explanation supported by evidence from many independent investigations.', 'A mathematical description of a pattern.', 'A claim that anyone can make.'],
    correct: 1, difficulty: 'M',
    explanation: 'In science, a theory like cell theory or evolution is supported by enormous bodies of evidence — not a casual guess.'
  },
  {
    chapter: 'Nature of Science', q: 'A study reports a correlation between coffee drinking and heart disease. Which is the most defensible interpretation?',
    type: 'mcq',
    choices: ['Coffee causes heart disease.', 'Heart disease causes coffee drinking.', 'There is a relationship between the two; further research is needed to establish causality.', 'Coffee prevents heart disease.'],
    correct: 2, difficulty: 'M',
    explanation: 'Correlation does not prove causation. There may be confounding variables (lifestyle, age) explaining the link.'
  },

  // Chapter 2: Biochemistry (6 questions)
  {
    chapter: 'Biochemistry', q: 'Which property of water is responsible for water rising up a plant\'s xylem against gravity?',
    type: 'mcq',
    choices: ['High specific heat', 'Cohesion combined with adhesion', 'Universal solvent property', 'Lower density when frozen'],
    correct: 1, difficulty: 'M',
    explanation: 'Cohesion (water-water H-bonds) + adhesion (water-vessel walls) together produce capillary action.',
    visual: Img('ch02_biochemistry/11_unit2_p1_i0.jpeg', 'Hydrogen bonds between water molecules', 'Hydrogen bonding')
  },
  {
    chapter: 'Biochemistry', q: 'Which of the four major macromolecules contains nitrogen and serves as enzymes, transporters, and structural components?',
    type: 'mcq',
    choices: ['Carbohydrates', 'Lipids', 'Proteins', 'Nucleic acids only'],
    correct: 2, difficulty: 'E',
    explanation: 'Proteins are nitrogen-containing polymers of amino acids and serve as enzymes, transporters, structural components, etc.',
    visual: Img('ch02_biochemistry/02_officialeoc_p3.png', 'Macromolecule comparison chart', 'Comparison of macromolecules')
  },
  {
    chapter: 'Biochemistry', q: 'An enzyme is heated above its optimal temperature. What happens?',
    type: 'mcq',
    choices: ['Reaction rate increases indefinitely.', 'The enzyme denatures and loses its function.', 'It evolves into a more stable enzyme.', 'It binds the substrate more tightly.'],
    correct: 1, difficulty: 'M',
    explanation: 'High temperature disrupts H-bonds and other shape-stabilizing interactions, denaturing the protein. Function is generally lost.'
  },
  {
    chapter: 'Biochemistry', q: 'Which best describes the difference between nucleic acids and enzymes?',
    type: 'mcq',
    choices: [
      'Nucleic acids are amino acid building blocks; enzymes build phospholipids.',
      'Nucleic acids store genetic information; enzymes catalyze reactions.',
      'Nucleic acids inhibit reactions; enzymes provide structure.',
      'Nucleic acids and enzymes do the same job.'],
    correct: 1, difficulty: 'E',
    explanation: 'DNA and RNA store and transfer genetic information. Enzymes (mostly proteins) catalyze reactions.'
  },
  {
    chapter: 'Biochemistry', q: 'Which best compares lipids and carbohydrates?',
    type: 'mcq',
    choices: [
      'Both are made from monosaccharide monomers; lipids are hydrophobic.',
      'Both contain C, H, and O; carbs have repeating monomer units, lipids do not.',
      'Both contain N; lipids contain S.',
      'Lipids contain phosphorus, carbs contain nitrogen.'],
    correct: 1, difficulty: 'M',
    explanation: 'Both have C, H, O. Carbs polymerize from sugars; lipids are not built from a single repeating unit.',
    visual: Img('ch02_biochemistry/13_unit2_p1_i2.png', 'Macromolecule structures', 'The four macromolecule classes')
  },
  {
    chapter: 'Biochemistry', q: 'In which condition would large organic molecules most likely form during a Miller-Urey-style experiment?',
    type: 'mcq',
    choices: [
      'When amino acids and nucleic acids both formed.',
      'When O₂ was slowly added.',
      'When RNA segments capable of catalysis formed.',
      'When the mixture was repeatedly heated and cooled.'],
    correct: 3, difficulty: 'H',
    explanation: 'Heat-cool cycling concentrates reactants and provides activation energy. Free O₂ would oxidize and destroy the precursors.'
  },

  // Chapter 3: Cells (6 questions)
  {
    chapter: 'Cells', q: 'Which feature defines a cell as eukaryotic?',
    type: 'mcq',
    choices: ['Ability to move', 'Ability to reproduce', 'Presence of a nucleus', 'Presence of ribosomes'],
    correct: 2, difficulty: 'E',
    explanation: 'Eukaryotes have membrane-bound nuclei. All cells reproduce and have ribosomes; many cells move.',
    visual: Img('ch03_cells/03_cells_image2.png', 'Eukaryotic cell — animal', 'Eukaryotic animal cell')
  },
  {
    chapter: 'Cells', q: 'Which best compares plant and animal cell structures?',
    type: 'mcq',
    choices: [
      'Animal cells have walls and a large central vacuole.',
      'Animal cells lack chloroplasts, walls, and a large central vacuole, while plant cells have all three.',
      'Plant cells lack mitochondria.',
      'Plant cells lack ribosomes.'],
    correct: 1, difficulty: 'M',
    explanation: 'Plants uniquely have walls, chloroplasts, central vacuole. They DO have mitochondria and ribosomes.',
    visual: Img('ch03_cells/04_cells_image3.png', 'Plant vs animal cell side-by-side', 'Plant vs. animal cells')
  },
  {
    chapter: 'Cells', q: 'A red blood cell placed in pure water will',
    type: 'mcq',
    choices: ['Shrivel from water loss.', 'Swell and burst due to osmotic water gain.', 'Become more salty inside.', 'Stay unchanged.'],
    correct: 1, difficulty: 'M',
    explanation: 'Pure water is hypotonic. Water flows into the cell by osmosis until it lyses.',
    visual: Img('ch03_cells/16_unit4_p3_i0.jpeg', 'Tonicity diagram', 'Effects of tonicity on cells')
  },
  {
    chapter: 'Cells', q: 'A protein destined for secretion outside the cell follows which path?',
    type: 'mcq',
    choices: [
      'Cytoplasmic ribosome → mitochondria → membrane.',
      'Rough ER → Golgi → vesicle → plasma membrane (exocytosis).',
      'Lysosome → smooth ER → Golgi.',
      'Nucleus → vacuole.'],
    correct: 1, difficulty: 'M',
    explanation: 'Secretory pathway: rough ER → Golgi → vesicle → exocytosis at plasma membrane.',
    visual: Img('ch03_cells/15_unit4_p1_i1.png', 'Endomembrane flow', 'Endomembrane secretory pathway')
  },
  {
    chapter: 'Cells', q: 'Active transport requires',
    type: 'mcq',
    choices: ['No energy, just a concentration gradient.', 'Light energy.', 'ATP, because movement is against the gradient.', 'Cell wall pressure.'],
    correct: 2, difficulty: 'E',
    explanation: 'Moving substances against their concentration gradient requires energy from ATP — this is the defining feature of active transport.',
    visual: Img('ch03_cells/19_unit4_p4_i1.png', 'Membrane proteins for transport', 'Channel and carrier proteins')
  },
  {
    chapter: 'Cells', q: 'Which organelle would be MOST abundant in a muscle cell?',
    type: 'mcq',
    choices: ['Lysosomes', 'Centrioles', 'Mitochondria', 'Smooth ER'],
    correct: 2, difficulty: 'E',
    explanation: 'Muscle cells have very high ATP demand → packed with mitochondria.',
    visual: Img('ch03_cells/05_cells_image4.png', 'Organelle functions chart', 'Major organelles')
  },

  // Chapter 4: Energy in Cells (6 questions)
  {
    chapter: 'Energy in Cells', q: 'Which equation describes photosynthesis?',
    type: 'mcq',
    choices: [
      'C₆H₁₂O₆ + H₂O → CO₂ + energy',
      '6 CO₂ + 6 H₂O + light → C₆H₁₂O₆ + 6 O₂',
      'C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O + energy',
      'CO₂ + O₂ + H₂O + energy → CH₂O₅'],
    correct: 1, difficulty: 'E',
    explanation: 'Photosynthesis converts CO₂ + H₂O + light energy into glucose + O₂.',
    visual: Img('ch04_energy_in_cells/01_unit5_p1_i0.png', 'Photosynthesis equation', 'Photosynthesis')
  },
  {
    chapter: 'Energy in Cells', q: 'What is the role of O₂ in cellular respiration?',
    type: 'mcq',
    choices: [
      'Yields ATP as it travels down the chain.',
      'Acts as the final acceptor of electrons and hydrogen, forming water.',
      'Combines with carbon to make CO₂.',
      'Combines with lactate to form pyruvate.'],
    correct: 1, difficulty: 'M',
    explanation: 'O₂ is the terminal electron acceptor in the ETC; it becomes H₂O. Without O₂, the chain backs up and ATP production halts.',
    visual: Img('ch04_energy_in_cells/04_unit5_image4.png', 'Cellular respiration overview', 'Three stages of respiration')
  },
  {
    chapter: 'Energy in Cells', q: 'What are the reactants of cellular respiration?',
    type: 'mcq',
    choices: ['H₂O and O₂', 'Glucose and O₂', 'Glucose and CO₂', 'CO₂ and H₂O'],
    correct: 1, difficulty: 'E',
    explanation: 'Glucose + O₂ are the inputs of aerobic respiration; the outputs are CO₂, H₂O, and ATP.',
    visual: Img('ch04_energy_in_cells/05_unit5_image5.png', 'Cellular respiration stages', 'Respiration overview')
  },
  {
    chapter: 'Energy in Cells', q: 'A plant in total darkness will',
    type: 'mcq',
    choices: [
      'Die immediately.',
      'Survive on cellular respiration of stored sugars until reserves run out.',
      'Switch to fermentation only.',
      'Photosynthesize using ambient room light.'],
    correct: 1, difficulty: 'M',
    explanation: 'Plants do BOTH photosynthesis (light-dependent) AND respiration (24/7). In darkness they live off stored glucose via mitochondrial respiration.'
  },
  {
    chapter: 'Energy in Cells', q: 'During strenuous exercise, muscle cells produce lactic acid because',
    type: 'mcq',
    choices: [
      'They switch to photosynthesis.',
      'They run lactic-acid fermentation to regenerate NAD⁺ when O₂ is limited.',
      'They start the Krebs cycle without O₂.',
      'They release CO₂ instead.'],
    correct: 1, difficulty: 'M',
    explanation: 'Limited O₂ causes ETC backup. Cells run fermentation to regenerate NAD⁺ so glycolysis can continue making 2 ATP.'
  },
  {
    chapter: 'Energy in Cells', q: 'Where do the light-dependent reactions of photosynthesis occur?',
    type: 'mcq',
    choices: ['Stroma of the chloroplast', 'Thylakoid membranes', 'Mitochondrial matrix', 'Cytoplasm'],
    correct: 1, difficulty: 'E',
    explanation: 'Thylakoid membranes house the photosystems and chlorophyll; the Calvin cycle occurs in the surrounding stroma.',
    visual: Img('ch04_energy_in_cells/03_unit5_image3.png', 'Photosynthesis stages', 'Light vs dark reactions')
  },

  // Chapter 5: Cell Cycle (5 questions)
  {
    chapter: 'Cell Cycle', q: 'Which best compares mitosis and meiosis?',
    type: 'mcq',
    choices: [
      'Mitosis: 1 division → 2 diploid identical daughters; meiosis: 2 divisions → 4 haploid varied gametes.',
      'Mitosis: 2 divisions → diploid daughters; meiosis: 1 division → haploid gametes.',
      'Mitosis: 2 divisions → haploid; meiosis: 1 division → diploid.',
      'Mitosis: 1 division → haploid gametes; meiosis: 2 divisions → diploid daughters.'],
    correct: 0, difficulty: 'M',
    explanation: 'Standard rule: mitosis = 1 round → 2 identical diploid daughters; meiosis = 2 rounds → 4 unique haploid gametes.',
    visual: Img('ch05_cell_cycle/04_eocbank_img31.jpeg', 'Mitosis vs meiosis comparison', 'Mitosis vs. meiosis')
  },
  {
    chapter: 'Cell Cycle', q: 'Which best explains why meiosis produces more genetic diversity than mitosis?',
    type: 'mcq',
    choices: [
      'Daughter cells are diploid with twice the genetic material.',
      'Haploid daughters are fertilized, doubling chromosome number.',
      'Independent assortment in meiosis I shuffles chromosome combinations.',
      'More daughter cells are produced.'],
    correct: 2, difficulty: 'M',
    explanation: 'Independent assortment + crossing over together produce immense combinatorial diversity in gametes — the basis of sibling differences.',
    visual: Img('ch05_cell_cycle/02_eocbank_img14.jpeg', 'Meiosis stages', 'Meiosis I and II')
  },
  {
    chapter: 'Cell Cycle', q: 'During which phase of mitosis do sister chromatids separate?',
    type: 'mcq',
    choices: ['Prophase', 'Metaphase', 'Anaphase', 'Telophase'],
    correct: 2, difficulty: 'E',
    explanation: 'Anaphase: sister chromatids separate and are pulled to opposite poles by spindle fibers.',
    visual: Img('ch05_cell_cycle/07_unit6_p1_i0.jpeg', 'Mitosis PMAT stages', 'Stages of mitosis')
  },
  {
    chapter: 'Cell Cycle', q: 'A human skin cell has 46 chromosomes. After mitosis, each daughter cell has',
    type: 'mcq',
    choices: ['23', '46', '92', '0'],
    correct: 1, difficulty: 'E',
    explanation: 'Mitosis preserves chromosome number. 46 → 46 in each daughter.',
    visual: Img('ch05_cell_cycle/05_officialeoc_p4.png', 'Cell cycle diagram', 'Cell cycle phases')
  },
  {
    chapter: 'Cell Cycle', q: 'Cells with mutations in BOTH copies of the tumor suppressor gene p53 are most likely to',
    type: 'mcq',
    choices: ['Stop dividing.', 'Continue dividing despite DNA damage.', 'Switch to meiosis.', 'Become haploid.'],
    correct: 1, difficulty: 'M',
    explanation: 'p53 normally pauses the cell cycle to repair damage or trigger apoptosis. Loss of p53 = cell divides with damaged DNA → cancer.'
  },

  // Chapter 6: DNA & Protein Synthesis (6 questions)
  {
    chapter: 'DNA & Proteins', q: 'Why do cells need both tRNA AND mRNA?',
    type: 'mcq',
    choices: [
      'tRNA bends to carry amino acids; mRNA carries the recipe — different jobs.',
      'mRNA repairs DNA mistakes.',
      'tRNA works on ribosomes; mRNA in the nucleus.',
      'mRNA brings information to the nucleus.'],
    correct: 0, difficulty: 'M',
    explanation: 'mRNA carries the codon sequence; tRNA brings the matching amino acid. Different shapes for different jobs.',
    visual: Img('ch06_dna_protein_synthesis/04_eocbank_img19.jpeg', 'Translation at ribosome', 'Codon-anticodon pairing')
  },
  {
    chapter: 'DNA & Proteins', q: 'A DNA template reads ATCAGTGAT. After transcription and translation, how many amino acids result?',
    type: 'mcq',
    choices: ['5', '4', '2', '3'],
    correct: 3, difficulty: 'E',
    explanation: '9 nucleotides ÷ 3 = 3 codons = 3 amino acids.',
    visual: Img('ch06_dna_protein_synthesis/06_officialeoc_p7.png', 'DNA double helix', 'DNA double helix')
  },
  {
    chapter: 'DNA & Proteins', q: 'In what order does information flow during gene expression?',
    type: 'mcq',
    choices: ['Protein → DNA → mRNA', 'mRNA → DNA → Protein', 'DNA → mRNA → Protein', 'DNA → Protein → mRNA'],
    correct: 2, difficulty: 'E',
    explanation: 'The central dogma: DNA → mRNA (transcription) → Protein (translation).',
    visual: Img('ch06_dna_protein_synthesis/03_eocbank_img18.png', 'Central dogma flow', 'DNA → RNA → Protein')
  },
  {
    chapter: 'DNA & Proteins', q: 'During DNA replication, part of the DNA reads ACCGTAC and the new strand reads TGGAATG. The mismatches will',
    type: 'mcq',
    choices: [
      'Cause cells to look or operate differently from cells with the original DNA.',
      'Be ignored, leaving the strand shorter.',
      'Be exactly like the original.',
      'When the new strand is used as a template, the daughter strand will differ from the original — mutation propagated.'],
    correct: 3, difficulty: 'H',
    explanation: 'A replicated mismatch is copied forward to all descendants of the new strand.',
    visual: Img('ch06_dna_protein_synthesis/02_eocbank_img17.jpeg', 'Replication fork', 'DNA replication')
  },
  {
    chapter: 'DNA & Proteins', q: 'Which is a correct base pairing in DNA?',
    type: 'mcq',
    choices: ['A-G', 'A-T', 'C-T', 'G-U'],
    correct: 1, difficulty: 'E',
    explanation: 'In DNA: A pairs with T, G pairs with C. (A-U is RNA.)',
    visual: Img('ch06_dna_protein_synthesis/09_unit7_p1_i0.jpeg', 'DNA base pairing diagram', 'Complementary base pairing')
  },
  {
    chapter: 'DNA & Proteins', q: 'A point mutation changes one base but the protein is unchanged. The most likely reason is',
    type: 'mcq',
    choices: [
      'The mutation was repaired before transcription.',
      'The mutated codon is synonymous — codes for the same amino acid.',
      'The protein folds differently.',
      'mRNA is unaffected by DNA changes.'],
    correct: 1, difficulty: 'M',
    explanation: 'The genetic code is degenerate — multiple codons map to the same amino acid. Such "silent" mutations leave protein unchanged.'
  },

  // Chapter 7: Genetics (6 questions)
  {
    chapter: 'Genetics', q: 'Brown eyes are dominant to blue. Two brown-eyed parents have a blue-eyed child. The most likely reason is',
    type: 'mcq',
    choices: [
      'Each parent must carry the recessive allele.',
      'Eye color is sex-linked.',
      'Mutations changed the child\'s alleles.',
      'One parent has only blue-eyed parents.'],
    correct: 0, difficulty: 'E',
    explanation: 'Both parents must be Bb (heterozygous). 1/4 of offspring will be bb (blue).',
    visual: Img('ch07_genetics/04_eocbank_img24.png', 'Punnett square', 'Punnett square')
  },
  {
    chapter: 'Genetics', q: 'Pea plants: white flowers (recessive) × purple (dominant). Generation: 89 purple : 31 white plants. Parents were',
    type: 'mcq',
    choices: [
      'Both heterozygous (Pp × Pp).',
      'Both homozygous purple.',
      'One white, one heterozygous.',
      'One heterozygous, one homozygous purple.'],
    correct: 0, difficulty: 'M',
    explanation: '89:31 ≈ 3:1 — the classic Pp × Pp signature ratio.'
  },
  {
    chapter: 'Genetics', q: 'A pedigree shows a trait that affects mostly males with carrier mothers. The mode of inheritance is',
    type: 'mcq',
    choices: ['Autosomal dominant', 'Autosomal recessive', 'X-linked recessive', 'Mitochondrial'],
    correct: 2, difficulty: 'M',
    explanation: 'X-linked recessive: males (only one X) need only one copy to express; carrier mothers pass it.',
    visual: Img('ch07_genetics/06_eocbank_img26.jpeg', 'X-linked recessive pedigree', 'X-linked recessive pattern')
  },
  {
    chapter: 'Genetics', q: 'Two cats heterozygous for polydactyly (Pp × Pp) have 12 kittens. About how many will have extra digits?',
    type: 'mcq',
    choices: ['0', '6', '9', '12'],
    correct: 2, difficulty: 'M',
    explanation: '3/4 dominant phenotype × 12 = 9 kittens.',
    visual: Img('ch07_genetics/01_eocbank_img21.png', 'Pea plant cross showing 3:1', '3:1 phenotype ratio')
  },
  {
    chapter: 'Genetics', q: 'A type AB person × type O person can produce children of which blood type(s)?',
    type: 'mcq',
    choices: ['Only AB', 'Only O', 'A or B', 'A, B, AB, or O'],
    correct: 2, difficulty: 'M',
    explanation: 'Iᴬ Iᴮ × ii → ½ Iᴬi (A) and ½ Iᴮi (B). Neither AB nor O is possible.',
    visual: Img('ch07_genetics/05_eocbank_img25.jpeg', 'Test cross example', 'Test cross')
  },
  {
    chapter: 'Genetics', q: 'A red snapdragon (RR) × white (WW) → all pink offspring. This is',
    type: 'mcq',
    choices: ['Codominance', 'Incomplete dominance', 'Polygenic', 'X-linked'],
    correct: 1, difficulty: 'M',
    explanation: 'Heterozygote shows an INTERMEDIATE phenotype — the definition of incomplete dominance.'
  },

  // Chapter 8: Evolution & Classification (6 questions)
  {
    chapter: 'Evolution', q: 'Comparison of skulls and skeletons of modern humans and extinct hominids supports evolution because',
    type: 'mcq',
    choices: [
      'It dates the specimens.',
      'It shows direct interaction between hominids and humans.',
      'Similar skull, hand, and hip shapes suggest common ancestry.',
      'It explains why hominids were inferior.'],
    correct: 2, difficulty: 'M',
    explanation: 'Anatomical similarities — homologous structures — point to descent from a shared ancestor.',
    visual: Img('ch08_evolution_classification/07_practicetest_p11.png', 'Hominid hand and feet comparison', 'Hominid comparative anatomy')
  },
  {
    chapter: 'Evolution', q: 'Most hibiscus on a Pacific island were killed by a lava flow. Surviving plants are mostly orange — even though other islands have a mix. The best explanation is',
    type: 'mcq',
    choices: [
      'Cross-pollination changed the percentage.',
      'Plants here had a higher mutation rate.',
      'Bottleneck → genetic drift in the small surviving population.',
      'Orange plants resisted lava better than white.'],
    correct: 2, difficulty: 'M',
    explanation: 'Random survival of a small subset is a population bottleneck — genetic drift, not selection.',
    visual: Img('ch08_evolution_classification/03_eocbank_img4.png', 'Natural selection illustration', 'Variation, selection, inheritance')
  },
  {
    chapter: 'Evolution', q: 'A snake species is introduced to an ecosystem with no natural predators. The most likely long-term effect is',
    type: 'mcq',
    choices: [
      'Native snakes interbreed with the invader, increasing biodiversity.',
      'The invader outcompetes natives, possibly causing extinction.',
      'Mutualism develops.',
      'The invader becomes prey for native predators.'],
    correct: 1, difficulty: 'M',
    explanation: 'Invasive species without predators expand and outcompete or directly displace natives. This is a top cause of biodiversity loss.'
  },
  {
    chapter: 'Evolution', q: 'Florida panthers have been confined to South Florida by habitat loss. The most likely long-term genetic effect is',
    type: 'mcq',
    choices: [
      'Population grows.',
      'Hunting success increases.',
      'Limited food causes extinction by starvation.',
      'Reduced genetic variation, leaving them vulnerable to disease.'],
    correct: 3, difficulty: 'M',
    explanation: 'Small isolated populations lose variation through drift and inbreeding — they\'re fragile to disease and environmental change.',
    visual: Img('ch08_evolution_classification/05_eocbank_img7.jpeg', 'Speciation diagram', 'Allopatric isolation')
  },
  {
    chapter: 'Evolution', q: 'Antibiotic resistance in bacteria is best explained by',
    type: 'mcq',
    choices: [
      'Antibiotics directly cause mutations.',
      'Pre-existing resistant variants survive antibiotic exposure and multiply — natural selection in action.',
      'Bacteria learn resistance.',
      'Wrong antibiotics are prescribed.'],
    correct: 1, difficulty: 'M',
    explanation: 'Variation existed; antibiotic = selection pressure; resistant individuals reproduce; population shifts. Bacteria do not "learn".',
    visual: Img('ch08_evolution_classification/04_eocbank_img5.png', 'Mechanisms of evolution diagram', 'Evolutionary mechanisms')
  },
  {
    chapter: 'Evolution', q: 'Which best argues for separating Archaea and Bacteria into their own domains?',
    type: 'mcq',
    choices: [
      'Genetic analyses showed Archaea are more ancient.',
      'They make membranes and copy DNA differently — fundamentally distinct molecular biology.',
      'Phylogenetic studies showed they store DNA in nuclei differently.',
      'Monera was getting too large.'],
    correct: 1, difficulty: 'M',
    explanation: 'Archaea use ether-linked lipids and have eukaryotic-style replication machinery — biochemically distinct from Bacteria.'
  },

  // Chapter 9: Ecology (7 questions)
  {
    chapter: 'Ecology', q: 'In a marine food web phytoplankton → krill → fish → seal, which has the LEAST available energy?',
    type: 'mcq',
    choices: ['Phytoplankton', 'Krill', 'Fish', 'Seal'],
    correct: 3, difficulty: 'E',
    explanation: '~10% of energy passes to each higher trophic level. By the time we reach the seal, most energy has been lost as heat.',
    visual: Img('ch09_ecology/10_practicetest_p8.png', 'Marine food web', 'Marine food web')
  },
  {
    chapter: 'Ecology', q: 'Which correctly traces energy through a marine food web?',
    type: 'mcq',
    choices: [
      'Fish → seabirds → seal → penguin',
      'Phytoplankton → krill → fish → seal',
      'Seal → seabirds → fish → phytoplankton',
      'Zooplankton → phytoplankton → krill → squid'],
    correct: 1, difficulty: 'E',
    explanation: 'Energy starts with producers (phytoplankton) and flows up the trophic levels.',
    visual: Img('ch09_ecology/11_practicetest_p9.png', 'Food web diagram', 'Trophic flow')
  },
  {
    chapter: 'Ecology', q: 'When a population reaches carrying capacity, the birth and death rates are',
    type: 'mcq',
    choices: ['Approximately equal', 'Crashing', 'Density dependent', 'Density independent'],
    correct: 0, difficulty: 'E',
    explanation: 'At K, births ≈ deaths. The population stabilizes around the carrying capacity.',
    visual: Img('ch09_ecology/04_eocbank_img28.jpeg', 'Population growth curve', 'Logistic vs exponential growth')
  },
  {
    chapter: 'Ecology', q: 'Rainbow trout need ≥6.0 mg/L dissolved O₂. A stream has only 5.5 mg/L. Which action best raises O₂?',
    type: 'mcq',
    choices: [
      'Add more bends to slow water down.',
      'Cut down trees to warm the water.',
      'Remove aquatic plants.',
      'Remove dams to allow faster flow.'],
    correct: 3, difficulty: 'H',
    explanation: 'Faster, more turbulent water dissolves more O₂. Slowing or warming would lower O₂; removing plants would reduce daytime O₂ output.'
  },
  {
    chapter: 'Ecology', q: 'Which describes how an ABIOTIC factor impacts ecosystem dynamics?',
    type: 'mcq',
    choices: [
      'A parasite reduces host population.',
      'Competing organisms keep each other from overpopulating.',
      'Predators control herbivores.',
      'Seasonal temperature changes kill some individuals.'],
    correct: 3, difficulty: 'M',
    explanation: 'Abiotic = non-living. Temperature is non-living. Parasites, predators, and competition are biotic.',
    visual: Img('ch09_ecology/01_eocbank_img1.jpeg', 'Carbon cycle / ecosystem diagram', 'Ecosystem cycles')
  },
  {
    chapter: 'Ecology', q: 'Why is human-produced CO₂ a problem despite being needed for photosynthesis?',
    type: 'mcq',
    choices: [
      'It leads to higher global temperatures.',
      'It disrupts the cycling of other greenhouse gases.',
      'It adds CO₂ to the oceans.',
      'It causes uncontrolled photosynthesis.'],
    correct: 0, difficulty: 'E',
    explanation: 'Excess CO₂ enhances the greenhouse effect, raising global temperatures and altering climate.',
    visual: Img('ch09_ecology/03_eocbank_img2.jpeg', 'Human impact on environment', 'Human ecological impact')
  },
  {
    chapter: 'Ecology', q: 'Which choice is most helpful for sustainability?',
    type: 'mcq',
    choices: [
      'Buying paper products from harvested trees.',
      'Buying fewer mass-produced products.',
      'Switching from petroleum to natural gas.',
      'Using solar power to generate electricity.'],
    correct: 3, difficulty: 'E',
    explanation: 'Solar is a renewable, near-zero-emission energy source. Natural gas is still a fossil fuel.'
  },

  // Chapter 10: Human Body & Plants (7 questions)
  {
    chapter: 'Human Body', q: 'Fever and dehydration affect cardiovascular function how?',
    type: 'mcq',
    choices: [
      'Body temp ↑ and fluids ↑ → heart rate and respiration ↓.',
      'Body temp ↑ and fluids ↓ → heart rate and respiration ↑.',
      'Body temp ↑ and fluids ↓ → blood viscosity ↓.',
      'Body temp ↑ and fluids ↑ → blood viscosity ↑.'],
    correct: 1, difficulty: 'M',
    explanation: 'Less fluid → lower blood volume → heart compensates with higher rate. Higher temperature also raises metabolic demand.',
    visual: Img('ch10_human_body/01_practicetest_p17.png', 'Cardiovascular system', 'Cardiovascular system')
  },
  {
    chapter: 'Human Body', q: 'A patient has high blood pressure and atherosclerosis in the coronary artery. The most likely future condition is',
    type: 'mcq',
    choices: [
      'Brain cancer from low oxygen.',
      'Stiff joints from high pressure.',
      'Stroke from plaque blocking the brain.',
      'Heart attack from blocked blood flow to heart muscle.'],
    correct: 3, difficulty: 'M',
    explanation: 'Coronary artery disease threatens the heart muscle directly. Plaque blockage = heart attack.'
  },
  {
    chapter: 'Human Body', q: 'Which is the BEST way to detect HIV infection?',
    type: 'mcq',
    choices: [
      'Inflammatory response.',
      'Antibodies in blood.',
      'Histamine levels.',
      'White blood cell count.'],
    correct: 1, difficulty: 'M',
    explanation: 'HIV testing detects antibodies the body makes against HIV proteins (or HIV viral RNA in newer tests).'
  },
  {
    chapter: 'Human Body', q: 'Why don\'t doctors prescribe antibiotics for viral colds?',
    type: 'mcq',
    choices: [
      'Antibiotics weaken immunity.',
      'Antiviral therapy must be tried first.',
      'Antibiotics don\'t affect viruses, and overuse selects for antibiotic-resistant bacteria.',
      'Antibiotics worsen viral symptoms.'],
    correct: 2, difficulty: 'M',
    explanation: 'Antibiotics target bacteria, not viruses. Misuse drives resistance — a serious public health problem.'
  },
  {
    chapter: 'Human Body', q: 'A plant\'s vascular tissue contains only xylem (no phloem). Effect on the plant?',
    type: 'mcq',
    choices: [
      'Cells with chloroplasts function normally without leaf glucose.',
      'CO₂ cannot reach leaves; photosynthesis stops.',
      'Glucose made in leaves cannot reach the rest of the plant; non-photosynthetic cells starve.',
      'Other tissues transport water normally; processes continue.'],
    correct: 2, difficulty: 'H',
    explanation: 'Phloem moves sugars from sources to sinks. Without it, roots and stems get no glucose to fuel respiration.',
    visual: Img('ch10_human_body/03_unit12_p3_i0.jpeg', 'Leaf cross-section', 'Leaf vascular tissue')
  },
  {
    chapter: 'Human Body', q: 'A plant has stomata, xylem, phloem, male pollen cones, and female seed cones. Most likely classification?',
    type: 'mcq',
    choices: ['Gymnosperm (Coniferophyta)', 'Bryophyte', 'Seedless vascular', 'Angiosperm'],
    correct: 0, difficulty: 'M',
    explanation: 'Seeds in cones (no flowers) + vascular tissue = gymnosperm. Conifers are the largest gymnosperm group.',
    visual: Img('ch10_human_body/02_unit12_p1_i0.png', 'Plant anatomy with vascular tissue', 'Plant anatomy')
  },
  {
    chapter: 'Human Body', q: 'Why is normal scrotal temperature lower than core body temperature?',
    type: 'mcq',
    choices: [
      'For metabolic efficiency.',
      'Sperm production is heat-sensitive; higher temperature impairs sperm development.',
      'To prevent infection.',
      'To slow blood flow.'],
    correct: 1, difficulty: 'M',
    explanation: 'Spermatogenesis requires temperatures slightly below 37°C. Elevated scrotal temperature reduces fertility.'
  },
];

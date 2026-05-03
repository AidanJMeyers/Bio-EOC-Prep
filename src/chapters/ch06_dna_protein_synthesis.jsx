import React from 'react';
import { Callout, Table } from '../components/Visual.jsx';

export default {
  id: 6,
  title: 'DNA, RNA & Protein Synthesis',
  subtitle: 'Replication, transcription, translation — the central dogma (SC.912.L.16.3–16.5, L.16.9)',
  blocks: [
    {
      id: 'dna-structure',
      title: 'DNA Structure',
      subtitle: 'The double helix',
      images: [
        { src: 'svg/dna_helix.svg', alt: 'DNA double helix with antiparallel strands and base pairs A-T, G-C', caption: 'Antiparallel double helix with A-T and G-C base pairs' }
      ],
      content: (
        <>
          <p>DNA is a polymer of <strong>nucleotides</strong>. Each nucleotide has three parts: a <strong>deoxyribose sugar</strong>, a <strong>phosphate group</strong>, and one of four <strong>nitrogenous bases</strong> — adenine (A), thymine (T), guanine (G), or cytosine (C). The sugar–phosphate backbone is identical along the entire molecule; only the order of bases varies, and that order encodes information.</p>
          <p>DNA forms a <strong>double helix</strong>: two antiparallel strands held together by hydrogen bonds between complementary bases. <strong>Chargaff\'s rule</strong>: A pairs with T (2 H-bonds), G pairs with C (3 H-bonds). So if one strand is 5\'-ATCGGT-3\', its partner is 3\'-TAGCCA-5\'.</p>
          <Callout kind="info" title="Why anti-parallel matters">One strand runs 5\'→3\', the other 3\'→5\'. DNA polymerase can only add to the 3\' end, which is why one strand replicates continuously (leading) and the other in fragments (lagging — Okazaki fragments).</Callout>
        </>
      )
    },
    {
      id: 'replication',
      title: 'DNA Replication',
      subtitle: 'Semiconservative copying',
      images: [],
      content: (
        <>
          <p>Before a cell divides, every DNA molecule must be duplicated. <strong>Helicase</strong> unwinds the helix; <strong>DNA polymerase</strong> reads each strand as a template and adds complementary nucleotides at the 3\' end. Each new double helix has one old strand + one new strand — the basis of <strong>semiconservative replication</strong>.</p>
          <Table
            headers={['Enzyme', 'Job']}
            rows={[
              ['Helicase', 'Unwinds the double helix at the replication fork'],
              ['DNA polymerase', 'Adds new nucleotides 5\'→3\' using the template strand'],
              ['Ligase', 'Seals breaks between Okazaki fragments on the lagging strand'],
              ['Primase', 'Makes the short RNA primer DNA polymerase needs to start']
            ]}
          />
          <Callout kind="warn" title="Replication errors → mutations">DNA polymerase has built-in proofreading, but mismatches occasionally slip through (~1 in 10⁹ bases). Most are silent or harmless; some cause genetic disease; some drive evolution.</Callout>
        </>
      )
    },
    {
      id: 'central-dogma',
      title: 'The Central Dogma',
      subtitle: 'DNA → RNA → Protein',
      images: [
        { src: 'svg/central_dogma.svg', alt: 'Central dogma flow: DNA in nucleus → mRNA codons → amino acid chain at ribosome', caption: 'DNA → mRNA (transcription) → Protein (translation)' }
      ],
      content: (
        <>
          <p>The central dogma describes how genetic information flows in cells:</p>
          <div className="bg-sky-50 border border-sky-300 p-3 rounded text-center font-semibold text-sm">
            DNA → (transcription) → mRNA → (translation) → Protein
          </div>
          <p><strong>Transcription</strong> (in the nucleus): DNA is used as a template to make a complementary <strong>messenger RNA</strong>. <strong>Translation</strong> (on ribosomes in the cytoplasm): the mRNA is read in 3-base <strong>codons</strong>, each specifying one amino acid.</p>
        </>
      )
    },
    {
      id: 'transcription',
      title: 'Transcription: DNA → mRNA',
      subtitle: 'In the nucleus',
      content: (
        <>
          <p><strong>RNA polymerase</strong> binds DNA, separates the strands, and reads one strand 3\'→5\' while building an mRNA strand 5\'→3\'. RNA differs from DNA in three ways:</p>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li>Sugar = ribose, not deoxyribose.</li>
            <li>Bases = A, U, G, C — <strong>uracil replaces thymine</strong>.</li>
            <li>Single-stranded.</li>
          </ul>
          <Callout kind="info" title="Pre-mRNA processing">In eukaryotes, the initial transcript is processed: a 5\' cap and 3\' poly-A tail are added; introns are spliced out, leaving exons that code for protein.</Callout>
        </>
      )
    },
    {
      id: 'translation',
      title: 'Translation: mRNA → Protein',
      subtitle: 'Ribosome reads codons',
      images: [],
      content: (
        <>
          <p>The ribosome reads mRNA three nucleotides at a time. Each <strong>codon</strong> specifies one of the 20 amino acids (or a "start"/"stop" signal). <strong>Transfer RNA (tRNA)</strong> shuttles amino acids in: each tRNA has an <strong>anticodon</strong> that pairs with the mRNA codon and carries the matching amino acid at its other end.</p>
          <Table
            headers={['Player', 'Job']}
            rows={[
              ['mRNA', 'Carries the recipe — sequence of codons'],
              ['Ribosome', 'Reads the codons; catalyzes peptide bond formation'],
              ['tRNA', 'Brings the amino acids; anticodon pairs with codon'],
              ['Amino acids', 'Building blocks of the protein']
            ]}
          />
          <Callout kind="tip" title="Why we need both mRNA AND tRNA">mRNA carries the message but cannot fetch amino acids. tRNA brings amino acids but doesn\'t carry the recipe. Each does one specialist job; both are essential.</Callout>
        </>
      )
    },
    {
      id: 'mutations',
      title: 'Mutations',
      subtitle: 'Changes to DNA — and what they do',
      images: [],
      content: (
        <>
          <Table
            headers={['Type', 'What changes', 'Example impact']}
            rows={[
              ['Substitution (point mutation)', 'One base swapped for another', 'Silent / missense / nonsense'],
              ['Insertion', 'Base added', 'Frameshift — usually severe'],
              ['Deletion', 'Base removed', 'Frameshift — usually severe'],
              ['Chromosomal mutation', 'Whole-segment changes (inversions, duplications, translocations)', 'Often catastrophic']
            ]}
          />
          <Callout kind="info" title="Why frameshifts are worse">Insertion or deletion of one or two nucleotides shifts every downstream codon, garbling the entire rest of the protein. A substitution affects only one codon (and may even be silent if the new codon codes for the same amino acid).</Callout>
          <p>Mutations in <strong>gametes</strong> are inherited by offspring. Mutations in <strong>somatic cells</strong> stay with that individual and may cause cancer locally but are not passed on.</p>
        </>
      )
    }
  ],
  keyReview: {
    vocab: [
      { term: 'Nucleotide', def: 'Sugar + phosphate + nitrogenous base — DNA/RNA monomer.' },
      { term: 'Double helix', def: 'Two antiparallel DNA strands twisted together.' },
      { term: 'Base pairing', def: 'A–T (DNA) or A–U (RNA); G–C always.' },
      { term: 'DNA replication', def: 'Semiconservative copying of DNA before division.' },
      { term: 'DNA polymerase', def: 'Enzyme that adds nucleotides during replication.' },
      { term: 'Helicase', def: 'Unwinds the double helix.' },
      { term: 'Transcription', def: 'DNA → mRNA in the nucleus.' },
      { term: 'Translation', def: 'mRNA → protein at the ribosome.' },
      { term: 'mRNA', def: 'Messenger — carries the recipe to the ribosome.' },
      { term: 'tRNA', def: 'Transfer — brings amino acids; has an anticodon.' },
      { term: 'Codon', def: 'Three mRNA nucleotides specifying one amino acid.' },
      { term: 'Anticodon', def: 'The three-nucleotide tRNA region complementary to a codon.' },
      { term: 'Mutation', def: 'A change in DNA sequence.' },
      { term: 'Frameshift', def: 'Insertion/deletion that shifts the reading frame — usually disastrous.' }
    ],
    laws: [
      { name: 'Chargaff\'s rule', desc: 'In DNA: %A = %T and %G = %C. The basis for base-pairing.' },
      { name: 'Central dogma', desc: 'Information flows DNA → RNA → Protein.' }
    ],
    methods: [
      { name: 'Codon counting', expand: 'L = 9 → 3 codons → 3 amino acids', desc: 'Divide nucleotides by 3 to get amino acid count (assuming no stop codon).' },
      { name: 'Complementary strand', desc: 'Substitute A↔T (or A→U for mRNA), G↔C, write 5\'→3\' direction reversed.' }
    ],
    diagrams: []
  },
  questions: [
    {
      q: 'Why do cells need both tRNA and mRNA?',
      type: 'mcq',
      choices: [
        'Only tRNA bends into a shape that can carry specific amino acids.',
        'Only mRNA can be used to repair mistakes in the DNA sequence.',
        'tRNA is used on the ribosomes and the mRNA is used in the nucleus.',
        'mRNA brings information to the nucleus for the tRNA to use.'
      ],
      correct: 0,
      difficulty: 'M',
      explanation: 'mRNA carries the recipe; tRNA fetches amino acids — only tRNA has the right shape (anticodon + amino-acid attachment site). The two roles are not interchangeable.'
    },
    {
      q: 'A codon is three nucleotides. If the DNA template sequence is ATCAGTGAT, how many amino acids will result from transcription + translation?',
      type: 'mcq',
      choices: ['5', '4', '2', '3'],
      correct: 3,
      difficulty: 'E',
      explanation: '9 nucleotides ÷ 3 nucleotides per codon = 3 codons → 3 amino acids.'
    },
    {
      q: 'A cell is replicating its DNA. Part of the DNA reads A-C-C-G-T-A-C and the new strand built off it reads T-G-G-A-A-T-G. What might this cause?',
      type: 'mcq',
      choices: [
        'Cells with the new DNA will look or operate differently from cells with the original.',
        'Only sections of DNA without mistakes will be used in the future, so the strand will shorten.',
        'The DNA will be exactly like the original since only the original strand is used as template.',
        'When the new strand is used as a template, the strand built from it will differ from the original.'
      ],
      correct: 3,
      difficulty: 'H',
      explanation: 'The new strand has TWO mismatches (positions 4 and 5: should be C-A but is A-A). When this strand later serves as a template, the resulting daughter will inherit a permanently altered sequence — a mutation propagated through future replications.'
    },
    {
      q: 'Which is a correct base pairing in DNA?',
      type: 'mcq',
      choices: ['A pairs with G', 'A pairs with T', 'C pairs with T', 'G pairs with U'],
      correct: 1,
      difficulty: 'E',
      explanation: 'In DNA: A–T and G–C. (In RNA: A–U.) The size and number of H-bonds dictate the matching pairs.'
    },
    {
      q: 'In which order does information flow during gene expression?',
      type: 'mcq',
      choices: [
        'Protein → DNA → mRNA',
        'mRNA → DNA → Protein',
        'DNA → mRNA → Protein',
        'DNA → Protein → mRNA'
      ],
      correct: 2,
      difficulty: 'E',
      explanation: 'The central dogma: DNA → mRNA (transcription) → Protein (translation).'
    },
    {
      q: 'Which describes the difference between DNA replication and transcription?',
      type: 'mcq',
      choices: [
        'Both produce DNA, but replication uses one strand and transcription uses both.',
        'Replication produces an identical DNA copy; transcription produces an mRNA copy of one gene.',
        'Replication happens at ribosomes; transcription happens in mitochondria.',
        'Both produce mRNA in the cytoplasm.'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'Replication duplicates the entire DNA molecule before cell division. Transcription copies a single gene into mRNA so it can be translated.'
    },
    {
      q: 'A point mutation changes one DNA base. The protein produced is unchanged. The most likely reason is',
      type: 'mcq',
      choices: [
        'The mutation was repaired before transcription.',
        'The mutated codon happens to code for the same amino acid (silent / synonymous mutation).',
        'The protein folds differently.',
        'mRNA is not affected by DNA changes.'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'The genetic code is degenerate — multiple codons can code for the same amino acid. A single-base substitution that lands on a synonymous codon doesn\'t change the protein.'
    },
    {
      q: 'Inserting one extra nucleotide into the middle of a coding sequence is usually catastrophic because',
      type: 'mcq',
      choices: [
        'It shifts the reading frame so every codon downstream is misread (frameshift mutation).',
        'It directly destroys the ribosome.',
        'It causes the cell to enter mitosis.',
        'It removes all the start codons.'
      ],
      correct: 0,
      difficulty: 'M',
      explanation: 'A 1- or 2-base insertion shifts the codon grouping for the rest of the gene — every downstream amino acid changes, often producing a non-functional protein and a premature stop codon.'
    },
    {
      q: 'Where in a eukaryotic cell does TRANSCRIPTION occur?',
      type: 'mcq',
      choices: ['Cytoplasm', 'Ribosome', 'Nucleus', 'Mitochondrial matrix'],
      correct: 2,
      difficulty: 'E',
      explanation: 'Transcription happens in the nucleus where DNA is. The mRNA is then exported to the cytoplasm for translation at ribosomes.'
    },
    {
      q: 'Which best describes the role of DNA polymerase?',
      type: 'mcq',
      choices: [
        'It unwinds the DNA double helix at the replication fork.',
        'It adds new complementary nucleotides to a growing DNA strand using the template strand.',
        'It splices introns out of pre-mRNA.',
        'It joins amino acids at the ribosome.'
      ],
      correct: 1,
      difficulty: 'E',
      explanation: 'DNA polymerase reads each parent strand and adds complementary nucleotides 5\'→3\'. Helicase unwinds; spliceosomes splice; ribosomes join amino acids.'
    }
  ]
};

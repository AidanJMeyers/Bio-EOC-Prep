import React from 'react';
import { Callout, Table } from '../components/Visual.jsx';

export default {
  id: 7,
  title: 'Genetics & Heredity',
  subtitle: 'Mendelian inheritance, Punnett squares, pedigrees, sex linkage (SC.912.L.16.1–16.2)',
  blocks: [
    {
      id: 'mendel',
      title: 'Mendel\'s Laws',
      subtitle: 'Segregation and independent assortment',
      images: [
        { src: 'ch07_genetics/01_eocbank_img21.png', alt: 'Mendel\'s pea-plant cross — source: Bio EOC bank', caption: 'F₁ × F₁ produces 3:1 ratio' }
      ],
      content: (
        <>
          <p>Gregor Mendel\'s pea experiments (1860s) established two foundational rules of genetics:</p>
          <ul className="list-disc ml-6 text-sm space-y-1.5">
            <li><strong>Law of Segregation:</strong> Each parent has two alleles for each gene, but only one is passed to each offspring (random which one).</li>
            <li><strong>Law of Independent Assortment:</strong> Different genes are inherited independently of each other (when on different chromosomes).</li>
          </ul>
          <Callout kind="info" title="Why the 3:1 ratio?">A heterozygous × heterozygous cross (Aa × Aa) gives 1 AA : 2 Aa : 1 aa. Both AA and Aa show the dominant phenotype, so phenotypes appear 3 dominant : 1 recessive.</Callout>
        </>
      )
    },
    {
      id: 'vocabulary',
      title: 'Genetics Vocabulary',
      subtitle: 'The terms every question relies on',
      content: (
        <>
          <Table
            headers={['Term', 'Definition']}
            rows={[
              ['Gene', 'Stretch of DNA coding for a trait'],
              ['Allele', 'Variant form of a gene (e.g., A vs. a)'],
              ['Dominant allele', 'Expressed even when only one copy is present (capital letter)'],
              ['Recessive allele', 'Only expressed when both copies are present (lowercase)'],
              ['Genotype', 'The actual alleles an organism carries (e.g., Aa)'],
              ['Phenotype', 'The observable trait (e.g., brown eyes)'],
              ['Homozygous', 'Two identical alleles (AA or aa)'],
              ['Heterozygous', 'Two different alleles (Aa)'],
              ['Carrier', 'Heterozygous individual showing dominant phenotype but able to pass the recessive']
            ]}
          />
          <Callout kind="warn" title="Don\'t confuse">Genotype = letters (genetic). Phenotype = appearance (physical).</Callout>
        </>
      )
    },
    {
      id: 'punnett',
      title: 'Punnett Squares',
      subtitle: 'Predicting offspring',
      images: [
        { src: 'ch07_genetics/04_eocbank_img24.png', alt: 'Punnett square — source: Bio EOC bank', caption: 'Monohybrid Punnett square' },
        { src: 'ch07_genetics/05_eocbank_img25.jpeg', alt: 'Test cross — source: Bio EOC bank', caption: 'Test cross example' }
      ],
      content: (
        <>
          <p>A Punnett square predicts offspring genotype/phenotype probabilities. For Aa × Aa:</p>
          <Table
            headers={['', 'A', 'a']}
            rows={[
              ['A', 'AA', 'Aa'],
              ['a', 'Aa', 'aa']
            ]}
          />
          <p>Genotype ratio = 1 AA : 2 Aa : 1 aa. Phenotype ratio (assuming complete dominance) = 3 dominant : 1 recessive.</p>
          <p><strong>Test cross:</strong> Cross an unknown dominant phenotype with a homozygous recessive (aa). If all offspring are dominant → unknown was AA. If half are recessive → unknown was Aa.</p>
        </>
      )
    },
    {
      id: 'sex-linkage',
      title: 'Sex-Linked Inheritance',
      subtitle: 'Genes on the X chromosome',
      images: [
        { src: 'ch07_genetics/06_eocbank_img26.jpeg', alt: 'X-linked recessive trait pedigree — source: Bio EOC bank', caption: 'X-linked recessive: more affected males' }
      ],
      content: (
        <>
          <p>Most sex-linked genes are on the X chromosome. Males have only one X, so they only need one copy of an X-linked recessive allele to show the trait. Females have two Xs, so they need both copies. As a result, X-linked recessive disorders (red-green colorblindness, hemophilia, Duchenne muscular dystrophy) are far more common in males.</p>
          <Callout kind="info" title="Pedigree clue">An X-linked recessive trait often skips a generation through carrier mothers, with affected sons of carrier mothers and unaffected daughters who are themselves carriers.</Callout>
          <Table
            headers={['Mother', 'Father', 'Daughter outcomes', 'Son outcomes']}
            rows={[
              ['XᴬXᵃ (carrier)', 'XᴬY (normal)', '½ carrier, ½ unaffected', '½ affected, ½ unaffected'],
              ['XᴬXᴬ', 'XᵃY (affected)', 'All carriers', 'All unaffected'],
              ['XᴬXᵃ', 'XᵃY (affected)', '½ carrier, ½ affected', '½ affected, ½ unaffected']
            ]}
          />
        </>
      )
    },
    {
      id: 'pedigrees-modes',
      title: 'Pedigrees & Modes of Inheritance',
      subtitle: 'Reading family trees',
      images: [
        { src: 'ch07_genetics/07_eocbank_img27.jpeg', alt: 'Pedigree analysis example — source: Bio EOC bank', caption: 'Sample pedigree chart' }
      ],
      content: (
        <>
          <Table
            headers={['Pattern', 'Telltale sign']}
            rows={[
              ['Autosomal dominant', 'Trait shows in every generation; affected has affected parent'],
              ['Autosomal recessive', 'Skips generations; two unaffected parents can have affected child'],
              ['X-linked recessive', 'Mostly affects males; carrier mothers'],
              ['X-linked dominant', 'Affected males pass it to ALL daughters, no sons'],
              ['Mitochondrial', 'Mother passes to ALL offspring; father passes to none']
            ]}
          />
          <Callout kind="tip" title="The 3-question test">For any pedigree: (1) Is the trait dominant or recessive? (Skip a generation = recessive.) (2) Is it autosomal or X-linked? (Affected dad → affected daughter? possibly autosomal dominant; mostly males affected? X-linked recessive.) (3) Can you assign genotypes to everyone consistent with what\'s observed?</Callout>
        </>
      )
    },
    {
      id: 'beyond-mendel',
      title: 'Beyond Simple Mendelian',
      subtitle: 'Codominance, incomplete dominance, polygenic',
      content: (
        <>
          <ul className="list-disc ml-6 text-sm space-y-1.5">
            <li><strong>Incomplete dominance:</strong> Heterozygote is intermediate (red × white snapdragon = pink).</li>
            <li><strong>Codominance:</strong> Both alleles fully expressed (AB blood type).</li>
            <li><strong>Multiple alleles:</strong> &gt;2 alleles in the population (ABO blood: I^A, I^B, i).</li>
            <li><strong>Polygenic:</strong> Many genes contribute to one trait (height, skin color, eye color).</li>
            <li><strong>Sex-linked:</strong> Genes on sex chromosomes.</li>
            <li><strong>Pleiotropy:</strong> One gene affects many traits (sickle-cell hemoglobin → anemia, pain crises, malaria resistance).</li>
            <li><strong>Epistasis:</strong> One gene masks another (Labrador coat color: B/b vs. E/e).</li>
          </ul>
        </>
      )
    }
  ],
  keyReview: {
    vocab: [
      { term: 'Gene', def: 'Sequence of DNA that codes for a protein/trait.' },
      { term: 'Allele', def: 'Variant of a gene (e.g., A or a).' },
      { term: 'Dominant', def: 'Allele that masks the recessive when heterozygous.' },
      { term: 'Recessive', def: 'Allele expressed only when homozygous.' },
      { term: 'Genotype', def: 'Genetic makeup (AA, Aa, aa).' },
      { term: 'Phenotype', def: 'Observable trait.' },
      { term: 'Homozygous', def: 'Two identical alleles.' },
      { term: 'Heterozygous', def: 'Two different alleles.' },
      { term: 'Punnett square', def: 'Grid for predicting offspring genotype/phenotype probabilities.' },
      { term: 'Test cross', def: 'Cross with homozygous recessive to determine unknown genotype.' },
      { term: 'Carrier', def: 'Heterozygous individual; phenotypically dominant.' },
      { term: 'Pedigree', def: 'Family-tree chart showing trait inheritance.' },
      { term: 'Sex-linked', def: 'Gene located on a sex chromosome (usually X).' },
      { term: 'Codominance', def: 'Both alleles fully expressed (e.g., AB blood).' },
      { term: 'Incomplete dominance', def: 'Heterozygote shows intermediate phenotype.' }
    ],
    laws: [
      { name: 'Law of Segregation', desc: 'During gamete formation, the two alleles for each gene separate so each gamete gets only one.' },
      { name: 'Law of Independent Assortment', desc: 'Genes on different chromosomes are inherited independently of each other.' }
    ],
    methods: [
      { name: 'Punnett square procedure', expand: 'Determine parent gametes → grid → count', desc: '(1) Determine each parent\'s alleles. (2) List gametes along the rows and columns. (3) Combine. (4) Count genotype and phenotype ratios.' },
      { name: '3:1 / 1:2:1 / 9:3:3:1', desc: 'Memorize: monohybrid cross (Aa × Aa) → 3:1 phenotype, 1:2:1 genotype. Dihybrid (AaBb × AaBb) → 9:3:3:1 phenotype.' }
    ],
    diagrams: []
  },
  questions: [
    {
      q: 'The allele for brown eyes is dominant to blue. How could two brown-eyed parents produce a blue-eyed child?',
      type: 'mcq',
      choices: [
        'Each parent must carry the recessive allele for blue eyes (both heterozygous).',
        'Eye color is sex-linked.',
        'Mutations after fertilization changed the child\'s alleles.',
        'One parent must have had only blue-eyed parents.'
      ],
      correct: 0,
      difficulty: 'E',
      explanation: 'Blue is recessive (bb). Both parents must contribute a b allele, so both must be heterozygous (Bb). A Bb × Bb cross has a 1/4 chance of bb offspring.'
    },
    {
      q: 'Polydactylism is a dominant trait. Two cats heterozygous for polydactyly (Pp × Pp) have 12 kittens. About how many kittens are expected to show polydactyly?',
      type: 'mcq',
      choices: ['0', '6', '9', '12'],
      correct: 2,
      difficulty: 'M',
      explanation: 'Pp × Pp gives 3/4 dominant phenotype (PP + 2Pp). 3/4 × 12 = 9 kittens with extra digits.'
    },
    {
      q: 'In pea plants white flowers are recessive to purple. A generation produces 89 purple : 31 white plants. What were the parents?',
      type: 'mcq',
      choices: [
        'Both parents heterozygous for flower color (Pp × Pp).',
        'Both parents homozygous purple (PP × PP).',
        'One white parent, one heterozygous (pp × Pp).',
        'One heterozygous, one homozygous purple (Pp × PP).'
      ],
      correct: 0,
      difficulty: 'M',
      explanation: '89:31 ≈ 3:1 — the signature of a Pp × Pp (heterozygous × heterozygous) cross.'
    },
    {
      q: 'A pedigree shows a trait that affects mostly males, with carrier mothers. The most likely inheritance is',
      type: 'mcq',
      choices: ['Autosomal dominant', 'Autosomal recessive', 'X-linked recessive', 'Mitochondrial'],
      correct: 2,
      difficulty: 'M',
      explanation: 'X-linked recessive is the classic "mostly males affected; carrier mothers; skips through females" pattern (e.g., colorblindness, hemophilia).'
    },
    {
      q: 'In humans, color blindness is X-linked recessive. A carrier mother and an unaffected father have a son. The chance the son is colorblind is',
      type: 'mcq',
      choices: ['0%', '25%', '50%', '100%'],
      correct: 2,
      difficulty: 'M',
      explanation: 'XᴬXᵃ × XᴬY → sons inherit either Xᴬ or Xᵃ from mom (50/50). Sons with Xᵃ Y are colorblind. So 50% of sons.'
    },
    {
      q: 'A red snapdragon (RR) is crossed with a white snapdragon (WW). All offspring are pink. This is an example of',
      type: 'mcq',
      choices: ['Codominance', 'Incomplete dominance', 'Polygenic inheritance', 'Sex linkage'],
      correct: 1,
      difficulty: 'M',
      explanation: 'Pink (intermediate) heterozygote phenotype = incomplete dominance. Codominance would show BOTH colors expressed (e.g., red and white spots).'
    },
    {
      q: 'A person with type AB blood is crossed with a person with type O blood. The possible offspring blood types are',
      type: 'mcq',
      choices: ['Only AB', 'Only O', 'A or B', 'A, B, AB, or O'],
      correct: 2,
      difficulty: 'M',
      explanation: 'AB (Iᴬ Iᴮ) × O (ii) → ½ Iᴬi (type A) and ½ Iᴮi (type B). No AB or O offspring possible.'
    },
    {
      q: 'A test cross is used to',
      type: 'mcq',
      choices: [
        'Test if a trait is dominant or recessive.',
        'Determine whether an organism showing the dominant phenotype is homozygous or heterozygous.',
        'Identify which chromosome carries a gene.',
        'Force a recessive allele to express.'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'Cross the unknown with a homozygous recessive (aa). All dominant offspring → AA. Roughly half recessive offspring → Aa.'
    },
    {
      q: 'Two parents heterozygous for cystic fibrosis (an autosomal recessive disease) have four children. Which is the LEAST likely outcome?',
      type: 'mcq',
      choices: [
        'All four children are unaffected carriers.',
        'All four children are unaffected (carriers or non-carriers).',
        'All four children are affected.',
        '3 unaffected, 1 affected.'
      ],
      correct: 2,
      difficulty: 'H',
      explanation: 'Each child has only a 1/4 chance of being affected. Four affected in a row = (1/4)⁴ = 1/256 — far less likely than the other options.'
    },
    {
      q: 'Skin color in humans varies along a continuous spectrum because',
      type: 'mcq',
      choices: [
        'It is determined by a single dominant allele.',
        'It is sex-linked.',
        'It is polygenic — many genes contribute additively to the phenotype.',
        'It is determined by environment alone.'
      ],
      correct: 2,
      difficulty: 'M',
      explanation: 'Polygenic traits show continuous variation because many genes each contribute a small effect. Single-gene traits give discrete categories.'
    }
  ]
};

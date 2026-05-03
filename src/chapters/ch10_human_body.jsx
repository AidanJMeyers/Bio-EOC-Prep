import React from 'react';
import { Callout, Table } from '../components/Visual.jsx';

export default {
  id: 10,
  title: 'Human Body Systems & Health',
  subtitle: 'Organ systems, immunity, reproduction, plant systems (SC.912.L.14.7, L.14.36, L.14.52, L.16.13)',
  blocks: [
    {
      id: 'organ-systems',
      title: 'The 11 Organ Systems',
      subtitle: 'Each does one big job',
      content: (
        <>
          <Table
            headers={['System', 'Main job']}
            rows={[
              ['Integumentary (skin)', 'Barrier; thermoregulation; vitamin D'],
              ['Skeletal', 'Support, protection, calcium store, blood-cell production'],
              ['Muscular', 'Movement, posture, heat'],
              ['Nervous', 'Rapid communication and control'],
              ['Endocrine', 'Slower communication via hormones'],
              ['Cardiovascular', 'Transports blood — O₂, CO₂, nutrients, waste, hormones'],
              ['Lymphatic / Immune', 'Defends against pathogens; returns fluid'],
              ['Respiratory', 'Gas exchange (O₂ in / CO₂ out)'],
              ['Digestive', 'Breaks down food and absorbs nutrients'],
              ['Urinary', 'Filters blood, excretes waste, regulates fluid balance'],
              ['Reproductive', 'Produces gametes; bears young']
            ]}
          />
          <Callout kind="info" title="They cooperate">No system works alone. Running uses muscular (movement), skeletal (levers), respiratory (O₂), cardiovascular (delivery), nervous (control), endocrine (adrenaline), integumentary (sweating), and urinary (waste) — all simultaneously.</Callout>
        </>
      )
    },
    {
      id: 'cardiovascular',
      title: 'Cardiovascular System',
      subtitle: 'Heart, blood vessels, blood',
      images: [
        { src: 'svg/circulatory.svg', alt: 'Cardiovascular system showing heart, lungs, body tissues, and pulmonary and systemic circuits', caption: 'Two circuits: pulmonary (heart ↔ lungs) and systemic (heart ↔ body tissues)' }
      ],
      content: (
        <>
          <p>The heart pumps blood through two circuits:</p>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li><strong>Pulmonary circuit:</strong> right ventricle → lungs → left atrium. Picks up O₂ and drops off CO₂.</li>
            <li><strong>Systemic circuit:</strong> left ventricle → body → right atrium. Delivers O₂ to tissues; returns CO₂.</li>
          </ul>
          <Table
            headers={['Vessel', 'Direction', 'Wall']}
            rows={[
              ['Artery', 'Blood AWAY from heart', 'Thick, muscular, elastic — handle high pressure'],
              ['Vein', 'Blood BACK to heart', 'Thinner; one-way valves prevent backflow'],
              ['Capillary', 'Exchange site', 'Thin (one cell thick) — gas/nutrient exchange']
            ]}
          />
          <Callout kind="warn" title="Atherosclerosis + high blood pressure">Plaque buildup in arteries narrows them. If a plaque dislodges and blocks an artery feeding the heart → heart attack. If it blocks one feeding the brain → stroke (paralysis, confusion, weakness).</Callout>
        </>
      )
    },
    {
      id: 'immune',
      title: 'Immune System',
      subtitle: 'Innate and adaptive defenses',
      content: (
        <>
          <p>Two layers of defense:</p>
          <Table
            headers={['Defense layer', 'Speed', 'Specificity', 'Examples']}
            rows={[
              ['Innate (non-specific)', 'Immediate', 'General', 'Skin barrier, inflammation, white blood cells (neutrophils, macrophages)'],
              ['Adaptive (specific)', 'Days for first encounter', 'Tailored', 'Antibodies (B cells), T cells; immunological memory']
            ]}
          />
          <p><strong>Vaccination</strong> presents a harmless version of a pathogen so the adaptive immune system makes memory cells. On real exposure, the response is fast and strong.</p>
          <Callout kind="danger" title="Why annual flu shots?">The influenza virus mutates rapidly. Each year\'s vaccine targets the strains predicted to be most prevalent. Last year\'s antibodies don\'t recognize this year\'s slightly altered viral surface.</Callout>
          <Callout kind="warn" title="Antibiotics ≠ antivirals">Antibiotics target bacterial structures (cell walls, ribosomes). They have NO effect on viruses. Misusing them on viral colds also drives antibiotic resistance in bacteria — by killing susceptible bacteria and selecting for resistant ones.</Callout>
        </>
      )
    },
    {
      id: 'reproduction',
      title: 'Human Reproduction',
      subtitle: 'Gametes, fertilization, development',
      images: [],
      content: (
        <>
          <Table
            headers={['Structure', 'Function']}
            rows={[
              ['Testes', 'Produce sperm; produce testosterone'],
              ['Vas deferens', 'Carries sperm out from testes'],
              ['Ovaries', 'Produce eggs; produce estrogen and progesterone'],
              ['Fallopian tubes', 'Carry eggs to uterus; usual site of fertilization'],
              ['Uterus', 'Site of embryo/fetal development'],
              ['Placenta', 'Exchanges gases, nutrients, and waste between mother and fetus']
            ]}
          />
          <Callout kind="info" title="Why the scrotum is cooler than core temperature">Sperm production is heat-sensitive. Scrotal temperature is ~2-3°C below body temperature. If too high, sperm don\'t develop properly — a major cause of male infertility.</Callout>
          <p>Pregnancy progresses through embryonic stages where major systems begin forming early (week 3–8 cardiovascular, nervous), followed by fetal stages of growth and refinement.</p>
        </>
      )
    },
    {
      id: 'homeostasis-systems',
      title: 'Homeostasis Across Systems',
      subtitle: 'Fever, dehydration, blood pressure',
      content: (
        <>
          <p>Every body system contributes to homeostasis. Stress on one system propagates:</p>
          <Table
            headers={['Disturbance', 'Cardiovascular response']}
            rows={[
              ['Fever + dehydration', 'Body temperature ↑, fluid volume ↓ → heart rate and respiration ↑ to maintain delivery'],
              ['Exercise', 'O₂ demand ↑ → heart rate ↑, breathing ↑, vasodilation in muscle'],
              ['Cold', 'Vasoconstriction in skin to retain heat; shivering'],
              ['Standing up quickly', 'Blood pressure briefly drops → baroreceptors trigger heart-rate increase']
            ]}
          />
        </>
      )
    },
    {
      id: 'plants',
      title: 'Plant Tissues & Transport',
      subtitle: 'Xylem, phloem, leaves',
      images: [],
      content: (
        <>
          <Table
            headers={['Tissue', 'Direction', 'Carries']}
            rows={[
              ['Xylem', 'Roots → leaves (one-way)', 'Water and dissolved minerals'],
              ['Phloem', 'Bidirectional (sources to sinks)', 'Sugars (glucose) and amino acids'],
              ['Stomata (with guard cells)', 'Open/close pores in leaves', 'Gas exchange — CO₂ in, O₂ out, water lost']
            ]}
          />
          <Callout kind="info" title="If only xylem worked">If a plant\'s leaves had only xylem (no phloem), the glucose made in photosynthesis couldn\'t reach the rest of the plant. The non-photosynthetic cells would starve.</Callout>
          <Callout kind="warn" title="Clogged stomata">If the cuticle overgrows and clogs stomata, the plant can\'t exchange CO₂ for O₂ → photosynthesis halts.</Callout>
          <p><strong>Plant divisions:</strong></p>
          <Table
            headers={['Group', 'Vascular tissue?', 'Seeds?', 'Examples']}
            rows={[
              ['Bryophytes (mosses)', 'No', 'No', 'Mosses, liverworts'],
              ['Seedless vascular', 'Yes', 'No', 'Ferns'],
              ['Gymnosperms', 'Yes', 'Yes (no flowers)', 'Pines, firs, conifers'],
              ['Angiosperms', 'Yes', 'Yes (in flowers/fruits)', 'Most plants — apples, roses, grasses']
            ]}
          />
        </>
      )
    }
  ],
  keyReview: {
    vocab: [
      { term: 'Homeostasis', def: 'Maintenance of stable internal conditions.' },
      { term: 'Negative feedback', def: 'A mechanism that reverses a disturbance to return to set-point.' },
      { term: 'Artery', def: 'Carries blood AWAY from the heart.' },
      { term: 'Vein', def: 'Carries blood BACK to the heart.' },
      { term: 'Capillary', def: 'Site of exchange between blood and tissues.' },
      { term: 'Atherosclerosis', def: 'Hardening and narrowing of arteries from plaque.' },
      { term: 'Antibody', def: 'Protein produced by B cells; binds specific antigen.' },
      { term: 'Vaccine', def: 'Harmless antigen that primes adaptive immunity.' },
      { term: 'Antibiotic', def: 'Drug that kills BACTERIA (does not work on viruses).' },
      { term: 'Antigen', def: 'Molecule that triggers an immune response.' },
      { term: 'Placenta', def: 'Exchange organ between mother and fetus.' },
      { term: 'Xylem', def: 'Plant tissue that carries water up.' },
      { term: 'Phloem', def: 'Plant tissue that carries sugars throughout.' },
      { term: 'Stomata', def: 'Pores in leaves; gas exchange + water loss.' },
      { term: 'Angiosperm', def: 'Flowering plant; seeds in fruit.' },
      { term: 'Gymnosperm', def: 'Cone-bearing plant; "naked" seed.' }
    ],
    laws: [],
    methods: [
      { name: 'Bacterial vs. viral check', desc: 'Antibiotics work ONLY on bacteria. Antivirals or vaccines for viruses.' },
      { name: 'Vessel ID', expand: 'A → away; V → back; C → exchange', desc: 'Arteries: AWAY (high pressure). Veins: BACK to heart (one-way valves). Capillaries: EXCHANGE (thin walls).' }
    ],
    diagrams: []
  },
  questions: [
    {
      q: 'Illnesses can lead to fever and dehydration. How might these symptoms affect a person\'s cardiovascular system?',
      type: 'mcq',
      choices: [
        'Fever and dehydration increase body temp and fluids → heart rate and respiration decrease.',
        'Fever and dehydration increase body temp and decrease fluids → heart rate and respiration increase.',
        'Fever and dehydration increase body temp and decrease fluids → blood viscosity decreases.',
        'Fever and dehydration increase body temp and fluids → blood viscosity increases.'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'Less fluid means less blood volume → blood pressure drops, so the heart compensates by beating faster. Higher temperature also increases metabolic demand, raising both heart rate and respiration.'
    },
    {
      q: 'A patient has high blood pressure and atherosclerosis in the coronary artery. What condition is most likely in the future?',
      type: 'mcq',
      choices: [
        'Headaches and confusion from cancer in the brain due to low oxygen.',
        'Stiff joints and chest pains from high blood pressure on muscle and joint tissues.',
        'Confusion, weakness, and partial paralysis when plaque dislodges and blocks blood flow to the brain.',
        'Heart attack from severe plaque buildup reducing blood flow to heart muscle.'
      ],
      correct: 3,
      difficulty: 'M',
      explanation: 'Atherosclerosis in the CORONARY artery threatens the heart muscle itself. Reduced flow → ischemia → heart attack. (Choice C describes a stroke from plaque in cerebral arteries, not coronary.)'
    },
    {
      q: 'Which event happens earliest during pregnancy?',
      type: 'mcq',
      choices: [
        'The embryo\'s organs begin to function on their own.',
        'The embryo stores nutrients and minerals.',
        'The embryo\'s cartilage begins to become bone.',
        'The embryo reaches approximately fifteen inches in length.'
      ],
      correct: 0,
      difficulty: 'M',
      explanation: 'Major organ systems begin forming and functioning very early in embryonic development (weeks 3–8). Bone replaces cartilage later; nutrient storage and growth to 15 inches are in the late fetal period.'
    },
    {
      q: 'Which correctly compares vas deferens and fallopian tubes?',
      type: 'mcq',
      choices: [
        'Sperm leaves the body via the vas deferens; eggs leave the body via the fallopian tubes.',
        'Sperm travels through the vas deferens; eggs travel through the fallopian tubes.',
        'Vas deferens produces sperm; fallopian tubes produce eggs.',
        'Vas deferens stores sperm; fallopian tubes store eggs.'
      ],
      correct: 1,
      difficulty: 'E',
      explanation: 'Both are transport tubes — vas deferens carries sperm out of the testes; fallopian tubes carry eggs from ovary toward the uterus. Production happens in testes and ovaries, not in these tubes.'
    },
    {
      q: 'Normally, scrotal temperature is below body temperature. If it were higher than body temperature, what would happen?',
      type: 'mcq',
      choices: [
        'Sperm could not travel through the vas deferens.',
        'Sperm would be stored in the epididymis instead of the testes.',
        'Sperm would not develop properly.',
        'Sperm production rate would increase.'
      ],
      correct: 2,
      difficulty: 'M',
      explanation: 'Spermatogenesis is heat-sensitive. Higher scrotal temperature impairs sperm development — a leading cause of male infertility.'
    },
    {
      q: 'How does crossing over benefit organisms that reproduce sexually?',
      type: 'mcq',
      choices: [
        'It allows for fewer mutations in offspring.',
        'It adjusts the population\'s sex ratio.',
        'It increases genetic variation in offspring.',
        'It increases the number of chromosomes in offspring.'
      ],
      correct: 2,
      difficulty: 'E',
      explanation: 'Crossing over swaps DNA segments between homologous chromosomes during meiosis I, generating new allele combinations and thus more variation in gametes.'
    },
    {
      q: 'Which is the BEST way to detect whether someone has a viral infection like HIV?',
      type: 'mcq',
      choices: [
        'Check for an inflammatory response.',
        'Check for the presence of antibodies in the blood.',
        'Check for histamines.',
        'Check for white blood cells.'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'HIV testing relies on detecting antibodies the body has made against HIV proteins (or HIV viral RNA in early-stage NAT testing). Inflammation, histamines, and elevated WBCs are non-specific.'
    },
    {
      q: 'Why do people need a flu shot every year?',
      type: 'mcq',
      choices: [
        'Flu antibodies last only one year.',
        'The flu virus eventually breaks down the vaccine.',
        'The flu virus is constantly mutating and changing.',
        'There aren\'t enough antibodies in the vaccine to kill the entire virus.'
      ],
      correct: 2,
      difficulty: 'M',
      explanation: 'Influenza\'s surface antigens (hemagglutinin and neuraminidase) mutate rapidly. Each year\'s strain looks different enough that prior immunity gives only partial protection.'
    },
    {
      q: 'Why don\'t doctors prescribe antibiotics for colds and viral infections?',
      type: 'mcq',
      choices: [
        'Antibiotics weaken the immune system during viral illness.',
        'Cold and flu must be treated with antiviral therapies first; then antibiotics work.',
        'Antibiotics don\'t work on viruses, and overusing them selects for antibiotic-resistant bacteria — a serious public health risk.',
        'Side effects make patients sicker and prolong recovery.'
      ],
      correct: 2,
      difficulty: 'M',
      explanation: 'Two reasons: (1) antibiotics target bacterial structures, not viruses; (2) using them when not needed kills susceptible bacteria and lets resistant strains thrive — driving antibiotic resistance.'
    },
    {
      q: 'A plant\'s leaves develop with only xylem (no phloem) in the vascular tissue. What is the most likely effect on the plant?',
      type: 'mcq',
      choices: [
        'Cells with chloroplasts function as usual without needing glucose from leaves.',
        'CO₂ cannot be transported to leaf cells, halting photosynthesis.',
        'Glucose produced in leaves cannot reach the rest of the plant; cellular respiration in non-photosynthetic cells fails.',
        'Ground tissue can still transport water and nutrients, so other processes continue normally.'
      ],
      correct: 2,
      difficulty: 'H',
      explanation: 'Phloem distributes glucose. Without phloem, roots and other non-photosynthetic tissues starve — they need that glucose for respiration. Xylem alone is one-way water transport.'
    },
    {
      q: 'A plant species has stomata, xylem, phloem, male pollen cones, and female seed cones. The most logical classification is',
      type: 'mcq',
      choices: [
        'Gymnosperm — division Coniferophyta.',
        'Nonvascular plant — Bryophyta.',
        'Seedless vascular plant — Psilophyta.',
        'Angiosperm — Anthophyta.'
      ],
      correct: 0,
      difficulty: 'M',
      explanation: 'Pollen cones + seed cones (no flowers) + vascular tissue + seeds = gymnosperm. Conifers are the largest gymnosperm group.'
    }
  ]
};

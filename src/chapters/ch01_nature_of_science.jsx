import React from 'react';
import { Callout, Table, Pill } from '../components/Visual.jsx';

export default {
  id: 1,
  title: 'Nature of Science',
  subtitle: 'Scientific method, experimental design, theory vs. law (SC.912.N.1.1, L.14.1)',
  blocks: [
    {
      id: 'method',
      title: 'The Scientific Method',
      subtitle: 'How reliable knowledge gets made',
      images: [
        { src: 'svg/scientific_method.svg', alt: 'Scientific method flowchart with iterate-and-peer-review loop', caption: 'Iterative cycle: question → hypothesis → experiment → data → conclusion → peer review' }
      ],
      content: (
        <>
          <p>Science is a process for building reliable knowledge about the natural world. The scientific method is iterative: ask a question, form a testable hypothesis, design a controlled experiment, collect data, analyze, and draw conclusions. Reliable findings are those that survive <strong>peer review</strong> and produce the same results when independent labs repeat the experiment.</p>
          <Callout kind="info" title="Why peer review and replication matter">A single study—no matter how clever—is preliminary. Knowledge becomes scientifically reliable only when it is reproduced under independent conditions and survives scrutiny by other experts in the field.</Callout>
          <p>A well-designed experiment isolates one <strong>independent variable</strong> (the thing you change), measures one <strong>dependent variable</strong> (the thing you measure), and holds all <strong>controlled variables</strong> constant so any change in the dependent variable can be attributed to the independent variable.</p>
          <Table
            headers={['Variable type', 'Definition', 'Example (yeast metabolism vs. temperature)']}
            rows={[
              ['Independent', 'What you change', 'Water temperature'],
              ['Dependent', 'What you measure', 'Volume of CO₂ produced'],
              ['Controlled', 'Held constant', 'Mass of yeast, mass of sugar, vessel size, time'],
            ]}
          />
        </>
      )
    },
    {
      id: 'theory-law',
      title: 'Theory vs. Law vs. Hypothesis',
      subtitle: 'The single biggest misconception in biology',
      content: (
        <>
          <p>In everyday speech, "theory" means a guess. In science, the word means almost the opposite. A <strong>scientific theory</strong> is a broad, well-substantiated explanation supported by a vast body of evidence—e.g., cell theory, theory of evolution, atomic theory. A <strong>scientific law</strong> describes <em>what</em> happens (often mathematically) but not necessarily <em>why</em>—e.g., Mendel's law of segregation. A <strong>hypothesis</strong> is a single testable prediction.</p>
          <Callout kind="warn" title="Common EOC trap">Theories don't "graduate" into laws. They are different categories. A theory <em>explains</em>; a law <em>describes</em>. Both are supported by enormous amounts of evidence.</Callout>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li><strong>Hypothesis:</strong> "If yeast metabolism increases with temperature, then more CO₂ will be produced at 30°C than at 10°C."</li>
            <li><strong>Law:</strong> Hardy–Weinberg equation describes allele frequencies under specific conditions.</li>
            <li><strong>Theory:</strong> Cell theory — all living things are made of cells, cells come from pre-existing cells, and the cell is the basic unit of life.</li>
          </ul>
        </>
      )
    },
    {
      id: 'tech-progress',
      title: 'Technology Drives Scientific Progress',
      subtitle: 'Microscopes, sequencers, telescopes',
      content: (
        <>
          <p>Many breakthroughs in biology have followed directly from advances in technology. Robert Hooke's light microscope (1665) made cell theory possible; electron microscopes revealed organelles; DNA sequencing made genomics possible; CRISPR made precise gene editing affordable.</p>
          <Callout kind="tip" title="Pattern to recognize">When a question asks <em>why</em> a major leap in biology happened at a particular time, look for the new instrument or method that just became available. Technology often gates discovery.</Callout>
          <p>Cell theory has been continuously refined since Hooke—not because the original ideas were wrong, but because better tools (electron microscopes, fluorescent probes, live-cell imaging) have allowed deeper observation. Each new tool generates new data, which in turn sharpens or extends the theory.</p>
        </>
      )
    },
    {
      id: 'designing-experiments',
      title: 'Experimental Design Pitfalls',
      subtitle: 'Confounds, controls, sample size',
      content: (
        <>
          <p>Most "trick" questions on the EOC test whether you can identify a flaw in an experiment. Watch for:</p>
          <ul className="list-disc ml-6 text-sm space-y-1.5">
            <li><strong>Missing control group</strong> — without a comparison baseline, you can't claim cause.</li>
            <li><strong>Confounding variables</strong> — two things changing at once, so you can't tell which caused the result.</li>
            <li><strong>Tiny sample size</strong> — N = 3 lets random variation dominate.</li>
            <li><strong>Bias / placebo effect</strong> — fixed by blinding and randomization.</li>
            <li><strong>Correlation ≠ causation</strong> — two variables moving together does not prove one causes the other.</li>
          </ul>
          <Callout kind="info" title="EOC tip">If two things change at once in the experiment description, one of them is the confound the question is testing.</Callout>
        </>
      )
    }
  ],
  keyReview: {
    vocab: [
      { term: 'Hypothesis', def: 'A testable prediction stated as an "if…then…" relationship.', tag: 'CORE', tagColor: 'sky' },
      { term: 'Theory', def: 'A broad, well-evidenced explanation of natural phenomena (e.g., cell theory, evolution).', tag: 'CORE', tagColor: 'sky' },
      { term: 'Scientific law', def: 'A description of consistent natural patterns, often mathematical.', tag: 'CORE', tagColor: 'sky' },
      { term: 'Independent variable', def: 'The variable the experimenter deliberately changes.' },
      { term: 'Dependent variable', def: 'The variable measured to detect the effect.' },
      { term: 'Controlled variable', def: 'A factor held constant to prevent confounding.' },
      { term: 'Control group', def: 'The comparison group not exposed to the treatment.' },
      { term: 'Peer review', def: 'Pre-publication evaluation of work by independent experts.' },
      { term: 'Replication', def: 'Repeating an experiment to confirm reliability.' },
      { term: 'Bias', def: 'Systematic error favoring a particular result, mitigated by blinding & randomization.' }
    ],
    laws: [
      { name: 'Cell theory', desc: 'All living things are made of cells; cells are the basic unit of life; cells come from pre-existing cells.' },
      { name: 'Theory of evolution', desc: 'All life shares common ancestry; populations change over time through natural selection and other mechanisms.' }
    ],
    methods: [
      { name: 'IV-DV-CV check', desc: 'For any experiment, identify the independent, dependent, and controlled variables before drawing conclusions.' },
      { name: 'Replicate before believing', desc: 'Demand peer review and independent replication before treating a finding as established.' }
    ],
    diagrams: []
  },
  questions: [
    {
      q: 'A company claims its product is "scientifically proven." Which of the following is the strongest evidence that the claim is reliable?',
      type: 'mcq',
      choices: [
        'The company held discussions with leading industry scientists.',
        'Technology was used to gather and analyze the data.',
        'The results were peer reviewed and reproduced by independent labs.',
        'The findings were published in popular consumer magazines.'
      ],
      correct: 2,
      difficulty: 'M',
      explanation: 'Reliable scientific claims survive peer review AND independent replication. Discussions, technology use, or popular-press coverage are not validations of the underlying science.'
    },
    {
      q: 'A student investigates how temperature affects yeast metabolism. Yeast and sugar are added to water; gas volume is recorded. Which variables should be held CONSTANT?',
      type: 'mcq',
      choices: [
        'Mass of sugar and water temperature',
        'Mass of yeast and mass of sugar',
        'Volume of gas and water temperature',
        'Volume of gas and mass of yeast'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'Water temperature is the independent variable (deliberately changed); gas volume is the dependent variable (measured). The mass of yeast and sugar should be held constant so any change in gas volume can be attributed to temperature.'
    },
    {
      q: 'How are a scientific law and a scientific theory similar?',
      type: 'mcq',
      choices: [
        'Both are based on what we expect to happen from natural history.',
        'Both describe events that can be observed in nature.',
        'Both explain WHY events occur as they do in the natural world.',
        'Both represent a large amount of scientific investigation and evidence.'
      ],
      correct: 3,
      difficulty: 'M',
      explanation: 'Theories and laws differ in role (theories explain; laws describe), but both are backed by extensive evidence. A "guess" or "what we expect" is closer to a hypothesis.'
    },
    {
      q: 'Doctors trust cell theory because',
      type: 'mcq',
      choices: [
        'cell theory has been tested, refined, and observed to be true over hundreds of years.',
        'large medical institutions have conducted their own experiments justifying cell theory.',
        'the basics of cell theory have not changed since the original experiments.',
        'cell theory has been published in reputable journals.'
      ],
      correct: 0,
      difficulty: 'E',
      explanation: 'Cell theory\'s authority comes from cumulative testing, refinement, and replication over centuries — exactly what makes any scientific theory reliable.'
    },
    {
      q: 'Which stage of scientific investigation did the invention of the microscope most directly advance?',
      type: 'mcq',
      choices: [
        'Communicating the results of experimentation',
        'Gathering data for the investigation',
        'Generating explanations of phenomena',
        'Planning the investigation'
      ],
      correct: 1,
      difficulty: 'E',
      explanation: 'The microscope is a data-gathering instrument. It allowed scientists to observe and record cell-level data that no prior tool could capture.'
    },
    {
      q: 'Early elements of cell theory followed soon after Hooke\'s light microscope. What does this suggest about the evolution of cell theory?',
      type: 'mcq',
      choices: [
        'Improvements in technology are closely related to changes in cell theory.',
        'Isolated scientists contributed pieces of cell theory to form the whole.',
        'Progress on cell theory was delayed by a lack of technological progress.',
        'Scientists needed to focus less on cells and more on microscope development.'
      ],
      correct: 0,
      difficulty: 'M',
      explanation: 'New technologies (light microscopes → electron microscopes → fluorescence → live-cell imaging) repeatedly enabled refinement of cell theory.'
    },
    {
      q: 'A student tests whether classical music improves plant growth. She plays music for one plant and not the other; the music plant is by a sunny window, the silent plant is in a closet. What is the main flaw?',
      type: 'mcq',
      choices: [
        'There is no hypothesis.',
        'The sample size is too small to be meaningful, AND light is a confounding variable.',
        'The student should have used three plants instead of two.',
        'Plants cannot hear music.'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'Two confounded factors (light + music) plus tiny N = 1 vs 1 means any growth difference cannot be attributed to music. Either factor — or random variation — could explain the result.'
    },
    {
      q: 'In a drug trial, neither the doctors nor the patients know who received the real drug vs. placebo. This design is called',
      type: 'mcq',
      choices: [
        'a single-blind study.',
        'a double-blind study.',
        'an observational study.',
        'a meta-analysis.'
      ],
      correct: 1,
      difficulty: 'E',
      explanation: 'Double-blind studies hide the assignment from BOTH participants and researchers, eliminating placebo effects and observer bias.'
    },
    {
      q: 'A scientist observes that towns with more storks also have more babies born. She concludes that storks deliver babies. The flaw is',
      type: 'mcq',
      choices: [
        'her sample size is too small.',
        'she has confused correlation with causation; both may rise with town size.',
        'storks cannot lift babies.',
        'she did not perform peer review.'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'Two variables can correlate because both depend on a third hidden variable (here: town size / rural setting). Correlation never proves causation by itself.'
    },
    {
      q: 'A researcher reports a new cancer-curing compound based on results from one experiment in one lab. Before the medical community accepts the claim, what is required?',
      type: 'mcq',
      choices: [
        'Government approval only.',
        'Peer review and independent replication.',
        'Publication in any journal of the researcher\'s choice.',
        'A press conference announcing the results.'
      ],
      correct: 1,
      difficulty: 'E',
      explanation: 'Peer review (expert evaluation) plus replication by other labs is the universal standard. A single result, however dramatic, is preliminary.'
    }
  ]
};

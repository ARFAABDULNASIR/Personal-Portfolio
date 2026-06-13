'use client';

import { motion } from './motion';
import MaskText from './MaskText';

const marquee = [
  'Python', 'PyTorch', 'TensorFlow', 'Deep Learning', 'NLP', 'RAG',
  'Transformers', 'Scikit-learn', 'React', 'Next.js', 'Node.js',
  'TypeScript', 'MongoDB', 'PostgreSQL', 'Vector DBs', 'C++', 'OMNeT++',
  'Git', 'Docker', 'Streamlit', 'Data Viz',
];

const groups = [
  {
    n: '01',
    title: 'AI / Machine Learning',
    skills: ['Deep Learning', 'NLP', 'PyTorch', 'TensorFlow', 'Scikit-learn', 'RAG systems'],
  },
  {
    n: '02',
    title: 'Languages',
    skills: ['Python', 'TypeScript', 'JavaScript', 'C++', 'SQL'],
  },
  {
    n: '03',
    title: 'Web & Full-Stack',
    skills: ['React', 'Next.js', 'Node.js', 'REST APIs', 'Vue', 'Tailwind'],
  },
  {
    n: '04',
    title: 'Data & Systems',
    skills: ['MongoDB', 'PostgreSQL', 'Network Simulation', 'Big Data'],
  },
  {
    n: '05',
    title: 'Tooling',
    skills: ['Git', 'Linear', 'Linux', 'Jupyter', 'Streamlit'],
  },
  {
    n: '06',
    title: 'Beyond code',
    skills: ['Teaching', 'Recruitment', 'Communication', 'Problem-solving'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative scroll-mt-20 py-24 sm:py-32">
      {/* Marquee */}
      <div className="marquee-mask overflow-hidden border-y border-line py-5">
        <div className="flex w-max animate-marquee">
          {[...marquee, ...marquee].map((s, i) => (
            <span key={i} className="flex items-center gap-6 px-6 font-display text-2xl text-ink-soft sm:text-3xl">
              {s}
              <span className="text-accent">✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-6xl px-5 sm:px-8">
        <motion.p
          className="eyebrow text-accent"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          (03) — Toolkit
        </motion.p>
        <MaskText
          as="h2"
          lines={['What I work with']}
          className="mt-4 max-w-2xl font-display text-[clamp(2.2rem,6vw,4rem)] leading-none text-ink"
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              className="group bg-paper p-7 transition-colors hover:bg-paper-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.07 }}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-ink-faint">{g.n}</span>
                <span className="h-2 w-2 rounded-full bg-accent/0 transition-colors group-hover:bg-accent" />
              </div>
              <h3 className="mt-4 font-display text-xl text-ink">{g.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <span key={s} className="rounded-full border border-line bg-canvas px-3 py-1 text-xs text-ink-soft">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

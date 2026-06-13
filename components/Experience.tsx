'use client';

import { motion, useScroll, useTransform } from './motion';
import { useRef } from 'react';
import { GraduationCap } from 'lucide-react';
import MaskText from './MaskText';

const experiences = [
  {
    role: 'Software Engineering Intern',
    company: 'XenonDev',
    period: 'Jun – Sep 2026',
    type: 'Internship',
    description:
      'Building and shipping software features end-to-end alongside the engineering team — turning requirements into working, reviewed code.',
    tags: ['Software Engineering', 'Full-Stack', 'Collaboration'],
  },
  {
    role: 'Information Systems Intern',
    company: 'Fauji Fertilizer Company (FFC)',
    period: 'Jun – Jul 2026',
    type: 'Internship',
    description:
      'Worked within the Information Systems function of one of Pakistan\u2019s largest enterprises, getting hands-on with how real business systems and data flows are run and maintained.',
    tags: ['Information Systems', 'Enterprise IT', 'Data'],
  },
  {
    role: 'HR Associate',
    company: 'Code Kids PK',
    period: '2024 – 2025',
    type: 'Part-time',
    description:
      'Running recruitment, onboarding and employee relations — keeping the people side of a growing tech-education team organised and human.',
    tags: ['Recruitment', 'Operations', 'People'],
  },
  {
    role: 'Python Tutor',
    company: 'Preply',
    period: '2025 – Present',
    type: 'Freelance',
    description:
      'One-on-one Python tutoring for students at every level, with custom material for each learner. Honestly the best way I\u2019ve found to sharpen my own fundamentals.',
    tags: ['Teaching', 'Python', 'Mentoring'],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 },
  }),
};

const Experience = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 70%', 'end 80%'],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="experience" className="relative scroll-mt-20 bg-ink-block px-5 py-24 text-ink sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.p
          className="eyebrow text-[var(--gold)]"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          (04) — The path so far
        </motion.p>
        <MaskText
          as="h2"
          lines={['Experience', '& education']}
          className="mt-4 font-display text-[clamp(2.2rem,6vw,4rem)] leading-[1.02]"
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-12">
          {/* Timeline */}
          <div className="lg:col-span-7">
            <div className="relative" ref={timelineRef}>
              <div className="absolute bottom-2 left-[7px] top-2 w-px bg-white/15" />
              <motion.div
                className="absolute left-[7px] top-2 w-px origin-top bg-gradient-to-b from-[var(--accent)] via-[var(--gold)] to-[var(--accent)]"
                style={{ bottom: 8, scaleY: lineScale }}
              />
              <div className="space-y-10">
                {experiences.map((exp, i) => (
                  <motion.div
                    key={exp.role + exp.company}
                    className="relative pl-10"
                    custom={i}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-40px' }}
                  >
                    <span className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center">
                      <span className="h-4 w-4 rounded-full border border-white/30 bg-ink-block" />
                      <span className="absolute h-2 w-2 rounded-full bg-[var(--accent)]" />
                    </span>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-display text-2xl text-ink">{exp.role}</h3>
                      <span className="font-mono text-xs text-[var(--gold)]">{exp.period}</span>
                    </div>
                    <p className="mt-1 text-sm font-medium text-white/70">
                      {exp.company} <span className="text-white/30">·</span> {exp.type}
                    </p>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/60">
                      {exp.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.tags.map((t) => (
                        <span key={t} className="rounded-full border border-white/15 px-2.5 py-1 text-[11px] text-white/65">
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Education + focus */}
          <motion.aside
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="rounded-2xl border border-white/12 bg-white/[0.03] p-7">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5">
                  <GraduationCap className="h-5 w-5 text-[var(--gold)]" />
                </span>
                <span className="eyebrow text-white/50">Education</span>
              </div>
              <h3 className="mt-5 font-display text-xl text-ink">
                BS Computer Science
              </h3>
              <p className="mt-1 text-sm text-white/70">
                National University of Sciences &amp; Technology (NUST)
              </p>
              <p className="mt-1 font-mono text-xs text-[var(--gold)]">2021 – 2025 · Final year</p>

              <div className="my-6 h-px w-full bg-white/10" />

              <p className="eyebrow text-white/50">Focus areas</p>
              <ul className="mt-4 space-y-3">
                {[
                  'Machine Learning & Deep Learning',
                  'Natural Language Processing',
                  'Distributed & Networked Systems',
                  'Full-Stack Web Development',
                ].map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-white/75">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

export default Experience;

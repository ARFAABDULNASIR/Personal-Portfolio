'use client';

import { motion } from './motion';

const ease = [0.16, 1, 0.3, 1] as const;

const line = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.7, ease, delay: i * 0.08 } }),
};

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-20 px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.p
          className="eyebrow text-accent"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          (01) — A little about me
        </motion.p>

        <div className="mt-10 grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="font-display text-[clamp(1.6rem,3.4vw,2.7rem)] leading-[1.25] text-ink">
              {[
                "I'm Arfa Nasir, a computer science student at NUST who got hooked on the",
                'moment messy, real-world data finally turns into something',
                'useful. I like problems that don\u2019t have a clean answer yet.',
              ].map((t, i) => (
                <motion.span
                  key={i}
                  className="block"
                  custom={i}
                  variants={line}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  {t}
                </motion.span>
              ))}
            </div>

            <motion.div
              className="mt-10 max-w-2xl space-y-5 text-base leading-relaxed text-ink-soft sm:text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <p>
                Most of my favourite projects started with a small frustration. Roman Urdu hate-speech
                slipping past every filter. A hundred students asking the same admission question. A
                campus WiFi that mysteriously dies at 9am. I tend to chase those — the &ldquo;why does this
                keep happening?&rdquo; kind of questions — and then build something that fixes them.
              </p>
              <p>
                Lately that means a lot of machine learning and NLP, but I genuinely enjoy the full
                stretch: training a model one week, wiring up a clean front end the next. I care a
                little too much about whether the thing actually <span className="text-ink">works</span> for
                real people, not just on a slide.
              </p>
              <p>
                When I&apos;m not debugging, I&apos;m probably tutoring Python (explaining something is the
                fastest way to learn it), or reorganising my notes for the tenth time. Right now I&apos;m
                interning, finishing my degree, and quietly collecting problems worth solving next.
              </p>
            </motion.div>
          </div>

          <motion.aside
            className="lg:col-span-4"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            <div className="card-paper p-7">
              <p className="eyebrow text-ink-faint">Currently</p>
              <ul className="mt-5 space-y-5">
                {[
                  { t: 'Interning', d: 'Software & information-systems internships, summer 2026' },
                  { t: 'Studying', d: 'Final-year BS Computer Science @ NUST' },
                  { t: 'Building with', d: 'Python, PyTorch, React, RAG pipelines' },
                  { t: 'Curious about', d: 'Applied LLMs, Agentic AI  & Software Engineering' },
                ].map((row) => (
                  <li key={row.t} className="border-b border-line pb-5 last:border-0 last:pb-0">
                    <div className="text-sm font-medium text-ink">{row.t}</div>
                    <div className="mt-1 text-sm text-ink-soft">{row.d}</div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

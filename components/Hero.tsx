'use client';

import { motion, useScroll, useTransform } from './motion';
import { useRef } from 'react';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import MaskText from './MaskText';
import Magnetic from './Magnetic';
import CountUp from './CountUp';

const ease = [0.16, 1, 0.3, 1] as const;
const INTRO = 2.4; // sync entrance with the preloader curtain

const container = {
  hidden: {},
  show: {
    transition: { delayChildren: INTRO, staggerChildren: 0.12 },
  },
};
const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
};

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const bgX = useTransform(scrollYProgress, [0, 1], [0, -160]);

  return (
    <section ref={ref} className="relative min-h-svh overflow-hidden pt-[72px]">
      {/* giant scrolling name backdrop */}
      <motion.div
        aria-hidden
        style={{ x: bgX }}
        className="pointer-events-none absolute top-[26%] left-0 z-0 w-max select-none"
      >
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="text-outline font-display text-[20vw] leading-none">
              Arfa Nasir&nbsp;✦&nbsp;
            </span>
          ))}
        </div>
      </motion.div>

      {/* soft decorative glows */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-16 h-[32rem] w-[32rem] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle at center, rgba(224,160,82,0.22), transparent 70%)' }}
        animate={{ scale: [1, 1.12, 1], x: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-0 h-96 w-96 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle at center, rgba(199,91,57,0.18), transparent 70%)' }}
        animate={{ scale: [1, 1.16, 1], y: [0, 24, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        style={{ y, opacity: fade }}
        className="relative z-10 mx-auto flex min-h-[calc(100svh-72px)] max-w-6xl flex-col justify-center px-5 py-16 sm:px-8"
      >
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item} className="mb-8 flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sage opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-sage" />
            </span>
            <span className="eyebrow text-ink-soft">Islamabad, PK · Open to 2026 internships</span>
          </motion.div>
        </motion.div>

        <MaskText
          as="h1"
          lines={['Arfa Abdul', 'Nasir.']}
          delay={INTRO}
          stagger={0.12}
          className="display-xl text-[clamp(2.8rem,11vw,8.5rem)] text-ink"
        />

        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={item} className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl">
            Final-year CS student at <span className="text-ink">NUST</span> who builds AI/ML systems that
            actually leave the notebook — from Roman Urdu hate-speech detection to RAG assistants and
            network simulations.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <Magnetic strength={0.4}>
              <a
                href="#projects"
                data-cursor
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-canvas"
              >
                See my work
                <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>
            </Magnetic>
            <Magnetic strength={0.4}>
              <a
                href="#contact"
                data-cursor
                className="group inline-flex items-center gap-2 rounded-full border border-line-strong px-7 py-3.5 text-sm font-medium text-ink"
              >
                Get in touch
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </Magnetic>
          </motion.div>

          <motion.div variants={item} className="mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-line pt-8">
            <Stat k={<>NUST</>} v="BS Computer Science" />
            <Stat k={<CountUp to={9} suffix="+" />} v="Shipped projects" />
            <Stat k={<>AI/ML</>} v="Core focus" />
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-ink-faint sm:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: INTRO + 0.8 }}
      >
        <span className="font-mono text-[10px] tracking-[0.2em]">SCROLL</span>
        <motion.div
          className="h-10 w-px bg-line-strong"
          animate={{ scaleY: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ transformOrigin: 'top' }}
        />
      </motion.div>
    </section>
  );
}

function Stat({ k, v }: { k: React.ReactNode; v: string }) {
  return (
    <div>
      <div className="font-display text-3xl text-ink sm:text-4xl">{k}</div>
      <div className="mt-1 text-xs text-ink-faint sm:text-sm">{v}</div>
    </div>
  );
}

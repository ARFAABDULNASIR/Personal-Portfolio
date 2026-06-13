'use client';

import { useEffect, useState } from 'react';
import {
  motion,
  AnimatePresence,
  useMotionValue,
  animate,
  useTransform,
} from './motion';

export default function Preloader() {
  const [done, setDone] = useState(false);
  const [skip, setSkip] = useState(false);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const bar = useTransform(count, [0, 100], [0, 1]);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setSkip(true);
      return;
    }
    document.body.style.overflow = 'hidden';
    const unsub = rounded.on('change', (v) => setDisplay(v));
    const controls = animate(count, 100, {
      duration: 2,
      ease: [0.16, 1, 0.3, 1],
      onComplete: () => setTimeout(() => setDone(true), 300),
    });
    return () => {
      unsub();
      controls.stop();
      document.body.style.overflow = '';
    };
  }, [count, rounded]);

  useEffect(() => {
    if (done) document.body.style.overflow = '';
  }, [done]);

  if (skip) return null;

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-ink-block text-canvas"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div exit={{ opacity: 0, y: -30, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}>
            <span className="font-display text-[18vw] leading-none sm:text-[12vw]">
              {display}
              <span className="text-[var(--accent)]">%</span>
            </span>
          </motion.div>

          <motion.div
            className="mt-4"
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
          >
            <span className="eyebrow text-white/50">Arfa Abdul Nasir — Portfolio</span>
          </motion.div>

          <div className="absolute bottom-0 left-0 h-[3px] w-full bg-white/10">
            <motion.div
              className="h-full origin-left bg-gradient-to-r from-[var(--accent)] to-[var(--gold)]"
              style={{ scaleX: bar }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

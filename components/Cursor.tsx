'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from './motion';

export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [hidden, setHidden] = useState(true);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!fine) return;
    setEnabled(true);
    document.body.classList.add('has-cursor');

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setHidden(false);
      const t = e.target as HTMLElement;
      setHovering(!!t.closest('a, button, [data-cursor]'));
    };
    const leave = () => setHidden(true);

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseleave', leave);
    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseleave', leave);
      document.body.classList.remove('has-cursor');
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[100] flex items-center justify-center rounded-full"
        style={{
          x: sx,
          y: sy,
          translateX: '-50%',
          translateY: '-50%',
          mixBlendMode: 'difference',
        }}
        animate={{
          width: hovering ? 56 : 14,
          height: hovering ? 56 : 14,
          backgroundColor: '#ffffff',
          opacity: hidden ? 0 : 1,
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 28 }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[100] rounded-full border border-ink/40"
        style={{ x, y, translateX: '-50%', translateY: '-50%' }}
        animate={{ width: hovering ? 0 : 40, height: hovering ? 0 : 40, opacity: hidden ? 0 : 0.6 }}
        transition={{ type: 'spring', stiffness: 200, damping: 24 }}
      />
    </>
  );
}

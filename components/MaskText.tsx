'use client';

import { motion } from './motion';

const ease = [0.16, 1, 0.3, 1] as const;

/**
 * Splits text into lines (by the `lines` array) and reveals each line
 * from behind a mask with a staggered upward slide.
 */
export default function MaskText({
  lines,
  className,
  delay = 0,
  stagger = 0.08,
  duration = 0.9,
  as = 'div',
  once = true,
}: {
  lines: string[];
  className?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
  as?: 'div' | 'h1' | 'h2' | 'h3' | 'p';
  once?: boolean;
}) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: '-10% 0px' }}
    >
      {lines.map((line, i) => (
        <span key={i} className="mask-line">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: '110%' },
              show: {
                y: 0,
                transition: { duration, ease, delay: delay + i * stagger },
              },
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

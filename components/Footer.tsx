'use client';

import { motion, useScroll, useTransform, AnimatePresence } from './motion';
import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { CONTACT } from '@/lib/contact';
import Magnetic from './Magnetic';

const Footer = () => {
  const year = new Date().getFullYear();
  const [showTop, setShowTop] = useState(false);
  const { scrollYProgress } = useScroll();
  const rot = useTransform(scrollYProgress, [0, 1], [0, 360]);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const socials = [
    { icon: Github, href: CONTACT.github, label: 'GitHub' },
    { icon: Linkedin, href: CONTACT.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${CONTACT.email}`, label: 'Email' },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-line px-5 pb-10 pt-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow text-accent">Available for new Experiences & Opportunities</p>
            <Magnetic strength={0.3}>
              <a
                href="#contact"
                data-cursor
                className="mt-4 inline-block font-display text-[clamp(2.5rem,8vw,6rem)] leading-none text-ink"
              >
                Let&apos;s talk <span className="text-accent">→</span>
              </a>
            </Magnetic>
          </div>
          <div className="flex gap-3">
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <Magnetic key={s.label} strength={0.5}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.label}
                    data-cursor
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-ink hover:bg-ink hover:text-canvas"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                </Magnetic>
              );
            })}
          </div>
        </div>

        <div className="my-12 hairline" />

        <div className="flex flex-col items-center justify-between gap-3 text-sm text-ink-faint sm:flex-row">
          <p>© {year} Arfa Abdul Nasir</p>
          <p className="font-mono text-xs">Designed &amp; built with care · NUST</p>
        </div>
      </div>

      <AnimatePresence>
        {showTop && (
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-ink text-canvas shadow-lg"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            whileHover={{ y: -3 }}
            aria-label="Back to top"
          >
            <motion.span style={{ rotate: rot }} className="absolute inset-1 rounded-full border border-dashed border-canvas/30" />
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;

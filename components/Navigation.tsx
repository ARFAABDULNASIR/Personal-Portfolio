'use client';

import { motion, useScroll, useSpring, AnimatePresence } from './motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about', n: '01' },
  { name: 'Work', href: '#projects', n: '02' },
  { name: 'Skills', href: '#skills', n: '03' },
  { name: 'Path', href: '#experience', n: '04' },
  { name: 'Contact', href: '#contact', n: '05' },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
      const sections = ['home', ...navLinks.map((l) => l.href.slice(1))];
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      if (current) setActiveSection(current);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 z-50 w-full transition-colors duration-500 ${
          isScrolled ? 'bg-canvas/80 backdrop-blur-xl border-b border-line' : 'border-b border-transparent'
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-5 sm:px-8">
          <motion.a
            href="#home"
            className="group flex items-center gap-3"
            whileHover="hover"
          >
            <motion.span
              className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/20 font-display text-base"
              variants={{ hover: { rotate: -8, backgroundColor: 'var(--accent)', color: '#fff', borderColor: 'var(--accent)' } }}
              transition={{ type: 'spring', stiffness: 300, damping: 18 }}
            >
              A
            </motion.span>
            <span className="hidden text-sm font-medium tracking-tight text-ink sm:block">
              Arfa Abdul Nasir
            </span>
          </motion.a>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const active = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="group relative px-4 py-2 text-sm font-medium"
                >
                  <span className={`relative z-10 transition-colors ${active ? 'text-accent' : 'text-ink-soft group-hover:text-ink'}`}>
                    {link.name}
                  </span>
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-accent/10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
            <a
              href="#contact"
              className="ml-3 inline-flex items-center rounded-full bg-ink px-5 py-2 text-sm font-medium text-canvas transition-transform hover:-translate-y-0.5"
            >
              Let&rsquo;s talk
            </a>
          </div>

          <button
            className="rounded-full border border-line p-2 md:hidden"
            onClick={() => setIsOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 h-px w-full origin-left bg-gradient-to-r from-accent to-gold"
          style={{ scaleX: progress }}
        />
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-canvas/95 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex h-full flex-col justify-center gap-2 px-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-baseline gap-4 border-b border-line py-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * i + 0.1 }}
                >
                  <span className="font-mono text-xs text-ink-faint">{link.n}</span>
                  <span className="font-display text-4xl text-ink">{link.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;

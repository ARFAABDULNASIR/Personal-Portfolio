'use client';

import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from './motion';
import { useRef, useState } from 'react';
import { ArrowUpRight, Github, Users } from 'lucide-react';
import type { Project } from '@/lib/projects';

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false);
  const { title, blurb, detail, tags, year, github, demo, collab, image } = project;
  const primaryHref = github || demo;
  const label = collab ? 'Team' : 'Solo';

  // 3D tilt
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rx = useSpring(useTransform(my, [0, 1], [6, -6]), { stiffness: 200, damping: 18 });
  const ry = useSpring(useTransform(mx, [0, 1], [-6, 6]), { stiffness: 200, damping: 18 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };
  const onLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: (index % 2) * 0.07 }}
      style={{ perspective: 1100 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d' }}
        className="group card-paper overflow-hidden transition-colors duration-300 hover:border-accent/40"
      >
        {/* Thumbnail */}
        <a
          href={primaryHref}
          target={primaryHref && primaryHref !== '#' ? '_blank' : undefined}
          rel="noopener noreferrer"
          data-cursor
          className="relative block aspect-[16/10] overflow-hidden"
          style={{ transform: 'translateZ(30px)' }}
        >
          <motion.div className="absolute inset-0" whileHover={{ scale: 1.07 }} transition={{ type: 'spring', stiffness: 150, damping: 20 }}>
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
              className="object-cover"
            />
          </motion.div>
          {/* gradient veil for legibility + mood */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-paper via-paper/10 to-transparent opacity-90" />
          <div className="pointer-events-none absolute inset-0 bg-ink-block/10 transition-opacity duration-300 group-hover:opacity-0" />

          {/* tag chips on image */}
          <div className="absolute left-4 top-4 flex flex-wrap gap-2">
            <span className="rounded-full border border-white/15 bg-black/40 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white/80 backdrop-blur-sm">
              {label} · {year}
            </span>
          </div>
          <div className="absolute right-4 top-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-accent text-[#1a1206] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </a>

        {/* Body */}
        <div className="p-6 sm:p-7" style={{ transform: 'translateZ(20px)' }}>
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-display text-2xl leading-tight text-ink">{title}</h3>
          </div>

          <p className="mt-3 text-sm leading-relaxed text-ink-soft">{blurb}</p>

          <motion.div
            initial={false}
            animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pt-3 text-sm leading-relaxed text-ink-soft/85">{detail}</p>
          </motion.div>

          <button onClick={() => setOpen((v) => !v)} data-cursor className="mt-3 text-xs font-medium text-accent link-underline">
            {open ? 'Show less' : 'Read more'}
          </button>

          <div className="mt-5 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="rounded-full border border-line bg-paper-2 px-3 py-1 text-xs font-medium text-ink-soft">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-4 border-t border-line pt-5">
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer" data-cursor className="inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-accent">
                <Github className="h-4 w-4" />
                Code
              </a>
            )}
            {demo && (
              <a href={demo} target={demo !== '#' ? '_blank' : undefined} rel="noopener noreferrer" data-cursor className="inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-accent">
                <ArrowUpRight className="h-4 w-4" />
                {demo === '#' ? 'Live soon' : 'Live demo'}
              </a>
            )}
            {collab && (
              <span className="ml-auto inline-flex items-center gap-1.5 text-xs text-ink-faint">
                <Users className="h-3.5 w-3.5" />
                {collab}
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
}

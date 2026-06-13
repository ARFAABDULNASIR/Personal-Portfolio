'use client';

import { motion } from './motion';
import { projects } from '@/lib/projects';
import ProjectCard from './ProjectCard';
import MaskText from './MaskText';

const Projects = () => {
  return (
    <section id="projects" className="relative scroll-mt-20 px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <motion.p
              className="eyebrow text-accent"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              (02) — Selected work
            </motion.p>
            <MaskText
              as="h2"
              lines={["Things I've built"]}
              className="mt-4 font-display text-[clamp(2.2rem,6vw,4rem)] leading-none text-ink"
            />
          </div>
          <motion.p
            className="max-w-sm text-sm leading-relaxed text-ink-soft"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            A mix of solo and team projects across machine learning, NLP, systems and the web. Every
            cover links to the code.
          </motion.p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

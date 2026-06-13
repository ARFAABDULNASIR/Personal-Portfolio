'use client';

import { motion } from './motion';
import { Mail, Github, Linkedin, ArrowUpRight, Send } from 'lucide-react';
import { useState } from 'react';
import { CONTACT } from '@/lib/contact';
import MaskText from './MaskText';
import Magnetic from './Magnetic';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${formData.name || 'someone'}`);
    const body = encodeURIComponent(`${formData.message}\n\n— ${formData.name} (${formData.email})`);
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
  };

  const links = [
    { icon: Mail, label: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { icon: Github, label: 'GitHub', value: 'ARFAABDULNASIR', href: CONTACT.github },
    { icon: Linkedin, label: 'LinkedIn', value: CONTACT.linkedinLabel, href: CONTACT.linkedin },
  ];

  return (
    <section id="contact" className="relative scroll-mt-20 px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <motion.p
              className="eyebrow text-accent"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              (05) — Say hello
            </motion.p>
            <MaskText
              as="h2"
              lines={["Let's build", 'something.']}
              className="mt-4 font-display text-[clamp(2.4rem,7vw,4.5rem)] leading-[1.0] text-ink"
            />
            <motion.p
              className="mt-6 max-w-md text-base leading-relaxed text-ink-soft"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              Got an internship, a research idea, or just want to talk shop about ML? My inbox is
              genuinely open — I read everything and reply.
            </motion.p>

            <div className="mt-10 space-y-3">
              {links.map((link, i) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-xl border border-line bg-paper p-4 transition-colors hover:border-ink"
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-canvas">
                      <Icon className="h-5 w-5 text-ink" />
                    </span>
                    <span className="flex-1">
                      <span className="block text-xs text-ink-faint">{link.label}</span>
                      <span className="block text-sm font-medium text-ink">{link.value}</span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-ink-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="card-paper space-y-5 p-7 sm:p-9">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" htmlFor="name">
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your name"
                    className="input-base"
                  />
                </Field>
                <Field label="Email" htmlFor="email">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="you@example.com"
                    className="input-base"
                  />
                </Field>
              </div>
              <Field label="Message" htmlFor="message">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  placeholder="Tell me about the role, project or idea…"
                  className="input-base resize-none"
                />
              </Field>

              <Magnetic strength={0.25} className="w-full">
                <motion.button
                  type="submit"
                  data-cursor
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-ink px-6 py-4 text-sm font-medium text-canvas"
                  whileTap={{ scale: 0.99 }}
                >
                  {submitted ? 'Opening your mail app…' : 'Send message'}
                  {!submitted && <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />}
                </motion.button>
              </Magnetic>
            </form>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        :global(.input-base) {
          width: 100%;
          border-radius: 0.65rem;
          border: 1px solid var(--line);
          background: var(--canvas);
          padding: 0.8rem 1rem;
          font-size: 0.9rem;
          color: var(--ink);
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        :global(.input-base::placeholder) {
          color: var(--ink-faint);
        }
        :global(.input-base:focus) {
          outline: none;
          border-color: var(--accent);
          box-shadow: 0 0 0 3px rgba(200, 85, 47, 0.12);
        }
      `}</style>
    </section>
  );
};

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-xs font-medium text-ink-soft">
        {label}
      </label>
      {children}
    </div>
  );
}

export default Contact;

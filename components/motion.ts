'use client';

// Client boundary re-export for framer-motion.
// Next 16's RSC prerender can otherwise call motion's client-only
// factory from the server graph. Importing through this 'use client'
// module keeps the whole surface on the client side.
export * from 'framer-motion';

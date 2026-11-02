import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../utils/cn';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-brand-black">
      {/* Background Image/Video Placeholder */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1550639524-7426705d725b?auto=format&fit=crop&q=80&w=2000" 
          alt="Hidden Identity Campaign" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/40 via-transparent to-brand-black" />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-6xl md:text-9xl font-bold tracking-tighter text-brand-offwhite uppercase italic mb-4"
        >
          Hidden Identity
        </motion.h1>

        <div className="mb-6">
          <div className="w-1 h-1 bg-brand-beige rounded-full mx-auto" />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-xs md:text-sm tracking-[0.4em] text-brand-offwhite/70 uppercase mb-10"
        >
          Beyond What You See
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <a 
            href="/shop" 
            className="px-10 py-4 bg-brand-offwhite text-brand-black text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-brand-beige transition-colors duration-300"
          >
            Explore The Collection
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

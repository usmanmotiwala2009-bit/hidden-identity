import React from 'react';
import { motion } from 'framer-motion';

const Newsletter: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-brand-charcoal text-center">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-brand-offwhite uppercase italic mb-4">
            Stay Unrevealed
          </h2>
          <p className="text-brand-offwhite/60 text-xs tracking-widest uppercase mb-10">
            Get exclusive access to upcoming drops, releases and collections.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <input 
              type="email" 
              placeholder="EMAIL ADDRESS" 
              className="w-full sm:w-80 bg-brand-black border border-brand-offwhite/20 text-brand-offwhite px-6 py-4 text-[10px] tracking-widest uppercase outline-none focus:border-brand-beige transition-colors"
            />
            <button className="w-full sm:w-auto px-10 py-4 bg-brand-offwhite text-brand-black text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-brand-beige transition-colors duration-300">
              Join
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;

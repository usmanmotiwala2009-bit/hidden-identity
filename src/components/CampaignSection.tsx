import React from 'react';
import { motion } from 'framer-motion';

const CampaignSection: React.FC = () => {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden bg-brand-black">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1515886657613-//auto=format&fit=crop&q=80&w=2000" 
          alt="Hidden Identity Campaign" 
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-brand-offwhite uppercase italic mb-8">
            The Silence of Style
          </h2>
          <a 
            href="/shop" 
            className="px-10 py-4 bg-brand-offwhite text-brand-black text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-brand-beige transition-colors duration-300"
          >
            Shop Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CampaignSection;

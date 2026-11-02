import React from 'react';
import { motion } from 'framer-motion';

const BrandStatement: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-brand-black overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-2xl md:text-5xl font-editorial leading-tight text-brand-offwhite italic"
        >
          "Not everything needs to be seen. <br className="hidden md:block" /> 
          Not everything needs to be understood. <br className="hidden md:block" /> 
          Your identity is yours to define."
        </motion.p>
      </div>
    </section>
  );
};

export default BrandStatement;

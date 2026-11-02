import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface Collection {
  id: string;
  name: string;
  description: string;
  image: string;
  href: string;
}

const collections: Collection[] = [
  {
    id: 'winter-26',
    name: 'Winter 2026',
    description: 'Heavyweight fabrics for the coldest days.',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800',
    href: '/shop',
  },
  {
    id: 'core-essentials',
    name: 'Core Essentials',
    description: 'The timeless foundation of every wardrobe.',
    image: 'https://images.unsplash.com/photo-1576566588028-4567d797ed55?auto=format&fit=crop&q=80&w=800',
    href: '/shop',
  },
  {
    id: 'archive',
    name: 'The Archive',
    description: 'Limited pieces from previous seasons.',
    image: 'https://images.unsplash.com/photo-1620799140408-edc6d7ed5d5e?auto=format&fit=crop&q=80&w=800',
    href: '/shop',
  },
];

const CollectionsPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-[11px] tracking-[0.5em] text-brand-offwhite/40 uppercase mb-4">Curated</h2>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-brand-offwhite uppercase italic">Collections</h1>
        <div className="w-12 h-[1px] bg-brand-beige mx-auto mt-6" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {collections.map((col, idx) => (
          <motion.div
            key={col.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group relative overflow-hidden aspect-[3/4] cursor-pointer"
          >
            <Link to={col.href} className="absolute inset-0 z-10" />
            <img
              src={col.image}
              alt={col.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent z-20" />
            <div className="absolute bottom-8 left-8 right-8 z-30 text-left">
              <h3 className="text-2xl font-bold tracking-tighter text-brand-offwhite uppercase italic mb-2">{col.name}</h3>
              <p className="text-xs tracking-wide text-brand-offwhite/60 uppercase mb-4">{col.description}</p>
              <span className="text-[10px] tracking-widest uppercase text-brand-beige font-bold group-hover:translate-x-2 transition-transform duration-300 inline-block">
                Explore Collection &rarr;
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CollectionsPage;

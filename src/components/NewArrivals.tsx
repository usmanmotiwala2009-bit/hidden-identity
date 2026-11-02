import React from 'react';
import ProductCard from './ProductCard';
import { motion } from 'framer-motion';

const NewArrivals: React.FC = () => {
  const products = [
    {
      id: 'new-1',
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800',
      name: 'Oversized Zip-up Hoodie',
      price: '850 AED',
      category: 'Outerwear'
    },
    {
      id: 'new-2',
      image: 'https://images.unsplash.com/photo-1576566588028-4567d797ed55?auto=format&fit=crop&q=80&w=800',
      name: 'Minimal Graphic Tee',
      price: '280 AED',
      category: 'T-Shirts'
    },
    {
      id: 'new-3',
      image: 'https://images.unsplash.com/photo-1620799140408-edc6d797ed5e?auto=format&fit=crop&q=80&w=800',
      name: 'Heavyweight Sweatpants',
      price: '450 AED',
      category: 'Bottoms'
    },
    {
      id: 'new-4',
      image: 'https://images.unsplash.com/photo-1591047139829-d957773f839c?auto=format&fit=crop&q=80&w=800',
      name: 'Premium Blank Tee',
      price: '220 AED',
      category: 'T-Shirts'
    },
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-12">
        <div className="text-right w-full">
          <h2 className="text-[11px] tracking-[0.3em] text-brand-offwhite/40 uppercase mb-4">Latest</h2>
          <h3 className="text-3xl font-bold tracking-tighter text-brand-offwhite uppercase italic">New Arrivals</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
        {products.map((product, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <ProductCard {...product} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;

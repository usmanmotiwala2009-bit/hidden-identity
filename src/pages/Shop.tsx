import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../utils/products';
import ProductCard from '../components/ProductCard';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '../utils/cn';

const Shop: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('featured');

  const categories = ['All', 'Hoodies', 'Zip-up Hoodies', 'T-Shirts', 'Sweatpants', 'Accessories'];

  const filteredProducts = useMemo(() => {
    let result = activeCategory === 'All' 
      ? [...PRODUCTS] 
      : PRODUCTS.filter(p => p.category === activeCategory);

    if (sortBy === 'price-low') result.sort((a, b) => a.price - b.price);
    if (sortBy === 'price-high') result.sort((a, b) => b.price - a.price);

    return result;
  }, [activeCategory, sortBy]);

  return (
    <div className="pt-28 px-6 max-w-7xl mx-auto min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tighter text-brand-offwhite uppercase italic mb-2">
            The Collection
          </h1>
          <p className="text-brand-offwhite/50 text-xs tracking-widest uppercase">
            Explore the essence of Hidden Identity
          </p>
        </div>

        <div className="flex items-center space-x-4 w-full md:w-auto">
          <div className="relative group">
            <button className="flex items-center space-x-2 px-4 py-2 bg-brand-charcoal text-brand-offwhite text-[10px] tracking-widest uppercase font-medium hover:bg-brand-beige hover:text-brand-black transition-all duration-300">
              <span>Sort By</span>
              <ChevronDown size={14} />
            </button>
            <div className="absolute top-full right-0 mt-2 w-48 bg-brand-charcoal border border-brand-offwhite/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
              <div className="flex flex-col p-2">
                {['featured', 'price-low', 'price-high', 'newest'].map((option) => (
                  <button 
                    key={option} 
                    onClick={() => setSortBy(option)}
                    className={cn(
                      "text-left px-4 py-2 text-[10px] tracking-widest uppercase transition-colors",
                      sortBy === option ? "text-brand-beige" : "text-brand-offwhite/60 hover:text-brand-offwhite"
                    )}
                  >
                    {option.replace('-', ' ').toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mb-12">
        {categories.map((category) => (
          <button 
            key={category}
            onClick={() => setActiveCategory(category)}
            className={cn(
              "px-5 py-2 text-[10px] tracking-widest uppercase transition-all duration-300 border",
              activeCategory === category 
                ? "bg-brand-offwhite text-brand-black border-brand-offwhite" 
                : "bg-transparent text-brand-offwhite/60 border-brand-offwhite/20 hover:border-brand-offwhite"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 pb-24"
      >
        <AnimatePresence mode='popLayout'>
          {filteredProducts.map((product) => (
            <motion.div 
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <ProductCard 
                id={product.id}
                image={product.image}
                name={product.name}
                price={`${product.price} AED`}
                category={product.category}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Shop;

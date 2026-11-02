import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { cn } from '../utils/cn';
import ProductImage from './ProductImage';

interface ProductCardProps {
  id: string;
  image: string;
  name: string;
  price: string;
  category: string;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, image, name, price, category, className }) => {
  return (
    <div className={cn("group relative cursor-pointer", className)}>
      <Link to={`/product/${id}`} className="block relative overflow-hidden aspect-[3/4]">
        <ProductImage 
          src={image} 
          alt={name} 
          className="transition-transform duration-700 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
      </Link>
      
      <div className="absolute bottom-4 left-4 right-4 z-10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <button 
          onClick={(e) => {
            e.preventDefault();
            alert('Please select size and color on the product page.');
          }}
          className="w-full bg-brand-offwhite text-brand-black py-3 text-[10px] tracking-widest uppercase font-bold flex items-center justify-center space-x-2"
        >
          <ShoppingBag size={14} />
          <span>Quick Add</span>
        </button>
      </div>

      <div className="mt-4 flex justify-between items-start">
        <div onClick={() => window.location.href = `/product/${id}`}>
          <p className="text-[10px] tracking-widest text-brand-offwhite/40 uppercase mb-1">{category}</p>
          <h3 className="text-xs tracking-wide text-brand-offwhite font-medium uppercase">{name}</h3>
        </div>
        <p className="text-xs text-brand-offwhite">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;

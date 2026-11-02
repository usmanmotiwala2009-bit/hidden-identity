import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PRODUCTS, Product } from '../utils/products';
import { ShoppingBag, ChevronLeft, ShieldCheck, Truck } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../utils/cn';
import { useCart } from '../context/CartContext';
import ProductImage from '../components/ProductImage';

const ProductPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const product = PRODUCTS.find(p => p.id === id);

  useEffect(() => {
    if (product) {
      setSelectedColor(product.colors[0]);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <button onClick={() => navigate('/shop')} className="text-brand-beige underline">Return to Shop</button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert('Please select a size');
      return;
    }
    addToCart(product, selectedSize, selectedColor);
    alert(`${product.name} added to bag!`);
  };

  return (
    <div className="pt-28 px-6 max-w-7xl mx-auto min-h-screen pb-24">
      <nav className="flex items-center space-x-2 text-[10px] tracking-widest uppercase text-brand-offwhite/40 mb-8">
        <button onClick={() => navigate('/')} className="hover:text-brand-offwhite transition-colors">Home</button>
        <span>/</span>
        <button onClick={() => navigate('/shop')} className="hover:text-brand-offwhite transition-colors">Shop</button>
        <span>/</span>
        <span className="text-brand-offwhite">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-4">
          <div className="aspect-[3/4] relative">
            <ProductImage src={product.image} alt={product.name} />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="aspect-square cursor-pointer opacity-60 hover:opacity-100 transition-opacity">
                <ProductImage src={product.image} alt={`${product.name} view ${i}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <div className="mb-8">
            <p className="text-[10px] tracking-widest text-brand-offwhite/40 uppercase mb-2">{product.category}</p>
            <h1 className="text-4xl font-bold tracking-tighter text-brand-offwhite uppercase italic mb-4">
              {product.name}
            </h1>
            <p className="text-2xl text-brand-offwhite font-light">{product.price} AED</p>
          </div>

          <div className="mb-8 space-y-6">
            <div>
              <p className="text-[10px] tracking-widest uppercase text-brand-offwhite/60 mb-3">Color: <span className="text-brand-offwhite">{selectedColor}</span></p>
              <div className="flex space-x-3">
                {product.colors.map(color => (
                  <button 
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={cn(
                      "w-8 h-8 rounded-full border transition-all duration-300",
                      selectedColor === color ? "border-brand-offwhite scale-110" : "border-transparent opacity-50"
                    )}
                    style={{ backgroundColor: color === 'Black' ? '#000' : color === 'Off-White' ? '#F9F8F6' : color === 'Charcoal' ? '#1A1A1A' : color === 'Beige' ? '#C5B9AC' : color }}
                    title={color}
                  />
                ))}
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-3">
                <p className="text-[10px] tracking-widest uppercase text-brand-offwhite/60">Size</p>
                <button className="text-[10px] tracking-widest uppercase text-brand-beige hover:underline">Size Guide</button>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {product.sizes.map(size => (
                  <button 
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={cn(
                      "py-3 text-[10px] tracking-widest uppercase border transition-all duration-300",
                      selectedSize === size 
                        ? "bg-brand-offwhite text-brand-black border-brand-offwhite" 
                        : "bg-transparent text-brand-offwhite border-brand-offwhite/20 hover:border-brand-offwhite"
                    )}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button 
            onClick={handleAddToCart}
            className="w-full py-5 bg-brand-offwhite text-brand-black text-xs tracking-[0.3em] uppercase font-bold hover:bg-brand-beige transition-all duration-300 flex items-center justify-center space-x-3 mb-12"
          >
            <ShoppingBag size={16} />
            <span>Add to Bag</span>
          </button>

          <div className="border-t border-brand-charcoal pt-8 space-y-8">
            <div>
              <h3 className="text-[11px] tracking-widest uppercase text-brand-offwhite mb-4 font-bold">Description</h3>
              <p className="text-sm text-brand-offwhite/60 leading-relaxed">
                {product.description}
              </p>
            </div>

            <div>
              <h3 className="text-[11px] tracking-widest uppercase text-brand-offwhite mb-4 font-bold">Material & Care</h3>
              <p className="text-sm text-brand-offwhite/60 leading-relaxed">
                {product.details}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <Truck size={20} className="text-brand-beige" />
                <div>
                  <h4 className="text-[10px] tracking-widest uppercase text-brand-offwhite mb-1">Shipping</h4>
                  <p className="text-xs text-brand-offwhite/60">Express delivery across UAE.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <ShieldCheck size={20} className="text-brand-beige" />
                <div>
                  <h4 className="text-[10px] tracking-widest uppercase text-brand-offwhite mb-1">Authenticity</h4>
                  <p className="text-xs text-brand-offwhite/60">Guaranteed genuine HIDDEN IDENTITY.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

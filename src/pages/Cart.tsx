import React from 'react';
import { useCart } from '../context/CartContext';
import { ShoppingBag, Trash2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../utils/cn';

const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();

  return (
    <div className="pt-28 px-6 max-w-7xl mx-auto min-h-screen pb-24">
      <div className="flex items-center justify-between mb-12">
        <h1 className="text-3xl font-bold tracking-tighter text-brand-offwhite uppercase italic">
          Your Bag
        </h1>
        <Link to="/shop" className="flex items-center space-x-2 text-[10px] tracking-widest uppercase text-brand-offwhite/60 hover:text-brand-offwhite transition-colors">
          <ArrowLeft size={14} />
          <span>Continue Shopping</span>
        </Link>
      </div>

      {cart.length === 0 ? (
        <div className="h-[60vh] flex flex-col items-center justify-center text-center">
          <ShoppingBag size={48} className="text-brand-offwhite/20 mb-6" />
          <h2 className="text-xl font-medium text-brand-offwhite mb-4 uppercase tracking-widest">Your bag is empty</h2>
          <Link
            to="/shop"
            className="px-10 py-4 bg-brand-offwhite text-brand-black text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-brand-beige transition-colors duration-300"
          >
            Explore Collection
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-8">
            <AnimatePresence mode='popLayout'>
              {cart.map((item) => (
                <motion.div
                  key={`${item.id}-${item.size}-${item.color}`}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex items-center space-x-6 pb-8 border-b border-brand-charcoal"
                >
                  <div className="w-24 h-32 bg-brand-charcoal overflow-hidden flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-sm font-medium text-brand-offwhite uppercase tracking-wide">
                        {item.name}
                      </h3>
                      <button
                        onClick={() => removeFromCart(item.id, item.size, item.color)}
                        className="text-brand-offwhite/30 hover:text-brand-offwhite transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <p className="text-[10px] tracking-widest text-brand-offwhite/40 uppercase mb-4">
                      {item.color} / {item.size}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center border border-brand-charcoal">
                        <button
                          onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity - 1)}
                          className="px-3 py-1 text-brand-offwhite hover:bg-brand-charcoal transition-colors"
                        >
                          -
                        </button>
                        <span className="px-3 py-1 text-[10px] font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity + 1)}
                          className="px-3 py-1 text-brand-offwhite hover:bg-brand-charcoal transition-colors"
                        >
                          +
                        </button>
                      </div>
                      <p className="text-sm text-brand-offwhite">{item.price * item.quantity} AED</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Summary */}
          <div className="bg-brand-charcoal p-8 h-fit sticky top-28">
            <h2 className="text-sm tracking-widest uppercase font-bold text-brand-offwhite mb-8">Order Summary</h2>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-xs tracking-widest uppercase text-brand-offwhite/60">
                <span>Subtotal</span>
                <span>{totalPrice} AED</span>
              </div>
              <div className="flex justify-between text-xs tracking-widest uppercase text-brand-offwhite/60">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="h-px bg-brand-offwhite/10 my-4" />
              <div className="flex justify-between text-sm tracking-widest uppercase font-bold text-brand-offwhite">
                <span>Total</span>
                <span>{totalPrice} AED</span>
              </div>
            </div>

            <button className="w-full py-5 bg-brand-offwhite text-brand-black text-xs tracking-[0.3em] uppercase font-bold hover:bg-brand-beige transition-all duration-300">
              Checkout
            </button>
            <p className="text-center text-[10px] tracking-widest text-brand-offwhite/40 uppercase mt-6">
              Secure checkout powered by luxury standards.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, User, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { cn } from '../utils/cn';

const Navbar: React.FC = () => {
  const { totalItems } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'SHOP', href: '/shop' },
    { name: 'NEW ARRIVALS', href: '/shop' },
    { name: 'COLLECTIONS', href: '/shop' },
    { name: 'ABOUT', href: '/about' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 py-4 flex items-center justify-between",
      isScrolled ? "bg-brand-black/80 backdrop-blur-md py-3" : "bg-transparent py-6"
    )}>
      {/* Logo */}
      <div className="flex-1">
        <Link to="/" className="text-xl font-bold tracking-tighter text-brand-offwhite uppercase italic">
          Hidden Identity
        </Link>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center space-x-8 text-[11px] tracking-[0.2em] font-medium">
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            to={link.href} 
            className="text-brand-offwhite hover:text-brand-beige transition-colors duration-300"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Icons */}
      <div className="flex-1 flex justify-end items-center space-x-5">
        <button className="text-brand-offwhite hover:text-brand-beige transition-colors">
          <Search size={18} strokeWidth={1.5} />
        </button>
        <button className="text-brand-offwhite hover:text-brand-beige transition-colors hidden sm:block">
          <User size={18} strokeWidth={1.5} />
        </button>
        <Link to="/cart" className="text-brand-offwhite hover:text-brand-beige transition-colors relative">
          <ShoppingBag size={18} strokeWidth={1.5} />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 bg-brand-beige text-brand-black text-[8px] font-bold w-3 h-3 rounded-full flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </Link>
        <button 
          className="md:hidden text-brand-offwhite" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 bg-brand-black z-[-1] flex flex-col items-center justify-center transition-transform duration-500 md:hidden",
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex flex-col items-center space-y-8 text-2xl tracking-widest uppercase font-light">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              className="text-brand-offwhite hover:text-brand-beige transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

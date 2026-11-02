import React from 'react';
import { Instagram } from 'lucide-react';
import { cn } from '../utils/cn';

const Footer: React.FC = () => {
  const footerSections = {
    'Shop': ['All Products', 'New Arrivals', 'Collections', 'Accessories'],
    'Help': ['Contact', 'Shipping & Returns', 'Privacy Policy', 'Terms of Service'],
    'Brand': ['About Us', 'Sustainability', 'Careers', 'Contact'],
  };

  return (
    <footer className="bg-brand-black border-t border-brand-charcoal pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        {/* Brand Column */}
        <div className="col-span-1 md:col-span-1">
          <h2 className="text-xl font-bold tracking-tighter text-brand-offwhite uppercase italic mb-6">
            Hidden Identity
          </h2>
          <p className="text-brand-offwhite/60 text-xs leading-relaxed max-w-xs mb-8">
            Identity is personal. Style is how you express what remains hidden. 
            Defining the new standard of quiet luxury streetwear.
          </p>
          <div className="flex space-x-4">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-brand-offwhite hover:text-brand-beige transition-colors">
              <Instagram size={20} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        {/* Links Columns */}
        {Object.entries(footerSections).map(([title, links]) => (
          <div key={title}>
            <h3 className="text-[11px] tracking-[0.2em] font-bold uppercase text-brand-offwhite mb-6">
              {title}
            </h3>
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-brand-offwhite/60 text-xs hover:text-brand-offwhite transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto border-t border-brand-charcoal pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-widest text-brand-offwhite/40 uppercase">
        <p>© {new Date().getFullYear()} HIDDEN IDENTITY. All Rights Reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-brand-offwhite transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-brand-offwhite transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

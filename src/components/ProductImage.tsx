import React, { useState } from 'react';
import { cn } from '../utils/cn';

interface ProductImageProps {
  src: string;
  alt: string;
  className?: string;
}

const ProductImage: React.FC<ProductImageProps> = ({ src, alt, className }) => {
  const [isError, setIsError] = useState(false);

  return (
    <div className={cn("relative w-full h-full bg-brand-charcoal overflow-hidden", className)}>
      {isError ? (
        <div className="w-full h-full flex items-center justify-center bg-brand-charcoal text-brand-offwhite/20 font-editorial italic text-center p-4">
          <span className="text-xs tracking-widest uppercase">HIDDEN IDENTITY<br />Image Unavailable</span>
        </div>
      ) : (
        <img 
          src={src} 
          alt={alt} 
          className={cn("w-full h-full object-cover", className)}
          onError={() => setIsError(true)}
        />
      )}
    </div>
  );
};

export default ProductImage;

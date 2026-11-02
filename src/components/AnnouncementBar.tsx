import React from 'react';
import { cn } from '../utils/cn';

interface AnnouncementBarProps {
  message?: string;
  className?: string;
}

const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ 
  message = "NEW COLLECTION DROP: WINTER '26 NOW AVAILABLE",
  className 
}) => {
  return (
    <div className={cn("bg-brand-charcoal text-brand-offwhite text-[10px] tracking-[0.2em] py-2 px-4 text-center uppercase font-medium", className)}>
      {message}
    </div>
  );
};

export default AnnouncementBar;

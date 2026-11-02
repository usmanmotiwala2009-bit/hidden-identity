import React from 'react';
import NewArrivals from '../components/NewArrivals';

const NewArrivalsPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-[11px] tracking-[0.5em] text-brand-offwhite/40 uppercase mb-4">Latest Drop</h2>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-brand-offwhite uppercase italic">New Arrivals</h1>
        <div className="w-12 h-[1px] bg-brand-beige mx-auto mt-6" />
      </div>
      <NewArrivals />
    </div>
  );
};

export default NewArrivalsPage;

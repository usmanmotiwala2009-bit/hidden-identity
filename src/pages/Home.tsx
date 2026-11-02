import React from 'react';
import Hero from '../components/Hero';
import FeaturedCollection from '../components/FeaturedCollection';
import BrandStatement from '../components/BrandStatement';
import NewArrivals from '../components/NewArrivals';
import CampaignSection from '../components/CampaignSection';
import Newsletter from '../components/Newsletter';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <FeaturedCollection />
      <BrandStatement />
      <NewArrivals />
      <CampaignSection />
      <Newsletter />
    </>
  );
};

export default Home;

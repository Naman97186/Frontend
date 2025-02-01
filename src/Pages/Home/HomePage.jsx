import React from 'react';
import MainLayout from '../../Components/MainLayout';
import Hero from '../container/Hero';
import PopularClasses from '../container/PopClass';

const HomePage = () => {
  return (
    <MainLayout>
      <Hero />
      <PopularClasses />
    </MainLayout>
   
    
  );
};

export default HomePage;

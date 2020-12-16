import '../../App.css';
import React from 'react';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import '../HeroSection.css';
import Footer from '../Footer';
export default function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

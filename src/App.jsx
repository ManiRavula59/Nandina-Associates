import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Services from './components/Services';
import BudgetPremium from './components/BudgetPremium';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ExpandableFAB from './components/ExpandableFAB';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <Philosophy />
      <Services />
      <BudgetPremium />
      <WhyChooseUs />
      <Process />
      <Projects />
      <Footer />
      <ExpandableFAB />
    </div>
  );
}

export default App;

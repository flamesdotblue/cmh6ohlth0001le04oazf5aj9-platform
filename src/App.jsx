import React from 'react';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <Hero />
      <Solutions />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;

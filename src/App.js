import React from 'react';
import Header from './components/Header';
import AnnouncementBar from './components/AnnouncementBar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import AppleTVSection from './components/AppleTVSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <AnnouncementBar />
      <Header />
      <Hero />
      <ProductGrid />
      <AppleTVSection />
      <Footer />
    </div>
  );
}

export default App;
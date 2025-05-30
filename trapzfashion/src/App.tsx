import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Collections from './components/Collections';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      < Collections />
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import './styles/App.css';

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default App;

import React from 'react';
import BackToTop from './components/BackToTop';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import './styles/App.css';

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Home />
      <ContactForm />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default App;
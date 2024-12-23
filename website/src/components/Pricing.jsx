import React from 'react';
import '../styles/Pricing.css';

const Pricing = () => {
  const handlePurchase = () => {
    // Handle payment or subscription logic
    alert('Thank you for purchasing the Premium plan!');
  };

  return (
    <section className="pricing-section" id="pricing">
      <h2>Premium Plan</h2>
      <p>Get unlimited wallpapers in HD for just <strong><strike>RS 100 </strike>10 Rs</strong> (90% off!)</p>
      <button onClick={handlePurchase}>Buy Now</button>
    </section>
  );
};

export default Pricing;

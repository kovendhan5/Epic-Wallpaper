import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "./styles/glowing-effects.css";

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

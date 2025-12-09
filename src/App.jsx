import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./route/Routes";
import Navbar from "./components/navbar/Navbar";
import Footer from './components/footer/Footer';

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./App.css";

function App() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  
  return (
    <Router >
      
      <Navbar />
      <AppRoutes />
      <Footer />

    </Router>
  );
}

export default App;

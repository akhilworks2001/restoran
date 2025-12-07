import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./route/Routes";
import Navbar from "./components/navbar/Navbar";
import Footer from './components/footer/Footer';

import "./App.css";

function App() {
  return (
    <Router >
      
      <Navbar />
      <AppRoutes />
      <Footer />

    </Router>
  );
}

export default App;

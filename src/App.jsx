import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./route/Routes";
import Navbar from "./components/navbar/Navbar";
import "./App.css";

function App() {
  return (
    <Router >
      
      <Navbar />
      <AppRoutes />

    </Router>
  );
}

export default App;

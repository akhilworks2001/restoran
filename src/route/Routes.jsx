import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Menu from "../pages/menu/Menu";
import Booking from "../pages/More/Booking";
import Testimonial from "../pages/More/Testimonial";
import Team from "../pages/More/Team";
import Service from "../pages/service/Service";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Main Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="service" element={<Service />} />

      {/* Nested More Routes */}
      
      <Route path="/more">
        <Route path="booking" element={<Booking />} />
        <Route path="testimonial" element={<Testimonial />} />
        <Route path="team" element={<Team />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;

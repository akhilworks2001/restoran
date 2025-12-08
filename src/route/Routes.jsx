import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Menu from "../pages/menu/Menu";
import Booking from "../pages/more/Booking";
import Testimonial from "../pages/more/Testimonial";
import Team from "../pages/more/Team";
import Service from "../pages/service/Service";

import PageLayout from "../components/pageLayout/PageLayout";

const AppRoutes = () => {
  return (
    <Routes>
      {/* HOME (no header) */}
      <Route path="/" element={<Home />} />

      {/* ABOUT */}
      <Route
        path="/about"
        element={
          <PageLayout
            title="About Us"
            breadcrumbs={[
              { label: "Home", href: "/" },
              { label: "About", active: true },
            ]}
          >
            <About />
          </PageLayout>
        }
      />

      {/* MENU */}
      <Route
        path="/menu"
        element={
          <PageLayout
            title="Our Menu"
            breadcrumbs={[
              { label: "Home", href: "/" },
              { label: "Menu", active: true },
            ]}
          >
            <Menu />
          </PageLayout>
        }
      />

      {/* CONTACT */}
      <Route
        path="/contact"
        element={
          <PageLayout
            title="Contact Us"
            breadcrumbs={[
              { label: "Home", href: "/" },
              { label: "Contact", active: true },
            ]}
          >
            <Contact />
          </PageLayout>
        }
      />

      {/* SERVICE */}
      <Route
        path="/service"
        element={
          <PageLayout
            title="Our Services"
            breadcrumbs={[
              { label: "Home", href: "/" },
              { label: "Service", active: true },
            ]}
          >
            <Service />
          </PageLayout>
        }
      />

      {/* ---------- MORE ROUTES ---------- */}

      <Route path="/more">
        <Route
          path="booking"
          element={
            <PageLayout
              title="Book Your Table"
              breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Booking", active: true },
              ]}
            >
              <Booking />
            </PageLayout>
          }
        />

        <Route
          path="testimonial"
          element={
            <PageLayout
              title="Testimonials"
              breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Testimonial", active: true },
              ]}
            >
              <Testimonial />
            </PageLayout>
          }
        />

        <Route
          path="team"
          element={
            <PageLayout
              title="Our Team"
              breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Team", active: true },
              ]}
            >
              <Team />
            </PageLayout>
          }
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;

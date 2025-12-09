import { NavLink, Link } from "react-router-dom";
import { useEffect } from "react";

const Navbar = () => {

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");

      if (window.scrollY > 45) {
        navbar.classList.add("sticky-top", "shadow-sm");
      } else {
        navbar.classList.remove("sticky-top", "shadow-sm");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    const collapse = document.getElementById("navbarCollapse");
    collapse.classList.remove("show");
  };

  return (
    <div className="container-xxl position-relative p-0">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">

        <Link to="/" onClick={closeMenu} className="navbar-brand p-0">
          <h1 className="text-primary m-0">
            <i className="fa fa-utensils me-3"></i>Restoran
          </h1>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="fa fa-bars"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0 pe-4">

            <NavLink to="/" className="nav-item nav-link" onClick={closeMenu}>Home</NavLink>
            <NavLink to="/about" className="nav-item nav-link" onClick={closeMenu}>About</NavLink>
            <NavLink to="/service" className="nav-item nav-link" onClick={closeMenu}>Service</NavLink>
            <NavLink to="/menu" className="nav-item nav-link" onClick={closeMenu}>Menu</NavLink>

            <div className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                Pages
              </a>

              <div className="dropdown-menu m-0">
                <NavLink to="/more/booking" className="dropdown-item" onClick={closeMenu}>Booking</NavLink>
                <NavLink to="/more/team" className="dropdown-item" onClick={closeMenu}>Our Team</NavLink>
                <NavLink to="/more/testimonial" className="dropdown-item" onClick={closeMenu}>Testimonial</NavLink>
              </div>
            </div>

            <NavLink to="/contact" className="nav-item nav-link" onClick={closeMenu}>Contact</NavLink>
          </div>

          <a className="btn btn-primary py-2 px-4" onClick={closeMenu}>Book A Table</a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

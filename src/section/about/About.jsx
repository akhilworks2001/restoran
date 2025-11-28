import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./about.css";

import detail1 from "../../assets/about/about-1.jpg";
import detail2 from "../../assets/about/about-2.jpg";
import detail3 from "../../assets/about/about-3.jpg";
import detail4 from "../../assets/about/about-4.jpg";

function About() {
  // COUNT-UP REFS
  const expRef = useRef(null);
  const chefRef = useRef(null);

  // COUNT-UP FUNCTION
  const startCount = (element, endValue) => {
    let start = 0;
    const duration = 1500;
    const stepTime = Math.abs(Math.floor(duration / endValue));

    const timer = setInterval(() => {
      start++;
      element.textContent = start;
      if (start === endValue) clearInterval(timer);
    }, stepTime);
  };

  useEffect(() => {
    // Init AOS
    AOS.init({
      duration: 1000,
      once: true,
    });

    // Intersection Observer for counters
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCount(expRef.current, 15);
            startCount(chefRef.current, 50);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(document.querySelector(".about-section"));
  }, []);

  return (
    <section className="about-section py-5">
      <div className="container">
        <div className="row g-5 align-items-center">

          {/* LEFT IMAGES */}
          <div className="col-lg-6">
            <div className="row g-3">

              <div className="col-6 text-start">
                <img
                  className="img-fluid rounded w-100"
                  src={detail1}
                  alt=""
                  data-aos="zoom-in"
                  data-aos-delay="100"
                />
              </div>

              <div className="col-6 text-start">
                <img
                  className="img-fluid rounded w-75"
                  src={detail2}
                  style={{ marginTop: "25%" }}
                  alt=""
                  data-aos="zoom-in"
                  data-aos-delay="300"
                />
              </div>

              <div className="col-6 text-end">
                <img
                  className="img-fluid rounded w-75"
                  src={detail3}
                  alt=""
                  data-aos="zoom-in"
                  data-aos-delay="500"
                />
              </div>

              <div className="col-6 text-end">
                <img
                  className="img-fluid rounded w-100"
                  src={detail4}
                  alt=""
                  data-aos="zoom-in"
                  data-aos-delay="700"
                />
              </div>

            </div>
          </div>

          {/* RIGHT TEXT */}
          <div className="col-lg-6" data-aos="fade-left">
            <h5 className="section-title ff-secondary text-start text-primary fw-normal">
              About Us ----
            </h5>

            <h1 className="mb-4">
              Welcome to{" "}
              <i className="fa fa-utensils text-primary me-2"></i>
              Restoran
            </h1>

            <p className="mb-4">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem
              sit.
            </p>

            <p className="mb-4">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo magna dolore erat amet.
            </p>

            {/* COUNTERS */}
            <div className="row g-4 mb-4">

              {/* EXPERIENCE */}
              <div className="col-sm-6" data-aos="fade-up" data-aos-delay="200">
                <div
                  className="d-flex align-items-center border-start border-5 px-3"
                  style={{ borderColor: "var(--primary) !important" }}
                >
                  <h1
                    ref={expRef}
                    className="flex-shrink-0 display-5 text-primary mb-0 fw-bold"
                  >
                    0
                  </h1>

                  <div className="ps-4">
                    <p className="mb-0">Years of</p>
                    <h6 className="text-uppercase mb-0">Experience</h6>
                  </div>
                </div>
              </div>

              {/* CHEFS */}
              <div className="col-sm-6" data-aos="fade-up" data-aos-delay="400">
                <div
                  className="d-flex align-items-center border-start border-5 px-3"
                  style={{ borderColor: "var(--primary) !important" }}
                >
                  <h1
                    ref={chefRef}
                    className="flex-shrink-0 display-5 text-primary mb-0 fw-bold"
                  >
                    0
                  </h1>

                  <div className="ps-4">
                    <p className="mb-0">Popular</p>
                    <h6 className="text-uppercase mb-0">Master Chefs</h6>
                  </div>
                </div>
              </div>

            </div>

            <a className="btn btn-primary py-3 px-5 mt-2" href="#">
              Read More
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;

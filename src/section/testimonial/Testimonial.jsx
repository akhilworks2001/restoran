import React from "react";
import Slider from "react-slick";

// CSS
import "./testimonial.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Images
import testimonialImg1 from "../../assets/testimonial/testimonial-1.jpg";
import testimonialImg2 from "../../assets/testimonial/testimonial-2.jpg";
import testimonialImg3 from "../../assets/testimonial/testimonial-3.jpg";
import testimonialImg4 from "../../assets/testimonial/testimonial-4.jpg";

const testimonials = [
  testimonialImg1,
  testimonialImg2,
  testimonialImg3,
  testimonialImg4
];

export default function Testimonial() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true, // IMPORTANT for Vite
    responsive: [
      {
        breakpoint: 1024, // <= 1024px
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768, // <= 768px
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <section className="testimonial-section section">
      <div className="testimonial-container">
        <div className="text-center mb-5">
          <h5 className="section-title ff-secondary text-primary fw-normal">Testimonial</h5>
          <h1>Our Clients Say!!!</h1>
        </div>

        <div className="testimonial-wrapper">
        <Slider {...settings}>
          {testimonials.map((img, index) => (
            <div key={index} className="testimonial-card mb-3">
              <i className="fa fa-quote-left fa-2x quote-icon"></i>

              <p className="testi-text">
                Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam.
              </p>

              <div className="d-flex align-items-center">
                <img
                  src={img}
                  className="rounded-circle"
                  style={{ width: "50px", height: "50px" }}
                />
                <div className="ps-3">
                  <h5 className="mb-1">Client Name</h5>
                  <small>Profession</small>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        </div>
      </div>
    </section>
  );
}

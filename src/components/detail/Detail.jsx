import React from 'react';
import "./detail.css";
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init({ duration: 800, once: true });

function Detail() {
  return (
    <section className="detail-section">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 g-4">

          <div className="col" data-aos="fade-up" data-aos-delay="100">
            <div className="detail-box">
              <i className="bi bi-person-square"></i>
              <h3>Master Chefs</h3>
              <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
            </div>
          </div>

          <div className="col" data-aos="fade-up" data-aos-delay="200">
            <div className="detail-box">
              <i className="fa fa-utensils"></i>
              <h3>Quality Food</h3>
              <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
            </div>
          </div>

          <div className="col" data-aos="fade-up" data-aos-delay="300">
            <div className="detail-box">
              <i className="bi bi-cart-plus-fill"></i>
              <h3>Online Order</h3>
              <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
            </div>
          </div>

          <div className="col" data-aos="fade-up" data-aos-delay="400">
            <div className="detail-box">
              <i className="bi bi-headset"></i>
              <h3>24/7 Support</h3>
              <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Detail;

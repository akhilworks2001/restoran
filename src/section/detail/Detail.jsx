import React from 'react';
import "./detail.css";

function Detail() {
  return (
    <section className="detail-section">

      <div className="container">

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 g-4">

          <div className="col">
            <div className="detail-box">
              <i className="bi bi-person-square"></i>
              <h3>Master Chefs</h3>
              <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
            </div>
          </div>

          <div className="col">
            <div className="detail-box">
              <i className="fa fa-utensils"></i>
              <h3>Master Chefs</h3>
              <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
            </div>
          </div>

          <div className="col">
            <div className="detail-box">
              <i className="bi bi-cart-plus-fill"></i>
              <h3>Master Chefs</h3>
              <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
            </div>
          </div>

          <div className="col">
            <div className="detail-box">
              <i className="bi bi-headset"></i>
              <h3>Master Chefs</h3>
              <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Detail;

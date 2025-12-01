import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./booking.css";

function Reservation() {
  const [videoSrc, setVideoSrc] = useState("");

  // Init AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handlePlayVideo = (src) => {
    setVideoSrc(src);
  };

  const handleCloseModal = () => {
    setVideoSrc("");
  };

  return (
    <>
      <div className="booking-section section">
        <div className="py-5 px-0" data-aos="fade-up" data-aos-delay="100">
          <div className="row g-0">

            {/* Video Section */}
            <div className="col-md-6">
              <div className="video" >
                <button
                  type="button"
                  className="btn-play"
                  data-bs-toggle="modal"
                  data-bs-target="#videoModal"
                  onClick={() =>
                    handlePlayVideo("https://www.youtube.com/embed/DWRcNpR6Kdc")
                  }
                >
                  <span></span>
                </button>
              </div>
            </div>

            {/* Reservation Form */}
            <div className="col-md-6 bg-dark d-flex align-items-center">
              <div className="p-5" data-aos="fade-left" data-aos-delay="300">
                <h5 className="section-title ff-secondary text-start text-primary fw-normal">
                  Reservation
                </h5>

                <h1 className="text-white mb-4">Book A Table Online</h1>

                <form>
                  <div className="row g-3">

                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Your Name"
                        />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Your Email"
                        />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="datetime"
                          placeholder="Date & Time"
                        />
                        <label htmlFor="datetime">Date & Time</label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-floating">
                        <select className="form-select" id="select1">
                          <option value="1">People 1</option>
                          <option value="2">People 2</option>
                          <option value="3">People 3</option>
                        </select>
                        <label htmlFor="select1">No Of People</label>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          placeholder="Special Request"
                          id="message"
                          style={{ height: "100px" }}
                        ></textarea>
                        <label htmlFor="message">Special Request</label>
                      </div>
                    </div>

                    <div className="col-12">
                      <button className="btn btn-primary w-100 py-3" type="submit">
                        Book Now
                      </button>
                    </div>

                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>

        {/* Video Modal */}
        <div
          className="modal fade"
          id="videoModal"
          tabIndex="-1"
          aria-labelledby="videoModalLabel"
          aria-hidden="true"
          onClick={handleCloseModal}
        >
          <div className="modal-dialog">
            <div className="modal-content rounded-0">
              <div className="modal-header">
                <h5 className="modal-title" id="videoModalLabel">YouTube Video</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={handleCloseModal}
                ></button>
              </div>

              <div className="modal-body">
                <div className="ratio ratio-16x9">
                  <iframe
                    className="embed-responsive-item"
                    src={videoSrc}
                    allowFullScreen
                    allow="autoplay; encrypted-media"
                    title="YouTube Video"
                  ></iframe>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Reservation;

import React from "react";

const Contact = () => {
  return (
    <div className="container-xxl py-5 section">
      <div className="container">

        {/* Heading */}
        <div className="text-center" data-aos="fade-up" data-aos-delay="100">
          <h5 className="section-title ff-secondary text-center text-primary fw-normal">
            Contact Us
          </h5>
          <h1 className="mb-5">Contact For Any Query</h1>
        </div>

        <div className="row g-4">

          {/* Contact Info */}
          <div className="col-12" data-aos="fade-up" data-aos-delay="200">
            <div className="row gy-4">

              <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
                <h5 className="section-title ff-secondary fw-normal text-start text-primary">
                  Booking
                </h5>
                <p>
                  <i className="fa fa-envelope-open text-primary me-2"></i>
                  book@example.com
                </p>
              </div>

              <div className="col-md-4" data-aos="fade-up" data-aos-delay="400">
                <h5 className="section-title ff-secondary fw-normal text-start text-primary">
                  General
                </h5>
                <p>
                  <i className="fa fa-envelope-open text-primary me-2"></i>
                  info@example.com
                </p>
              </div>

              <div className="col-md-4" data-aos="fade-up" data-aos-delay="500">
                <h5 className="section-title ff-secondary fw-normal text-start text-primary">
                  Technical
                </h5>
                <p>
                  <i className="fa fa-envelope-open text-primary me-2"></i>
                  tech@example.com
                </p>
              </div>

            </div>
          </div>

          {/* Map */}
          <div className="col-md-6" data-aos="fade-right" data-aos-delay="600">
            <iframe
              title="Google Map"
              className="position-relative rounded w-100 h-100"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799141421!2d75.31857407611038!3d20.593684006132743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ffb1e212b9b%3A0x9f2f9b62fa8ff1a!2sIndia!5e0!3m2!1sen!2sin!4v1699612345678!5m2!1sen!2sin"
              style={{ minHeight: "350px", border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          {/* Contact Form */}
          <div className="col-md-6" data-aos="fade-left" data-aos-delay="700">
            <form>
              <div className="row g-3" data-aos="fade-up" data-aos-delay="800">

                <div className="col-md-6">
                  <div className="form-floating">
                    <input type="text" className="form-control" id="name" placeholder="Your Name" />
                    <label htmlFor="name">Your Name</label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-floating">
                    <input type="email" className="form-control" id="email" placeholder="Your Email" />
                    <label htmlFor="email">Your Email</label>
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-floating">
                    <input type="text" className="form-control" id="subject" placeholder="Subject" />
                    <label htmlFor="subject">Subject</label>
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Leave a message here"
                      id="message"
                      style={{ height: "150px" }}
                    ></textarea>
                    <label htmlFor="message">Message</label>
                  </div>
                </div>

                <div className="col-12">
                  <button className="btn btn-primary w-100 py-3" type="submit">
                    Send Message
                  </button>
                </div>

              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;

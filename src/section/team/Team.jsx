import React from "react";
import "./team.css";
import 'aos/dist/aos.css';
import AOS from 'aos';


import chef1 from "../../assets/team/team-1.jpg";
import chef2 from "../../assets/team/team-2.jpg";
import chef3 from "../../assets/team/team-3.jpg";
import chef4 from "../../assets/team/team-4.jpg";

AOS.init({ duration: 800, once: true });

const teamMembers = [
  { id: 1, img: chef1, name: "Full Name", role: "Designation", delay: "0.1s" },
  { id: 2, img: chef2, name: "Full Name", role: "Designation", delay: "0.2s" },
  { id: 3, img: chef3, name: "Full Name", role: "Designation", delay: "0.3s" },
  { id: 4, img: chef4, name: "Full Name", role: "Designation", delay: "0.4s" },
];

function Team() {
  return (
    <section className="section section-container">
      <div className="container">

        <div className="text-center" data-aos="fade-up" data-aos-delay="100">
          <h5 className="section-title ff-secondary text-center text-primary fw-normal">
            Team Members
          </h5>
          <h2 className="mb-5">Our Master Chefs</h2>
        </div>

        <section className="row g-4">
          {teamMembers.map((member, i) => (
            <div
              className="col-lg-3 col-md-6"
              data-wow-delay={member.delay}
              key={member.id}
              data-aos="fade-up" data-aos-delay={`${i+2}50`}
            >
              <div className="team-item text-center rounded overflow-hidden">
                <div className="rounded-circle overflow-hidden m-4">
                  <img className="img-fluid" src={member.img} alt={member.name} />
                </div>

                <h5 className="mb-0">{member.name}</h5>
                <small>{member.role}</small>

                <div className="d-flex justify-content-center mt-3">
                  <a className="btn btn-square btn-primary mx-1" href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn btn-square btn-primary mx-1" href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="btn btn-square btn-primary mx-1" href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </section>

      </div>
    </section>
  );
}

export default Team;

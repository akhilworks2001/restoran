import React, { useState, useEffect } from "react";
import "./menu.css";
import AOS from "aos";
import "aos/dist/aos.css";

import menu1 from "../../assets/menu/menu-1.jpg";
import menu2 from "../../assets/menu/menu-2.jpg";
import menu3 from "../../assets/menu/menu-3.jpg";
import menu4 from "../../assets/menu/menu-4.jpg";
import menu5 from "../../assets/menu/menu-5.jpg";
import menu6 from "../../assets/menu/menu-6.jpg";
import menu7 from "../../assets/menu/menu-7.jpg";
import menu8 from "../../assets/menu/menu-8.jpg";

function FoodMenu() {
  const [activeTab, setActiveTab] = useState(1);
  const [fade, setFade] = useState("fade-in");

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      offset: 100,
    });
  }, []);

  const menuImages = [
    menu1, menu2, menu3, menu4,
    menu5, menu6, menu7, menu8,
  ];

  const tabs = [
    { id: 1, icon: "fa-coffee", title: "Breakfast", subtitle: "Popular", price: 100 },
    { id: 2, icon: "fa-hamburger", title: "Lunch", subtitle: "Special", price: 115 },
    { id: 3, icon: "fa-utensils", title: "Dinner", subtitle: "Lovely", price: 130 },
  ];

  const handleTabChange = (id) => {
    setFade("fade-out"); // 1️⃣ Start fade-out

    setTimeout(() => {
      setActiveTab(id);  // 2️⃣ Switch tab after fade-out completed
      setFade("fade-in"); // 3️⃣ Fade-in new content

      setTimeout(() => AOS.refresh(), 50);
    }, 300);
  };

  const renderMenuItems = (price) => (
    <div className={`row g-4 menu-anim-wrapper ${fade}`}>
      {menuImages.map((img, index) => (
        <div
          className="col-lg-6"
          key={index}
          data-aos="fade-up"
          data-aos-delay={index * 100}
        >
          <div className="d-flex align-items-center menu-item-box">
            <img
              className="flex-shrink-0 img-fluid rounded"
              src={img}
              alt="menu item"
              style={{ width: "80px" }}
            />
            <div className="w-100 d-flex flex-column text-start ps-4">
              <h5 className="d-flex justify-content-between border-bottom pb-2">
                <span>Chicken Burger</span>
                <span className="text-primary">${price}</span>
              </h5>
              <small className="fst-italic">
                Ipsum ipsum clita erat amet dolor justo diam
              </small>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="menu-section">
      <div className="container">

        {/* Title */}
        <div className="text-center" data-aos="fade-up">
          <h5 className="section-title ff-secondary text-primary fw-normal">Food Menu</h5>
          <h1 className="mb-5">Most Popular Items</h1>
        </div>

        {/* Tabs */}
        <div className="text-center" data-aos="fade-up">
          <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
            {tabs.map((tab) => (
              <li className="nav-item" key={tab.id}>
                <button
                  className={`d-flex align-items-center text-start mx-3 pb-4 btn-nostyle ${
                    activeTab === tab.id ? "active" : ""
                  }`}
                  onClick={() => handleTabChange(tab.id)}
                >
                  <i className={`fa ${tab.icon} fa-2x text-primary`}></i>
                  <div className="ps-3">
                    <small className="text-body">{tab.subtitle}</small>
                    <h6 className="mt-n1 mb-0 text-dark">{tab.title}</h6>
                  </div>
                </button>
              </li>
            ))}
          </ul>

          {/* Items */}
          {renderMenuItems(tabs.find((t) => t.id === activeTab).price)}
        </div>

      </div>
    </div>
  );
}

export default FoodMenu;

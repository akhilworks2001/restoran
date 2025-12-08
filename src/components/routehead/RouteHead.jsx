import React from "react";
import { NavLink } from "react-router-dom";


import './routehead.css';

const RouteHead = ({ title, breadcrumbs }) => {
  return (
    <div className="container-xxl py-5 bg-dark hero-header ">
      <div className="container text-center my-5 pt-5 pb-4">
        <h1 className="display-3 text-white mb-3 animated slideInDown">
          {title}
        </h1>

        <nav aria-label="breadcrumb">
          <ol className="breadcrumb justify-content-center text-uppercase">
            {breadcrumbs.map((item, index) => (
              <li
                key={index}
                className={`breadcrumb-item ${
                  item.active ? "active text-white" : ""
                }`}
                aria-current={item.active ? "page" : undefined}
              >
                {item.active ? (
                  item.label
                ) : (
                    <NavLink
                    to={item.href || "/"}
                    className={item.label === "Home" ? "breadcrumb-home" : "text-white-50"}
                  >
                    {item.label}
                  </NavLink>
                  
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default RouteHead;

import React from "react";
import RouteHead from "../routehead/RouteHead";

const PageLayout = ({ title, breadcrumbs, children }) => {
  return (
    <>
      <RouteHead title={title} breadcrumbs={breadcrumbs} />
      {children}
    </>
  );
};

export default PageLayout;

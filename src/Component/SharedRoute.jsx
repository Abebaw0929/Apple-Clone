import React from "react";
import Header from "./Header/header";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router";
const SharedRoute = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default SharedRoute;

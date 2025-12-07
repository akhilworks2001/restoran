import React from 'react'
import Header from '../../components/header/Header';
import Detail from "../../components/detail/Detail";
import About from "../../components/about/About";
import Menu from "../../components/menu/Menu";
import Booking from "../../components/booking/Booking";
import Team from "../../components/team/Team";
import Testimonial from "../../components/testimonial/Testimonial";
import Footer from "../../components/footer/Footer";

function Home() {
  return (
    <>
      <Header />
      <Detail />
      <About />
      <Menu />
      <Booking />
      <Team />
      <Testimonial />
    </>
  )
}

export default Home
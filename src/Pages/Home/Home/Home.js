import React from "react";
import MakeApponment from "../../MakeApponment/MakeApponment";
import Banner from "../Banner/Banner";
import Contact from "../Contac/Contact";
import Exceptional from "../Exceptional/Exceptional";
import InfoCards from "../InfoCards/InfoCards";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Services></Services>
      <Exceptional></Exceptional>
      <MakeApponment></MakeApponment>
      <Testimonial></Testimonial>
      <Contact></Contact>
    </div>
  );
};

export default Home;

import React from "react";
import Banner from "../components/Banner";
import LatestFindAndLost from "../components/LatestFindAndLost";
import Testimonial from "../components/Testimonial";
import HowItWork from "../components/HowItWork";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <LatestFindAndLost></LatestFindAndLost>
      <HowItWork></HowItWork>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;

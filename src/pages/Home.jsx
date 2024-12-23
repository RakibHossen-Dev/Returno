import React from "react";
import Banner from "../components/Banner";
import LatestFindAndLost from "../components/LatestFindAndLost";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <LatestFindAndLost></LatestFindAndLost>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;

import React from "react";
import Banner from "../components/Banner";
import LatestFindAndLost from "../components/LatestFindAndLost";
import Testimonial from "../components/Testimonial";
import HowItWork from "../components/HowItWork";
import { Helmet } from "react-helmet";
// import MotionPath from "../components/MotionPath";
import ScrollLinked from "../components/ScrollLinked";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Returno | Home</title>
      </Helmet>
      <ScrollLinked />
      <Banner></Banner>
      <LatestFindAndLost></LatestFindAndLost>
      {/* <MotionPath></MotionPath> */}
      <HowItWork></HowItWork>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;

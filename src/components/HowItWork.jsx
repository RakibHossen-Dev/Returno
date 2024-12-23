import React from "react";
import howWrokImg from "../assets/howWork.png";
const HowItWork = () => {
  return (
    <div className="w-11/12 mx-auto my-10">
      <h3 className="text-3xl font-semibold mb-4 text-center ">How It Work</h3>
      <div className="border-b-4 w-40 mx-auto border-teal-600"></div>
      <div className="border-b-4 mt-2  w-20 mx-auto border-teal-600"></div>
      <div className="flex justify-between items-center gap-5 mt-5">
        <div className="lg:w-1/2">
          <img
            className="lg:w-[500px] lg:h-[400px] rounded-2xl"
            src={howWrokImg}
            alt=""
          />
        </div>
        <div className="lg:w-1/2">
          <h4 className="font-bold text-teal-600">Register or Login</h4>
          <p>Create an account to track your posts and connect with others.</p>
          <h4 className="font-bold mt-3  text-teal-600"> Add a New Post</h4>
          <p>
            Lost something? Found an item? Add a post with relevant details,
            such as category, location, and date, along with a photo.
          </p>
          <h4 className="font-bold mt-3  text-teal-600">Match and Resolve</h4>
          <p>
            Our system helps you find potential matches. Contact the other party
            securely, finalize details, and ensure the item gets back to its
            rightful owner.
          </p>
          <h4 className="font-bold mt-3  text-teal-600">
            Celebrate the Outcome
          </h4>
          <p>
            Your contribution to the community matters. Share your success story
            and inspire others to use Returno for a positive impact.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;

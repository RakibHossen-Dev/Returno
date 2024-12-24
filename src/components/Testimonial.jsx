import { MdArrowBack, MdArrowForward } from "react-icons/md";
// import testimonial from "../assets/testimonial1.jpg";
import { useRef } from "react";

const Testimonial = () => {
  const slider = useRef();
  const txRef = useRef(0);

  const sildeForward = () => {
    if (txRef.current > -50) {
      txRef.current -= 25;
    }
    slider.current.style.transform = `translateX(${txRef.current}%)`;
  };

  const sildBackward = () => {
    if (txRef.current < 0) {
      txRef.current += 25;
    }
    slider.current.style.transform = `translateX(${txRef.current}%)`;
  };

  return (
    <div className="w-11/12 mx-auto my-16  pb-10">
      <h4 className="text-xl text-teal-600 text-center mb-1 uppercase">
        Testimonial
      </h4>
      <h3 className="text-3xl font-bold text-black text-center mb-4">
        What People Say
      </h3>
      <div className="border-b-4 w-40 mx-auto border-teal-600"></div>
      <div className="border-b-4 mt-2  w-20 mx-auto border-teal-600"></div>
      <div className="my-8 mx-auto py-0 md:px-20 px-10 relative">
        <button onClick={sildeForward}>
          <MdArrowForward className="text-white text-3xl p-1 lg:text-5xl bg-teal-600 rounded-full md:p-2 absolute top-1/2 right-0 -translate-y-1/2" />
        </button>
        <button onClick={sildBackward}>
          <MdArrowBack className="text-white text-3xl p-1  lg:text-5xl bg-teal-600 rounded-full md:p-2 absolute top-1/2 left-0 -translate-y-1/2" />
        </button>
        <div className="overflow-hidden">
          <ul
            ref={slider}
            className="flex   gap-5 md:w-[200%] w-[400%] transition-transform duration-300 ease-in-out"
          >
            <li className="w-1/4 border ">
              <div className="shadow-custom  lg:p-14 p-6 rounded-sm space-y-5">
                <div className="flex md:flex-row flex-col items-center gap-2">
                  <img
                    className="w-14 h-14 rounded-full border-4 border-teal-600"
                    // src={testimonial}
                    src="https://i.ibb.co.com/Jtr2XY3/image.png"
                    alt="John Doe"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-teal-600">
                      John Doe
                    </h3>
                    <p>TechGuru, UK</p>
                  </div>
                </div>
                <p>
                  I never thought I'd see my wallet again after losing it at the
                  park. Thanks to Returno, someone found it and returned it to
                  me within a day! Truly a lifesaver!
                </p>
              </div>
            </li>
            <li className="w-1/4 border">
              <div className="shadow-custom  lg:p-14 p-6 rounded-sm space-y-5">
                <div className="flex md:flex-row flex-col items-center gap-2">
                  <img
                    className="w-14 h-14 rounded-full border-4 border-teal-600"
                    // src={testimonial}
                    src="https://i.ibb.co.com/df657qp/image.png"
                    alt="Maria Lopez"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-teal-600">
                      Maria Lopez
                    </h3>
                    <p>DevTech, Canada</p>
                  </div>
                </div>
                <p>
                  Losing my passport before an international trip was a
                  nightmare. Thankfully, Returno helped me connect with someone
                  who found it at the airport. Highly recommend this platform!
                </p>
              </div>
            </li>
            <li className="w-1/4 border">
              <div className="shadow-custom lg:p-14 p-6 rounded-sm space-y-5">
                <div className="flex md:flex-row flex-col items-center gap-2">
                  <img
                    className="w-14 h-14 rounded-full border-4 border-teal-600"
                    // src={testimonial}
                    src="https://i.ibb.co.com/W6HFrj7/image.png"
                    alt="Rahul Sen"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-teal-600">
                      Rahul Sen
                    </h3>
                    <p>Innovate IT, India</p>
                  </div>
                </div>
                <p>
                  "Returno is amazing! I lost my phone during a concert, and
                  within hours, a kind soul reported it here. I’m so grateful
                  for this website!
                </p>
              </div>
            </li>
            <li className="w-1/4 border">
              <div className="shadow-custom lg:p-14 p-6 rounded-sm space-y-5">
                <div className="flex md:flex-row flex-col items-center gap-2">
                  <img
                    className="w-14 h-14 rounded-full border-4 border-teal-600"
                    // src={testimonial}
                    src="https://i.ibb.co.com/6HPwQVk/image.png"
                    alt="Rahul Sen"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-teal-600">
                      Ayesha Rahman
                    </h3>
                    <p>Innovate IT, India</p>
                  </div>
                </div>
                <p>
                  I found a pair of expensive sunglasses at the beach and posted
                  about it on Returno. Within hours, the owner contacted me and
                  was so relieved. It feels great to help!
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner3.png";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="-mt-10">
      <div>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <div
              className="h-[600px] bg-cover bg-center   relative"
              style={{
                backgroundImage: `url(${banner1})`,
              }}
            >
              <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center">
                <div className="text-white relative z-10 w-9/12 mx-auto md:w-full">
                  <h2 className="lg:text-5xl text-2xl font-bold mb-5 lg:w-9/12  mx-auto">
                    Lost an Item? We Can Help!
                  </h2>
                  <p className="md:w-1/2 mx-auto">
                    Quickly report your lost belongings with Returno. We’ll help
                    you reconnect with what matters.
                  </p>

                  <button className="text-white py-2 px-8 bg-teal-600 rounded-lg mt-5 hover:bg-transparent border border-teal-600">
                    <Link to="/addLostAndFoundItem">Report Lost Item</Link>
                  </button>
                </div>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 "></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="h-[600px] bg-cover bg-center relative"
              style={{
                backgroundImage: `url(${banner3})`,
              }}
            >
              <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center">
                <div className="text-white relative z-10 w-9/12 mx-auto md:w-full">
                  <h2 className="lg:text-5xl text-2xl font-bold mb-5 lg:w-9/12  mx-auto">
                    Found Something Valuable?
                  </h2>
                  <p className="md:w-1/2 mx-auto">
                    Help someone by reporting items you’ve found. Together, we
                    can make a difference.
                  </p>
                  <button className="text-white py-2 px-8 bg-teal-600 rounded-lg mt-5 hover:bg-transparent border border-teal-600">
                    <Link to="/addLostAndFoundItem">Report Lost Item</Link>
                  </button>
                </div>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 "></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="h-[600px] bg-cover bg-center relative"
              style={{
                backgroundImage: `url(${banner2})`,
              }}
            >
              <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center">
                <div className="text-white relative z-10 w-9/12 mx-auto md:w-full">
                  <h2 className="lg:text-5xl text-2xl font-bold mb-5 lg:w-9/12  mx-auto">
                    Your Connection to Lost & Found.
                  </h2>
                  <p className="md:w-1/2 mx-auto">
                    Returno makes it simple to find or report lost items. Join
                    us to reconnect lives with belongings.
                  </p>
                  <button className="text-white py-2 px-8 bg-teal-600 rounded-lg mt-5 hover:bg-transparent border border-teal-600">
                    <Link to="/addLostAndFoundItem">Report Lost Item</Link>
                  </button>
                </div>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 "></div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";

import category1 from "../assets/category1.jpg";
import category2 from "../assets/category2.jpg";
import category3 from "../assets/category3.jpg";
import category4 from "../assets/category4.jpg";
import category5 from "../assets/category5.jpg";
import category6 from "../assets/category6.jpg";
import category7 from "../assets/category7.jpg";

const Category = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  const prepend = () => {
    if (swiperRef) {
      swiperRef.prependSlide("<div>New Slide</div>");
    }
  };
  const prepend2 = () => {
    if (swiperRef) {
      swiperRef.prependSlide([
        "<div>New Slide 1</div>",
        "<div>New Slide 2</div>",
      ]);
    }
  };
  const append = () => {
    if (swiperRef) {
      swiperRef.appendSlide("<div>New Slide</div>");
    }
  };
  const append2 = () => {
    if (swiperRef) {
      swiperRef.appendSlide([
        "<div>New Slide 1</div>",
        "<div>New Slide 2</div>",
      ]);
    }
  };

  return (
    <div className="my-20 w-11/12 mx-auto">
      <h3 className="text-center text-3xl font-semibold mb-2">Our Category</h3>
      <div className="border-b-4 w-40 mx-auto border-teal-600"></div>
      <div className="border-b-4 mt-2  w-20 mx-auto border-teal-600 mb-11"></div>

      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          // when window width is >= 0px
          0: {
            slidesPerView: 1, // Show 1 slide on mobile
            centeredSlides: false,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2, // Show 2 slides on tablets
            centeredSlides: false,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 3, // Show 3 slides on desktops
            centeredSlides: true,
          },
        }}
      >
        <SwiperSlide>
          <div className="bg-white p-2 border flex flex-col justify-center items-center rounded-md">
            <img className="w-full h-[250px] relative" src={category1} alt="" />
            <h3 className="absolute text-black text-2xl font-semibold bottom-6">
              Pets
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white p-2 border flex flex-col justify-center items-center rounded-md">
            <img className="w-full h-[250px] relative" src={category2} alt="" />
            <h3 className="absolute text-black text-2xl font-semibold bottom-6">
              Stationery
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white p-2 border flex flex-col justify-center items-center rounded-md">
            <img
              className="w-full h-[250px]  relative"
              src={category3}
              alt=""
            />
            <h3 className="absolute text-black text-2xl font-semibold bottom-6">
              Documents
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white p-2 border flex flex-col justify-center items-center rounded-md">
            <img
              className="w-full h-[250px]  relative"
              src={category4}
              alt=""
            />
            <h3 className="absolute text-black text-2xl font-semibold bottom-6">
              Gadgets
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white p-2 border flex flex-col justify-center items-center rounded-md">
            <img
              className="w-full h-[250px]  relative"
              src={category5}
              alt=""
            />
            <h3 className="absolute text-black text-2xl font-semibold bottom-6">
              Jewelry
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white p-2 border flex flex-col justify-center items-center rounded-md">
            <img
              className="w-full h-[250px]  relative"
              src={category6}
              alt=""
            />
            <h3 className="absolute text-black text-2xl font-semibold bottom-6">
              Money
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white p-2 border flex flex-col justify-center items-center rounded-md">
            <img
              className="w-full h-[250px]  relative"
              src={category7}
              alt=""
            />
            <h3 className="absolute text-black text-2xl font-semibold bottom-6">
              Keys
            </h3>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* <p className="append-buttons">
        <button onClick={prepend2} className="prepend-2-slides">
          Prepend 2 Slides
        </button>
        <button onClick={prepend} className="prepend-slide">
          Prepend Slide
        </button>
        <button onClick={append} className="append-slide">
          Append Slide
        </button>
        <button onClick={append2} className="append-2-slides">
          Append 2 Slides
        </button>
      </p> */}
    </div>
  );
};

export default Category;

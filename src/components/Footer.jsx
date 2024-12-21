import { Link } from "react-router-dom";
import returno from "../assets/returno_logo.png";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineMarkEmailRead } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-teal-50  py-5 ">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-between  gap-5 w-11/12 mx-auto">
        <div className="space-y-4">
          <img className="w-60" src={returno} alt="" />
          <p className="text-md ">
            Returno - Bridging the Gap Between Lost and Found. Helping you
            reconnect with what matters most.
          </p>
          <div className="flex items-center gap-3">
            <Link className="text-white p-2 bg-teal-600 text-xl hover:rounded-full ease-linear- duration-200">
              <FaInstagram />
            </Link>
            <Link className="text-white p-2 bg-teal-600 text-xl hover:rounded-full ease-linear- duration-200">
              <FaFacebook />
            </Link>
            <Link className="text-white p-2 bg-teal-600 text-xl hover:rounded-full ease-linear- duration-200">
              <FaXTwitter />
            </Link>
            <Link className="text-white p-2 bg-teal-600 text-xl hover:rounded-full ease-linear- duration-200">
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
        <div>
          <h4 className="text-xl mb-4 ">Company</h4>
          <div className="flex flex-col gap-3">
            <Link className="text-teal-600">About us</Link>
            <Link className="text-teal-600">How It Works</Link>
            <Link className="text-teal-600">Knowledge hub</Link>
            <Link className="text-teal-600">Success & Stories</Link>
            <Link className="text-teal-600"> Contact</Link>
          </div>
        </div>
        <div>
          <h4 className="text-xl mb-4  ">Links</h4>
          <div className="flex flex-col gap-3">
            <Link className="text-teal-600">Education</Link>
            <Link className="text-teal-600">Design</Link>
            <Link className="text-teal-600">Film & Video</Link>
            <Link className="text-teal-600">Technology</Link>
            <Link className="text-teal-600"> Games</Link>
          </div>
        </div>
        <div>
          <h4 className="text-xl mb-4 ">Newsletter</h4>
          <div className="flex justify-center items-center border border-teal-600 py-2 ">
            <input type="text " className="bg-transparent focus:outline-0 " />
            <Link className="bg-teal-600  text-white px-4 py-4 text-xl">
              <MdOutlineMarkEmailRead />
            </Link>
          </div>
          <p className="mt-3 ">
            Sign up for our latest news & articles. We won’t give you spam
            mails.
          </p>
        </div>
      </div>

      <div className="border-b border-dashed my-8 border-teal-600" />

      <p className="text-sm text-center text-teal-600">
        © Copyright 2024 by Returno
      </p>
    </div>
  );
};

export default Footer;

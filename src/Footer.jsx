import { FaArrowRightLong } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import image2 from "../src/assets/Image2.png";

const Footer = () => {
  return (
    <footer className="bg-amber-500 text-white py-8">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Side */}
        <div className="flex flex-col">
          {/* input filed */}
          <div className="flex flex-col mx-auto items-center ml-48 mb-36 mt-10">
            <div className="flex w-96 rounded">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full rounded-lg border-none px-4 py-2  text-gray-500 outline-none focus:outline-none relative"
              />
              <button className=" flex items-center my-1 ml-64 rounded-lg bg-orange-400 px-4 py-1 text-white absolute">
                Subscribe
                <FaArrowRightLong className="ml-2" />
              </button>
            </div>
          </div>
          {/* input field end */}
          <div className="flex items-center ">
            <div className="ml-48 mr-24">
              <p className="text-4xl text-black font-bold">
                pti<span className="text-orange-600">.</span>{" "}
              </p>
              <p className="text-m text-black mt-6 ml-3">
                Copyright&copy;Tripp.All Right Reserved;
              </p>
            </div>
            {/* social icons */}
            <div className="flex mt-16">
              <div className="mr-4">
                <div className="bg-red-100 rounded-full p-2">
                  <FaGoogle className="text-orange-600 text-xl" />
                </div>
              </div>
              <div className="mr-4">
                <div className="bg-red-100 rounded-full p-2">
                  <FaTwitter className="text-orange-600 text-xl" />
                </div>
              </div>
              <div className="mr-4">
                <div className="bg-red-100 rounded-full p-2">
                  <FaInstagram className="text-orange-600 text-xl" />
                </div>
              </div>
            </div>

            {/* social icons end */}
          </div>
        </div>

        {/* Right Side */}
        <div className="mt-0 mr-12 mb-12">
          <img src={image2} alt="" className="w-72 h-72" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

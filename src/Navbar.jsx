import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { RiUserLine } from "react-icons/ri";
import "./Nav.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownItems = [
    "Home",
    "Details",
    "Category",
    "My Favorites",
    "Profile",
    "Log In/Sign Up",
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-200 p-4 flex justify-between items-center">
      {/* Logo and Search Bar */}
      <div className="flex items-center">
        <div className="text-black font-bold text-2xl">pti.</div>
      </div>

      <div className="ml-4 flex items-center relative">
        <CiSearch className="w-5 h-5 mt-1 ml-3 text-orange-600 absolute pointer-events-none" />
        <input
          type="text"
          placeholder="Search Audiobook"
          className=" py-2 pl-10 px-20 border rounded-lg focus:outline-none"
        />
      </div>

      {/* Dropdown Menu */}
      <div className="relative">
        <button
          className="bg-white hover:bg-gray-300 text-gray-800 font-bold py-2 px-8 rounded-lg inline-flex items-center"
          onClick={toggleDropdown}
        >
          MENU
          <svg
            className="fill-current h-4 w-4 ml-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            {/* Dropdown icon */}
          </svg>
          <RiArrowDropDownLine
            className="arrow text-orange-600"
            style={{ width: "24px" }}
            fontSize="24px"
          />
        </button>
        <ul
          className={`absolute ${
            isOpen ? "block" : "hidden"
          } bg-white text-gray-800 pt-3 mt-1 custom-dropdown rounded-lg`}
        >
          {/* Dropdown list items */}
          {dropdownItems.map((item, index) => (
            <li
              key={index}
              className="text-gray-500 hover:bg-gray-300 hover:text-orange-600 py-2 px-8 pt-2 "
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Profile Icon */}
      <RiUserLine className="text-white text-sm w-9 h-9 ml-4 p-2 bg-orange-500 rounded-full cursor-pointer" />
    </div>
  );
};

export default Navbar;

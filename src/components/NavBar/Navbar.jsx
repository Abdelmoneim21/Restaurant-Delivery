import { useState } from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

export default function Navbar({ setShoweLogin }) {
  const [menu, setMenu] = useState("Home");
  return (
    <div className="navbar grid md:grid-cols-3 items-center py-5">
      <Link to="/">
        <img
          src={assets.logo}
          alt="logo"
          className="px-8 m-auto  sm:mb-4 md:m-2 md:mb-0"
        />
      </Link>
      <ul className="nav-menu md:flex md:text-center justify-between lg:w-[100%] cursor-pointer ">
        <li
          className={`cursor-pointer text-center ${
            menu === "Home" ? "border-b-2 border-b-black" : ""
          }`}
          onClick={() => {
            setMenu("Home");
          }}
        >
          Home
        </li>
        <li
          className={`text-center ${
            menu === "Menu" ? "border-b-2 border-b-black" : ""
          }`}
          onClick={() => {
            setMenu("Menu");
          }}
        >
          Menu
        </li>
        <li
          className={` text-center ${
            menu === "Mobile-App" ? "border-b-2 border-b-black" : ""
          }`}
          onClick={() => {
            setMenu("Mobile-App");
          }}
        >
          Mobile-App
        </li>
        <li
          className={`text-center mb-4 ${
            menu === "Contact-Us" ? "border-b-2 border-b-black" : ""
          }`}
          onClick={() => {
            setMenu("Contact-Us");
          }}
        >
          Contact-Us
        </li>
      </ul>
      <div className="nav-right flex justify-center items-center">
        <img src={assets.search_icon} alt="search" className="mr-10 pointer" />
        <div className="nav-search-icon relative">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="basket" className="mr-10" />
          </Link>
          <div className="dot absolute min-h-[10px] min-w-[10px] border-r-[50%] rounded-2xl bg-[#ff4c24] top-[-8px] left-[16px] "></div>
        </div>
        <button
          className="hover:bg-[#fff4f2] px-7 py-3 text-xl pointer border-[1px] border-[#ff4c24] rounded-3xl font-semibold transition"
          onClick={() => setShoweLogin(true)}
        >
          Sign In
        </button>
      </div>
    </div>
  );
}

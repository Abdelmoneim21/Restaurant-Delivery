import { assets } from "../../assets/assets";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer grid gap-6 md:grid-cols-3 items-center mt-[50px] px-5 py-10 text-[#d4d4d4] bg-[#2e2e2e]">
      {/* Left Section */}
      <div className="left text-center md:text-start px-5">
        <img
          src={assets.logo}
          alt="logo"
          className="mb-4 mx-auto md:m-0 w-20 md:w-24"
        />
        <p className="mb-4 text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
          nesciunt sint tenetur soluta saepe.
        </p>
        <div className="icons flex justify-center md:justify-start space-x-3">
          <FaSquareFacebook size={30} />
          <FaLinkedin size={30} />
          <FaTwitterSquare size={30} />
        </div>
      </div>

      {/* Center Section */}
      <div className="center text-center">
        <h1 className="text-xl text-white font-bold">COMPANY</h1>
        <ul className="unstyled mt-3 space-y-2 text-sm">
          <li>Home</li>
          <li>About us</li>
          <li>Delivery</li>
          <li>Privacy policy</li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="right text-center">
        <h1 className="text-xl text-white font-bold">GET IN TOUCH</h1>
        <p className="mt-3 text-sm">+20101606060</p>
        <p className="mt-3 text-sm">contactme@email.com</p>
      </div>
    </div>
  );
}

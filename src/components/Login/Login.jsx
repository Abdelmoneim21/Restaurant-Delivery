import { useState } from "react";
import { assets } from "../../assets/assets";

export default function Login({ setShoweLogin }) {
  const [current, setCurrent] = useState("Login");

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
      {/* Modal Container */}
      <div className="relative w-[90%] max-w-md bg-white rounded-lg shadow-lg p-6 ">
        {/* Header */}
        <div className=" justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800 text-center">
            {current}
          </h2>
          <img
            src={assets.cross_icon}
            alt="close"
            className="w-10 h-10  cursor-pointer absolute top-[-10px] right-[-20px] bg-[#f00] rounded-3xl border-[10px] border-[#f00] "
            onClick={() => setShoweLogin(false)}
          />
        </div>

        {/* Form */}
        <div className="Login-container">
          <form className="space-y-4">
            {current === "Sign Up" && (
              <input
                type="text"
                placeholder="Username"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:[#e3701b]"
                required
              />
            )}
            <input
              type="email"
              placeholder="E-mail"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:[#e3701b]"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:[#e3701b]"
              required
            />
            <button
              type="submit"
              className="w-full py-2 bg-[#e3701b] text-white rounded-lg hover:bg-[#e36021] transition duration-300"
            >
              {current === "Sign Up" ? "Create Account" : "Login"}
            </button>
          </form>

          {/* Terms & Conditions */}
          <div className="flex items-start mt-4 space-x-2">
            <input type="checkbox" className="mt-1" required />
            <p className="text-sm text-gray-600">
              By continuing, I agree to the{" "}
              <span className="text-blue-500 underline cursor-pointer">
                terms of use
              </span>{" "}
              &{" "}
              <span className="text-blue-500 underline cursor-pointer">
                policy
              </span>
              .
            </p>
          </div>

          {/* Footer */}
          <div className="mt-6 text-center">
            {current === "Login" ? (
              <p className="text-sm text-gray-600">
                Don&apos;t have an account?{" "}
                <span
                  onClick={() => setCurrent("Sign Up")}
                  className="text-[#e3701b] ml-3 text-xl  cursor-pointer"
                >
                  Sign Up
                </span>
              </p>
            ) : (
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <span
                  onClick={() => setCurrent("Login")}
                  className="text-[#e3701b] ml-3 text-xl  cursor-pointer"
                >
                  Login
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

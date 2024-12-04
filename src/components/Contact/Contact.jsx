import { motion } from "framer-motion"; // For animation
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa"; // Importing icons from react-icons

export default function ContactUs() {
  return (
    <div className="bg-gradient-to-r from-orange-400 to-red-500 min-h-screen flex items-center justify-center py-8 relative">
      <div
        className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url(/path-to-your-image.jpg)" }}
      ></div>{" "}
      {/* Optional background image */}
      <div className="relative max-w-3xl w-full bg-white p-8 rounded-lg shadow-xl z-10">
        <motion.h1
          className="text-4xl font-extrabold text-center font-mono text-gray-800 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Get in Touch with Us
        </motion.h1>

        <p className="text-lg text-center text-gray-600 mb-8">
          We’d love to hear from you! Whether you have a question, feedback, or
          just want to chat, feel free to reach out.
        </p>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-medium text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-600">Message</label>
            <textarea
              placeholder="Write your message here"
              className="w-full p-4 h-32 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            ></textarea>
          </div>

          <div className="flex justify-center">
            <motion.button
              type="submit"
              className="w-full md:w-1/2 bg-orange-600 text-white font-semibold py-4 rounded-lg hover:bg-orange-700 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </div>
        </form>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">Or reach us directly:</p>
          <div className="flex justify-center space-x-4 mt-4">
            <motion.a
              href="mailto:support@example.com"
              className="text-gray-700 hover:text-orange-600 transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <FaEnvelope className="w-8 h-8" />
            </motion.a>
            <motion.a
              href="tel:+201099161140"
              className="text-gray-700 hover:text-orange-600 transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <FaPhoneAlt className="w-8 h-8" />
            </motion.a>
          </div>
          <p className="text-lg text-gray-700 font-bold mt-2">
            Email: support@example.com
          </p>
          <p className="text-lg text-gray-700 font-bold mt-2">
            Phone: +123 456 7890
          </p>
        </div>
      </div>
    </div>
  );
}

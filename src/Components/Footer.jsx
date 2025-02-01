import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Images } from "../Constants";

const Footer = () => {
  return (
    <>
      {/* Main Footer */}
      <footer className="bg-gray-100 text-black py-12 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8 text-center md:text-left">
          
          {/* Logo & Social Links */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Link to="/" className="mb-4">
              <div className="w-[200px] mx-auto md:mx-0">
                <img src={Images.Logo} alt="Logo" />
                <h1 className="font-bold text-xl text-black pl-5">Raisers Academy</h1>
              </div>
            </Link>

            <div className="flex gap-4 mt-2">
            </div>
          </div>

          {/* Services Section */}
          <div className="space-y-2">
            <h3 className="font-bold text-xl mb-4 text-black-200">Services</h3>
            {["Programs", "Coaches", "Facilities", "Events"].map((item) => (
              <a key={item} className="block text-black hover:text-black-700 hover:font-bold transition-all cursor-pointer">{item}</a>

            ))}
          </div>

          {/* Company Section */}
          <div className="space-y-2">
            <h3 className="font-bold text-xl mb-4 text-black-400">Company</h3>
            {["Home", "About us", "Campus", "Blog"].map((item) => (
              <a key={item} className="block text-black hover:text-black-700 hover:font-bold transition-all cursor-pointer">{item}</a>
            ))}
          </div>

          {/* Contact Section */}
          <div className="space-y-3">
            <h3 className="font-bold text-xl mb-4 text-black-400">Contact</h3>
            <div className="flex gap-2 items-center justify-center md:justify-start">
              <FaMapMarkerAlt className="text-blue-600" /> 
              <p className="block text-black hover:text-black-700 hover:font-bold transition-all cursor-pointer">A-169, Sec-11, Gurugram 122001</p>
            </div>
            <div className="flex gap-2 items-center justify-center md:justify-start">
              <FaPhoneAlt className="text-green-700" /> 
              <p className="block text-black hover:text-black-700 hover:font-bold transition-all cursor-pointer">9625789828 / 7042605095</p>
            </div>
            <div className="flex gap-2 items-center justify-center md:justify-start">
              <FaEnvelope className="text-red-600" /> 
              <p className="block text-black hover:text-black-700 hover:font-bold transition-all cursor-pointer"><a href="raisersacademy01@gmail.com">raisersacademy@gmail.com</a></p>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="font-bold text-xl mb-4 text-black-400">Newsletter</h3>
            <div className="max-w-xs mx-auto md:mx-0">
              <div className="relative">
                <p className="block text-black hover:text-black-700 font-bold transition-all cursor-pointer">Enter your Email</p>
                <br />
                <input
                  type="email"
                  placeholder="Email-ID"
                  className="w-full px-4 py-3 rounded-lg bg-black-800 border border-black focus:outline-none focus:border-ambar-400"
                />
                <button className="absolute right-2 top-14 bg-red-700 text-white px-4 py-1 rounded-md hover:bg-amber-300 transition-colors font-semibold">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Copyright Footer */}
      <footer className="bg-amber-950 text-amber-400 text-center py-4">
        <p className="font-medium">
          © 2024 Raisers Academy. All rights reserved
        </p>
      </footer>
    </>
  );
};

export default Footer;
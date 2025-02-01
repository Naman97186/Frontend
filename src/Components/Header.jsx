import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { Images } from "../Constants";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); 

  return (
    <header className="fixed top-3 left-3 right-3 z-10 container mx-auto px-5 py-2 flex justify-between items-center bg-white shadow-md rounded-xl">
      <div className="flex items-center gap-3">
        <img src={Images.Logo} alt="Logo" className="h-20 w-20 object-contain" />
        <h1 className="text-2xl font-bold text-gray-800">Raisers Academy</h1>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-x-9 items-center">
        <ul className="flex gap-x-5 text-gray-700 font-medium">
          <li><a href="/" className="hover:text-blue-500 font-bold">Home</a></li>
          <li><a href="/" className="hover:text-blue-500 font-bold">Instructors</a></li>
          <li><a href="/" className="hover:text-blue-500 font-bold">Classes</a></li>
          <li><a href="/" className="hover:text-blue-500 font-bold">Events</a></li>
          <li><a href="/" className="hover:text-blue-500 font-bold">Contact Us</a></li>
        </ul>
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-gray-500" 
          onClick={() => navigate("/login")} >
          Sign In
        </button>
      </nav>

      {/* Mobile Menu Toggle */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute top-12 left-0 w-full bg-white shadow-md md:hidden rounded-b-xl">
          <ul className="flex flex-col gap-4 p-5 text-gray-700 font-medium">
            <li><a href="/" className="hover:text-blue-500 font-bold">Home</a></li>
            <li><a href="/" className="hover:text-blue-500 font-bold">Instructors</a></li>
            <li><a href="/" className="hover:text-blue-500 font-bold">Classes</a></li>
            <li><a href="/" className="hover:text-blue-500 font-bold">Events</a></li>
            <li><a href="/" className="hover:text-blue-500 font-bold">Contact Us</a></li>
            <li>
              <button 
                className="bg-blue-500 text-white w-full py-2 rounded-md hover:bg-blue-600" 
                onClick={() => navigate("../Pages/Login/Login.jsx")} >
                Sign In
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;

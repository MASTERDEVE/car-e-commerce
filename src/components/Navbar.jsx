import React from "react";                                         
import { Heart , Search , ShoppingBag , User} from 'lucide-react';
import { useNavigate } from "react-router-dom";


const Navbar = () => {

  const navigate= useNavigate();  


  return (
    <nav className="bg-gray-500 shadow-md px-10 py-5 flex justify-between items-center">
      <div >
      
      <a className="text-xl font-bold text-white hover:text-yellow-200" href="/">SHOPSWIFT</a> 
      
      </div>
      <ul className="hidden md:flex space-x-8 text-white">
        <a href="/buy"
        className="hover:text-yellow-200 cursor-pointer">Buy a car</a>
        <li  onClick={() => navigate('/rent')}
         className="hover:text-yellow-200  cursor-pointer">Rent a car</li>
        <li  onClick={() => navigate('/financing')}
         className="hover:text-yellow-200  cursor-pointer">Financing</li>
        <li  onClick={() => navigate('/aboutus')}
        className="hover:text-yellow-200 cursor-pointer">About Us</li>
      </ul>
      <div className="hidden md:flex space-x-5 text-white">
      <button type="button" className="p-2 ">
      <Search className="w-5 h-5 text-white hover:text-yellow-200" />
      </button>
      <button className="p-2">
      <Heart className="w-5 h-5 text-white hover:text-yellow-200" />
      </button>
      <button className="p-2">
      <ShoppingBag className="w-5 h-5 text-white hover:text-yellow-200" />
      </button>
      <button className="p-2">
      <User className="w-5 h-5 text-white hover:text-yellow-200" />
      </button>
      </div>
    </nav>
  );
};

export default Navbar;



import React from 'react';
import { assets } from '../assets/assets';
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-gray-100 py-10 px-6 md:px-16 text-gray-700">
      <div className="flex flex-col md:grid md:grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm">
        {/* Logo & Description */}
        <div>
          <p className="text-2xl font-semibold text-gray-900 mb-4">Elite Ecommerce</p>
          <p className="w-full md:w-2/3 text-gray-600 leading-relaxed">
          EliteCommerceSolutions is a cutting-edge e-commerce web application designed to redefine online shopping with a seamless, user-friendly experience. Built with the MERN stack, it offers a highly scalable and secure platform for businesses, ensuring smooth transactions, intuitive navigation, and an engaging shopping journey. With a focus on innovation and efficiency, EliteCommerceSolutions empowers businesses to grow while providing customers with a hassle-free and dynamic shopping experience.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <p className="text-xl font-medium text-gray-900 mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li className="hover:text-black cursor-pointer">Home</li>
            <li className="hover:text-black cursor-pointer">About Us</li>
            <li className="hover:text-black cursor-pointer">Delivery</li>
            <li className="hover:text-black cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Contact Details */}
        <div>
          <p className="text-xl font-medium text-gray-900 mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li className="flex items-center gap-2"><FaPhoneAlt /> 8379804058</li>
            <li className="flex items-center gap-2"><FaEnvelope /> elitecommercesolutions05@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center space-x-4 mb-6">
        <a href="#" className="text-gray-700 hover:text-black text-lg"><FaFacebookF /></a>
        <a href="#" className="text-gray-700 hover:text-black text-lg"><FaTwitter /></a>
        <a href="#" className="text-gray-700 hover:text-black text-lg"><FaInstagram /></a>
      </div>

      {/* Footer Bottom */}
      <div className="text-center">
        <hr className="border-gray-300 mb-4" />
        <p className="text-sm">Copyright 2025 @ EliteCommerce Solutions - All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;

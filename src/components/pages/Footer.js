// Footer.js
import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-200 py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Foodies</h2>
          <p className="text-gray-400">Fresh flavors. Happy tummy.</p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-semibold mb-3 text-white">Explore</h3>
          <ul className="space-y-2">
            <li><Link to="/menu" className="hover:text-white">Menu</Link></li>
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-3 text-white">Contact</h3>
          <p className="text-gray-400"><a href="tel:+911234567890" className="hover:text-white">+917990462068</a></p>
          <p className="text-gray-400"><a href="mailto:hello@foodies.in" className="hover:text-white">dhrutandel508@gmail.com</a></p>
          <p className="text-gray-400">Daman and Diu, India</p>
        </div>

        {/* Subscribe + Social */}
        <div>
          <h3 className="font-semibold mb-3 text-white">Join Our Newsletter</h3>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-fullpx-3 py-2 rounded-l bg-gray-800 border border-gray-700 text-gray-100 p-5"
            />
            <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-r text-white border-radius ml-2">
              Send
            </button>
          </form>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="p-2 bg-gray-800 rounded hover:bg-red-500"><FaFacebookF /></a>
            <a href="#" className="p-2 bg-gray-800 rounded hover:bg-red-500"><FaInstagram /></a>
            <a href="#" className="p-2 bg-gray-800 rounded hover:bg-red-500"><FaTwitter /></a>
            <a href="#" className="p-2 bg-gray-800 rounded hover:bg-red-500"><FaYoutube /></a>
          </div>
        </div>

      </div>

      {/* Bottom Legal Row */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
        <p>© {year} Foodies. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-white">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
}

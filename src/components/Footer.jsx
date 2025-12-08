import React from 'react'
import { FiFacebook,FiTwitter,FiInstagram , FiYoutube   } from "react-icons/fi";
const Footer = () => {
  return (
    <footer className="bg-gray-300 text-white py-10 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h4 className="text-xl font-semibold mb-2 pb-2 text-[#3A643B]">Get In Touch</h4>            
            <p className="text-[var(--clr-neutral-900)]"><a href="mailto:info@example.com" className="hover:text-white transition duration-300 text-gray-300">info@example.com</a></p>
            <p className="text-[var(--clr-neutral-900)]">
              We'd love to hear from you! Reach out to us via phone or email for any questions.
            </p>
            <p className="text-[var(--clr-neutral-900)]">+91 9826352321</p>
            

            <div>
              <div className="flex space-x-4">
                <a href="#" className="social-icon w-10 h-10 flex items-center justify-center rounded-full hover:bg-blue-600 bg-[#3A643B] transition duration-300">
                  <FiFacebook className='stroke-white'/>
                </a>
                <a href="#" className="social-icon w-10 h-10 flex items-center justify-center rounded-full hover:bg-sky-400 bg-[#3A643B] transition duration-300">
                  <FiTwitter className='stroke-white'/>
                </a>
                <a href="#" className="social-icon w-10 h-10 flex items-center justify-center rounded-full hover:bg-pink-600 bg-[#3A643B] transition duration-300">
                  <FiInstagram className='stroke-white'/>
                </a>
                <a href="#" className="social-icon w-10 h-10 flex items-center justify-center rounded-full hover:bg-blue-700 bg-[#3A643B] transition duration-300">
                  <FiYoutube className='stroke-white'/>
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-8">

            <div>
              <h4 className="text-xl font-semibold mb-2 pb-2 text-[#3A643B]">Information</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Terms & Conditions</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">FAQ</a></li>
              </ul>
            </div>

            

          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-semibold mb-2 pb-2 text-[#3A643B]">Subscribe to our Newsletter</h4>
            <p className="text-[var(--clr-neutral-900)]">
              Get the latest news and updates delivered straight to your inbox.
            </p>
            <form className="flex items-center space-x-2">

              <input type="email"
                placeholder="Enter your email"
                required
                className="flex-1 p-3 border border-gray-300 rounded-full 
                          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>

              <button type="submit"
                className="bg-blue-600 text-white font-semibold py-3 px-6 
                           rounded-full hover:bg-blue-700 transition duration-300 shadow-md">
                Subscribe
              </button>
            </form>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
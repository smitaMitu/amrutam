// import { FaPhoneAlt } from "react-icons/fa";
// import { LuPhone } from "react-icons/lu";
// import "../styles/Navbar.css";
// import Logo from "../assets/logo.png";
// import { FaBars } from "react-icons/fa6";
// import { BsWallet2 } from "react-icons/bs";
// import { IoCartOutline } from "react-icons/io5";
// import Menu from "./Menu";
// const Navbar = () => {
//   return (
//     <div className='navbar w-full sticky md:relative top-0 bg-[var(--bg-pink)] z-10'>
//       <div className='navbar-top hidden md:flex'>
//         <div className='container flex justify-end gap-[60px] items-center py-2! p-0'>
//           <p className="text-white text-[20px]">Your first 5 minutes instant call is free.</p>
//           <button className="nav-top-btn"><FaPhoneAlt /> Try Instant Free call Now</button>
//         </div>
//       </div>
//       <div className="flex justify-between md:justify-center py-5 px-3 items-center relative">
//         <div className="flex text-[#3A643C] text-[24px] md:hidden">
//           <FaBars />
//         </div>
//         <p className="text-[#3A643C] text-[20px] md:flex items-center absolute left-4 top-7 gap-2 hidden "><LuPhone />+91 9826352321</p>
//         <div className="md:m-auto w-full flex justify-end items-center md:justify-center">
//           <img src={Logo} alt="Amrutam" className="w-[130px] me-2 md:me-0 md:w-auto" />
//           <div className="md:hidden flex gap-1 items-center">
//             <div className="w-7 flex justify-center"><BsWallet2 className="text-xl text-[#3A643C]" /></div>
//             <div className="w-7 flex justify-center"><IoCartOutline className="text-xl text-[#3A643C]" /></div>
//             <button className="rounded-full">Login</button>
//           </div>
//         </div>
//       </div>
//       <div className="w-full hidden md:flex pb-3">
//         <div className="container flex justify-end">
//           <Menu />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Navbar

import React, { useState } from 'react'; // 1. Import useState
import { FaPhoneAlt } from "react-icons/fa";
import { LuPhone } from "react-icons/lu";
import "../styles/Navbar.css";
import Logo from "../assets/logo.png";
import { FaBars } from "react-icons/fa6";
import { BsWallet2 } from "react-icons/bs";
import { IoCartOutline } from "react-icons/io5";
import Menu from "./Menu"; // Assuming Menu is your main desktop navigation

// Import an icon for closing the menu (optional, but good practice)
import { FaTimes } from "react-icons/fa"; 

const Navbar = () => {
    // 2. Initialize state for mobile menu visibility
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // 3. Toggle function
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='navbar w-full sticky md:relative top-0 bg-[var(--bg-pink)] z-10'>
            
            {/* 1. Navbar Top - Hidden on Mobile */}
            <div className='navbar-top hidden md:flex'>
                <div className='container flex justify-end gap-[60px] items-center py-2! p-0'>
                    <p className="text-white text-[20px]">Your first 5 minutes instant call is free.</p>
                    <button className="nav-top-btn"><FaPhoneAlt /> Try Instant Free call Now</button>
                </div>
            </div>

            {/* 2. Main Navigation Row */}
            <div className="flex justify-between md:justify-center py-5 px-3 items-center relative">
                
                {/* Mobile Menu Button - Visible ONLY on mobile (md:hidden) */}
                <div 
                    className="flex text-[#3A643C] text-[24px] md:hidden cursor-pointer"
                    onClick={toggleMenu} // 4. Add click handler
                >
                    {/* Show FaTimes (X) when menu is open, otherwise show FaBars */}
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </div>

                {/* Phone Number - Hidden on Mobile, Fixed Position on Desktop Left */}
                <p className="text-[#3A643C] text-[20px] md:flex items-center absolute left-4 top-7 gap-2 hidden ">
                    <LuPhone />+91 9826352321
                </p>

                {/* Logo and Mobile Icons */}
                <div className="md:m-auto w-full flex justify-end items-center md:justify-center">
                    <img src={Logo} alt="Amrutam" className="w-[130px] me-2 md:me-0 md:w-auto" />
                    
                    {/* Mobile Icons - Hidden on Desktop */}
                    <div className="md:hidden flex gap-1 items-center">
                        <div className="w-7 flex justify-center"><BsWallet2 className="text-xl text-[#3A643C]" /></div>
                        <div className="w-7 flex justify-center"><IoCartOutline className="text-xl text-[#3A643C]" /></div>
                        <button className="rounded-full">Login</button>
                    </div>
                </div>
            </div>

            {/* 5. Mobile Menu (Conditional Rendering) */}
            {/* Renders ONLY on small screens (md:hidden) when isMenuOpen is true */}
            {isMenuOpen && (
                <div className="md:hidden w-full bg-white shadow-xl absolute top-full left-0 min-h-[100dvh]">
                    {/* You can either render your desktop Menu component here, 
                        or a simpler mobile-specific menu structure */}
                    <Menu isMobile={true} />
                    
                    {/* Example of mobile-specific content if Menu component isn't suitable */}
                    {/* <div className="p-4 border-t">
                        <ul className="space-y-2">
                            <li><a href="#" className="block py-2 text-gray-800">Home</a></li>
                            <li><a href="#" className="block py-2 text-gray-800">Shop</a></li>
                            <li><a href="#" className="block py-2 text-gray-800">Blog</a></li>
                            <li className="md:hidden"><a href="#" className="block py-2 text-gray-800">Login / Sign Up</a></li>
                        </ul>
                    </div> */}
                </div>
            )}

            {/* 6. Desktop Menu - Hidden on Mobile */}
            <div className="w-full hidden md:flex pb-3">
                <div className="container flex justify-end">
                    <Menu />
                </div>
            </div>
            
        </div>
    )
}

export default Navbar;
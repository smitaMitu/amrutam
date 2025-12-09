import React from 'react'
import {Link, NavLink } from 'react-router-dom'
import Wallet from "../assets/wallet.svg"
import Cart from "../assets/cart.svg"
import Bell from "../assets/bell.svg"
import Nature from "../assets/nature.svg"
import Down from "../assets/down.svg"
const Menu = () => {
  return (
    <>
    <div className='menu flex gap-8 capitalize me-9 items-start p-5 md:items-center flex-col md:flex-row' >
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/find-doctors"}>find doctors</NavLink>
        <NavLink to={"/faq"}>FAQ</NavLink>
        <NavLink to={"/shop"}>Shop</NavLink>
        <NavLink to={"/forum"}>Forum</NavLink>
        <NavLink to={"/about"}>About Us</NavLink>
    </div>
    <div  className='md:flex justify-center items-center hidden '>
        <Link className='w-[64px] h-[36px] relative icon-link'>
        <span>₹2</span>
            <img src={Wallet} alt='' />
        </Link>
        <Link className='w-[64px] h-[36px] items-center icon-link'>
        <span>1</span>
            <img src={Cart} alt=''/>
        </Link>
        <Link className='w-[64px] h-[36px] items-center icon-link'>
            <img src={Bell} alt=''/>
        </Link>
        <Link className='w-[64px] h-[36px] items-center icon-link'>
            <img src={Nature} alt=''/>
        </Link>
        <Link className='w-[36px] h-[36px] items-center icon-link'>
            <img src={Down} alt=''/>
        </Link>
    </div>
    </>
  )
}

export default Menu
import React from 'react'
import Products from "../../data/Products.json"
import { Link } from 'react-router-dom'
import Medi from "../../assets/medi.svg";
import Edu from "../../assets/edu.svg"
const ExpertCard = ({ item }) => {
  const { id, pic, name, designation, education, experience, Specialist } = item
  return (
    <Link to={`/forum/${id}`}>
      <div className=' text-center relative mt-0 
      bg-[#FFF7E2] m-[20px] mb-0 rounded-4xl rounded-b-none'>
        <div className='py-[30px] px-[20px] flex flex-col justify-center'>
          <div className='w-[150px] h-[150px] m-auto mb-7 rounded-full overflow-hidden relative'>
            <img src={`/src/assets/${pic}`} alt={name} className='mb-4' />
          </div>

          <p className='text-black text-[20px] font-bold mb-1'>{name}</p>
          <p className='text-[#838383] text-[15px] font-light mb-1'><span>{designation}</span><span>{education}</span></p>
          <p className='text-[var(--clr-neutral-1000)] text-[15px] font-light flex items-center justify-center mb-3'><img src={Edu} alt="" className='inline-flex me-1'/> {experience} years of experience</p>

          <p className='text-[#3A643B] m-auto bg-[#3A643B1F] px-5 rounded-2xl flex '><img src={Medi} alt="" className='inline-flex me-1'/>{Specialist}</p>
        </div>
        <button className='mt-0 w-full rounded-t-none! rounded-4xl! py-3!'>Book a session</button>
      </div>

    </Link>
  )
}

export default ExpertCard
import React from 'react'
import H2 from '../H2'
import { FaStar, FaPlus } from "react-icons/fa6";
const Review = () => {
  return (
    <div className='my-[50px]'>
        <H2 text="Reviews and Ratings"/>
        <div className='flex flex-col md:flex-row md:justify-between justify-center text-center items-start gap-4'>
            <div className='bg-[#FDEAD2] rounded-xl md:w-[300px] md:h-[124px] flex gap-1.5 items-center p-4'>
                <p className='text-[var(--clr-neutral-1000)] text-[2rem] font-bold me-3'>50</p>
                <div >
                    <div className='flex justify-start gap-1 items-center'>
                        <FaStar className='text-[var(--accent-orange-100)] text-lg' />
                        <FaStar className='text-[var(--accent-orange-100)] text-lg' />
                        <FaStar className='text-[var(--accent-orange-100)] text-lg' />
                        <FaStar className='text-[var(--accent-orange-100)] text-lg' />
                        <FaStar className='text-[var(--accent-orange-100)] text-lg' />
                        
                    </div>
                    <span className='text-0.5 text-[14px] text-[var(--clr-neutral-800)] m-0'>Based on 20 reviews</span>
                </div>
            </div>
            <div className='w-full md:w-auto flex flex-col md:flex-row gap-3 items-center'>
                <button className='bg-transparent! text-[var(--clr-neutral-900)]! text-[14px]! rounded-lg! shadow-[0px_4px_6px_rgba(0,0,0,0.25)] leading-[58px] w-full md:w-[181px] p-0!'>See More Reviews</button>
                <button className='bg-transparent! text-[var(--clr-neutral-900)]! text-[14px]! rounded-lg! shadow-[0px_4px_6px_rgba(0,0,0,0.25)] leading-[58px] w-full md:w-[181px] p-0!'>Write a review</button>
            </div>
        </div>
    </div>
  )
}

export default Review
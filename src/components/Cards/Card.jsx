import React from 'react'
import { Link } from 'react-router-dom';
import { FaStar , FaPlus} from "react-icons/fa6";

const Card = ({item}) => {
  const {id,pic,title,price, quantity,reviews} = item
  return (
    <Link to={`/forum/${id}`} className='flex flex-col justify-center text-center p-2 relative'>
      <img src={`/src/assets/${pic}`} alt={title} className='mb-4'/>
      <div className='p-2 '>
        <p className='text-[var(--clr-neutral-1000)] text-1 leading'>{title}</p>
        <p className='text-[var(--clr-neutral-1000)] font-light text-[14px] my-0 '>
          <span className='font-sans'>₹</span>{price}&nbsp;
          <span className='text-[var(--clr-neutral-1000)] text-2xl font-light text-0.5 py-2'>.</span> 
          &nbsp;
          {quantity}</p>
        <div className='flex justify-center gap-1 items-center'>
          <FaStar className='text-[var(--accent-orange-100)] text-sm'/>
          <FaStar className='text-[var(--accent-orange-100)] text-sm'/>
          <FaStar className='text-[var(--accent-orange-100)] text-sm'/>
          <FaStar className='text-[var(--accent-orange-100)] text-sm'/>
          <FaStar className='text-[var(--accent-orange-100)] text-sm'/> 
          <span className='text-[var(--clr-neutral-1000)] font-light text-0.5 py-2 text-[14px]'>({reviews})</span>
        </div>
        <div 
        className='absolute flex justify-center items-center w-9 h-9 bg-[var(--clr-primary-100)] text-white right-3 bottom-4 rounded-lg'>
          <FaPlus className='text-white text-xl' />
        </div>
      </div>
      

    </Link>
  )
}

export default Card
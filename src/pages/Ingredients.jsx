import React from 'react'
import SearchSection from '../components/SearchSection'
import AppSection from '../components/AppSection'
import IngredientInfo from '../components/IngredientDetail/IngredientInfo'
import Info from '../components/IngredientDetail/Info'
import { useNavigate } from 'react-router-dom'
import { MdKeyboardArrowLeft } from "react-icons/md";
const Ingredients = () => {
  const navigate = useNavigate()
  return (
    <main >
      <SearchSection title={"shop"} />
      <div className='container'>
        <div className='w-full mb-4'>
          <button className='bg-transparent! border-[#3A643B]! rounded-xl! text-[#3A643B]! flex items-center' onClick={() =>navigate(-1)}>
           <MdKeyboardArrowLeft/> Back
            </button>
        </div>
        <div className='flex flex-col md:flex-row gap-6 max-w-full'>
            <IngredientInfo/>
            <Info />
        </div>
      </div>
        
      <AppSection/>

    </main>
  )
}

export default Ingredients
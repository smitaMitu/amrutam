import React from 'react'
import Ingredient from '../../assets/ingred2.png'
const IngredientInfo = () => {
  return (
    <div className='flex flex-col gap-2 md:gap-4 ingredients-info md:sticky md:top-[50%] '>
        <div className='md:w-[503px] md:h-[503px] rounded-xl overflow-hidden object-fill md:mb-3'>
            <img src={Ingredient} alt='' />
        </div>
        {/* <h2 className='text-[var(--clr-neutral-1000)] font-semibold text-[36px] font-sans'>Gokhru</h2>
        <p className='text-[18px] text-[var(--clr-neutral-900)] leading-[30px]'>Also known as Tribulus, it's used to prevent infections and manage diabetes. It's known for its potential to boost testosterone levels and improve reproductive health</p> */}
    </div>
  )
}

export default IngredientInfo
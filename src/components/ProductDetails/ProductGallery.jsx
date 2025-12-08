import React from 'react'
import ProductImg from "../../assets/ProductImg.png"
const ProductGallery = () => {
  return (
    <div className='w-full flex flex-col gap-4'>
        <div className='w-full md:aspect-square rounded-2xl overflow-hidden'>
            <img src={ProductImg} alt='' className='w-auto'/>
        </div>
        <div className='w-full flex gap-6'>
            <div className='aspect-square rounded-2xl overflow-hidden opacity-100'>
                <img src={ProductImg} alt='' className='aspect-square' />
            </div>
            <div className='aspect-square rounded-2xl overflow-hidden opacity-50'>
                <img src={ProductImg} alt='' className='aspect-square'/>
            </div>
            <div className='aspect-square rounded-2xl overflow-hidden opacity-50'>
                <img src={ProductImg} alt='' className='aspect-square'/>
            </div>
           
        </div>
    </div>
  )
}

export default ProductGallery
import React, { useEffect, useState } from 'react'
import ProductGallery from './ProductGallery'
import { FaStar, FaPlus } from "react-icons/fa6";
import Icon from "../../assets/icon.gif"
import { Link } from 'react-router-dom';
import IngredImg from "../../assets/ingred1.png"
import { RiArrowRightSLine } from "react-icons/ri";
import VideoImg from "../../assets/video.png";
import { FiPlus , FiMinus} from "react-icons/fi";
const Ingredient = () => {
    return (
        <Link to={"/ingredients"} className='flex gap-2 bg-[#FDEAD2] p-2 rounded-xl items-center'>
            <img src={IngredImg} alt='' className='shrink-0 w-[54px] h-[54px]' />
            <div className='grid'>
                <p className='text-[18px] text-[var(--clr-neutral-900)] font-bold'>Shatavar</p>
                <p className='text-[14px] text-[var(--clr-neutral-800)] leading-5'>Naturally enhances brain and relieves pain</p>
            </div>
            <div ><RiArrowRightSLine /></div>
        </Link>
    )
}
const Heading = ({ heading, link, icon }) => {
    return (
        <>
            <div className='flex items-center justify-between'>
                <div className='flex items-center justify-start'>
                    {icon && (<img src={Icon} alt='' className='me-2 w-[40px]' />)}
                    <p className='font-bold text-xl'>{heading}</p>
                </div>
                {
                    link && <Link to={"#"} className='text-sm text-[#3A643B]!'>{link}</Link>
                }

            </div>
        </>
    )
}
const ProductDetail = ({ detail }) => {
    const { title, reviews, price } = detail || {};
    const [count, setCount] = useState(1);
    const decrement = () => {
       if(count === 1) return 
       setCount(count=> count-1)
    }
    const increment = () => {
        setCount(count => count+1)
    }
    useEffect(() => {
        Ingredient
    }, [detail])
    return (
        <div className='grid md:grid-cols-2 gap-6 max-w-full'>
            <ProductGallery />
            <div className='pt-2'>
                <p className='text-[22px]'>{title}</p>
                <div className='flex justify-start gap-1 items-center'>
                    <FaStar className='text-[var(--accent-orange-100)] text-sm' />
                    <FaStar className='text-[var(--accent-orange-100)] text-sm' />
                    <FaStar className='text-[var(--accent-orange-100)] text-sm' />
                    <FaStar className='text-[var(--accent-orange-100)] text-sm' />
                    <FaStar className='text-[var(--accent-orange-100)] text-sm' />
                    <span className=' font-medium text-0.5 py-2 text-[14px] text-[var(--clr-neutral-800)]'>({reviews} reviews)</span>
                </div>
                <p className='text-[var(--clr-neutral-1000)] font-light text-[20px] font-medium my-0 '>
                    <span className='font-sans'>₹ </span>{price}</p>
                <div className='flex gap-2 my-4'>
                    <div className='inline-flex h-12 items-center justify-center bg-[#EAF2EA] text-[#000000] text-[18px] border border-[#9DB29D] rounded-lg px-4'>200ml</div> 
                    <div className='inline-flex h-12 items-center justify-center bg-[#EAF2EA] text-[#000000] text-[18px] border-[#9DB29D] rounded-lg p-3'>100ml</div> 
                    <div className='inline-flex h-12 items-center justify-center bg-[#EAF2EA] text-[#000000] text-[18px] border-[#9DB29D] rounded-lg p-3 opacity-50'>Pack of 3</div>
                </div>
                <div className='py-3 flex gap-3 mb-4'>
                    <div className='flex gap-2 items-center w-[50%] shrink-0 justify-between border p-3 rounded-xl border-[#9DB29D]'> 
                        <div className='cursor-pointer' onClick={() => decrement()}><FiMinus/></div> 
                        <span className='block w-[150px'>{count}</span>  
                        <div className='cursor-pointer' onClick={() =>increment()}><FiPlus/></div>
                        </div>
                    <button className='w-[50%]! shrink-0'>Add To Cart</button>
                </div>
                <p className='text-[var(--clr-neutral-900)]'>Amrutam's Kuntal Care Do-It-Yourself Hair Spa is an ayurvedic marvel filled to the brim with revitalizing herbs and essential oils like Eucalyptus oil, Triphala, Balchhad and Bhringraj.
                    These Ayurvedic ingredients when fused together make a potent dollop that nourishes dry and frizzy hair making it soft and bouncy!
                    This spa treatment revitalizes the roots, promotes growth, provides shine, coats hair with a moisturizing layer and is the best stress reliever!</p>
                <p className='text-[var(--clr-neutral-900)] mb-8'>It's time to bring spa home and unwind.</p>

                <Heading heading={"Product Highlights"} icon />
                <div className='w-full flex flex-wrap md:flex-nowrap justify-between my-3 gap-2.5 mb-7 overflow-auto'>
                    {[
                        "Helps with Dry, Frizzy Hair",
                        "Relaxes the scalp, improves hair health",
                        "Makes the hair smooth and shiny",
                        "Reduces hairfall, repairs damaged hair"
                    ].map((text, i) => (
                        <div
                            key={i}
                            className='flex  rounded-xl w-[48%] h-[204px] md:w-[149px] md:h-[204px] p-3 bg-[#FDEAD2] items-end'
                        >
                            <p className='text-[var(--clr-neutral-900)] text-[14px] leading-5'>
                                {text}
                            </p>
                        </div>
                    ))}
                </div>

                <Heading heading={"Key Ingredients"} icon link={"View All Ingredients"} />
                <div className='grid md:grid-cols-2 md:grid-rows-2 gap-4 md:gap-2 items-center mb-8'>
                    <Ingredient />
                    <Ingredient />
                    <Ingredient />
                    <Ingredient />
                </div>
                <Heading heading={"How to use"} />
                <div className='flex rounded-xl p-3 py-5 bg-[#FDEAD2] items-end mt-2 mb-8' >
                    <p className='text-[var(--clr-neutral-900)] text-[14px] leading-5'>
                        Mix one or tow tablespoons of Herbal Child Care Malt with milk or 100-200ml warm water and then consume twice a day or consult our Ayurvedic Expert to find the right Ayurvedic recipe for you.
                    </p>
                </div>
                <Heading heading={"General Instructions"} />
                <div className='flex rounded-xl p-3 py-5 bg-[#FDEAD2] items-end mt-2 mb-8' >
                    <p className='text-[var(--clr-neutral-900)] text-[14px] leading-5'>
                        Store in a cool and dry palce away from direct sunlight. Not advisable for diabetic patients
                    </p>
                </div>
                <Heading heading={"Commonly Asked Questions"} />
                <div className='flex flex-col rounded-xl p-3 py-5 bg-[#FDEAD2] items-end mt-2 mb-2' >
                    <p className='text-[var(--clr-neutral-900)] text-[14px] leading-5 font-bold'>Who should be using Amrutam Child Care Malt | Herbal Supplement for Child Care</p>
                    <p className='text-[var(--clr-neutral-900)] text-[14px] leading-5'>
                        Store in a cool and dry palce away from direct sunlight. Not advisable for diabetic patients
                    </p>
                </div>
                <div className='flex flex-col rounded-xl p-3 py-5 bg-[#FDEAD2] items-end mt-2 mb-8' >
                    <p className='text-[var(--clr-neutral-900)] text-[14px] leading-5 font-bold'>Who should be using Amrutam Child Care Malt | Herbal Supplement for Child Care</p>
                    <p className='text-[var(--clr-neutral-900)] text-[14px] leading-5'>
                        Store in a cool and dry palce away from direct sunlight. Not advisable for diabetic patients
                    </p>
                </div>
                <p className='text-[var(--clr-neutral-900)] text-[16px] font-medium mb-3'>Trust the voice</p>
                <img src={VideoImg} alt='' />
            </div>
        </div>
    )
}

export default ProductDetail
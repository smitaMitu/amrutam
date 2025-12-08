import React, { useContext, useEffect } from 'react'
import SearchSection from '../components/SearchSection'
import { useParams } from 'react-router-dom'
import { Context } from '../components/Context/Context'
import ProductDetail from '../components/ProductDetails/ProductDetail'
import Review from '../components/ProductDetails/Review'
import Products from '../components/Products'
import H2 from '../components/H2'
import Carousel from '../components/Carousel/Carousel'
import ExpertCard from '../components/Cards/ExpertCard'
import { RiArrowRightSLine } from "react-icons/ri";
import AppSection from '../components/AppSection'
const Forum = () => {
  const { id } = useParams();
  const { getProductById, productDetail, experts } = useContext(Context);
 
  useEffect(() => {
    getProductById(id)
  }, [getProductById, id, productDetail])
  return (
    <main >
      <SearchSection title={"store"} />
      <div className='container'>
        {
          productDetail && <ProductDetail detail={productDetail} />
        }
        <Review />
        <Products />
      </div>
      <div className='bg-white py-9 '>
        <H2 text={"Meet our Experts"} />

        <div className='container max-w-[1050px]'>
          <Carousel dots={true}>
            {
              experts && experts.map(expert => <ExpertCard item={expert} />)
            }
          </Carousel>
          <button className='bg-[#DBE3DC63]! text-[#3A643B]! border-[#3A643B]! border-xs rounded-lg! flex items-center justify-center m-auto mt-[50px]'>Find more experts <RiArrowRightSLine/></button>
        </div>
      </div>
      <AppSection/>

    </main>
  )
}

export default Forum
import  { useContext } from 'react'
import SearchSection from '../components/SearchSection'
// import Data from "../data/Products.json"
import Carousel from '../components/Carousel/Carousel'
import { Context } from '../components/Context/Context'
import Card from '../components/Cards/Card'
import AppSection from '../components/AppSection'
const Shop = () => {
    const {products} = useContext(Context); 

  return (
    <main >

      <SearchSection title={"shop"} />
      <div className='container py-[2rem] mb-4'>
        <h2 className='text-black text-[20px] mb-5 font-medium'>Summer Collection</h2>
         <Carousel dots={false}>
          {products?.map((item) => (
            <Card item={item} key={item.id} className="px-2"/>
        ))}
        </Carousel>
      </div>
      
      <div className='container py-[2rem] mb-4'>
        <h2 className='text-black text-[20px] mb-5 font-medium'>Summer Collection</h2>
        <Carousel >
          {products?.map((item) => (
            <Card item={item} key={item.id} className="px-2"/>
        ))}
        </Carousel>
      </div>
      <AppSection />
    </main>
  )
}

export default Shop
import React, { useContext } from 'react'
import H2 from './H2'
import { Context } from './Context/Context'
import Card from './Cards/Card';
const Products = () => {
    const {products} = useContext(Context);
  return (
    <div>
        <H2 text={"People has also bought"}/>
        <div className='grid md:grid-cols-3 gap-2'>
            {
                products && products.slice(0,3).map(product =>  <Card item={product}/>)
            }
        </div>
    </div>
  )
}

export default Products